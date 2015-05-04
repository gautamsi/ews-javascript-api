import CreateAttachmentResponse = require("../Core/Responses/CreateAttachmentResponse");
import Exception = require("./Exception");
import BatchServiceResponseException = require("./BatchServiceResponseException");
class CreateAttachmentException extends BatchServiceResponseException<CreateAttachmentResponse> {
}
export = CreateAttachmentException;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;


