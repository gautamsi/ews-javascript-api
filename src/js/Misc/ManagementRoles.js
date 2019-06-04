"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var XmlElementNames_1 = require("../Core/XmlElementNames");
//todo: json not implemented, should be done otherwise
var ManagementRoles = /** @class */ (function () {
    function ManagementRoles(userRoles, applicationRoles) {
        if (userRoles) {
            this.userRoles = userRoles;
        }
        if (applicationRoles) {
            this.applicationRoles = applicationRoles;
        }
    }
    //ToJsonObject(): Microsoft.Exchange.WebServices.Data.JsonObject { throw new Error("ManagementRoles.ts - ToJsonObject : Not implemented."); }
    /**@internal */
    ManagementRoles.prototype.WriteRolesToXml = function (writer, roles, elementName) {
        if (roles && roles.length > 0) {
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, elementName);
            for (var _i = 0, roles_1 = roles; _i < roles_1.length; _i++) {
                var role = roles_1[_i];
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Role, role);
            }
            writer.WriteEndElement();
        }
    };
    /**@internal */
    ManagementRoles.prototype.WriteToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.ManagementRole);
        this.WriteRolesToXml(writer, this.userRoles, XmlElementNames_1.XmlElementNames.UserRoles);
        this.WriteRolesToXml(writer, this.applicationRoles, XmlElementNames_1.XmlElementNames.ApplicationRoles);
        writer.WriteEndElement();
    };
    return ManagementRoles;
}());
exports.ManagementRoles = ManagementRoles;
