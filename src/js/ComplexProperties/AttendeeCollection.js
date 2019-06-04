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
var ArgumentException_1 = require("../Exceptions/ArgumentException");
var EwsUtilities_1 = require("../Core/EwsUtilities");
var Strings_1 = require("../Strings");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var Attendee_1 = require("./Attendee");
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
/**
 * Represents a collection of attendees.
 */
var AttendeeCollection = /** @class */ (function (_super) {
    __extends(AttendeeCollection, _super);
    /**
     * @internal Initializes a new instance of the **AttendeeCollection** class.
     */
    function AttendeeCollection() {
        return _super.call(this) || this;
    }
    AttendeeCollection.prototype.Add = function (nameOrSmtpAddressOrAttendee, smtpAddress) {
        var argsLength = arguments.length;
        var attendee = nameOrSmtpAddressOrAttendee;
        if (argsLength == 1) {
            if (typeof nameOrSmtpAddressOrAttendee === 'string') {
                attendee = new Attendee_1.Attendee(nameOrSmtpAddressOrAttendee);
            }
            else {
                attendee = nameOrSmtpAddressOrAttendee;
            }
        }
        if (argsLength === 2) {
            attendee = new Attendee_1.Attendee(nameOrSmtpAddressOrAttendee, smtpAddress);
        }
        this.InternalAdd(attendee);
        return attendee;
    };
    /**
     * Clears the collection.
     */
    AttendeeCollection.prototype.Clear = function () {
        this.InternalClear();
    };
    /**
     * @internal Creates an Attendee object from an XML element name.
     *
     * @param   {string}   xmlElementName   The XML element name from which to create the attendee.
     * @return  {Attendee}      An Attendee object.
     */
    AttendeeCollection.prototype.CreateComplexProperty = function (xmlElementName) {
        if (xmlElementName == XmlElementNames_1.XmlElementNames.Attendee) {
            return new Attendee_1.Attendee();
        }
        else {
            return null;
        }
    };
    /**
     * @internal Creates the default complex property.
     *
     * @return  {Attendee}      [description]
     */
    AttendeeCollection.prototype.CreateDefaultComplexProperty = function () { return new Attendee_1.Attendee(); };
    /**
     * @internal Retrieves the XML element name corresponding to the provided Attendee object.
     *
     * @param   {Attendee}   attendee   The Attendee object from which to determine the XML element name.
     * @return  {string}        The XML element name corresponding to the provided Attendee object.
     */
    AttendeeCollection.prototype.GetCollectionItemXmlElementName = function (attendee) { return XmlElementNames_1.XmlElementNames.Attendee; };
    /**
     * Removes an attendee from the collection.
     *
     * @param   {Attendee}   attendee   The attendee to remove.
     * @return  {boolean}              True if the attendee was successfully removed from the collection, false otherwise.
     */
    AttendeeCollection.prototype.Remove = function (attendee) {
        EwsUtilities_1.EwsUtilities.ValidateParam(attendee, "attendee");
        return this.InternalRemove(attendee);
    };
    /**
     * Removes an attendee from the collection.
     *
     * @param   {number}   index   The index of the attendee to remove.
     */
    AttendeeCollection.prototype.RemoveAt = function (index) {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("index", Strings_1.Strings.IndexIsOutOfRange);
        }
        this.InternalRemoveAt(index);
    };
    return AttendeeCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.AttendeeCollection = AttendeeCollection;
