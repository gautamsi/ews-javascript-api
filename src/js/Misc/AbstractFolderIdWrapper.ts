import Folder = require("../Core/ServiceObjects/Folders/Folder");
import ExchangeVersion = require("../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

class AbstractFolderIdWrapper { //IJsonSerializable
    GetFolder(): Folder { return null; }
    //InternalToJson(service: ExchangeService): void { throw new Error("AbstractFolderIdWrapper.ts - InternalToJson : Not implemented."); }
    //object IJsonSerializable.ToJson(ExchangeService service)
    //{
    //      return this.InternalToJson(service);
    //}
    Validate(version: ExchangeVersion): void { /*throw new Error("Not implemented.");*/ }
    WriteToXml(writer: EwsServiceXmlWriter): void { throw new Error("abstract; must implemented."); }
}
export = AbstractFolderIdWrapper;




//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
