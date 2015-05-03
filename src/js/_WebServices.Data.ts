 module Microsoft.Exchange.WebServices.Data {
    class AsyncRequestResult {
        ServiceRequest: ServiceRequestBase;
        WebRequest: IEwsHttpWebRequest;
        WebAsyncResult: /*System.IAsyncResult*/any;
        AsyncState: any;
        AsyncWaitHandle: /*System.Threading.WaitHandle*/any;
        CompletedSynchronously: boolean;
        IsCompleted: boolean;
        ExtractServiceRequest(exchangeService: ExchangeService, asyncResult: /*System.IAsyncResult*/any): any { throw new Error("Not implemented.");}
    }
    class AttachableAttribute /*extends System.Attribute*/ {
    }
    class CalendarActionResults {
        Appointment: Appointment;
        MeetingRequest: MeetingRequest;
        MeetingResponse: MeetingResponse;
        MeetingCancellation: MeetingCancellation;
        private appointment: Appointment;
        private meetingRequest: MeetingRequest;
        private meetingResponse: MeetingResponse;
        private meetingCancellation: MeetingCancellation;
    }
    class CalendarView extends ViewBase {
        StartDate: Date;
        EndDate: Date;
        MaxItemsReturned: number;
        Traversal: ItemTraversal;
        private traversal: ItemTraversal;
        private maxItemsReturned: number;
        private startDate: Date;
        private endDate: Date;
        AddJsonProperties(jsonRequest: JsonObject, service: ExchangeService): any { throw new Error("Not implemented.");}
        GetMaxEntriesReturned(): number { throw new Error("Not implemented.");}
        GetServiceObjectType(): ServiceObjectType { throw new Error("Not implemented.");}
        GetViewJsonTypeName(): string { throw new Error("Not implemented.");}
        GetViewXmlElementName(): string { throw new Error("Not implemented.");}
        InternalValidate(request: ServiceRequestBase): any { throw new Error("Not implemented.");}
        InternalWritePagingToJson(jsonView: JsonObject, service: ExchangeService): any { throw new Error("Not implemented.");}
        InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any { throw new Error("Not implemented.");}
        InternalWriteViewToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented.");}
        WriteGroupingToJson(service: ExchangeService, groupBy: Grouping): any { throw new Error("Not implemented.");}
        WriteOrderByToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented.");}
    }
    class ConversationIndexedItemView extends PagedView {
        OrderBy: OrderByCollection;
        Traversal: ConversationQueryTraversal;
        ViewFilter: ViewFilter;
        private orderBy: OrderByCollection;
        private traversal: ConversationQueryTraversal;
        private viewFilter: ViewFilter;
        AddJsonProperties(jsonRequest: JsonObject, service: ExchangeService): any { throw new Error("Not implemented.");}
        GetServiceObjectType(): ServiceObjectType { throw new Error("Not implemented.");}
        GetViewJsonTypeName(): string { throw new Error("Not implemented.");}
        GetViewXmlElementName(): string { throw new Error("Not implemented.");}
        InternalValidate(request: ServiceRequestBase): any { throw new Error("Not implemented.");}
        InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any { throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented.");}
        WriteOrderByToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented.");}
        WriteToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any { throw new Error("Not implemented.");}
    }
    class DelegateInformation {
        DelegateUserResponses: /*System.Collections.ObjectModel.Collection<DelegateUserResponse>*/any;
        MeetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
        private delegateUserResponses: /*System.Collections.ObjectModel.Collection<DelegateUserResponse>*/any;
        private meetingReqestsDeliveryScope: MeetingRequestsDeliveryScope;
    }
    class DiscoverySchemaChanges {
        static SearchMailboxesExtendedData: DiscoverySchemaChanges.SchemaChange;
        static SearchMailboxesAdditionalSearchScopes: DiscoverySchemaChanges.SchemaChange;
    }
    class EwsEnumAttribute /*extends System.Attribute*/ {
        SchemaName: string;
        private schemaName: string;
    }
    class EwsHttpWebRequest {
        private /*IEwsHttpWebRequest.*/Accept: string;
        private /*IEwsHttpWebRequest.*/AllowAutoRedirect: boolean;
        private /*IEwsHttpWebRequest.*/ClientCertificates: /*System.Security.Cryptography.X509Certificates.X509CertificateCollection*/any;
        private /*IEwsHttpWebRequest.*/ContentType: string;
        private /*IEwsHttpWebRequest.*/CookieContainer: /*System.Net.CookieContainer*/any;
        private /*IEwsHttpWebRequest.*/Credentials: /*System.Net.ICredentials*/any;
        private /*IEwsHttpWebRequest.*/Headers: /*System.Net.WebHeaderCollection*/any;
        private /*IEwsHttpWebRequest.*/Method: string;
        private /*IEwsHttpWebRequest.*/Proxy: /*System.Net.IWebProxy*/any;
        private /*IEwsHttpWebRequest.*/PreAuthenticate: boolean;
        private /*IEwsHttpWebRequest.*/RequestUri: /*System.Uri*/string;
        private /*IEwsHttpWebRequest.*/Timeout: number;
        private /*IEwsHttpWebRequest.*/UseDefaultCredentials: boolean;
        private /*IEwsHttpWebRequest.*/UserAgent: string;
        KeepAlive: boolean;
        ConnectionGroupName: string;
        private request: any;
    }
    class EwsHttpWebRequestFactory {
    }
    class EwsHttpWebResponse {
        private /*IEwsHttpWebResponse.*/ContentEncoding: string;
        private /*IEwsHttpWebResponse.*/ContentType: string;
        private /*IEwsHttpWebResponse.*/Headers: /*System.Net.WebHeaderCollection*/any;
        private /*IEwsHttpWebResponse.*/ResponseUri: /*System.Uri*/string;
        private /*IEwsHttpWebResponse.*/StatusCode: System.Net.HttpStatusCode;
        private /*IEwsHttpWebResponse.*/StatusDescription: string;
        private /*IEwsHttpWebResponse.*/ProtocolVersion: /*System.Version*/any;
        private response: any;
    }
    class EwsServiceJsonReader {
        Service: ExchangeService;
        ReadServiceObjectsCollectionFromJson(jsonResponse: JsonObject, collectionJsonElementName: string, getObjectInstanceDelegate: /*GetObjectInstanceDelegate<T>*/any, clearPropertyBag: boolean, requestedPropertySet: PropertySet, summaryPropertiesOnly: boolean): /*System.Collections.Generic.List<T>*/any { throw new Error("Not implemented.");}
    }
    class EwsServiceMultiResponseXmlReader extends EwsServiceXmlReader {
        Create(stream: /*System.IO.Stream*/any, service: ExchangeService): EwsServiceMultiResponseXmlReader { throw new Error("Not implemented.");}
        CreateXmlReader(stream: /*System.IO.Stream*/any): any { throw new Error("Not implemented.");}
        InitializeXmlReader(stream: /*System.IO.Stream*/any): any { throw new Error("Not implemented.");}
    }
    class EwsTraceListener {
        private writer: /*System.IO.TextWriter*/any;
        Trace(traceType: string, traceMessage: string): any { throw new Error("Not implemented.");}
    }
    class iiiiiiExchangeCredentials {
        NeedSignature: boolean;
        AdjustUrl(url: /*System.Uri*/string): /*System.Uri*/string { throw new Error("Not implemented.");}
        EmitExtraSoapHeaderNamespaceAliases(writer: System.Xml.XmlWriter): any { throw new Error("Not implemented.");}
        GetUriWithoutSuffix(url: /*System.Uri*/string): string { throw new Error("Not implemented.");}
        PreAuthenticate(): any { throw new Error("Not implemented.");}
        PrepareWebRequest(request: IEwsHttpWebRequest): any { throw new Error("Not implemented.");}
        SerializeExtraSoapHeaders(writer: System.Xml.XmlWriter, webMethodName: string): any { throw new Error("Not implemented.");}
        SerializeWSSecurityHeaders(writer: System.Xml.XmlWriter): any { throw new Error("Not implemented.");}
        Sign(memoryStream: any): any { throw new Error("Not implemented.");}
    }
    class ExchangeResourceManager /*extends System.Resources.ResourceManager*/ {
        BaseName: string;
        AssemblyName: string;
        private static resourceManagers: any;
        private static lockObject: any;
        GetResourceManager(baseName: string, assembly: /*System.Reflection.Assembly*/any): ExchangeResourceManager { throw new Error("Not implemented.");}
        //GetString(name: string): string { throw new Error("Not implemented.");}
        GetString(name: string, culture: /*System.Globalization.CultureInfo*/any): string { throw new Error("Not implemented.");}
    }
    class ExpandGroupResults {
        Count: number;
        IncludesAllMembers: boolean;
        Members: /*System.Collections.ObjectModel.Collection<EmailAddress>*/any;
        private includesAllMembers: boolean;
        private members: /*System.Collections.ObjectModel.Collection<EmailAddress>*/any;
        GetEnumerator(): any { throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented.");}
    }
    class ExtendedAttribute {
        Name: string;
        Value: string;
    }
    class ExtendedAttributes /*extends System.Collections.Generic.List<ExtendedAttribute>*/ {
    }
    class FindConversationResults {
        Conversations: /*System.Collections.ObjectModel.Collection<Conversation>*/any;
        HighlightTerms: /*System.Collections.ObjectModel.Collection<HighlightTerm>*/any;
        TotalCount: number;
        IndexedOffset: number;
    }


    class GetNonIndexableItemDetailsParameters extends NonIndexableItemParameters {
        PageSize: number;
        PageItemReference: string;
        PageDirection: SearchPageDirection;
    }
    class GetNonIndexableItemStatisticsParameters extends NonIndexableItemParameters {
    }

    class HangingTraceStream /*extends System.IO.Stream*/ {
        CanRead: boolean;
        CanSeek: boolean;
        CanWrite: boolean;
        Length: number;
        Position: number;
        private underlyingStream: /*System.IO.Stream*/any;
        private service: ExchangeService;
        private responseCopy: any;
        Flush(): any { throw new Error("Not implemented.");}
        Read(buffer: /*System.Byte[]*/any[], offset: number, count: number): number { throw new Error("Not implemented.");}
        Seek(offset: number, origin: /*System.IO.SeekOrigin*/any): number { throw new Error("Not implemented.");}
        SetLength(value: number): any { throw new Error("Not implemented.");}
        SetResponseCopy(responseCopy: any): any { throw new Error("Not implemented.");}
        Write(buffer: /*System.Byte[]*/any[], offset: number, count: number): any { throw new Error("Not implemented.");}
    }
    interface ICalendarActionProvider {
        Accept(sendResponse: boolean): CalendarActionResults;
        AcceptTentatively(sendResponse: boolean): CalendarActionResults;
        CreateAcceptMessage(tentative: boolean): AcceptMeetingInvitationMessage;
        CreateDeclineMessage(): DeclineMeetingInvitationMessage;
        Decline(sendResponse: boolean): CalendarActionResults;
    }
    interface IDiscoveryVersionable {
        ServerVersion: number;
    }
    interface IFileAttachmentContentHandler {
        GetOutputStream(attachmentId: string): /*System.IO.Stream*/any;
    }
    interface IJsonCollectionDeserializer {
        CreateFromJsonCollection(jsonCollection: any, service: ExchangeService): any;
        UpdateFromJsonCollection(jsonCollection: any, service: ExchangeService): any;
    }
    interface IJsonSerializable {
        ToJson(service: ExchangeService): any;
    }
    interface ILocalizedString {
        LocalizedString: LocalizedString;
    }
    interface ISearchStringProvider {
        GetSearchString(): string;
    }

    interface ITraceListener {
        Trace(traceType: string, traceMessage: string): any;
    }
    class JsonNames {
    }
    class JsonObject /*extends System.Collections.Generic.Dictionary<string, any>*/ {
        Add(name: string, value: number): any { throw new Error("Not implemented.");}
        //Add(name: string, value: JsonObject): any { throw new Error("Not implemented.");}
        //Add(name: string, value: string): any { throw new Error("Not implemented.");}
        //Add(name: string, value: any): any { throw new Error("Not implemented.");}
        //Add(name: string, value: boolean): any { throw new Error("Not implemented.");}
        //Add(name: string, value: number): any { throw new Error("Not implemented.");}
        //Add(name: string, value: number): any { throw new Error("Not implemented.");}
        //Add(name: string, value: number): any { throw new Error("Not implemented.");}
        //Add(name: string, value: any): any { throw new Error("Not implemented.");}
        //Add(name: string, value: System.Collections.Generic.IEnumerable<any>): any { throw new Error("Not implemented.");}
        //AddBase64(key: string, buffer: /*System.Byte[]*/any[]): any { throw new Error("Not implemented.");}
        //AddBase64(key: string, stream: /*System.IO.Stream*/any): any { throw new Error("Not implemented.");}
        AddBase64(key: string, buffer: /*System.Byte[]*/any[], offset: number, count: number): any { throw new Error("Not implemented.");}
        AddTypeParameter(typeName: string): any { throw new Error("Not implemented.");}
        HasTypeProperty(): boolean { throw new Error("Not implemented.");}
        InternalAdd(name: string, value: any): any { throw new Error("Not implemented.");}
        ReadAsArray(key: string): any { throw new Error("Not implemented.");}
        //ReadAsBase64Content(key: string): /*System.Byte[]*/any[] { throw new Error("Not implemented.");}
        ReadAsBase64Content(key: string, stream: /*System.IO.Stream*/any): any { throw new Error("Not implemented.");}
        ReadAsBool(key: string): boolean { throw new Error("Not implemented.");}
        ReadAsDouble(key: string): number { throw new Error("Not implemented.");}
        ReadAsInt(key: string): number { throw new Error("Not implemented.");}
        ReadAsJsonObject(key: string): JsonObject { throw new Error("Not implemented.");}
        ReadAsString(key: string): string { throw new Error("Not implemented.");}
        ReadEnumValue(key: string): any { throw new Error("Not implemented.");}
        ReadTypeString(): string { throw new Error("Not implemented.");}
        SerializeToJson(stream: /*System.IO.Stream*/any): any { throw new Error("Not implemented.");}
        //SerializeToJson(stream: /*System.IO.Stream*/any, prettyPrint: boolean): any { throw new Error("Not implemented.");}
        ValidateObject(entry: any): any { throw new Error("Not implemented.");}
        WriteKeyValuePair(writer: JsonWriter, key: string, value: any): any { throw new Error("Not implemented.");}
        WriteValue(writer: JsonWriter, value: any): any { throw new Error("Not implemented.");}
    }
    class JsonParser {
        private tokenizer: JsonTokenizer;
        Parse(): JsonObject { throw new Error("Not implemented.");}
        ParseArray(): any { throw new Error("Not implemented.");}
        ParseKeyValuePair(jsonObject: JsonObject): any { throw new Error("Not implemented.");}
        ParseNumber(valueToken: string): any { throw new Error("Not implemented.");}
        ParseObject(): JsonObject { throw new Error("Not implemented.");}
        ParseValue(): any { throw new Error("Not implemented.");}
        ReadAndValidateToken(token: any, expectedTokenTypes: any): JsonTokenType { throw new Error("Not implemented.");}
        UnescapeString(value: string): string { throw new Error("Not implemented.");}
    }
    class JsonTokenizer {
        private currentMatch: any;
        private nextTokenType: JsonTokenType;
        private nextToken: string;
        private nextTokenPeeked: boolean;
        private static jsonStringRegEx: any;
        private static jsonNumberRegEx: any;
        private static jsonBooleanRegEx: any;
        private static jsonNullRegEx: any;
        private static jsonOpenObjectRegEx: any;
        private static jsonCloseObjectRegEx: any;
        private static jsonOpenArrayRegEx: any;
        private static jsonCloseArrayRegEx: any;
        private static jsonColonRegEx: any;
        private static jsonCommaRegEx: any;
        private static whitespaceRegEx: any;
        private static tokenDictionary: /*System.Collections.Generic.Dictionary<TKey, TValue>*/any;
        private static fullTokenizerRegex: any;
        AdvanceRegExMatch(): any { throw new Error("Not implemented.");}
        NextToken(token: any): JsonTokenType { throw new Error("Not implemented.");}
        Peek(): JsonTokenType { throw new Error("Not implemented.");}
    }
    class JsonWriter /*extends System.IO.TextWriter*/ {
        Encoding: /*System.Text.Encoding*/any;
        ShouldCloseStream: boolean;
        private outStream: /*System.IO.Stream*/any;
        private shouldCloseStream: boolean;
        private prettyPrint: boolean;
        private writingStringValue: boolean;
        private smallBuffer: /*System.Byte[]*/any[];
        private singleCharBuffer: any;
        private closures: any;
        private closureHasMembers: any;
        AddingValue(): any { throw new Error("Not implemented.");}
        Dispose(disposing: boolean): any { throw new Error("Not implemented.");}
        PopClosure(): any { throw new Error("Not implemented.");}
        PushArrayClosure(): any { throw new Error("Not implemented.");}
        PushObjectClosure(): any { throw new Error("Not implemented.");}
        Write(value: string): any { throw new Error("Not implemented.");}
        WriteIndentation(): any { throw new Error("Not implemented.");}
        WriteInternal(value: string): any { throw new Error("Not implemented.");}
        WriteKey(key: string): any { throw new Error("Not implemented.");}
        WriteNullValue(): any { throw new Error("Not implemented.");}
        WriteQuote(): any { throw new Error("Not implemented.");}
        WriteValue(value: number): any { throw new Error("Not implemented.");}
        //WriteValue(value: number): any { throw new Error("Not implemented.");}
        //WriteValue(value: number): any { throw new Error("Not implemented.");}
        //WriteValue(value: any): any { throw new Error("Not implemented.");}
        //WriteValue(value: boolean): any { throw new Error("Not implemented.");}
        //WriteValue(value: string): any { throw new Error("Not implemented.");}
        //WriteValue(value: Date): any { throw new Error("Not implemented.");}
        //WriteValue(value: number): any { throw new Error("Not implemented.");}
    }
    class LocalizedString {
        private /*ILocalizedString.*/LocalizedString: LocalizedString;
        IsEmpty: boolean;
        BaseId: number;
        private Id: string;
        private Inserts: any;
        private ResourceManager: ExchangeResourceManager;
        static Empty: LocalizedString;
        Equals(obj: any): boolean { throw new Error("Not implemented.");}
        //Equals(obj: LocalizedString): boolean { throw new Error("Not implemented.");}
        GetHashCode(): number { throw new Error("Not implemented.");}
        Join(separator: any, value: any): LocalizedString { throw new Error("Not implemented.");}
        //ToString(): string { throw new Error("Not implemented.");}
        ToString(formatProvider: /*System.IFormatProvider*/any): string { throw new Error("Not implemented.");}
        TranslateObject(badObject: any, formatProvider: /*System.IFormatProvider*/any): any { throw new Error("Not implemented.");}
    }
    class NotificationEventArgs /*extends System.EventArgs*/ {
        Subscription: StreamingSubscription;
        Events: /*System.Collections.Generic.IEnumerable<NotificationEvent>*/any;
    }
    
    class RelativeDayOfMonthTransition extends AbsoluteMonthTransition {
        DayOfTheWeek: DayOfTheWeek;
        WeekIndex: number;
        private dayOfTheWeek: DayOfTheWeek;
        private weekIndex: number;
        CreateTransitionTime(): any { throw new Error("Not implemented.");}
        GetXmlElementName(): string { throw new Error("Not implemented.");}
        InitializeFromTransitionTime(transitionTime: any): any { throw new Error("Not implemented.");}
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented.");}
    }
    class RequiredServerVersionAttribute /*extends System.Attribute*/ {
        Version: ExchangeVersion;
        private version: ExchangeVersion;
    }
    class SafeXmlDocument /*extends System.Xml.XmlDocument*/ {
        private settings: /*System.Xml.XmlReaderSettings*/any;
        Load(inStream: /*System.IO.Stream*/any): any { throw new Error("Not implemented.");}
        //Load(filename: string): any { throw new Error("Not implemented.");}
        //Load(txtReader: any): any { throw new Error("Not implemented.");}
        //Load(reader: any): any { throw new Error("Not implemented.");}
        LoadXml(xml: string): any { throw new Error("Not implemented.");}
    }
    class SafeXmlFactory {
        private static defaultSettings: /*System.Xml.XmlReaderSettings*/any;
        CreateSafeXmlTextReader(stream: /*System.IO.Stream*/any): any { throw new Error("Not implemented.");}
        //CreateSafeXmlTextReader(xmlFragment: string, fragType: System.Xml.XmlNodeType, context: any): any { throw new Error("Not implemented.");}
        //CreateSafeXmlTextReader(url: string, input: any, nt: /*System.Xml.XmlNameTable*/any): any { throw new Error("Not implemented.");}
        //CreateSafeXmlTextReader(url: string, input: /*System.IO.Stream*/any, nt: /*System.Xml.XmlNameTable*/any): any { throw new Error("Not implemented.");}
        //CreateSafeXmlTextReader(input: any, nt: /*System.Xml.XmlNameTable*/any): any { throw new Error("Not implemented.");}
        //CreateSafeXmlTextReader(url: string, nt: /*System.Xml.XmlNameTable*/any): any { throw new Error("Not implemented.");}
        //CreateSafeXmlTextReader(xmlFragment: /*System.IO.Stream*/any, fragType: System.Xml.XmlNodeType, context: any): any { throw new Error("Not implemented.");}
        //CreateSafeXmlTextReader(url: string, input: /*System.IO.Stream*/any): any { throw new Error("Not implemented.");}
        //CreateSafeXmlTextReader(input: /*System.IO.Stream*/any, nt: /*System.Xml.XmlNameTable*/any): any { throw new Error("Not implemented.");}
        //CreateSafeXmlTextReader(input: any): any { throw new Error("Not implemented.");}
        //CreateSafeXmlTextReader(url: string): any { throw new Error("Not implemented.");}
        //CreateSafeXmlTextReader(url: string, input: any): any { throw new Error("Not implemented.");}
        //CreateXPathDocument(uri: string, space: System.Xml.XmlSpace): any { throw new Error("Not implemented.");}
        //CreateXPathDocument(stream: /*System.IO.Stream*/any): any { throw new Error("Not implemented.");}
        //CreateXPathDocument(uri: string): any { throw new Error("Not implemented.");}
        //CreateXPathDocument(textReader: any): any { throw new Error("Not implemented.");}
        //CreateXPathDocument(reader: any): any { throw new Error("Not implemented.");}
        CreateXPathDocument(reader: any, space: System.Xml.XmlSpace): any { throw new Error("Not implemented.");}
    }
    class SafeXmlSchema /*extends System.Xml.Schema.XmlSchema*/ {
        private static defaultSettings: /*System.Xml.XmlReaderSettings*/any;
        Read(stream: /*System.IO.Stream*/any, validationEventHandler: any): /*System.Xml.Schema.XmlSchema*/any { throw new Error("Not implemented.");}
        //Read(reader: any, validationEventHandler: any): /*System.Xml.Schema.XmlSchema*/any { throw new Error("Not implemented.");}
        //Read(reader: any, validationEventHandler: any): /*System.Xml.Schema.XmlSchema*/any { throw new Error("Not implemented.");}
    }
    class SchemaAttribute /*extends System.Attribute*/ {
    }
    class SecurityTimestamp {
        CreationTimeUtc: Date;
        ExpiryTimeUtc: Date;
        Id: string;
        DigestAlgorithm: string;
        private id: string;
        private digestAlgorithm: string;
        private digest: /*System.Byte[]*/any[];
        private computedCreationTimeUtc: any;
        private computedExpiryTimeUtc: any;
        private creationTimeUtc: Date;
        private expiryTimeUtc: Date;
        static DefaultTimestampValidityDuration: /*System.TimeSpan*/any;
        static DefaultTimeToLive: /*System.TimeSpan*/any;
        GetCreationTimeChars(): any { throw new Error("Not implemented.");}
        GetDigest(): /*System.Byte[]*/any[] { throw new Error("Not implemented.");}
        GetExpiryTimeChars(): any { throw new Error("Not implemented.");}
        ToChars(utcTime: any): any { throw new Error("Not implemented.");}
        //ToChars(n: number, buffer: any, offset: any, count: number): any { throw new Error("Not implemented.");}
        ToString(): string { throw new Error("Not implemented.");}
    }
    class SeekToConditionItemView extends ViewBase {
        PageSize: number;
        OffsetBasePoint: OffsetBasePoint;
        Condition: SearchFilter;
        Traversal: ItemTraversal;
        OrderBy: OrderByCollection;
        private pageSize: number;
        private traversal: ItemTraversal;
        private condition: SearchFilter;
        private offsetBasePoint: OffsetBasePoint;
        private orderBy: OrderByCollection;
        private serviceObjType: ServiceObjectType;
        AddJsonProperties(jsonRequest: JsonObject, service: ExchangeService): any { throw new Error("Not implemented.");}
        GetMaxEntriesReturned(): number { throw new Error("Not implemented.");}
        GetServiceObjectType(): ServiceObjectType { throw new Error("Not implemented.");}
        GetViewJsonTypeName(): string { throw new Error("Not implemented.");}
        GetViewXmlElementName(): string { throw new Error("Not implemented.");}
        InternalValidate(request: ServiceRequestBase): any { throw new Error("Not implemented.");}
        InternalWritePagingToJson(jsonView: JsonObject, service: ExchangeService): any { throw new Error("Not implemented.");}
        InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any { throw new Error("Not implemented.");}
        InternalWriteViewToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented.");}
        SetServiceObjectType(objType: ServiceObjectType): any { throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented.");}
        WriteGroupingToJson(service: ExchangeService, groupBy: Grouping): any { throw new Error("Not implemented.");}
        WriteOrderByToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented.");}
        WriteToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any { throw new Error("Not implemented.");}
    }
    class ServiceObjectDefinitionAttribute /*extends System.Attribute*/ {
        XmlElementName: string;
        ReturnedByServer: boolean;
        private xmlElementName: string;
        private returnedByServer: boolean;
    }

    class SetHoldOnMailboxesParameters {
        ActionType: HoldAction;
        HoldId: string;
        Query: string;
        Mailboxes: /*System.String[]*/any[];
        Language: string;
        InPlaceHoldIdentity: string;
    }
    class SimplePropertyBag<TKey> {
        AddedItems: /*System.Collections.Generic.IEnumerable<TKey>*/any[];
        RemovedItems: /*System.Collections.Generic.IEnumerable<TKey>*/any[];
        ModifiedItems: /*System.Collections.Generic.IEnumerable<TKey>*/any[];
        Item: any;
        private items: /*System.Collections.Generic.Dictionary<TKey, TValue>*/any;
        private removedItems: /*System.Collections.Generic.List<T>*/any;
        private addedItems: /*System.Collections.Generic.List<T>*/any;
        private modifiedItems: /*System.Collections.Generic.List<T>*/any;
        private OnChange: PropertyBagChangedDelegate;
        Changed(): any { throw new Error("Not implemented.");}
        ClearChangeLog(): any { throw new Error("Not implemented.");}
        ContainsKey(key: TKey): boolean { throw new Error("Not implemented.");}
        GetEnumerator(): any { throw new Error("Not implemented.");}
        InternalAddItemToChangeList(key: TKey, changeList: /*System.Collections.Generic.List<T>*/any): any { throw new Error("Not implemented.");}
        InternalRemoveItem(key: TKey): any { throw new Error("Not implemented.");}
        TryGetValue(key: TKey, value: any): boolean { throw new Error("Not implemented.");}
    }

    class Time {
        Hours: number;
        Minutes: number;
        Seconds: number;
        private hours: number;
        private minutes: number;
        private seconds: number;
        ConvertToMinutes(): number { throw new Error("Not implemented.");}
        ToXSTime(): string { throw new Error("Not implemented.");}
    }
    
    class WebAsyncCallStateAnchor {
        ServiceRequest: ServiceRequestBase;
        WebRequest: IEwsHttpWebRequest;
        AsyncState: any;
        AsyncCallback: /*System.AsyncCallback*/any;
    }


}

//declare module "WebServices.Definitions" {
//    var _temp = Microsoft.Exchange.WebServices.Data;
//    export = _temp;
//}
