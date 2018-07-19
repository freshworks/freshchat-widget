import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
//import { FreshchatService } from './freshchat.service';

import { FreshchatService } from 'angular-freshchat-widget';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  subscription: Subscription;
  todaydate;
  constructor(private widgetService: FreshchatService) {

    this.subscription = widgetService.userCreation.subscribe(
      resp => {
        if (resp) {
          switch (resp.status) {
            case 200:
              {
                //User created successfully
                let restoreId = resp.restoreId;
                //Add/Update this your DB
                break;
              }
            case 201:
              {
                //Restoration ID mismatch
                let restoreId = resp.restoreId;
                //Add/Update this your DB

                // // `Replace this with your ajax call`
                // this.widget.fcWidget.updateSiteUser(rstId).then(function (resp) {
                //   // On Success update the local site user object
                //   if (resp && user) {
                //     user.restoreId = rstId;
                //     console.log(`Restore ID updated for user ${rstId}`);
                //   }
                // });
                break;
              }
            case 404:
              {
                //User doesn't exist in the freshchat system
                this.widgetService.createUser();
                break;
              }
            case 500:
              {
                break;
              }
            default:
              break;
          }

        }
      });
  }
  ngOnInit() {

    let payload = {
      token: "6dd0a7dd-0f28-477c-b6d4-f776a8216467",
      host: "https://wchat.freshchat.com",
      user: {
        externalId: "testuser@gmail.com",
        restoreId: "5fea4fb1-61f7-4881-8152-87413d89e189", //pass ID if present already
        firstName: "John",              // user’s first name
        lastName: "Doe",                // user’s last name
        email: "john.doe@gmail.com",    // user’s email address
        phone: "8668323090",            // phone number without country code
        phoneCountryCode: "+1"          // phone’s country code
      }
    }

    this.widgetService.init(payload);
  }

  conditionalLoad() {

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
  }
}
