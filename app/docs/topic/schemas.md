---
title: "Schemas | Topic"
description: "What is a schema?"
sidebar: false
---

# Schemas

A schema defines the constraints of how a person can interact with a [microapp](/topics/microapps) or a [action type](/topics/action-types/).

These constraints are defined with a [JSON Schema](https://json-schema.org/) document and validated when a [event](/topics/events) or [action](/topics/actions/) is created.

A schema with a `null` JSON Schema document indicates that no information should be collected.

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

![Schema Preview](/images/schemas/office-coffee-machine-schema-preview.png)

### Related

* [Topic: Microapp](/topic/microapps/)
* [Topic: SchemaValues](/topic/schema-values/)
* [Reference: Microapp](/reference/microapps/)
* [Reference: Schemas](/reference/schemas/)
* [Reference: SchemaValues](/reference/schema-values/)
