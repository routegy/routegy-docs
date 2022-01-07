---
title: "Patterns | Topic"
description: "What is a pattern?"
sidebar: false
---

# Patterns

A pattern defines what interactions and data are exposed and collected by an [app](/reference/apps/). Pattern definition is a YAML document that consists of two parts: a schema and a descriptor. The schema is a [JSON Schema](https://json-schema.org/) document that defines the information to be captured by an app. The descriptor contains additional information that describes how the data is collected. This includes customization of UI components that represent different parts of the schema (e.g. component type, placeholders and more) as well as customization of the app appearance itself.

### Examples

The following is an example pattern in its YAML form that contains a simple [JSON Schema](https://json-schema.org/) to collect information about a problem with an office printer. Collected datainclude a `problem` defined as an array of values from a predefined set of problem categories, and `additional_problem_info` string property for additional details or miscallanous category not included in the list. The descriptor part of the document defines the order of data properties to render, and it defines `additional_problem_info` as a `textarea` field to render it as a multiline text input.

```yaml
schema:
  type: object
  properties:
    problem:
      type: array
      items:
        - enum:
            - Doesn't turn on
            - Paper jam
            - No paper
            - No toner
            - Connectivity issue
            - Something else
          type: string
      title: What's going on?
      uniqueItems: true
    additional_problem_info:
      type: string
      title: Something else or more details?
  additionalProperties: false
descriptor:
  order:
    - problem
    - additional_problem_info
  properties:
    additional_problem_info:
      kind: textarea
      attrs:
        placeholder: E.g. Printer screen shows E104 error, cannot be reset and doesn't print
```

The following is the same pattern renedered by Routegy.
<p align="center">
  <img src="/images/patterns/office-printer-problem-pattern-preview.png" width="85%">
</p>

### Related

* [Topic: App](/topic/apps/)
* [Topic: AppData](/topic/app-data/)
* [Reference: App](/reference/apps/)
* [Reference: Patterns](/reference/patterns/)
* [Reference: AppData](/reference/app-data/)
