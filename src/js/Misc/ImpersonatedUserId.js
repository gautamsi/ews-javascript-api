"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConnectingIdType_1 = require("../Enumerations/ConnectingIdType");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ExchangeVersion_1 = require("../Enumerations/ExchangeVersion");
var XmlElementNames_1 = require("../Core/XmlElementNames");
//todo: should be done
var ImpersonatedUserId = /** @class */ (function () {
    //private idType: ConnectingIdType;
    //private id: string;
    function ImpersonatedUserId(idType, id) {
        this.IdType = idType;
        this.Id = id;
    }
    /**@internal */
    ImpersonatedUserId.prototype.WriteToXml = function (writer) {
        if (!this.Id || this.Id === "") {
            throw new Error("Id property must be set before serialization"); // ArgumentException(Strings.IdPropertyMustBeSet);
        }
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.ExchangeImpersonation);
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.ConnectingSID);
        // For 2007 SP1, use PrimarySmtpAddress for type SmtpAddress
        var connectingIdTypeLocalName = (this.IdType == ConnectingIdType_1.ConnectingIdType.SmtpAddress) && (writer.Service.RequestedServerVersion == ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1)
            ? XmlElementNames_1.XmlElementNames.PrimarySmtpAddress
            : ConnectingIdType_1.ConnectingIdType[this.IdType];
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, connectingIdTypeLocalName, this.Id);
        writer.WriteEndElement(); // ConnectingSID
        writer.WriteEndElement(); // ExchangeImpersonation
    };
    return ImpersonatedUserId;
}());
exports.ImpersonatedUserId = ImpersonatedUserId;
