import { EwsLogging } from "../Core/EwsLogging";
import { EwsUtilities } from "../Core/EwsUtilities";
import { ExchangeService } from "../Core/ExchangeService";
import { ExchangeVersion } from "../Enumerations/ExchangeVersion";
import { PropertyBag } from "../Core/PropertyBag";
import { PropertyDefinitionFlags } from "../Enumerations/PropertyDefinitionFlags";
import { StringHelper } from "../ExtensionMethods";

import { TaskDelegationState } from "../Enumerations/TaskDelegationState";
import { GenericPropertyDefinition } from "./GenericPropertyDefinition";
/**
 * @internal Represents a task delegation property definition.
 */
export class TaskDelegationStatePropertyDefinition extends GenericPropertyDefinition<TaskDelegationState> {
    private static NoMatch: string = "NoMatch";
    private static OwnNew: string = "OwnNew";
    private static Owned: string = "Owned";
    private static Accepted: string = "Accepted";

    /**
     * @internal Initializes a new instance of the **TaskDelegationStatePropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion) {
        super(propertyName, xmlElementName, uri, flags, version, false); //ref: not setting enumType as this.ToString Method covers for the string conversion
    }

    /**
     * @internal Parses the specified value (added to workaround Generic based value conversion in c#).
     *
     * @param   {string}    value   The value.
     * @return  {any}       Value of string.
     */
    Parse(value: string): any {
        switch (value) {
            case TaskDelegationStatePropertyDefinition.NoMatch:
                return TaskDelegationState.NoDelegation;
            case TaskDelegationStatePropertyDefinition.OwnNew:
                return TaskDelegationState.Unknown;
            case TaskDelegationStatePropertyDefinition.Owned:
                return TaskDelegationState.Accepted;
            case TaskDelegationStatePropertyDefinition.Accepted:
                return TaskDelegationState.Declined;
            default:
                EwsLogging.Assert(
                    false,
                    "TaskDelegationStatePropertyDefinition.Parse",
                    StringHelper.Format("TaskDelegationStatePropertyDefinition.Parse(): value {0} cannot be handled.", value));
                return null; // To keep the compiler happy
        }
    }

    /**
     * Convert instance to string.
     *
     * @param   {any}       value   The value.
     * @return  {string}    TaskDelegationState value.
     */
    ToString(value?: any): string {
        let taskDelegationState: TaskDelegationState = <TaskDelegationState>value;

        switch (taskDelegationState) {
            case TaskDelegationState.NoDelegation:
                return TaskDelegationStatePropertyDefinition.NoMatch;
            case TaskDelegationState.Unknown:
                return TaskDelegationStatePropertyDefinition.OwnNew;
            case TaskDelegationState.Accepted:
                return TaskDelegationStatePropertyDefinition.Owned;
            case TaskDelegationState.Declined:
                return TaskDelegationStatePropertyDefinition.Accepted;
            default:
                EwsLogging.Assert(
                    false,
                    "TaskDelegationStatePropertyDefinition.ToString",
                    "Invalid TaskDelegationState value.");
                return null; // To keep the compiler happy
        }
    }
}