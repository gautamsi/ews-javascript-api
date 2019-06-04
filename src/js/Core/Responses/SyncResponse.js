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
var ChangeCollection_1 = require("../../Sync/ChangeCollection");
var ChangeType_1 = require("../../Enumerations/ChangeType");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var EwsLogging_1 = require("../EwsLogging");
var EwsServiceJsonReader_1 = require("../EwsServiceJsonReader");
var FolderInfo_1 = require("../ServiceObjects/Folders/FolderInfo");
var ItemChange_1 = require("../../Sync/ItemChange");
var ItemInfo_1 = require("../ServiceObjects/Items/ItemInfo");
var ServiceObjectInfo_1 = require("../ServiceObjects/ServiceObjectInfo");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * Represents the base response class for synchronuization operations.
 *
 * @sealed
 * @typeparam	{TServiceObject}	ServiceObject type.
 * @typeparam	{TChange}	Change type.
 */
var SyncResponse = /** @class */ (function (_super) {
    __extends(SyncResponse, _super);
    /**
     * @internal Initializes a new instance of the **SyncResponse<TServiceObject, TChange>** class.
     *
     * @param   {PropertySet}   propertySet   Property set.
     */
    function SyncResponse(propertySet) {
        var _this = _super.call(this) || this;
        _this.changes = new ChangeCollection_1.ChangeCollection();
        _this.propertySet = null;
        _this.propertySet = propertySet;
        EwsLogging_1.EwsLogging.Assert(_this.propertySet != null, "SyncResponse.ctor", "PropertySet should not be null");
        return _this;
    }
    Object.defineProperty(SyncResponse.prototype, "Changes", {
        /**
         * Gets a list of changes that occurred on the synchronized folder.
         */
        get: function () {
            return this.changes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SyncResponse.prototype, "SummaryPropertiesOnly", {
        /**
         * @internal Gets a value indicating whether this request returns full or summary properties.
         */
        get: function () { return false; /* abstract */ },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    SyncResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        this.Changes.SyncState = responseObject[XmlElementNames_1.XmlElementNames.SyncState];
        this.Changes.MoreChangesAvailable = !ExtensionMethods_1.Convert.toBool(responseObject[this.GetIncludesLastInRangeXmlElementName()]);
        var changesElement = responseObject[XmlElementNames_1.XmlElementNames.Changes];
        var folderInfo = new FolderInfo_1.FolderInfo();
        var itemInfo = new ItemInfo_1.ItemInfo();
        for (var changeElementKey in changesElement) {
            if (changeElementKey.indexOf("__") === 0)
                continue;
            var changeObjs = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(changesElement, changeElementKey);
            for (var _i = 0, changeObjs_1 = changeObjs; _i < changeObjs_1.length; _i++) {
                var changeObj = changeObjs_1[_i];
                var change = this.CreateChangeInstance();
                //let changeType:string = jsChange.ReadAsString(XmlElementNames.ChangeType);
                switch (changeElementKey) {
                    case XmlElementNames_1.XmlElementNames.Create:
                        change.ChangeType = ChangeType_1.ChangeType.Create;
                        break;
                    case XmlElementNames_1.XmlElementNames.Update:
                        change.ChangeType = ChangeType_1.ChangeType.Update;
                        break;
                    case XmlElementNames_1.XmlElementNames.Delete:
                        change.ChangeType = ChangeType_1.ChangeType.Delete;
                        break;
                    case XmlElementNames_1.XmlElementNames.ReadFlagChange:
                        change.ChangeType = ChangeType_1.ChangeType.ReadFlagChange;
                        break;
                    default:
                        break;
                }
                var changeObjectTypeName = ExtensionMethods_1.TypeSystem.GetJsObjectOnlyChildName(changeObj);
                var serviceObjectInfo = ServiceObjectInfo_1.ServiceObjectInfo.IsFolderType(changeObjectTypeName) ? folderInfo : itemInfo;
                if (change != null) {
                    var jsServiceObject = changeObj[changeObjectTypeName];
                    switch (change.ChangeType) {
                        case ChangeType_1.ChangeType.Delete:
                        case ChangeType_1.ChangeType.ReadFlagChange:
                            change.Id = change.CreateId();
                            var jsChangeId = changeObj[this.GetChangeIdElementName()];
                            change.Id.LoadFromXmlJsObject(jsChangeId, service);
                            if (change.ChangeType == ChangeType_1.ChangeType.ReadFlagChange) {
                                var itemChange = change;
                                EwsLogging_1.EwsLogging.Assert(change instanceof ItemChange_1.ItemChange, "SyncResponse.ReadElementsFromXmlJsObject", "ReadFlagChange is only valid on ItemChange");
                                itemChange.IsRead = ExtensionMethods_1.Convert.toBool(changeObj[XmlElementNames_1.XmlElementNames.IsRead]);
                            }
                            break;
                        default:
                            change.ServiceObject = serviceObjectInfo.CreateEwsObjectFromXmlElementName(service, changeObjectTypeName);
                            change.ServiceObject.LoadFromXmlJsObject(jsServiceObject, service, true, /* clearPropertyBag */ this.propertySet, this.SummaryPropertiesOnly);
                            break;
                    }
                    this.changes.Add(change);
                }
            }
        }
    };
    return SyncResponse;
}(ServiceResponse_1.ServiceResponse));
exports.SyncResponse = SyncResponse;
