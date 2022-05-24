---
title: "SMS | Action types | Reference"
description: "How do SMS action types work?"
---

# SMS

The SMS action type is used to send text messages to a configured phone number for every [event](/reference/events/) created by an [app](/reference/apps/).

You can customize the message of the SMS with [Routegy templating](/reference/templating).


## Sending messages to dynamic addresses

It's possible to use a value collected by an app's pattern. To do so, create an SMS action as normal, but in the *Phone number* field place a reference to the value using the syntax <span v-pre>`{{ valueName }}`</span>. For example, if you have a [multi-page wizard](/reference/patterns#multipage-patterns) with a page named `step1` and an input called `customerPhone`, you can send an SMS to the collected address using <span v-pre>`{{ step1.customerPhone }}`</span> in the *Phone number* field.

## Guides

* [How-to: Receive SMS notifications](/how-to/receive-sms-notifications/)
