import {ServiceError} from "../../Enumerations/ServiceError";
import {XmlElementNames} from "../XmlElementNames";
import {NameResolutionCollection} from "../../Misc/NameResolutionCollection";
import {ExchangeService} from "../ExchangeService";
import {EwsLogging} from "../EwsLogging";
import {ServiceResponse} from "./ServiceResponse";
export class ResolveNamesResponse extends ServiceResponse {
    private resolutions: NameResolutionCollection = null;
    get Resolutions(): NameResolutionCollection {
        return this.resolutions;
    }
    constructor(service: ExchangeService) {
        super();
        EwsLogging.Assert(service !== null, "ResolveNamesResponse.ctor", "service is null");
        this.resolutions = new NameResolutionCollection(service);
    }

    InternalThrowIfNecessary(): void {
        if (this.ErrorCode != ServiceError.ErrorNameResolutionNoResults) {
            super.InternalThrowIfNecessary();
        }
    }
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
        
        this.Resolutions.LoadFromXmlJsObject(responseObject[XmlElementNames.ResolutionSet], service);
    }
}
