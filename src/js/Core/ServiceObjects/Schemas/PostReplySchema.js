"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Schemas_1 = require("./Schemas");
var ServiceObjectSchema_1 = require("./ServiceObjectSchema");
/**
 * Represents PostReply schema definition.
 */
var PostReplySchema = /** @class */ (function (_super) {
    __extends(PostReplySchema, _super);
    function PostReplySchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    PostReplySchema.prototype.RegisterProperties = function () {
        _super.prototype.RegisterProperties.call(this);
        this.RegisterProperty(PostReplySchema, Schemas_1.Schemas.ItemSchema.Subject);
        this.RegisterProperty(PostReplySchema, Schemas_1.Schemas.ItemSchema.Body);
        this.RegisterProperty(PostReplySchema, Schemas_1.Schemas.ResponseObjectSchema.ReferenceItemId);
        this.RegisterProperty(PostReplySchema, Schemas_1.Schemas.ResponseObjectSchema.BodyPrefix);
    };
    /**
     * @internal Instance of **PostReplySchema**
     */
    PostReplySchema.Instance = new PostReplySchema();
    return PostReplySchema;
}(ServiceObjectSchema_1.ServiceObjectSchema));
exports.PostReplySchema = PostReplySchema;
