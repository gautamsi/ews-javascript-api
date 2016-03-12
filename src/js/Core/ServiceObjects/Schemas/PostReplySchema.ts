import {Schemas} from "./Schemas";

import {ServiceObjectSchema} from "./ServiceObjectSchema";
/**
 * Represents PostReply schema definition.
 */
export class PostReplySchema extends ServiceObjectSchema {

    /**
     * @internal Instance of **PostReplySchema** 
     */
    static Instance: PostReplySchema = new PostReplySchema();

    /**
     * Registers properties.
     * 
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void {
        super.RegisterProperties();
        super.RegisterProperty(Schemas.ItemSchema.Subject);
        super.RegisterProperty(Schemas.ItemSchema.Body);
        super.RegisterProperty(Schemas.ResponseObjectSchema.ReferenceItemId);
        super.RegisterProperty(Schemas.ResponseObjectSchema.BodyPrefix);
    }
}