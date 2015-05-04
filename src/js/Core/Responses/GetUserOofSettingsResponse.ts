import ServiceResponse = require("./ServiceResponse");
import OofSettings = require("../../ComplexProperties/Availability/OofSettings");
class GetUserOofSettingsResponse extends ServiceResponse {
    OofSettings: OofSettings;
    private oofSettings: OofSettings;
}
export = GetUserOofSettingsResponse;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
