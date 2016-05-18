import {Change} from "../../Sync/Change";
import {ChangeCollection} from "../../Sync/ChangeCollection";
import {ChangeType} from "../../Enumerations/ChangeType";
import {Convert, TypeSystem} from "../../ExtensionMethods";
import {EwsLogging} from "../EwsLogging";
import {EwsServiceJsonReader} from "../EwsServiceJsonReader";
import {ExchangeService} from "../ExchangeService";
import {FolderInfo} from "../ServiceObjects/Folders/FolderInfo";
import {ItemChange} from "../../Sync/ItemChange";
import {ItemInfo} from "../ServiceObjects/Items/ItemInfo";
import {PropertySet} from "../PropertySet";
import {ServiceObject} from "../ServiceObjects/ServiceObject";
import {ServiceObjectInfo} from "../ServiceObjects/ServiceObjectInfo";
import {XmlElementNames} from "../XmlElementNames";

import {ServiceResponse} from "./ServiceResponse";
/**
 * Represents the base response class for synchronuization operations.
 * 
 * @sealed
 * @typeparam	{TServiceObject}	ServiceObject type.
 * @typeparam	{TChange}	Change type.
 */
export abstract class SyncResponse<TServiceObject extends ServiceObject, TChange extends Change> extends ServiceResponse {

	private changes: ChangeCollection<TChange> = new ChangeCollection<TChange>();
	private propertySet: PropertySet = null;

	/**
	 * Gets a list of changes that occurred on the synchronized folder.
	 */
	get Changes(): ChangeCollection<TChange> {
		return this.changes;
	}

	/**
	 * @internal Gets a value indicating whether this request returns full or summary properties.
	 */
	get SummaryPropertiesOnly(): boolean { return false; /* abstract */ }

	/**
	 * @internal Initializes a new instance of the **SyncResponse<TServiceObject, TChange>** class.
	 *
	 * @param   {PropertySet}   propertySet   Property set.
	 */
	constructor(propertySet: PropertySet) {
		super();
		this.propertySet = propertySet;

		EwsLogging.Assert(
			this.propertySet != null,
			"SyncResponse.ctor",
			"PropertySet should not be null");
	}

	/**
	 * @internal Creates an item change instance.
	 *
	 * @return  {ItemChange}      ItemChange instance
	 */
	abstract CreateChangeInstance(): TChange;

	/**
	 * @internal Gets the name of the change element.
	 *
	 * @return  {string}      Change element name.
	 */
	abstract GetChangeElementName(): string;

	/**
	 * @internal Gets the name of the change id element.
	 *
	 * @return  {string}      Change id element name.
	 */
	abstract GetChangeIdElementName(): string;

	/**
	 * @internal Gets the name of the includes last in range XML element.
	 *
	 * @return  {string}      XML element name.
	 */
	abstract GetIncludesLastInRangeXmlElementName(): string;

	/**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
		this.Changes.SyncState = responseObject[XmlElementNames.SyncState];
		this.Changes.MoreChangesAvailable = !Convert.toBool(responseObject[this.GetIncludesLastInRangeXmlElementName()]);

		let changesElement: any = responseObject[XmlElementNames.Changes];

		let folderInfo: FolderInfo = new FolderInfo();
		let itemInfo: ItemInfo = new ItemInfo();

		for (let changeElementKey in changesElement) {

			if (changeElementKey.indexOf("__") === 0) continue;

			let changeObjs: any[] = EwsServiceJsonReader.ReadAsArray(changesElement, changeElementKey);

			for (let changeObj of changeObjs) {


				let change: TChange = this.CreateChangeInstance();

				//let changeType:string = jsChange.ReadAsString(XmlElementNames.ChangeType);

				switch (changeElementKey) {
					case XmlElementNames.Create:
						change.ChangeType = ChangeType.Create;
						break;
					case XmlElementNames.Update:
						change.ChangeType = ChangeType.Update;
						break;
					case XmlElementNames.Delete:
						change.ChangeType = ChangeType.Delete;
						break;
					case XmlElementNames.ReadFlagChange:
						change.ChangeType = ChangeType.ReadFlagChange;
						break;
					default:
						break;
				}

				let changeObjectTypeName: string = TypeSystem.GetJsObjectOnlyChildName(changeObj);

				let serviceObjectInfo: ServiceObjectInfo = ServiceObjectInfo.IsFolderType(changeObjectTypeName) ? folderInfo : itemInfo;

				if (change != null) {
					let jsServiceObject = changeObj[changeObjectTypeName];
					switch (change.ChangeType) {
						case ChangeType.Delete:
						case ChangeType.ReadFlagChange:
							change.Id = change.CreateId();
							let jsChangeId = changeObj[this.GetChangeIdElementName()];
							change.Id.LoadFromXmlJsObject(jsChangeId, service);

							if (change.ChangeType == ChangeType.ReadFlagChange) {
								let itemChange: ItemChange = <ItemChange><any>change;

								EwsLogging.Assert(
									change instanceof ItemChange,
									"SyncResponse.ReadElementsFromXmlJsObject",
									"ReadFlagChange is only valid on ItemChange");

								itemChange.IsRead = Convert.toBool(changeObj[XmlElementNames.IsRead]);
							}

							break;
						default:

							change.ServiceObject = serviceObjectInfo.CreateEwsObjectFromXmlElementName<TServiceObject>(service, changeObjectTypeName);

							change.ServiceObject.LoadFromXmlJsObject(
								jsServiceObject,
								service,
								true, /* clearPropertyBag */
								this.propertySet,
								this.SummaryPropertiesOnly);
							break;
					}

					this.changes.Add(change);
				}
			}
		}

	}
}