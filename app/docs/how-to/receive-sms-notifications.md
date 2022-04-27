---
title: "Receive SMS notifications | How-to"
description: "How do I receive SMS notifications?"
---

# Receive SMS notifications

This how-to covers how to make use of the [SMS Action Type](/reference/action-types/sms/) to receive text message notifications when someone interacts with one of your apps.

SMS actions are commonly used with high priority [apps](/reference/apps/) that require immediate attention or staff members that are constantly on the go.

## Create the action

Follow the steps below to create an [action](/reference/actions/) for sending SMS notifications.

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

### Step 3: Select the SMS action type

From the action creation model, select **SMS** from the _Action type_ dropdown list.

<CaptionedImage
  src="/images/modals/office-create-action-sms.png"
  alt="An expanded dropdown containing a list of available action types with 'SMS' highlighted in the Routegy admin app"
  width="70%"
/>

### Step 4: Configure the action

Enter a _name_, _description_ (optional) and desired phone number. You can also customize a text _Message_ format by providing your own [Jinja2 template](https://jinja.palletsprojects.com/en/3.0.x/) that follows [Routegy templating guide](/reference/templating). _Phone Number_ can be set to a static value (e.g. 555-555-5555) or to any variable available in the [templating context](/reference/templating.html#values). For instance, if your app pattern includes an element named `phone_number` nested in a fieldset named `contact_info`, you can just enter `contact_info.phone_number`, and Routegy will send a text message to a phone number collected by your app from a user.


::: tip
If you don't provide a country code, it will default to 1. See [wikipedia](https://en.wikipedia.org/wiki/List_of_country_calling_codes) for more details.
:::

Once the action is configured, click on **+ Create action** to complete the process.

<CaptionedImage
  src="/images/modals/office-create-action-sms-filled.png"
  alt="The completed SMS action in the 'New action' dialog with the 'Create action' button highlighted in the Routegy admin app"
  width="70%"
/>

## Attach the action to an app

Follow the steps below to attach the SMS action created above to one or more [apps](/reference/apps/).

### Step 1: Choose an app

Select the **Apps** tab within the workspace view and select the [app](/reference/apps/) you wish to send SMS notifications.

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

From the app edit model, type in the name of your SMS action in _Actions_ list. The name will autocomplete as you type.

<CaptionedImage
  src="/images/modals/personal-office-coffee-machine-edit-app-actions-sms.png"
  alt="The SMS action being added to a 'Coffee machine' app using the app editor in the Routegy admin app"
  width="70%"
/>

### Step 4: Save your changes

Click on the **Save changes** button and you're done!

<CaptionedImage
  src="/images/modals/personal-office-coffee-machine-edit-app-actions-sms-save.png"
  alt="Highlighting the 'Save changes' button in the app editor in the Routegy admin app"
  width="70%"
/>

### Step 5: Wait for app interactions

Now that your app is configured, you just wait until someone interacts with it. Once they do, you'll receive an SMS that looks something like this.

<CaptionedImage
  src="/images/actions/personal-office-coffee-machine-sms.png"
  alt="An SMS created by an interaction with a Routegy app named 'Coffee machine' using the SMS action and associated template defined earlier in this tutorial"
  width="90%"
/>
