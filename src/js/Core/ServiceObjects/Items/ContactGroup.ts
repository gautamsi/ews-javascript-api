import {AttachableAttribute} from "../../../Attributes/AttachableAttribute";
import {ExchangeService} from "../../ExchangeService";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {GroupMemberCollection} from "../../../ComplexProperties/GroupMemberCollection";
import {IPromise} from "../../../Interfaces";
import {ItemAttachment} from "../../../ComplexProperties/ItemAttachment";
import {ItemId} from "../../../ComplexProperties/ItemId";
import {PropertySet} from "../../PropertySet";
import {Schemas} from "../Schemas/Schemas";
import {ServiceObjectPropertyException} from "../../../Exceptions/ServiceObjectPropertyException"
import {ServiceObjectSchema} from "../Schemas/ServiceObjectSchema";
import {Strings} from "../../../Strings"
import {XmlElementNames} from "../../XmlElementNames";

import {Item} from "./Item";
/**
 * Represents a Contact Group. Properties available on contact groups are defined in the ContactGroupSchema class.
 */
@AttachableAttribute(false)
export class ContactGroup extends Item {

    /**
     * Gets the name under which this contact group is filed as.
     * 
     * [RequiredServerVersion(ExchangeVersion.Exchange2010)]
     */
    get FileAs(): string {
        return <string>this.PropertyBag._getItem(Schemas.ContactSchema.FileAs)
    }

    /**
     * Gets or sets the display name of the contact group.
     */
    get DisplayName(): string {
        return <string>this.PropertyBag._getItem(Schemas.ContactSchema.DisplayName);
    }
    set DisplayName(value: string) {
        this.PropertyBag._setItem(Schemas.ContactSchema.DisplayName, value);
    }

    /**
     * Gets the members of the contact group.
     * 
     * [RequiredServerVersion(ExchangeVersion.Exchange2010)]
     */
    get Members(): GroupMemberCollection {
        return <GroupMemberCollection>this.PropertyBag._getItem(Schemas.ContactGroupSchema.Members);
    }

    /**
     * Initializes an unsaved local instance of the **ContactGroup** class.
     *
     * @param   {ExchangeService}   service   EWS service to which this object belongs.
     */
    constructor(service: ExchangeService);
    /**
     * @internal Initializes an unsaved local instance of the **ContactGroup** class.
     *
     * @param   {ItemAttachment}   parentAttachment   The parent attachment.
     */
    constructor(parentAttachment: ItemAttachment);
    constructor(serviceOrParentAttachment: ExchangeService | ItemAttachment) {
        super(serviceOrParentAttachment);
    }

    /**
     * Binds to an existing contact group and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the contact group.
     * @param   {ItemId}            id            The Id of the contact group to bind to.
     * @param   {PropertySet}       propertySet   The set of properties to load.
     * @return  {IPromise<ContactGroup>}    A ContactGroup instance representing the contact group corresponding to the specified Id    :Promise.
     */
    public static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): IPromise<ContactGroup>;
    /**
     * Binds to an existing contact group and loads its first class properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the contact group.
     * @param   {ItemId}            id            The Id of the contact group to bind to.
     * @param   {PropertySet}       propertySet   The set of properties to load.
     * @return  {IPromise<ContactGroup>}    A ContactGroup instance representing the contact group corresponding to the specified Id    :Promise.
     */
    public static Bind(service: ExchangeService, id: ItemId): IPromise<ContactGroup>;
    public static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet = PropertySet.FirstClassProperties): IPromise<ContactGroup> {
        return service.BindToItem<ContactGroup>(id, propertySet, ContactGroup);
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
        return Schemas.ContactGroupSchema.Instance;
    }

    /**
     * @internal Gets the element name of item in XML
     * 
     * @return  {string} name of elelment
     */
    GetXmlElementName(): string {
        return XmlElementNames.DistributionList;
    }

    /**
     *  @internal Sets the subject.
     *
     * @param   {string}   subject   The subject.
     */
    SetSubject(subject: string): void {
        // Set is disabled in client API even though it is implemented in protocol for Item.Subject.
        // Setting Subject out of sync with DisplayName breaks interop with OLK.
        throw new ServiceObjectPropertyException(Strings.PropertyIsReadOnly, Schemas.ContactGroupSchema.Subject);
    }
}