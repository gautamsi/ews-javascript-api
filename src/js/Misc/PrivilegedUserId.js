"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConnectingIdType_1 = require("../Enumerations/ConnectingIdType");
var PrivilegedLogonType_1 = require("../Enumerations/PrivilegedLogonType");
var PrivilegedUserIdBudgetType_1 = require("../Enumerations/PrivilegedUserIdBudgetType");
var ExchangeVersion_1 = require("../Enumerations/ExchangeVersion");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var XmlElementNames_1 = require("../Core/XmlElementNames");
//todo: should be done
/** @internal */
var PrivilegedUserId = /** @class */ (function () {
    //private logonType: PrivilegedLogonType;
    //private idType: ConnectingIdType;
    //private id: string;
    //private budgetType: PrivilegedUserIdBudgetType;
    function PrivilegedUserId(openType, idType, id) {
        this.LogonType = openType;
        this.IdType = idType;
        this.Id = id;
    }
    PrivilegedUserId.prototype.WriteToXml = function (writer, requestedServerVersion) {
        if (this.Id == null || this.Id === undefined || this.Id === "") {
            throw new Error("id can not be null");
        }
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.OpenAsAdminOrSystemService);
        writer.WriteAttributeString(XmlElementNames_1.XmlElementNames.LogonType, PrivilegedLogonType_1.PrivilegedLogonType[this.LogonType]);
        if (requestedServerVersion >= ExchangeVersion_1.ExchangeVersion.Exchange2013 && this.BudgetType) {
            writer.WriteAttributeString(XmlElementNames_1.XmlElementNames.BudgetType, PrivilegedUserIdBudgetType_1.PrivilegedUserIdBudgetType[this.BudgetType]);
        }
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.ConnectingSID);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, ConnectingIdType_1.ConnectingIdType[this.IdType], this.Id);
        writer.WriteEndElement(); // ConnectingSID
        writer.WriteEndElement(); // OpenAsAdminOrSystemService
    };
    return PrivilegedUserId;
}());
exports.PrivilegedUserId = PrivilegedUserId;
