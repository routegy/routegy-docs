---
title: "Receive webhook requests | How-to"
description: "How do I receive webhook requests?"
---

# Receive webhook requests

This how-to covers how to make use of the [Webhook Action Type](/reference/action-types/webhook/) to receive HTTP requests with JSON data when someone interacts with one of your apps.

Webhook actions are extremely powerful as they can be integrated with any existing system that can receive HTTP requests.

## Create the action

Follow the steps below to create an [action](/reference/actions/) for creating Webhooks.

### Step 1: Choose a workspace

Start by making sure you're in the desired [workspace](/reference/workspaces/). Hover over the menu bar dropdown to choose.

<CaptionedImage
  src="/images/navigation/choose-workspace-dropdown.png"
  alt="An expanded dropdown containing a list of available workspaces in the Routegy admin app"
  width="90%"
/>

### Step 2: Open the new action dialog

Select the **Actions** tab within the workspace view and click the **+ New Action** button. This will launch a modal for creating new actions.

<CaptionedImage
  src="/images/how-tos/create-new-action.png"
  alt="Highlighting the actions tab and 'New action' button within the Routegy admin app"
  width="90%"
/>

### Step 3: Select the Webhook action type

From the action creation model, select **Webhook** from the _Action type_ dropdown list.

<CaptionedImage
  src="/images/modals/office-create-action-webhook.png"
  alt="An expanded dropdown containing a list of available action types with 'Webhook' highlighted in the Routegy admin app"
  width="70%"
/>

### Step 4: Configure the action

Enter a _name_, _description_ (optional), enter the URL for the webhook endpoint you would like to use, and click on **+ Create action** to complete the process.

<CaptionedImage
  src="/images/modals/office-create-action-webhook-filled.png"
  alt="A configured webhook action in the 'New action' dialog with the 'Create action' button highlighted in the Routegy admin app"
  width="70%"
/>

## Attach the action to an app

Follow the steps below to attach the Webhook action created above to one or more [apps](/reference/apps/).


### Step 1: Choose an app

Select the **Apps** tab within the workspace view and select the [app](/reference/apps/) you wish to make webhook requests.

<CaptionedImage
  src="/images/how-tos/edit-app.png"
  alt="Highlighting the Apps tab and selection of a 'Coffee machine' app within the Routegy admin app"
  width="90%"
/>

### Step 2: Open the app editor

From the app model, click on the **Edit** button.

<CaptionedImage
  src="/images/modals/personal-office-coffee-machine-edit-app.png"
  alt="A 'Coffee machine' app in the app editor with the Edit button highlighted in the Routegy admin app"
  width="70%"
/>

### Step 3: Add your new action

From the app edit model, type in the name of your action in _Actions_ list. The name will autocomplete as you type.

<CaptionedImage
  src="/images/modals/personal-office-coffee-machine-edit-app-actions-webhook.png"
  alt="The webhook action being added to a 'Coffee machine' app using the app editor in the Routegy admin app"
  width="70%"
/>

### Step 4: Save your changes

Click on the **Save changes** button and you're done!

<CaptionedImage
  src="/images/modals/personal-office-coffee-machine-edit-app-actions-webhook-save.png"
  alt="Highlighting the 'Save changes' button in the app editor in the Routegy admin app"
  width="70%"
/>

### Step 5: Wait for app interactions

Now that your app is configured, you just wait until someone interacts with it. Once they do, you'll automatically receive an HTTP request that looks something like this.

<CaptionedImage
  src="/images/actions/personal-office-coffee-machine-webhook.png"
  alt="A JSON payload POSTed by an interaction with a Routegy app named 'Coffee machine' using the webhook action defined earlier in this tutorial"
  width="90%"
/>
