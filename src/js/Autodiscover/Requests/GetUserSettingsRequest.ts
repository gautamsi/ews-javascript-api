import {Strings} from "../../Strings";

import {EwsXmlReader} from "../../Core/EwsXmlReader";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
import {XmlElementNames} from "../../Core/XmlElementNames";
import {EwsUtilities} from "../../Core/EwsUtilities";

import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {UserSettingName} from "../../Enumerations/UserSettingName";

import {ServiceValidationException} from "../../Exceptions/ServiceValidationException";

import {IPromise} from "../../Interfaces";

import {AutodiscoverService} from "../AutodiscoverService";
import {AutodiscoverResponse} from "../Responses/AutodiscoverResponse";
import {GetUserSettingsResponseCollection} from "../Responses/GetUserSettingsResponseCollection";

import {AutodiscoverRequest} from "./AutodiscoverRequest";
export class GetUserSettingsRequest extends AutodiscoverRequest {
    static GetUserSettingsActionUri: string = EwsUtilities.AutodiscoverSoapNamespace + "/Autodiscover/GetUserSettings";

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
    Execute(): IPromise<GetUserSettingsResponseCollection> {
        return this.InternalExecute().then((adr: GetUserSettingsResponseCollection) => {
            this.PostProcessResponses(adr)
            return adr;
        });
        //<IPromise<>> 
        //if (!responses) return;
        //if (responses.ErrorCode == AutodiscoverErrorCode.NoError) {
        //    this.PostProcessResponses(responses);
        //}
        //return responses;
    }
    GetRequestXmlElementName(): string {
        return XmlElementNames.GetUserSettingsRequestMessage;
    }
    GetResponseXmlElementName(): string {
        return XmlElementNames.GetUserSettingsResponseMessage;
    }
    GetWsAddressingActionName(): string {
        return GetUserSettingsRequest.GetUserSettingsActionUri;// GetUserSettingsActionUri;
    }
    PostProcessResponses(responses: GetUserSettingsResponseCollection): void {
        // Note:The response collection may not include all of the requested users if the request has been throttled.
        for (var index = 0; index < responses.Count; index++) {
            responses.__thisIndexer(index).SmtpAddress = this.SmtpAddresses[index];
        }
    }
    ReadSoapHeader(reader: EwsXmlReader): void {
        super.ReadSoapHeader(reader);
        return;
        if (this.expectPartnerToken) {
            if (reader.IsElement(XmlNamespace.Autodiscover, XmlElementNames.PartnerToken)) {
                this.PartnerToken = reader.ReadInnerXml();
            }

            if (reader.IsElement(XmlNamespace.Autodiscover, XmlElementNames.PartnerTokenReference)) {
                this.PartnerTokenReference = reader.ReadInnerXml();
            }
        }
    }
    Validate(): void {
        super.Validate();

        EwsUtilities.ValidateParam(this.SmtpAddresses, "smtpAddresses");
        EwsUtilities.ValidateParam(this.Settings, "settings");

        if (this.Settings.length == 0) {
            throw new ServiceValidationException(
                Strings.InvalidAutodiscoverSettingsCount
                );
        }

        if (this.SmtpAddresses.length == 0) {
            throw new ServiceValidationException(
                Strings.InvalidAutodiscoverSmtpAddressesCount
                );
        }

        for (var s in this.SmtpAddresses) {
            var smtpAddress = this.SmtpAddresses[s];
            //if (string.IsNullOrEmpty(smtpAddress)) {
            if (smtpAddress != undefined && smtpAddress !== "") {
                throw new ServiceValidationException(
                    Strings.InvalidAutodiscoverSmtpAddress
                    );
            }
        }
    }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteAttributeValue(
            "xmlns",
            EwsUtilities.AutodiscoverSoapNamespacePrefix,
            EwsUtilities.AutodiscoverSoapNamespace);
    }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any {
        writer.WriteStartElement(XmlNamespace.Autodiscover, XmlElementNames.Request);

        writer.WriteStartElement(XmlNamespace.Autodiscover, XmlElementNames.Users);

        for (var s in this.SmtpAddresses) {
            var smtpAddress = this.SmtpAddresses[s];
            writer.WriteStartElement(XmlNamespace.Autodiscover, XmlElementNames.User);

            //if (!string.IsNullOrEmpty(smtpAddress)) {
            if (smtpAddress != undefined && smtpAddress !== "") {
                writer.WriteElementValue(
                    XmlNamespace.Autodiscover,
                    XmlElementNames.Mailbox,
                    smtpAddress);
            }
            writer.WriteEndElement(); // User
        }
        writer.WriteEndElement(); // Users

        writer.WriteStartElement(XmlNamespace.Autodiscover, XmlElementNames.RequestedSettings);
        for (var s in this.Settings) {
            var setting = this.Settings[s];

            writer.WriteElementValue(
                XmlNamespace.Autodiscover,
                XmlElementNames.Setting,
                UserSettingName[setting]);
        }

        writer.WriteEndElement(); // RequestedSettings

        writer.WriteEndElement(); // Request
    }
    WriteExtraCustomSoapHeadersToXml(writer: EwsServiceXmlWriter): void {

        if (this.expectPartnerToken) {
            debugger;
            // writer.WriteElementValue(
            //    XmlNamespace.Autodiscover,
            //    XmlElementNames.BinarySecret,
            //    btoa(ExchangeServiceBase.SessionKey));
            //    //System.Convert.ToBase64String(ExchangeServiceBase.SessionKey));
        }
    }
}
