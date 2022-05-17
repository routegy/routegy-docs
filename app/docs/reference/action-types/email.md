---
title: "Email | Action types | Reference"
description: "How do email action types work?"
---

# Email

The email action type is used to send an email to a configured address for every [event](/reference/events/) created by an [app](/reference/apps/).

Emails are sent in plain text. You can customize the subject line and body of the email, both of which support [Routegy templating](/reference/templating).

## Sending emails to dynamic addresses

It's possible to use a value collected by an app's pattern. To do so, create an email action as normal, but in the email address field place a reference to the value using the syntax <span v-pre>`{{ valueName }}`</span>. For example, if you have a [multi-page wizard](/reference/patterns#multipage-patterns) with a page named `step1` and an input called `customerEmail`, you can send an email to the collected address using <span v-pre>`{{ step1.customerEmail }}`</span> in the *Email address* field.

## Guides

* [How-to: Receive email notifications](/how-to/receive-email-notifications/)
