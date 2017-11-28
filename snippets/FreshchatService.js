module.exports = function() {
  return {
    /*
     * Freshchat Widget Init Method - Set the payload here
     */
    init: function() {
      if (window.fcWidget) {
        window.fcWidget.init({
          token: 'WEB_CHAT_TOKEN',
          host: 'WEB_CHAT_HOST',
          externalId: 'EXTERNAL_ID',
          restoreId: 'RESTORE_ID',
          onInit: this.loadWidget
        });
      } else {
        window.fcSettings = {
          token: 'WEB_CHAT_TOKEN',
          host: 'WEB_CHAT_HOST',
          externalId: 'EXTERNAL_ID',
          restoreId: 'RESTORE_ID',
          onInit: this.loadWidget
        };
      }
    },
    /*
     * @method loadWidget - Load the widget
     */
    loadWidget: function() {
      var _self = this;
      window.fcWidget.on('widget:loaded', function() {
        _self.loadUser();
      }, function() {
          // Error Loading Widget
      });
    },
    /*
     * @method loadUser - Load the widget user
     * @param Object user - site user Object
     */
    loadUser: function(user) {
      var _self = this;
      // Check the user
      window.fcWidget.user.get().then(function(response) {
        _self.validateUser(response, user);
      }, function(error) {
        _self.validateUser(error, user);
      });
    },
    /*
     * @method validateUser - Validate the Loaded User
     * @param Object response - widget user Object
     * @param Object user - site user Object
     */
    validateUser: function(response, user) {
      var status = response && response.status,
          rstId = user && user.restoreId,
          widget = window.fcWidget,
          _self = this;
      if (status === 200) {
        this.updateUser(response, user);
      }
      if ([401, 403, 404].includes(status) && !rstId) {
        /*
         * User doesn't exist
         * Use this block only if you want to create the user on load
         * Otherwise comment this
         */
        widget.user.create().then(function(resp) {
            _self.updateUser(resp, user);
        }, function(err) => {
            console.log("Error creating user");
        });
      } else if ([401, 404, 409].includes(status) && rstId) {
        /*
         * Data Mismatch : Can't load the user for the given config
         * Reset restoreId if exist so a new user will be created when there is mismatch
         */
        user.restoreId = void 0;
        widget.user.create().then(function(resp) {
            _self.updateUser(resp, user);
        }, function(err) => {
            console.log("Error creating user");
        });
      }
    },
    /*
     * Freshchat Widget Update Method
     * @param Object response - widget user Object
     * @param Object user - site user Object
     */
    updateUser: function(response, user) {
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
          // `Replace this with your ajax call`
          window.updateSiteUser(rstId).then(function(resp) {
            // On Success update the local site user object
            if (resp && user) {
                user.restoreId = rstId;
                console.log(`Restore ID updated for user ${rstId}`);
            }
          });
          /*
           * Update widget user custom parameters here
           */
          window.fcWidget.user.update({
            firstName: "FIRST_NAME",
            lastName: "LAST_NAME"
          });
        }
      }
    }
  }
}
