import {ChangeType} from "../Enumerations/ChangeType";
import {ServiceObject} from "../Core/ServiceObjects/ServiceObject";
import {ServiceId} from "../ComplexProperties/ServiceId";
export class Change {
	ChangeType: ChangeType;
	ServiceObject: ServiceObject;
	Id: ServiceId;
	private changeType: ChangeType;
	private serviceObject: ServiceObject;
	private id: ServiceId;
	CreateId(): ServiceId{ throw new Error("Change.ts - CreateId : Not implemented.");}
}






			

