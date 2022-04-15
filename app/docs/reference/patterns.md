---
title: "Patterns | Reference"
description: "What is a Routegy pattern?"
---

# Patterns

A pattern defines what interactions and data are exposed and collected by an [app](/reference/apps/). Pattern definition is a YAML document that defines UI elements of an app. Every UI element is an object with a set of properties that define its looks and behavior. Element's `type` property is mandatory and it defines a type of UI element to render. Routegy supports numerous built-in element types that range from simple text inputs (`type: text`) to more advanced and specialized components like Net Promoter Score element (`type: nps`). In addition to `type`, element objects support other properties for element configration. Some of them, like `title` (interchangable with `label` and `caption`), are supported by most types of elements, while others are type specific.

## Example

The following is an example YAML pattern for an app that collects information about a problem with an office printer. This UI pattern includes a list of checkboxes that map to a list of predefined problem categories, and `additional_problem_info` textarea field for additional details or miscallanous category not included in the list. 

```yaml
problem:
  type: checkboxes
  items:
    - Doesn't turn on
    - Paper jam
    - No paper
    - No toner
    - Connectivity issue
    - Something else
  title: What's going on?
additional_problem_info:
  type: textarea
  title: Something else or more details?
  placeholder: E.g. Printer screen shows E104 error, cannot be reset and doesn't print
```

The following is the same pattern rendered by Routegy.

<CaptionedImage
  src="/images/patterns/office-printer-problem-pattern-preview.png"
  alt="A 'Printer issue' form generated from the Routegy pattern defined above"
  width="75%"
/>

Once submitted, data collected by this app will be a JSON object with two properties: `problem` array property and `additional_problem_info` string property. Example:

```json
{
  "problem": [
      "No paper",
      "No toner"
  ],
  "additional_problem_info": "No supplies can be found anywhere in the print room."
}
```

## Element properties

Every element is defined as a YAML object with a set of properties that determine the type, appearance and behavior of a UI component to be rendered in the app. Below is a list of properties that are support in most of the built-in components.

