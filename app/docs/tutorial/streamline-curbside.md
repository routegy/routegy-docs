---
title: "Streamline curbside pickup with Routegy and Trello | How-to"
description: "How do I streamline curbside pickup with Routegy and Trello?"
sidebar: false
---

# Streamline curbside pickup with Routegy and Trello

This document describes how to streamline your curbside delivery process using [Routegy](https://routegy.com) and [Trello](https://trello.com). 

Customers pull up, scan a QR code placed on a storefront or curbside, and the staff inside are notified.

<p align="center">
  <img src="/images/curbside-pickup/curbside-form-filled.png" width="40%">
</p>

Once a customer scans the code and submits their information, Routegy will add a new card to your Trello board that details who just arrived, how they ordered, and where they are waiting.

<p align="center">
  <img src="/images/curbside-pickup/trello-curbside-waitlist.png" width="90%">
</p>

To get started you will need the following:
1. Routegy account (Create one [here](https://web.routegy.com/auth/join)).
2. Trello account (Create one [here](https://trello.com/signup)).
3. Tablet, laptop, or other device that you and your staff will use to monitor your curbside delivery board on Trello.

Let's get started!

### Creating a Routegy Microapp for curbside delivery

We will start by creating a [microapp](/reference/microapps/) that collects information from the customer when they arrive and scan the code. We are going to ask for their name, how they placed the order, and for some details about their vehicle.

#### Step 1: Choose a workspace

Start by making sure you're in the desired [workspace](/reference/workspaces/). Open the workspace dropdown in the navigation bar to choose, and then select the **Microapps** tab.

<p align="center">
  <img src="/images/curbside-pickup/workspace-microapps.png" width="90%">
</p>

#### Step 2: Create a new group

Next step is to create a new [group](/reference/groups/) for our curbside microapp. If you already have a group that you'd like to use, you can skip this step and go directly to [Step 3](#step-3-create-a-new-microapp).

Create a new group by clicking the group icon or dragging the group icon into the desired parent group.

<p align="center">
  <img src="/images/curbside-pickup/group-drag-drop.png" width="90%">
</p>

Then, give your new group a name, description (optional), and click the **Create Group** button.

<p align="center">
  <img src="/images/curbside-pickup/group-dialog.png" width="75%">
</p>

#### Step 3: Create a new microapp

Create a new microapp by clicking the microapp icon or dragging the microapp icon into the desired group. In this example, we are putting it under the *Parking* group created in [Step 2](#step-2-create-a-new-group).

<p align="center">
  <img src="/images/curbside-pickup/microapp-drag-drop.png" width="90%">
</p>

Then, define a name and description for your new microapp.

<p align="center">
  <img src="/images/curbside-pickup/microapp-name-description.png" width="75%">
</p>

Routegy will use the name and description in the header of your new microapp form as its title and subtitle respectively (see screenshot below). With this in mind, try using short, concise language to provide clear instructions to your customers (i.e., a simple call to to action).

<p align="center">
  <img src="/images/curbside-pickup/curbside-form-name-description.png" width="30%">
</p>

#### Step 4: Define a microapp pattern

Next, we are going to create a microapp [pattern](/reference/patterns/). The microapp pattern defines the data to collect when a customer interacts with your microapp.

To get started, select **Define your own pattern** from the **Pattern** dropdown list, and name your new pattern.

<p align="center">
  <img src="/images/curbside-pickup/microapp-define-pattern.png" width="75%">
</p>

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

<p align="center">
  <img src="/images/curbside-pickup/microapp-pattern-yaml.png" width="75%">
</p>

Once done, you can click the **Preview** tab to inspect the contents of the pattern form.

<p align="center">
  <img src="/images/curbside-pickup/microapp-pattern-preview.png" width="75%">
</p>

#### Step 5: Save and test your microapp

Once you are happy with the name, description, and pattern, click the **Create microapp** button to save your changes.  You will be presented with a QR code and a URL for your new microapp.

<p align="center">
  <img src="/images/curbside-pickup/microapp-qr.png" width="75%">
</p>

Click the link or scan the code with the camera app on [your phone](/reference/device-compatibility/) to check it out! Want to make some changes? Don't worry, you can edit it anytime.


### Setting up your Trello board

Next, we are going to configure your Trello board. In order to keep track of arriving customers and delivery status we are going to create a Trello board with two lists:
* *Waiting Curbside Customers*
* *Delivered Curbside Customers*

Routegy will automatically add a new Trello card to the *Waiting Customers* list every time a customer interacts with the microapp that you defined earlier. Then, you and your staff can move these cards to the *Delivered Customers* list as orders are fulfilled.

<p align="center">
  <img src="/images/curbside-pickup/trello-lists.png" width="75%">
</p>

Creating your first board and list in Trello is very straightforward and well explained in [the official guide](https://trello.com/guide/create-a-board). 

Once you have create your lists, you'll need to collect two bits of data from Trello that are required for the integration with Routegy:
* Your **Trello API Key** and **Token**
* **ListId** of your *Waiting Curbside Customers* list

#### Finding your Trello API Key and Token

You can find your **Trello API Key** [here](https://trello.com/app-key) under the **Key** section.

<p align="center">
  <img src="/images/curbside-pickup/trello-api-key.png" width="75%">
</p>

Once you have recorded the key, click on the **Token** link to generate your **Trello API Token**.

<p align="center">
  <img src="/images/curbside-pickup/trello-api-token-allow.png" width="75%">
</p>

Scroll to the bottom of the page, click **Allow**, and you should be able to see and record your **API Token**.

<p align="center">
  <img src="/images/curbside-pickup/trello-api-token.png" width="75%">
</p>

#### Finding the ListId for your *Waiting Curbside Customers* list

To find the **ListId**, perform the following steps:

* Open the board that contains the list you wish to use. In the address bar, you will see a URL like `https://trello.com/b/DRzgczUF/customer-waitlist`.
  
* Change the value in your address bar to `https://trello.com/b/DRzgczUF.json?fields=id,name&lists=open` using **your unique** board identifier. 
* This URL will display all open lists on your Trello board. Choose the one you want and capture the `id` value. In this example, we're using the *Waiting Curbside Customers* list with an id of `5eb4674aed5ff17eae53760f`.

<p align="center">
  <img src="/images/curbside-pickup/trello-list-id.png" width="75%">
</p>

::: warning The board ID is unique to you!
* The `DRzgczUF` value used in this example is a **unique** board identifier and the value for your Trello board **will be different**.
:::


### Putting Routegy and Trello together

The final step is to connect Routegy and Trello using a [action](/reference/actions/) that will create a new Trello card every time someone interacts with your microapp. 

#### Step 1: Create a action

Go back to your Routegy workspace, select the **Actions** tab, and click the **Create action** button.

<p align="center">
  <img src="/images/curbside-pickup/actions-tab.png" width="90%">
</p>

Give your new action a name and description, and choose **Trello** from the **Action Type** dropdown. Next, enter your **Trello API Key**, **API Token**, and **ListId** that you captured when configuring the Trello board [earlier](#finding-your-trello-api-key-and-token). 

<p align="center">
  <img src="/images/curbside-pickup/action-trello.png" width="75%">
</p>

Finally, scroll down to the **Card name** field, and replace its value with the following template: 
```
{{ name }} is waiting in {{ car }}, ordered via {{ order_type }}, arrived at {{ context.event.created_at | date:"g:iA" }}
```
The **Card name** field controls how Routegy will name Trello cards that it creates. The template above customizes the name so it will contain information about arriving customers (e.g. *Pawel is waiting in Red Honda, ordered via Online, arrived at 5:42PM*)

<p align="center">
  <img src="/images/curbside-pickup/action-trello-card-name.png" width="75%">
</p>

Click **Create action** to save all changes.

#### Step 2: Attach the action to your microapp

Go back to the **Microapps** tab and click on your curbside pickup microapp to open microapp details.

<p align="center">
  <img src="/images/curbside-pickup/workspace-edit-microapp.png" width="90%">
</p>

Click **Edit** and add your Trello action to the microapp using the **Action** field. Just click on the field, start typing your action name, and then choose the action from the list.

<p align="center">
  <img src="/images/curbside-pickup/microapp-add-action.png" width="75%">
</p>

Click **Save changes** to save your microapp.

#### Step 3: Test

Now that everything is ready, let's test it out. Click the microapp link or scan the QR code with your phone, fill out the form, and a new Trello card will automatically appear in your board.

If you would like to learn more about Routegy, [this tutorial](https://docs.routegy.com/tutorial/routegy-at-a-glance.html) is a great place to start.

