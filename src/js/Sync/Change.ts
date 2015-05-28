import ChangeType = require("../Enumerations/ChangeType");
import ServiceObject = require("../Core/ServiceObjects/ServiceObject");
import ServiceId = require("../ComplexProperties/ServiceId");
			
 class Change {
	ChangeType: ChangeType;
	ServiceObject: ServiceObject;
	Id: ServiceId;
	private changeType: ChangeType;
	private serviceObject: ServiceObject;
	private id: ServiceId;
	CreateId(): ServiceId{ throw new Error("Change.ts - CreateId : Not implemented.");}
}
export = Change;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
