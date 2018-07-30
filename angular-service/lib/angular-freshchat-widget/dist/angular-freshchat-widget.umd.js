(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', 'rxjs'], factory) :
	(factory((global['angular-freshchat-widget'] = {}),global.core,global.common,global.rxjs));
}(this, (function (exports,core,common,rxjs) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FreshchatService = (function () {
    function FreshchatService() {
        var _this = this;
        this.widget = (/** @type {?} */ (window));
        this.user = {};
        this.userCreationStatus = new rxjs.Subject();
        // Observable stream
        this.userCreation = this.userCreationStatus.asObservable();
        this.loadWidget = function (user) {
            if (user) {
                for (var /** @type {?} */ key in user) {
                    _this.user[key] = user[key];
                }
            }
            _this.widget.fcWidget.user.get().then(function (response) {
                _this.validateUser(response, _this.user);
            }, function (error) {
                _this.validateUser(error, _this.user);
            });
        };
        this.validateUser = function (response, user) {
            var /** @type {?} */ status = response && response.status, /** @type {?} */
            rstId = user && user.restoreId;
            if (status === 200) {
                _this.updateUser(response, user);
            }
            if ([401, 403, 404].indexOf(status) > -1 && !rstId) {
                /*
                       * User doesn't exist
                       * Use this block only if you want to create the user on load
                       * Otherwise comment this
                       */
                /*
                 * User doesn't exist
                 * Use this block only if you want to create the user on load
                 * Otherwise comment this
                 */
                _this.broadcastStatus({ status: 404, message: "User doesn't exist in freshchat system" });
            }
            else if ([401, 404, 409].indexOf(status) > -1 && rstId) {
                /*
                       * Data Mismatch : Can't load the user for the given config
                       * Reset restoreId if exist so a new user will be created when there is mismatch
                       */
                user.restoreId = void 0;
                _this.createUser();
            }
        };
        this.createUser = function () {
            _this.widget.fcWidget.user.create().then(function (resp) {
                _this.updateUser(resp, _this.user);
            }, function (err) {
                _this.broadcastStatus({ status: 500, message: "Error creating user " + JSON.stringify(err) });
                console.log("Error creating user " + JSON.stringify(err));
            });
        };
        this.updateUser = function (response, user) {
            var /** @type {?} */ data = response && response.data, /** @type {?} */
            externalId = user && user.externalId, /** @type {?} */
            restoreId = user && user.restoreId;
            if (data) {
                var /** @type {?} */ rstId = data.restoreId, /** @type {?} */
                extId = data.externalId || data.identifier;
                if ((externalId && externalId === extId) && (restoreId !== rstId)) {
                    /*
                             * Identified a mismatch between widget user and site user credentials
                             * Update restoreId for the site user
                             */
                    /*
                     * Identified a mismatch between widget user and site user credentials
                     * Update restoreId for the site user
                     */
                    _this.broadcastStatus({
                        status: 201,
                        message: "Identified a mismatch between widget user and site user credentials",
                        restoreId: rstId
                    });
                    /*
                             * Update widget user custom parameters here
                             */
                    /*
                     * Update widget user custom parameters here
                     */
                    _this.widget.fcWidget.user.update({
                        firstName: _this.user.firstName,
                        lastName: _this.user.lastName
                    });
                }
            }
            else {
                //new user is created
                //new user is created
                _this.broadcastStatus({
                    status: 200,
                    message: "User create and use this restore ID for restoring again.",
                    restoreId: data.restoreId
                });
            }
        };
    }
    /**
     * @param {?} resp
     * @return {?}
     */
    FreshchatService.prototype.broadcastStatus = /**
     * @param {?} resp
     * @return {?}
     */
    function (resp) {
        this.userCreationStatus.next(resp);
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    FreshchatService.prototype.init = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        //update user properties if any
        if (payload.user) {
            for (var /** @type {?} */ key in payload.user) {
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
        }
        else {
            this.widget.fcSettings = {
                token: payload.token,
                host: payload.host,
                externalId: payload.externalId,
                restoreId: payload.restoreId,
                onInit: this.loadWidget
            };
        }
    };
    FreshchatService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    FreshchatService.ctorParameters = function () { return []; };
    return FreshchatService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FreshchatModule = (function () {
    function FreshchatModule() {
    }
    /**
     * @return {?}
     */
    FreshchatModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: FreshchatModule,
            providers: [FreshchatService]
        };
    };
    FreshchatModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [],
                    exports: []
                },] },
    ];
    return FreshchatModule;
}());

exports.FreshchatModule = FreshchatModule;
exports.FreshchatService = FreshchatService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
