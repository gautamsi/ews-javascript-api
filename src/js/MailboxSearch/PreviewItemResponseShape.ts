import { ExtendedPropertyDefinition } from "../PropertyDefinitions/ExtendedPropertyDefinition";
import { PreviewItemBaseShape } from "../Enumerations/PreviewItemBaseShape";

/**
 * Represents preview item response shape
 * 
 * @sealed
 */
export class PreviewItemResponseShape {

    /**
     * Mailbox identifier
     */
    BaseShape: PreviewItemBaseShape = PreviewItemBaseShape.Default;

    /**
     * Additional properties (must be in form of extended properties)
     */
    AdditionalProperties: ExtendedPropertyDefinition[] = null;

    /**
     * Constructor
     */
    constructor();
    /**
     * Constructor
     *
     * @param   {PreviewItemBaseShape}          baseShape              Preview item base shape
     * @param   {ExtendedPropertyDefinition[]}  additionalProperties   Additional properties (must be in form of extended properties)
     */
    constructor(baseShape: PreviewItemBaseShape, additionalProperties: ExtendedPropertyDefinition[]);
    constructor(baseShape: PreviewItemBaseShape = PreviewItemBaseShape.Default, additionalProperties: ExtendedPropertyDefinition[] = null) {
        this.BaseShape = baseShape;
        this.AdditionalProperties = additionalProperties;
    }
}