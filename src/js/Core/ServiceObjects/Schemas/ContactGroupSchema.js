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
var ComplexPropertyDefinition_1 = require("../../../PropertyDefinitions/ComplexPropertyDefinition");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var GroupMemberCollection_1 = require("../../../ComplexProperties/GroupMemberCollection");
var PropertyDefinitionFlags_1 = require("../../../Enumerations/PropertyDefinitionFlags");
var Schemas_1 = require("./Schemas");
var XmlElementNames_1 = require("../../XmlElementNames");
var ItemSchema_1 = require("./ItemSchema");
/**
 * Field URIs for Members.
 */
var FieldUris;
(function (FieldUris) {
    /**
     * FieldUri for members.
     */
    FieldUris.Members = "distributionlist:Members";
})(FieldUris || (FieldUris = {}));
/**
 * Represents the schema for contact groups.
 */
var ContactGroupSchema = /** @class */ (function (_super) {
    __extends(ContactGroupSchema, _super);
    function ContactGroupSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    ContactGroupSchema.prototype.RegisterProperties = function () {
        _super.prototype.RegisterProperties.call(this);
        this.RegisterProperty(ContactGroupSchema, ContactGroupSchema.DisplayName);
        this.RegisterProperty(ContactGroupSchema, ContactGroupSchema.FileAs);
        this.RegisterProperty(ContactGroupSchema, ContactGroupSchema.Members);
    };
    /**
     * Defines the **DisplayName** property.
     */
    ContactGroupSchema.DisplayName = Schemas_1.Schemas.ContactSchema.DisplayName;
    /**
     * Defines the **FileAs** property.
     */
    ContactGroupSchema.FileAs = Schemas_1.Schemas.ContactSchema.FileAs;
    /**
     * Defines the **Members** property.
     */
    ContactGroupSchema.Members = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("Members", XmlElementNames_1.XmlElementNames.Members, FieldUris.Members, PropertyDefinitionFlags_1.PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate, ExchangeVersion_1.ExchangeVersion.Exchange2010, function () { return new GroupMemberCollection_1.GroupMemberCollection(); });
    /**
     * @internal Instance of **ContactGroupSchema**
     */
    ContactGroupSchema.Instance = new ContactGroupSchema();
    return ContactGroupSchema;
}(ItemSchema_1.ItemSchema));
exports.ContactGroupSchema = ContactGroupSchema;
