import {ElcFolderType} from "../Enumerations/ElcFolderType";
import {RetentionActionType} from "../Enumerations/RetentionActionType";
import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class RetentionPolicyTag {
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






			

