---
title: "Routegy at a glance | Tutorial"
description: "How do I use Routegy?"
sidebar: false
---

# Routegy at a glance

The goal of this tutorial is to give you enough specifics to understand how Routegy works at a high level, but this isn't intended to be a reference guide. When you're ready, you'll want to check out the [Getting started](/tutorial/getting-started/) tutorial, read more high level overviews in our [topic guides](/topic/), tackle specific problems in our [how-to guides](/how-to/) or dive deep into our technical [reference guides](/reference/).

Routegy was designed to empower people to interact with physical spaces in streamlined ways. Here’s an informal overview of how Routegy works.

## Define locations and touchpoints

[Locations](/topic/locations/) are structured in a hierarchy that maps to locations that make sense to you and your business. These can be physical locations, e.g. `1st Floor` or `Jamrich Building`, or virtual locations, e.g. `Blog post` or `Slack channel`.

[Touchpoints](/topic/touchpoints/) are structured as common points of interaction within those locations. These interactions can be for making purchases, reporting issues, submitting requests, starting chat conversations, or providing feedback.

![Location Tree](/images/navigation/office-1st-floor-conference-room-101-tree.png)

## Choosing what kind of information to collect

[Schemas](/topic/schemas/) are structured to control the UX and constraints of information you're collecting for each interaction. You have full control to create and customize these experience for each touchpoint.

Write a structured schema document that can be used to capture any information you like.

```yaml
type: object
title: Something wrong with the elevator?
properties:
  request:
    type: array
    attrs:
      type: checkbox
    items:
      - enum:
          - Making strange sounds
          - Buttons not working
          - Door won't close
          - Stuck
          - Something else
        type: string
    title: What's the problem?
  additional_comment:
    type: string
    attrs:
      type: textarea
      placeholder: E.g. 8th floor button does not light up
    title: Something else or other details?
additionalProperties: false
```

![Elevator Issue Preview](/images/schemas/office-elevator-issue-schema-preview.png)

## Choosing where the information should go

[Handlers](/topic/touch-handlers/) are structured to control how Routegy should process and route the captured information to you. These can be notifications like `email` or `SMS`, work management systems like `Trello` or `JIRA`, and hooks like `Zapier`, `IFTTT` or `Webhooks`.

Minimize the noise of the daily ephemera. Be notified instantly for high priority issues. It's entirely up to you.

![Handlers List](/images/modals/office-experience-edit-touchpoint-handlers.png)
![JIRA Handler Creation](/images/modals/office-create-handler-jira.png)

## Place touchpoints around your space

[Touchpoints](/topic/touchpoints/) are placed around your space for people to interact with. QR codes, NFC tags, buttons or sensors. Use our designs or customize for your brand.

![Hotel Survey](/images/marketing/hotel-survey.jpg)
