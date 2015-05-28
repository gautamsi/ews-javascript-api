import ElcFolderType = require("../Enumerations/ElcFolderType");
import RetentionActionType = require("../Enumerations/RetentionActionType");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
			
 class RetentionPolicyTag {
	DisplayName: string;
	RetentionId: any /*System.Guid*/;
	RetentionPeriod: number;
	Type: ElcFolderType;
	RetentionAction: RetentionActionType;
	Description: string;
	IsVisible: boolean;
	OptedInto: boolean;
	IsArchive: boolean;
	LoadFromJson(jsonObject: JsonObject): RetentionPolicyTag{ throw new Error("RetentionPolicyTag.ts - LoadFromJson : Not implemented.");}
	LoadFromXml(reader: EwsServiceXmlReader): RetentionPolicyTag{ throw new Error("RetentionPolicyTag.ts - LoadFromXml : Not implemented.");}
}
export = RetentionPolicyTag;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
