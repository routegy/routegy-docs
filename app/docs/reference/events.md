---
title: "Events | Reference"
description: "What are Routegy events?"
---

# Events

Events are created when people interact with an [app](/reference/apps/).

An event includes [data](/reference/app-data/) that corresponds to the [pattern](/refernce/pattern/) associated with the [app](/reference/apps/) that generated it.

An event also contains context about the app that generated it, the method by which it was created (E.g. QR code), as well as other metadata collected and included automatically.

When an event is created it is processed by every [action](/reference/actions/) attached to the [app](/reference/apps/) that generated it.

## Example event
```json
{
    "id": "1748d120-a105-4969-bc2d-b379ad5bfe4c",
    "created_at": "2022-03-03T17:33:52+0000",
    "updated_at": "2022-03-03T17:33:52+0000",
    "url": "https://api.routegy.com/organizations/8c50e87c-8719-49f8-91c2-c044d1e6b3b2/workspaces/8ca14c79-55ec-4d71-aab2-0cd51a0d454b/events/1748d120-a105-4969-bc2d-b379ad5bfe4c",
    "meta_data": {
        "origin": "direct",
        "browser": {
            "name": "Netscape",
            "version": "5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.109 Safari/537.36",
            "codeName": "Mozilla",
            "language": "en-US",
            "platform": "MacIntel"
        },
        "network": {},
        "location": {},
        "platform": {}
    },
    "app": {
        "id": "c6faaa62-eaab-4edd-9db6-f7750c15333e",
        "url": "https://api.routegy.com/organizations/8c50e87c-8719-49f8-91c2-c044d1e6b3b2/workspaces/8ca14c79-55ec-4d71-aab2-0cd51a0d454b/apps/c6faaa62-eaab-4edd-9db6-f7750c15333e",
        "name": "Out of coffee filters",
        "slug": "out-of-coffee-filters",
        "description": "",
        "group": {
            "id": "8d56638e-3e74-4820-b1eb-1af8af2fbe8b",
            "url": "https://api.routegy.com/organizations/8c50e87c-8719-49f8-91c2-c044d1e6b3b2/workspaces/8ca14c79-55ec-4d71-aab2-0cd51a0d454b/groups/8d56638e-3e74-4820-b1eb-1af8af2fbe8b",
            "name": "Kitchen",
            "slug": "kitchen",
            "description": "",
            "level": 1,
            "workspace": "8ca14c79-55ec-4d71-aab2-0cd51a0d454b"
        },
        "meta_data": {
            "tags": [],
            "attributes": [
                {
                    "name": "Filter size",
                    "value": "#4"
                },
                {
                    "name": "Filter count",
                    "value": "100"
                },
                {
                    "name": "Filter SKU",
                    "value": "624602"
                }
            ]
        }
    },
    "app_data": {
        "id": "ed7d6de8-1fdb-477d-b470-a866a5b6d768",
        "url": "https://api.routegy.com/organizations/8c50e87c-8719-49f8-91c2-c044d1e6b3b2/workspaces/8ca14c79-55ec-4d71-aab2-0cd51a0d454b/pattern-values/apps/ed7d6de8-1fdb-477d-b470-a866a5b6d768",
        "document": {
            "order_count": 10,
            "remaining_count": 1
        }
    }
}
```

## Permissions

Events inherit permissions from their [Workspace](/reference/workspaces/) and its [Organization](/reference/organizations/) through its [Group](/reference/groups/). Read more about how permission inheritance [here](/reference/permissions/).
