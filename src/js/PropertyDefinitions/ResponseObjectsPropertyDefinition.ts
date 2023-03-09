import {ResponseActions} from "../Enumerations/ResponseActions";
import {XmlElementNames} from "../Core/XmlElementNames";
import {ExchangeService} from "../Core/ExchangeService";
import {PropertyBag} from "../Core/PropertyBag";
import {StringHelper} from "../ExtensionMethods";
import {PropertyDefinition} from "./PropertyDefinition";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class ResponseObjectsPropertyDefinition extends PropertyDefinition {

    /**
     * @internal Gets a value indicating whether this property definition is for a nullable type (ref, int?, bool?...).
     */
    get IsNullable(): boolean { return false; }

    /**
     * Gets the property type.
     */
    // Type: any;//System.Type;

    /**
     * Gets the response action.
     *
     * @param   {string}   responseActionString   The response action string.
     * @return  {ResponseActions}       ResponseActions
     */
    private static GetResponseAction(responseActionString: string): ResponseActions {
        var value: ResponseActions = ResponseActions.None;

        switch (responseActionString) {
            case XmlElementNames.AcceptItem:
                value = ResponseActions.Accept;
                break;
            case XmlElementNames.TentativelyAcceptItem:
                value = ResponseActions.TentativelyAccept;
                break;
            case XmlElementNames.DeclineItem:
                value = ResponseActions.Decline;
                break;
            case XmlElementNames.ReplyToItem:
                value = ResponseActions.Reply;
                break;
            case XmlElementNames.ForwardItem:
                value = ResponseActions.Forward;
                break;
            case XmlElementNames.ReplyAllToItem:
                value = ResponseActions.ReplyAll;
                break;
            case XmlElementNames.CancelCalendarItem:
                value = ResponseActions.Cancel;
                break;
            case XmlElementNames.RemoveItem:
                value = ResponseActions.RemoveFromCalendar;
                break;
            case XmlElementNames.SuppressReadReceipt:
                value = ResponseActions.SuppressReadReceipt;
                break;
            case XmlElementNames.PostReplyItem:
                value = ResponseActions.PostReply;
                break;
        }
        return value;
    }

    /**
     * @internal Loads the property value from json.
     *
     * @param   {any}               jsObject         The JSON value.  Can be a JsonObject, string, number, bool, array, or null.
     * @param   {ExchangeService}   service       The service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void {
        let responseActionValue: ResponseActions = ResponseActions.None;
        for (let key in jsObject) {
            if (key.indexOf("__") === 0) //skip xmljsobject conversion entries like __type and __prefix
                continue;

            if (jsObject.hasOwnProperty(key)) {
                responseActionValue |= ResponseObjectsPropertyDefinition.GetResponseAction(key);
            }
        }
        propertyBag._setItem(this, responseActionValue);
    }

    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the context is an update operation.
     */
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void { /* ResponseObjects is a read-only property, no need to implement this.*/ }
}