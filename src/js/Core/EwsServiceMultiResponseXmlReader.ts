import EwsServiceXmlReader = require("./EwsServiceXmlReader");
import ExchangeService = require("./ExchangeService");
			
 class EwsServiceMultiResponseXmlReader extends EwsServiceXmlReader {
	Create(stream: any /*System.IO.Stream*/, service: ExchangeService): EwsServiceMultiResponseXmlReader{ throw new Error("EwsServiceMultiResponseXmlReader.ts - Create : Not implemented.");}
	CreateXmlReader(stream: any /*System.IO.Stream*/): any /*System.Xml.XmlReader*/{ throw new Error("EwsServiceMultiResponseXmlReader.ts - CreateXmlReader : Not implemented.");}
	InitializeXmlReader(stream: any /*System.IO.Stream*/): any /*System.Xml.XmlReader*/{ throw new Error("EwsServiceMultiResponseXmlReader.ts - InitializeXmlReader : Not implemented.");}
}
export = EwsServiceMultiResponseXmlReader;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
