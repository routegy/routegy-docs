---
title: "Capture survey feedback | How-to"
description: "How do I capture survey feedback?"
sidebar: false
---

# Capture survey feedback

The goal of this document is to cover how to create [schemas](/topics/schemas/) that capture feedback with a survey. Surveys are meant to gain insight by asking targeted questions to better understand the person and their feedback.

## Prerequisites

Before starting, you should familiarize yourself with the [How to: Create new schemas](/how-to/create-new-schemas/) document. Only once you've read that and are confident in creating new schemas in the Admin web app, should you continue.

### Example

This schema snippet is an imaginary survey that capture some information about the person and how they heard about the company before asking them for feedback.

```yaml
type: object
title: 'Request a Routegy demo'
required:
  - name
  - email
  - learn
  - industry
  - rating
  - review
properties:
  name:
    type: string
    attrs:
      type: string
      placeholder: e.g. Suzan Johnson
    title: Your name
  email:
    type: string
    attrs:
      type: email
      placeholder: e.g. suzan.johnson@gmail.com
    title: Your email address
  learn:
    type: array
    attrs:
      type: radio
    items:
      - enum:
          - Hacker News
          - Twitter
          - Product Hunt
          - I know one of the founders
          - Other
        type: string
    title: How did you first learn about Routegy?
  other_learn:
    type: string
    attrs:
      placeholder: E.g. LinkedIn
    default: ''
  industry:
    type: array
    attrs:
      type: radio
    items:
      - enum:
          - Workplace Experience
          - Hospitality
          - Healthcare
          - Airlines
          - Restaurant/Retail
          - Other
        type: string
    title: What industry do you work in?
  other_industry:
    type: string
    attrs:
      placeholder: E.g. Sport venues
    default: ''
  rating:
    enum:
      - 1
      - 2
      - 3
      - 4
      - 5
    type: integer
    attrs:
      type: radio
    title: Rating
    description: Higher is better
    default: 3
  review:
    type: string
    attrs:
      type: textarea
      placeholder: E.g. I really like the product
    title: How are we doing?
additionalProperties: false
```

## Related

* [How-to: Capture rating & review feedback](/how-to/capture-rating-review-feedback/)
