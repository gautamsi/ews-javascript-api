import { DateTime } from "../../DateTime";
import { EwsServiceXmlWriter } from "../../Core/EwsServiceXmlWriter";
import { ExchangeService } from "../../ExchangeWebService";
import { ServiceLocalException } from "../../Exceptions/ServiceLocalException";
import { Strings } from "../../Strings";
import { TimeZoneDefinition } from "./TimeZoneDefinition";
import { TimeZoneInfo } from "../../TimeZoneInfo";
import { TimeZoneTransitionGroup } from "./TimeZoneTransitionGroup";
import { XmlElementNames } from "../../Core/XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { TimeZoneTransition } from "./TimeZoneTransition";
/**
 * @internal Represents a time zone period transition that occurs on a fixed (absolute) date.
 */
export class AbsoluteDateTransition extends TimeZoneTransition {

    /**
     * Gets or sets the absolute date and time when the transition occurs.
     */
    DateTime: DateTime;

    /**
     * @internal Initializes a new instance of the **AbsoluteDateTransition** class.
     *
     * @param   {TimeZoneDefinition}        timeZoneDefinition   The time zone definition the transition will belong to.
     */
    constructor(timeZoneDefinition: TimeZoneDefinition);
    /**
     * @internal Initializes a new instance of the **AbsoluteDateTransition** class.
     *
     * @param   {TimeZoneDefinition}        timeZoneDefinition   The time zone definition the transition will belong to.
     * @param   {TimeZoneTransitionGroup}   targetGroup          The transition group the transition will target.
     */
    constructor(timeZoneDefinition: TimeZoneDefinition, targetGroup: TimeZoneTransitionGroup);
    constructor(timeZoneDefinition: TimeZoneDefinition, targetGroup?: TimeZoneTransitionGroup) {
        super(timeZoneDefinition, targetGroup);
    }

    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetXmlElementName(): string {
        return XmlElementNames.AbsoluteDateTransition;
    }

    /**
     * @internal Initializes this transition based on the specified transition time.
     *
     * @param   {TimeZoneInfo.TransitionTime}   transitionTime   The transition time to initialize from.
     */
    InitializeFromTransitionTime(transitionTime: TimeZoneInfo.TransitionTime): TimeZoneInfo.TransitionTime {
        throw new ServiceLocalException(Strings.UnsupportedTimeZonePeriodTransitionTarget);
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        super.LoadFromXmlJsObject(jsObject, service);

        if (jsObject[XmlElementNames.DateTime]) {
            this.DateTime = DateTime.Parse(jsObject[XmlElementNames.DateTime]);
        }
    }

    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */

    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        super.WriteElementsToXml(writer);

        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.DateTime,
            this.DateTime);
    }
}
