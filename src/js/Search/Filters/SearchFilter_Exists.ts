import PropertyBasedFilter = require("./SearchFilter_PropertyBasedFilter");

 class Exists extends PropertyBasedFilter {
	GetXmlElementName(): string{ throw new Error("SearchFilter_Exists.ts - GetXmlElementName : Not implemented.");}
}
export = Exists;


//------------modulename->Microsoft.Exchange.WebServices.Data.SearchFilter------------
