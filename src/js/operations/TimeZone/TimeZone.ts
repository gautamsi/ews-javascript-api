module Microsoft.Exchange.WebServices.Data {
    export class GetServerTimeZonesRequest extends MultiResponseServiceRequest<GetServerTimeZonesResponse> {
        Ids: string[];//System.Collections.Generic.IEnumerable<string>;
        private ids: string[];//System.Collections.Generic.IEnumerable<string>;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): GetServerTimeZonesResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class GetServerTimeZonesResponse extends ServiceResponse {
        TimeZones: any[];// System.Collections.ObjectModel.Collection<System.TimeZoneInfo>;
        private timeZones: any[];//System.Collections.ObjectModel.Collection<System.TimeZoneInfo>;
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }

}