import {PagedView} from "./PagedView";
import {FolderTraversal} from "../Enumerations/FolderTraversal";
import {ExchangeService} from "../Core/ExchangeService";
import {ServiceObjectType} from "../Enumerations/ServiceObjectType";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class FolderView extends PagedView {
    Traversal: FolderTraversal;
    private traversal: FolderTraversal;
    AddJsonProperties(jsonRequest: any/*JsonObject*/, service: ExchangeService): any { throw new Error("FolderView.ts - AddJsonProperties : Not implemented."); }
    GetServiceObjectType(): ServiceObjectType { throw new Error("FolderView.ts - GetServiceObjectType : Not implemented."); }
    GetViewJsonTypeName(): string { throw new Error("FolderView.ts - GetViewJsonTypeName : Not implemented."); }
    GetViewXmlElementName(): string { throw new Error("FolderView.ts - GetViewXmlElementName : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("FolderView.ts - WriteAttributesToXml : Not implemented."); }
}
