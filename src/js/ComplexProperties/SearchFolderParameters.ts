import {FolderIdCollection} from "./FolderIdCollection";
import {SearchFilter} from "../Search/Filters/SearchFilter";
import {ComplexProperty} from "./ComplexProperty";
import {SearchFolderTraversal} from "../Enumerations/SearchFolderTraversal";
import {ExchangeService} from "../Core/ExchangeService";
import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class SearchFolderParameters extends ComplexProperty {
    Traversal: SearchFolderTraversal;
    RootFolderIds: FolderIdCollection;
    SearchFilter: SearchFilter;
    private traversal: SearchFolderTraversal;
    private rootFolderIds: FolderIdCollection;
    private searchFilter: SearchFilter;
    InternalToJson(service: ExchangeService): any { throw new Error("SearchFolderParameters.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("SearchFolderParameters.ts - LoadFromJson : Not implemented."); }
    PropertyChanged(complexProperty: ComplexProperty): any { throw new Error("SearchFolderParameters.ts - PropertyChanged : Not implemented."); }
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("SearchFolderParameters.ts - ReadAttributesFromXml : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("SearchFolderParameters.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    Validate(): any { throw new Error("SearchFolderParameters.ts - Validate : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("SearchFolderParameters.ts - WriteAttributesToXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("SearchFolderParameters.ts - WriteElementsToXml : Not implemented."); }
}


//}



