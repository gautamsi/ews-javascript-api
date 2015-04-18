import XmlElementNames = require("../../Core/XmlElementNames");

import GetUserSettingsResponse = require("./GetUserSettingsResponse");
import AutodiscoverResponseCollection = require("../AutodiscoverResponseCollection");
class GetUserSettingsResponseCollection extends AutodiscoverResponseCollection<GetUserSettingsResponse> {
    CreateResponseInstance(): GetUserSettingsResponse { return new GetUserSettingsResponse(); }
    GetResponseCollectionXmlElementName(): string { return XmlElementNames.UserResponses; }
    GetResponseInstanceXmlElementName(): string { return XmlElementNames.UserResponse; }
}

export = GetUserSettingsResponseCollection;

//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;