import ServiceError = require("../Enumerations/ServiceError");
import RuleOperationErrorCollection = require("../ComplexProperties/RuleOperationErrorCollection");
import ServiceResponse = require("../Core/Responses/ServiceResponse");

import Exception = require("./Exception");
import ServiceRemoteException = require("./ServiceRemoteException");
class UpdateInboxRulesException extends ServiceRemoteException {
    ServiceResponse: ServiceResponse;
    Errors: RuleOperationErrorCollection;
    ErrorCode: ServiceError;
    ErrorMessage: string;
    private serviceResponse: ServiceResponse;
    private errors: RuleOperationErrorCollection;
}

export = UpdateInboxRulesException;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

