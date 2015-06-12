import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
import {Mailbox} from "../../ComplexProperties/Mailbox";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class DelegateManagementRequestBase<TResponse> extends SimpleServiceRequestBase {
    Mailbox: Mailbox;
    private mailbox: Mailbox;
    CreateResponse(): TResponse { throw new Error("DelegateManagementRequestBase.ts - CreateResponse : Not implemented."); }
    Execute(): TResponse { throw new Error("DelegateManagementRequestBase.ts - Execute : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("DelegateManagementRequestBase.ts - ParseResponse : Not implemented."); }
    Validate(): any { throw new Error("DelegateManagementRequestBase.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("DelegateManagementRequestBase.ts - WriteElementsToXml : Not implemented."); }
}



//}



