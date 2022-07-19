---
title: "Jira | Action types | Reference"
description: "How do Jira action types work?"
---

# Jira

The Jira action type is used to create Jira issues for every [event](/reference/events/) created by an [app](/reference/apps/). Issues can be created in Jira Software, Jira Service Management and Jira Work Management projects.

Jira action configuration option includes user, project and issue information.

### User configuration

|Field|Description|
|---|---|
|Username|Email associated with the Jira account to use|
|API Token|API token generated at <https://id.atlassian.com/manage-profile/security/api-tokens>|

### Project configuration

|Field|Description|
|---|---|
|URL|URL of the Atlassian site (e.g. https://yourcompany.atlassian.net)|
|Key|Jira project key|

### Issue configuration

|Field|Description|
|---|---|
|Summary|Jira issue summary. This field supports [Routegy templating](/reference/templating)|
|Description|Jira issue description. This field supports [Routegy templating](/reference/templating)|
|Type|Jira issue type. Has to be a valid type [issue type for a given project](https://support.atlassian.com/jira-cloud-administration/docs/what-are-issue-types/#Default-issue-types).| 
|Priority|Jira issue priority|
|Labels| Optional. A list of Jirra [issue labels](https://confluence.atlassian.com/jirasoftwareserver/editing-and-collaborating-on-issues-939938928.html#Editingandcollaboratingonissues-Trackingissueswithlabels)|

## Guides

* [How-to: Create Jira issues](/how-to/create-jira-issues/)
