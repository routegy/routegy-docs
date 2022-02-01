---
title: "Capture hot/cold requests | How-to"
description: "How do I capture hot/cold requests?"
---

# Capture temperature requests

The goal of this document is to cover how to create [patterns](/topic/patterns/) that capture temperature change requests. These are meant to gain insight into HVAC problems or quickly respond to improve the spaces and people that you serve.

## Prerequisites

Before starting, you should familiarize yourself with the [How to: Create new patterns](/how-to/create-new-patterns/) document. Only once you've read that and are confident in creating new patterns in the Admin web app, should you continue.

## Temperature Changes

Temperature change requests a.k.a "Hot/Cold" requests are simple mutually exclusive choices indicating how the person feels relative to the current temperature.

### Hot/Cold

This pattern snippet would capture a mutually exclusive choice for whether it is too hot or cold.

```yaml
type: object
title: 'Requesting a temperature change?'
required:
  - request
properties:
  request:
    type: array
    attrs:
      type: radio
    items:
      - enum:
          - It's too hot
          - It's too cold
        type: string
    title: How can we help?
additionalProperties: false
```

## Related

* [How-to: Capture maintenance requests](/how-to/capture-maintenance-requests/)
* [How-to: Capture supply requests](/how-to/capture-supply-requests/)
