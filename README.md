# freshchat-widget

Freshchat Inapp Widget

This is the Javascript API for the freshchat widget (https://www.freshworks.com/freshchat-livechat-software/)

## Installation
 bower install freshchat-widget

## Integration

For anonymous user
```
  window.fcWidget.init({
    token: "WEB_CHAT_TOKEN",
    host: "WEB_CHAT_URL"
  });
```

For logged in user
```
  window.fcWidget.init({
    token: "WEB_CHAT_TOKEN",
    host: "WEB_CHAT_URL",
    externalId: "EXTERNAL_ID"
  });
```

To restore user
```
  window.fcWidget.init({
    token: "WEB_CHAT_TOKEN",
    host: "WEB_CHAT_URL",
    externalId: "EXTERNAL_ID",
    restoreId: "RESTORE_ID"
  });
```

## Documentation
 Setup documentation available here: https://developers.freshchat.com
