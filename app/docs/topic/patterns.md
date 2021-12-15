---
title: "Patterns | Topic"
description: "What is a pattern?"
sidebar: false
---

# Patterns

A pattern defines the constraints of how a person can interact with a [app](/topic/apps) or a [action type](/topic/action-types/).

These constraints are defined with a [JSON Schema](https://json-schema.org/) document and validated when a [event](/topic/events) or [action](/topic/actions/) is created.

A pattern with a `null` JSON Schema document indicates that no information should be collected.

### Examples

The following is an example [JSON Schema](https://json-schema.org/) document in YAML form.

```yaml
type: object
title: Problem with the coffee machine?
properties:
  problem:
    type: array
    attrs:
      type: checkbox
    items:
      - enum:
          - Ran out of beans/grounds
          - Grinder is not working
          - Out of filters
          - No more milk/creamer
          - No more sugar
          - Something else
        type: string
    title: What is going on?
  additional_comment:
    type: string
    attrs:
      type: textarea
      placeholder: E.g. machine is dead
    title: Something else or other details?
additionalProperties: false
```

The following is an example [JSON Schema](https://json-schema.org/) document in a rendered form.

![Pattern Preview](/images/patterns/office-coffee-machine-pattern-preview.png)

### Related

* [Topic: App](/topic/apps/)
* [Topic: AppData](/topic/app-data/)
* [Reference: App](/reference/apps/)
* [Reference: Patterns](/reference/patterns/)
* [Reference: AppData](/reference/app-data/)
