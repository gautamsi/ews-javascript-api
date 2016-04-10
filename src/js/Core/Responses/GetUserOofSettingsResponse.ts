import {OofSettings} from "../../ComplexProperties/Availability/OofSettings";

import {ServiceResponse} from "./ServiceResponse";
/**
 * @internal Represents response to GetUserOofSettings request.
 */
export class GetUserOofSettingsResponse extends ServiceResponse {
    private oofSettings: OofSettings = null;

    /**
     * Gets or sets the OOF settings.
     *
     * @value The oof settings.
     */
    get OofSettings(): OofSettings {
        return this.oofSettings;
    }
    set OofSettings(value: OofSettings) {
        this.oofSettings = value;
    }

    /**
     * @internal Initializes a new instance of the **GetUserOofSettingsResponse** class.
     */
    constructor() {
        super();
    }
}