import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../Core/ExchangeService";
import {Grouping} from "./Grouping";
import {PropertySet} from "../Core/PropertySet";
import {ServiceObjectType} from "../Enumerations/ServiceObjectType";
import {ServiceRequestBase} from "../Core/Requests/ServiceRequestBase";
import {XmlAttributeNames} from "../Core/XmlAttributeNames";
import {XmlNamespace} from "../Enumerations/XmlNamespace";

/**
 * Represents the base view class for search operations.
 */
export abstract class ViewBase {

    private propertySet: PropertySet = null;

    /**
     * Gets or sets the property set. PropertySet determines which properties will be loaded on found items. If PropertySet is null, all first class properties are loaded on found items.
     */
    get PropertySet(): PropertySet {
        return this.propertySet;
    }
    set PropertySet(value: PropertySet) {
        this.propertySet = value;
    }

    /**
     * @internal Initializes a new instance of the **ViewBase** class.
     */
    constructor() {
    }

    /**
     * @internal Gets the maximum number of items or folders the search operation should return.
     *
     * @return  {number?}      The maximum number of items or folders that should be returned by the search operation.
     */
    abstract GetMaxEntriesReturned(): number;

    /**
     * @internal Gets the property set or the default.
     *
     * @return  {PropertySet}      PropertySet
     */
    GetPropertySetOrDefault(): PropertySet { return this.PropertySet || PropertySet.FirstClassProperties; }

    /**
     * @internal Gets the type of service object this view applies to.
     *
     * @return  {ServiceObjectType}      A ServiceObjectType value.
     */
    GetServiceObjectType(): ServiceObjectType { throw new Error("abstract - ViewBase.ts - GetServiceObjectType : Not implemented."); }

    /**
     * @internal Gets the name of the view XML element.
     *
     * @return  {string}      XML element name.
     */
    abstract GetViewXmlElementName(): string;

    /**
     * @internal Validates this view.
     *
     * @param   {ServiceRequestBase}   request   The request using this view.
     */
    InternalValidate(request: ServiceRequestBase): void {
        if (this.PropertySet !== null && typeof this.PropertySet !== 'undefined') {
            this.PropertySet.InternalValidate();
            this.PropertySet.ValidateForRequest(request, true /*summaryPropertiesOnly*/);
        }
    }

    /**
     * @internal Writes the search settings to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer    The writer.
     * @param   {Grouping}              groupBy   The group by clause.
     */
    abstract InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void;

    /**
	 * @internal Writes this view to XML.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    InternalWriteViewToXml(writer: EwsServiceXmlWriter): void {
        var maxEntriesReturned = this.GetMaxEntriesReturned();
        if (!isNaN(maxEntriesReturned)) {
            writer.WriteAttributeValue(XmlAttributeNames.MaxEntriesReturned, maxEntriesReturned);
        }
    }

    /**
	 * @internal Writes the attributes to XML.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    abstract WriteAttributesToXml(writer: EwsServiceXmlWriter): void;

    /**
	 * @internal Writes OrderBy property to XML.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    abstract WriteOrderByToXml(writer: EwsServiceXmlWriter): void;

    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer    The writer.
     * @param   {Grouping}              groupBy   The group by clause.
     */
    WriteToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void {
        this.GetPropertySetOrDefault().WriteToXml(writer, this.GetServiceObjectType());
        writer.WriteStartElement(XmlNamespace.Messages, this.GetViewXmlElementName());
        this.InternalWriteViewToXml(writer);
        writer.WriteEndElement(); // this.GetViewXmlElementName()
        this.InternalWriteSearchSettingsToXml(writer, groupBy);
    }
}