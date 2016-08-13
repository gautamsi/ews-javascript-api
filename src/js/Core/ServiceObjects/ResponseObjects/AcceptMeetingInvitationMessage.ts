import {Item} from "../Items/Item";
import {XmlElementNames} from "../../XmlElementNames";
import {MeetingResponse} from "../Items/MeetingResponse";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";

import {CalendarResponseMessage} from "./CalendarResponseMessage";
/**
 * Represents a meeting acceptance message.
 *
 */
export class AcceptMeetingInvitationMessage extends CalendarResponseMessage<MeetingResponse> {
        private tentative: boolean = false;
        /**
         * Gets a value indicating whether the associated meeting is tentatively accepted.
         *
         */
        get Tentative(): boolean {
                return this.tentative;
        }
        /**
         * Initializes a new instance of the **AcceptMeetingInvitationMessage** class.
         *
         * @param   {Item}            referenceItem   The reference item.
         * @param   {boolean}         tentative       if set to true accept invitation tentatively.
         */
        constructor(referenceItem: Item, tentative: boolean) {
                super(referenceItem);
                this.tentative = tentative;
        }
        /**
         * @internal Gets the minimum required server version.
         *
         * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
         */
        GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
        /**
         * @internal This methods lets subclasses of ServiceObject override the default mechanism by which the XML element name associated with their type is retrieved.
         *
         * @return  {string}      The XML element name associated with this type. If this method returns null or empty, the XML element name associated with this type is determined by the EwsObjectDefinition attribute that decorates the type, if present.
         */
        GetXmlElementNameOverride(): string {
                if (this.tentative) {
                        return XmlElementNames.TentativelyAcceptItem;
                }
                else {
                        return XmlElementNames.AcceptItem;
                }
        }
        /**
         * @internal Gets the element name of item in XML
         *
         * @return  {string} name of elelment
         */
        GetXmlElementName(): string { return this.GetXmlElementNameOverride(); }
}
