---
title: "Receive Slack notifications | How-to"
description: "How do I receive Slack notifications?"
---

# Receive Slack Notifications

This document describes how to make use of the [Slack Webhook Action Type](/reference/action-types/slack-webhook/) to receive slack message notifications.

Slack actions are used with a wide variety of [apps](/reference/apps/). These can require near immediate attention, a slower asynchronous approach, or even provide an easy-to-browse archive of all interactions.

## Creating the Action

Follow the steps below to create a [action](/reference/actions/) for sending email notifications.

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

From the action creation model, select **Slack** from the _Action type_ dropdown list.

<p align="center">
  <img src="/images/modals/personal-office-coffee-machine-edit-app-actions-slack.png" width="70%">
</p>

### Step 4

Enter the URL for your Slack Outgoing Webhook you wish to use, and click on **+ Create action** to complete the process.

::: tip
Create or view your Slack webhook integrations [here](https://slack.com/apps/A0F7VRG6Q-outgoing-webhooks).
:::

<p align="center">
  <img src="/images/modals/personal-office-coffee-machine-edit-app-actions-slack-save.png" width="70%">
</p>

## Attach the action to the app

Follow the steps below to attach the Webhook action created above to one or more [apps](/reference/apps/).

### Step 1

Select the **Apps** tab within the workspace view and select the [app](/reference/apps/) you wish to receive Slack notifications for.

<p align="center">
  <img src="/images/how-tos/edit-app.png" width="90%">
</p>

### Step 2

From the app model, click on the **Edit** button.

<p align="center">
  <img src="/images/modals/personal-office-coffee-machine-edit-app.png" width="70%">
</p>

### Step 3

From the app edit model, type in the name of your action in _Actions_ list. The name will autocomplete as you type.

<p align="center">
  <img src="/images/modals/personal-office-coffee-machine-edit-app-actions-slack.png" width="70%">
</p>

### Step 4

Click on the **Save changes** button and you're done!

<p align="center">
  <img src="/images/modals/personal-office-coffee-machine-edit-app-actions-slack-save.png" width="70%">
</p>


## Wait for App Interaction 

Now that your app is configured, you just wait until someone interacts with it. Once they do, you'll receive an Slack that looks something like this.

![Action Integration](/images/actions/personal-office-coffee-machine-slack.png)
