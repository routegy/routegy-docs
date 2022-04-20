---
title: "Capture survey feedback | How-to"
description: "How do I capture survey feedback?"
---

# Capture survey feedback

The goal of this document is to cover how to create [patterns](/reference/patterns/) that capture feedback with a survey. Surveys are meant to gain insight by asking targeted questions to better understand the person and their feedback.

## Prerequisites

Before starting, you should familiarize yourself with the [How to: Create new patterns](/how-to/create-new-patterns/) document. Only once you've read that and are confident in creating new patterns in the Admin web app, should you continue.

### Example

This pattern snippet is an imaginary survey that captures some information about the person and how they heard about the company before asking them for feedback.

```yaml
title: 'Routegy trial survay'
customer_name:
  type: text
  placeholder: e.g. Suzan Johnson
  title: Your name
customer_email:
  type: email
  placeholder: e.g. suzan.johnson@gmail.com
  title: Your email address
learn:
  type: radiobuttons
  items:
    - Hacker News
    - Twitter
    - Product Hunt
    - I know one of the founders
    - Other
  title: How did you first learn about Routegy?
other_learn:
  type: string
  placeholder: E.g. LinkedIn
  visible:
    learn: Other
industry:
  type: radiobuttons
  items:
    - Workplace Experience
    - Hospitality
    - Healthcare
    - Airlines
    - Restaurant/Retail
    - Other
  title: What industry do you work in?
other_industry:
  type: string
  placeholder: E.g. Sport venues
  visible:
    industry: Other
rating:
  type: rating
  title: How would you rate your experience with Routegy so far?
  default: 3
review:
  type: textarea
  placeholder: E.g. I really like the product
  title: Any comments or suggestions?
