---
title: "Capture rating & review feedback | How-to"
description: "How do I capture rating & review feedback?"
---

# Capture rating & review feedback

The goal of this document is to cover how to create [patterns](/reference/patterns/) that capture feedback with a rating & review prompt. These are meant to gain insight with a fixed size scoring mechanism and optionally an additional free-form input to capture personalized feedback.

## Prerequisites

Before starting, you should familiarize yourself with the [How to: Create new patterns](/how-to/create-new-patterns/) document. Only once you've read that and are confident in creating new patterns in the Admin web app, should you continue.

## Star ratings

This pattern snippet would capture a 1 to 5 rating using a star rating component.

```yaml
schema:
  type: object
  properties:
    product_rating:
      type: integer
      default: 3
descriptor:
  properties:
    product_rating:
      kind: rating
      label: How would your rate this product?
```

<CaptionedImage
  src="/images/how-tos/capture-rating.png"
  alt="Star rating pattern"
  width="85%"
/>

## Recommend?

This pattern snippet would capture a boolean `recommend` value using two radio buttons labeled as "Yes" and "No" (mapped to true and false values respecitvely). 

```yaml
schema:
  type: object
  required:
    - recommend
  properties:
    recommend:
      type: boolean
      enum:
        - true
        - false
description:
  properties:
    recommend:
      label: Would you recommend this product to anyone?
      items:
        true:
          label: Yes
        false:
          label: No
```

<CaptionedImage
  src="/images/how-tos/capture-recommend.png"
  alt="Recommend product pattern"
  width="85%"
/>

## Net Promoter Score

Another way to capture and quantify perception of a product or experience is by using a [Net Promoter Score](https://en.wikipedia.org/wiki/Net_promoter_score). This pattern below would capture a numerical NPS value using a specilized  NPS UI component.

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
      label: How likely are you to recommend this product to a friend?
```

<CaptionedImage
  src="/images/how-tos/capture-nps.png"
  alt="Capture NPS pattern"
  width="85%"
/>

## Review Feedback

Reviews are used to capture high variation, personalized feedback. As a digital version of a comment card, there are no constraints beyond the imagination of the author.

It can be a great tool to understand the sentiment of the people you serve and find areas for improvement.

### Open-ended Form

This pattern snippet would capture a high level Happy/Unhappy experience feedback, and conditionally display a comment box if the answer to the 'Are you happy with the experience today?' is set to 'No'.

```yaml
schema:
  if:
    properties:
      happy:
        const: 'No'
  then:
    properties:
      comment:
        type: string
  type: object
  required:
    - happy
  properties:
    happy:
      enum:
        - 'Yes'
        - 'No'
      type: string
descriptor:
  order:
    - happy
    - comment
  properties:
    happy:
      label: Are you happy with the experience today?
    comment:
      kind: textarea
      attrs:
        placeholder: E.g. wait time was unacceptable today
      label: What can we change to improve the experience?
```

<CaptionedImage
  src="/images/how-tos/capture-comment-conditional.png"
  alt="Highlighting the patterns tab and 'New pattern' button within the Routegy admin app"
  width="85%"
/>
