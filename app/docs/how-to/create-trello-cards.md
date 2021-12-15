---
title: "Create Trello cards | How-to"
description: "How do I create Trello cards?"
sidebar: false
---

# Create Trello Cards

This document describes how to make use of the [Trello](/reference/action-types/trello/) action to create cards when someone interacts with your apps.

If you don't have a Trello account, you can create one [here](https://trello.com/signup).

[Routegy](https://routegy.com) + [Trello](https://trello.com) is an extremely powerful combination and is being used by people around the world to manage supply requests, purchase orders, and curbside pickups. Trello can be customized in near infinite ways to fit your exact needs.

### Creating the Action

Follow the steps below to create a [action](/reference/actions/) for creating Trello cards.

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

From the action creation model, select **Trello** from the _Action type_ dropdown list.

![Trello Action Type Dropdown List](/images/modals/office-create-action-trello.png)

#### Step 5

Enter your **API Key/Token** for the Trello account you wish to use.

* **Trello API Key** can be found [here](https://trello.com/app-key) under the **Key** section.

* **Trello API Token** can be created [here](https://trello.com/app-key) by clicking on the **Token** link.

::: tip Looking for OAuth?
Hang tight, we're working on it!
:::

#### Step 6

Enter the **List ID** for the Trello list you wish to use.

To find this, perform the following steps:

* Open the board that contains the list you wish to use. In the address bar, you will see a URL like `https://trello.com/b/wl10IocP/office`.
  
* Change the value in your address bar to `https://trello.com/b/wl10IocP.json?fields=id,name&lists=open` using **your unique** board identifier. 
* This URL will display all open lists on your Trello board. Choose the one you want and capture the `id` value. In this example, we're using the `Requests` list with an id of `5ee52070865ece5f85d34db9`.

![Trello List ID](/images/external/trello-list-id.png)

::: warning The board ID is unique to you!
* The `wl10IocP` value used in this example is a **unique** board identifier and the value for your Trello board **will be different**.
:::

#### Step 7

Click on **+ Create action** to complete the process.

![Trello Action Filled](/images/modals/office-create-action-trello-filled.png)

### Attaching Action to App

Follow the steps below to attach the Trello action created above to one or more [apps](/reference/apps/).

#### Step 1

Select the **Apps** tab within the workspace view.

![Select Apps Menu](/images/navigation/select-apps-menu.png)

#### Step 2

Select the [app](/reference/apps/) you wish to create Trello cards with.

![Select App](/images/tree/personal-office-select-app.png)

#### Step 3

From the app model, click on the **Edit** button.

![Edit App](/images/modals/personal-office-coffee-machine-edit-app.png)

#### Step 4

From the app edit model, type in the name of your action in _Actions_ list. The name will autocomplete as you type.

![Add Action](/images/modals/personal-office-coffee-machine-edit-app-actions-trello.png)

#### Step 5

Click on the **Save changes** button and you're done!

![Save App](/images/modals/personal-office-coffee-machine-edit-app-actions-trello-save.png)

### Wait for App Interactions

Now that your app is configured, you just wait until someone interacts with it. Once they do, you'll automatically have a card created in Trello for you that looks something like this.

![Action Integration](/images/actions/personal-office-coffee-machine-trello.png)
