import { AffectedTaskOccurrence } from "../../../Enumerations/AffectedTaskOccurrence";
import { ArchiveTag } from "../../../ComplexProperties/ArchiveTag";
import { DeleteMode } from "../../../Enumerations/DeleteMode";
import { EffectiveRights } from "../../../Enumerations/EffectiveRights";
import { EwsLogging } from "../../EwsLogging";
import { ExchangeService } from "../../ExchangeService";
import { ExchangeVersion } from "../../../Enumerations/ExchangeVersion";
import { ExtendedPropertyCollection } from "../../../ComplexProperties/ExtendedPropertyCollection";
import { ExtendedPropertyDefinition } from "../../../PropertyDefinitions/ExtendedPropertyDefinition";
import { FindFoldersResults } from "../../../Search/FindFoldersResults";
import { FindItemResponse } from "../../Responses/FindItemResponse";
import { FindItemsResults } from "../../../Search/FindItemsResults";
import { FolderId } from "../../../ComplexProperties/FolderId";
import { FolderPermissionCollection } from "../../../ComplexProperties/FolderPermissionCollection";
import { FolderView } from "../../../Search/FolderView";
import { GroupedFindItemsResults } from "../../../Search/GroupedFindItemsResults";
import { Grouping } from "../../../Search/Grouping";
import { Item } from "../Items/Item";
import { ItemView } from "../../../Search/ItemView";
import { ManagedFolderInformation } from "../../../ComplexProperties/ManagedFolderInformation";
import { PolicyTag } from "../../../ComplexProperties/PolicyTag";
import { Promise } from "../../../Promise";
import { PropertyDefinition } from "../../../PropertyDefinitions/PropertyDefinition";
import { PropertySet } from "../../PropertySet";
import { Schemas } from "../Schemas/Schemas";
import { SearchFilter } from "../../../Search/Filters/SearchFilter";
import { SendCancellationsMode } from "../../../Enumerations/SendCancellationsMode";
import { ServiceErrorHandling } from "../../../Enumerations/ServiceErrorHandling";
import { ServiceObjectSchema } from "../Schemas/ServiceObjectSchema";
import { ServiceResponse } from "../../Responses/ServiceResponse";
import { ServiceResponseCollection } from "../../Responses/ServiceResponseCollection";
import { ViewBase } from "../../../Search/ViewBase";
import { WellKnownFolderName } from "../../../Enumerations/WellKnownFolderName";
import { XmlElementNames } from "../../XmlElementNames";

import { ServiceObject } from "../ServiceObject";
export class Folder extends ServiceObject {
  /**
   * Gets the Id of the folder.
   *
   */
  get Id(): FolderId {
    return <FolderId>this.PropertyBag._getItem(this.GetIdPropertyDefinition());
  }

  /**
   * Gets the Id of this folder's parent folder.
   *
   */
  get ParentFolderId(): FolderId {
    return <FolderId>this.PropertyBag._getItem(Schemas.FolderSchema.ParentFolderId);
  }

  /**
   * Gets the number of child folders this folder has.
   *
   */
  get ChildFolderCount(): number {
    return <number>this.PropertyBag._getItem(Schemas.FolderSchema.ChildFolderCount);
  }

  /**
   * Gets or sets the display name of the folder.
   *
   */
  get DisplayName(): string {
    return <string>this.PropertyBag._getItem(Schemas.FolderSchema.DisplayName);
  }
  set DisplayName(value: string) {
    this.PropertyBag._setItem(Schemas.FolderSchema.DisplayName, value);
  }

  /**
   * Gets or sets the custom class name of this folder.
   *
   */
  get FolderClass(): string {
    return <string>this.PropertyBag._getItem(Schemas.FolderSchema.FolderClass);
  }
  set FolderClass(value: string) {
    this.PropertyBag._setItem(Schemas.FolderSchema.FolderClass, value);
  }

  /**
   * Gets the total number of items contained in the folder.
   *
   */
  get TotalCount(): number {
    return <number>this.PropertyBag._getItem(Schemas.FolderSchema.TotalCount);
  }

  /**
   * Gets a list of extended properties associated with the folder. **Unstable Need testing**
   *
   */
  get ExtendedProperties(): ExtendedPropertyCollection {
    return <ExtendedPropertyCollection>this.PropertyBag._getItem(ServiceObjectSchema.ExtendedProperties);
  }

