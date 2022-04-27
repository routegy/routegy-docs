---
title: "Capture rating & review feedback | How-to"
description: "How do I capture rating & review feedback?"
---

# Capture rating & review feedback

This how-to covers how to create [patterns](/reference/patterns/) that capture feedback with various rating and review prompts.

## Prerequisite

You should be familiar with [creating new patterns](/how-to/create-new-patterns/).

## Star rating example

This pattern captures a rating value between one (worst) and five (best) using a star rating component.

```yaml
product_rating:
  type: rating
  default: 3
  label: How would your rate this product?
```

<CaptionedImage
  src="/images/how-tos/capture-rating.png"
  alt="Routegy app with a star rating component with three stars selected"
  width="85%"
/>

## Recommendation survey example

This pattern captures a boolean `recommend` value using two radio buttons labeled as "Yes" and "No" (mapped to `true` and `false` respecitvely). 

```yaml
recommend:
  type: radiobuttons
  label: Would you recommend this product to anyone?
  required: true
  items:
    - value: true
      label: Yes
    - value: false
      label: No
```

<CaptionedImage
  src="/images/how-tos/capture-recommend.png"
  alt="Routegy app that captures whether a person recommends a product by selecting one of two radio buttons to indicate their answer"
  width="85%"
/>

## Net promoter score (NPS) example

Another way to capture and quantify perception of a product or experience is by using a [net promoter score](https://en.wikipedia.org/wiki/Net_promoter_score). This pattern captures a numerical NPS value using a specilized [NPS component](/reference/patterns.html#net-promotor-score)

```yaml
score:
  type: nps
  label: How likely are you to recommend this product to a friend?
```

<CaptionedImage
  src="/images/how-tos/capture-nps.png"
  alt="Routegy app that captures a net promotor score to indicate how likely someone is to refcommend a product to a friend"
  width="85%"
/>

## Open-ended review example

Reviews are used to capture high variation, personalized feedback. Think of these as the digital version of a comment card. They can be a great tool to understand the sentiment of the people you serve and find areas for improvement.

This pattern captures high level Happy/Unhappy experience feedback, and conditionally displays a text area if the answer to the 'Are you happy with the experience today?' question is answered 'No' in order to collect additional information.

```yaml
happy:
  type: radiobuttons
  label: Are you happy with the experience today?
  items:
    - Yes
    - No
  required: true
comment:
  type: textarea
  placeholder: E.g. Wait time was unacceptable today
  label: How did we fail to meet your expectations?
  visible:
    happy: No
```

<CaptionedImage
  src="/images/how-tos/capture-comment-conditional.png"
  alt="Routegy app that captures whether a person is happy with an experience and if they say no are asked for additional information"
  width="85%"
/>
