import { ExchangeService } from "../Core/ExchangeService";
import { SendPrompt } from "../Enumerations/SendPrompt";
import { XmlElementNames } from "../Core/XmlElementNames";

import { ComplexProperty } from "./ComplexProperty";
/**
 * Represents voting option information.
 * @sealed
 */
export class VotingOptionData extends ComplexProperty {

    private displayName: string = null;
    private sendPrompt: SendPrompt = SendPrompt.None;

    /**
     * Gets the display name for the voting option.
     */
    get DisplayName(): string {
        return this.displayName;
    }

    /**
     * Gets the send prompt.
     */
    get SendPrompt(): SendPrompt {
        return this.sendPrompt;
    }

    /**
     * @internal Initializes a new instance of the **VotingOptionData** class.
     */
    constructor() {
        super();
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        for (let key in jsObject) {
            switch (key) {
                case XmlElementNames.VotingOptionDisplayName:
                    this.displayName = jsObject[key];
                    break;
                case XmlElementNames.SendPrompt:
                    this.sendPrompt = SendPrompt[<string>jsObject[key]];
                    break;
                default:
                    break;
            }
        }
    }
}
