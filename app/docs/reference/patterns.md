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

## Specialized components

### Star rating

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

### Net Promotor Score

[Net Promotore Score](https://en.wikipedia.org/wiki/Net_promoter_score) can be used to quantify customer's perception of an experience or a product by asking them how likely they are to recommend it to someone else. Routegy provides a  component for collecting NPS nunmerical value that can be rendered by defining a schema of `integer` type, and setting its kind to `nps` in the descriptor.
```yaml
schema:
  type: object
  properties:
    score:
      type: integer
descriptor:
  properties:
    score:
      kind: nps
      minScoreLabel: Absolutely not!
      maxScoreLabel: Yes!
      label: Would you recommend this product to a friend?
```

Minimum and maximum score labels and score ranges are customizable using descriptor attributes as shown below.


| Attribute name | Default value | Description |
| ----------- | ----------- | ----------- |
| minScoreLabel| Not Very Likely | Label displayed next to the lowest score |
| maxScoreLabel| Very Likely | Label displayed next to the highest score |
| minScore| 0 | Lowest score on on the scale |
| maxScore| 10 | Highest score on the scale |
| passiveScore| 7 | Starting score for the 'passive' range (orange) |
| promoterScore| 9 | Starting score  for the 'promoter' range (green) |

<CaptionedImage
  src="/images/patterns/examples/nps.png"
  alt="A form containing an NPS field generated from a Routegy schema"
  width="75%"
/>

## Conditional fields

Routegy offers support for conditionally displayed fields using [JSON schema if/then/else](https://json-schema.org/understanding-json-schema/reference/conditionals.html#if-then-else) keywords. Today, the support is limited to equality comparison based on the `const` keyword, with support for more complex conditional validation scenarios coming soon.

The following pattern demonstrates how two text inputs, defined as `email` and `phone` properties, are conditionally displayed depending on the value of `how_to_contact` radio buttons widgets. 

```yaml
schema:
  type: object
  required:
    - how_to_contact
  properties:
    how_to_contact:
      enum:
        - by_email
        - by_phone
      type: string
  if:
    properties:
      how_to_contact:
        const: by_email
  then:
    properties:
      email:
        type: string
        format: email
  else:
    if:
      properties:
        how_to_contact:
          const: by_phone
    then:
      properties:
        phone:
          type: string
          pattern: '^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$'
descriptor:
  order:
    - how_to_contact
    - email
    - phone
  properties:
    email:
      attrs:
        placeholder: E.g. jon.doe@routegy.com
      label: You email address
    phone:
      attrs:
        placeholder: 'E.g, 555-555-5555'
      label: You phone number
    how_to_contact:
      kind: enum
      items:
        by_email:
          label: Send me an email
        by_phone:
          label: Send me a text message
      label: How would you like to be contacted?
```

By default, neither `email` nor `phone` widgets are visible.

<CaptionedImage
  src="/images/patterns/examples/conditional-contact-default.png"
  alt="A form containing contact me form with no selected option"
  width="75%"
/>

If `how_to_contact` value is set to `by_email` (`Send me an email` radio button), `email` widget will be made visible to collect user's email address.

<CaptionedImage
  src="/images/patterns/examples/conditional-contact-email.png"
  alt="A form containing contact me form with an email selected as a preferred contact"
  width="75%"
/>

If `how_to_contact` value is set to `by_phone` string (labeled as `Send me a text message`), `phone` widget will became visible to collect user's phone number. 

<CaptionedImage
  src="/images/patterns/examples/conditional-contact-phone.png"
  alt="A form containing contact me form with a text message selected as a preferred contact"
  width="75%"
/>

## Grouping elements with nested objects

Combining multiple elements into groups can be done by nested object schemas. Set a property `type` to `object` and use its properties to define the elements inside it just like in the top level object schema. Objects schemas can be nested in each other for a multilevel hierarchy. The descriptor need to follow the object hierarchy of the schema, and can be used to define labels for element groups and order of elements with a group.

The sample pattern below demonstrates a simple field grouping for collecting contact information structured in the following way:

```
Root object
  - Contact info
    - Name
      - First name
      - Last name
    - Email address
```

To accomplish this, the pattern schema uses three levels of nested objects, with the descriptor following the same hierarchy to define labels for groups ("Contact info" and "Name") and elements within them.

```yaml
schema:
  type: object
  properties:
    contact_info:
      type: object
      properties:
        name:
          type: object
          properties:
            last_name:
              type: string
            first_name:
              type: string
        email:
          type: string
          format: email
descriptor:
  properties:
    contact_info:
      label: Contact info
      properties:
        name:
          order:
            - first_name
            - last_name
          label: Name
          properties:
            last_name:
              label: Last name
            first_name:
              label: First name
        email:
          label: Email address
```

<CaptionedImage
  src="/images/patterns/examples/grouped-elements.png"
  alt="A form containing contact me form with a text message selected as a preferred contact"
  width="75%"
/>


## Multipage patterns

Multipage pattern can be used to organize larger forms into multiple, smaller pages with a wizard-like experience. To define a multipage pattern in Routegy, do the following:
  - Make root schema properties into object (`type: object`) and use them to define individual pages of your multipage pattern.
  - In the descriptor, set `kind` of the root object schema to `multipage`
  - in the descriptor, set the order of your pages using `order` attribute (array)


The following sample is a scaffolding for a three page pattern (all pages are empty).

```yaml
schema:
  type: object
  properties:
    page_1:
      type: object
    page_2:
      type: object
    page_3:
      type: object
descriptor:
  kind: multipage
  order:
    - page_1
    - page_2
    - page_3
```

By default, navigation buttons are captioned as `Next`, `Back` and `Submit`. These captions can be customized using `captions` attribute in the descriptor:
```yaml
descriptor:
  captions:
    next: Forward
    back: Previous
    submit: Send
```

Below is a complete example for a printer report problem patter that consists of three pages:
  - Problem page with a list of radio buttons representing most common problems
  - Details page with a text input for collecting more details about the problem
  - Follow-up page with an option to opt into email updates on the problem

```yaml
schema:
  type: object
  properties:
    problem_page:
      type: object
      properties:
        problem:
          enum:
            - No paper
            - No toner
            - Printer not responding
            - Printer stuck
            - Something else
          type: string
    details_page:
      type: object
      properties:
        details:
          type: string
    follow_up_page:
      if:
        properties:
          email_follow_up_yes_no:
            const: true
      then:
        properties:
          email:
            type: string
            format: email
      type: object
      properties:
        email_follow_up_yes_no:
          type: boolean
descriptor:
  kind: multipage
  captions:
    back: Previous
    submit: Report
  order:
    - problem_page
    - details_page
    - follow_up_page
  properties:
    problem_page:
      properties:
        problem:
          kind: enum
          label: What is going on?
    details_page:
      properties:
        details:
          kind: textarea
          attrs:
            placeholder: E.g. printer shows error E122
          label: Any more details?
    follow_up_page:
      order:
        - email_follow_up_yes_no
        - email
      properties:
        email:
          attrs:
            placeholder: E.g. john.doe@routegy.com
          label: Email
        email_follow_up_yes_no:
          label: I'd like to receive an update on this via email
```

<CaptionedImage
  src="/images/patterns/examples/multipage-problem.png"
  alt="First page of a multipage pattern showing a list radio buttons representing common printer problems"
  width="75%"
/>

<CaptionedImage
  src="/images/patterns/examples/multipage-details.png"
  alt="Second page of a multipage pattern showing a text area for problem details"
  width="75%"
/>

<CaptionedImage
  src="/images/patterns/examples/multipage-follow-up.png"
  alt="Third page of a multipage pattern showing an option to opt into email follow ups"
  width="75%"
/>

## Empty pattern

An empty pattern will create an event immediately upon interaction with an associated app. The empty pattern can define the custom branding and result message; it simply does not define any data to collect and thus does not render a form or UI.

```yaml
descriptor:
  appearance:
    headerLogo:
      >-
        https://routegy-assets.s3.us-west-2.amazonaws.com/routegy/schemas/mock-approval-logo.svg
    colors:
      header: "#2e1046"
      header-text: "#eff0eb"
      footer: "#eff0eb"
      white: "#2e1046"
      black: "#eff0eb"
  attrs:
    successMessage: Thanks for the report!
```

## Permissions

Patterns inherit permissions from their [Workspace](/reference/workspaces/) and its [Organization](/reference/organizations/). Read more about permission inheritance [here](/reference/permissions/).
