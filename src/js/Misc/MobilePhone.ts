import ISelfValidate = require("../Interfaces/ISelfValidate");
class MobilePhone implements ISelfValidate {
    Name: string;
    PhoneNumber: string;
    private name: string;
    private phoneNumber: string;
    Validate(): any {throw new Error("Not implemented");};
}
export = MobilePhone;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
