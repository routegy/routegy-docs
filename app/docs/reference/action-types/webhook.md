---
title: "Action types | Webhook | Reference"
description: "How do webhook action types work?"
---

# Webhook

The webhook action type is used to call a webhook URL with JSON payload for every [event](/reference/events/) created by an [app](/reference/apps/).

::: warning
Webhooks are not yet configurable using [templating](/reference/templating/).
:::

## Guides

* [How-to: Receive webhook notifications](/how-to/receive-webhook-requests)

## Screenshots

### Create

<CaptionedImage
  src="/images/modals/office-create-action-webhook.png"
  alt="Image of the 'New action' dialog with the 'Webhook' action type selected in the Routegy admin app"
  width="75%"
/>

### Configure

<CaptionedImage
  src="/images/modals/office-create-action-webhook-filled.png"
  alt="Image of the 'New action' dialog with the 'Webhook' action type configured in the Routegy admin app"
  width="75%"
/>

### Example

<CaptionedImage
  src="/images/actions/personal-office-coffee-machine-webhook.png"
  alt="Image of a JSON payload POSTed to an endpoint by an interaction with a Routegy app named 'Coffee machine'"
  width="75%"
/>
