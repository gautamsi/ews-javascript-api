import { XmlElementNames } from "../Core/XmlElementNames";

import { ServiceId } from "./ServiceId";
/**
 * Represents the Id of an Exchange item.
 *
 * @class ItemId
 * @extends {ServiceId}
 */
export class ItemId extends ServiceId {

    /**
     * Initializes a new instance of the **ItemId**.
     */
    constructor();
    /**
     * Initializes a new instance of the **ItemId**.
     *
     * @param   {String} uniqueId   The unique Id used to initialize the ItemId
     */
    constructor(uniqueId: string);
    constructor(uniqueId?: string) {
        if (arguments.length === 0) {
            super();
            return;
        }
        super(uniqueId);
    }

    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetXmlElementName(): string {
        return XmlElementNames.ItemId;
    }
}
