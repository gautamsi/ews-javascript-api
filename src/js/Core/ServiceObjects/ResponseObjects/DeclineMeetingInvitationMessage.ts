import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {Item} from "../Items/Item";
import {MeetingResponse} from "../Items/MeetingResponse";
import {XmlElementNames} from "../../XmlElementNames";

import {CalendarResponseMessage} from "./CalendarResponseMessage";
/**
 * Represents a meeting declination message.
 */
export class DeclineMeetingInvitationMessage extends CalendarResponseMessage<MeetingResponse> {

    /**
     * Initializes a new instance of the **DeclineMeetingInvitationMessage** class.
     *
     * @param   {Item}   referenceItem   The reference item.
     */
    constructor(referenceItem: Item) {
        super(referenceItem);
    }

    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }

    /**
     * @internal Gets the element name of item in XML
     * 
     * @return  {string} name of elelment
     */
    GetXmlElementName(): string { return XmlElementNames.DeclineItem; }
}
