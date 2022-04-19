---
title: "Routegy at a glance | Tutorial"
description: "How do I use Routegy?"
---

# Routegy at a glance

Routegy was designed to empower people to interact with infrastructure and physical spaces in streamlined ways. Here’s a high-level overview of how Routegy works.

## People interact with apps

[Routegy apps](/reference/apps/) are web-based and represent common points of interaction, accomplish specific tasks that may span multiple parts of your infrastructure, and contain context to further optimize your processes. Common interactions include reporting issues, making requests, starting chat conversations, providing feedback, or even making purchases.

## Groups organize your apps

Apps belong to [groups](/reference/groups/), which are structured in a tree-like hierarchy. These can represent physical things, like `1st Floor` or `Jamrich Building`, people (E.g. `Employees -> Jane Smith`) or virtual things like `Production Website` or `Inventory`.

You don't have to use groups, but they're always there if the need for more organization arises.

<CaptionedImage
  src="/images/navigation/office-1st-floor-conference-room-101-tree.png"
  alt="An office layout in a tree where rooms are nested and apps like 'Need something?' are placed in relevant rooms"
  width="60%"
/>

## Patterns define the information your apps collect

Every app has a pattern. [Patterns](/reference/patterns/) control the UX and defines the information to collect for each interaction with an app. Patterns are reusable across multiple apps, allowing for easy scaling and maintenance. For example, you may have a pattern for "New Employee Orientation" and then automatically create a personalized app from that pattern for every new employee.

Patterns are written in YAML and can be used to capture any information you like.

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

<CaptionedImage
  src="/images/patterns/office-elevator-issue-pattern-preview.png"
  alt="A rendered UI for reporting an elevator issue based on the YAML above"
  caption="The YAML is rendered into a responsive web application"
  width="85%"
/>

## People interact with your apps and create events

Every time a person (or bot) interacts with your app, an [event](/reference/events) is created. Events contain information supplied as defined in the app's associated pattern, as well as context, such as which groups it belongs to, the way the app was accessed, metadata associated with the app, etc.

## Events trigger actions (notifications and integrations)

[Actions](/reference/actions/) control how Routegy processes and routes captured information to you and your infrastructure. These can be notifications like `email` or `SMS`, work management systems like `Trello` or `JIRA`, and hooks like `Zapier`, `IFTTT` or `Webhooks`.

<CaptionedImage
  src="/images/modals/office-experience-edit-app-actions.png"
  alt="Multiple actions like email and Slack assigned to a single app"
  caption="You can add as many actions as you'd like to your apps"
  width="85%"
/>

<CaptionedImage
  src="/images/modals/office-create-action-jira.png"
  alt="The configuration of a Jira action that specifies the target project and priority for tickets created with it"
  caption="Configure actions to do exactly what you need them to do"
  width="85%"
/>

## Access apps from anywhere with a web browser

Every [app](/reference/apps/) has its own unique URL. Apps can be shared in email, wikis, Slack, etc. They can also be embedded in QR codes, NFC tags, and even IOT devices placed around your space for people to interact with.

Apps open in a device's web browser, are optimized to adapt to a device's display, and require no native app installation.

<CaptionedImage
  src="/images/marketing/hotel-survey.jpg"
  alt="A plastic stand with a printed QR code and the text 'How are we doing?'"
  caption="Access your apps from anywhere, including physical spaces via QR codes and NFC tags"
  width="85%"
/>
