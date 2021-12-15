---
title: "Receive SMS notifications | How-to"
description: "How do I receive SMS notifications?"
sidebar: false
---

# Receive SMS Notifications

This document describes how to make use of the [SMS Action Type](/reference/action-types/sms/) to receive text message notifications.

SMS actions are commonly used with high priority [apps](/reference/apps/) that require immediate attention or staff members that are constantly on the go.

### Creating the Action

Follow the steps below to create a [action](/reference/actions/) for sending SMS notifications.

#### Step 1

Start by making sure you're in the desired [workspace](/reference/workspaces/). Click on the menu bar dropdown to choose.

<p align="center">
  <img src="/images/navigation/choose-workspace-dropdown.png" width="90%">
</p>

#### Step 2

Select the **Actions** tab within the workspace view and click the **+ New Action** button. This will launch a modal for creating new actions.

<p align="center">
  <img src="/images/how-tos/create-new-action.png" width="90%">
</p>

#### Step 3

From the action creation model, select **SMS** from the _Action type_ dropdown list.

<p align="center">
  <img src="/images/modals/office-create-action-sms.png" width="70%">
</p>

#### Step 4

Enter a _name_, _description_ (optional) and desired phone number. You can also customize a text _message_ format by providing your own [Jinja2 template](https://jinja.palletsprojects.com/en/3.0.x/). Click on **+ Create action** to complete the process.

::: tip
If you don't provide a country code, it will default to 1. See [wikipedia](https://en.wikipedia.org/wiki/List_of_country_calling_codes) for more details.
:::

<p align="center">
  <img src="/images/modals/office-create-action-sms-filled.png" width="70%">
</p>

### Attaching Action to App

Follow the steps below to attach the SMS action created above to one or more [apps](/reference/apps/).

#### Step 1

Select the **Apps** tab within the workspace view and select the [app](/reference/apps/) you wish to receive SMS notifications for.

<p align="center">
  <img src="/images/how-tos/edit-app.png" width="90%">
</p>

#### Step 2

From the app model, click on the **Edit** button.

<p align="center">
  <img src="/images/modals/personal-office-coffee-machine-edit-app.png" width="70%">
</p>

#### Step 3

From the app edit model, type in the name of your SMS action in _Actions_ list. The name will autocomplete as you type.

<p align="center">
  <img src="/images/modals/personal-office-coffee-machine-edit-app-actions-sms.png" width="70%">
</p>

#### Step 4

Click on the **Save changes** button and you're done!

<p align="center">
  <img src="/images/modals/personal-office-coffee-machine-edit-app-actions-sms-save.png" width="70%">
</p>

### Wait for App Interaction 

Now that your app is configured, you just wait until someone interacts with it. Once they do, you'll receive an SMS that looks something like this.

![Action Integration](/images/actions/personal-office-coffee-machine-sms.png)
