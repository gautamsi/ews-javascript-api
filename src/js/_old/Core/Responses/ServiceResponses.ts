module Microsoft.Exchange.WebServices.Data {



    export class ExecuteDiagnosticMethodResponse extends ServiceResponse {
        ReturnValue: any;// System.Xml.XmlDocument;
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class ExpandGroupResponse extends ServiceResponse {
        Members: ExpandGroupResults;
        private members: ExpandGroupResults;
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetClientExtensionResponse extends ServiceResponse {
        ClientExtensions: ClientExtension[];//System.Collections.ObjectModel.Collection<ClientExtension>;
        RawMasterTableXml: string;
        private clientExtension: ClientExtension[];//System.Collections.ObjectModel.Collection<ClientExtension>;
        private rawMasterTableXml: string;
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetEncryptionConfigurationResponse extends ServiceResponse {
        ImageBase64: string;
        EmailText: string;
        PortalText: string;
        DisclaimerText: string;
        private imageBase64: string;
        private emailText: string;
        private portalText: string;
        private disclaimerText: string;
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }


    export class SetEncryptionConfigurationResponse extends ServiceResponse {
    }
    export class SubscribeResponse<TSubscription> extends ServiceResponse {
        Subscription: TSubscription;
        private subscription: TSubscription;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }





}
