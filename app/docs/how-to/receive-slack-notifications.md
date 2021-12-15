---
title: "Receive Slack notifications | How-to"
description: "How do I receive Slack notifications?"
sidebar: false
---

# Receive Slack Notifications

This document describes how to make use of the [Slack Webhook Action Type](/reference/action-types/slack-webhook/) to receive slack message notifications.

Slack actions are used with a wide variety of [apps](/reference/apps/). These can require near immediate attention, a slower asynchronous approach, or even provide an easy-to-browse archive of all interactions.

### Creating the Action

Follow the steps below to create a [action](/reference/actions/) for sending Slack notifications.

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

From the action creation model, select **Slack** from the _Action type_ dropdown list.

![Slack Action Type Dropdown List](/images/modals/office-create-action-slack.png)

#### Step 5

Enter the URL for your Slack Outgoing Webhook you wish to use.

::: tip
Create or view your Slack webhook integrations [here](https://slack.com/apps/A0F7VRG6Q-outgoing-webhooks).
:::

#### Step 6

Click on **+ Create action** to complete the process.

![Slack Action Filled](/images/modals/office-create-action-slack-filled.png)

### Attaching Action to App

Follow the steps below to attach the Slack action created above to one or more [apps](/reference/apps/).

#### Step 1

Select the **Apps** tab within the workspace view.

![Select Apps Menu](/images/navigation/select-apps-menu.png)

#### Step 2

Select the [app](/reference/apps/) you wish to receive Slack notifications for.

![Select App](/images/tree/personal-office-select-app.png)

#### Step 3

From the app model, click on the **Edit** button.

![Edit App](/images/modals/personal-office-coffee-machine-edit-app.png)

#### Step 4

From the app edit model, type in the name of your action in _Actions_ list. The name will autocomplete as you type.

![Add Action](/images/modals/personal-office-coffee-machine-edit-app-actions-slack.png)

#### Step 5

Click on the **Save changes** button and you're done!

![Save App](/images/modals/personal-office-coffee-machine-edit-app-actions-slack-save.png)

### Wait for App Interaction 

Now that your app is configured, you just wait until someone interacts with it. Once they do, you'll receive an Slack that looks something like this.

![Action Integration](/images/actions/personal-office-coffee-machine-slack.png)
