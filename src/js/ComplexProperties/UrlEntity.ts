import ExtractedEntity = require("./ExtractedEntity");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");

class UrlEntity extends ExtractedEntity {
    Url: string;
    TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("UrlEntity.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}
export = UrlEntity;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
