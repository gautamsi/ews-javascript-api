			
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
	LoadFromJson(jsonObject: JsonObject): RetentionPolicyTag{ throw new Error("Not implemented.");}
	LoadFromXml(reader: EwsServiceXmlReader): RetentionPolicyTag{ throw new Error("Not implemented.");}
}
export = RetentionPolicyTag;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			