| Property | Description |
| ----------- | ----------- |
| `type`| Determines the type of the UI element. If `type` property is not defined, the object is treated as a [fieldset](#grouping-elements-into-fieldsets). If `type` is defined, it must be one of the [supported element types](#supported-element-types).
| `label` (also `caption` and `title`)| Defines a label for the UI element (optional).|
| `visible`| [Conditional visibility](#conditional-fields) expression (optional). |
| `default`| The default value for the element (optional). Supported by all built-in elements except for `markdown`|
| `placeholder`| Placeholder string (optional). Supported by elements based on the text input including `text`, `textarea`, `email`, `phone` etc|
| `items`| List of items for multiple or single choice elements like [radio buttons](#radio-buttons) and [checkboxes](#multiple-checkboxes)|

## Supported element types

| Type | Description |
|------|-------------|
| string, text| [Basic text input](#text-inputs) |
| textarea | [Multiline textarea input](#text-area) |
| date| [Date input](#html-input-types) based on HTML date input type|
| datetime| [Datetime input](#html-input-types) based on HTML datetime-local input time|
| email| [Email input](#html-input-types) based on HTML email input type|
| time| [Time input](#html-input-types) based on HTML time input type|
| uri, url| [Url input](#html-input-types) based on HTML url input type|
| phone | Text input with a [RegEx pattern](#regular-expressions) matching US phone numbers]
| password| [Masked text input](#passwords-and-other-masked-inputs) for senstive information|
| number, integer | [Integer input](#number-input) with up-and-down controls |
| radio, radios, radiobuttons| [Multiple radio buttons](#radio-buttons) |
| dropdown | [Dropdown select input](#select-input) |
| checkboxes | [Multiple checkboxes](#multiple-checkboxes) |
| checkbox, boolean | [Single checkbox](#single-checkbox) |
| tags | [Tag input](#tag-input) |
| markdown | [Markdown element](#markdown) to display static information |

## Text inputs

To render a text input, use a `text` or `string` type, and customize its appearance with `title` and `placeholder` properties.

```yaml
text_input:
  type: text
  label: Text input
  placeholder: Input some text here
```

<CaptionedImage
  src="/images/patterns/examples/text-input-simple.png"
  alt="A form with a text input field generated from a Routegy pattern"
  width="75%"
/>

### Regular expressions

To render a text input with automatic validation against a regular expression pattern, set the `pattern` property inside the element of a `text` or `string` `type` to a desired RegEx pattern.

```yaml
api_key:
  type: string
  pattern: '^[0-9a-zA-Z]{32}$'
  label: API key
```

<CaptionedImage
  src="/images/patterns/examples/text-input-regex.png"
  alt="A form with a regex-validated API key field generated from a Routegy pattern"
  width="75%"
/>

### HTML input types

Routegy offers a built-in support for various HTML input types. Here is a list element types mapped to support HTML input types. 

| Routegy element type | HTML input type |
| ----------- | ----------- |
| date| date|
| datetime|datetime-local|
| email| email|
| time| time|
| uri| url|

Below is an example of a pattern that contains inputs of `email` and `date` types.

```yaml
email:
  type: email
  label: Email address
  placeholder: E.g. john.doe@email.org
dob:
  type: date
  label: Date of birth
```

<CaptionedImage
  src="/images/patterns/examples/text-input-formats.png"
  alt="A form with formatted email and date fields generated from a Routegy pattern"
  width="75%"
/>

### Passwords and other masked inputs

::: warning
Be extremely careful requesting sensitive data in your apps. If you're unsure about how best to process sensitive data, please contact us at [support@routegy.com](mailto:support@routegy.com).
:::

Masked text inputs can be helpful in collecting sensitive information like passwords. To render one, set element's type to `password`.

```yaml
password:
  type: password
  label: Password
  placeholder: Enter your password here
```

<CaptionedImage
  src="/images/patterns/examples/text-input-password.png"
  alt="A form with a masked field generated from a Routegy pattern"
  width="75%"
/>

### Text area

To render a textarea, set element's type to `textarea`.

```yaml
comments:
  type: textarea
  label: Any comments?
```

<CaptionedImage
  src="/images/patterns/examples/text-input-textarea.png"
  alt="A form with a text area 'comment' field generated from a Routegy pattern"
  width="75%"
/>

### Number input

To render a number input with up and down buttons, set element's type to `integer` or `number`. Optionally, set `minimum` and `maximum` properties attributes to define the allowed range, and set a default value using the `default` property.

```yaml
count:
  type: integer
  label: Count
  default: 5
  maximum: 10
  minimum: 1
```

<CaptionedImage
  src="/images/patterns/examples/number-input.png"
  alt="A form with a number input 'count' field generated from a Routegy pattern"
  width="75%"
/>

## Radio buttons

To render a group of radio buttons, set element's type to `radio`, `radios` or `radiobuttons`, and define a list of their values/labels using `items` array property. 

```yaml
options:
  type: radios
  label: Choose one of the following
  items:
    - Option 1
    - Option 2
    - Option 3
```

<CaptionedImage
  src="/images/patterns/examples/radio-buttons.png"
  alt="A form with a list of radio options generated from a Routegy pattern"
  width="75%"
/>

### Custom labels

Labels for individual radio buttons can be customized by turning items of the `items` property into objects with `value` and `label` properties. Below is an example of a schema with two radio boxes mapped to `true` and `false` values, that are labeled as Yes and No respectively.

```yaml
options:
  type: radios
  label: What is your answer?
  items:
    - value: true
      label: Yes
    - value: false
      label: No
```

<CaptionedImage
  src="/images/patterns/examples/radio-buttons-custom-labels.png"
  alt="A form containing a list of radio options with displayed values of 'Yes/No' and data-values of 'true/false' generated from a Routegy pattern"
  width="75%"
/>

## Select input

To render a dropdown select input, set element type to `dropdown`, and define a list of dropdown items items using `items` property.

```yaml
options:
  type: dropdown
  items:
    - Option 1
    - Option 2
    - Option 3
  type: string
  label: Choose one of the following
```

<CaptionedImage
  src="/images/patterns/examples/select-input.png"
  alt="A form containing a list of options in a select dropdown field generated from a Routegy pattern"
  width="75%"
/>


## Single checkbox

To render a single checkbox, define an element of `checkbox` or `boolean` type.

```yaml
checkbox:
  type: checkbox
  label: Checkbox example
```

<CaptionedImage
  src="/images/patterns/examples/single-checkbox.png"
  alt="A form containing a checkbox field generated from a Routegy pattern"
  width="75%"
/>

## Multiple checkboxes

To render a group of checkboxes, set type to `checkboxes` and define a list of checbox values and labels using `items` property.

```yaml
checkboxes:
  type: checkboxes
  label: Select all that apply
  items:
    - Option one
    - Another option
    - One more option
    - Last option
```

<CaptionedImage
  src="/images/patterns/examples/multiple-checkboxes.png"
  alt="A form containing a list of checkbox fields generated from a Routegy pattern"
  width="75%"
/>

## Tag input

Tag input is an input element for entering a list of string tags. To render one, use `tags` element type. Optionally, `maxItems` property can be used to define a maxium number of tags allowed.

```yaml
tags_example:
  type: tags
  maxItems: 10
  label: Items to refill
```

<CaptionedImage
  src="/images/patterns/examples/tag-input.png"
  alt="A form containing a tag-input field generated from a Routegy pattern with soda flavor tags added entered into it"
  width="75%"
/>

## Static information

### Markdown

To render text formatted with [markdown](https://spec.commonmark.org/), set element type to `markdown` and enter your markdown into the `text` property.

You can dynamically display values entered from elsewhere in your pattern by referencing the value name and placing it in your markdown with the format `${your_value_name}`.

In addition to `text`, you can specify the `size` (`small`, `normal` (default), `medium`, `large`) and whether or not to render the markdown in a visible container with `isBoxed` set to `true`.

::: tip
Use a pipe (`|`) after the `text` property keyword to allow multi-line strings in your YAML.
:::

```yaml
name:
  type: string
  label: Name
  placeholder: Enter your name
markdownTitle:
  type: markdown
  size: large
  text: |
    # Hello ${name}!
markdown:
  type: markdown
  isBoxed: true
  size: normal
  text: |
    # A first-level header

    **This is bold.**

    _And this is italic._

    Use emoji! :) :smile: :shrug: :magic_wand:

    Links are automatically parsed: URLs like www.routegy.com or email addresses like support@routegy.com

    Of course [regular links](https://routegy.com) are also ok.

    * a list
    * is easy
    * to do

    ::: warning
    :warning: *this is a warning*
    :::

    ::: info
    :bulb: *this is informative*
    :::

    ::: danger
    :exclamation: *this is an error*
    :::

    ::: success
    :white_check_mark: *this is a success*
    :::

    ::: primary
    :point_right: *this is important*
    :::

    ::: normal
    :sleeping: *this is just boring ol' normal*
    :::

    # THE END
```

<CaptionedImage
  src="/images/patterns/examples/markdown.png"
  alt="A form with a name field and markdown rendered from a Routegy pattern"
  width="50%"
/>

## Specialized components

### Star rating

To render a star rating widget, add an element of `rating` type. Optionally, set `size` property to `small`, `medium` or `large` to customize the size of rendered stars (`small` is the default size).

```yaml
experience:
  type: rating
  default: 4
  label: How was your experience?
```

<CaptionedImage
  src="/images/patterns/examples/rating.png"
  alt="A form containing a star rating field generated from a Routegy pattern with four stars selected"
  width="75%"
/>

### Net Promotor Score

[Net Promotore Score (NPS)](https://en.wikipedia.org/wiki/Net_promoter_score) can be used to quantify customer's perception of an experience or a product by asking them how likely they are to recommend it to someone else. Routegy provides a component for collecting an NPS numerical value that can be rendered setting type to `nps`.
```yaml
score:
  type: nps
  minScoreLabel: Absolutely not!
  maxScoreLabel: Yes!
  label: Would you recommend this product to a friend?
```

Minimum and maximum score labels and score ranges are customizable using additional element properties as shown below.

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
  alt="A form containing an NPS field generated from a Routegy pattern"
  width="75%"
/>

## Conditional fields

Routegy offers support for conditionally displayed elements using simple comparison logic define inside  the `visible` property of an element. This allows for setting element's visiblity based on comparing a value of any element to a value of another element. 

For instance, the following `visible` property would evaluate to true only if a value associated with `provide_more_info` element is set to `true`.

```yaml
visible:
  provide_more_info:
    equals_to: true
```

Since `equals_to` is the default comparison operator (more on different operator below), it can be ommited and the entire expression can be reduced to:

```yaml
visible:
  provide_more_info: true
```

Below is a more complete example that demonstrates how two text inputs, defined as `email` and `phone`, are conditionally displayed depending on the value of `how_to_contact` radio buttons element. 

```yaml
how_to_contact:
  type: radio
  label: How would you like to be contacted?
  items:
    - value: by_email
      label: Send me an email
    - value: by_text
      label: Send me a text message
email:
  type: email
  placeholder: E.g. jon.doe@routegy.com
  label: You email address
  visible:
    how_to_contact: by_email
phone:
  placeholder: 'E.g, 555-555-5555'
  label: You phone number
  type: phone
  visible:
    how_to_contact: by_text
```

By default, neither `email` nor `phone` widgets are visible.

<CaptionedImage
  src="/images/patterns/examples/conditional-contact-default.png"
  alt="A form containing contact me form with no selected option"
  width="75%"
/>

If `how_to_contact` value is set to `by_email` (`Send me an email` radio button), `email` input is made visible to collect user's email address.

<CaptionedImage
  src="/images/patterns/examples/conditional-contact-email.png"
  alt="A form containing contact me form with an email selected as a preferred contact"
  width="75%"
/>

If `how_to_contact` value is set to `by_text` string (labeled as `Send me a text message`), `phone` input is made visible to collect user's phone number. 

<CaptionedImage
  src="/images/patterns/examples/conditional-contact-phone.png"
  alt="A form containing contact me form with a text message selected as a preferred contact"
  width="75%"
/>

### Comparison operators

Here is a list of comparison operators supported inside `visible` property. 

| Property name | Description |
| ----------- | ----------- |
| equalTo | True if a specified value is equal to the value of its parent element.|
| notEqualTo |  True if a specified value is not equal to the value of its parent element.|
| lessThan | True if a specified value is less than the value of its parent element. Useful when working with elements that have numerical values like `integer`, `rating` or `nps`.|
| greaterThan | True if a specified value is less than the value of its parent element. Useful when working with elements that have numerical values like `integer`, `rating` or `nps`.|
| contains | True if a specified value is contained in the value of its parent element. Useful when working with elements associated with array values like `checkboxes` and `tags`, or any text elements.|
| doesntContain | True if a specified value is not contained in the value of its parent element. Useful when working with elements associated with array values like `checkboxes` and `tags`, or any text elements.|


### Additional examples for conditional elements

Make `something_else` textarea visible only if `Something else` checkbox is checked in the `problem` element. Since the value associated with the `problem` element is an array of strings (values of checked checkboxes), `contains` operator is used.

```yaml
problem:
  type: checkboxes
  title: Printer problem?
  items:
    - Doesn't turn on
    - Paper jam
    - No paper
    - No toner
    - Something else
something_else:
  type: textarea
  title: Something else or more details?
  visible:
    problem:
      contains: Something else
```

Make `how_can_we_improve` textarea visible only if less than three stars are selected in the `experience` starrating element.

```yaml
experience:
  type: rating
  size: large
  label: How would you rate your experience today?
how_can_we_improve:
  type: textarea
  label: Please let us know how can we make the experience better
  visible:
    experience:
      lessThan: 3
```

## Grouping elements into fieldsets

Combining multiple elements into a fieldset can be done by nesting them inside a parent object that doesn't have a `type` property set. Fieldsets can be also nested in each other to create a multilevel hierarchy.

A sample pattern below demonstrates a simple field grouping for collecting contact information structured in the following way:

```
Contact info
  Name
    First name
    Last name
  Email address
```

To accomplish this, the following YAML definition uses three levels of nested objects. Fieldsets (`Contact info` and `Name`) are labeled using `label` property (optional), but they don't have a `type` property like other elements.

```yaml
contact_info:
  label: Contact info
  name:
    last_name:
      type: text
      label: Last name
    first_name:
      type: text
      label: First name
  email:
    type: email
    label: Email address
```

<CaptionedImage
  src="/images/patterns/examples/grouped-elements.png"
  alt="A form containing contact me form with a text message selected as a preferred contact"
  width="75%"
/>

## Multipage patterns

Multipage pattern can be used to organize larger forms into multiple, smaller pages with a wizard-like experience. To define a multipage pattern in Routegy, do the following:
  - Set top-level `type` prtoperty to `wizard` or `multipage`
  - Define pages of your pattern as top level properties - every page is an object that can contain element and field set.


The following sample is a scaffolding for a three page pattern (all pages are empty).

```yaml
type: wizard
page_1:
  // Page 1 definition
page_2:
  // Page 2 definition
page_3:
  // Page 3 definition
```

By default, navigation buttons are captioned as `Next`, `Back` and `Submit`. These captions can be customized using `buttonCaptions` property inside `appSettings`:
```yaml
appSettings:
  buttonCaptions:
    next: Forward
    back: Previous
    submit: Send
```

Below is a complete example for a printer report problem patter that consists of three pages:
  - Problem page with a list of radio buttons representing most common problems
  - Details page with a text input for collecting more details about the problem
  - Follow-up page with an option to opt into email or text updates on the problem

```yaml
type: wizard
problem_page:
  problem:
    type: radios
    label: What is going on?
    items:
      - No paper
      - No toner
      - Printer not responding
      - Printer stuck
      - Something else
details_page:
  details:
    type: textarea
    placeholder: E.g. printer shows error E122
    label: Any more details?
follow_up_page:
  how_to_contact:
    type: radios
    items:
      - value: by_email
        label: 'Yes, send me an email'
      - value: by_phone
        label: 'Yes, send me a text message'
      - value: no_contact
        label: 'No, thanks'
    label: Would you like to recieve updates on this?
  email:
    type: email
    placeholder: E.g. jon.doe@routegy.com
    label: You email address
    visible:
      how_to_contact: by_email
  phone:
    type: phone
    placeholder: 'E.g, 555-555-5555'
    label: You phone number
    visible:
      how_to_contact: by_phone
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

## Empty pattern (Instant events)

An empty pattern will create an event immediately upon interaction with an associated app. The empty pattern can define the custom branding and result message; it simply does not define any data to collect and thus does not render a form or UI.

```yaml
appSettings:
  logo:
    >-
      https://routegy-assets.s3.us-west-2.amazonaws.com/routegy/schemas/mock-approval-logo.svg
  colors:
    header: "#2e1046"
    header-text: "#eff0eb"
    footer: "#eff0eb"
    white: "#2e1046"
    black: "#eff0eb"
  successMessage: Thanks for the report!
```

## Application settings

In addition to the information about components and their layout, pattern can also contain application-level settings like custom colors, header logo, custom Submit button captions and post-submit success message.

::: tip
These visual features are not visible when the pattern is edited and previewed in the Routegy admin application. They will take effect when a pattern is associated with an app, and can be seen when the app is launched.
:::

App customizations can be defined using a top level `appSettings` object that supports the following properties:

| Property name | Description | Default |
|---|---|---
|logo|Path to a custom logo to be displayed at the top of the app header| No logo |
|successMessage|Message to be displayed after interaction with an app has been successfully completed| Thank you for your feedback! |
|buttonCaptions|Custom captions for built-in navigation buttons. This includes the Submit button as well as Next and Back buttons used in the [wizard/multipage patterns](#multipage-patterns)| Submit, Next and Back |
|colors|Custom colors for various elements of an app that will override default Routegy brand colors. | Please see the [custom colors section](#custom-color-reference) |

### Example

Here is an example pattern that demonstrates some of these customizations including a custom app logo,, Submit button caption and selected colors.

```yaml
appSettings:
  logo: https://routegy-assets.s3.us-west-2.amazonaws.com/routegy/schemas/mock-room-help-logo.svg
  colors:
    header: black
    headerText: '#00fab3'
    black: black
    footer: black
    grey: grey
    primary: '#007252'
    lightGrey: lightgrey
    white: white
    success: '#00b682'
    buttonText: white
  buttonCaptions:
    submit: Report
problem:
  type: radios
  label: What is the problem?
  items:
    - Call quality is poor
    - WiFi signal is poor
    - Projector/TV not working
    - Missing A/V adapters
    - Something else
additional_comment:
  type: textarea
  label: Something else or more details?
  placeholder: Provide additional information here
```

A screenshot of the app showing all of these customizations in effect is shown below.

<CaptionedImage
  src="/images/patterns/examples/custom-app-settings.png"
  alt="Screenshot of a conference room problem report app with custom appSettings."
  width="65%"
/>

### Custom color reference

Below is a list if customizable colors along with their default values. When override a color, any Any valid [CSS color notation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) can be used.

<style>
  .colorBlock {
    width: 100%;
    height: 2em;
  }
</style>

| Name | Description | Default |
|---|---|---|
|header| App header background color | <div class="colorBlock" style="background-color:#2e1046"/>|
|headerText| App header text color. Used for app name and description text displayed in the app header |<div class="colorBlock" style="background-color:#eff0eb"/>|
|footer| App footer background color | <div class="colorBlock" style="background-color:#2e1046"/> |
|white| Background color for contents of an app rendered between the header and the footer| <div class="colorBlock" style="background-color:#eff0eb"/>|
|black| Color used for static text like labels as well as text entered into input elements.| <div class="colorBlock" style="background-color:#2e1046"/> |
|grey| Secondary color used for visual elements like outlines of checkboxes and radio buttons. | <div class="colorBlock" style="background-color:#ac6dde"/> |
|lightGrey| Secondary color used for borders of various input elements when they are not active (not focused)| <div class="colorBlock" style="background-color:#e2cdf3"/> |
|primary| Color used for borders of active (focused) input elements as well as labels | <div class="colorBlock" style="background-color:#d410c5"/> |
|buttonText| Text color for buttons | <div class="colorBlock" style="background-color:white"/> |
|success| Background color for elements associated with success actions and notifications e.g. application submit button |<div class="colorBlock" style="background-color:#1cd748"/> |
|warning| Background color for elements associated with warning notifications |<div class="colorBlock" style="background-color:#ffe08a"/> |
|danger| Background color for elements associated with danger notifications e.g. error messages |<div class="colorBlock" style="background-color:#c81355"/> |


