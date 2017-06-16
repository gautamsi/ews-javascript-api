import { EwsServiceXmlWriter } from "../../Core/EwsServiceXmlWriter";
import { EwsUtilities } from "../../Core/EwsUtilities";
import { ExchangeService } from "../../Core/ExchangeService";
import { TimeSpan } from "../../TimeSpan";
import { XmlAttributeNames } from "../../Core/XmlAttributeNames";
import { XmlElementNames } from "../../Core/XmlElementNames";

import { ComplexProperty } from "../ComplexProperty";
/**
 * @internal Represents a time zone period as defined in the EWS schema.
 */
export class TimeZonePeriod extends ComplexProperty {

    /** @internal */
    static readonly StandardPeriodId: string = "Std";
    /** @internal */
    static readonly StandardPeriodName: string = "Standard";
    /** @internal */
    static readonly DaylightPeriodId: string = "Dlt";
    /** @internal */
    static readonly DaylightPeriodName: string = "Daylight";

    /**
     * Gets a value indicating whether this period represents the Standard period.
     *
     * @value   <c>true</c> if this instance is standard period; otherwise, <c>false</c>.
     */
    get IsStandardPeriod(): boolean {
        return this.Name.toUpperCase() === TimeZonePeriod.StandardPeriodName.toUpperCase();
        // return string.Compare(
        //     this.name,
        //     TimeZonePeriod.StandardPeriodName,
        //     StringComparison.OrdinalIgnoreCase) == 0;
    }

    // private bias: TimeSpan; backing property not needed 
    // private name: string;
    // private id: string;

    /**
     * @internal Gets or sets the bias to UTC associated with this period.
     */
    Bias: TimeSpan;

    /**
     * @internal Gets or sets the name of this period.
     */
    Name: string;

    /**
     * @internal Gets or sets the id of this period.
     */
    Id: string;

    /**
     * @internal Initializes a new instance of the **TimeZonePeriod** class.
     */
    constructor() {
        super()
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {

        for (let key in jsObject) {
            switch (key) {
                case XmlAttributeNames.Id:
                    this.Id = jsObject[key];
                    break;
                case XmlAttributeNames.Name:
                    this.Name = jsObject[key];
                    break;
                case XmlAttributeNames.Bias:
                    this.Bias = EwsUtilities.XSDurationToTimeSpan(jsObject[key]);
                    break;
            }
        }
    }

    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteAttributeValue(XmlAttributeNames.Bias, EwsUtilities.TimeSpanToXSDuration(this.Bias));
        writer.WriteAttributeValue(XmlAttributeNames.Name, this.Name);
        writer.WriteAttributeValue(XmlAttributeNames.Id, this.Id);
    }

    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteToXml(writer: EwsServiceXmlWriter): void { super.WriteToXml(writer, XmlElementNames.Period); }
}
