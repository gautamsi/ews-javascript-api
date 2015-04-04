module Microsoft.Exchange.WebServices.Data {
    export class UnifiedMessaging {
        private service: ExchangeService;
        DisconnectPhoneCall(id: PhoneCallId): any{ throw new Error("Not implemented.");}
        GetPhoneCallInformation(id: PhoneCallId): PhoneCall{ throw new Error("Not implemented.");}
        PlayOnPhone(itemId: ItemId, dialString: string): PhoneCall{ throw new Error("Not implemented.");}
    }

    export class DisconnectPhoneCallRequest extends SimpleServiceRequestBase {
        Id: PhoneCallId;
        private id: PhoneCallId;
        Execute(): ServiceResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class GetPhoneCallRequest extends SimpleServiceRequestBase {
        Id: PhoneCallId;
        private id: PhoneCallId;
        Execute(): GetPhoneCallResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class PlayOnPhoneRequest extends SimpleServiceRequestBase {
        ItemId: ItemId;
        DialString: string;
        private itemId: ItemId;
        private dialString: string;
        Execute(): PlayOnPhoneResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        //ParseResponse(jsonBody: JsonObject): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class PhoneCallId extends ComplexProperty {
        Id: string;
        private id: string;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class GetPhoneCallResponse extends ServiceResponse {
        PhoneCall: PhoneCall;
        private phoneCall: PhoneCall;
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class PhoneCall extends ComplexProperty {
        private static SuccessfulResponseText: string = "OK";
        private static SuccessfulResponseCode: number = 200;
        State: PhoneCallState;
        ConnectionFailureCause: ConnectionFailureCause;
        SIPResponseText: string;
        SIPResponseCode: number;
        private service: ExchangeService;
        private state: PhoneCallState;
        private connectionFailureCause: ConnectionFailureCause;
        private sipResponseText: string;
        private sipResponseCode: number;
        private id: PhoneCallId;
        Disconnect(): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        Refresh(): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }

    export class PlayOnPhoneResponse extends ServiceResponse {
        PhoneCallId: PhoneCallId;
        private phoneCallId: PhoneCallId;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }


}