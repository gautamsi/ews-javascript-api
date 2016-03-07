import {Strings} from "../Strings";
import {EwsLogging} from "./EwsLogging";
import {ExchangeServiceBase} from "./ExchangeServiceBase";
import {EwsUtilities} from "./EwsUtilities";
import {XmlNamespace} from "../Enumerations/XmlNamespace";
import {StringHelper, base64Helper} from "../ExtensionMethods";

/**
 * XML writer
 */
export class EwsServiceXmlWriter {
    //get InternalWriter(): System.Xml.XmlWriter;
    get Service(): ExchangeServiceBase { return this.service }
    /**
     * Buffer size for writing Base64 encoded content.
     *
     */
    static BufferSize: number = 4096;

    IsTimeZoneHeaderEmitted: boolean;
    RequireWSSecurityUtilityNamespace: boolean;
    private isDisposed: boolean;
    private service: ExchangeServiceBase;
    private xmlWriter: any;// System.Xml.XmlWriter;
    private isTimeZoneHeaderEmitted: boolean;
    private requireWSSecurityUtilityNamespace: boolean;
    /**
     * UTF-8 encoding that does not create leading Byte order marks
     *
     */
    private static utf8Encoding: any;// System.Text.Encoding;
    Dispose(): any { throw new Error("EwsServiceXmlWriter.ts - Dispose : Not implemented."); }
    Flush(): void { //throw new Error("Not implemented.");
    }

    //#region custome XML writer data;
    private xmlElements: string[] = [];
    private pendingElementData = "";
    private pendingXMLTagClosure = false;
    private soapData: string = "";

    private rootUris: string[] = [];
    private rootLevel: boolean = false;
    private currentLevel: number = 0;
    private uriCache: string[][];

    /**
     * Gets the xml created by EWS XMl Writer.
     * 
     * @param   {boolean}   keep   removes internal cache of XML data if false, otherwise keep the data. 
     */
    GetXML(keep: boolean = false): string {
        var returnVal = this.soapData.trim();
        if (!keep) this.soapData = "";
        return returnVal;
    }
    /**
     * Closes XMl tag
     */
    private CloseTag(): void {
        if (this.pendingXMLTagClosure) {
            this.soapData += ">";
            this.pendingXMLTagClosure = false;
            this.rootLevel = false;
        }

    }
    /**
     * Pushes xml uri to internal tracker of used xml uris
     * 
     * @param   {string}   prefix     Prefix of uri.
     * @param   {string}   uri        uri itself.
     */
    private PushUris(prefix: string, uri: string): void {

        if (this.rootLevel) {
            this.rootUris.push(prefix + ":" + uri);
        }

    }

    /**
     * check if an uri exist in internal tracker
     * 
     * @param   {string}   prefix     Prefix of uri.
     * @param   {string}   uri        uri itself.
     */
    private CheckRootUri(prefix: string, uri: string): boolean {
        return this.rootUris.indexOf(prefix + ":" + uri) >= 0;
    }

    //#endregion
    /**
     * Initializes a new instance of the **EwsServiceXmlWriter** class.
     *
     * @param   {ExchangeServiceBase}   service   The service.
     */
    constructor(service: ExchangeServiceBase) {
        this.service = service;
    }

