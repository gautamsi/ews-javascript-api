import {AlternateIdBase} from "../../Misc/IdConversion/AlternateIdBase";
import {AlternateId} from "../../Misc/IdConversion/AlternateId";
import {AlternatePublicFolderId} from "../../Misc/IdConversion/AlternatePublicFolderId";
import {AlternatePublicFolderItemId} from "../../Misc/IdConversion/AlternatePublicFolderItemId";
import {EwsLogging} from "../EwsLogging";
import {ExchangeService} from "../ExchangeService";
import {StringHelper} from "../../ExtensionMethods";
import {XmlAttributeNames} from "../XmlAttributeNames";
import {XmlElementNames} from "../XmlElementNames";

import {ServiceResponse} from "./ServiceResponse";
/**
 * Represents the response to an individual Id conversion operation.
 * 
 * @sealed
 */
export class ConvertIdResponse extends ServiceResponse {

    private convertedId: AlternateIdBase;

    /**
     * Gets the converted Id.
     */
    public get ConvertedId(): AlternateIdBase {
        return this.convertedId;
    }

    /**
     * @internal Initializes a new instance of the **ConvertIdResponse** class.
     */
    constructor() {
        super();
    }

    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    ReadElementsFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        let responseObject = jsObject[XmlElementNames.AlternateId];
        let alternateIdClass: string = responseObject[XmlAttributeNames.Type];
        if (alternateIdClass) {
            alternateIdClass = alternateIdClass.replace("t:", "");
        }

        switch (alternateIdClass) {
            case AlternateId.SchemaTypeName:
                this.convertedId = new AlternateId();
                break;
            case AlternatePublicFolderId.SchemaTypeName:
                this.convertedId = new AlternatePublicFolderId();
                break;
            case AlternatePublicFolderItemId.SchemaTypeName:
                this.convertedId = new AlternatePublicFolderItemId();
                break;
            default:
                EwsLogging.Assert(
                    false,
                    "ConvertIdResponse.ReadElementsFromXml",
                    StringHelper.Format("Unknown alternate Id class: {0}", alternateIdClass));
                break;
        }

        this.convertedId.LoadAttributesFromXmlJsObject(responseObject);
    }
}