# angular-freshchat-widget

## Installation

To install this library, run:

```bash
$ npm install angular-freshchat-widget --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install angular-freshchat-widget
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { FreshchatModule } from 'angular-freshchat-widget';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    FreshchatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its service in your Angular application:

```
import { FreshchatService } from 'angular-freshchat-widget';

```

Call the service to load Widget **onload** with below code

```
 let payload = {
      token: "WEB_CHAT_TOKEN",
      host: "HOST_URL",
      //BELOW USER OBJECT IS OPTIONAL
      user: {
        externalId: "UNIQUE_EXTERNAL_ID",//unique user reference
        restoreId: "UNIQUE_RESTORE_ID", //pass ID if present already
        firstName: "<FIRSTNAME>",              // user’s first name
        lastName: "<LASTNAME>",                // user’s last name
        email: "<EMAIL>",    // user’s email address
        phone: "<PHONE>",            // phone number without country code
        phoneCountryCode: "<PHONECODE>"          // phone’s country code
      }
    }

    this.widgetService.init(payload);

```

You can lazy load the widget with user properties after initialization can be done with below code

```
//dummy mocking data <TO_BE_REPLACED>
    let userProp = {
      firstName: "John",
      lastName: "Snow",
      email: "JohnShow@GOT.com",
      phone: "9999999999",
      phoneCountry: "99",
      "plan": "Estate",
      "status": "Active",
      "Last Payment": "12th August"
    }

    this.widgetService.loadWidget(userProp);
```



## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```
