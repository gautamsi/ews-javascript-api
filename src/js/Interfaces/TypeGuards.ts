import { ICalendarActionProvider } from "./ICalendarActionProvider";
import { ICustomUpdateSerializer } from "./ICustomXmlUpdateSerializer";
import { IEwsHttpWebRequest } from "./IEwsHttpWebRequest";
import { IEwsHttpWebRequestFactory } from "./IEwsHttpWebRequestFactory";
import { IEwsHttpWebResponse } from "./IEwsHttpWebResponse";
import { IFileAttachmentContentHandler } from "./IFileAttachmentContentHandler";
import { IJsonCollectionDeserializer } from "./IJsonCollectionDeserializer";
import { IJsonSerializable } from "./IJSonSerializable";
import { IOutParam } from "./IOutParam";
import { IOwnedProperty } from "./IOwnedProperty";
import { IRefParam } from "./IRefParam";
import { ISearchStringProvider } from "./ISearchStringProvider";
import { ISelfValidate } from "./ISelfValidate";
import { ITraceListener } from "./ITraceListener";

/** @internal */
export module TypeGuards {

    /**
     * check if the object implements ICalendarActionProvider interface
     */
    export function isICalendarActionProvider(arg: any): arg is ICalendarActionProvider {
        return arg && typeof arg.Accept === 'function' && typeof arg.CreateDeclineMessage === 'function';
    }

    /**
     * check if the object implements ICustomUpdateSerializer interface
     */
    export function isICustomUpdateSerializer(arg: any): arg is ICustomUpdateSerializer {
        return arg && typeof arg.WriteSetUpdateToXml === 'function' && typeof arg.WriteDeleteUpdateToXml === 'function';
    }

    /**
     * check if the object implements IFileAttachmentContentHandler interface
     */
    export function isIFileAttachmentContentHandler(arg: any): arg is IFileAttachmentContentHandler {
        return arg && typeof arg.GetOutputStream === 'function';
    }

    /**
     * check if the object implements IOwnedProperty interface
     */
    export function isIOwnedProperty(arg: any): arg is IOwnedProperty {
        return arg && typeof arg.Owner === 'object';
    }

    /**
     * check if the object implements ISearchStringProvider interface
     */
    export function isISearchStringProvider(arg: any): arg is ISearchStringProvider {
        return arg && typeof arg.GetSearchString === 'function';
    }

    /**
     * check if the object implements ISelfValidate interface
     */
    export function isISelfValidate(arg: any): arg is ISelfValidate {
        return arg && typeof arg.Validate === 'function';
    }

    /**
     * check if the object implements ITraceListener interface
     */
    export function isITraceListener(arg: any): arg is ITraceListener {
        return arg && typeof arg.Trace === 'function';
    }

    /** Not yet Used */
    // export function isIEwsHttpWebRequest(arg: IEwsHttpWebRequest): arg is IEwsHttpWebRequest {
    //     return arg && typeof arg === 'function';
    // }

    // export function isIEwsHttpWebRequestFactory(arg: IEwsHttpWebRequestFactory): arg is IEwsHttpWebRequestFactory {
    //     return arg && typeof arg === 'function';
    // }

    // export function isIEwsHttpWebResponse(arg: IEwsHttpWebResponse): arg is IEwsHttpWebResponse {
    //     return arg && typeof arg === 'function';
    // }

    // export function isIJsonCollectionDeserializer(arg: IJsonCollectionDeserializer): arg is IJsonCollectionDeserializer {
    //     return arg && typeof arg.CreateFromJsonCollection === 'function' && typeof arg.UpdateFromJsonCollection === 'function';
    // }

    // export function isIJsonSerializable(arg: IJsonSerializable): arg is IJsonSerializable {
    //     return arg && typeof arg.ToJson === 'function';
    // }
}