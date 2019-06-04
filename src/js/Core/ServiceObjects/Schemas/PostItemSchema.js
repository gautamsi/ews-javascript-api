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
var DateTimePropertyDefinition_1 = require("../../../PropertyDefinitions/DateTimePropertyDefinition");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var PropertyDefinitionFlags_1 = require("../../../Enumerations/PropertyDefinitionFlags");
var Schemas_1 = require("./Schemas");
var XmlElementNames_1 = require("../../XmlElementNames");
var ItemSchema_1 = require("./ItemSchema");
/**
 * Field URIs for PostItem.
 */
var FieldUris;
(function (FieldUris) {
    FieldUris.PostedTime = "postitem:PostedTime";
})(FieldUris || (FieldUris = {}));
/**
 * Represents the schema for post items.
 */
var PostItemSchema = /** @class */ (function (_super) {
    __extends(PostItemSchema, _super);
    function PostItemSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    PostItemSchema.prototype.RegisterProperties = function () {
        _super.prototype.RegisterProperties.call(this);
        this.RegisterProperty(PostItemSchema, PostItemSchema.ConversationIndex);
        this.RegisterProperty(PostItemSchema, PostItemSchema.ConversationTopic);
        this.RegisterProperty(PostItemSchema, PostItemSchema.From);
        this.RegisterProperty(PostItemSchema, PostItemSchema.InternetMessageId);
        this.RegisterProperty(PostItemSchema, PostItemSchema.IsRead);
        this.RegisterProperty(PostItemSchema, PostItemSchema.PostedTime);
        this.RegisterProperty(PostItemSchema, PostItemSchema.References);
        this.RegisterProperty(PostItemSchema, PostItemSchema.Sender);
    };
    /**
     * Defines the **ConversationIndex** property.
     */
    PostItemSchema.ConversationIndex = Schemas_1.Schemas.EmailMessageSchema.ConversationIndex;
    /**
     * Defines the **ConversationTopic** property.
     */
    PostItemSchema.ConversationTopic = Schemas_1.Schemas.EmailMessageSchema.ConversationTopic;
    /**
     * Defines the **From** property.
     */
    PostItemSchema.From = Schemas_1.Schemas.EmailMessageSchema.From;
    /**
     * Defines the **InternetMessageId** property.
     */
    PostItemSchema.InternetMessageId = Schemas_1.Schemas.EmailMessageSchema.InternetMessageId;
    /**
     * Defines the **IsRead** property.
     */
    PostItemSchema.IsRead = Schemas_1.Schemas.EmailMessageSchema.IsRead;
    /**
     * Defines the **PostedTime** property.
     */
    PostItemSchema.PostedTime = new DateTimePropertyDefinition_1.DateTimePropertyDefinition("PostedTime", XmlElementNames_1.XmlElementNames.PostedTime, FieldUris.PostedTime, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **References** property.
     */
    PostItemSchema.References = Schemas_1.Schemas.EmailMessageSchema.References;
    /**
     * Defines the **Sender** property.
     */
    PostItemSchema.Sender = Schemas_1.Schemas.EmailMessageSchema.Sender;
    /**
     * @internal Instance of **PostItemSchema**
     */
    PostItemSchema.Instance = new PostItemSchema();
    return PostItemSchema;
}(ItemSchema_1.ItemSchema));
exports.PostItemSchema = PostItemSchema;
