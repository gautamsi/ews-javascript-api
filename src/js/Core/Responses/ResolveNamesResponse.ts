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
    ReadElementsFromJson(responseObject: any, service: ExchangeService): void { throw new Error("ResolveNamesResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
        super.ReadElementsFromJson(responseObject, service);

        this.Resolutions.LoadFromXmlJsObject(responseObject[XmlElementNames.ResolutionSet], service);
    }
}
