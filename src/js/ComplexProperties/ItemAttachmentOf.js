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
var ItemAttachment_1 = require("./ItemAttachment");
/**
 * Represents a strongly typed item attachment. **Workaround of ItemAttachment<TItem>** - not allowed in typescript to have two class, one generic and one non-generic
 */
var ItemAttachmentOf = /** @class */ (function (_super) {
    __extends(ItemAttachmentOf, _super);
    /**
     * @internal Initializes a new instance of the **ItemAttachmentOf** class.
     *
     * @param   {Item}   owner   The owner of the attachment.
     */
    function ItemAttachmentOf(owner) {
        return _super.call(this, owner) || this;
    }
    Object.defineProperty(ItemAttachmentOf.prototype, "Item", {
        /**
         * Gets the item associated with the attachment.
         */
        get: function () { return this.item; },
        set: function (value) { /** this.Item = value; */ _super.prototype._setItem.call(this, value); },
        enumerable: true,
        configurable: true
    });
    return ItemAttachmentOf;
}(ItemAttachment_1.ItemAttachment));
exports.ItemAttachmentOf = ItemAttachmentOf;
