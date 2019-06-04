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
var XmlElementNames_1 = require("../XmlElementNames");
var FolderChange_1 = require("../../Sync/FolderChange");
var SyncResponse_1 = require("./SyncResponse");
/**
 * Represents the response to a folder synchronization operation.
 *
 * @sealed
 */
var SyncFolderHierarchyResponse = /** @class */ (function (_super) {
    __extends(SyncFolderHierarchyResponse, _super);
    /**
     * @internal Initializes a new instance of the **SyncFolderHierarchyResponse** class.
     *
     * @param   {PropertySet}   propertySet   PropertySet from request.
     */
    function SyncFolderHierarchyResponse(propertySet) {
        return _super.call(this, propertySet) || this;
    }
    Object.defineProperty(SyncFolderHierarchyResponse.prototype, "SummaryPropertiesOnly", {
        /**
         * @internal Gets a value indicating whether this request returns full or summary properties.
         *
         * @value	*true* if summary properties only; otherwise, *false*.
         */
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Creates an item change instance.
     *
     * @return  {ItemChange}      ItemChange instance
     */
    SyncFolderHierarchyResponse.prototype.CreateChangeInstance = function () {
        return new FolderChange_1.FolderChange();
    };
    /**
     * @internal Gets the name of the change element.
     *
     * @return  {string}      Change element name.
     */
    SyncFolderHierarchyResponse.prototype.GetChangeElementName = function () {
        return XmlElementNames_1.XmlElementNames.Folder;
    };
    /**
     * @internal Gets the name of the change id element.
     *
     * @return  {string}      Change id element name.
     */
    SyncFolderHierarchyResponse.prototype.GetChangeIdElementName = function () {
        return XmlElementNames_1.XmlElementNames.FolderId;
    };
    /**
     * @internal Gets the name of the includes last in range XML element.
     *
     * @return  {string}      XML element name.
     */
    SyncFolderHierarchyResponse.prototype.GetIncludesLastInRangeXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.IncludesLastFolderInRange;
    };
    return SyncFolderHierarchyResponse;
}(SyncResponse_1.SyncResponse));
exports.SyncFolderHierarchyResponse = SyncFolderHierarchyResponse;