  /**
   * Gets the Email Lifecycle Management (ELC) information associated with the folder.
   *
   */
  get ManagedFolderInformation(): ManagedFolderInformation {
    return <ManagedFolderInformation>this.PropertyBag._getItem(Schemas.FolderSchema.ManagedFolderInformation);
  }

  /**
   * Gets a value indicating the effective rights the current authenticated user has on the folder.
   *
   */
  get EffectiveRights(): EffectiveRights {
    return <EffectiveRights>this.PropertyBag._getItem(Schemas.FolderSchema.EffectiveRights);
  }

  /**
   * Gets a list of permissions for the folder.
   *
   */
  get Permissions(): FolderPermissionCollection {
    return <FolderPermissionCollection>this.PropertyBag._getItem(Schemas.FolderSchema.Permissions);
  }

  /**
   * Gets the number of unread items in the folder.
   *
   */
  get UnreadCount(): number {
    return <number>this.PropertyBag._getItem(Schemas.FolderSchema.UnreadCount);
  }

  /**
   * Gets or sets the policy tag.
   *
   */
  get PolicyTag(): PolicyTag {
    return <PolicyTag>this.PropertyBag._getItem(Schemas.FolderSchema.PolicyTag);
  }
  set PolicyTag(value: PolicyTag) {
    this.PropertyBag._setItem(Schemas.FolderSchema.PolicyTag, value);
  }

  /**
   * Gets or sets the archive tag.
   *
   */
  get ArchiveTag(): ArchiveTag {
    return <ArchiveTag>this.PropertyBag._getItem(Schemas.FolderSchema.ArchiveTag);
  }
  set ArchiveTag(value) {
    this.PropertyBag._setItem(Schemas.FolderSchema.ArchiveTag, value);
  }

  /**
   * Gets the well known name of this folder, if any, as a string.
   * **value** - The well known name of this folder as a string, or null if this folder isn't a well known folder.
   *
   */
  get WellKnownFolderNameAsString(): string {
    return WellKnownFolderName[<WellKnownFolderName>this.PropertyBag._getItem(Schemas.FolderSchema.WellKnownFolderName)];
  }

  /**
   * Gets the well known name of this folder, if any.
   * **value** - The well known name of this folder, or null if this folder isn't a well known folder.
   *
   */
  get WellKnownFolderName(): WellKnownFolderName {
    return WellKnownFolderName[this.WellKnownFolderNameAsString] || null;
  }

  /**
   * _FolderTYpe -> type of folder, use to avoid folder type detection using instanceof. some cases it has circular loop in nodejs/requirejs
   */
  //get _FolderType(): string { return XmlElementNames.Folder; }

  /**
   * Initializes an unsaved local instance of **Folder**. To bind to an existing folder, use Folder.Bind() instead.
   *
   * @param   {ExchangeService}   service   EWS service to which this object belongs.
   */
  constructor(service: ExchangeService) {
    super(service);
  }

