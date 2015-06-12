import {EwsServiceXmlReader} from "./EwsServiceXmlReader";
import {EwsLogging} from "../Core/EwsLogging";
import {XmlNamespace} from "../Enumerations/XmlNamespace";

import {StringHelper, Convert} from "../ExtensionMethods";
// todo: should be done
export class ExchangeServerInfo {
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
    static Parse(jsObject: any /*JsonObject*/): ExchangeServerInfo {
        var exchangeServerInfo: ExchangeServerInfo = new ExchangeServerInfo();
        exchangeServerInfo.MajorVersion = Convert.toInt(jsObject["MajorVersion"]);
        exchangeServerInfo.MinorVersion = Convert.toInt(jsObject["MinorVersion"]);
        exchangeServerInfo.MajorBuildNumber = Convert.toInt(jsObject["MajorBuildNumber"]);
        exchangeServerInfo.MinorBuildNumber = Convert.toInt(jsObject["MinorBuildNumber"]);
        exchangeServerInfo.VersionString = jsObject["Version"];
        return exchangeServerInfo;
    }
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
    ToString(): string {
        //return string.Format("{0:d}.{1:d2}.{2:d4}.{3:d3}",
        return StringHelper.Format("{0}.{1}.{2}.{3}",
            this.MajorVersion,
            this.MinorVersion,
            this.MajorBuildNumber,
            this.MinorBuildNumber);
    }
}

