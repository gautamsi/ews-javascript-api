import {XmlElementNames} from "../Core/XmlElementNames";
import {AttachmentCollection} from "../ComplexProperties/AttachmentCollection";
import {PropertyDefinitionFlags} from "../Enumerations/PropertyDefinitionFlags";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";

import {ComplexPropertyDefinition} from "./ComplexPropertyDefinition";
/**
 * @internal Represents base Attachments property type.
 */
export class AttachmentsPropertyDefinition extends ComplexPropertyDefinition<AttachmentCollection> {
    
    private static Exchange2010SP2PropertyDefinitionFlags: PropertyDefinitionFlags = PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.ReuseInstance | PropertyDefinitionFlags.UpdateCollectionItems;

    /**
     * Initializes a new instance of the **AttachmentsPropertyDefinition** class.
     * 
     * @param   {string}    propertyName     Name of the property (added to workaround reflection based initialization of Names). 
     */
    constructor(propertyName: string) {
        super(
            propertyName,
            XmlElementNames.Attachments,
            "item:Attachments",
            PropertyDefinitionFlags.AutoInstantiateOnRead,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new AttachmentCollection(); })
    }

    /**
     * @internal Determines whether the specified flag is set.
     *
     * @param   {PropertyDefinitionFlags}   flag      The flag.
     * @param   {ExchangeVersion}           version   Requested version.
     * @return  {boolean}                   true if the specified flag is set; otherwise, false.
     */
    HasFlag(flag: PropertyDefinitionFlags, version?: ExchangeVersion): boolean {
        if (version && version >= ExchangeVersion.Exchange2010_SP2) {
            return (flag & AttachmentsPropertyDefinition.Exchange2010SP2PropertyDefinitionFlags) == flag;
        }
        return super.HasFlag(flag, version);
    }
}