  /**
   * Binds to an existing folder, whatever its actual type is, and loads the specified set of properties.
   * Calling this method results in a call to EWS.
   *
   * @param   {ExchangeService}   service       The service to use to bind to the folder.
   * @param   {FolderId}          id            The Id of the folder to bind to.
   * @return  {Promise<Folder>}      A Folder instance representing the folder corresponding to the specified Id :Promise.
   */
  static Bind(service: ExchangeService, id: FolderId): Promise<Folder>;
  /**
   * Binds to an existing folder, whatever its actual type is, and loads the specified set of properties.
   * Calling this method results in a call to EWS.
   *
   * @param   {ExchangeService}       service       The service to use to bind to the folder.
   * @param   {WellKnownFolderName}   name          The name of the folder to bind to.
   * @return  {Promise<Folder>}      A Folder instance representing the folder corresponding to the specified name :Promise.
   */
  static Bind(service: ExchangeService, name: WellKnownFolderName): Promise<Folder>;
  /**
   * Binds to an existing folder, whatever its actual type is, and loads the specified set of properties.
   * Calling this method results in a call to EWS.
   *
   * @param   {ExchangeService}   service       The service to use to bind to the folder.
   * @param   {FolderId}          id            The Id of the folder to bind to.
   * @param   {PropertySet}       propertySet   The set of properties to load.
   * @return  {Promise<Folder>}      A Folder instance representing the folder corresponding to the specified Id :Promise.
   */
  static Bind(service: ExchangeService, id: FolderId, propertySet: PropertySet): Promise<Folder>;
  /**
   * Binds to an existing folder, whatever its actual type is, and loads the specified set of properties.
   * Calling this method results in a call to EWS.
   *
   * @param   {ExchangeService}       service       The service to use to bind to the folder.
   * @param   {WellKnownFolderName}   name          The name of the folder to bind to.
   * @param   {PropertySet}           propertySet   The set of properties to load.
   * @return  {Promise<Folder>}      A Folder instance representing the folder corresponding to the specified name :Promise.
   */
  static Bind(service: ExchangeService, name: WellKnownFolderName, propertySet: PropertySet): Promise<Folder>;
  static Bind(service: ExchangeService, idOrName: FolderId | WellKnownFolderName, propertySet: PropertySet = PropertySet.FirstClassProperties): Promise<Folder> {
    if (idOrName instanceof FolderId) {
      return service.BindToFolder(idOrName, propertySet);
    } else if (typeof idOrName === "number") {
      return service.BindToFolder(new FolderId(idOrName), propertySet);
    }
    EwsLogging.Assert(false, "Folder.Bind", "unknown paramete type");
    throw new Error("unknow parameter type. this should not be  reached");
  }

  /**
   * Copies this folder into the specified folder. Calling this method results in a call to EWS.
   *
   * @param   {WellKnownFolderName}   destinationFolderName   The name of the folder in which to copy this folder.
   * @return  {Promise<Folder>}      A Folder representing the copy of this folder :Promise.
   */
  Copy(destinationFolderName: WellKnownFolderName): Promise<Folder>;
  /**
   * Copies this folder into a specific folder. Calling this method results in a call to EWS.
   *
   * @param   {FolderId}   destinationFolderId    The Id of the folder in which to copy this folder.
   * @return  {Promise<Folder>}                  A Folder representing the copy of this folder :Promise.
   */
  Copy(destinationFolderId: FolderId): Promise<Folder>;
  Copy(destinationFolderIdOrName: FolderId | WellKnownFolderName): Promise<Folder> {
    this.ThrowIfThisIsNew();
    //EwsUtilities.ValidateParam(destinationFolderId, "destinationFolderId");

    if (typeof destinationFolderIdOrName === "undefined") {
      EwsLogging.Assert(false, "Folder.Copy", "unknown paramete type");
      throw new Error("unknow parameter type. this should not be  reached");
    }
    var folderId: FolderId = <FolderId>destinationFolderIdOrName;
    if (typeof destinationFolderIdOrName === "number") {
      folderId = new FolderId(destinationFolderIdOrName);
    }

    return this.Service.CopyFolder(this.Id, folderId);
  }

  /**
   * Deletes the folder. Calling this method results in a call to EWS.
   *
   * @param   {DeleteMode}   deleteMode   Deletion mode.
   */
  Delete(deleteMode: DeleteMode): Promise<void> {
    return this.InternalDelete(deleteMode, null, null);
  }

  /**
   * Empties the folder. Calling this method results in a call to EWS.
   *
   * @param   {DeleteMode}    deleteMode         The deletion mode.
   * @param   {boolean}       deleteSubFolders   Indicates whether sub-folders should also be deleted.
   */
  Empty(deleteMode: DeleteMode, deleteSubFolders: boolean): Promise<void> {
    this.ThrowIfThisIsNew();
    return this.Service.EmptyFolder(
      this.Id,
      deleteMode,
      deleteSubFolders);
  }

