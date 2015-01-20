module Microsoft.Exchange.WebServices.Data {
    export class EwsUtilities {

        //#region constants in c# - typescript static
        static XSFalse: string = "false";
        static XSTrue: string = "true";
        static EwsTypesNamespacePrefix: string = "t";
        static EwsMessagesNamespacePrefix: string = "m";
        static EwsErrorsNamespacePrefix: string = "e";
        static EwsSoapNamespacePrefix: string = "soap";
        static EwsXmlSchemaInstanceNamespacePrefix: string = "xsi";
        static PassportSoapFaultNamespacePrefix: string = "psf";
        static WSTrustFebruary2005NamespacePrefix: string = "wst";
        static WSAddressingNamespacePrefix: string = "wsa";
        static AutodiscoverSoapNamespacePrefix: string = "a";
        static WSSecurityUtilityNamespacePrefix: string = "wsu";
        static WSSecuritySecExtNamespacePrefix: string = "wsse";
        static EwsTypesNamespace: string = "http://schemas.microsoft.com/exchange/services/2006/types";
        static EwsMessagesNamespace: string = "http://schemas.microsoft.com/exchange/services/2006/messages";
        static EwsErrorsNamespace: string = "http://schemas.microsoft.com/exchange/services/2006/errors";
        static EwsSoapNamespace: string = "http://schemas.xmlsoap.org/soap/envelope/";
        static EwsSoap12Namespace: string = "http://www.w3.org/2003/05/soap-envelope";
        static EwsXmlSchemaInstanceNamespace: string = "http://www.w3.org/2001/XMLSchema-instance";
        static PassportSoapFaultNamespace: string = "http://schemas.microsoft.com/Passport/SoapServices/SOAPFault";
        static WSTrustFebruary2005Namespace: string = "http://schemas.xmlsoap.org/ws/2005/02/trust";
        static WSAddressingNamespace: string = "http://www.w3.org/2005/08/addressing";
        static AutodiscoverSoapNamespace: string = "http://schemas.microsoft.com/exchange/2010/Autodiscover";
        static WSSecurityUtilityNamespace: string = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd";
        static WSSecuritySecExtNamespace: string = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd";

        /// <summary>
        /// Regular expression for legal domain names.
        /// </summary>
        static DomainRegex: string = "^[-a-zA-Z0-9_.]+$";
        //#endregion


        static BuildVersion: string;
        //private static serviceObjectInfo: LazyMember<T>;
        //private static buildVersion: LazyMember<T>;
        //private static enumVersionDictionaries: LazyMember<T>;
        //private static schemaToEnumDictionaries: LazyMember<T>;
        //private static enumToSchemaDictionaries: LazyMember<T>;
        //private static typeNameToShortNameMap: LazyMember<T>;
        static Assert(condition: boolean, caller: string, message: string): any {
            if (!condition)
                console.log(string.Format("[{0}] {1}", caller, message));

        }
        static BoolToXSBool(value: boolean): string { throw new Error("Not implemented."); }
        //static BuildEnumDict(enumType: System.Type): System.Collections.Generic.Dictionary<TKey, TValue>{ throw new Error("Not implemented.");}
        //static BuildEnumToSchemaDict(enumType: System.Type): System.Collections.Generic.Dictionary<TKey, TValue>{ throw new Error("Not implemented.");}
        //static BuildSchemaToEnumDict(enumType: System.Type): System.Collections.Generic.Dictionary<TKey, TValue>{ throw new Error("Not implemented.");}
        //static ConvertTime(dateTime: Date, sourceTimeZone: System.TimeZoneInfo, destinationTimeZone: System.TimeZoneInfo): Date{ throw new Error("Not implemented.");}
        //static CopyStream(source: System.IO.Stream, target: System.IO.Stream): any{ throw new Error("Not implemented.");}
        static CountMatchingChars(str: string, charPredicate: any): number { throw new Error("Not implemented."); }
        static CreateEwsObjectFromXmlElementName(service: ExchangeService, xmlElementName: string): any { throw new Error("Not implemented."); }
        //static CreateItemFromItemClass(itemAttachment: ItemAttachment, itemClass: System.Type, isNew: boolean): Item{ throw new Error("Not implemented.");}
        static CreateItemFromXmlElementName(itemAttachment: ItemAttachment, xmlElementName: string): Item { throw new Error("Not implemented."); }
        static DateTimeToXSDate(date: Date): string { throw new Error("Not implemented."); }
        static DateTimeToXSDateTime(dateTime: Date): string { throw new Error("Not implemented."); }
        static DomainFromEmailAddress(emailAddress: string): string { throw new Error("Not implemented."); }
        static EwsToSystemDayOfWeek(dayOfTheWeek: DayOfTheWeek): System.DayOfWeek { throw new Error("Not implemented."); }
        //static FindFirstItemOfType(items: System.Collections.Generic.IEnumerable<Item>): any{ throw new Error("Not implemented.");}
        //static ForEach(collection: System.Collections.Generic.IEnumerable<T>, action: any): any{ throw new Error("Not implemented.");}
        //static FormatHttpHeaders(headers: System.Net.WebHeaderCollection): string{ throw new Error("Not implemented.");}
        //static FormatHttpHeaders(sb: any, headers: System.Net.WebHeaderCollection): any{ throw new Error("Not implemented.");}
        //static FormatHttpRequestHeaders(request: IEwsHttpWebRequest): string{ throw new Error("Not implemented.");}
        //static FormatHttpRequestHeaders(request: any): string{ throw new Error("Not implemented.");}
        static FormatHttpResponseHeaders(response: IEwsHttpWebResponse): string { throw new Error("Not implemented."); }
        static FormatLogMessage(entryKind: string, logEntry: string): string { throw new Error("Not implemented."); }
        static FormatLogMessageWithXmlContent(entryKind: string, memoryStream: any): string { throw new Error("Not implemented."); }
        static GetEnumeratedObjectAt(objects: any, index: number): any { throw new Error("Not implemented."); }
        static GetEnumeratedObjectCount(objects: any): number { throw new Error("Not implemented."); }
        //static GetEnumSchemaName(enumType: System.Type, enumName: string): string{ throw new Error("Not implemented.");}
        //static GetEnumVersion(enumType: System.Type, enumName: string): ExchangeVersion{ throw new Error("Not implemented.");}
        //static GetItemTypeFromXmlElementName(xmlElementName: string): System.Type{ throw new Error("Not implemented.");}
        static GetNamespaceFromUri(namespaceUri: string): XmlNamespace {
            switch (namespaceUri) {
                case this.EwsErrorsNamespace:
                    return XmlNamespace.Errors;
                case this.EwsTypesNamespace:
                    return XmlNamespace.Types;
                case this.EwsMessagesNamespace:
                    return XmlNamespace.Messages;
                case this.EwsSoapNamespace:
                    return XmlNamespace.Soap;
                case this.EwsSoap12Namespace:
                    return XmlNamespace.Soap12;
                case this.EwsXmlSchemaInstanceNamespace:
                    return XmlNamespace.XmlSchemaInstance;
                case this.PassportSoapFaultNamespace:
                    return XmlNamespace.PassportSoapFault;
                case this.WSTrustFebruary2005Namespace:
                    return XmlNamespace.WSTrustFebruary2005;
                case this.WSAddressingNamespace:
                    return XmlNamespace.WSAddressing;
                default:
                    return XmlNamespace.NotSpecified;
            }
        }
        static GetNamespacePrefix(xmlNamespace: XmlNamespace): string {
            switch (xmlNamespace) {
                case XmlNamespace.Types:
                    return EwsUtilities.EwsTypesNamespacePrefix;
                case XmlNamespace.Messages:
                    return EwsUtilities.EwsMessagesNamespacePrefix;
                case XmlNamespace.Errors:
                    return EwsUtilities.EwsErrorsNamespacePrefix;
                case XmlNamespace.Soap:
                case XmlNamespace.Soap12:
                    return EwsUtilities.EwsSoapNamespacePrefix;
                case XmlNamespace.XmlSchemaInstance:
                    return EwsUtilities.EwsXmlSchemaInstanceNamespacePrefix;
                case XmlNamespace.PassportSoapFault:
                    return EwsUtilities.PassportSoapFaultNamespacePrefix;
                case XmlNamespace.WSTrustFebruary2005:
                    return EwsUtilities.WSTrustFebruary2005NamespacePrefix;
                case XmlNamespace.WSAddressing:
                    return EwsUtilities.WSAddressingNamespacePrefix;
                case XmlNamespace.Autodiscover:
                    return EwsUtilities.AutodiscoverSoapNamespacePrefix;
                default:
                    return "";
            }
        }
        static GetNamespaceUri(xmlNamespace: XmlNamespace): string {
            switch (xmlNamespace) {
                case XmlNamespace.Types:
                    return EwsUtilities.EwsTypesNamespace;
                case XmlNamespace.Messages:
                    return EwsUtilities.EwsMessagesNamespace;
                case XmlNamespace.Errors:
                    return EwsUtilities.EwsErrorsNamespace;
                case XmlNamespace.Soap:
                    return EwsUtilities.EwsSoapNamespace;
                case XmlNamespace.Soap12:
                    return EwsUtilities.EwsSoap12Namespace;
                case XmlNamespace.XmlSchemaInstance:
                    return EwsUtilities.EwsXmlSchemaInstanceNamespace;
                case XmlNamespace.PassportSoapFault:
                    return EwsUtilities.PassportSoapFaultNamespace;
                case XmlNamespace.WSTrustFebruary2005:
                    return EwsUtilities.WSTrustFebruary2005Namespace;
                case XmlNamespace.WSAddressing:
                    return EwsUtilities.WSAddressingNamespace;
                case XmlNamespace.Autodiscover:
                    return EwsUtilities.AutodiscoverSoapNamespace;
                default:
                    return "";
            }
        }
        //static GetPrintableTypeName(type: System.Type): string{ throw new Error("Not implemented.");}
        //static GetSimplifiedTypeName(typeName: string): string{ throw new Error("Not implemented.");}
        //static IsLocalTimeZone(timeZone: System.TimeZoneInfo): boolean{ throw new Error("Not implemented.");}
        //static Parse(value: string): any{ throw new Error("Not implemented.");}
        //static ParseAsUnbiasedDatetimescopedToServicetimeZone(dateString: string, service: ExchangeService): Date{ throw new Error("Not implemented.");}
        //static ParseEnumValueList(list: System.Collections.Generic.IList<T>, value: string, separators: any): any{ throw new Error("Not implemented.");}
        //static SerializeEnum(value: any): string{ throw new Error("Not implemented.");}
        //static SystemToEwsDayOfTheWeek(dayOfWeek: System.DayOfWeek): DayOfTheWeek{ throw new Error("Not implemented.");}
        //static TimeSpanToXSDuration(timeSpan: System.TimeSpan): string{ throw new Error("Not implemented.");}
        //static TimeSpanToXSTime(timeSpan: System.TimeSpan): string{ throw new Error("Not implemented.");}
        //static TrueForAll(collection: System.Collections.Generic.IEnumerable<T>, predicate: any): boolean{ throw new Error("Not implemented.");}
        static ValidateClassVersion(service: ExchangeService, minimumServerVersion: ExchangeVersion, className: string): any { throw new Error("Not implemented."); }
        static ValidateDomainNameAllowNull(domainName: string, paramName: string): void {

            //todo: validate domain names per ews managed api

            //if (domainName != null) {
            //    Regex regex = new Regex(DomainRegex);

            //    if (!regex.IsMatch(domainName)) {
            //        throw new ArgumentException(string.Format(Strings.InvalidDomainName, domainName), paramName);
            //    }
            //}
        }
        static ValidateEnumVersionValue(enumValue: any, requestVersion: ExchangeVersion): any { throw new Error("Not implemented."); }
        static ValidateMethodVersion(service: ExchangeService, minimumServerVersion: ExchangeVersion, methodName: string): any { throw new Error("Not implemented."); }
        static ValidateNonBlankStringParam(param: string, paramName: string): any { throw new Error("Not implemented."); }
        static ValidateNonBlankStringParamAllowNull(param: string, paramName: string): void {
            if (param != null) {
                // Non-empty string has at least one character which is *not* a whitespace character
                if (param.Length == param.CountMatchingChars((c) => Char.IsWhiteSpace(c))) {
                    throw new ArgumentException(Strings.ArgumentIsBlankString, paramName);
                }
            }
        }
        static ValidateParam(param: any, paramName: string): void { 
            var isValid = false;

            if (typeof(param) == "string") {
                isValid = !string.IsNullOrEmpty(param);
            }
            else {
                isValid = param != null && typeof(param) !== 'undefined';
            }

            if (!isValid) {
                throw new Error("parameter null exception: " +  paramName);// ArgumentNullException(paramName);
            }

            EwsUtilities.ValidateParamAllowNull(param, paramName);
        }
        static ValidateParamAllowNull(param: any, paramName: string): void {
            var selfValidate: ISelfValidate = param;

            if (selfValidate.Validate) {
                try {
                    selfValidate.Validate();
                }
                catch (e)
                {
                    throw new Error(" validation failed for parameter:" + paramName + ". Error: " + JSON.stringify( e)); 
                    //ArgumentException(
                    //    Strings.ValidationFailed,
                    //    paramName,
                    //    e);
                }
            }

            var ewsObject: ServiceObject = param;

            if (ewsObject instanceof ServiceObject) {
                if (ewsObject.IsNew) {
                    throw new Error("object does not have Id, parameter:" + paramName);// ArgumentException(Strings.ObjectDoesNotHaveId, paramName);
                }
            }
         }
        static ValidateParamCollection(collection: any, paramName: string): any { throw new Error("Not implemented."); }
        static ValidatePropertyVersion(service: ExchangeService, minimumServerVersion: ExchangeVersion, propertyName: string): void { throw new Error("Not implemented."); }
        static ValidateServiceObjectVersion(serviceObject: ServiceObject, requestVersion: ExchangeVersion): any { throw new Error("Not implemented."); }
        //static WriteTraceStartElement(writer: System.Xml.XmlWriter, traceTag: string, includeVersion: boolean): any{ throw new Error("Not implemented.");}
        //static XSDurationToTimeSpan(xsDuration: string): System.TimeSpan{ throw new Error("Not implemented.");}
    }

    //export module EwsUtilities {

    //}
}