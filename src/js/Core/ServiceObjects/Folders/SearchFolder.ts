import {EwsLogging} from "../../EwsLogging";
import {ExchangeService} from "../../ExchangeService";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {FolderId} from "../../../ComplexProperties/FolderId";
import {IPromise} from "../../../Interfaces";
import {PropertySet} from "../../PropertySet";
import {Schemas} from "../Schemas/Schemas";
import {SearchFolderParameters} from "../../../ComplexProperties/SearchFolderParameters";
import {ServiceObjectSchema} from "../Schemas/ServiceObjectSchema";
import {TypeContainer} from "../../../TypeContainer";
import {WellKnownFolderName} from "../../../Enumerations/WellKnownFolderName";
import {XmlElementNames} from "../../XmlElementNames";

import {Folder} from "./Folder";
/**
 * Represents a search folder. 
 */
export class SearchFolder extends Folder {

    /**
     * Gets the search parameters associated with the search folder.
     */
    get SearchParameters(): SearchFolderParameters { return this.PropertyBag._getItem(Schemas.SearchFolderSchema.SearchParameters) }

    /**
     * Initializes an unsaved local instance of **SearchFolder**. To bind to an existing contacts folder, use SearchFolder.Bind() instead.
     *
     * @param   {ExchangeService}   service   The ExchangeService object to which the contacts folder will be bound.
     */
    constructor(service: ExchangeService) {
        super(service);
    }

    /**
     * Binds to an existing search folder and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the search folder.
     * @param   {FolderId}          id            The Id of the search folder to bind to.
     * @param   {PropertySet}       propertySet   The set of properties to load.
     * @return  {IPromise<SearchFolder>}        A SearchFolder instance representing the search folder corresponding to the specified Id.
     */
    static Bind(service: ExchangeService, id: FolderId, propertySet: PropertySet): IPromise<SearchFolder>;
    /**
     * Binds to an existing search folder and loads its first class properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the search folder.
     * @param   {FolderId}          id            The Id of the search folder to bind to.
     * @return  {IPromise<SearchFolder>}        A SearchFolder instance representing the search folder corresponding to the specified Id.
     */
    static Bind(service: ExchangeService, id: FolderId): IPromise<SearchFolder>;
    /**
     * Binds to an existing search folder and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}       service       The service to use to bind to the search folder.
     * @param   {WellKnownFolderName}   name          The name of the search folder to bind to.
     * @param   {PropertySet}           propertySet   The set of properties to load.
     * @return  {IPromise<SearchFolder>}            A SearchFolder instance representing the search folder with the specified name.
     */
    static Bind(service: ExchangeService, name: WellKnownFolderName, propertySet: PropertySet): IPromise<SearchFolder>;
    /**
     * Binds to an existing search folder and loads its first class properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}       service       The service to use to bind to the search folder.
     * @param   {WellKnownFolderName}   name          The name of the search folder to bind to.
     * @return  {IPromise<SearchFolder>}            A SearchFolder instance representing the search folder with the specified name.
     */
    static Bind(service: ExchangeService, name: WellKnownFolderName): IPromise<SearchFolder>;
    static Bind(service: ExchangeService, idOrName: FolderId | WellKnownFolderName, propertySet: PropertySet = PropertySet.FirstClassProperties): IPromise<SearchFolder> {
        if (idOrName instanceof FolderId) {
            return service.BindToFolder<SearchFolder>(idOrName, propertySet, TypeContainer.SearchFolder);
        }
        else if (typeof idOrName === 'number') {
            return service.BindToFolder<SearchFolder>(new FolderId(idOrName), propertySet, TypeContainer.SearchFolder);
        }
        EwsLogging.Assert(false, "SearchFolder.Bind", "unknown paramete type");
        throw new Error("unknow parameter type. this should not be  reached");
    }
    
    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }

    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    GetSchema(): ServiceObjectSchema { return Schemas.SearchFolderSchema.Instance; }

    /**
     * @internal Gets the element name of item in XML
     * 
     * @return  {string} name of elelment
     */
    GetXmlElementName(): string { return XmlElementNames.SearchFolder; }

    /**
     * @internal Validates this instance.
     */
    Validate(): void {
        super.Validate();

        if (this.SearchParameters != null) {
            this.SearchParameters.Validate();
        }
    }
}
