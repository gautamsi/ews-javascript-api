import {EwsLogging} from "../../EwsLogging";
import {ExchangeService} from "../../ExchangeService";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {FolderId} from "../../../ComplexProperties/FolderId";
import { Promise } from "../../../Promise";
import {PropertySet} from "../../PropertySet";
import {TypeContainer} from "../../../TypeContainer";
import {WellKnownFolderName} from "../../../Enumerations/WellKnownFolderName";
import {XmlElementNames} from "../../XmlElementNames";

import {Folder} from "./Folder";
/**
 * Represents a folder containing contacts. 
 */
export class ContactsFolder extends Folder {

    /**
     * Initializes an unsaved local instance of **ContactsFolder**. To bind to an existing contacts folder, use ContactsFolder.Bind() instead.
     *
     * @param   {ExchangeService}   service   The ExchangeService object to which the contacts folder will be bound.
     */
    constructor(service: ExchangeService) {
        super(service);
    }

    /**
     * Binds to an existing contacts folder and loads the specified set of properties.
     *
     * @param   {ExchangeService}   service         The service to use to bind to the contacts folder.
     * @param   {FolderId}          id              The Id of the contacts folder to bind to.
     * @param   {PropertySet}       propertySet     The set of properties to load.
     * @return  {Promise<ContactsFolder>}      A ContactsFolder instance representing the contacts folder with the specified name :Promise.
     */
    static Bind(service: ExchangeService, id: FolderId, propertySet: PropertySet): Promise<ContactsFolder>;
    /**
     * Binds to an existing contacts folder and loads its first class properties.
     *
     * @param   {ExchangeService}   service         The service to use to bind to the contacts folder.
     * @param   {FolderId}          id              The Id of the contacts folder to bind to.
     * @return  {Promise<ContactsFolder>}      A ContactsFolder instance representing the contacts folder with the specified name :Promise.
     */
    static Bind(service: ExchangeService, id: FolderId): Promise<ContactsFolder>;
    /**
     * Binds to an existing contacts folder and loads the specified set of properties.
     *
     * @param   {ExchangeService}       service       The service to use to bind to the contacts folder.
     * @param   {WellKnownFolderName}   name          The name of the contacts folder to bind to.
     * @param   {PropertySet}           propertySet   The set of properties to load.
     * @return  {Promise<ContactsFolder>}      A ContactsFolder instance representing the contacts folder with the specified name :Promise.
     */
    static Bind(service: ExchangeService, name: WellKnownFolderName, propertySet: PropertySet): Promise<ContactsFolder>;
    /**
     * Binds to an existing contacts folder and loads its first class properties.
     *
     * @param   {ExchangeService}       service       The service to use to bind to the contacts folder.
     * @param   {WellKnownFolderName}   name          The name of the contacts folder to bind to.
     * @return  {Promise<ContactsFolder>}      A ContactsFolder instance representing the contacts folder with the specified name :Promise.
     */
    static Bind(service: ExchangeService, name: WellKnownFolderName): Promise<ContactsFolder>;
    static Bind(service: ExchangeService, idOrName: FolderId | WellKnownFolderName, propertySet: PropertySet = PropertySet.FirstClassProperties): Promise<ContactsFolder> {
        if (idOrName instanceof FolderId) {
            return service.BindToFolder<ContactsFolder>(idOrName, propertySet, TypeContainer.ContactsFolder);
        }
        else if (typeof idOrName === 'number') {
            return service.BindToFolder<ContactsFolder>(new FolderId(idOrName), propertySet, TypeContainer.ContactsFolder);
        }
        EwsLogging.Assert(false, "ContactsFolder.Bind", "unknown paramete type");
        throw new Error("unknow parameter type. this should not be  reached");
    }

    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }

    /**
     * @internal Gets the element name of item in XML
     * 
     * @return  {string} name of elelment
     */
    GetXmlElementName(): string { return XmlElementNames.ContactsFolder; }
}