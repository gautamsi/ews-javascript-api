"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionMethods_1 = require("../ExtensionMethods");
var XmlElementNames_1 = require("../Core/XmlElementNames");
/**
 * Mailbox statistics item
 *
 * @sealed
 */
var MailboxStatisticsItem = /** @class */ (function () {
    function MailboxStatisticsItem() {
        /**
         * Mailbox id
         */
        this.MailboxId = null;
        /**
         * Display name
         */
        this.DisplayName = null;
        /**
         * Item count
         */
        this.ItemCount = 0;
        /**
         * Total size
         * [CLSCompliant(false)]
         */
        this.Size = 0;
    }
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     * @return  {SearchRefinerItem}
     */
    MailboxStatisticsItem.LoadFromXmlJsObject = function (jsObject, service) {
        var msi = new MailboxStatisticsItem();
        msi.MailboxId = jsObject[XmlElementNames_1.XmlElementNames.MailboxId];
        msi.DisplayName = jsObject[XmlElementNames_1.XmlElementNames.DisplayName];
        msi.ItemCount = ExtensionMethods_1.Convert.toNumber(jsObject[XmlElementNames_1.XmlElementNames.ItemCount]);
        msi.Size = ExtensionMethods_1.Convert.toNumber(jsObject[XmlElementNames_1.XmlElementNames.Size]);
        return msi;
    };
    return MailboxStatisticsItem;
}());
exports.MailboxStatisticsItem = MailboxStatisticsItem;
