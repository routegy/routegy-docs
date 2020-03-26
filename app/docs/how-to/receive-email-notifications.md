---
title: "Receive email notifications | How-to"
description: "How to receive email notifications"
sidebar: false
---

# Receive Email Notifications

This document describes how to make use of the [Email Touch Handler Type](/reference/touch-handler-types/email/) to receive email notifications.

Email touch handlers are commonly used for lower priority [touchpoints](/reference/touchpoints/) that can be addressed in an asynchronous fashion.

### Creating the Touch Handler

Follow the steps below to create a [touch handler](/reference/touch-handlers/) for sending email notifications.

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

From the touch handler creation model, select **Email** from the _Handler type_ dropdown list.

![SMS Handler Type Dropdown List](/images/modals/office-create-handler-email.png)

#### Step 5

Enter a _name_, _description_ (optional) and desired email address.

::: tip
The email can be to a single person or a mailing list.
:::

#### Step 6

Click on **+ Create handler** to complete the process.

![SMS Handler Filled](/images/modals/office-create-handler-email-filled.png)

### Attaching Touch Handler to Touchpoint

Follow the steps below to attach the email touch handler created above to one or more [touchpoints](/reference/touchpoints/).

#### Step 1

Select the **Touchpoints** tab within the workspace view.

![Select Touchpoints Menu](/images/navigation/select-touchpoints-menu.png)

#### Step 2

Select the [touchpoint](/reference/touchpoints/) you wish to receive email notifications for.

![Select Touchpoint](/images/tree/personal-office-select-touchpoint.png)

#### Step 3

From the touchpoint model, click on the **Edit** button.

![Edit Touchpoint](/images/modals/personal-office-coffee-machine-edit-touchpoint.png)

#### Step 4

From the touchpoint edit model, type in the name of your touch handler in _Handlers_ list. The name will autocomplete as you type.

![Add Touch Handler](/images/modals/personal-office-coffee-machine-edit-touchpoint-handlers-email.png)

#### Step 5

Click on the **Save changes** button and you're done!

![Save Touchpoint](/images/modals/personal-office-coffee-machine-edit-touchpoint-handlers-email-save.png)
