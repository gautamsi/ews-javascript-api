import {ArgumentOutOfRangeException} from "../Exceptions/ArgumentException";
import {EwsUtilities} from "../Core/EwsUtilities";
import {Strings} from "../Strings";
import {XmlElementNames} from "../Core/XmlElementNames";

import {Attendee} from "./Attendee";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
/**
 * Represents a collection of attendees.
 */
export class AttendeeCollection extends ComplexPropertyCollection<Attendee> {

    /**
     * @internal Initializes a new instance of the **AttendeeCollection** class.
     */
    constructor() {
        super();
    }

    /**
     * Adds an attendee to the collection.
     *
     * @param   {Attendee}   attendee   The attendee to add.
     */
    Add(attendee: Attendee): void;
    /**
     * Adds a attendee to the collection.
     *
     * @param   {string}   smtpAddress   The SMTP address of the attendee.
     * @return  {Attendee}      An Attendee instance initialized with the provided name and SMTP address.
     */
    Add(smtpAddress: string): Attendee;
    /**
     * Adds a attendee to the collection.
     *
     * @param   {string}   name          The name of the attendee.
     * @param   {string}   smtpAddress   The SMTP address of the attendee.
     * @return  {Attendee}      An Attendee instance initialized with the provided name and SMTP address.
     */
    Add(name: string, smtpAddress: string): Attendee;
    Add(nameOrSmtpAddressOrAttendee: string | Attendee, smtpAddress?: string): any | Attendee {
        let argsLength = arguments.length;
        let attendee: Attendee = <Attendee>nameOrSmtpAddressOrAttendee;
        if (argsLength == 1) {
            if (typeof nameOrSmtpAddressOrAttendee === 'string') {
                attendee = new Attendee(nameOrSmtpAddressOrAttendee);
            }
            else {
                attendee = nameOrSmtpAddressOrAttendee;
            }
        }
        if (argsLength === 2) {
            attendee = new Attendee(<string>nameOrSmtpAddressOrAttendee, smtpAddress);
        }
        this.InternalAdd(attendee);
        return attendee;
    }

    /**
     * Clears the collection.
     */
    Clear(): void {
        this.InternalClear();
    }

    /**
     * @internal Creates an Attendee object from an XML element name.
     *
     * @param   {string}   xmlElementName   The XML element name from which to create the attendee.
     * @return  {Attendee}      An Attendee object.
     */
    CreateComplexProperty(xmlElementName: string): Attendee {
        if (xmlElementName == XmlElementNames.Attendee) {
            return new Attendee();
        }
        else {
            return null;
        }
    }

    /**
     * @internal Creates the default complex property.
     *
     * @return  {Attendee}      [description]
     */
    CreateDefaultComplexProperty(): Attendee { return new Attendee(); }

    /**
     * @internal Retrieves the XML element name corresponding to the provided Attendee object.
     *
     * @param   {Attendee}   attendee   The Attendee object from which to determine the XML element name.
     * @return  {string}        The XML element name corresponding to the provided Attendee object.
     */
    GetCollectionItemXmlElementName(attendee: Attendee): string { return XmlElementNames.Attendee; }

    /**
     * Removes an attendee from the collection.
     *
     * @param   {Attendee}   attendee   The attendee to remove.
     * @return  {boolean}              True if the attendee was successfully removed from the collection, false otherwise.
     */
    Remove(attendee: Attendee): boolean {
        EwsUtilities.ValidateParam(attendee, "attendee");
        return this.InternalRemove(attendee);
    }

    /**
     * Removes an attendee from the collection.
     *
     * @param   {number}   index   The index of the attendee to remove.
     */
    RemoveAt(index: number): void {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentOutOfRangeException("index", Strings.IndexIsOutOfRange);
        }

        this.InternalRemoveAt(index);
    }
}

