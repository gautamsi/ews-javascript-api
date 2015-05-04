import SimpleServiceRequestBase = require("../../Core/Requests/SimpleServiceRequestBase");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");
import MultiResponseServiceRequest = require("../../Core/Requests/MultiResponseServiceRequest");
import ExchangeService = require("../../Core/ExchangeService");
import ServiceResponse = require("../../Core/Responses/ServiceResponse");
import JsonObject = require("../../Core/JsonObject");
module Microsoft.Exchange.WebServices.Data {

    export class DisableAppRequest extends SimpleServiceRequestBase {
        private Id: string;
        private DisableReason: DisableReasonType;
        Execute(): DisableAppResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class GetAppManifestsRequest extends SimpleServiceRequestBase {
        ApiVersionSupported: string;
        SchemaVersionSupported: string;
        Execute(): GetAppManifestsResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class GetAppMarketplaceUrlRequest extends SimpleServiceRequestBase {
        ApiVersionSupported: string;
        SchemaVersionSupported: string;
        Execute(): GetAppMarketplaceUrlResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class GetClientAccessTokenRequest extends MultiResponseServiceRequest<GetClientAccessTokenResponse> {
        TokenRequests: ClientAccessTokenRequest[];
        CreateServiceResponse(service: ExchangeService, responseIndex: number): GetClientAccessTokenResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class InstallAppRequest extends SimpleServiceRequestBase {
        private manifestStream: any/*System.IO.Stream*/;
        Execute(): InstallAppResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class UninstallAppRequest extends SimpleServiceRequestBase {
        private ID: string;
        Execute(): UninstallAppResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class DisableAppResponse extends ServiceResponse {
    }
    export class GetAppManifestsResponse extends ServiceResponse {
        Manifests: any[];//System.Collections.ObjectModel.Collection<System.Xml.XmlDocument>;
        Apps: ClientApp[];//System.Collections.ObjectModel.Collection<ClientApp>;
        private manifests: any[];//System.Collections.ObjectModel.Collection<System.Xml.XmlDocument>;
        private apps: ClientApp[];//System.Collections.ObjectModel.Collection<ClientApp>;
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ReadFromExchange2013(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ReadFromExchange2013Sp1(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetAppMarketplaceUrlResponse extends ServiceResponse {
        AppMarketplaceUrl: string;
        private appMarketplaceUrl: string;
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetClientAccessTokenResponse extends ServiceResponse {
        Id: string;
        TokenType: ClientAccessTokenType;
        TokenValue: string;
        TTL: number;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class InstallAppResponse extends ServiceResponse {
    }
    export class UninstallAppResponse extends ServiceResponse {
    }

}
