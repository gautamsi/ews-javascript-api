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
    ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = ClientExtension;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