  /**
   * Obtains a list of folders by searching the sub-folders of this folder. Calling this method results in a call to EWS.
   *
   * @param   {FolderView}   view           The view controlling the number of folders returned.
   * @return  {Promise<FindFoldersResults>}      An object representing the results of the search operation :Promise.
   */
  FindFolders(view: FolderView): Promise<FindFoldersResults>;
  /**
   * Obtains a list of folders by searching the sub-folders of this folder. Calling this method results in a call to EWS.
   *
   * @param   {SearchFilter}      searchFilter    The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
   * @param   {FolderView}        view            The view controlling the number of folders returned.
   * @return  {Promise<FindFoldersResults>}      An object representing the results of the search operation :Promise.
   */
  FindFolders(searchFilter: SearchFilter, view: FolderView): Promise<FindFoldersResults>;
  FindFolders(viewOrSearchFilter: FolderView | SearchFilter, view?: FolderView): Promise<FindFoldersResults> {
    this.ThrowIfThisIsNew();
    //todo: better argument check with ewsutilities
    var argsLength = arguments.length;
    if (argsLength < 1 && argsLength > 2) {
      throw new Error("invalid arguments, check documentation and try again.");
    }

    if (viewOrSearchFilter instanceof FolderView) {
      return this.Service.FindFolders(this.Id, viewOrSearchFilter);
    } else if (viewOrSearchFilter instanceof SearchFilter) {
      if (typeof view === "undefined" || !(view instanceof FolderView)) {
        throw new Error("Folder.ts - FindFolders - incorrect uses of parameters at 2nd position, must be FolderView");
      }
      return this.Service.FindFolders(this.Id, viewOrSearchFilter, view);
    } else {
      throw new Error("Folder.ts - FindFolders - incorrect uses of parameters at 1st position, must be FolderView or SearchFilter");
    }
  }

  /**
   * Obtains a list of items by searching the contents of this folder. Calling this method results in a call to EWS.
   *
   * @param   {ItemView}  view          The view controlling the number of items returned.
   * @return  {Promise<FindItemsResults<Item>>}      An object representing the results of the search operation :Promise.
   */
  FindItems(view: ItemView): Promise<FindItemsResults<Item>>;
  /**
   * Obtains a grouped list of items by searching the contents of this folder. Calling this method results in a call to EWS.
   *
   * @param   {ItemView}      view           The view controlling the number of items returned.
   * @param   {Grouping}      groupBy        The grouping criteria.
   * @return  {Promise<GroupedFindItemsResults<Item>>}       A collection of grouped items representing the contents of this folder :Promise.
   */
  FindItems(view: ItemView, groupBy: Grouping): Promise<GroupedFindItemsResults<Item>>;
  /**
   * Obtains a list of items by searching the contents of this folder. Calling this method results in a call to EWS.
   *
   * @param   {string}    queryString   query string to be used for indexed search
   * @param   {ItemView}  view          The view controlling the number of items returned.
   * @return  {Promise<FindItemsResults<Item>>}      An object representing the results of the search operation :Promise.
   */
  FindItems(queryString: string, view: ItemView): Promise<FindItemsResults<Item>>;
  /**
   * Obtains a list of items by searching the contents of this folder. Calling this method results in a call to EWS.
   *
   * @param   {SearchFilter}  searchFilter   The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
   * @param   {ItemView}      view          The view controlling the number of items returned.
   * @return  {Promise<FindItemsResults<Item>>}      An object representing the results of the search operation :Promise.
   */
  FindItems(searchFilter: SearchFilter, view: ItemView): Promise<FindItemsResults<Item>>;
  /**
   * Obtains a grouped list of items by searching the contents of this folder. Calling this method results in a call to EWS.
   *
   * @param   {string}        queryString    Query string to be used for indexed search
   * @param   {ItemView}      view           The view controlling the number of items returned.
   * @param   {Grouping}      groupBy        The grouping criteria.
   * @return  {Promise<GroupedFindItemsResults<Item>>}       A collection of grouped items representing the contents of this folder :Promise.
   */
  FindItems(queryString: string, view: ItemView, groupBy: Grouping): Promise<GroupedFindItemsResults<Item>>;
  /**
   * Obtains a grouped list of items by searching the contents of this folder. Calling this method results in a call to EWS.
   *
   * @param   {SearchFilter}  searchFilter   The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
   * @param   {ItemView}      view           The view controlling the number of items returned.
   * @param   {Grouping}      groupBy        The grouping criteria.
   * @return  {Promise<GroupedFindItemsResults<Item>>}       A collection of grouped items representing the contents of this folder :Promise.
   */
  FindItems(searchFilter: SearchFilter, view: ItemView, groupBy: Grouping): Promise<GroupedFindItemsResults<Item>>;

