import { XmlAttributeNames } from "../Core/XmlAttributeNames";
import { XmlElementNames } from "../Core/XmlElementNames";
import { BodyType } from "../Enumerations/BodyType";
import { StringHelper } from "../ExtensionMethods";
import { ExchangeService } from "../Core/ExchangeService";
import { EwsServiceXmlReader } from "../Core/EwsServiceXmlReader";
import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";

import { ComplexProperty } from "./ComplexProperty";
export class MessageBody extends ComplexProperty {
    private bodyType: BodyType = 0;
    private text: string = null;
    get BodyType(): BodyType {
        return this.bodyType;
    }
    set BodyType(value: BodyType) {
        this.SetFieldValue({ getValue: () => this.bodyType, setValue: (bodytype) => this.bodyType = bodytype }, value)
    }
    get Text(): string {
        return this.text;
    }
    set Text(value: string) {
        this.SetFieldValue({ getValue: () => this.text, setValue: (txt) => this.text = txt }, value)
    }
    constructor();
    constructor(text: string);
    constructor(bodyType: BodyType, text: string);
    constructor(bodyTypeOrText?: BodyType | string, text?: string) {
        super();
        var argslength = arguments.length
        if (argslength === 0) {
            return;
        }
        var bodyType = BodyType.HTML;
        var strText = text;
        if (argslength === 1 && typeof bodyTypeOrText === "string") {
            strText = bodyTypeOrText;
        }
        if (argslength === 2 && typeof bodyTypeOrText === "number") {
            bodyType = bodyTypeOrText;
        }
        this.bodyType = bodyType;
        this.text = strText;
    }
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        for (var key in jsObject) {
            if (key.indexOf("__") === 0) {
                continue;
            }
            switch (key) {
                case XmlAttributeNames.BodyType:
                    this.bodyType = BodyType[<string>jsObject[key]];
                    break;
                case XmlElementNames.Body: //info - Body Element text - custom parser in ews-javascript-api. 
                case XmlElementNames.TextBody: //info - TextBody Element text - custom parser in ews-javascript-api. 
                    this.text = jsObject[key];
                    break;
                case XmlAttributeNames.IsTruncated:
                    //ref: IsTruncated not captured 
                    break;
                default:
                    debugger;//check exact name of body element
                    break;
            }
        }
    }
    /**@internal */
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): void { throw new Error("MessageBody.ts - ReadAttributesFromXml : Not implemented. - should not be called"); }
    /**@internal */
    ReadTextValueFromXmlJsObject(reader: EwsServiceXmlReader): void { throw new Error("MessageBody.ts - ReadTextValueFromXml : Not implemented. - should not be called"); }
    ToString(): string { return (this.Text == null) ? StringHelper.Empty : this.Text; }
    /**@internal */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void { writer.WriteAttributeValue(XmlAttributeNames.BodyType, BodyType[this.BodyType]); }
    /**@internal */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        if (!StringHelper.IsNullOrEmpty(this.Text)) {
            writer.WriteValue(this.Text, XmlElementNames.Body);
        }
    }
}