---
title: "Receive SMS notifications | How-to"
description: "How to receive SMS notifications"
sidebar: false
---

# Receive SMS Notifications

This document describes how to make use of the [SMS Touch Handler Type](/reference/touch-handler-types/sms/) to receive text message notifications.

SMS touch handlers are commonly used with high priority [touchpoints](/reference/touchpoints/) that require immediate attention or staff members that are constantly on the go.

### Creating the Touch Handler

Follow the steps below to create a [touch handler](/reference/touch-handlers/) for sending SMS notifications.

#### Step 1

Start by making sure you're in the desired [workspace](/reference/workspaces/). Click on the menu bar dropdown to choose.

![Choose Workspace](/images/navigation/choose-workspace-dropdown.png)

#### Step 2

Select the **Handlers** tab within the workspace view.

![Select Handlers Menu](/images/navigation/select-handlers-menu.png)

#### Step 3

Click on the **+ New Handler** button. This will launch a modal for creating new touch handlers.

![New Handler Button](/images/buttons/new-handler.png)

#### Step 4

From the touch handler creation model, select **SMS** from the _Handler type_ dropdown list.

![SMS Handler Type Dropdown List](/images/modals/office-create-handler-sms.png)

#### Step 5

Enter a _name_, _description_ (optional) and desired phone number.

::: tip
If you don't provide a country code, it will default to 1. See [wikipedia](https://en.wikipedia.org/wiki/List_of_country_calling_codes) for more details.
:::

#### Step 6

Click on **+ Create handler** to complete the process.

![SMS Handler Filled](/images/modals/office-create-handler-sms-filled.png)

### Attaching Touch Handler to Touchpoint

Follow the steps below to attach the SMS touch handler created above to one or more [touchpoints](/reference/touchpoints/).

#### Step 1

Select the **Touchpoints** tab within the workspace view.

![Select Touchpoints Menu](/images/navigation/select-touchpoints-menu.png)

#### Step 2

Select the [touchpoint](/reference/touchpoints/) you wish to receive SMS notifications for.

![Select Touchpoint](/images/tree/personal-office-select-touchpoint.png)

#### Step 3

From the touchpoint model, click on the **Edit** button.

![Edit Touchpoint](/images/modals/personal-office-coffee-machine-edit-touchpoint.png)

#### Step 4

From the touchpoint edit model, type in the name of your touch handler in _Handlers_ list. The name will autocomplete as you type.

![Add Touch Handler](/images/modals/personal-office-coffee-machine-edit-touchpoint-handlers-sms.png)

#### Step 5

Click on the **Save changes** button and you're done!

![Save Touchpoint](/images/modals/personal-office-coffee-machine-edit-touchpoint-handlers-sms-save.png)

### Wait for Touchpoint Interaction 

Now that your touchpoint is configured, you just wait until someone interacts with it. Once they do, you'll receive an SMS that looks something like this.

![Handler Integration](/images/handlers/personal-office-coffee-machine-sms.png)
