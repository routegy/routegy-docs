---
title: "Capture hot/cold requests | How-to"
description: "How do I capture hot/cold requests?"
---

# Capture temperature requests

This how-to covers how to create [patterns](/reference/patterns/) that capture temperature-change (I.e. "Hot/Cold") requests. These are meant to gain insight into HVAC problems and quickly respond to peoples' preferences within your spaces. Temperature change requests are simple, mutually exclusive choices indicating how a person feels relative to the current temperature.

## Prerequisite

You should be familiar with [creating new patterns](/how-to/create-new-patterns/).

## Hot/Cold example

This pattern captures a mutually exclusive choice ('hot' and 'cold' string values) for whether it is too hot or cold using a specialized UI component as seen below.

```yaml
label: How's the temperature in this room?
hot_or_cold:
  type: hotorcold
```

<CaptionedImage
  src="/images/how-tos/capture-hot-or-cold.png"
  alt="Capture hot vs. cold request"
  width="85%"
/>
