import { AffectedTaskOccurrence } from '../../../Enumerations/AffectedTaskOccurrence';
import { AttachableAttribute } from '../../../Attributes/AttachableAttribute';
import { ConflictResolutionMode } from '../../../Enumerations/ConflictResolutionMode';
import { DateTime } from '../../../DateTime';
import { DeleteMode } from '../../../Enumerations/DeleteMode';
import { ExchangeService } from '../../ExchangeService';
import { ExchangeVersion } from '../../../Enumerations/ExchangeVersion';
import { IPromise } from './../../../Interfaces';
import { ItemAttachment } from "../../../ComplexProperties/ItemAttachment";
import { ItemId } from '../../../ComplexProperties/ItemId';
import { MessageDisposition } from '../../../Enumerations/MessageDisposition';
import { PropertySet } from '../../PropertySet';
import { Recurrence } from '../../../ComplexProperties/Recurrence/Patterns/Recurrence';
import { Schemas } from "../Schemas/Schemas";
import { ServiceObjectSchema } from '../Schemas/ServiceObjectSchema';
import { StringList } from '../../../ComplexProperties/StringList';
import { TaskDelegationState } from '../../../Enumerations/TaskDelegationState';
import { TaskMode } from '../../../Enumerations/TaskMode';
import { TaskStatus } from '../../../Enumerations/TaskStatus';
import { XmlElementNames } from '../../XmlElementNames';

import { Item } from './Item';
/**
 * Represents a Task item. Properties available on tasks are defined in the TaskSchema class.
 */
@AttachableAttribute(true)
export class Task extends Item {

    /**
     * @nullable Gets or sets the actual amount of time that is spent on the task.
     */
    get ActualWork(): number {
        return <number>this.PropertyBag._getItem(Schemas.TaskSchema.ActualWork);
    }
    set ActualWork(value: number) {
        this.PropertyBag._setItem(Schemas.TaskSchema.ActualWork, value);
    }

    /**
     * @nullable Gets the date and time the task was assigned.
     */
    get AssignedTime(): DateTime {
        return <DateTime>this.PropertyBag._getItem(Schemas.TaskSchema.AssignedTime);
    }

    /**
     * Gets or sets the billing information of the task.
     */
    get BillingInformation(): string {
        return <string>this.PropertyBag._getItem(Schemas.TaskSchema.BillingInformation);
    }
    set BillingInformation(value: string) {
        this.PropertyBag._setItem(Schemas.TaskSchema.BillingInformation, value);
    }

    /**
     * Gets the number of times the task has changed since it was created.
     */
    get ChangeCount(): number {
        return <number>this.PropertyBag._getItem(Schemas.TaskSchema.ChangeCount);
    }

    /**
     * Gets or sets a list of companies associated with the task.
     */
    get Companies(): StringList {
        return <StringList>this.PropertyBag._getItem(Schemas.TaskSchema.Companies);
    }
    set Companies(value: StringList) {
        this.PropertyBag._setItem(Schemas.TaskSchema.Companies, value);
    }

    /**
     * @nullable Gets or sets the date and time on which the task was completed.
     */
    get CompleteDate(): DateTime {
        return <DateTime>this.PropertyBag._getItem(Schemas.TaskSchema.CompleteDate);
    }
    set CompleteDate(value: DateTime) {
        this.PropertyBag._setItem(Schemas.TaskSchema.CompleteDate, value);
    }

    /**
     * Gets or sets a list of contacts associated with the task.
     */
    get Contacts(): StringList {
        return <StringList>this.PropertyBag._getItem(Schemas.TaskSchema.Contacts);
    }
    set Contacts(value: StringList) {
        this.PropertyBag._setItem(Schemas.TaskSchema.Contacts, value);
    }

    /**
     * Gets the current delegation state of the task.
     */
    get DelegationState(): TaskDelegationState {
        return <TaskDelegationState>this.PropertyBag._getItem(Schemas.TaskSchema.DelegationState);
    }

