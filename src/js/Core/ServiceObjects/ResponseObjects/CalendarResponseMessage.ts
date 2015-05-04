import CalendarResponseMessageBase = require("./CalendarResponseMessageBase");
import EmailAddressCollection = require("../../../ComplexProperties/EmailAddressCollection");
import Sensitivity = require("../../../Enumerations/Sensitivity");
import AttachmentCollection = require("../../../ComplexProperties/AttachmentCollection");
import EmailAddress = require("../../../ComplexProperties/EmailAddress");
import ServiceObjectSchema = require("../Schemas/ServiceObjectSchema");
   class CalendarResponseMessage<TMessage> extends CalendarResponseMessageBase<TMessage> {
        Body: MessageBody;
        ToRecipients: EmailAddressCollection;
        CcRecipients: EmailAddressCollection;
        BccRecipients: EmailAddressCollection;
        ItemClass: string;
        Sensitivity: Sensitivity;
        Attachments: AttachmentCollection;
        InternetMessageHeaders: InternetMessageHeaderCollection;
        Sender: EmailAddress;
        GetSchema(): ServiceObjectSchema { throw new Error("Not implemented."); }
}

   export = CalendarResponseMessage;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

