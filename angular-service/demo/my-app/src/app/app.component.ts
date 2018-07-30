import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
//IMPORT Freshchat Service from Freshchat Module
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

    //subscription for user creation activities
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

                // `Replace this with your ajax call`
                break;
              }
            case 404:
              {
                //User doesn't exist in the freshchat system
                //CONDITIONAL and USER can be created on DEMAND
                this.widgetService.createUser();
                break;
              }
            case 500:
              {
                //GENERAL AND SERVICE SPECIFIC ERRORS
                let message = resp.message;
                console.log(message);
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
      token: "WEB_CHAT_TOKEN",
      host: "HOST_URL",
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
  }

  //Use this type of loading if you want lazy loading or conditional loading
  conditionalLoad() {
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
  }
}
