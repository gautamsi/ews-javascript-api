import { EwsServiceJsonReader } from "../Core/EwsServiceJsonReader";
import { ExchangeService } from "../Core/ExchangeService";
import { VotingOptionData } from "./VotingOptionData";
import { XmlElementNames } from "../Core/XmlElementNames";

import { ComplexProperty } from "./ComplexProperty";
/**
 * Represents voting information.
 * @sealed
 */
export class VotingInformation extends ComplexProperty {

    private userOptions: VotingOptionData[] = [];
    private votingResponse: string = null;

    /**
     * Gets the list of user options.
     */
    get UserOptions(): VotingOptionData[] {
        return this.userOptions;
    }

    /**
     * Gets the voting response.
     */
    get VotingResponse(): string {
        return this.votingResponse;
    }

    /**
     * @internal Initializes a new instance of the **VotingInformation** class.
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
        if (jsObject[XmlElementNames.UserOptions]) {
            let votingOptionObjects = EwsServiceJsonReader.ReadAsArray(jsObject, XmlElementNames.UserOptions);
            for (let votingOptionObject of votingOptionObjects) {

                let option: VotingOptionData = new VotingOptionData();

                option.LoadFromXmlJsObject(votingOptionObject, service);
                this.userOptions.push(option);
            }
        }

        if (jsObject[XmlElementNames.VotingResponse]) {
            this.votingResponse = jsObject[XmlElementNames.VotingResponse];
        }
    }
}
