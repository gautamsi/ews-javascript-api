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
var DateTime_1 = require("../../DateTime");
var ServiceLocalException_1 = require("../../Exceptions/ServiceLocalException");
var Strings_1 = require("../../Strings");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var TimeZoneTransition_1 = require("./TimeZoneTransition");
/**
 * @internal Represents a time zone period transition that occurs on a fixed (absolute) date.
 */
var AbsoluteDateTransition = /** @class */ (function (_super) {
    __extends(AbsoluteDateTransition, _super);
    function AbsoluteDateTransition(timeZoneDefinition, targetGroup) {
        return _super.call(this, timeZoneDefinition, targetGroup) || this;
    }
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    AbsoluteDateTransition.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.AbsoluteDateTransition;
    };
    /**
     * @internal Initializes this transition based on the specified transition time.
     *
     * @param   {TimeZoneInfo.TransitionTime}   transitionTime   The transition time to initialize from.
     */
    AbsoluteDateTransition.prototype.InitializeFromTransitionTime = function (transitionTime) {
        throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.UnsupportedTimeZonePeriodTransitionTarget);
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    AbsoluteDateTransition.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        _super.prototype.LoadFromXmlJsObject.call(this, jsObject, service);
        if (jsObject[XmlElementNames_1.XmlElementNames.DateTime]) {
            this.DateTime = DateTime_1.DateTime.Parse(jsObject[XmlElementNames_1.XmlElementNames.DateTime]);
        }
    };
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    AbsoluteDateTransition.prototype.WriteElementsToXml = function (writer) {
        _super.prototype.WriteElementsToXml.call(this, writer);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DateTime, this.DateTime);
    };
    return AbsoluteDateTransition;
}(TimeZoneTransition_1.TimeZoneTransition));
exports.AbsoluteDateTransition = AbsoluteDateTransition;
