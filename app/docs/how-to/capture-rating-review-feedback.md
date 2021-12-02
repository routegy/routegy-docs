---
title: "Capture rating & review feedback | How-to"
description: "How do I capture rating & review feedback?"
sidebar: false
---

# Capture rating & review feedback

The goal of this document is to cover how to create [patterns](/topics/patterns/) that capture feedback with a rating & review prompt. These are meant to gain insight with a fixed size scoring mechanism and optionally an additional free-form input to capture personalized feedback.

## Prerequisites

Before starting, you should familiarize yourself with the [How to: Create new patterns](/how-to/create-new-patterns/) document. Only once you've read that and are confident in creating new patterns in the Admin web app, should you continue.

## Ratings

Ratings prompts are meant to capture numeric values that represent how a person feels about the question you're asking.

The numeric value captured can vary a bit depending on the context and what is being asked.

* Upvote/downvote systems (Reddit)
* Star ratings (Amazon products, iOS app store)
* 'Like' buttons (Facebook)

All of these are examples of a ratings prompt but they are slightly different. Voting systems are mutually exclusive, star ratings are a range (1-5, 1-10, etc.), and 'Like' buttons are unary.

### Upvote/Downvote

This pattern snippet would capture a mutually exclusive choice.

```yaml
type: object
title: How would you rate this event?
required:
  - vote
properties:
  vote:
    type: array
    attrs:
      type: radio
    items:
      - enum:
          - Up
          - Down
        type: string
    title: Vote
additionalProperties: false
```

### Stars

This pattern snippet would capture a 1 to 5 rating with a default value of 3.

```yaml
type: object
title: How would you rate this product?
required:
  - rating
properties:
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
    default: 3
additionalProperties: false
```

### Like?

This pattern snippet would capture a 'Like' with a default value indicating no action. 

```yaml
type: object
title: Do you like Routegy?
required:
  - like
properties:
  like:
    type: boolean
    attrs:
      type: checkbox
    title: 'Like?'
    default: false
additionalProperties: false
```

## Review Feedback

Reviews are used to capture high variation, personalized feedback. As a digital version of a comment card, there are no constraints beyond the imagination of the author.

It can be a great tool to understand the sentiment of the people you serve and find areas for improvement.

### Open-ended Form

This pattern snippet would capture open-ended feedback for areas of an experience that went well and those that can be improved.

```yaml
type: object
title: How was your experience today?
properties:
  positive:
    type: string
    attrs:
      type: textarea
    title: What are we doing well?
  negative:
    type: string
    attrs:
      type: textarea
    title: What can we improve?
additionalProperties: false
```

## Related

* [How-to: Capture survey feedback](/how-to/capture-survey-feedback/)
