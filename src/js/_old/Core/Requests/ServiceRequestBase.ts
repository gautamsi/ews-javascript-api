module Microsoft.Exchange.WebServices.Data {



    //module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;


    export class GetClientExtensionRequest extends SimpleServiceRequestBase {
        private requestedExtensionIds: StringList;
        private shouldReturnEnabledOnly: boolean;
        private isUserScope: boolean;
        private userId: string;
        private userEnabledExtensionIds: StringList;
        private userDisabledExtensionIds: StringList;
        private isDebug: boolean;
        Execute(): GetClientExtensionResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class GetEncryptionConfigurationRequest extends SimpleServiceRequestBase {
        Execute(): GetEncryptionConfigurationResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class SetEncryptionConfigurationRequest extends SimpleServiceRequestBase {
        ImageBase64: string;
        EmailText: string;
        PortalText: string;
        DisclaimerText: string;
        private imageBase64: string;
        private emailText: string;
        private portalText: string;
        private disclaimerText: string;
        Execute(): ServiceResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class SetTeamMailboxRequest extends SimpleServiceRequestBase {
        private emailAddress: EmailAddress;
        private sharePointSiteUrl: string/*System.Uri*/;
        private state: TeamMailboxLifecycleState;
        Execute(): ServiceResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class UnpinTeamMailboxRequest extends SimpleServiceRequestBase {
        private emailAddress: EmailAddress;
        Execute(): ServiceResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class UpdateInboxRulesRequest extends SimpleServiceRequestBase {
        MailboxSmtpAddress: string;
        RemoveOutlookRuleBlob: boolean;
        InboxRuleOperations: RuleOperation[];//System.Collections.Generic.IEnumerable<RuleOperation>;
        private mailboxSmtpAddress: string;
        private removeOutlookRuleBlob: boolean;
        private inboxRuleOperations: RuleOperation[];//System.Collections.Generic.IEnumerable<RuleOperation>;
        Execute(): UpdateInboxRulesResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }


    export class ExecuteDiagnosticMethodRequest extends MultiResponseServiceRequest<ExecuteDiagnosticMethodResponse> {
        Verb: string;
        Parameter: any;//System.Xml.XmlNode;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ExecuteDiagnosticMethodResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class ExpandGroupRequest extends MultiResponseServiceRequest<ExpandGroupResponse> {
        EmailAddress: EmailAddress;
        private emailAddress: EmailAddress;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ExpandGroupResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    //export module GetUserConfigurationRequest {
    //    export var /*private static*/ EnumDelimiter: string = ",";
    //}
    export class SetClientExtensionRequest extends MultiResponseServiceRequest<ServiceResponse> {
        private actions: any[];//System.Collections.Generic.List<T>;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }




}
