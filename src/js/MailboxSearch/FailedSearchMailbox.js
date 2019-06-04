"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionMethods_1 = require("../ExtensionMethods");
var EwsServiceJsonReader_1 = require("../Core/EwsServiceJsonReader");
var XmlElementNames_1 = require("../Core/XmlElementNames");
/**
 * Represents failed mailbox to be searched
 *
 * @sealed
 */
var FailedSearchMailbox = /** @class */ (function () {
    function FailedSearchMailbox(mailbox, errorCode, errorMessage, isArchive) {
        if (isArchive === void 0) { isArchive = false; }
        this.Mailbox = null;
        this.ErrorCode = 0;
        this.ErrorMessage = null;
        this.IsArchive = false;
        this.Mailbox = mailbox;
        this.ErrorCode = errorCode;
        this.ErrorMessage = errorMessage;
        this.IsArchive = isArchive;
    }
    /**
     * @internal Load failed mailboxes xml
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     * @return  {FailedSearchMailbox[]}       Failed search mailboxes.
     */
    FailedSearchMailbox.LoadFromXmlJsObject = function (jsObject, service) {
        var failedMailboxes = [];
        for (var _i = 0, _a = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObject, XmlElementNames_1.XmlElementNames.FailedMailbox); _i < _a.length; _i++) {
            var failedMailboxObject = _a[_i];
            var mailbox = null, errorCode = 0, errorMessage = null, isArchive = false;
            if (failedMailboxObject[XmlElementNames_1.XmlElementNames.Mailbox]) {
                mailbox = failedMailboxObject[XmlElementNames_1.XmlElementNames.Mailbox];
            }
            if (failedMailboxObject[XmlElementNames_1.XmlElementNames.ErrorCode]) {
                errorCode = ExtensionMethods_1.Convert.toNumber(failedMailboxObject[XmlElementNames_1.XmlElementNames.ErrorCode]);
            }
            if (failedMailboxObject[XmlElementNames_1.XmlElementNames.ErrorMessage]) {
                errorMessage = failedMailboxObject[XmlElementNames_1.XmlElementNames.ErrorMessage];
            }
            if (failedMailboxObject[XmlElementNames_1.XmlElementNames.IsArchive]) {
                isArchive = ExtensionMethods_1.Convert.toBool(failedMailboxObject[XmlElementNames_1.XmlElementNames.IsArchive]);
            }
            failedMailboxes.push(new FailedSearchMailbox(mailbox, errorCode, errorMessage, isArchive));
        }
        return failedMailboxes.length === 0 ? null : failedMailboxes;
    };
    return FailedSearchMailbox;
}());
exports.FailedSearchMailbox = FailedSearchMailbox;
