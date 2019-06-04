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
var EmailUserEntityCollection_1 = require("./EmailUserEntityCollection");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ExtractedEntity_1 = require("./ExtractedEntity");
/**
 * Represents an MeetingSuggestion object.
 */
var MeetingSuggestion = /** @class */ (function (_super) {
    __extends(MeetingSuggestion, _super);
    /**
     * @internal Initializes a new instance of the **MeetingSuggestion** class.
     */
    function MeetingSuggestion() {
        var _this = _super.call(this) || this;
        /**
         * Gets the meeting suggestion Attendees.
         */
        _this.Attendees = null;
        /**
         * Gets the meeting suggestion Location.
         */
        _this.Location = null;
        /**
         * Gets the meeting suggestion Subject.
         */
        _this.Subject = null;
        /**
         * Gets the meeting suggestion MeetingString.
         */
        _this.MeetingString = null;
        /**
         * Gets the meeting suggestion StartTime.
         */
        _this.StartTime = null;
        /**
         * Gets the meeting suggestion EndTime.
         */
        _this.EndTime = null;
        return _this;
    }
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    MeetingSuggestion.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        _super.prototype.LoadFromXmlJsObject.call(this, jsObject, service);
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.NlgAttendees:
                    this.Attendees = new EmailUserEntityCollection_1.EmailUserEntityCollection();
                    this.Attendees.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.NlgLocation:
                    this.Location = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.NlgSubject:
                    this.Subject = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.NlgMeetingString:
                    this.MeetingString = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.NlgStartTime:
                    this.StartTime = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.NlgEndTime:
                    this.EndTime = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                default:
                    break;
            }
        }
    };
    return MeetingSuggestion;
}(ExtractedEntity_1.ExtractedEntity));
exports.MeetingSuggestion = MeetingSuggestion;
