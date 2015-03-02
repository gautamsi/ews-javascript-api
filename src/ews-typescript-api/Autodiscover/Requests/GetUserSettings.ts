
module Microsoft.Exchange.WebServices.Autodiscover {
    export class GetUserSettingsRequest extends AutodiscoverRequest {
        static GetUserSettingsActionUri: string = Data.EwsUtilities.AutodiscoverSoapNamespace + "/Autodiscover/GetUserSettings";

        SmtpAddresses: string[];//System.Collections.Generic.List<string>;
        Settings: UserSettingName[];//System.Collections.Generic.List<UserSettingName>;
        PartnerToken: string;
        PartnerTokenReference: string;
        private expectPartnerToken: boolean;

        constructor(service: AutodiscoverService, url: string) {
            super(service, url);
            this.expectPartnerToken = false;
        }
        CreateServiceResponse(): AutodiscoverResponse {
            return new GetUserSettingsResponseCollection();
        }
        Execute(): WinJS.Promise<GetUserSettingsResponseCollection> {
            var responses = <WinJS.Promise<GetUserSettingsResponseCollection>> this.InternalExecute();
            //if (!responses) return;
            //if (responses.ErrorCode == AutodiscoverErrorCode.NoError) {
            //    this.PostProcessResponses(responses);
            //}
            return responses;
        }
        GetRequestXmlElementName(): string {
            return Data.XmlElementNames.GetUserSettingsRequestMessage;
        }
        GetResponseXmlElementName(): string {
            return Data.XmlElementNames.GetUserSettingsResponseMessage;
        }
        GetWsAddressingActionName(): string {
            return GetUserSettingsRequest.GetUserSettingsActionUri;// GetUserSettingsActionUri;
        }
        PostProcessResponses(responses: GetUserSettingsResponseCollection): void {
            // Note:The response collection may not include all of the requested users if the request has been throttled.
            for (var index = 0; index < responses.Count; index++) {
                responses[index].SmtpAddress = this.SmtpAddresses[index];
            }
        }
        ReadSoapHeader(reader: Data.EwsXmlReader): void {
            super.ReadSoapHeader(reader);
            return;
            if (this.expectPartnerToken) {
                if (reader.IsElement(Data.XmlNamespace.Autodiscover, Data.XmlElementNames.PartnerToken)) {
                    this.PartnerToken = reader.ReadInnerXml();
                }

                if (reader.IsElement(Data.XmlNamespace.Autodiscover, Data.XmlElementNames.PartnerTokenReference)) {
                    this.PartnerTokenReference = reader.ReadInnerXml();
                }
            }
        }
        Validate(): void {
            super.Validate();

            Data.EwsUtilities.ValidateParam(this.SmtpAddresses, "smtpAddresses");
            Data.EwsUtilities.ValidateParam(this.Settings, "settings");

            if (this.Settings.length == 0) {
                throw new Error(Strings.InvalidAutodiscoverSettingsCount.ToString());
                //throw new ServiceValidationException(Strings.InvalidAutodiscoverSettingsCount);
            }

            if (this.SmtpAddresses.length == 0) {
                throw new Error(Strings.InvalidAutodiscoverSmtpAddressesCount.ToString());
                //throw new ServiceValidationException(Strings.InvalidAutodiscoverSmtpAddressesCount);
            }

            for (var s in this.SmtpAddresses) {
                var smtpAddress = this.SmtpAddresses[s];
                //if (string.IsNullOrEmpty(smtpAddress)) {
                if (smtpAddress != undefined && smtpAddress !== "") {
                    throw new Error(Strings.InvalidAutodiscoverSmtpAddress.ToString());
                    //throw new Data.ServiceValidationException(Strings.InvalidAutodiscoverSmtpAddress);
                }
            }
        }
        WriteAttributesToXml(writer: Data.EwsServiceXmlWriter): void {
            writer.WriteAttributeValue(
                "xmlns",
                Data.EwsUtilities.AutodiscoverSoapNamespacePrefix,
                Data.EwsUtilities.AutodiscoverSoapNamespace);
        }
        WriteElementsToXml(writer: Data.EwsServiceXmlWriter): any {
            writer.WriteStartElement(Data.XmlNamespace.Autodiscover, Data.XmlElementNames.Request);

            writer.WriteStartElement(Data.XmlNamespace.Autodiscover, Data.XmlElementNames.Users);

            for (var s in this.SmtpAddresses) {
                var smtpAddress = this.SmtpAddresses[s];
                writer.WriteStartElement(Data.XmlNamespace.Autodiscover, Data.XmlElementNames.User);

                //if (!string.IsNullOrEmpty(smtpAddress)) {
                if (smtpAddress != undefined && smtpAddress !== "") {
                    writer.WriteElementValue(
                        Data.XmlNamespace.Autodiscover,
                        Data.XmlElementNames.Mailbox, Data.XmlElementNames.Mailbox,
                        smtpAddress);
                }
                writer.WriteEndElement(); // User
            }
            writer.WriteEndElement(); // Users

            writer.WriteStartElement(Data.XmlNamespace.Autodiscover, Data.XmlElementNames.RequestedSettings);
            for (var s in this.Settings) {
                var setting = this.Settings[s];

                writer.WriteElementValue(
                    Data.XmlNamespace.Autodiscover,
                    Data.XmlElementNames.Setting, Data.XmlElementNames.Setting,
                    UserSettingName[setting]);
            }

            writer.WriteEndElement(); // RequestedSettings

            writer.WriteEndElement(); // Request
        }
        WriteExtraCustomSoapHeadersToXml(writer: Data.EwsServiceXmlWriter): void {

            //if (this.expectPartnerToken) {
            //    writer.WriteElementValue(
            //        Data.XmlNamespace.Autodiscover,
            //        Data.XmlElementNames.BinarySecret,
            //        btoa(Data.ExchangeServiceBase.SessionKey));
            //        //System.Convert.ToBase64String(Data.ExchangeServiceBase.SessionKey));
            //}
        }
    }
    export class GetUserSettingsResponse extends AutodiscoverResponse {
        SmtpAddress: string;
        RedirectTarget: string;
        Settings: { [index: number]: any }; //System.Collections.Generic.IDictionary<UserSettingName, any>;
        UserSettingErrors: UserSettingError[];// System.Collections.ObjectModel.Collection<UserSettingError>;

