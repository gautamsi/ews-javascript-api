import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
class SearchRefinerItem {
    Name: string;
    Value: string;
    Count: number;
    Token: string;
    LoadFromXml(reader: EwsServiceXmlReader): SearchRefinerItem { throw new Error("Not implemented."); }
}
export = SearchRefinerItem;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
