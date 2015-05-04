import PagedView = require("./PagedView");
import ItemTraversal = require("../Enumerations/ItemTraversal");
import OrderByCollection = require("./OrderByCollection");
import ExchangeService = require("../Core/ExchangeService");
import ServiceObjectType = require("../Enumerations/ServiceObjectType");
import ServiceRequestBase = require("../Core/Requests/ServiceRequestBase");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import Grouping = require("./Grouping");
class ItemView extends PagedView {
    Traversal: ItemTraversal;
    OrderBy: OrderByCollection;
    private traversal: ItemTraversal;
    private orderBy: OrderByCollection;
    AddJsonProperties(jsonRequest: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
    GetServiceObjectType(): ServiceObjectType { throw new Error("Not implemented."); }
    GetViewJsonTypeName(): string { throw new Error("Not implemented."); }
    GetViewXmlElementName(): string { throw new Error("Not implemented."); }
    InternalValidate(request: ServiceRequestBase): any { throw new Error("Not implemented."); }
    InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any { throw new Error("Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    WriteOrderByToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = ItemView;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
