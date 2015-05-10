import Folder = require("../ServiceObjects/Folders/Folder");
import ExchangeService = require("../ExchangeService");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
import ServiceObjectType = require("../../Enumerations/ServiceObjectType");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import XmlElementNames = require("../XmlElementNames");
import XmlNamespace = require("../../Enumerations/XmlNamespace");
import ServiceResponse = require("../Responses/ServiceResponse");
import FolderIdWrapperList = require("../../Misc/FolderIdWrapperList");

import GetRequest = require("./GetRequest");
class GetFolderRequestBase<TResponse extends ServiceResponse> extends GetRequest<Folder, TResponse> {
    get FolderIds(): FolderIdWrapperList { return this.folderIds; }
    private folderIds: FolderIdWrapperList = new FolderIdWrapperList();

    constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling:any) {
        super(service, errorHandlingModeServiceErrorHandling);
    }

    //AddIdsToRequest(jsonRequest: JsonObject, service: ExchangeService): any{ throw new Error("Not implemented.");}
    GetExpectedResponseMessageCount(): number { return this.FolderIds.Count; }
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    GetResponseMessageXmlElementName(): string { return XmlElementNames.GetFolderResponseMessage; }
    GetResponseXmlElementName(): string { return XmlElementNames.GetFolderResponse; }
    GetServiceObjectType(): ServiceObjectType { return ServiceObjectType.Folder; }
    GetXmlElementName(): string { return XmlElementNames.GetFolder; }
    Validate(): void {
        super.Validate();
        debugger;
        //EwsUtilities.ValidateParamCollection(this.FolderIds, "FolderIds");
        this.FolderIds.Validate(this.Service.RequestedServerVersion);
    }
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        super.WriteElementsToXml(writer);

        this.FolderIds.WriteToXml(
            writer,
            XmlNamespace.Messages,
            XmlElementNames.FolderIds);
    }
}

export = GetFolderRequestBase;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
