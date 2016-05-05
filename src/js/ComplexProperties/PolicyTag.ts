import {Guid} from "../Guid";
import {XmlElementNames} from "../Core/XmlElementNames";

import {RetentionTagBase} from "./RetentionTagBase";
/**
 * Represents the policy tag of an item or folder.
 */
export class PolicyTag extends RetentionTagBase {

    /**
     * Initializes a new instance of the **PolicyTag** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **PolicyTag** class.
     *
     * @param   {boolean}   isExplicit    Is explicit.
     * @param   {Guid}      retentionId   Retention id.
     */
    constructor(isExplicit: boolean, retentionId: Guid);
    constructor(isExplicit: boolean = false, retentionId: Guid = null) {
        super(XmlElementNames.PolicyTag);
        this.IsExplicit = isExplicit;
        this.RetentionId = retentionId;
    }
}