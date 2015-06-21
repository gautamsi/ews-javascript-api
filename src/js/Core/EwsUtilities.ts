import {TimeZoneConversionException} from "../Exceptions/TimeZoneConversionException";
import {Strings} from "../Strings";
import {LazyMember} from "./LazyMember";
import {ServiceObject} from "./ServiceObjects/ServiceObject";
import {ServiceObjectInfo} from "./ServiceObjects/ServiceObjectInfo";
import {Item} from "./ServiceObjects/Items/Item";

import {ExchangeService} from "./ExchangeService";
import {TimeSpan, moment} from "../DateTime";

import {DayOfTheWeek} from "../Enumerations/DayOfTheWeek";
import {XmlNamespace} from "../Enumerations/XmlNamespace";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {EwsLogging} from "./EwsLogging";
import {EnumToExchangeVersionMappingHelper} from "../Enumerations/EnumToExchangeVersionMappingHelper";
import {WellKnownFolderName} from "../Enumerations/WellKnownFolderName";
import {ItemTraversal} from "../Enumerations/ItemTraversal";
import {ConversationQueryTraversal} from "../Enumerations/ConversationQueryTraversal";
import {FileAsMapping} from "../Enumerations/FileAsMapping";

import {ServiceVersionException} from "../Exceptions/ServiceVersionException";
import {ISelfValidate} from "../Interfaces/ISelfValidate";

import {ItemAttachment} from "../ComplexProperties/ItemAttachment";

