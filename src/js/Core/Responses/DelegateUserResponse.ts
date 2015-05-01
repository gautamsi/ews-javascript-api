class DelegateUserResponse extends ServiceResponse {
    DelegateUser: DelegateUser;
    private readDelegateUser: boolean;
    private delegateUser: DelegateUser;
    ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = DelegateUserResponse;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