    //TryConvertObjectToString(value: any, strValue: any): boolean { throw new Error("EwsServiceXmlWriter.ts - TryConvertObjectToString : Not implemented."); }
    /**
     * convert object to a string. transformed TryConvertObjectToString metho from c#
     *
     * @param   {any}     value      The value.
     * @return  {string}  The string representation of value.
     */
    ConvertObjectToString(value: any): string {
        var strValue: string = null;

        if (value === null) return null;
        if (typeof (value) == "object" && !(value.GetSearchString /*ISearchStringProvider*/)) throw new Error("value can not be of type object");

        if (value != null) {
            switch (typeof (value)) {
                case "boolean":
                    strValue = EwsUtilities.BoolToXSBool(<boolean>value);
                    break;
                case "number":
                    strValue = value;
                    //todo check for datetime
                    //strValue = this.Service.ConvertDateTimeToUniversalDateTimeString((DateTime) value);
                    break;
                case "string":
                    return value;
                default:
                    try {
                        if (typeof value.GetSearchString !== 'undefined') // checking - ISearchStringProvider
                            strValue = value.GetSearchString();
                    }
                    catch (e) {
                        strValue = value;
                    }

                    break;
            }
            return strValue;
        }

        //return converted;
        return undefined;
    }
    /**
     * Writes the attribute value.
     *
     * @param   {string}   localName     The local name of the attribute.
     * @param   {string}   stringValue   The string value.
     */
    WriteAttributeString(localName: string, stringValue: string): void;
    /**
     * Writes the attribute value.
     *
     * @param   {string}   namespacePrefix   The namespace prefix.
     * @param   {string}   localName         The local name of the attribute.
     * @param   {string}   stringValue       The string value.
     */
    WriteAttributeString(namespacePrefix: string, localName: string, stringValue: string): void;
    WriteAttributeString(
        localNameOrNamespacePrefix: string,
        localNameOrStringValue: string,
        stringValueToWrite?: string): void {
        var namespacePrefix: string = "";
        var localName: string = localNameOrNamespacePrefix;
        var stringValue: string = localNameOrStringValue;
        if (arguments.length === 3) {
            namespacePrefix = localNameOrNamespacePrefix;
            localName = localNameOrStringValue;
            stringValue = stringValueToWrite;
        }

        if (namespacePrefix !== "") namespacePrefix += ":";
        this.soapData += " " + namespacePrefix + localName + "=\"" + stringValue + "\"";
        if (namespacePrefix == "xmlns:") // push to rootUris cache
            this.PushUris(localName, stringValue);
        //try {
        //    this.xmlWriter.WriteAttributeString(
        //        namespacePrefix,
        //        localName,
        //        null,
        //        stringValue);
        //}
        //catch (ex) {
        //    // XmlTextWriter will throw ArgumentException if string includes invalid characters.
        //    //throw new ServiceXmlSerializationException(
        //    //    string.Format(Strings.InvalidAttributeValue, stringValue, localName),
        //    //    ex);
        //}
    }
    /**
     * Writes the attribute value.  Does not emit empty string values.
     *
     * @param   {string}  localName   The local name of the attribute.
     * @param   {any}     value       The value.
     */
    WriteAttributeValue(localName: string, value: any): void;
    /**
     * Writes the attribute value.  Optionally emits empty string values.
     *
     * @param   {string}      localName                The local name of the attribute.
     * @param   {boolean}     alwaysWriteEmptyString   Always emit the empty string as the value.
     * @param   {any}         value                    The value.
     */
    WriteAttributeValue(localName: string, alwaysWriteEmptyString: boolean, value: any): void;
    /**
     * Writes the attribute value.
     *
     * @param   {string}  namespacePrefix   The namespace prefix.
     * @param   {string}  localName         The local name of the attribute.
     * @param   {any}     value             The value.
     */
    WriteAttributeValue(namespacePrefix: string, localName: string, value: any): void;
    WriteAttributeValue(
        localNameOrNamespacePrefix: string,
        localNameOrAlwaysWriteEmptyStringOrValue: string | boolean | any,
        valueToWrite?: any): void {
        var argsLength = arguments.length;
        var localName: string = localNameOrNamespacePrefix;
        var value: any = valueToWrite;
        var alwaysWriteEmptyString: boolean = false;
        var namespacePrefix: string = null;
        var callWithNameSpacePrifix:boolean = false;
        
        if (argsLength === 2) {
            value = localNameOrAlwaysWriteEmptyStringOrValue;
        }
        if (argsLength === 3) {
            if (typeof localNameOrAlwaysWriteEmptyStringOrValue === "boolean") {
                localName = localNameOrNamespacePrefix;
                alwaysWriteEmptyString = localNameOrAlwaysWriteEmptyStringOrValue;
            }
            else {
                namespacePrefix = localNameOrNamespacePrefix;
                localName = localNameOrAlwaysWriteEmptyStringOrValue;
                callWithNameSpacePrifix = true;
            }
        }

        var stringValue: string = this.ConvertObjectToString(value);
        if (!StringHelper.IsNullOrEmpty(stringValue) || alwaysWriteEmptyString) {
            this.WriteAttributeString(
                callWithNameSpacePrifix? namespacePrefix:"",
                localName,
                stringValue);
        }
    }

