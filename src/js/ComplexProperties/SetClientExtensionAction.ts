import ComplexProperty = require("./ComplexProperty");
import SetClientExtensionActionId = require("../Enumerations/SetClientExtensionActionId");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

    class SetClientExtensionAction extends ComplexProperty {
        private setClientExtensionActionId: SetClientExtensionActionId;
        private extensionId: string;
        private clientExtension: ClientExtension;
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
