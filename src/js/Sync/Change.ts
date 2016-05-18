import {ChangeType} from "../Enumerations/ChangeType";
import {ServiceId} from "../ComplexProperties/ServiceId";
import {ServiceObject} from "../Core/ServiceObjects/ServiceObject";

/**
 * Represents a change as returned by a synchronization operation.
 */
export abstract class Change {

	/**
	 * The type of change.
	 */
	private changeType: ChangeType = ChangeType.Create;

	/**
	 * The service object the change applies to.
	 */
	private serviceObject: ServiceObject = null;

	/**
	 * The Id of the service object the change applies to.
	 */
	private id: ServiceId = null;

	/**
	 * Gets the type of the change.
	 */
	get ChangeType(): ChangeType {
		return this.changeType;
	}
	set ChangeType(value: ChangeType) {
		this.changeType = value;
	}

	/**
	 * @internal Gets or sets the service object the change applies to.
	 */
	get ServiceObject(): ServiceObject {
		return this.serviceObject;
	}
	set ServiceObject(value: ServiceObject) {
		this.serviceObject = value;
	}

	/**
	 * @internal Gets or sets the Id of the service object the change applies to.
	 */
	get Id(): ServiceId {
		return this.ServiceObject != null ? this.ServiceObject.GetId() : this.id;
	}
	set Id(value: ServiceId) {
		this.id = value;
	}

	/**
	 * @internal Initializes a new instance of **Change** class.
	 */
	constructor() {
	}

	/**
	 * @internal Creates an Id of the appropriate class.
	 *
	 * @return  {ServiceId}      A ServiceId.
	 */
	abstract CreateId(): ServiceId;
}