    //WriteBase64ElementValue(buffer: System.Byte[]): any{ throw new Error("EwsServiceXmlWriter.ts - WriteBase64ElementValue : Not implemented.");}
    //WriteBase64ElementValue(stream: System.IO.Stream): any{ throw new Error("EwsServiceXmlWriter.ts - WriteBase64ElementValue : Not implemented.");}
    /**
     * Writes the base64-encoded element value.
     *
     * @param   {any}   buffer   The buffer.
     */
    WriteBase64ElementValue(buffer: any): void {
        this.WriteValue(base64Helper.btoa(buffer), null);
    }
    
    /**
     * Writes the element value.
     *
     * @param   {XmlNamespace}    xmlNamespace   The XML namespace.
     * @param   {string}          localName      The local name of the element.
     * @param   {string}          displayName    The name that should appear in the exception message when the value can not be serialized.
     * @param   {any}             value          The value.
     */
    WriteElementValue(xmlNamespace: XmlNamespace, localName: string, value: any): void;
    /**
     * Writes the element value.
     *
     * @param   {XmlNamespace}    xmlNamespace   The XML namespace.
     * @param   {string}          localName      The local name of the element.
     * @param   {any}             value          The value.
     */
    WriteElementValue(xmlNamespace: XmlNamespace, localName: string, displayName: string, value: any): void;
    WriteElementValue(
        xmlNamespace: XmlNamespace,
        localName: string,
        displayNameOrValue: string | any,
        valueToWrite?: any): void {

        var value: any = displayNameOrValue;
        var displayName: string = localName;
        if (arguments.length === 4) {
            value = valueToWrite;
            displayName = displayNameOrValue;
        }
        var stringValue: string = this.ConvertObjectToString(value);
        if (stringValue != undefined) {
            this.WriteStartElement(xmlNamespace, localName);
            this.WriteValue(stringValue, displayName);
            this.WriteEndElement();
        }
        else {
            EwsLogging.Assert(stringValue !== 'undefined', 'WriteElementValue', StringHelper.Format(
                Strings.ElementValueCannotBeSerialized,
                typeof (value), localName));
                
            // throw new Error(StringHelper.Format(
            //     Strings.ElementValueCannotBeSerialized,
            //     typeof (value), localName));
        }
    }

    /**
     * Writes the end element.
     */
    WriteEndElement(): void {
        //this.xmlWriter.WriteEndElement();
        var element = "</" + this.xmlElements.pop() + ">";
        this.CloseTag();
        this.soapData += element;
    }
    //WriteNode(xmlNode: System.Xml.XmlNode): any{ throw new Error("EwsServiceXmlWriter.ts - WriteNode : Not implemented.");}
    /**
     * Writes the start element.
     *
     * @param   {XmlNamespace}    xmlNamespace   The XML namespace.
     * @param   {string}          localName      The local name of the element.
     */
    WriteStartElement(xmlNamespace: XmlNamespace, localName: string): void {
        this.CloseTag();
        if (this.soapData == "")
            this.rootLevel = true;
        else
            this.soapData += "";//\r\n";
        var prefix = EwsUtilities.GetNamespacePrefix(xmlNamespace);
        this.soapData += "<" + prefix + ":" + localName;

        var uri = EwsUtilities.GetNamespaceUri(xmlNamespace);
        if (!this.CheckRootUri(prefix, uri)) {
            this.soapData += " xmlns:" + prefix + "=\"" + uri + "\"";
        }
        this.PushUris(prefix, uri);

        this.xmlElements.push(prefix + ":" + localName);

        this.pendingXMLTagClosure = true;
        //this.xmlWriter.WriteStartElement(
        //    EwsUtilities.GetNamespacePrefix(xmlNamespace),
        //    localName,
        //    EwsUtilities.GetNamespaceUri(xmlNamespace));
    }
    /**
     * Writes string value.
     *
     * @param   {string}   value   The value.
     * @param   {string}   name    Element name (used for error handling)
     */
    WriteValue(value: string, name: string): any {
        //var closeElement = this.soapData.charAt(this.soapData.length - 1) !== ">";
        //if (closeElement) this.soapData += ">";
        this.CloseTag();
        this.soapData += value;

        //todo: validate invalid characters
        // name is used for exception with invalid characters
    }
}