  FindItems(
    viewQueryStringOrSearchFilter: string | ItemView | SearchFilter,
    viewOrGroupBy?: ItemView | Grouping,
    groupBy?: Grouping): Promise<FindItemsResults<Item> | GroupedFindItemsResults<Item>> {
    var argsLength = arguments.length;
    if (argsLength < 1 && argsLength > 3) {
      throw new Error("invalid arguments, check documentation and try again.");
    }

    //todo: better argument check with ewsutilities
    //EwsUtilities.ValidateParam(groupBy, "groupBy");
    //EwsUtilities.ValidateParamAllowNull(searchFilter, "searchFilter");
    //EwsUtilities.ValidateParamAllowNull(queryString, "queryString");

    //position 1 - viewQueryStringOrSearchFilter
    var queryString: string = null;
    var searchFilter: SearchFilter = null;
    var view: ItemView = null;

    if (typeof viewQueryStringOrSearchFilter === "string") {
      queryString = viewQueryStringOrSearchFilter;
    } else if (viewQueryStringOrSearchFilter instanceof SearchFilter) {
      searchFilter = viewQueryStringOrSearchFilter;
    } else if (viewQueryStringOrSearchFilter instanceof ViewBase) {
      view = viewQueryStringOrSearchFilter;
    } else {
      throw new Error("Folder.ts - FindItems - incorrect uses of parameters at 1st position, must be string, Itemview or SearchFilter");
    }

    var groupResultBy: Grouping = null;
    var isGroupped: boolean = false; // to resturn GroupedFindItemsResults<Item>

    //position 2 - viewOrGroupBy
    if (argsLength >= 2) {
      if (viewOrGroupBy instanceof Grouping) {
        if (!(viewQueryStringOrSearchFilter instanceof ItemView)) {
          throw new Error("Folder.ts - FindItems with " + argsLength + " parameters - incorrect uses of parameter at 1nd position, it must be Itemview when using Grouping at 2nd place");
        }
        groupResultBy = viewOrGroupBy;
        isGroupped = true;
      } else if (viewOrGroupBy instanceof ItemView) {
        view = viewOrGroupBy;
      } else {
        throw new Error("ExchangeService.ts - FindItems with " + argsLength + " parameters - incorrect uses of parameter at 2nd position, must be Itemsview or Grouping");
      }
    }

    //position 3 - groupBy
    if (argsLength === 3) {
      if (!(viewOrGroupBy instanceof ItemView)) {
        throw new Error("Folder.ts - FindItems with " + argsLength + " parameters - incorrect uses of parameter at 1nd position, it must be Itemview when using Grouping at 3rd place");
      }
      groupResultBy = <Grouping>groupBy;
      isGroupped = true;
    }

    return this.InternalFindItems<Item>(
      searchFilter || queryString,
      view,
      groupResultBy /* groupBy */).then(res => {
      if (isGroupped) {
        return res.__thisIndexer(0).GroupedFindResults;
      }
      return res.__thisIndexer(0).Results;
    });
  }

  /**
   * @internal Gets the element name of item in XML
   *
   * @return  {string} name of elelment
   */
  GetXmlElementName(): string {
    return XmlElementNames.Folder;
  }

  /**
   * @internal Gets the name of the change XML element.
   *
   * @return  {string}      XML element name,
   */
  GetChangeXmlElementName(): string {
    return XmlElementNames.FolderChange;
  }

  /**
   * @internal Gets the name of the delete field XML element.
   *
   * @return  {string}      XML element name,
   */
  GetDeleteFieldXmlElementName(): string {
    return XmlElementNames.DeleteFolderField;
  }

  /**
   * @internal Gets a list of extended properties defined on this object.
   *
   * @return  {ExtendedPropertyCollection}      Extended properties collection.
   */
  GetExtendedProperties(): ExtendedPropertyCollection {
    return this.ExtendedProperties;
  }

  /**
   * @internal Get the property definition for the Id property.
   *
   * @return  {PropertyDefinition}      A PropertyDefinition instance.
   */
  GetIdPropertyDefinition(): PropertyDefinition {
    return Schemas.FolderSchema.Id;
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
    return Schemas.FolderSchema.Instance;
  }

