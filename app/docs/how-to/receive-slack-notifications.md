---
title: "Receive Slack notifications | How-to"
description: "How do I receive Slack notifications?"
---

# Receive Slack notifications

This how-to covers how to make use of the [Slack Webhook Action Type](/reference/action-types/slack-webhook/) to receive slack message notifications when someone interacts with one of your apps.


## Enable incoming webhooks in your Slack workspace

First, create an incoming webhook for your slack workspace as outlined in [this official guide](https://api.slack.com/messaging/webhooks). Once your webhook is created, copy and save its URL - you will need it in the next step.

<CaptionedImage
  src="/images/how-tos/slack-copy-webhook-url.png"
  alt="Slack incoming webhooks configurations page"
  width="70%"
/>

## Create the action

Second, follow the steps below to create an [action](/reference/actions/) for sending Slack messages using the webbhook that you created above.

### Step 1: Choose a workspace

Start by making sure you're in the desired [workspace](/reference/workspaces/). Hover over the menu bar dropdown to choose.

<CaptionedImage
  src="/images/navigation/choose-workspace-dropdown.png"
  alt="An expanded dropdown containing a list of available workspaces in the Routegy admin app"
  width="90%"
/>

### Step 2: Open the new action dialog

Select the **Actions** tab within the workspace view and press the **+ New Action** button. This will launch a dialog for creating new actions.

<CaptionedImage
  src="/images/how-tos/create-new-action.png"
  alt="Highlighting the actions tab and 'New action' button within the Routegy admin app"
  width="90%"
/>

### Step 3: Select the Slack action type

In the action creation dialog, select **Slack Webhook** from the _Action type_ dropdown list.

<CaptionedImage
  src="/images/modals/office-create-action-slack.png"
  alt="An expanded dropdown containing a list of available action types with 'Slack' highlighted in the Routegy admin app"
  width="70%"
/>

### Step 4: Configure the action

Enter the URL of the Slack Incoming Webhook that your created earlier. Optionally, you can also customize the body and footer of a Slack message. Both _Body_ and _Footer_ fields support [Routegy templating](/reference/templating) that is based on [Jinja2](https://jinja.palletsprojects.com/en/3.0.x/). When all fields are configured, click on **+ Create action** to complete the process.

<CaptionedImage
  src="/images/modals/office-create-action-slack-filled.png"
  alt="The completed Slack action in the 'New action' dialog with the 'Create action' button highlighted in the Routegy admin app"
  width="70%"
/>

## Attach the action to an app

Finally, follow the steps below to attach the Slack Webhook action created above to one or more [apps](/reference/apps/).

### Step 1: Choose an app

Select the **Apps** tab within the workspace view and select the [app](/reference/apps/) you wish to send Slack notifications.

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
  src="/images/modals/personal-office-coffee-machine-edit-app-actions-slack.png"
  alt="The Slack action being added to a 'Coffee machine' app using the app editor in the Routegy admin app"
  width="70%"
/>

### Step 4: Save your changes

Click on the **Save changes** button and you're done!

<CaptionedImage
  src="/images/modals/personal-office-coffee-machine-edit-app-actions-slack-save.png"
  alt="Highlighting the 'Save changes' button in the app editor in the Routegy admin app"
  width="70%"
/>

### Step 5: Wait for app interactions

Now that your app is configured, you just wait until someone interacts with it. Once they do, you'll receive a Slack message that looks something like this.

<CaptionedImage
  src="/images/actions/personal-office-coffee-machine-slack.png"
  alt="A Slack message cfreated by an interaction with a Routegy app named 'Coffee machine' using the Slack action and associated template defined earlier in this tutorial"
  width="90%"
/>
