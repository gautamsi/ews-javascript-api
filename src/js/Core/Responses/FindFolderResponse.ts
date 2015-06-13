import {ServiceResponse} from "./ServiceResponse";
import {FindFoldersResults} from "../../Search/FindFoldersResults";
import {PropertySet} from "../PropertySet";
import {ExchangeService} from "../ExchangeService";
import {Folder} from "../ServiceObjects/Folders/Folder";
import {JsonObject} from "../JsonObject";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class FindFolderResponse extends ServiceResponse {
    Results: FindFoldersResults;
    private results: FindFoldersResults;
    private propertySet: PropertySet;
    CreateFolderInstance(service: ExchangeService, xmlElementName: string): Folder { throw new Error("FindFolderResponse.ts - CreateFolderInstance : Not implemented."); }
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("FindFolderResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("FindFolderResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}

