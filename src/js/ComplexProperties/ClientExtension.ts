import StringList = require("./StringList");
import ComplexProperty = require("./ComplexProperty");
import ExtensionType = require("../Enumerations/ExtensionType");
import ExtensionInstallScope = require("../Enumerations/ExtensionInstallScope");
import ClientExtensionProvidedTo = require("../Enumerations/ClientExtensionProvidedTo");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

class ClientExtension extends ComplexProperty {
    Type: ExtensionType;
    Scope: ExtensionInstallScope;
    ManifestStream: any;// System.IO.Stream;
    MarketplaceAssetID: string;
    MarketplaceContentMarket: string;
    AppStatus: string;
    Etoken: string;
    IsAvailable: boolean;
    IsMandatory: boolean;
    IsEnabledByDefault: boolean;
    ProvidedTo: ClientExtensionProvidedTo;
    SpecificUsers: StringList;
    ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("ClientExtension.ts - ReadAttributesFromXml : Not implemented."); }
    TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("ClientExtension.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("ClientExtension.ts - WriteAttributesToXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("ClientExtension.ts - WriteElementsToXml : Not implemented."); }
}
export = ClientExtension;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
