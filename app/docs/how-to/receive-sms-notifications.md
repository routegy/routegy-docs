---
title: "Receive SMS notifications | How-to"
description: "How do I receive SMS notifications?"
sidebar: false
---

# Receive SMS Notifications

This document describes how to make use of the [SMS Action Type](/reference/action-types/sms/) to receive text message notifications.

SMS actions are commonly used with high priority [microapps](/reference/microapps/) that require immediate attention or staff members that are constantly on the go.

### Creating the Action

Follow the steps below to create a [action](/reference/actions/) for sending SMS notifications.

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

From the action creation model, select **SMS** from the _Action type_ dropdown list.

![SMS Action Type Dropdown List](/images/modals/office-create-action-sms.png)

#### Step 5

Enter a _name_, _description_ (optional) and desired phone number.

::: tip
If you don't provide a country code, it will default to 1. See [wikipedia](https://en.wikipedia.org/wiki/List_of_country_calling_codes) for more details.
:::

#### Step 6

Click on **+ Create action** to complete the process.

![SMS Action Filled](/images/modals/office-create-action-sms-filled.png)

### Attaching Action to Microapp

Follow the steps below to attach the SMS action created above to one or more [microapps](/reference/microapps/).

#### Step 1

Select the **Microapps** tab within the workspace view.

![Select Microapps Menu](/images/navigation/select-microapps-menu.png)

#### Step 2

Select the [microapp](/reference/microapps/) you wish to receive SMS notifications for.

![Select Microapp](/images/tree/personal-office-select-microapp.png)

#### Step 3

From the microapp model, click on the **Edit** button.

![Edit Microapp](/images/modals/personal-office-coffee-machine-edit-microapp.png)

#### Step 4

From the microapp edit model, type in the name of your action in _Actions_ list. The name will autocomplete as you type.

![Add Action](/images/modals/personal-office-coffee-machine-edit-microapp-actions-sms.png)

#### Step 5

Click on the **Save changes** button and you're done!

![Save Microapp](/images/modals/personal-office-coffee-machine-edit-microapp-actions-sms-save.png)

### Wait for Microapp Interaction 

Now that your microapp is configured, you just wait until someone interacts with it. Once they do, you'll receive an SMS that looks something like this.

![Action Integration](/images/actions/personal-office-coffee-machine-sms.png)
