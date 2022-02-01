---
title: "Receive Webhook requests | How-to"
description: "How do I receive webhook requests?"
---

# Receive Webhook Notifications

This document describes how to make use of the [Webhook Action Type](/reference/action-types/webhook/) to receive HTTP requests with JSON data when someone interacts with your apps.

Webhook actions are extremely powerful as they can be integrated with any existing system that can receive HTTP requests.

## Creating the Action

Follow the steps below to create a [action](/reference/actions/) for creating Webhooks.

### Step 1

Start by making sure you're in the desired [workspace](/reference/workspaces/). Click on the menu bar dropdown to choose.

<p align="center">
  <img src="/images/navigation/choose-workspace-dropdown.png" width="90%">
</p>

### Step 2

Select the **Actions** tab within the workspace view and click the **+ New Action** button. This will launch a modal for creating new actions.

<p align="center">
  <img src="/images/how-tos/create-new-action.png" width="90%">
</p>

### Step 3

From the action creation model, select **Webhook** from the _Action type_ dropdown list.

<p align="center">
  <img src="/images/modals/office-create-action-webhook.png" width="70%">
</p>

### Step 4

Enter a _name_, _description_ (optional), enter the URL for the webhook endpoint you would like to use, and click on **+ Create action** to complete the process.

<p align="center">
  <img src="/images/modals/office-create-action-webhook-filled.png" width="70%">
</p>

## Attach the action to the app

Follow the steps below to attach the Webhook action created above to one or more [apps](/reference/apps/).

Select the **Apps** tab within the workspace view and select the [app](/reference/apps/) you wish to receive SMS notifications for.

<p align="center">
  <img src="/images/how-tos/edit-app.png" width="90%">
</p>

### Step 1

From the app model, click on the **Edit** button.

<p align="center">
  <img src="/images/modals/personal-office-coffee-machine-edit-app.png" width="70%">
</p>

### Step 2

From the app edit model, type in the name of your action in _Actions_ list. The name will autocomplete as you type.

<p align="center">
  <img src="/images/modals/personal-office-coffee-machine-edit-app-actions-webhook.png" width="70%">
</p>

### Step 3

Click on the **Save changes** button and you're done!

<p align="center">
  <img src="/images/modals/personal-office-coffee-machine-edit-app-actions-webhook-save.png" width="70%">
</p>

## Wait for App Interactions

Now that your app is configured, you just wait until someone interacts with it. Once they do, you'll automatically receive an HTTP requests that looks something like this.

![Action Integration](/images/actions/personal-office-coffee-machine-webhook.png)
