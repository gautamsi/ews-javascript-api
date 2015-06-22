import {Folder} from "../Core/ServiceObjects/Folders/Folder";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class AbstractFolderIdWrapper { //IJsonSerializable
    GetFolder(): Folder { return null; }
    //InternalToJson(service: ExchangeService): void { throw new Error("AbstractFolderIdWrapper.ts - InternalToJson : Not implemented."); }
    //object IJsonSerializable.ToJson(ExchangeService service)
    //{
    //      return this.InternalToJson(service);
    //}
    Validate(version: ExchangeVersion): void { /*throw new Error("Not implemented.");*/ }
    WriteToXml(writer: EwsServiceXmlWriter): void { throw new Error("AbstractFolderIdWrapper.ts - WriteToXml - abstract; must implemented."); }
}