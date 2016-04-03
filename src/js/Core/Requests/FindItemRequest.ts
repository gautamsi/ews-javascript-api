import {ExchangeService} from "../ExchangeService";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {FindItemResponse} from "../Responses/FindItemResponse";
import {Grouping} from "../../Search/Grouping";
import {Item} from "../ServiceObjects/Items/Item";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {XmlElementNames} from "../XmlElementNames";

import {FindRequest} from "./FindRequest";
/**
 * @internal Represents a **FindItem** request.
 *
 * @type <TItem>   Item type.
 */
export class FindItemRequest<TItem extends Item> extends FindRequest<FindItemResponse<TItem>> {

    private groupBy: Grouping = null;

    /**
     * Gets or sets the group by.
     *
     * @value The group by.
     */
    get GroupBy(): Grouping {
        return this.groupBy;
    }
    set GroupBy(value: Grouping) {
        this.groupBy = value;
    }

    /**
     * @internal Initializes a new instance of the **FindItemRequest** class.
     *
     * @param   {ExchangeService}       service             The service.
     * @param   {ServiceErrorHandling}  errorHandlingMode   Indicates how errors should be handled.
     */
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
        super(service, errorHandlingMode);
    }

    /**
     * Creates the service response.
     *
     * @param   {ExchangeService}   service         The service.
     * @param   {number}            responseIndex   Index of the response.
     * @return  {FindItemResponse<TItem>}           Service response.
     */
    CreateServiceResponse(service: ExchangeService, responseIndex: number): FindItemResponse<TItem> { return new FindItemResponse<TItem>(this.GroupBy != null, this.View.GetPropertySetOrDefault()); }

    /**
     * @internal Gets the group by clause.
     *
     * @return  {Grouping}      The group by clause, null if the request does not have or support grouping.
     */
    GetGroupBy(): Grouping { return this.GroupBy; }

    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }

    /**
     * @internal Gets the name of the response message XML element.
     *
     * @return  {string}      XML element name.
     */
    GetResponseMessageXmlElementName(): string { return XmlElementNames.FindItemResponseMessage; }

    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name.
     */
    GetResponseXmlElementName(): string { return XmlElementNames.FindItemResponse; }

    /**
     * @internal Gets the name of the XML element.
     * 
     * @return  {string} XML element name.
     */
    GetXmlElementName(): string { return XmlElementNames.FindItem; }
}