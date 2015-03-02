
module Microsoft.Exchange.WebServices.Autodiscover {
    export class GetDomainSettingsRequest extends Autodiscover.AutodiscoverRequest {
        private static GetDomainSettingsActionUri: string = Data.EwsUtilities.AutodiscoverSoapNamespace + "/Autodiscover/GetDomainSettings";
        Domains: string[];// System.Collections.Generic.List<string>;
        Settings: DomainSettingName[];// System.Collections.Generic.List<DomainSettingName>;
        RequestedVersion: Data.ExchangeVersion;
        private domains: string;// System.Collections.Generic.List<string>;
        private settings: DomainSettingName[];// System.Collections.Generic.List<DomainSettingName>;
        private requestedVersion: Data.ExchangeVersion;

        constructor(service: AutodiscoverService, url: string) {
            super(service, url);
        }

        CreateServiceResponse(): AutodiscoverResponse { return new GetDomainSettingsResponseCollection(); }
        Execute(): WinJS.Promise<GetDomainSettingsResponseCollection> {
            var responses = <WinJS.Promise<GetDomainSettingsResponseCollection>> this.InternalExecute();

            //GetDomainSettingsResponseCollection responses = (GetDomainSettingsResponseCollection) this.InternalExecute();
            //if (responses.ErrorCode == AutodiscoverErrorCode.NoError) {
            //    this.PostProcessResponses(responses);
            //}

            return responses;
        }
        GetRequestXmlElementName(): string { return Data.XmlElementNames.GetDomainSettingsRequestMessage; }
        GetResponseXmlElementName(): string { return Data.XmlElementNames.GetDomainSettingsResponseMessage; }
        GetWsAddressingActionName(): string { return GetDomainSettingsRequest.GetDomainSettingsActionUri; }
        PostProcessResponses(responses: GetDomainSettingsResponseCollection): any {
            // Note:The response collection may not include all of the requested domains if the request has been throttled.
            for (var index = 0; index < responses.Count; index++) {
                responses[index].Domain = this.Domains[index];
            }
        }
        Validate(): void { super.Validate(); }
        WriteAttributesToXml(writer: Data.EwsServiceXmlWriter): void {
            writer.WriteAttributeValue(
                "xmlns",
                Data.EwsUtilities.AutodiscoverSoapNamespacePrefix,
                Data.EwsUtilities.AutodiscoverSoapNamespace);
        }
        WriteElementsToXml(writer: Data.EwsServiceXmlWriter): any {
            writer.WriteStartElement(Data.XmlNamespace.Autodiscover, Data.XmlElementNames.Request);

            writer.WriteStartElement(Data.XmlNamespace.Autodiscover, Data.XmlElementNames.Domains);

            for (var d in this.Domains) {
                var domain = this.Domains[d];

                //if (!string.IsNullOrEmpty(domain)) {
                if (domain != undefined && domain !== "") {
                    writer.WriteElementValue(
                        Data.XmlNamespace.Autodiscover,
                        Data.XmlElementNames.Domain,
                        Data.XmlElementNames.Domain,
                        domain);
                }
            }
            writer.WriteEndElement(); //Domains

            writer.WriteStartElement(Data.XmlNamespace.Autodiscover, Data.XmlElementNames.RequestedSettings);
            for (var s in this.Settings) {
                var setting = this.Settings[s];
                writer.WriteElementValue(
                    Data.XmlNamespace.Autodiscover,
                    Data.XmlElementNames.Setting,
                    Data.XmlElementNames.Setting,
                    DomainSettingName[setting]);
            }

            writer.WriteEndElement(); //RequestedSettings

            if (this.requestedVersion) {
                writer.WriteElementValue(Data.XmlNamespace.Autodiscover,
                    Data.XmlElementNames.RequestedVersion,
                    Data.XmlElementNames.RequestedVersion,
                    this.requestedVersion);
            }

            writer.WriteEndElement(); //Request
        }
    }
    //export module GetDomainSettingsRequest {
    //    export var private static GetDomainSettingsActionUri: string = "http://schemas.microsoft.com/exchange/2010/Autodiscover/Autodiscover/GetDomainSettings";
    //}

