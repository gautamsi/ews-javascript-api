"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ServiceRemoteException_1 = require("./ServiceRemoteException");
/**
 * Represents an error that occurs when the account that is being accessed is locked and requires user interaction to be unlocked.
 */
var AccountIsLockedException = /** @class */ (function (_super) {
    __extends(AccountIsLockedException, _super);
    /**
     * Initializes a new instance of the **AccountIsLockedException** class.
     *
     * @param   {string}        message            Error message text.
     * @param   {Uri}           accountUnlockUrl   URL for client to visit to unlock account.
     * @param   {Exception}     innerException     Inner exception.
     */
    function AccountIsLockedException(message, accountUnlockUrl, innerException) {
        var _this = _super.call(this, message, innerException) || this;
        /**
         * Gets the URL of a web page where the user can navigate to unlock his or her account.
         *
         * internal set
         */
        _this.AccountUnlockUrl = null;
        _this.AccountUnlockUrl = accountUnlockUrl;
        return _this;
    }
    return AccountIsLockedException;
}(ServiceRemoteException_1.ServiceRemoteException));
exports.AccountIsLockedException = AccountIsLockedException;
