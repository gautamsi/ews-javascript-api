import {ItemSchema} from "./ItemSchema";
import {ResponseObjectSchema} from "./ResponseObjectSchema";
import {ServiceObjectSchema} from "./ServiceObjectSchema";
export class PostReplySchema extends ServiceObjectSchema {
    static Instance: PostReplySchema = new PostReplySchema();
    RegisterProperties(): void {
        super.RegisterProperties();
        super.RegisterProperty(ItemSchema.Subject);
        super.RegisterProperty(ItemSchema.Body);
        super.RegisterProperty(ResponseObjectSchema.ReferenceItemId);
        super.RegisterProperty(ResponseObjectSchema.BodyPrefix);
    }
}