import {EwsLogging} from "../../EwsLogging";
import {ExchangeService} from "../../ExchangeService";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {FolderId} from "../../../ComplexProperties/FolderId";
import {IPromise} from "../../../Interfaces";
import {PropertySet} from "../../PropertySet";
import {TypeContainer} from "../../../TypeContainer";
import {WellKnownFolderName} from "../../../Enumerations/WellKnownFolderName";
import {XmlElementNames} from "../../XmlElementNames";

import {Folder} from "./Folder";
/**
 * Represents a folder containing task items. 
 */
export class TasksFolder extends Folder {

    /**
     * Initializes an unsaved local instance of **SearchFolder**. To bind to an existing contacts folder, use SearchFolder.Bind() instead.
     *
     * @param   {ExchangeService}   service   The ExchangeService object to which the contacts folder will be bound.
     */
    constructor(service: ExchangeService) {
        super(service);
    }

    /**
     * Binds to an existing tasks folder and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the tasks folder.
     * @param   {FolderId}          id            The Id of the tasks folder to bind to.
     * @param   {PropertySet}       propertySet   The set of properties to load.
     * @return  {IPromise<TasksFolder>}         A TasksFolder instance representing the task folder corresponding to the specified Id.
     */
    static Bind(service: ExchangeService, id: FolderId, propertySet: PropertySet): IPromise<TasksFolder>;
    /**
     * Binds to an existing tasks folder and loads its first class properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the tasks folder.
     * @param   {FolderId}          id            The Id of the tasks folder to bind to.
     * @return  {IPromise<TasksFolder>}         A TasksFolder instance representing the task folder corresponding to the specified Id.
     */
    static Bind(service: ExchangeService, id: FolderId): IPromise<TasksFolder>;
    /**
     * Binds to an existing tasks folder and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}       service       The service to use to bind to the tasks folder.
     * @param   {WellKnownFolderName}   name          The name of the tasks folder to bind to.
     * @param   {PropertySet}           propertySet   The set of properties to load.
     * @return  {IPromise<TasksFolder>}         A TasksFolder instance representing the tasks folder with the specified name.
     */
    static Bind(service: ExchangeService, name: WellKnownFolderName, propertySet: PropertySet): IPromise<TasksFolder>;
    /**
     * Binds to an existing tasks folder and loads its first class properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}       service       The service to use to bind to the tasks folder.
     * @param   {WellKnownFolderName}   name          The name of the tasks folder to bind to.
     * @return  {IPromise<TasksFolder>}         A TasksFolder instance representing the tasks folder with the specified name.
     */
    static Bind(service: ExchangeService, name: WellKnownFolderName): IPromise<TasksFolder>;
    static Bind(service: ExchangeService, idOrName: FolderId | WellKnownFolderName, propertySet: PropertySet = PropertySet.FirstClassProperties): IPromise<TasksFolder> {
        if (idOrName instanceof FolderId) {
            return service.BindToFolder<TasksFolder>(idOrName, propertySet, TypeContainer.TasksFolder);
        }
        else if (typeof idOrName === 'number') {
            return service.BindToFolder<TasksFolder>(new FolderId(idOrName), propertySet, TypeContainer.TasksFolder);
        }
        EwsLogging.Assert(false, "TasksFolder.Bind", "unknown paramete type");
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
    GetXmlElementName(): string { return XmlElementNames.TasksFolder; }
}