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
var GetFolderResponse_1 = require("../Responses/GetFolderResponse");
var GetFolderRequestBase_1 = require("./GetFolderRequestBase");
/** @internal */
var GetFolderRequestForLoad = /** @class */ (function (_super) {
    __extends(GetFolderRequestForLoad, _super);
    function GetFolderRequestForLoad(service, errorHandlingMode) {
        return _super.call(this, service, errorHandlingMode) || this;
    }
    GetFolderRequestForLoad.prototype.CreateServiceResponse = function (service, responseIndex) {
        return new GetFolderResponse_1.GetFolderResponse(this.FolderIds._getItem(responseIndex).GetFolder(), this.PropertySet);
    };
    return GetFolderRequestForLoad;
}(GetFolderRequestBase_1.GetFolderRequestBase));
exports.GetFolderRequestForLoad = GetFolderRequestForLoad;