  /**
   * @internal Gets the name of the set field XML element.
   *
   * @return  {string}      XML element name,
   */
  GetSetFieldXmlElementName(): string {
    return XmlElementNames.SetFolderField;
  }

  /**
   * @internal Deletes the object.
   *
   * @param   {DeleteMode}                deleteMode                The deletion mode.
   * @param   {SendCancellationsMode}     sendCancellationsMode     Indicates whether meeting cancellation messages should be sent.
   * @param   {AffectedTaskOccurrence}    affectedTaskOccurrences   Indicate which occurrence of a recurring task should be deleted.
   */
  InternalDelete(deleteMode: DeleteMode, sendCancellationsMode?: SendCancellationsMode, affectedTaskOccurrences?: AffectedTaskOccurrence): Promise<void> {
    this.ThrowIfThisIsNew();
    return this.Service.DeleteFolder(this.Id, deleteMode);
  }

  /**
   * @internal Find items.
   *
   * @param   {string}    queryString   Query string to be used for indexed search
   * @param   {ViewBase}  view          The view controlling the number of items returned.
   * @param   {Grouping}  groupBy       The group by.
   * @return  {Promise<ServiceResponseCollection<FindItemResponse<TItem>>>}      FindItems response collection :Promise.
   */
  InternalFindItems<TItem extends Item>(queryString: string, view: ViewBase, groupBy: Grouping): Promise<ServiceResponseCollection<FindItemResponse<TItem>>>;
  /**
   * @internal Find items.
   *
   * @param   {SearchFilter}  searchFilter   The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
   * @param   {ViewBase}      view          The view controlling the number of items returned.
   * @param   {Grouping}      groupBy       The group by.
   * @return  {Promise<ServiceResponseCollection<FindItemResponse<TItem>>>}      FindItems response collection :Promise.
   */
  InternalFindItems<TItem extends Item>(searchFilter: SearchFilter, view: ViewBase, groupBy: Grouping): Promise<ServiceResponseCollection<FindItemResponse<TItem>>>;
  /**
   * ### ~~*shim used internally to minimize code flow logic from calling functions*~~
   */
  InternalFindItems<TItem extends Item>(searchFilterOrQueryString: SearchFilter | string, view: ViewBase, groupBy: Grouping): Promise<ServiceResponseCollection<FindItemResponse<TItem>>>;
  InternalFindItems<TItem extends Item>(searchFilterOrQueryString: SearchFilter | string, view: ViewBase, groupBy: Grouping): Promise<ServiceResponseCollection<FindItemResponse<TItem>>> {
    this.ThrowIfThisIsNew();
    var searchFilter: SearchFilter = null;
    var queryString = null;
    if (searchFilterOrQueryString instanceof SearchFilter) {
      searchFilter = searchFilterOrQueryString;
    } else if (typeof searchFilterOrQueryString === "string") {
      queryString = searchFilterOrQueryString;
    }
    //debug: //todo: //ref: verify if querystring is null
    return this.Service.FindItems<TItem>(
      [this.Id], // FolderId[]
      searchFilter /* searchFilter */,
      queryString /* queryString */,
      view,
      groupBy,
      ServiceErrorHandling.ThrowOnError
    );
  }

  /**
   * @internal Loads the specified set of properties on the object.
   *
   * @param   {PropertySet}   propertySet   The properties to load.
   */
  InternalLoad(propertySet: PropertySet): Promise<void> {
    this.ThrowIfThisIsNew();
    return this.Service.LoadPropertiesForFolder(this, propertySet);
  }

  /**
   * Marks all items in folder as read. Calling this method results in a call to EWS.
   *
   * @param   {boolean}   suppressReadReceipts   If true, suppress sending read receipts for items.
   */
  MarkAllItemsAsRead(suppressReadReceipts: boolean): Promise<void> {
    this.ThrowIfThisIsNew();
    return this.Service.MarkAllItemsAsRead(
      this.Id,
      true,
      suppressReadReceipts);
  }

  /**
   * Marks all items in folder as read. Calling this method results in a call to EWS.
   *
   * @param   {boolean}   suppressReadReceipts   If true, suppress sending read receipts for items.
   */
  MarkAllItemsAsUnread(suppressReadReceipts: boolean): Promise<void> {
    this.ThrowIfThisIsNew();
    return this.Service.MarkAllItemsAsRead(
      this.Id,
      false,
      suppressReadReceipts);
  }

