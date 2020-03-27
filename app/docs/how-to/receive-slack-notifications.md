---
title: "Receive Slack notifications | How-to"
description: "How do I receive Slack notifications?"
sidebar: false
---

# Receive Slack Notifications

This document describes how to make use of the [Slack Touch Handler Type](/reference/touch-handler-types/slack/) to receive slack message notifications.

Slack touch handlers are used with a wide variety of [touchpoints](/reference/touchpoints/). These can require near immediate attention, a slower asynchronous approach, or even provide an easy-to-browse archive of all interactions.

### Creating the Touch Handler

Follow the steps below to create a [touch handler](/reference/touch-handlers/) for sending Slack notifications.

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

From the touch handler creation model, select **Slack** from the _Handler type_ dropdown list.

![Slack Handler Type Dropdown List](/images/modals/office-create-handler-slack.png)

#### Step 5

Enter the URL for your Slack Outgoing Webhook you wish to use.

::: tip
Create or view your Slack webhook integrations [here](https://slack.com/apps/A0F7VRG6Q-outgoing-webhooks).
:::

#### Step 6

Click on **+ Create handler** to complete the process.

![Slack Handler Filled](/images/modals/office-create-handler-slack-filled.png)

### Attaching Touch Handler to Touchpoint

Follow the steps below to attach the Slack touch handler created above to one or more [touchpoints](/reference/touchpoints/).

#### Step 1

Select the **Touchpoints** tab within the workspace view.

![Select Touchpoints Menu](/images/navigation/select-touchpoints-menu.png)

#### Step 2

Select the [touchpoint](/reference/touchpoints/) you wish to receive Slack notifications for.

![Select Touchpoint](/images/tree/personal-office-select-touchpoint.png)

#### Step 3

From the touchpoint model, click on the **Edit** button.

![Edit Touchpoint](/images/modals/personal-office-coffee-machine-edit-touchpoint.png)

#### Step 4

From the touchpoint edit model, type in the name of your touch handler in _Handlers_ list. The name will autocomplete as you type.

![Add Touch Handler](/images/modals/personal-office-coffee-machine-edit-touchpoint-handlers-slack.png)

#### Step 5

Click on the **Save changes** button and you're done!

![Save Touchpoint](/images/modals/personal-office-coffee-machine-edit-touchpoint-handlers-slack-save.png)

### Wait for Touchpoint Interaction 

Now that your touchpoint is configured, you just wait until someone interacts with it. Once they do, you'll receive an Slack that looks something like this.

![Handler Integration](/images/handlers/personal-office-coffee-machine-slack.png)