    export class GetDomainSettingsResponse extends AutodiscoverResponse {
        Domain: string;
        RedirectTarget: string;
        Settings: { [index: number]: any }; //System.Collections.Generic.IDictionary<DomainSettingName, any>;
        DomainSettingErrors: DomainSettingError[]; //System.Collections.ObjectModel.Collection<DomainSettingError>;
        LoadDomainSettingErrorsFromXml(reader: Data.EwsXmlReader): void {
            if (!reader.IsEmptyElement) {
                do {
                    reader.Read();

                    if ((reader.NodeType == Node.ELEMENT_NODE) && (reader.LocalName == Data.XmlElementNames.DomainSettingError)) {
                        var error = new DomainSettingError();
                        error.LoadFromXml(reader);
                        this.DomainSettingErrors.push(error);
                    }
                }
                while (reader.HasRecursiveParent(Data.XmlElementNames.UserSettingErrors));
                reader.SeekLast();// fix xml treewalker to go back last node, next do..while loop will come back to current node.
            }
        }
        LoadDomainSettingsFromXml(reader: Data.EwsXmlReader): void {
            var parent: Node = reader.CurrentNode;
            if (!reader.IsEmptyElement) {
                do {
                    reader.Read();

                    if (reader.Eof || !reader.HasRecursiveParentNode(parent, Data.XmlElementNames.DomainSettings))
                        break;

                    if ((reader.NodeType == Node.ELEMENT_NODE /*System.Xml.XmlNodeType.Element*/) && (reader.LocalName == Data.XmlElementNames.DomainSetting)) {
                        var settingClass: string = reader.ReadAttributeValue(Data.XmlNamespace.XmlSchemaInstance, Data.XmlAttributeNames.Type);

                        switch (settingClass) {
                            case Data.XmlElementNames.DomainStringSetting:
                            this.ReadSettingFromXml(reader);
                                break;

                            default:
                                console.assert(false,
                                    "GetDomainSettingsResponse.LoadUserSettingsFromXml",
                                    string.Format("Invalid setting class '{0}' returned", settingClass));
                                //EwsUtilities.Assert(
                                //    false,
                                //    "GetUserSettingsResponse.LoadUserSettingsFromXml",
                                //    string.Format("Invalid setting class '{0}' returned", settingClass));
                                break;
                        }
                    }
                }
                while (true);// (reader.HasRecursiveParent(Data.XmlElementNames.UserSettings));
                //while (!reader.IsEndElement(XmlNamespace.Autodiscover, XmlElementNames.UserSettings));
                var xxxx = null;
            }
        }
        LoadFromXml(reader: Data.EwsXmlReader, parentElementName: string): void{
            do {
                reader.Read();

                if (reader.NodeType == Node.ELEMENT_NODE) {
                    switch (reader.LocalName) {
                        case Data.XmlElementNames.RedirectTarget:
                            this.RedirectTarget = reader.ReadElementValue();
                            break;
                        case Data.XmlElementNames.DomainSettingErrors:
                            this.LoadDomainSettingErrorsFromXml(reader);
                            break;
                        case Data.XmlElementNames.DomainSettings:
                            this.LoadDomainSettingsFromXml(reader);
                            break;
                        default:
                            super.LoadFromXml(reader, parentElementName);
                            break;
                    }
                }
            }
            while (reader.HasRecursiveParent(parentElementName));
            //while (!reader.IsEndElement(XmlNamespace.Autodiscover, endElementName));
        }
        ReadSettingFromXml(reader: Data.EwsXmlReader): void {
            var name: string = null;
            var value: any = null;
            var parent: Node = reader.CurrentNode;
            do {
                reader.Read();

                if (reader.Eof || !reader.HasRecursiveParentNode(parent, Data.XmlElementNames.UserSetting))
                    break;

                if (reader.NodeType == Node.ELEMENT_NODE) {
                    switch (reader.LocalName) {
                        case Data.XmlElementNames.Name:
                            name = reader.ReadElementValue();
                            break;
                        case Data.XmlElementNames.Value:
                            value = reader.ReadElementValue();
                            break;
                    }
                }
            }
            while (true);
            reader.SeekLast();// fix xml treewalker to go back last node, next do..while loop will come back to current node.


            // EWS Managed API is broken with AutoDSvc endpoint in RedirectUrl scenario
            var domainSettingName: DomainSettingName = DomainSettingName[name];// EwsUtilities.Parse<UserSettingName>(name);
            if (domainSettingName !== undefined)
                this.Settings[domainSettingName] = value;
            else
                console.assert(false,
                    "GetUserSettingsResponse.ReadSettingFromXml",
                    "Unexpected or empty name element in user setting");
        }

