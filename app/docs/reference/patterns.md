---
title: "Patterns | Reference"
description: "What is a Routegy pattern?"
---

# Patterns

A pattern defines what interactions and data are exposed and collected by an [app](/reference/apps/). Pattern definition is a YAML document that consists of two parts: a schema and a descriptor. The schema is a [JSON Schema](https://json-schema.org/) document that defines the information to be captured by an app. The descriptor contains additional information that describes how the data is collected. This includes customization of UI components that represent different parts of the schema (e.g. component type, placeholders and more) as well as customization of the app appearance itself.

The schema portion of a pattern document is used to validate the [data](/reference/app-data/) when created by an [Event](/reference/events/).

## Example

The following is an example pattern in its YAML form that contains a simple [JSON Schema](https://json-schema.org/) to collect information about a problem with an office printer. Collected datainclude a `problem` defined as an array of values from a predefined set of problem categories, and `additional_problem_info` string property for additional details or miscallanous category not included in the list. The descriptor part of the document defines the order of data properties to render, and it defines `additional_problem_info` as a `textarea` field to render it as a multiline text input.

```yaml
schema:
  type: object
  properties:
    problem:
      type: array
      items:
        - enum:
            - Doesn't turn on
            - Paper jam
            - No paper
            - No toner
            - Connectivity issue
            - Something else
          type: string
      title: What's going on?
      uniqueItems: true
    additional_problem_info:
      type: string
      title: Something else or more details?
  additionalProperties: false
descriptor:
  order:
    - problem
    - additional_problem_info
  properties:
    additional_problem_info:
      kind: textarea
      attrs:
        placeholder: E.g. Printer screen shows E104 error, cannot be reset and doesn't print
```

The following is the same pattern rendered by Routegy.
<CaptionedImage
  src="/images/patterns/office-printer-problem-pattern-preview.png"
  alt="A 'Printer issue' form generated from the Routegy schema defined above"
  width="85%"
/>

## Object hierarchy

Routegy requires all pattern schemas to be objects with individual data fields defined as their [properties](http://json-schema.org/understanding-json-schema/reference/object.html#properties). A pattern descriptor needs to match that hierarchy, with additional attributes like labels defined in corresponding properties.

Below is an example of a simple pattern that contains an object schema with two string properties - `first_name` and `last_name`. By default, string schemas are rendered as basic text inputs. In this example, pattern descriptor is used to define the order of inputs to render, and to set their labels as "First name" and "Last name" respectively.

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

<CaptionedImage
  src="/images/patterns/name-example-app-preview.png"
  alt="A form with first and last name fields generated from a Routegy schema"
  width="85%"
/>

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

<CaptionedImage
  src="/images/patterns/examples/text-input-simple.png"
  alt="A form with a text input field generated from a Routegy schema"
  width="75%"
/>

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
      label: Email address
      attrs:
        placeholder: E.g. john.doe@email.org
    dob:
      label: Date of birth
```

<CaptionedImage
  src="/images/patterns/examples/text-input-formats.png"
  alt="A form with formatted email and date fields generated from a Routegy schema"
  width="75%"
/>

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

<CaptionedImage
  src="/images/patterns/examples/text-input-regex.png"
  alt="A form with a regex-validated API key field generated from a Routegy schema"
  width="75%"
/>

### Passwords and other masked inputs

::: warning
Be extremely careful requesting sensitive data in your apps. If you're unsure about how best to process sensitive data, please contact us at [support@routegy.com](mailto:support@routegy.com)
:::

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

<CaptionedImage
  src="/images/patterns/examples/text-input-password.png"
  alt="A form with a masked field generated from a Routegy schema"
  width="75%"
/>

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

<CaptionedImage
  src="/images/patterns/examples/text-input-textarea.png"
  alt="A form with a text area 'comment' field generated from a Routegy schema"
  width="75%"
/>

### Number input

To render a number input with up and down buttons, define a schema of `input` or `number` type. Optionally, set `minimum` and `maximum` schema attributes to define the allowed range, and set a default value using the `default` attribute.

```yaml
schema:
  type: object
  properties:
    count:
      type: integer
      default: 5
      maximum: 10
      minimum: 1
descriptor:
  properties:
    count:
      label: Count
```

<CaptionedImage
  src="/images/patterns/examples/number-input.png"
  alt="A form with a number input 'count' field generated from a Routegy schema"
  width="75%"
/>

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

<CaptionedImage
  src="/images/patterns/examples/radio-buttons.png"
  alt="A form with a list of radio options generated from a Routegy schema"
  width="75%"
/>

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

<CaptionedImage
  src="/images/patterns/examples/radio-buttons-custom-labels.png"
  alt="A form containing a list of radio options with displayed values of 'Yes/No' and data-values of 'true/false' generated from a Routegy schema"
  width="75%"
/>

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

<CaptionedImage
  src="/images/patterns/examples/select-input.png"
  alt="A form containing a list of options in a select dropdown field generated from a Routegy schema"
  width="75%"
/>


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

<CaptionedImage
  src="/images/patterns/examples/single-checkbox.png"
  alt="A form containing a checkbox field generated from a Routegy schema"
  width="75%"
/>

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

<CaptionedImage
  src="/images/patterns/examples/multiple-checkboxes.png"
  alt="A form containing a list of checkbox fields generated from a Routegy schema"
  width="75%"
/>

## Tag input

Tag input is an input element for entering a list of string tags. To render one, define a schema of `array` type and set its kind in the descriptor to `tags`. Schema's `maxItems` attribute (optional) can be used to define a maxium number of tags that can be entered.

```yaml
schema:
  type: object
  properties:
    items:
      type: array
      maxItems: 10
descriptor:
  properties:
    items:
      kind: tags
      label: Items to refill
```

<CaptionedImage
  src="/images/patterns/examples/tag-input.png"
  alt="A form containing a tag-input field generated from a Routegy schema with soda flavor tags added entered into it"
  width="75%"
/>

## Star rating

To render a star rating widget, define a schema of `integer` or `number` type, and set its kind to `rating` in the descriptor. Use schemas `default` attribute to define the initial star selection.

```yaml
schema:
  type: object
  properties:
    experience:
      type: integer
      default: 4
descriptor:
  properties:
    experience:
      kind: rating
      label: How was your experience?

```

<CaptionedImage
  src="/images/patterns/examples/rating.png"
  alt="A form containing a star rating field generated from a Routegy schema with four stars selected"
  width="75%"
/>

## Empty pattern

An empty pattern will create an event immediately upon interaction with an associated app. The empty pattern can define the custom branding and result message; it simply does not define any data to collect and thus does not render a form or UI.

```yaml
# TODO
```

## Permissions

Patterns inherit permissions from their [Workspace](/reference/workspaces/) and its [Organization](/reference/organizations/). Read more about permission inheritance [here](/reference/permissions/).
