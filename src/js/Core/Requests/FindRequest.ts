import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import ServiceVersionException = require("../../Exceptions/ServiceVersionException");
import Strings = require("../../Strings");
import SeekToConditionItemView = require("../../Search/SeekToConditionItemView");
import ServiceLocalException = require("../../Exceptions/ServiceLocalException");
import XmlNamespace = require("../../Enumerations/XmlNamespace");
import XmlElementNames = require("../XmlElementNames");
import XmlAttributeNames = require("../XmlAttributeNames");
import SearchFilter = require("../../Search/Filters/SearchFilter");
import ServiceResponse = require("../Responses/ServiceResponse");
import FolderIdWrapperList = require("../../Misc/FolderIdWrapperList");
import ViewBase = require("../../Search/ViewBase");
import Grouping = require("../../Search/Grouping");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
import {StringHelper} from "../../ExtensionMethods";

import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
class FindRequest<TResponse extends ServiceResponse> extends MultiResponseServiceRequest<TResponse> {//IJsonSerializable
    get ParentFolderIds(): FolderIdWrapperList { return this.parentFolderIds; }
    SearchFilter: SearchFilter;
    QueryString: string;
    ReturnHighlightTerms: boolean;
    View: ViewBase;
    private parentFolderIds: FolderIdWrapperList = new FolderIdWrapperList();
    //private searchFilter: SearchFilter;
    //private queryString: string;
    //private returnHighlightTerms: boolean;
    //private view: ViewBase;
    GetExpectedResponseMessageCount(): number { return this.ParentFolderIds.Count; }
    GetGroupBy(): Grouping { return null; }
    Validate(): void {
        super.Validate();

        this.View.InternalValidate(this);

        // query string parameter is only valid for Exchange2010 or higher
        //
        if (!StringHelper.IsNullOrEmpty(this.QueryString) &&
            this.Service.RequestedServerVersion < ExchangeVersion.Exchange2010) {
            throw new ServiceVersionException(
                StringHelper.Format(
                    Strings.ParameterIncompatibleWithRequestVersion,
                    "queryString",
                    ExchangeVersion.Exchange2010));
        }

        // ReturnHighlightTerms parameter is only valid for Exchange2013 or higher
        //
        if (this.ReturnHighlightTerms &&
            this.Service.RequestedServerVersion < ExchangeVersion.Exchange2013) {
            throw new ServiceVersionException(
                StringHelper.Format(
                    Strings.ParameterIncompatibleWithRequestVersion,
                    "returnHighlightTerms",
                    ExchangeVersion.Exchange2013));
        }

        // SeekToConditionItemView is only valid for Exchange2013 or higher
        //
        if ((this.View instanceof SeekToConditionItemView) &&
            this.Service.RequestedServerVersion < ExchangeVersion.Exchange2013) {
            throw new ServiceVersionException(
                StringHelper.Format(
                    Strings.ParameterIncompatibleWithRequestVersion,
                    "SeekToConditionItemView",
                    ExchangeVersion.Exchange2013));
        }

        if (!StringHelper.IsNullOrEmpty(this.QueryString) &&
            this.SearchFilter != null) {
            throw new ServiceLocalException(Strings.BothSearchFilterAndQueryStringCannotBeSpecified);
        }
    }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        super.WriteAttributesToXml(writer);
        this.View.WriteAttributesToXml(writer);
    }
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        this.View.WriteToXml(writer, this.GetGroupBy());

        if (this.SearchFilter != null) {
            writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.Restriction);
            this.SearchFilter.WriteToXml(writer);
            writer.WriteEndElement(); // Restriction
        }

        this.View.WriteOrderByToXml(writer);

        this.ParentFolderIds.WriteToXml(
            writer,
            XmlNamespace.Messages,
            XmlElementNames.ParentFolderIds);

        if (!StringHelper.IsNullOrEmpty(this.QueryString)) {
            // Emit the QueryString
            //
            writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.QueryString);

            if (this.ReturnHighlightTerms) {
                writer.WriteAttributeString(undefined, XmlAttributeNames.ReturnHighlightTerms, this.ReturnHighlightTerms.toString());
            }

            writer.WriteValue(this.QueryString, XmlElementNames.QueryString);
            writer.WriteEndElement();
        }
    }
}
    export = FindRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
