"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EwsServiceJsonReader_1 = require("../Core/EwsServiceJsonReader");
var HoldStatus_1 = require("../Enumerations/HoldStatus");
var MailboxHoldStatus_1 = require("./MailboxHoldStatus");
var XmlElementNames_1 = require("../Core/XmlElementNames");
/**
 * Represents mailbox hold result
 *
 * @sealed
 */
var MailboxHoldResult = /** @class */ (function () {
    function MailboxHoldResult() {
        /**
         * Hold id
         */
        this.HoldId = null;
        /**
         * Query
         */
        this.Query = null;
        /**
         * Collection of mailbox status
         */
        this.Statuses = null;
    }
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     * @return  {MailboxHoldResult}              Mailbox hold object
     */
    MailboxHoldResult.LoadFromXmlJsObject = function (jsObject, service) {
        var statuses = [];
        var holdResult = new MailboxHoldResult();
        if (jsObject[XmlElementNames_1.XmlElementNames.HoldId]) {
            holdResult.HoldId = jsObject[XmlElementNames_1.XmlElementNames.HoldId];
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.Query]) {
            holdResult.Query = jsObject[XmlElementNames_1.XmlElementNames.Query];
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.MailboxHoldStatuses]) {
            for (var _i = 0, _a = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObject[XmlElementNames_1.XmlElementNames.MailboxHoldStatuses], XmlElementNames_1.XmlElementNames.MailboxHoldStatus); _i < _a.length; _i++) {
                var statusObject = _a[_i];
                var status_1 = new MailboxHoldStatus_1.MailboxHoldStatus();
                if (statusObject[XmlElementNames_1.XmlElementNames.Mailbox]) {
                    status_1.Mailbox = statusObject[XmlElementNames_1.XmlElementNames.Mailbox];
                }
                if (statusObject[XmlElementNames_1.XmlElementNames.Status]) {
                    status_1.Status = HoldStatus_1.HoldStatus[statusObject[XmlElementNames_1.XmlElementNames.Status]];
                }
                if (statusObject[XmlElementNames_1.XmlElementNames.AdditionalInfo]) {
                    status_1.AdditionalInfo = statusObject[XmlElementNames_1.XmlElementNames.AdditionalInfo];
                }
                statuses.push(status_1);
            }
        }
        holdResult.Statuses = statuses.length == 0 ? null : statuses;
        return holdResult;
    };
    return MailboxHoldResult;
}());
exports.MailboxHoldResult = MailboxHoldResult;
