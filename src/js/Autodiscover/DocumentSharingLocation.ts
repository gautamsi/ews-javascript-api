import {EwsXmlReader} from "../Core/EwsXmlReader";

export class DocumentSharingLocation {
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
    LoadFromXml(reader: EwsXmlReader): DocumentSharingLocation { throw new Error("DocumentSharingLocation.ts - LoadFromXml : Not implemented."); }
    static LoadFromJson(obj: any): DocumentSharingLocation { throw new Error("this was skipped at dev time, fix this"); }

}
