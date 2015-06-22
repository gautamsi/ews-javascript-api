import {XmlElementNames} from "../Core/XmlElementNames";
import {AttachmentCollection} from "../ComplexProperties/AttachmentCollection";
import {ComplexPropertyDefinition} from "./ComplexPropertyDefinition";
import {PropertyDefinitionFlags} from "../Enumerations/PropertyDefinitionFlags";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
export class AttachmentsPropertyDefinition extends ComplexPropertyDefinition<AttachmentCollection> {
    private static Exchange2010SP2PropertyDefinitionFlags: PropertyDefinitionFlags = PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.ReuseInstance | PropertyDefinitionFlags.UpdateCollectionItems;
    constructor(propertyName: string){
        super(
            propertyName,
            XmlElementNames.Attachments,
            ExchangeVersion.Exchange2007_SP1,
            "item:Attachments",
            PropertyDefinitionFlags.AutoInstantiateOnRead,
            ()=> { return new AttachmentCollection(); })
    }
    HasFlag(flag: PropertyDefinitionFlags, version: ExchangeVersion): boolean { 
        if (version != null && version >= ExchangeVersion.Exchange2010_SP2)
            {
                return (flag & AttachmentsPropertyDefinition.Exchange2010SP2PropertyDefinitionFlags) == flag;
            }

            return super.HasFlag(flag, version);
        
        throw new Error("AttachmentsPropertyDefinition - HasFlags: Not implemented - something missing."); }
}