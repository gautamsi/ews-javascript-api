import XmlElementNames = require("../../Core/XmlElementNames");
import GetDomainSettingsResponse = require("./GetDomainSettingsResponse");
import AutodiscoverResponseCollection = require("../AutodiscoverResponseCollection");
class GetDomainSettingsResponseCollection extends AutodiscoverResponseCollection<GetDomainSettingsResponse> {
    CreateResponseInstance(): GetDomainSettingsResponse { return new GetDomainSettingsResponse(); }
    GetResponseCollectionXmlElementName(): string { return XmlElementNames.DomainResponses; }
    GetResponseInstanceXmlElementName(): string { return XmlElementNames.DomainResponse; }
}
export = GetDomainSettingsResponseCollection;


//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;