"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AutodiscoverErrorCode_1 = require("../Enumerations/AutodiscoverErrorCode");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var DomainSettingError = /** @class */ (function () {
    function DomainSettingError() {
    }
    //private errorCode: AutodiscoverErrorCode;
    //private errorMessage: string;
    //private settingName: string;
    DomainSettingError.prototype.LoadFromObject = function (obj) {
        var errorstring = obj[XmlElementNames_1.XmlElementNames.ErrorCode];
        this.ErrorCode = AutodiscoverErrorCode_1.AutodiscoverErrorCode[errorstring];
        this.ErrorMessage = obj[XmlElementNames_1.XmlElementNames.ErrorMessage];
        this.SettingName = obj[XmlElementNames_1.XmlElementNames.SettingName];
    };
    /**@internal */
    DomainSettingError.prototype.LoadFromXml = function (reader) {
        var parent = reader.CurrentNode;
        do {
            reader.Read();
            if (reader.NodeType == Node.ELEMENT_NODE) {
                switch (reader.LocalName) {
                    case XmlElementNames_1.XmlElementNames.ErrorCode:
                        var errorstring = reader.ReadElementValue();
                        this.ErrorCode = AutodiscoverErrorCode_1.AutodiscoverErrorCode[errorstring];
                        break;
                    case XmlElementNames_1.XmlElementNames.ErrorMessage:
                        this.ErrorMessage = reader.ReadElementValue();
                        break;
                    case XmlElementNames_1.XmlElementNames.SettingName:
                        this.SettingName = reader.ReadElementValue();
                        break;
                }
            }
        } while (reader.HasRecursiveParentNode(parent, parent.localName));
        reader.SeekLast(); // fix xml treewalker to go back last node, next do..while loop will come back to current node.
    };
    return DomainSettingError;
}());
exports.DomainSettingError = DomainSettingError;
