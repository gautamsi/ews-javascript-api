import EwsXmlReader = require("../Core/EwsXmlReader");

class DocumentSharingLocation {
    ServiceUrl: string;
    LocationUrl: string;
    DisplayName: string;
    SupportedFileExtensions: string[];// System.Collections.Generic.IEnumerable<string>;
    ExternalAccessAllowed: boolean;
    AnonymousAccessAllowed: boolean;
    CanModifyPermissions: boolean;
    IsDefault: boolean;
    private serviceUrl: string;
    private locationUrl: string;
    private displayName: string;
    private supportedFileExtensions: string[];// System.Collections.Generic.IEnumerable<string>;
    private externalAccessAllowed: boolean;
    private anonymousAccessAllowed: boolean;
    private canModifyPermissions: boolean;
    private isDefault: boolean;
    LoadFromXml(reader: EwsXmlReader): DocumentSharingLocation { throw new Error("Not implemented."); }
}

export = DocumentSharingLocation;



//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;