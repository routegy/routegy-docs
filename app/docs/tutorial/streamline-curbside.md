---
title: "Streamline curbside pickup with Routegy and Trello | How-to"
description: "How do I streamline curbside pickup with Routegy and Trello?"
---

# Streamline curbside pickup with Routegy and Trello

This document describes how to streamline your curbside delivery process using [Routegy](https://routegy.com) and [Trello](https://trello.com). 

Customers pull up, scan a QR code placed on a storefront or curbside, and the staff inside are notified.

<CaptionedImage
  src="/images/curbside-pickup/curbside-form-filled.png"
  alt="A Routegy app designed to facilitate curbside pickup"
  width="40%"
/>

Once a customer scans the code and submits their information, Routegy will add a new card to your Trello board that details who just arrived, how they ordered, and where they are waiting.

<CaptionedImage
  src="/images/curbside-pickup/trello-curbside-waitlist.png"
  alt="A Trello board used to track customers waiting for curbside pickup"
  width="90%"
/>

To get started you will need the following:
1. Routegy account (Create one [here](https://web.routegy.com/auth/join)).
2. Trello account (Create one [here](https://trello.com/signup)).
3. Tablet, laptop, or other device that you and your staff will use to monitor your curbside delivery board on Trello.

Let's get started!

## Creating a Routegy app for curbside delivery

We will start by creating an [app](/reference/apps/) that collects information from the customer when they arrive and scan the code. We are going to ask for their name, how they placed the order, and for some details about their vehicle.

### Step 1: Choose a workspace

Start by making sure you're in the desired [workspace](/reference/workspaces/). Open the workspace dropdown in the navigation bar to choose, and then select the **Apps** tab.

<CaptionedImage
  src="/images/curbside-pickup/workspace-apps.png"
  alt="Selecting a desired workspace in the workspace dropdown in the Routegy admin app"
  width="90%"
/>

### Step 2: Create a new group

Next step is to create a new [group](/reference/groups/) for our curbside app. If you already have a group that you'd like to use, you can skip this step and go directly to [Step 3](#step-3-create-a-new-app).

Create a new group by clicking the group icon or dragging the group icon into the desired parent group.

<CaptionedImage
  src="/images/curbside-pickup/group-drag-drop.png"
  alt="Dragging a new group into the app tree in the Routegy admin app"
  width="90%"
/>

Then, give your new group a name, description (optional), and click the **Create Group** button.

<CaptionedImage
  src="/images/curbside-pickup/group-dialog.png"
  alt="Filling out the 'New group' configuration form in the Routegy admin app"
  width="75%"
/>

### Step 3: Create a new app

Create a new app by clicking the app icon or dragging the app icon into the desired group. In this example, we are putting it under the *Parking* group created in [Step 2](#step-2-create-a-new-group).

<CaptionedImage
  src="/images/curbside-pickup/app-drag-drop.png"
  alt="Dragging a new app into the app tree in the Routegy admin app"
  width="90%"
/>

Then, define a name and description for your new app.

<CaptionedImage
  src="/images/curbside-pickup/app-name-description.png"
  alt="Filling out the 'New app' configuration form in the Routegy admin app"
  width="75%"
/>

Routegy will use the name and description in the header of your new app form as its title and subtitle respectively (see screenshot below). With this in mind, try using short, concise language to provide clear instructions to your customers (i.e., a simple call to to action).

<CaptionedImage
  src="/images/curbside-pickup/curbside-form-name-description.png"
  alt="Highlight of how the name and description properties of an app will be displayed at the top of a Routegy app when visited"
  width="40%"
/>

### Step 4: Define an app pattern

Next, we are going to create an app [pattern](/reference/patterns/). The app pattern defines the data to collect when a customer interacts with your app.

To get started, select **Define your own pattern** from the **Pattern** dropdown list, and name your new pattern.

<CaptionedImage
  src="/images/curbside-pickup/app-define-pattern.png"
  alt="Selecting 'Define your own pattern' in the 'New app' dialog in the Routegy admin app"
  width="75%"
/>

Routegy patterns are defined by a [JSON Schema](https://json-schema.org/) document in YAML format. To collect customer's name, car information, and order type, we are going to use the following pattern:

```yaml
type: object
attrs:
  successMessage: Thank You!
order:
  - order_type
  - name
  - car
required:
  - order_type
  - name
  - car
properties:
  car:
    type: string
    attrs:
      placeholder: E.g. White Honda Accord
    title: Please give us some details about your car
  name:
    type: string
    attrs:
      placeholder: E.g. John
    title: What is the name on the order?
  order_type:
    enum:
      - By Phone
      - Online
      - GrubHub
      - Other
    type: string
    attrs:
      type: radio
    title: How did you place your order?
```

This YAML document defines a simple pattern with **car**, **name**, and **order_type** fields, and it can be easily tailored to meet the needs of your business. For instance, you can modify the titles of these fields by changing the **title** attribute under each individual field.

To apply this document to our newly created pattern, scroll down to the **Definition (YAML)** section of the form, and copy/paste the YAML code above replacing the default pattern YAML.

<CaptionedImage
  src="/images/curbside-pickup/app-pattern-yaml.png"
  alt="Pasting the curbside pickup YAML into the 'New pattern' section of the 'New app' dialog in the Routegy admin app"
  width="75%"
/>

Once done, you can click the **Preview** tab to inspect the contents of the pattern form.

<CaptionedImage
  src="/images/curbside-pickup/app-pattern-preview.png"
  alt="Previewing how the new curbside pickup pattern will appear in the 'New pattern' section of the 'New app' dialog in the Routegy admin app"
  width="75%"
/>

### Step 5: Save and test your app

Once you are happy with the name, description, and pattern, click the **Create app** button to save your changes.  You will be presented with a QR code and a URL for your new app.

<CaptionedImage
  src="/images/curbside-pickup/app-qr.png"
  alt="Viewing the QR code and unique URL of your new curbside delivery Routegy app in the Routegy admin app"
  width="75%"
/>

Click the link or scan the code with the camera app on [your phone](/reference/device-compatibility/) to check it out! Want to make some changes? Don't worry, you can edit it anytime.


## Setting up your Trello board

Next, we are going to configure your Trello board. In order to keep track of arriving customers and delivery status we are going to create a Trello board with two lists:
* *Waiting Curbside Customers*
* *Delivered Curbside Customers*

Routegy will automatically add a new Trello card to the *Waiting Customers* list every time a customer interacts with the app that you defined earlier. Then, you and your staff can move these cards to the *Delivered Customers* list as orders are fulfilled.

<CaptionedImage
  src="/images/curbside-pickup/trello-lists.png"
  alt="A Trello board named 'Customer waitlist' to be used for Routegy-generated cards"
  width="75%"
/>

Creating your first board and list in Trello is very straightforward and well explained in [the official guide](https://trello.com/guide/create-a-board). 

Once you have create your lists, you'll need to collect two bits of data from Trello that are required for the integration with Routegy:
* Your **Trello API Key** and **Token**
* **ListId** of your *Waiting Curbside Customers* list

### Finding your Trello API Key and Token

You can find your **Trello API Key** [here](https://trello.com/app-key) under the **Key** section.

<CaptionedImage
  src="/images/curbside-pickup/trello-api-key.png"
  alt="Obtaining your Trello API key in the Trello interface"
  width="75%"
/>

Once you have recorded the key, click on the **Token** link to generate your **Trello API Token**.

Scroll to the bottom of the page, click **Allow**, and you should be able to see and record your **API Token**.

<CaptionedImage
  src="/images/curbside-pickup/trello-api-token-allow.png"
  alt="Obtaining your Trello API token in the Trello interface"
  width="75%"
/>

<CaptionedImage
  src="/images/curbside-pickup/trello-api-token.png"
  alt="Recording your Trello API token in the Trello interface"
  width="75%"
/>

### Finding the ListId for your *Waiting Curbside Customers* list

To find the **ListId**, perform the following steps:

* Open the board that contains the list you wish to use. In the address bar, you will see a URL like `https://trello.com/b/DRzgczUF/customer-waitlist`.
  
* Change the value in your address bar to `https://trello.com/b/DRzgczUF.json?fields=id,name&lists=open` using **your unique** board identifier. 
* This URL will display all open lists on your Trello board. Choose the one you want and capture the `id` value. In this example, we're using the *Waiting Curbside Customers* list with an id of `5eb4674aed5ff17eae53760f`.

<CaptionedImage
  src="/images/curbside-pickup/trello-list-id.png"
  alt="Trello JSON data with the list ID highlighted"
  width="75%"
/>

::: warning The board ID is unique to you!
* The `DRzgczUF` value used in this example is a **unique** board identifier and the value for your Trello board **will be different**.
:::

## Putting Routegy and Trello together

The final step is to connect Routegy and Trello using a [action](/reference/actions/) that will create a new Trello card every time someone interacts with your app. 

### Step 1: Create an action

Go back to your Routegy workspace, select the **Actions** tab, and click the **Create action** button.

<CaptionedImage
  src="/images/curbside-pickup/actions-tab.png"
  alt="Navigating to the Actions tab and pressing the 'Create action' button in the Routegy admin app"
  width="90%"
/>

Give your new action a name and description, and choose **Trello** from the **Action Type** dropdown. Next, enter your **Trello API Key**, **API Token**, and **ListId** that you captured when configuring the Trello board [earlier](#finding-your-trello-api-key-and-token). 

<CaptionedImage
  src="/images/curbside-pickup/action-trello.png"
  alt="Configuring a new action for Trello and specifying the name, description, type, API key, API token, and ListId"
  width="75%"
/>

Finally, scroll down to the **Card name** field, and replace its value with the following template: 
```
{{ name }} is waiting in {{ car }}, ordered via {{ order_type }}, arrived at {{ context.event.created_at | date:"g:iA" }}
```
The **Card name** field controls how Routegy will name Trello cards that it creates. The template above customizes the name so it will contain information about arriving customers (e.g. *Pawel is waiting in Red Honda, ordered via Online, arrived at 5:42PM*)

<CaptionedImage
  src="/images/curbside-pickup/action-trello-card-name.png"
  alt="Configuring the card name field so it will display information specific to curbside pickup within Trello"
  width="75%"
/>

Click **Create action** to save all changes.

### Step 2: Attach the action to your app

Go back to the **Apps** tab and click on your curbside pickup app to open app details.

<CaptionedImage
  src="/images/curbside-pickup/workspace-edit-app.png"
  alt="Navigating to the Apps tab and selecting the curbside pickup app"
  width="90%"
/>

Click **Edit** and add your Trello action to the app using the **Action** field. Just click on the field, start typing your action name, and then choose the action from the list.

<CaptionedImage
  src="/images/curbside-pickup/app-add-action.png"
  alt="Editing the curbside pickup app actions to use the Trello action"
  width="75%"
/>

Click **Save changes** to save your app.

### Step 3: Test

Now that everything is ready, let's test it out. Click the app link or scan the QR code with your phone, fill out the form, and a new Trello card will automatically appear in your board.

If you would like to learn more about Routegy, [this tutorial](https://docs.routegy.com/tutorial/routegy-at-a-glance.html) is a great place to start.

