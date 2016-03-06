import {Schemas} from "./Schemas";

import {ServiceObjectSchema} from "./ServiceObjectSchema";
export class PostReplySchema extends ServiceObjectSchema {

    static Instance: PostReplySchema = new PostReplySchema();

    RegisterProperties(): void {
        super.RegisterProperties();
        super.RegisterProperty(Schemas.ItemSchema.Subject);
        super.RegisterProperty(Schemas.ItemSchema.Body);
        super.RegisterProperty(Schemas.ResponseObjectSchema.ReferenceItemId);
        super.RegisterProperty(Schemas.ResponseObjectSchema.BodyPrefix);
    }
}