---
title: "Patterns | Reference"
description: "How do patterns work?"
sidebar: false
---

# Patterns

A pattern defines what interactions and data are exposed and collected by an [app](/reference/apps/). Pattern definition is a YAML document that consists of two parts: a schema and a descriptor. The schema is a [JSON Schema](https://json-schema.org/) document that defines the information to be captured by an app. The descriptor contains additional information that describes how the data is collected. This includes customization of UI components that represent different parts of the schema (e.g. component type, placeholders and more) as well as customization of the app appearance itself.

A pattern with a `null` document indicates that no information should be collected.

A schema part of a pattern document is used to validate a [AppData](/references/app-data/) document when created. This happens when a [Event](/references/events/) or [Action](/references/actions/) is created.


## Object hierarchy

Routegy requires all pattern schemas to be objects with individual data fields defined as their [properties](http://json-schema.org/understanding-json-schema/reference/object.html#properties). A pattern descriptor needs to match that hierarchy, with additional attributes like labels defined in corresponding properties.

Below is an example of a simple pattern that countains an object schema with two string properties - first_name and last_name. By default, string schemas are rendered as basic text inputs. In this example, pattern descriptor is used to define the order of inputs to render, and to set their labels as 'First name' and 'Last name' respectively.

```yaml
schema:
  type: object
  properties:
    first_name:
      type: string
    last_name:
      type: string
descriptor:
  order:
    - first_name
    - last_name
  properties:
    first_name:
      label: First name
    last_name:
      label: Last name
```
Here is how this example pattern is rendered as a Routegy app.

<p align="center">
  <img src="/images/patterns/name-example-app-preview.png" width="85%">
</p>

## Text inputs

To render a text input, use a `string` schema property, and customize its appearance with `label` and `placeholder` attribute in a corresponding property in the descriptor. Example:

```yaml
schema:
  type: object
  properties:
    text:
      type: string
descriptor:
  properties:
    text:
      label: Text input
      attrs:
        placeholder: Input some text here
```

<p align="center">
  <img src="/images/patterns/examples/text-input-simple.png" width="75%">
</p>

### HTML input types

Use JSON schema `format`  property to redner various HTML types, and force a corresponding validation of the input value. Here is a list of format support today. 

| JSON schema format | HTML input type |
| ----------- | ----------- |
| date| date|
| date-time|datetime-local|
| email| email|
| time| time|
| uri| url|

Below is an example of a pattern that contains inputs of `email` and `date` types.

```yaml
schema:
  type: object
  properties:
    email:
      type: string
      format: email
    dob:
      type: string
      format: date
descriptor:
  properties:
    email:
      label: E-mail address
      attrs:
        placeholder: E.g. john.doe@email.org
    dob:
      label: Date of birth
```

<p align="center">
  <img src="/images/patterns/examples/text-input-formats.png" width="75%">
</p>

### Regular expressions

To render a text input with automatic validation against a regular expression pattern, set `pattern` property inside the schema to a desired RegEx pattern.

```yaml
schema:
  type: object
  properties:
    api_key:
      type: string
      pattern: '^[0-9a-zA-Z]{32}$'
descriptor:
  properties:
    api_key:
      label: API key
```

<p align="center">
  <img src="/images/patterns/examples/text-input-regex.png" width="75%">
</p>


### Passwords and other masked inputs

Masked text inputs can be helpful in collecting sensitive information like passwords. To render one, simply the `kind` property of that fields t `password` in the pattern descriptor.

```yaml
schema:
  type: object
  properties:
    comments:
      type: string
descriptor:
  properties:
    comments:
      kind: password
      label: Password
```

<p align="center">
  <img src="/images/patterns/examples/text-input-password.png" width="75%">
</p>

### Text area

To render a text input as a textarea, simply set `kind` to `textarea` in its descriptor.

```yaml
schema:
  type: object
  properties:
    comments:
      type: string
descriptor:
  properties:
    comments:
      kind: textarea
      label: Any comments?
```

<p align="center">
  <img src="/images/patterns/examples/text-input-textarea.png" width="75%">
</p>

## Radio buttons

To render a group of radio buttons, define a schema with a list defined inside an `enum` attribute.

```yaml
schema:
  type: object
  properties:
    options:
      enum:
        - Option 1
        - Option 2
        - Option 3
      type: string
descriptor:
  properties:
    options:
      label: Choose one of the following
```

<p align="center">
  <img src="/images/patterns/examples/radio-buttons.png" width="75%">
</p>

### Custom labels

Labels for individual radio buttons can be customized using `items` property on the descriptor. This can be particularly helpful when schema `type` is different from `string` like. Here is an example of a schema with two radio boxes mapped to `true` and `false` boolean values, that are labeled as Yes and No respectively.

```yaml
schema:
  type: object
  properties:
    options:
      enum:
        - true
        - false
      type: boolean
descriptor:
  properties:
    options:
      items:
        'true':
          label: 'Yes'
        'false':
          label: 'No'
      label: What is your answer?
```

<p align="center">
  <img src="/images/patterns/examples/radio-buttons-custom-labels.png" width="75%">
</p>

## Select input

To render a dropdown select input, define a schema with a list of item defined inside an `enum` attribute, and set its kind to `list` in the descriptor.

```yaml
schema:
  type: object
  properties:
    options:
      enum:
        - Option 1
        - Option 2
        - Option 3
      type: string
descriptor:
  properties:
    options:
      label: Choose one of the following
      kind: list
```

<p align="center">
  <img src="/images/patterns/examples/select-input.png" width="75%">
</p>


## Single checkbox

To render a single checkbox, define a schema of `boolean` type.

```yaml
schema:
  type: object
  properties:
    checkbox:
      type: boolean
descriptor:
  properties:
    checkbox:
      label: Checkbox example
```

<p align="center">
  <img src="/images/patterns/examples/single-checkbox.png" width="75%">
</p>

## Multiple checkboxes

To render a group of checkboxes use `array` schema type, set its `uniqueItems` property to `true`, define a list of values using its `items` property.

```yaml
schema:
  type: object
  properties:
    checkboxes:
      type: array
      uniqueItems: true
      items:
        - type: string
          enum:
            - Option one
            - Another option
            - One more option
            - Last option
descriptor:
  properties:
    checkboxes:
      label: Select all that apply
```

<p align="center">
  <img src="/images/patterns/examples/multiple-checkboxes.png" width="75%">
</p>

## Relations

A pattern is made up of the following relations:

* [Workspace](/reference/workspaces/) (many-to-one)
* [AppData](/reference/app-data/) (one-to-many)
* [App](/reference/apps/) (one-to-many)
* [ActionType](/reference/action-types/) (one-to-many)

## Permissions

Patterns inherit permissions from their [Workspace](/reference/workspaces/) and its [Organization](/reference/organizations/). Read more about permission inheritance [here](/reference/permissions/).