        LoadDomainSettingErrorsFromObject(obj: any): void {
            var errors = undefined;

            if (typeof (obj[Data.XmlElementNames.DomainSettingError]) === 'undefined') return;

            if (Object.prototype.toString.call(obj[Data.XmlElementNames.DomainSettingError]) === "[object Array]")
                errors = obj[Data.XmlElementNames.DomainSettingError];
            else
                errors = [obj[Data.XmlElementNames.DomainSettingError]];

            for (var i = 0; i < errors.length; i++) {
                var error = new DomainSettingError();
                error.LoadFromObject(errors[0]);
                this.DomainSettingErrors.push(error);
            }

        }
        LoadDomainSettingsFromObject(obj: any): void {
            var settings = undefined;

            if (typeof (obj[Data.XmlElementNames.DomainSetting]) === 'undefined') return;

            if (Object.prototype.toString.call(obj[Data.XmlElementNames.DomainSetting]) === "[object Array]")
                settings = obj[Data.XmlElementNames.DomainSetting];
            else
                settings = [obj[Data.XmlElementNames.DomainSetting]];

            for (var i = 0; i < settings.length; i++) {
                var setting = settings[i];
                var settingClass = setting["type"];
                switch (settingClass) {
                    case Data.XmlElementNames.DomainStringSetting:
                        this.ReadSettingFromObject(setting);
                        break;

                    default:
                        console.assert(false,
                            "GetDomainSettingsResponse.LoadDomainSettingsFromObject",
                            string.Format("Invalid setting class '{0}' returned", settingClass));
                        //EwsUtilities.Assert(
                        //    false,
                        //    "GetUserSettingsResponse.LoadUserSettingsFromXml",
                        //    string.Format("Invalid setting class '{0}' returned", settingClass));
                        break;
                }
            }
        }
        LoadFromObject(obj: any, parentElementName: string): void {
            super.LoadFromObject(obj, parentElementName);
            var settingscol = obj[Data.XmlElementNames.DomainSettings];
            this.LoadDomainSettingsFromObject(settingscol);
            this.RedirectTarget = obj[Data.XmlElementNames.RedirectTarget];
            this.LoadDomainSettingErrorsFromObject(obj[Data.XmlElementNames.DomainSettingErrors]);
        }
        ReadSettingFromObject(obj: any): void {
            var name: string = obj[Data.XmlElementNames.Name];
            var value: any = obj[Data.XmlElementNames.Value];

            // EWS Managed API is broken with AutoDSvc endpoint in RedirectUrl scenario
            var domainSettingName: DomainSettingName = DomainSettingName[name];// EwsUtilities.Parse<UserSettingName>(name);
            if (domainSettingName !== undefined)
                this.Settings[domainSettingName] = value;
            else
                console.assert(false,
                    "GetUserSettingsResponse.ReadSettingFromObject",
                    "Unexpected or empty name element in user setting");
        }

    }
    export class GetDomainSettingsResponseCollection extends AutodiscoverResponseCollection<GetDomainSettingsResponse> {
        CreateResponseInstance(): GetDomainSettingsResponse { return new GetDomainSettingsResponse();}
        GetResponseCollectionXmlElementName(): string { return Data.XmlElementNames.DomainResponses;}
        GetResponseInstanceXmlElementName(): string { return Data.XmlElementNames.DomainResponse;}
    }
    export class DomainSettingError {
        ErrorCode: AutodiscoverErrorCode;
        ErrorMessage: string;
        SettingName: string;
        //private errorCode: AutodiscoverErrorCode;
        //private errorMessage: string;
        //private settingName: string;
        LoadFromObject(obj: any): void {
            var errorstring: string = obj[Data.XmlElementNames.ErrorCode];
            this.ErrorCode = AutodiscoverErrorCode[errorstring];
            this.ErrorMessage = obj[Data.XmlElementNames.ErrorMessage];
            this.SettingName = obj[Data.XmlElementNames.SettingName];
        }
        LoadFromXml(reader: Microsoft.Exchange.WebServices.Data.EwsXmlReader): void{
            var parent = reader.CurrentNode;
            do {
                reader.Read();

                if (reader.NodeType == Node.ELEMENT_NODE) {
                    switch (reader.LocalName) {
                        case Data.XmlElementNames.ErrorCode:
                            var errorstring = reader.ReadElementValue();
                            this.ErrorCode = AutodiscoverErrorCode[errorstring];
                            break;
                        case Data.XmlElementNames.ErrorMessage:
                            this.ErrorMessage = reader.ReadElementValue();
                            break;
                        case Data.XmlElementNames.SettingName:
                            this.SettingName = reader.ReadElementValue();
                            break;
                    }
                }
            }
            while (reader.HasRecursiveParentNode(parent, parent.localName));
            reader.SeekLast();// fix xml treewalker to go back last node, next do..while loop will come back to current node.
        }

    }


}
