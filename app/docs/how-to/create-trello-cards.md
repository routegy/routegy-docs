---
title: "Create Trello cards | How-to"
description: "How do I create Trello cards?"
---

# Create Trello Cards

This document describes how to make use of the [Trello](/reference/action-types/trello/) action to create cards when someone interacts with your apps.

If you don't have a Trello account, you can create one [here](https://trello.com/signup).

[Routegy](https://routegy.com) + [Trello](https://trello.com) is an extremely powerful combination and is being used by people around the world to manage supply requests, purchase orders, and curbside pickups. Trello can be customized in near infinite ways to fit your exact needs.

## Create the action

Follow the steps below to create a [action](/reference/actions/) for sending email notifications.

### Step 1: Choose a workspace

Start by making sure you're in the desired [workspace](/reference/workspaces/). Hover over the menu bar dropdown to choose.

<p align="center">
  <img src="/images/navigation/choose-workspace-dropdown.png" width="90%">
</p>

<CaptionedImage
  src="/images/navigation/choose-workspace-dropdown.png"
  caption="Admin app workspace selection"
  alt=""
  width="90%"
/>

### Step 2: Open the new action dialog

Select the **Actions** tab within the workspace view and click the **+ New Action** button. This will launch a dialog for creating a new action.

<p align="center">
  <img src="/images/how-tos/create-new-action.png" width="90%">
</p>

### Step 3: Select the Trello action type

From the action creation dialog, select **Trello** from the _Action type_ dropdown list.

<p align="center">
  <img src="/images/modals/office-create-action-trello.png" width="70%">
</p>

### Step 4: Enter your API information

Enter your **API Key/Token** for the Trello account you wish to use.

* **Trello API Key** can be found [here](https://trello.com/app-key) under the **Key** section.

* **Trello API Token** can be created [here](https://trello.com/app-key) by clicking on the **Token** link.

::: tip Looking for OAuth?
Hang tight, we're working on it!
:::

<p align="center">
  <img src="/images/modals/office-create-action-trello-api-key.png" width="70%">
</p>

### Step 5: Specify which list to use

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


### Step 6: Finish configuring your action

Customize the name and description of you card by providing your own [Jinja2 template](https://jinja.palletsprojects.com/en/3.0.x/) (optional), and click on **+ Create action** to complete the process.

<p align="center">
  <img src="/images/modals/office-create-action-trello-filled.png" width="70%">
</p>


## Attach the action to an app

Follow the steps below to attach the Trello action created above to one or more [apps](/reference/apps/).

### Step 1: Choose an app

Select the **Apps** tab within the workspace view and select the [app](/reference/apps/) you wish to create Trello cards.

<p align="center">
  <img src="/images/how-tos/edit-app.png" width="90%">
</p>

### Step 2: Open the app editor

From the app dialog, click on the **Edit** button.

<p align="center">
  <img src="/images/modals/personal-office-coffee-machine-edit-app.png" width="70%">
</p>

### Step 3: Add your new action

From the app edit dialog, type in the name of your action in _Actions_ list. The name will autocomplete as you type.

<p align="center">
  <img src="/images/modals/personal-office-coffee-machine-edit-app-actions-trello.png" width="70%">
</p>

### Step 4: Save your changes

Click on the **Save changes** button and you're done!

<p align="center">
  <img src="/images/modals/personal-office-coffee-machine-edit-app-actions-trello-save.png" width="70%">
</p>

### Step 5: Wait for app interactions

Now that your app is configured, you just wait until someone interacts with it. Once they do, you'll automatically have a card created in Trello for you that looks something like this.

![Action Integration](/images/actions/personal-office-coffee-machine-trello.png)
