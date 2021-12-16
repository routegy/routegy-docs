---
title: "Create Trello cards | How-to"
description: "How do I create Trello cards?"
sidebar: false
---

# Create Trello Cards

This document describes how to make use of the [Trello](/reference/action-types/trello/) action to create cards when someone interacts with your apps.

If you don't have a Trello account, you can create one [here](https://trello.com/signup).

[Routegy](https://routegy.com) + [Trello](https://trello.com) is an extremely powerful combination and is being used by people around the world to manage supply requests, purchase orders, and curbside pickups. Trello can be customized in near infinite ways to fit your exact needs.

## Creating the Action

Follow the steps below to create a [action](/reference/actions/) for sending email notifications.

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

From the action creation model, select **Trello** from the _Action type_ dropdown list.

<p align="center">
  <img src="/images/modals/office-create-action-trello.png" width="70%">
</p>

#### Step 4

Enter your **API Key/Token** for the Trello account you wish to use.

* **Trello API Key** can be found [here](https://trello.com/app-key) under the **Key** section.

* **Trello API Token** can be created [here](https://trello.com/app-key) by clicking on the **Token** link.

::: tip Looking for OAuth?
Hang tight, we're working on it!
:::

<p align="center">
  <img src="/images/modals/office-create-action-trello-api-key.png" width="70%">
</p>

#### Step 6

Enter the **List ID** for the Trello list you wish to use.

To find this, perform the following steps:

* Open the board that contains the list you wish to use. In the address bar, you will see a URL like `https://trello.com/b/3fdtL4eS/office-demo`.
  
* Change the value in your address bar to `https://trello.com/b/3fdtL4eS.json?fields=id,name&lists=open` using **your unique** board identifier. 
* This URL will display all open lists on your Trello board. Choose the one you want and capture the `id` value. In this example, we're using the `Things To Do` list with an id of `5d700d11bb1d6f12643ace12`.

![Trello List ID](/images/external/trello-list-id.png)

::: warning The board ID is unique to you!
* The `3fdtL4eS` value used in this example is a **unique** board identifier and the value for your Trello board **will be different**.
:::

<p align="center">
  <img src="/images/modals/office-create-action-trello-list-id.png" width="70%">
</p>


#### Step 7

Customize the name and description of you card by providing your own [Jinja2 template](https://jinja.palletsprojects.com/en/3.0.x/) (optional), and click on **+ Create action** to complete the process.

<p align="center">
  <img src="/images/modals/office-create-action-trello-filled.png" width="70%">
</p>


### Attaching Action to App

Follow the steps below to attach the Webhook action created above to one or more [apps](/reference/apps/).

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

From the app edit model, type in the name of your action in _Actions_ list. The name will autocomplete as you type.

<p align="center">
  <img src="/images/modals/personal-office-coffee-machine-edit-app-actions-trello.png" width="70%">
</p>

#### Step 4

Click on the **Save changes** button and you're done!

<p align="center">
  <img src="/images/modals/personal-office-coffee-machine-edit-app-actions-trello-save.png" width="70%">
</p>

### Wait for App Interactions

Now that your app is configured, you just wait until someone interacts with it. Once they do, you'll automatically have a card created in Trello for you that looks something like this.

![Action Integration](/images/actions/personal-office-coffee-machine-trello.png)
