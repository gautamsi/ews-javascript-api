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
var XmlElementNames_1 = require("../Core/XmlElementNames");
var AttachmentCollection_1 = require("../ComplexProperties/AttachmentCollection");
var PropertyDefinitionFlags_1 = require("../Enumerations/PropertyDefinitionFlags");
var ExchangeVersion_1 = require("../Enumerations/ExchangeVersion");
var ComplexPropertyDefinition_1 = require("./ComplexPropertyDefinition");
/**
 * @internal Represents base Attachments property type.
 */
var AttachmentsPropertyDefinition = /** @class */ (function (_super) {
    __extends(AttachmentsPropertyDefinition, _super);
    /**
     * Initializes a new instance of the **AttachmentsPropertyDefinition** class.
     *
     * @param   {string}    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     */
    function AttachmentsPropertyDefinition(propertyName) {
        return _super.call(this, propertyName, XmlElementNames_1.XmlElementNames.Attachments, "item:Attachments", PropertyDefinitionFlags_1.PropertyDefinitionFlags.AutoInstantiateOnRead, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new AttachmentCollection_1.AttachmentCollection(); }) || this;
    }
    /**
     * @internal Determines whether the specified flag is set.
     *
     * @param   {PropertyDefinitionFlags}   flag      The flag.
     * @param   {ExchangeVersion}           version   Requested version.
     * @return  {boolean}                   true if the specified flag is set; otherwise, false.
     */
    AttachmentsPropertyDefinition.prototype.HasFlag = function (flag, version) {
        if (version && version >= ExchangeVersion_1.ExchangeVersion.Exchange2010_SP2) {
            return (flag & AttachmentsPropertyDefinition.Exchange2010SP2PropertyDefinitionFlags) == flag;
        }
        return _super.prototype.HasFlag.call(this, flag, version);
    };
    AttachmentsPropertyDefinition.Exchange2010SP2PropertyDefinitionFlags = PropertyDefinitionFlags_1.PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.ReuseInstance | PropertyDefinitionFlags_1.PropertyDefinitionFlags.UpdateCollectionItems;
    return AttachmentsPropertyDefinition;
}(ComplexPropertyDefinition_1.ComplexPropertyDefinition));
exports.AttachmentsPropertyDefinition = AttachmentsPropertyDefinition;
