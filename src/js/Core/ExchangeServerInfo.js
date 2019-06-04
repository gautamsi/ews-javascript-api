"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionMethods_1 = require("../ExtensionMethods");
// todo: should be done
var ExchangeServerInfo = /** @class */ (function () {
    function ExchangeServerInfo() {
    }
    //private majorVersion: number;
    //private minorVersion: number;
    //private majorBuildNumber: number;
    //private minorBuildNumber: number;
    //private versionString: string;
    ExchangeServerInfo.Parse = function (jsObject /*JsonObject*/) {
        var exchangeServerInfo = new ExchangeServerInfo();
        exchangeServerInfo.MajorVersion = ExtensionMethods_1.Convert.toInt(jsObject["MajorVersion"]);
        exchangeServerInfo.MinorVersion = ExtensionMethods_1.Convert.toInt(jsObject["MinorVersion"]);
        exchangeServerInfo.MajorBuildNumber = ExtensionMethods_1.Convert.toInt(jsObject["MajorBuildNumber"]);
        exchangeServerInfo.MinorBuildNumber = ExtensionMethods_1.Convert.toInt(jsObject["MinorBuildNumber"]);
        exchangeServerInfo.VersionString = jsObject["Version"];
        return exchangeServerInfo;
    };
    //    static Parse(reader: EwsServiceXmlReader): ExchangeServerInfo {
    //        EwsLogging.Assert(
    //            reader.HasAttributes,
    //            "ExchangeServerVersion.Parse",
    //            "Current element doesn't have attributes");
    //
    //        var info = new ExchangeServerInfo();
    //        info.MajorVersion = +(reader.ReadAttributeValue(XmlNamespace.Types, "MajorVersion"));
    //        info.MinorVersion = +(reader.ReadAttributeValue(XmlNamespace.Types, "MinorVersion"));
    //        info.MajorBuildNumber = +(reader.ReadAttributeValue(XmlNamespace.Types, "MajorBuildNumber"));
    //        info.MinorBuildNumber = +(reader.ReadAttributeValue(XmlNamespace.Types, "MinorBuildNumber"));
    //        info.VersionString = reader.ReadAttributeValue(XmlNamespace.Types, "Version");
    //        return info;
    //    }
    ExchangeServerInfo.prototype.ToString = function () {
        //return string.Format("{0:d}.{1:d2}.{2:d4}.{3:d3}",
        return ExtensionMethods_1.StringHelper.Format("{0}.{1}.{2}.{3}", this.MajorVersion, this.MinorVersion, this.MajorBuildNumber, this.MinorBuildNumber);
    };
    return ExchangeServerInfo;
}());
exports.ExchangeServerInfo = ExchangeServerInfo;
