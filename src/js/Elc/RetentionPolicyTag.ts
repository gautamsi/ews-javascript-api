import {Convert} from "../ExtensionMethods";
import {ElcFolderType} from "../Enumerations/ElcFolderType";
import {ExchangeService} from "../Core/ExchangeService";
import {Guid} from "../Guid";
import {RetentionActionType} from "../Enumerations/RetentionActionType";
import {XmlElementNames} from "../Core/XmlElementNames";

/**
 * Represents retention policy tag object.
 * 
 * @sealed
 */
export class RetentionPolicyTag {

	/**
	 * Retention policy tag display name.
	 */
	DisplayName: string = null;

	/**
	 * Retention Id.
	 */
	RetentionId: Guid = null;

	/**
	 * Retention period in time span.
	 */
	RetentionPeriod: number = 0;

	/**
	 * Retention type.
	 */
	Type: ElcFolderType = ElcFolderType.Calendar;

	/**
	 * Retention action.
	 */
	RetentionAction: RetentionActionType = RetentionActionType.None;

	/**
	 * Retention policy tag description.
	 */
	Description: string = null;

	/**
	 * Is this a visible tag?
	 */
	IsVisible: boolean = false;

	/**
	 * Is this a opted into tag?
	 */
	OptedInto: boolean = false;

	/**
	 * Is this an archive tag?
	 */
	IsArchive: boolean = false;

	/**
	 * Constructor
	 */
	constructor();
	/**
	 * Constructor for retention policy tag.
	 *
	 * @param   {string}   displayName       Display name.
	 * @param   {Guid}   retentionId       Retention id.
	 * @param   {number}   retentionPeriod   Retention period.
	 * @param   {ElcFolderType}   type              Retention folder type.
	 * @param   {RetentionActionType}   retentionAction   Retention action.
	 * @param   {boolean}   isVisible         Is visible.
	 * @param   {boolean}   optedInto         Opted into.
	 * @param   {boolean}   isArchive         Is archive tag.
	 */
	constructor(displayName: string, retentionId: Guid, retentionPeriod: number, type: ElcFolderType, retentionAction: RetentionActionType, isVisible: boolean, optedInto: boolean, isArchive: boolean);
	constructor(displayName?: string, retentionId?: Guid, retentionPeriod?: number, type?: ElcFolderType, retentionAction?: RetentionActionType, isVisible?: boolean, optedInto?: boolean, isArchive?: boolean) {

		if (arguments.length > 0) {
			this.DisplayName = displayName;
            this.RetentionId = retentionId;
            this.RetentionPeriod = retentionPeriod;
            this.Type = type;
            this.RetentionAction = retentionAction;
            this.IsVisible = isVisible;
            this.OptedInto = optedInto;
            this.IsArchive = isArchive;
		}
	}

	/**
     * @internal Loads object from XML.
     *
     * @param   {any}	jsObject		Json Object converted from XML.
     */
    static LoadFromXmlJsObject(jsObject: any): RetentionPolicyTag {
		let retentionPolicyTag: RetentionPolicyTag = new RetentionPolicyTag();

		for (let key in jsObject) {
			switch (key) {
				case XmlElementNames.DisplayName:
					retentionPolicyTag.DisplayName = jsObject[XmlElementNames.DisplayName];
					break;
				case XmlElementNames.RetentionId:
					retentionPolicyTag.RetentionId = new Guid(jsObject[XmlElementNames.RetentionId]);
					break;
				case XmlElementNames.RetentionPeriod:
					retentionPolicyTag.RetentionPeriod = Convert.toNumber(jsObject[XmlElementNames.RetentionPeriod]);
					break;
				case XmlElementNames.Type:
					retentionPolicyTag.Type = ElcFolderType[<string>jsObject[XmlElementNames.Type]];
					break;
				case XmlElementNames.RetentionAction:
					retentionPolicyTag.RetentionAction = RetentionActionType[<string>jsObject[XmlElementNames.RetentionAction]];
					break;
				case XmlElementNames.Description:
					retentionPolicyTag.Description = jsObject[XmlElementNames.Description];
					break;
				case XmlElementNames.IsVisible:
					retentionPolicyTag.IsVisible = Convert.toBool(jsObject[XmlElementNames.IsVisible]);
					break;
				case XmlElementNames.OptedInto:
					retentionPolicyTag.OptedInto = Convert.toBool(jsObject[XmlElementNames.OptedInto]);
					break;
				case XmlElementNames.IsArchive:
					retentionPolicyTag.IsArchive = Convert.toBool(jsObject[XmlElementNames.IsArchive]);
					break;
				default:
					break;
			}
		}

		return retentionPolicyTag;
	}
}