---
title: "Capture IT requests | How-to"
description: "How do I capture IT requests?"
---

# Capture IT requests

This how-to covers how to create [patterns](/reference/patterns/) that capture IT requests. These patterns are meant to gain immediate insight to the exact area of a problem without requiring additional requests for more information (E.g. Information that can be inferred like who is performing the request or where they're making the request).

## Prerequisite

You should be familiar with [creating new patterns](/how-to/create-new-patterns/).

## Call room problem example

This pattern captures isssues within a call room. IT problems are dynamic in nature, so in this example they're handled by a group of checkboxes indicating common problems and a free-form text input to capture additional details or other items that aren't listed.

IT related requests tend to be a blend of the patterns used in [maintenance requests](/how-to/capture-maintenance-requests/) and [supply requests](/how-to/capture-supply-requests/).

```yaml
title: 'Problem in the call room?'
problem:
  type: checkboxes
  title: What's the problem?
  required: true
  items:
    - Call quality is poor
    - WiFi signal is poor
    - Projector/TV not working
    - Audio system not working
    - Web camera not working
    - Tablet battery is dead
    - Missing A/V adapters
    - Something else
additional_comment:
  type: textarea
  placeholder: Provide any additional information here to help us help you
  title: Something else or other details?
```

## Related

* [How-to: Capture maintenance requests](/how-to/capture-maintenance-requests/)
* [How-to: Capture hot/cold requests](/how-to/capture-hot-cold-requests/)
* [How-to: Capture supply requests](/how-to/capture-supply-requests/)
