import ExtractedEntity = require("./ExtractedEntity");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");

    class AddressEntity extends ExtractedEntity {
        Address: string;
        ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("AddressEntity.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    }
export = AddressEntity;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