import {StringHelper, Convert} from "../ExtensionMethods";
import {DateTime, TimeZoneInfo, DateTimeKind} from "../DateTime";
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
    // private static serviceObjectInfo: LazyMember<ServiceObjectInfo> = new LazyMember<ServiceObjectInfo>(
    //     () => {
    //         //return new ServiceObjectInfo();
    //     });
    //private static buildVersion: LazyMember<T>;
    private static enumVersionDictionaries: LazyMember<EnumToExhcangeVersionDelegateDictionary> = new LazyMember<EnumToExhcangeVersionDelegateDictionary>(
        () => {
            var e2evmh = EnumToExchangeVersionMappingHelper;
            var dict: EnumToExhcangeVersionDelegateDictionary = {};
            dict[e2evmh[e2evmh.WellKnownFolderName]] = EwsUtilities.BuildEnumDict(e2evmh.WellKnownFolderName);
            dict[e2evmh[e2evmh.ItemTraversal]] = EwsUtilities.BuildEnumDict(e2evmh.ItemTraversal);
            dict[e2evmh[e2evmh.ConversationQueryTraversal]] = EwsUtilities.BuildEnumDict(e2evmh.ConversationQueryTraversal);
            dict[e2evmh[e2evmh.FileAsMapping]] = EwsUtilities.BuildEnumDict(e2evmh.FileAsMapping);
            dict[e2evmh[e2evmh.EventType]] = EwsUtilities.BuildEnumDict(e2evmh.EventType);
            dict[e2evmh[e2evmh.MeetingRequestsDeliveryScope]] = EwsUtilities.BuildEnumDict(e2evmh.MeetingRequestsDeliveryScope);
            dict[e2evmh[e2evmh.ViewFilter]] = EwsUtilities.BuildEnumDict(e2evmh.ViewFilter);
            return dict;
        });
    //private static schemaToEnumDictionaries: LazyMember<T>;
    //private static enumToSchemaDictionaries: LazyMember<T>;
    //private static typeNameToShortNameMap: LazyMember<T>;
    
    static BoolToXSBool(value: boolean): string {
        var boolvalue = Convert.toBool(value)
        return boolvalue ? EwsUtilities.XSTrue : EwsUtilities.XSFalse;
        //throw new Error("EwsUtilities.ts - static BoolToXSBool : Not implemented.");
    }
    //static BuildEnumDict(enumType: System.Type): System.Collections.Generic.Dictionary<TKey, TValue>{ throw new Error("EwsUtilities.ts - static BuildEnumDict : Not implemented.");}
    //deviation - need to work with static data for enum to exchange version dict, there is no Attribute type system in javascript.
    static BuildEnumDict(enumType: EnumToExchangeVersionMappingHelper): EnumVersionDelegate {
        var enumDelegate = (value: any) => { return ExchangeVersion.Exchange2007_SP1 };
        switch (enumType) {
            //TODO: fix numbering to named enum value if possible
            case EnumToExchangeVersionMappingHelper.WellKnownFolderName:
                enumDelegate = (value) => {
                    var enumVersion = ExchangeVersion.Exchange2007_SP1;
                    if (value <= 15) //<= WellKnownFolderName.VoiceMail
                        enumVersion = ExchangeVersion.Exchange2007_SP1;
                    else if (value >= 16 && value <= 26) //>= RecoverableItemsRoot && <= ArchiveRecoverableItemsPurges
                        enumVersion = ExchangeVersion.Exchange2010_SP1;
                    else if (value >= 27 && value <= 34) //>= SyncIssues && <= ToDoSearch
                        enumVersion = ExchangeVersion.Exchange2013;
                    else
                        enumVersion = ExchangeVersion.Exchange_Version_Not_Updated;

                    return enumVersion;
                };
                break;
            case EnumToExchangeVersionMappingHelper.ItemTraversal:
                enumDelegate = (value) => {
                    if (value <= 1) //<= ItemTraversal.SoftDeleted
                        return ExchangeVersion.Exchange2007_SP1;
                    else if (value == 2) // === Associated
                        return ExchangeVersion.Exchange2010;

                    return ExchangeVersion.Exchange_Version_Not_Updated;
                };
                break;
            case EnumToExchangeVersionMappingHelper.ConversationQueryTraversal:
                enumDelegate = (value) => {
                    if (value <= 1) //<= ConversationQueryTraversal.Deep
                        return ExchangeVersion.Exchange2013;
                    return ExchangeVersion.Exchange_Version_Not_Updated;
                };
                break;
            case EnumToExchangeVersionMappingHelper.FileAsMapping:
                enumDelegate = (value) => {
                    if (value <= 12) //<= FileAsMapping.SurnameSpaceGivenName
                        return ExchangeVersion.Exchange2007_SP1;
                    else if (value >= 13 && value <= 17) // >= DisplayName && <=Empty
                        return ExchangeVersion.Exchange2010;

                    return ExchangeVersion.Exchange_Version_Not_Updated;
                };
                break;
            case EnumToExchangeVersionMappingHelper.EventType:
                enumDelegate = (value) => {
                    if (value <= 6) //<= EventType.Created
                        return ExchangeVersion.Exchange2007_SP1;
                    else if (value == 7) // == FreeBusyChanged
                        return ExchangeVersion.Exchange2010_SP1;

                    return ExchangeVersion.Exchange_Version_Not_Updated;
                };
                break;
            case EnumToExchangeVersionMappingHelper.MeetingRequestsDeliveryScope:
                enumDelegate = (value) => {
                    if (value <= 2) //<= MeetingRequestsDeliveryScope.DelegatesAndSendInformationToMe
                        return ExchangeVersion.Exchange2007_SP1;
                    else if (value == 3) // == NoForward
                        return ExchangeVersion.Exchange2010_SP1;

                    return ExchangeVersion.Exchange_Version_Not_Updated;
                };
                break;
            case EnumToExchangeVersionMappingHelper.ViewFilter:
                enumDelegate = (value) => {
                    if (value <= 10) //<=ViewFilter.SuggestionsDelete
                        return ExchangeVersion.Exchange2013;

                    return ExchangeVersion.Exchange_Version_Not_Updated;
                };
                break;
            default:
                throw new Error("no mapping available for this enumtype" + EnumToExchangeVersionMappingHelper[enumType]);
        }

        return enumDelegate;
    }
    private static GetExchangeVersionFromEnumDelegate(enumType: EnumToExchangeVersionMappingHelper, enumValue: number): ExchangeVersion {
        var delegate = this.enumVersionDictionaries.Member[EnumToExchangeVersionMappingHelper[enumType]];
        if (delegate && typeof delegate === 'function') {
            try {
                return delegate(enumValue);
            }
            catch (ex) { }
        }

        return ExchangeVersion.Exchange2007_SP1;
    }
    //static BuildEnumToSchemaDict(enumType: System.Type): System.Collections.Generic.Dictionary<TKey, TValue>{ throw new Error("EwsUtilities.ts - static BuildEnumToSchemaDict : Not implemented.");}
    //static BuildSchemaToEnumDict(enumType: System.Type): System.Collections.Generic.Dictionary<TKey, TValue>{ throw new Error("EwsUtilities.ts - static BuildSchemaToEnumDict : Not implemented.");}
    static ConvertTime(dateTime: DateTime, sourceTimeZone: TimeZoneInfo, destinationTimeZone: TimeZoneInfo): DateTime {
        try {
            return TimeZoneInfo.ConvertTime(
                dateTime,
                sourceTimeZone,
                destinationTimeZone);
        }
        catch (ex)//ArgumentException
        {
            throw new TimeZoneConversionException(
                StringHelper.Format(
                    Strings.CannotConvertBetweenTimeZones,
                    EwsUtilities.DateTimeToXSDateTime(dateTime),
                    sourceTimeZone.DisplayName,
                    destinationTimeZone.DisplayName),
                ex);
        }
    }
    //static CopyStream(source: System.IO.Stream, target: System.IO.Stream): any{ throw new Error("EwsUtilities.ts - static CopyStream : Not implemented.");}
    static CountMatchingChars(str: string, charPredicate: any): number { throw new Error("EwsUtilities.ts - static CountMatchingChars : Not implemented."); }
    static CreateEwsObjectFromXmlElementName<TServiceObject extends ServiceObject>(service: ExchangeService, xmlElementName: string): TServiceObject {
        throw new Error("EwsUtilities - CreateEwsObjectFromXmlElementName: - this is moved in folderinfo/iteminfo classes to avoid circular loop caused by serviceobjectinfo class");
        //     //var itemClass = TypeSystem.GetObjectByClassName("Microsoft.Exchange.WebServices.Data." + xmlElementName
        //     debugger;

        //     //        var creationDelegate = EwsUtilities.serviceObjectInfo.Member.ServiceObjectConstructorsWithServiceParam[xmlElementName];
        //     //
        //     //        if (creationDelegate) {
        //     //            return creationDelegate(service);
        //     //        }
        //     //        else return null;

        //     //var itemClass = EwsUtilities.serviceObjectInfo.Member.XmlElementNameToServiceObjectClassMap[xmlElementName];
        //     //if (itemClass) {
        //     //    //return new itemClass(service);

        //     //    creationDelegate: CreateServiceObjectWithServiceParam;


        //     //    //if (EwsUtilities.serviceObjectInfo.Member.ServiceObjectConstructorsWithServiceParam.TryGetValue(itemClass, out creationDelegate)) {
        //     //    //    return (TServiceObject)creationDelegate(service);
        //     //    //}
        //     //    //else {
        //     //    //    throw new ArgumentException(Strings.NoAppropriateConstructorForItemClass);
        //     //    //}
        //     //}
        //     //else {
        //     //    return null; //default(TServiceObject);
        //     //}
    }
    //static CreateItemFromItemClass(itemAttachment: ItemAttachment, itemClass: System.Type, isNew: boolean): Item{ throw new Error("EwsUtilities.ts - static CreateItemFromItemClass : Not implemented.");}
    static CreateItemFromXmlElementName(itemAttachment: ItemAttachment, xmlElementName: string): Item { throw new Error("EwsUtilities.ts - static CreateItemFromXmlElementName : Not implemented."); }
    static DateTimeToXSDate(date: DateTime): string { return DateTime.DateTimeToXSDate(date); }
    static DateTimeToXSDateTime(dateTime: DateTime): string { return DateTime.DateTimeToXSDateTime(dateTime); }
    static DomainFromEmailAddress(emailAddress: string): string {
        var emailAddressParts: string[] = emailAddress.split('@');

        if (emailAddressParts.length != 2 || StringHelper.IsNullOrEmpty(emailAddressParts[1])) {
            throw new Error(Strings.InvalidEmailAddress);
        }

        return emailAddressParts[1];
    }
    static EwsToSystemDayOfWeek(dayOfTheWeek: DayOfTheWeek): any/*System.DayOfWeek*/ /*todo: fix system enums here*/ { throw new Error("EwsUtilities.ts - static EwsToSystemDayOfWeek : Not implemented."); }
    static FindFirstItemOfType<T extends Item>(items: Item[], type: any): T {
        for (var item of items) {
            if (item instanceof type) {
                return <T>item;
            }
        }
    }
    //static ForEach(collection: System.Collections.Generic.IEnumerable<T>, action: any): any{ throw new Error("EwsUtilities.ts - static ForEach : Not implemented.");}
    //static FormatHttpHeaders(headers: System.Net.WebHeaderCollection): string{ throw new Error("EwsUtilities.ts - static FormatHttpHeaders : Not implemented.");}
    //static FormatHttpHeaders(sb: any, headers: System.Net.WebHeaderCollection): any{ throw new Error("EwsUtilities.ts - static FormatHttpHeaders : Not implemented.");}
    //static FormatHttpRequestHeaders(request: IEwsHttpWebRequest): string{ throw new Error("EwsUtilities.ts - static FormatHttpRequestHeaders : Not implemented.");}
    //static FormatHttpRequestHeaders(request: any): string{ throw new Error("EwsUtilities.ts - static FormatHttpRequestHeaders : Not implemented.");}
    static FormatHttpResponseHeaders(response: any /*IEwsHttpWebResponse*/): string { throw new Error("EwsUtilities.ts - static FormatHttpResponseHeaders : Not implemented."); }
    static FormatLogMessage(entryKind: string, logEntry: string): string { throw new Error("EwsUtilities.ts - static FormatLogMessage : Not implemented."); }
    static FormatLogMessageWithXmlContent(entryKind: string, memoryStream: any): string { throw new Error("EwsUtilities.ts - static FormatLogMessageWithXmlContent : Not implemented."); }
    static GetEnumeratedObjectAt(objects: any, index: number): any { throw new Error("EwsUtilities.ts - static GetEnumeratedObjectAt : Not implemented."); }
    static GetEnumeratedObjectCount(objects: any): number { throw new Error("EwsUtilities.ts - static GetEnumeratedObjectCount : Not implemented."); }
    //static GetEnumSchemaName(enumType: System.Type, enumName: string): string{ throw new Error("EwsUtilities.ts - static GetEnumSchemaName : Not implemented.");}
    //static GetEnumVersion(enumType: System.Type, enumName: string): ExchangeVersion{ throw new Error("EwsUtilities.ts - static GetEnumVersion : Not implemented.");}
    //static GetItemTypeFromXmlElementName(xmlElementName: string): System.Type{ throw new Error("EwsUtilities.ts - static GetItemTypeFromXmlElementName : Not implemented.");}
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
    static GetPrintableTypeName(type: any /*instance */): string {
        var typename: string = typeof type;
        if (typename.indexOf("object") >= 0) {
            try {
                typename = type.__proto__.constructor.name;

            } catch (error) {
                typename += " - Error getting name";
            }
        }

        return typename;
        //         if (type.IsGenericType)
        //             {
        //                 // Convert generic type to printable form (e.g. List<Item>)
        //                 string genericPrefix = type.Name.Substring(0, type.Name.IndexOf('`'));
        //                 StringBuilder nameBuilder = new StringBuilder(genericPrefix);
        // 
        //                 // Note: building array of generic parameters is done recursively. Each parameter could be any type.
        //                 string[] genericArgs = type.GetGenericArguments().ToList<Type>().ConvertAll<string>(t => GetPrintableTypeName(t)).ToArray<string>();
        // 
        //                 nameBuilder.Append("<");
        //                 nameBuilder.Append(string.Join(",", genericArgs));
        //                 nameBuilder.Append(">");
        //                 return nameBuilder.ToString();
        //             }
        //             else if (type.IsArray)
        //             {
        //                 // Convert array type to printable form.
        //                 string arrayPrefix = type.Name.Substring(0, type.Name.IndexOf('['));
        //                 StringBuilder nameBuilder = new StringBuilder(EwsUtilities.GetSimplifiedTypeName(arrayPrefix));
        //                 for (int rank = 0; rank < type.GetArrayRank(); rank++)
        //                 {
        //                     nameBuilder.Append("[]");
        //                 }
        //                 return nameBuilder.ToString();
        //             }
        //             else
        //             {
        //                 return EwsUtilities.GetSimplifiedTypeName(type.Name);
        //             }
    }
    //static GetSimplifiedTypeName(typeName: string): string{ throw new Error("EwsUtilities.ts - static GetSimplifiedTypeName : Not implemented.");}
    static IsLocalTimeZone(timeZone: TimeZoneInfo): boolean { return TimeZoneInfo.IsLocalTimeZone(timeZone); }
    //static Parse(value: string): any{ throw new Error("EwsUtilities.ts - static Parse : Not implemented.");}
    static ParseAsUnbiasedDatetimescopedToServicetimeZone(dateString: string, service: ExchangeService): DateTime {
        // Convert the element's value to a DateTime with no adjustment.
        var tempDate: DateTime = DateTime.Parse(dateString);

        // Set the kind according to the service's time zone
        if (service.TimeZone == TimeZoneInfo.Utc) {
            return new DateTime(tempDate.TotalMilliSeconds, DateTimeKind.Utc);
        }
        else if (EwsUtilities.IsLocalTimeZone(service.TimeZone)) {
            return new DateTime(tempDate.TotalMilliSeconds, DateTimeKind.Local);
        }
        else {
            return new DateTime(tempDate.TotalMilliSeconds, DateTimeKind.Unspecified);
        }
    }
    static ParseEnumValueList<T>(list: any[], value: string, separators: string, enumType: any): void {
        // EwsLogging.Assert(
        //         typeof(T).IsEnum,
        //         "EwsUtilities.ParseEnumValueList",
        //         "T is not an enum type.");

        var enumValues: string[] = value.split(separators);

        for (var enumValue of enumValues) {
            var enumValueParsed = enumType[enumValue];
            if (typeof enumValueParsed !== 'undefined')
                list.push(enumValueParsed);
        }
    }
    //static SerializeEnum(value: any): string{ throw new Error("EwsUtilities.ts - static SerializeEnum : Not implemented.");}
    //static SystemToEwsDayOfTheWeek(dayOfWeek: System.DayOfWeek): DayOfTheWeek{ throw new Error("EwsUtilities.ts - static SystemToEwsDayOfTheWeek : Not implemented.");}
    static TimeSpanToXSDuration(timeSpan: TimeSpan): string {
        // Optional '-' offset
        var offsetStr: string = (timeSpan.TotalSeconds < 0) ? "-" : StringHelper.Empty;

        // The TimeSpan structure does not have a Year or Month 
        // property, therefore we wouldn't be able to return an xs:duration
        // string from a TimeSpan that included the nY or nM components.
        return StringHelper.Format(
            "{0}P{1}DT{2}H{3}M{4}S",
            offsetStr,
            Math.abs(timeSpan.days()),
            Math.abs(timeSpan.hours()),
            Math.abs(timeSpan.minutes()),
            Math.abs(timeSpan.seconds()) + "." + Math.abs(timeSpan.milliseconds()));
    }
    private static numPad(num: number, length: number) {
        var str = num.toString();
        while (str.length < length)
            str += "0";
        return str;
    }
    static TimeSpanToXSTime(timeSpan: TimeSpan): string {
        return StringHelper.Format(
            "{0}:{1}:{2}",
            this.numPad(timeSpan.hours(), 2),
            this.numPad(timeSpan.minutes(), 2),
            this.numPad(timeSpan.seconds(), 2));
    }
    static XSDurationToTimeSpan(xsDuration: string): TimeSpan {
        var regex: RegExp = /(-)?P([0-9]+)Y?([0-9]+)M?([0-9]+)D?T([0-9]+)H?([0-9]+)M?([0-9]+\.[0-9]+)?S?/;
        if (xsDuration.match(regex) === null) {
            throw new Error(Strings.XsDurationCouldNotBeParsed);//ArgumentException
        }
        return new TimeSpan(xsDuration);//using moment, it recognize the format.
        
    }
    //static TrueForAll(collection: System.Collections.Generic.IEnumerable<T>, predicate: any): boolean{ throw new Error("EwsUtilities.ts - static TrueForAll : Not implemented.");}
    static ValidateClassVersion(service: ExchangeService, minimumServerVersion: ExchangeVersion, className: string): any { throw new Error("EwsUtilities.ts - static ValidateClassVersion : Not implemented."); }
    static ValidateDomainNameAllowNull(domainName: string, paramName: string): void {

        //todo: validate domain names per ews managed api

        //if (domainName != null) {
        //    Regex regex = new Regex(DomainRegex);

        //    if (!regex.IsMatch(domainName)) {
        //        throw new ArgumentException(string.Format(Strings.InvalidDomainName, domainName), paramName);
        //    }
        //}
    }
    static ValidateEnumVersionValue(enumType: EnumToExchangeVersionMappingHelper, enumValue: number, requestVersion: ExchangeVersion): void {
        var enumVersion = this.GetExchangeVersionFromEnumDelegate(enumType, enumValue);
        if (requestVersion < enumVersion) {
            throw new ServiceVersionException(
                StringHelper.Format(
                    Strings.EnumValueIncompatibleWithRequestVersion,
                    enumValue,
                    //WellKnownFolderName[folderEnum],
                    EnumToExchangeVersionMappingHelper[enumType],
                    ExchangeVersion[enumVersion]));
        }
        //////EwsUtilities.ValidateEnumVersionValue(this.FolderName, version); - alternate validation using next line
        //////todo: move to ewsutilities - done
        ////export class ExchangeVersionValidator {
        ////    static ValidateWellKnownFolderName(folderEnum: WellKnownFolderName, requestedVersion: ExchangeVersion): void {
        ////        var enumVersion = ExchangeVersion.Exchange2007_SP1;
        ////        if (folderEnum <= 15) enumVersion = ExchangeVersion.Exchange2007_SP1;
        ////        else if (folderEnum >= 16 && folderEnum <= 26) enumVersion = ExchangeVersion.Exchange2010_SP1;
        ////        else if (folderEnum >= 27 && folderEnum <= 34) enumVersion = ExchangeVersion.Exchange2013;
        ////        else enumVersion = ExchangeVersion.Exchange2013;

        ////        if (requestedVersion < enumVersion) {
        ////            throw new ServiceVersionException(
        ////                string.Format(
        ////                    Strings.EnumValueIncompatibleWithRequestVersion,
        ////                    WellKnownFolderName[folderEnum],
        ////                    "WellKnownFolderName",
        ////                    ExchangeVersion[enumVersion]));
        ////        }
        ////    }
        ////}
    }
    static ValidateMethodVersion(service: ExchangeService, minimumServerVersion: ExchangeVersion, methodName: string): void {
        if (service.RequestedServerVersion < minimumServerVersion) {
            throw new ServiceVersionException(
                StringHelper.Format(
                    Strings.MethodIncompatibleWithRequestVersion,
                    methodName,
                    minimumServerVersion));
        }
    }
    static ValidateNonBlankStringParam(param: string, paramName: string): any { throw new Error("EwsUtilities.ts - static ValidateNonBlankStringParam : Not implemented."); }
    static ValidateNonBlankStringParamAllowNull(param: string, paramName: string): void {
        if (param != null) {
            debugger; //todo: implement this somehow
            // Non-empty string has at least one character which is *not* a whitespace character
            //if (param.length == param.CountMatchingChars((c) => Char.IsWhiteSpace(c))) {
            //    throw new ArgumentException(Strings.ArgumentIsBlankString, paramName);
            //}
        }
    }
    static ValidateParam(param: any, paramName: string): void {
        var isValid = false;

        if (typeof (param) == "string") {
            isValid = !StringHelper.IsNullOrEmpty(param);
        }
        else {
            isValid = param != null && typeof (param) !== 'undefined';
        }

        if (!isValid) {
            throw new Error("parameter null exception: " + paramName);// ArgumentNullException(paramName);
        }

        EwsUtilities.ValidateParamAllowNull(param, paramName);
    }
    static ValidateParamAllowNull(param: any, paramName: string): void {
        return;
        throw new Error("//todo: fix circular with service object")
        var selfValidate: ISelfValidate = param;

        if (selfValidate.Validate) {
            try {
                selfValidate.Validate();
            }
            catch (e) {
                throw new Error(" validation failed for parameter:" + paramName + ". Error: " + JSON.stringify(e));
                //ArgumentException(
                //    Strings.ValidationFailed,
                //    paramName,
                //    e);
            }
        }

        var ewsObject: ServiceObject = param;

        //        if (ewsObject instanceof ServiceObject) {
        //            if (ewsObject.IsNew) {
        //                throw new Error("object does not have Id, parameter:" + paramName);// ArgumentException(Strings.ObjectDoesNotHaveId, paramName);
        //            }
        //        }
    }
    static ValidateParamCollection(collection: any, paramName: string): void { return; throw new Error("EwsUtilities.ts - static ValidateParamCollection : Not implemented."); }
    static ValidatePropertyVersion(service: ExchangeService, minimumServerVersion: ExchangeVersion, propertyName: string): void { throw new Error("EwsUtilities.ts - static ValidatePropertyVersion : Not implemented."); }
    static ValidateServiceObjectVersion(serviceObject: ServiceObject, requestVersion: ExchangeVersion): any { throw new Error("EwsUtilities.ts - static ValidateServiceObjectVersion : Not implemented."); }
    //static WriteTraceStartElement(writer: System.Xml.XmlWriter, traceTag: string, includeVersion: boolean): any{ throw new Error("EwsUtilities.ts - static WriteTraceStartElement : Not implemented.");}
}


export interface EnumToExhcangeVersionDelegateDictionary {
    [index: string]: EnumVersionDelegate;
}

export interface EnumVersionDelegate {
    (value: number): ExchangeVersion;
}