    /**
     * Gets the name of the delegator of this task.
     */
    get Delegator(): string {
        return <string>this.PropertyBag._getItem(Schemas.TaskSchema.Delegator);
    }

    /**
     * @nullable    Gets or sets the date and time on which the task is due.
     */
    get DueDate(): DateTime {
        return <DateTime>this.PropertyBag._getItem(Schemas.TaskSchema.DueDate);
    }
    set DueDate(value: DateTime) {
        this.PropertyBag._setItem(Schemas.TaskSchema.DueDate, value);
    }

    /**
     * Gets a value indicating the mode of the task.
     */
    get Mode(): TaskMode {
        return <TaskMode>this.PropertyBag._getItem(Schemas.TaskSchema.Mode);
    }

    /**
     * Gets a value indicating whether the task is complete.
     */
    get IsComplete(): boolean {
        return <boolean>this.PropertyBag._getItem(Schemas.TaskSchema.IsComplete);
    }

    /**
     * Gets a value indicating whether the task is recurring.
     */
    get IsRecurring(): boolean {
        return <boolean>this.PropertyBag._getItem(Schemas.TaskSchema.IsRecurring);
    }

    /**
     * Gets a value indicating whether the task is a team task.
     */
    get IsTeamTask(): boolean {
        return <boolean>this.PropertyBag._getItem(Schemas.TaskSchema.IsTeamTask);
    }

    /**
     * Gets or sets the mileage of the task.
     */
    get Mileage(): string {
        return <string>this.PropertyBag._getItem(Schemas.TaskSchema.Mileage);
    }
    set Mileage(value: string) {
        this.PropertyBag._setItem(Schemas.TaskSchema.Mileage, value);
    }

    /**
     * Gets the name of the owner of the task.
     */
    get Owner(): string {
        return <string>this.PropertyBag._getItem(Schemas.TaskSchema.Owner);
    }

    /**
     * Gets or sets the completeion percentage of the task. PercentComplete must be between 0 and 100.
     */
    get PercentComplete(): number {
        return <number>this.PropertyBag._getItem(Schemas.TaskSchema.PercentComplete);
    }
    set PercentComplete(value: number) {
        this.PropertyBag._setItem(Schemas.TaskSchema.PercentComplete, value);
    }

    /**
     * Gets or sets the recurrence pattern for this task. Available recurrence pattern classes include Recurrence. 
     * DailyPattern, Recurrence.MonthlyPattern and Recurrence.YearlyPattern.
     */
    get Recurrence(): Recurrence {
        return <Recurrence>this.PropertyBag._getItem(Schemas.TaskSchema.Recurrence);
    }
    set Recurrence(value: Recurrence) {
        this.PropertyBag._setItem(Schemas.TaskSchema.Recurrence, value);
    }

    /**
     * @nullable    Gets or sets the date and time on which the task starts.
     */
    get StartDate(): DateTime {
        return <DateTime>this.PropertyBag._getItem(Schemas.TaskSchema.StartDate);
    }
    set StartDate(value: DateTime) {
        this.PropertyBag._setItem(Schemas.TaskSchema.StartDate, value);
    }

    /**
     * Gets or sets the status of the task.
     */
    get Status(): TaskStatus {
        return <TaskStatus>this.PropertyBag._getItem(Schemas.TaskSchema.Status);
    }
    set Status(value: TaskStatus) {
        this.PropertyBag._setItem(Schemas.TaskSchema.Status, value);
    }

    /**
     * Gets a string representing the status of the task, localized according to the PreferredCulture property of the ExchangeService object the task is bound to.
     */
    get StatusDescription(): string {
        return <string>this.PropertyBag._getItem(Schemas.TaskSchema.StatusDescription);
    }

    /**
     * @nullable Gets or sets the total amount of work spent on the task.
     */
    get TotalWork(): number {
        return <number>this.PropertyBag._getItem(Schemas.TaskSchema.TotalWork);
    }
    set TotalWork(value: number) {
        this.PropertyBag._setItem(Schemas.TaskSchema.TotalWork, value);
    }

