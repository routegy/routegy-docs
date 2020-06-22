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

### Creating a Routegy Touchpoint for curbside delivery

We will start by creating a [touchpoint](/reference/touchpoints/) that collects information from the customer when they arrive and scan the code. We are going to ask for their name, how they placed the order, and for some details about their vehicle.

#### Step 1: Choose a workspace

Start by making sure you're in the desired [workspace](/reference/workspaces/). Open the workspace dropdown in the navigation bar to choose, and then select the **Touchpoints** tab.

<p align="center">
	<img src="/images/curbside-pickup/workspace-touchpoints.png" width="90%">
</p>

#### Step 2: Create a new location

Next step is to create a new [location](/reference/locations/) for our curbside touchpoint. If you already have a location that you'd like to use, you can skip this step and go directly to [Step 3](#step-3-create-a-new-touchpoint).

Create a new location by clicking the location icon or dragging the location icon into the desired parent location.

<p align="center">
	<img src="/images/curbside-pickup/location-drag-drop.png" width="90%">
</p>

Then, give your new location a name, description (optional), and click the **Create Location** button.

<p align="center">
	<img src="/images/curbside-pickup/location-dialog.png" width="75%">
</p>

#### Step 3: Create a new touchpoint

Create a new touchpoint by clicking the touchpoint icon or dragging the touchpoint icon into the desired location. In this example, we are putting it under the *Parking* location created in [Step 2](#step-2-create-a-new-location).

<p align="center">
	<img src="/images/curbside-pickup/touchpoint-drag-drop.png" width="90%">
</p>

Then, define a name and description for your new touchpoint.

<p align="center">
	<img src="/images/curbside-pickup/touchpoint-name-description.png" width="75%">
</p>

Routegy will use the name and description in the header of your new touchpoint form as its title and subtitle respectively (see screenshot below). With this in mind, try using short, concise language to provide clear instructions to your customers (i.e., a simple call to to action).

<p align="center">
	<img src="/images/curbside-pickup/curbside-form-name-description.png" width="30%">
</p>

#### Step 4: Define a touchpoint schema

Next, we are going to create a touchpoint [schema](/reference/schemas/). The touchpoint schema defines the data to collect when a customer interacts with your touchpoint.

To get started, select **Define your own schema** from the **Schema** dropdown list, and name your new schema.

<p align="center">
	<img src="/images/curbside-pickup/touchpoint-define-schema.png" width="75%">
</p>

Routegy schemas are defined by a [JSON Schema](https://json-schema.org/) document in YAML format. To collect customer's name, car information, and order type, we are going to use the following schema:

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

This YAML document defines a simple schema with **car**, **name**, and **order_type** fields, and it can be easily tailored to meet the needs of your business. For instance, you can modify the titles of these fields by changing the **title** attribute under each individual field.

To apply this document to our newly created schema, scroll down to the **Definition (YAML)** section of the form, and copy/paste the YAML code above replacing the default schema YAML.

<p align="center">
	<img src="/images/curbside-pickup/touchpoint-schema-yaml.png" width="75%">
</p>

Once done, you can click the **Preview** tab to inspect the contents of the schema form.

<p align="center">
	<img src="/images/curbside-pickup/touchpoint-schema-preview.png" width="75%">
</p>

#### Step 5: Save and test your touchpoint

Once you are happy with the name, description, and schema, click the **Create touchpoint** button to save your changes.  You will be presented with a QR code and a URL for your new touchpoint.

<p align="center">
	<img src="/images/curbside-pickup/touchpoint-qr.png" width="75%">
</p>

Click the link or scan the code with the camera app on [your phone](/reference/device-compatibility/) to check it out! Want to make some changes? Don't worry, you can edit it anytime.


### Setting up your Trello board

Next, we are going to configure your Trello board. In order to keep track of arriving customers and delivery status we are going to create a Trello board with two lists:
* *Waiting Curbside Customers*
* *Delivered Curbside Customers*

Routegy will automatically add a new Trello card to the *Waiting Customers* list every time a customer interacts with the touchpoint that you defined earlier. Then, you and your staff can move these cards to the *Delivered Customers* list as orders are fulfilled.

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

The final step is to connect Routegy and Trello using a [touch handler](/reference/touch-handlers/) that will create a new Trello card every time someone interacts with your touchpoint. 

#### Step 1: Create a touch handler

Go back to your Routegy workspace, select the **Handlers** tab, and click the **Create handler** button.

<p align="center">
	<img src="/images/curbside-pickup/handlers-tab.png" width="90%">
</p>

Give your new handler a name and description, and choose **Trello** from the **Handler Type** dropdown. Next, enter your **Trello API Key**, **API Token**, and **ListId** that you captured when configuring the Trello board [earlier](#finding-your-trello-api-key-and-token). 

<p align="center">
	<img src="/images/curbside-pickup/handler-trello.png" width="75%">
</p>

Finally, scroll down to the **Card name** field, and replace its value with the following template: 
```
{{ name }} is waiting in {{ car }}, ordered via {{ order_type }}, arrived at {{ context.touch.created_at | date:"g:iA" }}
```
The **Card name** field controls how Routegy will name Trello cards that it creates. The template above customizes the name so it will contain information about arriving customers (e.g. *Pawel is waiting in Red Honda, ordered via Online, arrived at 5:42PM*)

<p align="center">
	<img src="/images/curbside-pickup/handler-trello-card-name.png" width="75%">
</p>

Click **Create handler** to save all changes.

#### Step 2: Attach the touch handler to your touchpoint

Go back to the **Touchpoints** tab and click on your curbside pickup touchpoint to open touchpoint details.

<p align="center">
	<img src="/images/curbside-pickup/workspace-edit-touchpoint.png" width="90%">
</p>

Click **Edit** and add your Trello handler to the touchpoint using the **Handler** field. Just click on the field, start typing your handler name, and then choose the handler from the list.

<p align="center">
	<img src="/images/curbside-pickup/touchpoint-add-handler.png" width="75%">
</p>

Click **Save changes** to save your touchpoint.

#### Step 3: Test

Now that everything is ready, let's test it out. Click the touchpoint link or scan the QR code with your phone, fill out the form, and a new Trello card will automatically appear in your board.

If you would like to learn more about Routegy, [this tutorial](https://docs.routegy.com/tutorial/routegy-at-a-glance.html) is a great place to start.

