import AttachmentCollection = require("../ComplexProperties/AttachmentCollection");
import ComplexPropertyDefinition = require("./ComplexPropertyDefinition");
import PropertyDefinitionFlags = require("../Enumerations/PropertyDefinitionFlags");
import ExchangeVersion = require("../Enumerations/ExchangeVersion");

class AttachmentsPropertyDefinition extends ComplexPropertyDefinition<AttachmentCollection> {
    private static Exchange2010SP2PropertyDefinitionFlags: PropertyDefinitionFlags = PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.ReuseInstance | PropertyDefinitionFlags.UpdateCollectionItems;
    HasFlag(flag: PropertyDefinitionFlags, version: ExchangeVersion): boolean { 
        if (version != null && version >= ExchangeVersion.Exchange2010_SP2)
            {
                return (flag & AttachmentsPropertyDefinition.Exchange2010SP2PropertyDefinitionFlags) == flag;
            }

            return super.HasFlag(flag, version);
        
        throw new Error("AttachmentsPropertyDefinition: Not implemented."); }
}
export = AttachmentsPropertyDefinition;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

