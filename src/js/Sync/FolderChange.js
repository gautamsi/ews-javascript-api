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
var FolderId_1 = require("../ComplexProperties/FolderId");
var Change_1 = require("./Change");
/**
 * Represents a change on a folder as returned by a synchronization operation.
 *
 * @sealed
 */
var FolderChange = /** @class */ (function (_super) {
    __extends(FolderChange, _super);
    /**
     * @internal Initializes a new instance of **FolderChange** class.
     */
    function FolderChange() {
        return _super.call(this) || this;
    }
    Object.defineProperty(FolderChange.prototype, "Folder", {
        /**
         * Gets the folder the change applies to. Folder is null when ChangeType is equal to ChangeType.Delete. In that case, use the FolderId property to retrieve the Id of the folder that was deleted.
         */
        get: function () {
            return this.ServiceObject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FolderChange.prototype, "FolderId", {
        /**
         * Gets the Id of the folder the change applies to.
         */
        get: function () {
            return this.Id;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Creates an FolderId instance.
     *
     * @return  {ServiceId}      A FolderId.
     */
    FolderChange.prototype.CreateId = function () {
        return new FolderId_1.FolderId();
    };
    return FolderChange;
}(Change_1.Change));
exports.FolderChange = FolderChange;
