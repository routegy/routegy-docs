---
title: "Receive email notifications | How-to"
description: "How do I receive email notifications?"
sidebar: false
---

# Receive Email Notifications

This document describes how to make use of the [Email Action Type](/reference/action-types/email/) to receive email notifications.

Email actions are commonly used for lower priority [microapps](/reference/microapps/) that can be addressed in an asynchronous fashion.

### Creating the Action

Follow the steps below to create a [action](/reference/actions/) for sending email notifications.

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

From the action creation model, select **Email** from the _Action type_ dropdown list.

![SMS Action Type Dropdown List](/images/modals/office-create-action-email.png)

#### Step 5

Enter a _name_, _description_ (optional) and desired email address.

::: tip
The email can be to a single person or a mailing list.
:::

#### Step 6

Click on **+ Create action** to complete the process.

![SMS Action Filled](/images/modals/office-create-action-email-filled.png)

### Attaching Action to Microapp

Follow the steps below to attach the email action created above to one or more [microapps](/reference/microapps/).

#### Step 1

Select the **Microapps** tab within the workspace view.

![Select Microapps Menu](/images/navigation/select-microapps-menu.png)

#### Step 2

Select the [microapp](/reference/microapps/) you wish to receive email notifications for.

![Select Microapp](/images/tree/personal-office-select-microapp.png)

#### Step 3

From the microapp model, click on the **Edit** button.

![Edit Microapp](/images/modals/personal-office-coffee-machine-edit-microapp.png)

#### Step 4

From the microapp edit model, type in the name of your action in _Actions_ list. The name will autocomplete as you type.

![Add Action](/images/modals/personal-office-coffee-machine-edit-microapp-actions-email.png)

#### Step 5

Click on the **Save changes** button and you're done!

![Save Microapp](/images/modals/personal-office-coffee-machine-edit-microapp-actions-email-save.png)

### Wait for Microapp Interaction 

Now that your microapp is configured, you just wait until someone interacts with it. Once they do, you'll receive an email that looks something like this.

![Action Integration](/images/actions/personal-office-coffee-machine-email.png)
