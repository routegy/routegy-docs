---
title: "FAQ | Reference"
description: "TODO"
sidebar: false
---

# General questions

### What is Routegy?

Routegy makes it easy to create touchless, digital experiences in physical spaces - no app or shared devices required.

### How can Routegy help me?
Routegy empowers the people you serve to make purchases, report issues, submit requests, and provide feedback in a contextual setting. This leads to increased sales, time savings, and lower operational costs.

### How will the people I serve use Routegy?
They simply interact with Routegy touchpoints represented by QR codes, NFC tags, smart buttons, and sensors that you place in your physical spaces. No app required.

### Do I need to install an app to use Routegy?

No, you don’t. Routegy uses your device’s built-in functionality, regardless of whether it runs iOS or Android: camera, NFC reader, and a web browser. Learn more about device compatibility.

### How do I get started with Routegy?

Just create an account, define your first touchpoint and you are ready to go. Take a look at our Getting started guide to learn more.

# Touchpoints

### How do I choose what information is collected by a touchpoint?

This is done by defining a schema associated with each touchpoint. Routegy uses JSON Schema to define the kind of data to collect and how it is structured. Please look at some example schemas to learn more about the types of data that can be collected.

### Can I customize what people see when they interact with my touchpoints?

The touchpoint page is built according to the schema associated with the touchpoint. Certain elements of the form can be customized by using special attributes in the schema and the page can be styled to match your brand.

### Do Routegy touchpoints collect any additional data that isn’t defined in the schema?

Yes, in addition to information collected according to the schema, Routegy collects browser information, touchpoint form factor type, and user-defined metadata.

### Can I create a touchpoint that doesn't require any input?

Yes, this can be done by attaching an empty schema to a touchpoint. A touchpoint with an empty schema will submit data immediately upon interacting with it.

### How do I decide what happens to the data collected by a touchpoint?

This is done by attaching one or more touch handlers to a touchpoint. Handlers can range from simple notifications via email, SMS, or Slack message to complex interactions with your existing software, and anything in between.

### Does Routegy store the history of touchpoint interactions?

In addition to processing all touchpoint interactions via touch handlers, Routegy also stores them and all collected data internally. Touch history can be accessed via the Admin App or the API.

### Will Routegy notify me when someone interacts with my touchpoint?

It’s up to you to decide what happens when someone interacts with a touchpoint and this includes triggering simple notifications via email, SMS, and Slack touch handlers.

### Is there any limit on the number of different handlers attached to a touchpoint?

No, Routegy doesn’t impose any limit on the number of handlers attached to a touchpoint.

### Is there a limit on the number of touchpoints I can have?

The number of touchpoints is limited by the pricing plan for your organization.

## Physical touchpoints and form factors

### What physical interfaces can be associated with a touchpoint?

A Routegy touchpoint can be associated with a QR code, an NFC tag, a smart button, or an automated sensor.

### When should I use a QR code or an NFC tag as an interface for my touchpoint?

A QR code, an NFC tag, or a combination of them works best for interactions that require input like purchasing flows, leaving feedback, or reporting issues.

### When should I use a smart button as an interface for my touchpoint?

Smart buttons are best suited for quick reports and requests that require no input.

### When should I use an automated sensor as an interface for my touchpoint?

Automated sensors are best for tasks like recording events or detecting issues.

### What types of smart buttons are supported by Routegy?

Routegy supports buttons compatible with AWS IoT, as well as those that are capable of calling a webhook or making an API call to a public endpoint.

### What types of automated sensors are supported by Routegy?

Routegy supports sensors compatible with AWS IoT, as well as those that are capable of calling a webhook or making an API call to a public endpoint.

### Can I have more than one physical interface deployed for a touchpoint?

Yes, you can deploy as many interfaces for a touchpoint as you wish.

### How do I get physical touchpoint interfaces?

You can either order them directly from us or print them yourself.

# Integrations

### Can Routegy integrate with my existing tools?

Yes, Routegy comes with a growing number of first party integrations. It can also integrate with any solution that provides an API or receives webhooks.

### What notification systems does Routegy support?

Routegy integrates with email, SMS and Slack.

### What ticketing systems does Routegy support?

Routegy integrates with Trello, Jira, Zendesk, and ServiceNow.

### What workflow automation solution integrations does Routegy support?

Routegy integrates with Zapier and IFTTT, and you can plug it into your existing workflow or task automation.

### Can I integrate Routegy with a solution not listed here?

Yes, you can do it by using a webhook or AWS Lambda integration. For simple scenarios, you can use an existing Zapier or IFTTT integration.

# Privacy and Security

### Does scanning and accessing a touchpoint page require authentication?

No sign in is required in order to interact with a touchpoint.

### Will Routegy automatically delete all my data if I delete my account?

Routegy automatically deletes customer data (organizational data and collected data) 90 days after you delete your account.

### Does Routegy support SSO login? If yes, what SSO providers are supported?

Yes, Routegy currently supports Google, Microsoft, and a number of enterprise connections. Please contact us.

### Does Routegy handle GDPR and CCPA requests?

Yes, Routegy will handle GDPR and CCPA requests.

### How does Routegy handle security?

Security of your intellectual property and data is a top priority for us. All data collected during touchpoint interactions is encrypted and transmitted over a secure connection.
All data stored on Routegy servers is encrypted and secure at rest.
