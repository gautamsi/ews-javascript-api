import {StringList} from "./StringList";
import {ComplexProperty} from "./ComplexProperty";
import {ExtensionType} from "../Enumerations/ExtensionType";
import {ExtensionInstallScope} from "../Enumerations/ExtensionInstallScope";
import {ClientExtensionProvidedTo} from "../Enumerations/ClientExtensionProvidedTo";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";

export class ClientExtension extends ComplexProperty {
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
    /**@internal */
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("ClientExtension.ts - ReadAttributesFromXml : Not implemented."); }
    /**@internal */
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("ClientExtension.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    /**@internal */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("ClientExtension.ts - WriteAttributesToXml : Not implemented."); }
    /**@internal */
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("ClientExtension.ts - WriteElementsToXml : Not implemented."); }
}

