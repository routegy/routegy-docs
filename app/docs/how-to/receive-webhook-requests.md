---
title: "Receive Webhook requests | How-to"
description: "How do I receive webhook requests?"
sidebar: false
---

# Receive Webhook Notifications

This document describes how to make use of the [Webhook Action Type](/reference/action-types/webhook/) to receive HTTP requests with JSON data when someone interacts with your microapps.

Webhook actions are extremely powerful as they can be integrated with any existing system that can receive HTTP requests.

### Creating the Action

Follow the steps below to create a [action](/reference/actions/) for creating Webhooks.

#### Step 1

Start by making sure you're in the desired [workspace](/reference/workspaces/). Click on the menu bar dropdown to choose.

![Choose Workspace](/images/navigation/choose-workspace-dropdown.png)

#### Step 2

Select the **Actions** tab within the workspace view.

![Select Actions Menu](/images/navigation/select-actions-menu.png)

#### Step 3

Click on the **+ New Action** button. This will launch a modal for creating new actions.

![New Action Button](/images/buttons/new-action.png)

#### Step 4

From the action creation model, select **Webhook** from the _Action type_ dropdown list.

![Webhook Action Type Dropdown List](/images/modals/office-create-action-webhook.png)

#### Step 5

Enter the URL for the webhook endpoint you would like to use.

#### Step 7

Click on **+ Create action** to complete the process.

![Webhook Action Filled](/images/modals/office-create-action-webhook-filled.png)

### Attaching Action to Microapp

Follow the steps below to attach the Webhook action created above to one or more [microapps](/reference/microapps/).

#### Step 1

Select the **Microapps** tab within the workspace view.

![Select Microapps Menu](/images/navigation/select-microapps-menu.png)

#### Step 2

Select the [microapp](/reference/microapps/) you wish to receive webhook requests from.

![Select Microapp](/images/tree/personal-office-select-microapp.png)

#### Step 3

From the microapp model, click on the **Edit** button.

![Edit Microapp](/images/modals/personal-office-coffee-machine-edit-microapp.png)

#### Step 4

From the microapp edit model, type in the name of your action in _Actions_ list. The name will autocomplete as you type.

![Add Action](/images/modals/personal-office-coffee-machine-edit-microapp-actions-webhook.png)

#### Step 5

Click on the **Save changes** button and you're done!

![Save Microapp](/images/modals/personal-office-coffee-machine-edit-microapp-actions-webhook-save.png)

### Wait for Microapp Interactions

Now that your microapp is configured, you just wait until someone interacts with it. Once they do, you'll automatically receive an HTTP requests that looks something like this.

![Action Integration](/images/actions/personal-office-coffee-machine-webhook.png)