    /**
     * @internal    @nullable   Gets the default setting for how to treat affected task occurrences on Delete.
     */
    get DefaultAffectedTaskOccurrences(): AffectedTaskOccurrence {
        return AffectedTaskOccurrence.AllOccurrences;
    }

    /**
     * Initializes an unsaved local instance of **Task**. To bind to an existing task, use Task.Bind() instead.
     *
     * @param   {ExchangeService}   service   The ExchangeService instance to which this task is bound.
     */
    constructor(service: ExchangeService);
    /**
     * @internal    Initializes a new instance of the **Task** class.
     *
     * @param   {ItemAttachment}   parentAttachment   The parent attachment.
     */
    constructor(parentAttachment: ItemAttachment);
    constructor(serviceOrParentAttachment: ExchangeService | ItemAttachment) {
        super(serviceOrParentAttachment);
    }

    /**
     * Binds to an existing task and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the task.
     * @param   {ItemId}            id            The Id of the task to bind to.
     * @param   {PropertySet}       propertySet   The set of properties to load.
     * @return  {IPromise<Task>}    A Task instance representing the task corresponding to the specified Id :Promise.
     */
    public static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): IPromise<Task>;
    /**
     * Binds to an existing task and loads its first class properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the task.
     * @param   {ItemId}            id            The Id of the task to bind to.
     * @return  {IPromise<Task>}    A Task instance representing the task corresponding to the specified Id :Promise.
     */
    public static Bind(service: ExchangeService, id: ItemId): IPromise<Task>;
    public static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet = PropertySet.FirstClassProperties): IPromise<Task> {
        return service.BindToItem<Task>(id, propertySet, Task);
    }

    /**
     * Deletes the current occurrence of a recurring task. After the current occurrence isdeleted, the task represents the next occurrence. 
     * Developers should call Load to retrieve the new property values of the task. 
     * Calling this method results in a call to EWS.
     *
     * @param   {DeleteMode}   deleteMode   The deletion mode.
     * @return  {IPromise<void>}            :Promise.
     */
    DeleteCurrentOccurrence(deleteMode: DeleteMode): IPromise<void> {
        return this.InternalDelete(
            deleteMode,
            null,
            AffectedTaskOccurrence.SpecifiedOccurrenceOnly);
    }

    /**
     * @internal Gets a value indicating whether a time zone SOAP header should be emitted in a CreateItem or UpdateItem request so this item can be property saved or updated.
     *
     * @param   {boolean}   isUpdateOperation   Indicates whether the operation being petrformed is an update operation.
     * @return  {boolean}   *true* if a time zone SOAP header should be emitted; otherwise, *false*.
     */
    GetIsTimeZoneHeaderRequired(isUpdateOperation: boolean): boolean {
        return true;
    }

    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion {
        return ExchangeVersion.Exchange2007_SP1;
    }

    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    GetSchema(): ServiceObjectSchema {
        return Schemas.TaskSchema.Instance;
    }

    /**
     * @internal Gets the element name of item in XML
     * 
     * @return  {string} name of elelment
     */
    GetXmlElementName(): string {
        return XmlElementNames.Task;
    }

    /**
     * Applies the local changes that have been made to this task. Calling this method results in at least one call to EWS. 
     * Mutliple calls to EWS might be made if attachments have been added or removed.
     *
     * @param   {ConflictResolutionMode}    conflictResolutionMode   Specifies how conflicts should be resolved.
     * @return  {IPromise<Task>}            A Task object representing the completed occurrence if the task is recurring and the update marks it as completed; or a Task object representing the current occurrence if the task is recurring and the uypdate changed its recurrence pattern; or null in every other case    :Promise.
     */
    Update(conflictResolutionMode: ConflictResolutionMode): IPromise<Task>;
    /** @internal ~~ workaround 52 */
    Update(conflictResolutionMode: ConflictResolutionMode): IPromise<any>;
    Update(conflictResolutionMode: ConflictResolutionMode): IPromise<Task> {
        return this.InternalUpdate(
            null /* parentFolder */,
            conflictResolutionMode,
            MessageDisposition.SaveOnly,
            null);
    }
}