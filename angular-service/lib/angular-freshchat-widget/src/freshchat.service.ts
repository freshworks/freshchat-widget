import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class FreshchatService {
  widget = (<any>window);
  user: any = {};
  // Observable source
  private userCreationStatus = new Subject<any>();
  // Observable stream
  userCreation: any = this.userCreationStatus.asObservable();

  constructor() {
  }

  broadcastStatus(resp: any) {
    this.userCreationStatus.next(resp);
  }

  init(payload: any) {
    //update user properties if any
    if (payload.user) {
      for (let key in payload.user) {
        this.user[key] = payload.user[key];
      }
    }

    if (this.widget.fcWidget) {
      this.widget.fcWidget.init({
        token: payload.token,
        host: payload.host,
        externalId: payload.externalId,
        restoreId: payload.restoreId,
        onInit: this.loadWidget
      });
    } else {
      this.widget.fcSettings = {
        token: payload.token,
        host: payload.host,
        externalId: payload.externalId,
        restoreId: payload.restoreId,
        onInit: this.loadWidget
      };
    }
  }

  loadWidget = (user: any) => {

    if (user) {
      for (let key in user) {
        this.user[key] = user[key];
      }
    }

    this.widget.fcWidget.user.get().then((response) => {
      this.validateUser(response, this.user);
    }, (error) => {
      this.validateUser(error, this.user);
    });
  }

  validateUser = (response: any, user: any) => {
    let status = response && response.status,
      rstId = user && user.restoreId;
    if (status === 200) {
      this.updateUser(response, user);
    }
    if ([401, 403, 404].indexOf(status) > -1 && !rstId) {
      /*
       * User doesn't exist
       * Use this block only if you want to create the user on load
       * Otherwise comment this
       */
      this.broadcastStatus({ status: 404, message: "User doesn't exist in freshchat system" });

    } else if ([401, 404, 409].indexOf(status) > -1 && rstId) {
      /*
       * Data Mismatch : Can't load the user for the given config
       * Reset restoreId if exist so a new user will be created when there is mismatch
       */
      user.restoreId = void 0;
      this.createUser();
    }
  }

  createUser = () => {
    this.widget.fcWidget.user.create().then((resp) => {
      this.updateUser(resp, this.user);
    }, (err) => {
      this.broadcastStatus({ status: 500, message: `Error creating user ${JSON.stringify(err)}` });
      console.log(`Error creating user ${JSON.stringify(err)}`);
    });
  }

  updateUser = (response: any, user: any) => {
    var data = response && response.data,
      externalId = user && user.externalId,
      restoreId = user && user.restoreId;
    if (data) {
      let rstId = data.restoreId,
        extId = data.externalId || data.identifier;
      if ((externalId && externalId === extId) && (restoreId !== rstId)) {
        /*
         * Identified a mismatch between widget user and site user credentials
         * Update restoreId for the site user
         */
        this.broadcastStatus({
          status: 201,
          message: "Identified a mismatch between widget user and site user credentials",
          restoreId: rstId
        });
      }
    }else{
      //new user is created
      this.broadcastStatus({
        status: 200,
        message: "User create and use this restore ID for restoring again.",
        restoreId: data.restoreId
      });
    }
  }
}
