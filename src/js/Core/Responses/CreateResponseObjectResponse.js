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
var ItemInfo_1 = require("../ServiceObjects/Items/ItemInfo");
var CreateItemResponseBase_1 = require("./CreateItemResponseBase");
var CreateResponseObjectResponse = /** @class */ (function (_super) {
    __extends(CreateResponseObjectResponse, _super);
    function CreateResponseObjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreateResponseObjectResponse.prototype.GetObjectInstance = function (service, xmlElementName) {
        var itemInfo = new ItemInfo_1.ItemInfo();
        return itemInfo.CreateEwsObjectFromXmlElementName(service, xmlElementName);
        //return EwsUtilities.CreateEwsObjectFromXmlElementName<Item>(service, xmlElementName);
    };
    return CreateResponseObjectResponse;
}(CreateItemResponseBase_1.CreateItemResponseBase));
exports.CreateResponseObjectResponse = CreateResponseObjectResponse;