  /**
   * Moves this folder to the specified folder. Calling this method results in a call to EWS.
   *
   * @param   {WellKnownFolderName}   destinationFolderName   The name of the folder in which to move this folder.
   * @return  {Promise<Folder>}      A new folder representing this folder in its new location. After Move completes, this folder does not exist anymore :Promise.
   */
  Move(destinationFolderName: WellKnownFolderName): Promise<Folder>;
  /**
   * Moves this folder to a specific folder. Calling this method results in a call to EWS.
   *
   * @param   {FolderId}   destinationFolderId   The Id of the folder in which to move this folder.
   * @return  {Promise<Folder>}      A new folder representing this folder in its new location. After Move completes, this folder does not exist anymore :Promise.
   */
  Move(destinationFolderId: FolderId): Promise<Folder>;
  Move(destinationFolderIdOrName: FolderId | WellKnownFolderName): Promise<Folder> {
    this.ThrowIfThisIsNew();
    if (typeof destinationFolderIdOrName === "undefined") {
      EwsLogging.Assert(false, "Folder.Move", "unknown paramete type");
      throw new Error("unknow parameter type. this should not be  reached");
    }
    //EwsUtilities.ValidateParam(destinationFolderId, "destinationFolderId");

    var folderId: FolderId = <FolderId>destinationFolderIdOrName;
    if (typeof destinationFolderIdOrName === "number") folderId = new FolderId(destinationFolderIdOrName);

    return this.Service.MoveFolder(this.Id, folderId);
  }

  /**
   * Removes an extended property.
   *
   * @param   {ExtendedPropertyDefinition}   extendedPropertyDefinition   The extended property definition.
   * @return  {boolean}       True if property was removed.
   */
  RemoveExtendedProperty(extendedPropertyDefinition: ExtendedPropertyDefinition): boolean {
    return this.ExtendedProperties.RemoveExtendedProperty(extendedPropertyDefinition);
  }

  /**
   * Saves this folder in a specific folder. Calling this method results in a call to EWS.
   *
   * @param   {WellKnownFolderName}   parentFolderName   The name of the folder in which to save this folder.
   */
  Save(parentFolderName: WellKnownFolderName): Promise<void>;
  /**
   * Saves this folder in a specific folder. Calling this method results in a call to EWS.
   *
   * @param   {FolderId}   parentFolderId   The Id of the folder in which to save this folder.
   */
  Save(parentFolderId: FolderId): Promise<void>;
  Save(parentFolderIdOrname: FolderId | WellKnownFolderName): Promise<void> {
    this.ThrowIfThisIsNotNew();
    if (typeof parentFolderIdOrname === "undefined") {
      EwsLogging.Assert(false, "Folder.Save", "unknown paramete type");
      throw new Error("unknow parameter type. this should not be  reached");
    }
    //EwsUtilities.ValidateParam(parentFolderId, "parentFolderId");
    var folderId: FolderId = <FolderId>parentFolderIdOrname;
    if (typeof parentFolderIdOrname === "number") folderId = new FolderId(parentFolderIdOrname);

    if (this.IsDirty) {
      return this.Service.CreateFolder(this, folderId);
    } else return null;
  }

  /**
   * Sets the extended property.
   *
   * @param   {ExtendedPropertyDefinition}    extendedPropertyDefinition   The extended property definition.
   * @param   {any}                           value                        The value.
   */
  SetExtendedProperty(extendedPropertyDefinition: ExtendedPropertyDefinition, value: any): void {
    this.ExtendedProperties.SetExtendedProperty(extendedPropertyDefinition, value);
  }

  /**
   * Applies the local changes that have been made to this folder. Calling this method results in a call to EWS.
   *
   */
  Update(): Promise<void> {
    if (this.IsDirty) {
      if (this.PropertyBag.GetIsUpdateCallNecessary()) {
        return this.Service.UpdateFolder(this);
      }
    }
    return undefined;
  }

  /**
   * @internal Validates this instance.
   *
   */
  Validate(): void {
    super.Validate();

    // Validate folder permissions
    if (this.PropertyBag.Contains(Schemas.FolderSchema.Permissions)) {
      this.Permissions.Validate();
    }
  }
}
