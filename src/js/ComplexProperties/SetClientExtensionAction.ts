import ClientExtension = require("./ClientExtension");
import ComplexProperty = require("./ComplexProperty");
import SetClientExtensionActionId = require("../Enumerations/SetClientExtensionActionId");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

class SetClientExtensionAction extends ComplexProperty {
    private setClientExtensionActionId: SetClientExtensionActionId;
    private extensionId: string;
    private clientExtension: ClientExtension;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("SetClientExtensionAction.ts - WriteAttributesToXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("SetClientExtensionAction.ts - WriteElementsToXml : Not implemented."); }
}
export = SetClientExtensionAction;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
