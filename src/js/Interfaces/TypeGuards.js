"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @internal */
var TypeGuards;
(function (TypeGuards) {
    /**
     * check if the object implements EwsEnumInterface interface
     */
    function hasEwsEnumAttribute(arg) {
        return arg && typeof arg.FromEwsEnumString === 'function' && typeof arg.ToEwsEnumString === 'function';
    }
    TypeGuards.hasEwsEnumAttribute = hasEwsEnumAttribute;
    /**
     * check if the object implements EwsEnumInterface interface
     */
    function hasRequiredServerVersionAttribute(arg) {
        return arg && typeof arg.RequiredServerVersion === 'function';
    }
    TypeGuards.hasRequiredServerVersionAttribute = hasRequiredServerVersionAttribute;
    /**
     * check if the object implements ICalendarActionProvider interface
     */
    function isICalendarActionProvider(arg) {
        return arg && typeof arg.Accept === 'function' && typeof arg.CreateDeclineMessage === 'function';
    }
    TypeGuards.isICalendarActionProvider = isICalendarActionProvider;
    /**
     * check if the object implements ICustomUpdateSerializer interface
     */
    function isICustomUpdateSerializer(arg) {
        return arg && typeof arg.WriteSetUpdateToXml === 'function' && typeof arg.WriteDeleteUpdateToXml === 'function';
    }
    TypeGuards.isICustomUpdateSerializer = isICustomUpdateSerializer;
    /**
     * check if the object implements IFileAttachmentContentHandler interface
     */
    function isIFileAttachmentContentHandler(arg) {
        return arg && typeof arg.GetOutputStream === 'function';
    }
    TypeGuards.isIFileAttachmentContentHandler = isIFileAttachmentContentHandler;
    /**
     * check if the object implements IOwnedProperty interface
     */
    function isIOwnedProperty(arg) {
        return arg && typeof arg.Owner === 'object';
    }
    TypeGuards.isIOwnedProperty = isIOwnedProperty;
    /**
     * check if the object implements ISearchStringProvider interface
     */
    function isISearchStringProvider(arg) {
        return arg && typeof arg.GetSearchString === 'function';
    }
    TypeGuards.isISearchStringProvider = isISearchStringProvider;
    /**
     * check if the object implements ISelfValidate interface
     */
    function isISelfValidate(arg) {
        return arg && typeof arg.Validate === 'function';
    }
    TypeGuards.isISelfValidate = isISelfValidate;
    /**
     * check if the object implements ITraceListener interface
     */
    function isITraceListener(arg) {
        return arg && typeof arg.Trace === 'function';
    }
    TypeGuards.isITraceListener = isITraceListener;
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
})(TypeGuards = exports.TypeGuards || (exports.TypeGuards = {}));
