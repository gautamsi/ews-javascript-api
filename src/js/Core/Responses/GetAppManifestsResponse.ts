import {ClientApp} from "../../ComplexProperties/ClientApp";
import {EwsServiceJsonReader} from "../EwsServiceJsonReader";
import {EwsUtilities} from "../EwsUtilities";
import {ExchangeService} from "../ExchangeService";
import {ServiceXmlDeserializationException} from "../../Exceptions/ServiceXmlDeserializationException";
import {StringHelper} from "../../ExtensionMethods";
import {Strings} from "../../Strings";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";

import {ServiceResponse} from "./ServiceResponse";
/**
 * @internal Represents the response to a GetAppManifests operation.
 * 
 * @sealed
 */
export class GetAppManifestsResponse extends ServiceResponse {

	/**
	 * List of manifests returned in the response. 
	 */
	private manifests: string[] = [];//XmlDocument[]

	/**
	 * List of extensions returned in the response.
	 */
	private apps: ClientApp[] = [];

	/**
	 * Gets all manifests returned
	 * 
	 * @remarks	Provided for backwards compatibility with Exchange 2013.
	 * base64 encoded xml file in string
	 */
	get Manifests(): string[] { //XmlDocument[]
		return this.manifests;
	}

	/**
	 * Gets all apps returned.
	 * 
	 * @remarks	Introduced for Exchange 2013 Sp1 to return additional metadata.
	 */
	get Apps(): ClientApp[] {
		return this.apps;
	}

	/**
	 * @internal Initializes a new instance of the **GetAppManifestsResponse** class.
	 */
	constructor() {
		super();
	}

	/**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    ReadElementsFromXmlJsObject(jsObject: any, service: ExchangeService): void {
		this.Manifests.splice(0);

		// We can have a response from Exchange 2013 (first time this API was introduced)
		// or the newer response, starting in Exchange 2013 SP1, (X-EWS-TargetVersion: 2.5 or above) 
		let exchange2013Response: boolean = false;
		if (jsObject[XmlElementNames.Manifests]) {
			exchange2013Response = true;
		}
		else if (jsObject[XmlElementNames.Apps]) {
			exchange2013Response = false;
		}
		else {
			throw new ServiceXmlDeserializationException(
				StringHelper.Format(
					Strings.UnexpectedElement,
					EwsUtilities.GetNamespacePrefix(XmlNamespace.Messages),
					XmlElementNames.Manifests,
					"Element",
					"N/A",
					"N/A"));
		}

		if (exchange2013Response) {
			this.ReadFromExchange2013(jsObject, service);
		}
		else {
			this.ReadFromExchange2013Sp1(jsObject, service);
		}
	}

	/**
     * Read the response from Exchange 2013.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    private ReadFromExchange2013(jsObject: any, service: ExchangeService): void {

		////<GetAppManifestsResponse ResponseClass="Success" xmlns="http://schemas.microsoft.com/exchange/services/2006/messages">
		////<ResponseCode>NoError</ResponseCode>
		////<m:Manifests xmlns:m="http://schemas.microsoft.com/exchange/services/2006/messages">   
		////<m:Manifest>[base 64 encoded manifest]</m:Manifest>                              <--- reader should be at this node at the beginning of loop
		////<m:Manifest>[base 64 encoded manifest]</m:Manifest>
		//// ....
		////</m:Manifests>                                                                   <--- reader should be at this node at the end of the loop

		let responses: any[] = EwsServiceJsonReader.ReadAsArray(jsObject[XmlElementNames.Manifests], XmlElementNames.Manifest);

		for (let response of responses) {
			this.manifests.push(response);
			let app: ClientApp = new ClientApp();
			app.Manifest = response;
			this.apps.push(app);
		}
	}


	/**
     * Read the response from Exchange 2013 SP1 and later.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    private ReadFromExchange2013Sp1(jsObject: any, service: ExchangeService): void {

		////<GetAppManifestsResponse ResponseClass="Success" xmlns="http://schemas.microsoft.com/exchange/services/2006/messages">
		////  <ResponseCode>NoError</ResponseCode>
		////  <m:Apps xmlns:m="http://schemas.microsoft.com/exchange/services/2006/messages">
		////    <t:App xmlns:t="http://schemas.microsoft.com/exchange/services/2006/types">       <--- reader should be at this node at the beginning of the loop
		////      <t:Metadata>
		////        <t:EndNodeUrl>http://o15.officeredir.microsoft.com/r/rlidMktplcExchRedirect?app=outlook.exe&amp;ver=15&amp;clid=1033&amp;p1=15d0d766d0&amp;p2=4&amp;p3=0&amp;p4=WA&amp;p5=en-US\WA102996382&amp;Scope=2&amp;CallBackURL=https%3a%2f%2fexhv-4880%2fecp%2fExtension%2finstallFromURL.slab%3fexsvurl%3d1&amp;DeployId=EXHV-4680dom.extest.microsoft.com</t:EndNodeUrl>
		////        <t:AppStatus>2.3</t:AppStatus>
		////        <t:ActionUrl>http://o15.officeredir.microsoft.com/r/rlidMktplcExchRedirect?app=outlook.exe&amp;ver=15&amp;clid=1033&amp;p1=15d0d766d0&amp;p2=4&amp;p3=0&amp;p4=WA&amp;p5=en-US\WA102996382&amp;Scope=2&amp;CallBackURL=https%3a%2f%2fexhv-4880%2fecp%2fExtension%2finstallFromURL.slab%3fexsvurl%3d1&amp;DeployId=EXHV-4680dom.extest.microsoft.com</t:ActionUrl>
		////      </t:Metadata>
		////      <t:Manifest>[base 64 encoded manifest]</t:Manifest>
		////    </t:App>
		////    <t:App xmlns:t="http://schemas.microsoft.com/exchange/services/2006/types">
		////      ....
		////  <m:Apps>    <----- reader should be at this node at the end of the loop

		let responses: any[] = EwsServiceJsonReader.ReadAsArray(jsObject[XmlElementNames.Apps], XmlElementNames.App);

		for (let response of responses) {

			let clientApp: ClientApp = new ClientApp();

			clientApp.LoadFromXmlJsObject(response, service);

			this.apps.push(clientApp);
			this.manifests.push(clientApp.Manifest);
		}
	}
}