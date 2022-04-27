---
title: "Receive email notifications | How-to"
description: "How do I receive email notifications?"
---

# Receive email notifications

This how-to covers how to make use of the [Email Action Type](/reference/action-types/email/) to receive email notifications when someone interacts with one of your apps.

Email actions are commonly used for lower-priority [apps](/reference/apps/) that can be addressed in an asynchronous fashion.

## Create the action

Follow the steps below to create an [action](/reference/actions/) for sending email notifications.

### Step 1: Choose a workspace

Start by making sure you're in the desired [workspace](/reference/workspaces/). Hover over the menu bar dropdown to choose.

<CaptionedImage
  src="/images/navigation/choose-workspace-dropdown.png"
  alt="An expanded dropdown containing a list of available workspaces in the Routegy admin app"
  width="90%"
/>

### Step 2: Open the new action dialog

Select the **Actions** tab within the workspace view and click the **+ New Action** button. This will launch a dialog for creating new actions.

<CaptionedImage
  src="/images/how-tos/create-new-action.png"
  alt="Highlighting the actions tab and 'New action' button within the Routegy admin app"
  width="90%"
/>

### Step 3: Select the email action type

From the action creation dialog, select **Email** from the _Action type_ dropdown list.

<CaptionedImage
  src="/images/modals/office-create-action-email.png"
  alt="An expanded dropdown containing a list of available action types with 'Email' highlighted in the Routegy admin app"
  width="70%"
/>

### Step 4: Configure the action

Enter a _name_, _description_ (optional) and desired email address, and click on **+ Create action** to complete the process.

::: tip
The email can be to a single person or a mailing list.
:::

<CaptionedImage
  src="/images/modals/office-create-action-email-filled.png"
  alt="A configured email action in the 'New action' dialog with the 'Create action' button highlighted in the Routegy admin app"
  width="70%"
/>

## Attach the action to an app

Follow the steps below to attach the email action created above to one or more [apps](/reference/apps/).

### Step 1: Choose an app

Select the **Apps** tab within the workspace view and select the [app](/reference/apps/) you wish to send email notifications.

<CaptionedImage
  src="/images/how-tos/edit-app.png"
  alt="Highlighting the Apps tab and selection of a 'Coffee machine' app within the Routegy admin app"
  width="90%"
/>

### Step 2: Open the app editor

From the app modal, press the **Edit** button.

<CaptionedImage
  src="/images/modals/personal-office-coffee-machine-edit-app.png"
  alt="A 'Coffee machine' app in the app editor with the Edit button highlighted in the Routegy admin app"
  width="70%"
/>

### Step 3: Add your new action

From the app edit dialog, type in the name of your action in _Actions_ list. The name will autocomplete as you type.

<CaptionedImage
  src="/images/modals/personal-office-coffee-machine-edit-app-actions-email.png"
  alt="The email action being added to a 'Coffee machine' app using the app editor in the Routegy admin app"
  width="70%"
/>

### Step 4: Save your changes

Press on the **Save changes** button and you're done!

<CaptionedImage
  src="/images/modals/personal-office-coffee-machine-edit-app-actions-email-save.png"
  alt="Highlighting the 'Save changes' button in the app editor in the Routegy admin app"
  width="70%"
/>

### Step 5: Wait for app interactions

Now that your app is configured, you just wait until someone interacts with it. Once they do, you'll receive an email that looks something like this.

<CaptionedImage
  src="/images/actions/personal-office-coffee-machine-email.png"
  alt="An email created by an interaction with a Routegy app named 'Coffee machine' using the email action defined earlier in this tutorial"
  width="90%"
/>