        constructor() {
            super();
            this.SmtpAddress = "";
            this.Settings = {};

            this.UserSettingErrors = new Array<UserSettingError>();
        }

        LoadFromXml(reader: Data.EwsXmlReader, parentElementName: string): void {
            do {
                reader.Read();

                if (reader.NodeType == Node.ELEMENT_NODE) {
                    switch (reader.LocalName) {
                        case Data.XmlElementNames.RedirectTarget:
                            this.RedirectTarget = reader.ReadElementValue();
                            break;
                        case Data.XmlElementNames.UserSettingErrors:
                            this.LoadUserSettingErrorsFromXml(reader);
                            break;
                        case Data.XmlElementNames.UserSettings:
                            this.LoadUserSettingsFromXml(reader);
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
        LoadUserSettingErrorsFromXml(reader: Data.EwsXmlReader): void {
            if (!reader.IsEmptyElement) {
                do {
                    reader.Read();

                    if ((reader.NodeType == Node.ELEMENT_NODE) && (reader.LocalName == Data.XmlElementNames.UserSettingError)) {
                        var error = new UserSettingError();
                        error.LoadFromXml(reader);
                        this.UserSettingErrors.push(error);
                    }
                }
                while (reader.HasRecursiveParent(Data.XmlElementNames.UserSettingErrors));
                reader.SeekLast();// fix xml treewalker to go back last node, next do..while loop will come back to current node.
            }
        }
        LoadUserSettingsFromXml(reader: Data.EwsXmlReader): void {
            var parent: Node = reader.CurrentNode;
            if (!reader.IsEmptyElement) {
                do {
                    reader.Read();

                    if (reader.Eof || !reader.HasRecursiveParentNode(parent, Data.XmlElementNames.UserSettings))
                        break;

                    if ((reader.NodeType == Node.ELEMENT_NODE /*System.Xml.XmlNodeType.Element*/) && (reader.LocalName == Data.XmlElementNames.UserSetting)) {
                        var settingClass: string = reader.ReadAttributeValue(Data.XmlNamespace.XmlSchemaInstance, Data.XmlAttributeNames.Type);

                        switch (settingClass) {
                            case Data.XmlElementNames.StringSetting:
                            case Data.XmlElementNames.WebClientUrlCollectionSetting:
                            case Data.XmlElementNames.AlternateMailboxCollectionSetting:
                            case Data.XmlElementNames.ProtocolConnectionCollectionSetting:
                            case Data.XmlElementNames.DocumentSharingLocationCollectionSetting:
                                this.ReadSettingFromXml(reader);
                                break;

                            default:
                                console.assert(false,
                                    "GetUserSettingsResponse.LoadUserSettingsFromXml",
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
        ReadSettingFromXml(reader: Data.EwsXmlReader): any {
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
                        case Data.XmlElementNames.WebClientUrls:
                            value = WebClientUrlCollection.LoadFromXml(reader);
                            break;
                        case Data.XmlElementNames.ProtocolConnections:
                            value = ProtocolConnectionCollection.LoadFromXml(reader);
                            break;
                        case Data.XmlElementNames.AlternateMailboxes:
                            value = AlternateMailboxCollection.LoadFromXml(reader);
                            break;
                        case Data.XmlElementNames.DocumentSharingLocations:
                            value = DocumentSharingLocationCollection.LoadFromXml(reader);
                            break;
                    }
                }
            }
            while (true);
            //while (reader.HasRecursiveParentNode(parent, Data.XmlElementNames.UserSetting));
            //while (!reader.IsEndElement(XmlNamespace.Autodiscover, XmlElementNames.UserSetting));
            reader.SeekLast();// fix xml treewalker to go back last node, next do..while loop will come back to current node.


            // EWS Managed API is broken with AutoDSvc endpoint in RedirectUrl scenario
            var userSettingName: UserSettingName = UserSettingName[name];// EwsUtilities.Parse<UserSettingName>(name);
            if (userSettingName !== undefined)
                this.Settings[userSettingName] = value;
            else
                console.assert(false,
                    "GetUserSettingsResponse.ReadSettingFromXml",
                    "Unexpected or empty name element in user setting");

            //try {

            //}
            //catch (ArgumentException) {
            //    // ignore unexpected UserSettingName in the response (due to the server-side bugs).
            //    // it'd be better if this is hooked into ITraceListener, but that is unavailable here.
            //    //
            //    // in case "name" is null, EwsUtilities.Parse throws ArgumentNullException
            //    // (which derives from ArgumentException).
            //    //

            //    //EwsUtilities.Assert(
            //    //    false,
            //    //    "GetUserSettingsResponse.ReadSettingFromXml",
            //    //    "Unexpected or empty name element in user setting");
            //}
        }

        LoadFromObject(obj: any, parentElementName: string): void {
            debugger;
            super.LoadFromObject(obj, parentElementName);
            var settingscol = obj[Data.XmlElementNames.UserSettings];
            this.LoadUserSettingsFromObject(settingscol);
            this.RedirectTarget = obj[Data.XmlElementNames.RedirectTarget];
            //var redirecttarget = obj[Data.XmlElementNames.RedirectTarget];
            ////if (redirecttarget["nil"]) redirecttarget = null;
            //this.RedirectTarget = redirecttarget;
            this.LoadUserSettingErrorsFromObject(obj[Data.XmlElementNames.UserSettingErrors]);

        }
        LoadUserSettingErrorsFromObject(obj: any): void {
            var errors = undefined;

            if (typeof (obj[Data.XmlElementNames.UserSettingError]) === 'undefined') return;

            if (Object.prototype.toString.call(obj[Data.XmlElementNames.UserSettingError]) === "[object Array]")
                errors = obj[Data.XmlElementNames.UserSettingError];
            else
                errors = [obj[Data.XmlElementNames.UserSettingError]];

            for (var i = 0; i < errors.length; i++) {
                var error = new UserSettingError();
                error.LoadFromObject(errors[0]);
                this.UserSettingErrors.push(error);
            }
        }
        LoadUserSettingsFromObject(obj: any): void {
            var settings = undefined;

            if (typeof (obj[Data.XmlElementNames.UserSetting]) === 'undefined') return;

            if (Object.prototype.toString.call(obj[Data.XmlElementNames.UserSetting]) === "[object Array]")
                settings = obj[Data.XmlElementNames.UserSetting];
            else
                settings = [obj[Data.XmlElementNames.UserSetting]];

            for (var i = 0; i < settings.length; i++) {
                var setting = settings[i];
                var settingClass = setting["type"];
                switch (settingClass) {
                    case Data.XmlElementNames.StringSetting:
                    case Data.XmlElementNames.WebClientUrlCollectionSetting:
                    case Data.XmlElementNames.AlternateMailboxCollectionSetting:
                    case Data.XmlElementNames.ProtocolConnectionCollectionSetting:
                    case Data.XmlElementNames.DocumentSharingLocationCollectionSetting:
                        this.ReadSettingFromObject(setting);
                        break;

                    default:
                        console.assert(false,
                            "GetUserSettingsResponse.LoadUserSettingsFromXml",
                            string.Format("Invalid setting class '{0}' returned", settingClass));
                        //EwsUtilities.Assert(
                        //    false,
                        //    "GetUserSettingsResponse.LoadUserSettingsFromXml",
                        //    string.Format("Invalid setting class '{0}' returned", settingClass));
                        break;
                }
            }

        }
        ReadSettingFromObject(obj: any): void {
            var name: string = obj[Data.XmlElementNames.Name];
            var value: any = obj[Data.XmlElementNames.Value];

            switch (obj["type"]) {
                case Data.XmlElementNames.WebClientUrlCollectionSetting://.WebClientUrls:
                    value = WebClientUrlCollection.LoadFromObject(obj[Data.XmlElementNames.WebClientUrls]);
                    break;
                case Data.XmlElementNames.ProtocolConnectionCollectionSetting://ProtocolConnections:
                    throw new Error("not implemented");
                    value = ProtocolConnectionCollection.LoadFromXml(obj);
                    break;
                case Data.XmlElementNames.AlternateMailboxCollectionSetting://AlternateMailboxes:
                    throw new Error("not implemented");
                    value = AlternateMailboxCollection.LoadFromXml(obj);
                    break;
                case Data.XmlElementNames.DocumentSharingLocationCollectionSetting://DocumentSharingLocations:
                    throw new Error("not implemented");
                    value = DocumentSharingLocationCollection.LoadFromXml(obj);
                    break;
            }

            // EWS Managed API is broken with AutoDSvc endpoint in RedirectUrl scenario
            var userSettingName: UserSettingName = UserSettingName[name];// EwsUtilities.Parse<UserSettingName>(name);
            if (userSettingName !== undefined)
                this.Settings[userSettingName] = value;
            else
                console.assert(false,
                    "GetUserSettingsResponse.ReadSettingFromXml",
                    "Unexpected or empty name element in user setting");

            //try {

            //}
            //catch (ArgumentException) {
            //    // ignore unexpected UserSettingName in the response (due to the server-side bugs).
            //    // it'd be better if this is hooked into ITraceListener, but that is unavailable here.
            //    //
            //    // in case "name" is null, EwsUtilities.Parse throws ArgumentNullException
            //    // (which derives from ArgumentException).
            //    //

            //    //EwsUtilities.Assert(
            //    //    false,
            //    //    "GetUserSettingsResponse.ReadSettingFromXml",
            //    //    "Unexpected or empty name element in user setting");
            //}
        }

        TryGetSettingValue(setting: UserSettingName, value: any): boolean { throw new Error("Not implemented."); }
    }
    export class GetUserSettingsResponseCollection extends AutodiscoverResponseCollection<GetUserSettingsResponse> {
        CreateResponseInstance(): GetUserSettingsResponse { return new GetUserSettingsResponse(); }
        GetResponseCollectionXmlElementName(): string { return Data.XmlElementNames.UserResponses; }
        GetResponseInstanceXmlElementName(): string { return Data.XmlElementNames.UserResponse; }
    }

    export class UserSettingError {
        ErrorCode: AutodiscoverErrorCode;
        ErrorMessage: string;
        SettingName: string;
        LoadFromXml(reader: Data.EwsXmlReader): any {
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

        LoadFromObject(obj: any): any {
            var errorstring:string = obj[Data.XmlElementNames.ErrorCode];
            this.ErrorCode = AutodiscoverErrorCode[errorstring];
            this.ErrorMessage = obj[Data.XmlElementNames.ErrorMessage];
            this.SettingName = obj[Data.XmlElementNames.SettingName];
        }
    }
}
