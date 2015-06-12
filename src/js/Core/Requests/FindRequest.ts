import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {ServiceVersionException} from "../../Exceptions/ServiceVersionException";
import {Strings} from "../../Strings";
import {SeekToConditionItemView} from "../../Search/SeekToConditionItemView";
import {ServiceLocalException} from "../../Exceptions/ServiceLocalException";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {XmlElementNames} from "../XmlElementNames";
import {XmlAttributeNames} from "../XmlAttributeNames";
import {SearchFilter} from "../../Search/Filters/SearchFilter";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {FolderIdWrapperList} from "../../Misc/FolderIdWrapperList";
import {ViewBase} from "../../Search/ViewBase";
import {Grouping} from "../../Search/Grouping";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {StringHelper} from "../../ExtensionMethods";

import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
export class FindRequest<TResponse extends ServiceResponse> extends MultiResponseServiceRequest<TResponse> {//IJsonSerializable
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
