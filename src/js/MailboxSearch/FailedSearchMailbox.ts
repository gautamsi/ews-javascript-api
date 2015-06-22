import {XmlNamespace} from "../Enumerations/XmlNamespace";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class FailedSearchMailbox {
    Mailbox: string;
    ErrorCode: number;
    ErrorMessage: string;
    IsArchive: boolean;
    LoadFailedMailboxesXml(rootXmlNamespace: XmlNamespace, reader: EwsServiceXmlReader): FailedSearchMailbox[] { throw new Error("FailedSearchMailbox.ts - LoadFailedMailboxesXml : Not implemented."); }
}


//}



