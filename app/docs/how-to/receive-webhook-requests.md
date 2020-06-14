---
title: "Receive Webhook requests | How-to"
description: "How do I receive webhook requests?"
sidebar: false
---

# Receive Webhook Notifications

This document describes how to make use of the [Webhook Touch Handler Type](/reference/touch-handler-types/webhook/) to receive HTTP requests with JSON data when someone interacts with your touchpoints.

Webhook touch handlers are extremely powerful as they can be integrated with any existing system that can receive HTTP requests.

### Creating the Touch Handler

Follow the steps below to create a [touch handler](/reference/touch-handlers/) for creating Webhooks.

#### Step 1

Start by making sure you're in the desired [workspace](/reference/workspaces/). Click on the menu bar dropdown to choose.

![Choose Workspace](/images/navigation/choose-workspace-dropdown.png)

#### Step 2

Select the **Handlers** tab within the workspace view.

![Select Handlers Menu](/images/navigation/select-handlers-menu.png)

#### Step 3

Click on the **+ New Handler** button. This will launch a modal for creating new touch handlers.

![New Handler Button](/images/buttons/new-handler.png)

#### Step 4

From the touch handler creation model, select **Webhook** from the _Handler type_ dropdown list.

![Webhook Handler Type Dropdown List](/images/modals/office-create-handler-webhook.png)

#### Step 5

Enter the URL for the webhook endpoint you would like to use.

#### Step 7

Click on **+ Create handler** to complete the process.

![Webhook Handler Filled](/images/modals/office-create-handler-webhook-filled.png)

### Attaching Touch Handler to Touchpoint

Follow the steps below to attach the Webhook touch handler created above to one or more [touchpoints](/reference/touchpoints/).

#### Step 1

Select the **Touchpoints** tab within the workspace view.

![Select Touchpoints Menu](/images/navigation/select-touchpoints-menu.png)

#### Step 2

Select the [touchpoint](/reference/touchpoints/) you wish to receive webhook requests from.

![Select Touchpoint](/images/tree/personal-office-select-touchpoint.png)

#### Step 3

From the touchpoint model, click on the **Edit** button.

![Edit Touchpoint](/images/modals/personal-office-coffee-machine-edit-touchpoint.png)

#### Step 4

From the touchpoint edit model, type in the name of your touch handler in _Handlers_ list. The name will autocomplete as you type.

![Add Touch Handler](/images/modals/personal-office-coffee-machine-edit-touchpoint-handlers-webhook.png)

#### Step 5

Click on the **Save changes** button and you're done!

![Save Touchpoint](/images/modals/personal-office-coffee-machine-edit-touchpoint-handlers-webhook-save.png)

### Wait for Touchpoint Interactions

Now that your touchpoint is configured, you just wait until someone interacts with it. Once they do, you'll automatically receive an HTTP requests that looks something like this.

![Handler Integration](/images/handlers/personal-office-coffee-machine-webhook.png)
