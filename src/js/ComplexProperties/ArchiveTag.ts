import {Guid} from "../Guid";
import {XmlElementNames} from "../Core/XmlElementNames";

import {RetentionTagBase} from "./RetentionTagBase";
/**
 * Represents the archive tag of an item or folder.
 */
export class ArchiveTag extends RetentionTagBase {

    /**
     * Initializes a new instance of the **ArchiveTag** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **ArchiveTag** class.
     *
     * @param   {boolean}   isExplicit    Is explicit.
     * @param   {Guid}      retentionId   Retention id.
     */
    constructor(isExplicit: boolean, retentionId: Guid);
    constructor(isExplicit: boolean = false, retentionId: Guid = null) {
        super(XmlElementNames.ArchiveTag);
        this.IsExplicit = isExplicit;
        this.RetentionId = retentionId;
    }
}