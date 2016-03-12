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
        this.RegisterProperty(PostReplySchema, Schemas.ItemSchema.Subject);
        this.RegisterProperty(PostReplySchema, Schemas.ItemSchema.Body);
        this.RegisterProperty(PostReplySchema, Schemas.ResponseObjectSchema.ReferenceItemId);
        this.RegisterProperty(PostReplySchema, Schemas.ResponseObjectSchema.BodyPrefix);
    }
}

/**
 * Represents PostReply schema definition.
 */
export interface PostReplySchema {
    /**
     * @internal Instance of **PostReplySchema**
     */
    Instance: PostReplySchema;
}

/**
 * Represents PostReply schema definition.
 */
export interface PostReplySchemaStatic extends PostReplySchema {
}