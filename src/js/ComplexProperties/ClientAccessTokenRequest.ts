import ComplexProperty = require("./ComplexProperty");
import ClientAccessTokenType = require("../Enumerations/ClientAccessTokenType");
class ClientAccessTokenRequest extends ComplexProperty {
    Id: string;
    TokenType: ClientAccessTokenType;
    Scope: string;
    private id: string;
    private tokenType: ClientAccessTokenType;
    private scope: string;
}
export = ClientAccessTokenRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
