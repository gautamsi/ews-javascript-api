import {ClientExtension} from "./ClientExtension";
import {ComplexProperty} from "./ComplexProperty";
import {SetClientExtensionActionId} from "../Enumerations/SetClientExtensionActionId";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class SetClientExtensionAction extends ComplexProperty {
    private setClientExtensionActionId: SetClientExtensionActionId;
    private extensionId: string;
    private clientExtension: ClientExtension;
    /**@internal */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("SetClientExtensionAction.ts - WriteAttributesToXml : Not implemented."); }
    /**@internal */
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("SetClientExtensionAction.ts - WriteElementsToXml : Not implemented."); }
}


//}



