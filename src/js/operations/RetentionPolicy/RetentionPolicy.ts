import SimpleServiceRequestBase = require("../../Core/Requests/SimpleServiceRequestBase");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");
import ServiceResponse = require("../../Core/Responses/ServiceResponse");
import JsonObject = require("../../Core/JsonObject");
import ExchangeService = require("../../Core/ExchangeService");
module Microsoft.Exchange.WebServices.Data {

    export class GetUserRetentionPolicyTagsRequest extends SimpleServiceRequestBase {
        Execute(): GetUserRetentionPolicyTagsResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class GetUserRetentionPolicyTagsResponse extends ServiceResponse {
        RetentionPolicyTags: RetentionPolicyTag[];
        private retentionPolicyTags: any[];//System.Collections.Generic.List<T>;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }

    export class RetentionPolicyTag {
        DisplayName: string;
        RetentionId: any;//System.Guid;
        RetentionPeriod: number;
        Type: ElcFolderType;
        RetentionAction: RetentionActionType;
        Description: string;
        IsVisible: boolean;
        OptedInto: boolean;
        IsArchive: boolean;
        LoadFromJson(jsonObject: JsonObject): RetentionPolicyTag{ throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader): RetentionPolicyTag{ throw new Error("Not implemented.");}
    }

}
