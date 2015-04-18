import EwsServiceXmlReader = require("./EwsServiceXmlReader");
import EwsUtilities = require("./EwsUtilities");
import XmlNamespace = require("../Enumerations/XmlNamespace");

// todo: should be done
 class ExchangeServerInfo {
    MajorVersion: number;
    MinorVersion: number;
    MajorBuildNumber: number;
    MinorBuildNumber: number;
    VersionString: string;
    //private majorVersion: number;
    //private minorVersion: number;
    //private majorBuildNumber: number;
    //private minorBuildNumber: number;
    //private versionString: string;
    //Parse(jsonObject: JsonObject): ExchangeServerInfo{ throw new Error("Not implemented.");}
    static Parse(reader: EwsServiceXmlReader): ExchangeServerInfo {
        EwsUtilities.Assert(
            reader.HasAttributes,
            "ExchangeServerVersion.Parse",
            "Current element doesn't have attributes");

        var info = new ExchangeServerInfo();
        info.MajorVersion = +(reader.ReadAttributeValue(XmlNamespace.Types, "MajorVersion"));
        info.MinorVersion = +(reader.ReadAttributeValue(XmlNamespace.Types, "MinorVersion"));
        info.MajorBuildNumber = +(reader.ReadAttributeValue(XmlNamespace.Types, "MajorBuildNumber"));
        info.MinorBuildNumber = +(reader.ReadAttributeValue(XmlNamespace.Types, "MinorBuildNumber"));
        info.VersionString = reader.ReadAttributeValue(XmlNamespace.Types, "Version");
        return info;
    }
    ToString(): string {
        //return string.Format("{0:d}.{1:d2}.{2:d4}.{3:d3}",
        return string.Format("{0}.{1}.{2}.{3}",
            this.MajorVersion,
            this.MinorVersion,
            this.MajorBuildNumber,
            this.MinorBuildNumber);
    }
}

export = ExchangeServerInfo;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;