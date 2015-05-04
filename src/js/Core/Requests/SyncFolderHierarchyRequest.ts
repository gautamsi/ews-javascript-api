import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
import PropertySet = require("../PropertySet");
import FolderId = require("../../ComplexProperties/FolderId");
import ExchangeService = require("../ExchangeService");
import SyncFolderHierarchyResponse = require("../Responses/SyncFolderHierarchyResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
			
 class SyncFolderHierarchyRequest extends MultiResponseServiceRequest<SyncFolderHierarchyResponse> {
	PropertySet: PropertySet;
	SyncFolderId: FolderId;
	SyncState: string;
	private propertySet: PropertySet;
	private syncFolderId: FolderId;
	private syncState: string;
	CreateServiceResponse(service: ExchangeService, responseIndex: number): SyncFolderHierarchyResponse{ throw new Error("Not implemented.");}
	GetExpectedResponseMessageCount(): number{ throw new Error("Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
	GetResponseMessageXmlElementName(): string{ throw new Error("Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("Not implemented.");}
	GetXmlElementName(): string{ throw new Error("Not implemented.");}
	Validate(): void{ throw new Error("Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
}
export = SyncFolderHierarchyRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
