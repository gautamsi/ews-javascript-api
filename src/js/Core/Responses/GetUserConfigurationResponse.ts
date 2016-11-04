import { EwsLogging } from '../EwsLogging';
import { ExchangeService } from "../ExchangeService";
import { UserConfiguration } from "../../Misc/UserConfiguration";
import { XmlElementNames } from "../XmlElementNames";

import { ServiceResponse } from "./ServiceResponse";
/**
 * @internal Represents a response to a GetUserConfiguration request.
 * 
 * @sealed
 */
export class GetUserConfigurationResponse extends ServiceResponse {

    private userConfiguration: UserConfiguration = null;

    /**
     * Gets the user configuration that was created.
     */
    get UserConfiguration(): UserConfiguration {
        return this.userConfiguration;
    }

    /**
     * @internal Initializes a new instance of the **GetUserConfigurationResponse** class.
     *
     * @param   {UserConfiguration}   userConfiguration   The userConfiguration.
     */
    constructor(userConfiguration: UserConfiguration) {
        super();
        EwsLogging.Assert(userConfiguration !== null, "GetUserConfigurationResponse.ctor", "userConfiguration is null");
        this.userConfiguration = userConfiguration;
    }

    /**
     * @internal Reads response elements from XML parsed to JS Object.
     *
     * @param   {any}               responseObject   The response object.
     * @param   {ExchangeService}   service          The service.
     */
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
        this.UserConfiguration.LoadFromXmlJsObject(responseObject[XmlElementNames.UserConfiguration], service);
    }
}