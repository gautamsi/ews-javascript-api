"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ClientApp_1 = require("../../ComplexProperties/ClientApp");
var EwsServiceJsonReader_1 = require("../EwsServiceJsonReader");
var EwsUtilities_1 = require("../EwsUtilities");
var ServiceXmlDeserializationException_1 = require("../../Exceptions/ServiceXmlDeserializationException");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var Strings_1 = require("../../Strings");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * @internal Represents the response to a GetAppManifests operation.
 *
 * @sealed
 */
var GetAppManifestsResponse = /** @class */ (function (_super) {
    __extends(GetAppManifestsResponse, _super);
    /**
     * @internal Initializes a new instance of the **GetAppManifestsResponse** class.
     */
    function GetAppManifestsResponse() {
        var _this = _super.call(this) || this;
        /**
         * List of manifests returned in the response.
         */
        _this.manifests = []; //XmlDocument[]
        /**
         * List of extensions returned in the response.
         */
        _this.apps = [];
        return _this;
    }
    Object.defineProperty(GetAppManifestsResponse.prototype, "Manifests", {
        /**
         * Gets all manifests returned
         *
         * /remarks/	Provided for backwards compatibility with Exchange 2013.
         * base64 encoded xml file in string
         */
        get: function () {
            return this.manifests;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetAppManifestsResponse.prototype, "Apps", {
        /**
         * Gets all apps returned.
         *
         * /remarks/	Introduced for Exchange 2013 Sp1 to return additional metadata.
         */
        get: function () {
            return this.apps;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    GetAppManifestsResponse.prototype.ReadElementsFromXmlJsObject = function (jsObject, service) {
        this.Manifests.splice(0);
        // We can have a response from Exchange 2013 (first time this API was introduced)
        // or the newer response, starting in Exchange 2013 SP1, (X-EWS-TargetVersion: 2.5 or above) 
        var exchange2013Response = false;
        if (jsObject[XmlElementNames_1.XmlElementNames.Manifests]) {
            exchange2013Response = true;
        }
        else if (jsObject[XmlElementNames_1.XmlElementNames.Apps]) {
            exchange2013Response = false;
        }
        else {
            throw new ServiceXmlDeserializationException_1.ServiceXmlDeserializationException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.UnexpectedElement, EwsUtilities_1.EwsUtilities.GetNamespacePrefix(XmlNamespace_1.XmlNamespace.Messages), XmlElementNames_1.XmlElementNames.Manifests, "Element", "N/A", "N/A"));
        }
        if (exchange2013Response) {
            this.ReadFromExchange2013(jsObject, service);
        }
        else {
            this.ReadFromExchange2013Sp1(jsObject, service);
        }
    };
    /**
     * Read the response from Exchange 2013.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    GetAppManifestsResponse.prototype.ReadFromExchange2013 = function (jsObject, service) {
        ////<GetAppManifestsResponse ResponseClass="Success" xmlns="http://schemas.microsoft.com/exchange/services/2006/messages">
        ////<ResponseCode>NoError</ResponseCode>
        ////<m:Manifests xmlns:m="http://schemas.microsoft.com/exchange/services/2006/messages">   
        ////<m:Manifest>[base 64 encoded manifest]</m:Manifest>                              <--- reader should be at this node at the beginning of loop
        ////<m:Manifest>[base 64 encoded manifest]</m:Manifest>
        //// ....
        ////</m:Manifests>                                                                   <--- reader should be at this node at the end of the loop
        var responses = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObject[XmlElementNames_1.XmlElementNames.Manifests], XmlElementNames_1.XmlElementNames.Manifest);
        for (var _i = 0, responses_1 = responses; _i < responses_1.length; _i++) {
            var response = responses_1[_i];
            this.manifests.push(response);
            var app = new ClientApp_1.ClientApp();
            app.Manifest = response;
            this.apps.push(app);
        }
    };
    /**
     * Read the response from Exchange 2013 SP1 and later.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    GetAppManifestsResponse.prototype.ReadFromExchange2013Sp1 = function (jsObject, service) {
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
        var responses = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObject[XmlElementNames_1.XmlElementNames.Apps], XmlElementNames_1.XmlElementNames.App);
        for (var _i = 0, responses_2 = responses; _i < responses_2.length; _i++) {
            var response = responses_2[_i];
            var clientApp = new ClientApp_1.ClientApp();
            clientApp.LoadFromXmlJsObject(response, service);
            this.apps.push(clientApp);
            this.manifests.push(clientApp.Manifest);
        }
    };
    return GetAppManifestsResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetAppManifestsResponse = GetAppManifestsResponse;
