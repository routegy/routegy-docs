---
title: "Schema elements | Topic"
description: "How to define different types of inout elements?"
sidebar: false
---

# Types of input elements in the schema

[Touchpoint](/topics/touchpoint) [schema](/topics/schema) can contain any number of input elements to collect data from a person interacting with a touchpoint. The types of input elements range from simple [text inputs](#text-inputs) to more complex dropdown and multiple choice lists.

## Text inputs

Text inputs are used to capture textual information like a person's name, phone number, comments and more. To define a basic text input, add a new property to the schema page object and set its `type` property to `string`. Optionally, a placeholder string can be defined by using `placeholder` property under element's `attrs`  .

Below is an example of a touchpoint schema with a single text field capturing a person's name.

```yaml
type: object
properties:
  name:
    type: string
    title: What is your name?
    attrs:
      placeholder: e.g. John
```

![Schema Preview](/images/schemas/text-input-simple.png)

### Multiline text inputs

Multiline text inputs are useful for capturing larger blocks of text like comments and suggestions. This type of input can be defined by adding `type: textarea` subtype to input's `attrs` section.

```yaml
type: object
properties:
  comments:
    type: string
    title: Any comments?
    attrs:
      placeholder: e.g. Great customer support
```

![Schema Preview](/images/schemas/text-input-multiline.png)

### Collecting email addresses

Text inputs can be customized to collect a person's email address by adding `type: email` subtype to input's `attrs`.

```yaml
type: object
properties:
  email:
    type: string
    title: What is your email address?
    attrs:
      type: email
      placeholder: e.g. john.doe@foo.bar
```

![Schema Preview](/images/schemas/text-input-email.png)

Email input will automatically validate entered text against the email format.

![Schema Preview](/images/schemas/text-input-email-validation.png)

## Single choice list input

Single choice lists can be presented as a dropdown list or a list of radio buttons. These input types are useful for letting a person make a single choice from a predefined set of options.

### Dropdown list

To create a dropdown list, set the `type` property to `string` and define a list of available options under the `enum` property. Default value can be specified using the `default` property and it is optional.

```yaml
type: object
properties:
  choose_one:
    type: string
    title: Choose one option
    enum:
      - Option 1
      - Option 2
      - Option 3
    default: Option 2
```

![Schema Preview](/images/schemas/dropdown-list-input.png)

### Radio button list

To create a list of radio buttons , set the `type` property to `string`, define a list of available options under the `enum` property, and set `type: radio` subtype inside element's `attrs`. Just like for a dropdown list, a default value can be specified using optional `default` property.

```yaml
type: object
properties:
  choose_one:
    type: string
    title: Choose one option
    enum:
      - Option 1
      - Option 2
      - Option 3
    default: Option 2
    attrs:
      type: radio
```

![Schema Preview](/images/schemas/radio-list-input.png)

## Multiple choice input

Multiple choice input is a list of checkboxes that allows for selecting any number of items from a list of predefined options. To define this kind of input in the schema, set the element's `type` property to `array`, and define array's item `type` as a `string` with predefined options listed under its `enun` property.

```yaml
type: object
properties:
  choose_many:
    type: array
    title: Choose one or more option
    items:
      - type: string
        enum:
          - Option 1
          - Option 2
          - Option 3
```

![Schema Preview](/images/schemas/multiple-choice-input.png)

Optionally, a default value can be set by using element's `default` property, e.g. `default: [Option 1, Option 2]`.
