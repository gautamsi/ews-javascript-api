
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");
import XmlElementNames = require("../../Core/XmlElementNames");
import EwsUtilities = require("../../Core/EwsUtilities");

import XmlNamespace = require("../../Enumerations/XmlNamespace");
import DomainSettingName = require("../../Enumerations/DomainSettingName");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");

import {IPromise} from "../../Interfaces";


import GetDomainSettingsResponseCollection = require("../Responses/GetDomainSettingsResponseCollection");
import AutodiscoverService = require("../AutodiscoverService");
import AutodiscoverResponse = require("../Responses/AutodiscoverResponse");
import AutodiscoverRequest = require("./AutodiscoverRequest");
class GetDomainSettingsRequest extends AutodiscoverRequest {
    private static GetDomainSettingsActionUri: string = EwsUtilities.AutodiscoverSoapNamespace + "/Autodiscover/GetDomainSettings";
    Domains: string[];// System.Collections.Generic.List<string>;
    Settings: DomainSettingName[];// System.Collections.Generic.List<DomainSettingName>;
    RequestedVersion: ExchangeVersion;
    private domains: string;// System.Collections.Generic.List<string>;
    private settings: DomainSettingName[];// System.Collections.Generic.List<DomainSettingName>;
    private requestedVersion: ExchangeVersion;

    constructor(service: AutodiscoverService, url: string) {
        super(service, url);
    }

    CreateServiceResponse(): AutodiscoverResponse { return new GetDomainSettingsResponseCollection(); }
    Execute(): IPromise<GetDomainSettingsResponseCollection> {
        var responses = <IPromise<GetDomainSettingsResponseCollection>> this.InternalExecute();

        //GetDomainSettingsResponseCollection responses = (GetDomainSettingsResponseCollection) this.InternalExecute();
        //if (responses.ErrorCode == AutodiscoverErrorCode.NoError) {
        //    this.PostProcessResponses(responses);
        //}

        return responses;
    }
    GetRequestXmlElementName(): string { return XmlElementNames.GetDomainSettingsRequestMessage; }
    GetResponseXmlElementName(): string { return XmlElementNames.GetDomainSettingsResponseMessage; }
    GetWsAddressingActionName(): string { return GetDomainSettingsRequest.GetDomainSettingsActionUri; }
    PostProcessResponses(responses: GetDomainSettingsResponseCollection): any {
        // Note:The response collection may not include all of the requested domains if the request has been throttled.
        for (var index = 0; index < responses.Count; index++) {
            responses.__thisIndexer(index).Domain = this.Domains[index];
        }
    }
    Validate(): void { super.Validate(); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteAttributeValue(
            "xmlns",
            EwsUtilities.AutodiscoverSoapNamespacePrefix,
            EwsUtilities.AutodiscoverSoapNamespace);
    }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any {
        writer.WriteStartElement(XmlNamespace.Autodiscover, XmlElementNames.Request);

        writer.WriteStartElement(XmlNamespace.Autodiscover, XmlElementNames.Domains);

        for (var domain of  this.Domains) {
            
            //if (!string.IsNullOrEmpty(domain)) {
            if (domain != undefined && domain !== "") {
                writer.WriteElementValue(
                    XmlNamespace.Autodiscover,
                    XmlElementNames.Domain,
                    domain);
            }
        }
        writer.WriteEndElement(); //Domains

        writer.WriteStartElement(XmlNamespace.Autodiscover, XmlElementNames.RequestedSettings);
        for (var setting of this.Settings) {
            
            writer.WriteElementValue(
                XmlNamespace.Autodiscover,
                XmlElementNames.Setting,
                DomainSettingName[setting]);
        }

        writer.WriteEndElement(); //RequestedSettings

        if (this.requestedVersion) {
            writer.WriteElementValue(XmlNamespace.Autodiscover,
                XmlElementNames.RequestedVersion,
                this.requestedVersion);
        }

        writer.WriteEndElement(); //Request
    }
}
    //export module GetDomainSettingsRequest {
    //    export var private static GetDomainSettingsActionUri: string = "http://schemas.microsoft.com/exchange/2010/Autodiscover/Autodiscover/GetDomainSettings";
    //}

export = GetDomainSettingsRequest;

//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;