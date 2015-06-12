import {ServiceResponse} from "./ServiceResponse";
import {Folder} from "../ServiceObjects/Folders/Folder";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class UpdateFolderResponse extends ServiceResponse {
    private folder: Folder;
    GetObjectInstance(session: ExchangeService, xmlElementName: string): Folder { throw new Error("UpdateFolderResponse.ts - GetObjectInstance : Not implemented."); }
    Loaded(): any { throw new Error("UpdateFolderResponse.ts - Loaded : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("UpdateFolderResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}


//}



