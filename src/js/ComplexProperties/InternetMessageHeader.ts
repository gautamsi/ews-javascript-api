import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../Core/ExchangeService";
import {StringHelper} from "../ExtensionMethods";
import {XmlAttributeNames} from "../Core/XmlAttributeNames";
import {XmlElementNames} from "../Core/XmlElementNames";

import {ComplexProperty} from "./ComplexProperty";
/**
 * Represents an Internet message header.
 */
export class InternetMessageHeader extends ComplexProperty {
    
    private name: string = null;
    private value: string = null;

    /**
     * The name of the header.
     */
    get Name(): string {
        return this.name;
    }
    set Name(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.name, setValue: (nameValue: string) => { this.name = nameValue } }, value);
    }

    /**
     * The value of the header.
     */
    get Value(): string {
        return this.value;
    }
    set Value(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.value, setValue: (valueValue: string) => { this.value = valueValue } }, value);
    }

    /**
     * @internal Initializes a new instance of the **InternetMessageHeader** class.
     */
    constructor() {
        super();
    }

    /**
     * @internal Loads from XMLJsObject.
     *
     * @param   {any}   jsonProperty   The json property.
     * @param   {ExchangeService}   service        The ExchangeService instance
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        for (let key in jsObject) {
            switch (key) {
                case XmlAttributeNames.HeaderName:
                    this.name = jsObject[key];
                    break;
                case XmlElementNames.InternetMessageHeader: //JsonObject.JsonValueString: //ref: //info: custom parser in ExtensionMethods uses name of type when there is attribute value as well as text value
                    this.value = jsObject[key];
                    break;
                default:
                    break;
            }
        }
    }

    /**
     * Obtains a string representation of the header.
     *
     * @return  {string}      The string representation of the header.
     */
    ToString(): string { return StringHelper.Format("{0}={1}", this.Name, this.Value); }
    toString(): string { return this.ToString(); }

    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void { writer.WriteAttributeValue(XmlAttributeNames.HeaderName, this.Name); }

    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void { writer.WriteValue(this.Value, this.Name); }
}