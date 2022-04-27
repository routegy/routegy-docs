---
title: "Capture maintenance requests | How-to"
description: "How do I capture maintenance requests?"
---

# Capture maintenance reports

This how-to covers how to create [patterns](/reference/patterns/) that capture maintenance requests. These are meant to gain immediate insight to the exact area of a request or issue without requiring additional requests for more information (E.g. who is making the request, where the request is being made).

## Prerequisite

You should be familiar with [creating new patterns](/how-to/create-new-patterns/).

## Elevator problem example

This pattern captures a problem with an elevator. Because the app has context, the reporter won't need to specify which evelevator has the issue.

In many cases, fielding maintenance issues within a space can be handled by [radio butons](/reference/patterns.html#radio-buttons) indicating common problems and a free-form text input to capture additional details or other items that aren't listed.

```yaml
title: Problem with the elevator?
problem:
  type: radiobuttons
  label: What is the problem?
  items:
    - Making strange sounds
    - Buttons not working
    - Door won't close
    - Stuck
    - Something else
additional_comment:
  type: textarea
  placeholder: E.g. 8th floor button does not light up
  label: Something else or other details?
```

<CaptionedImage
  src="/images/how-tos/capture-elevator.png"
  alt="Routegy app for capturing elevator maintenance requests with radio buttons for common issues and a text area for additional details"
  width="85%"
/>
