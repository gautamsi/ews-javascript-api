import { Appointment } from "../Items/Appointment";
import { CalendarView } from "../../../Search/CalendarView";
import { EwsLogging } from "../../EwsLogging";
import { EwsUtilities } from "../../EwsUtilities";
import { ExchangeService } from "../../ExchangeService";
import { ExchangeVersion } from "../../../Enumerations/ExchangeVersion";
import { FindItemResponse } from "../../Responses/FindItemResponse";
import { FindItemsResults } from "../../../Search/FindItemsResults";
import { FolderId } from "../../../ComplexProperties/FolderId";
import { Promise } from "../../../Promise";
import { Item } from "../Items/Item";
import { PropertySet } from "../../PropertySet";
import { SearchFilter } from "../../../Search/Filters/SearchFilter";
import { ServiceResponseCollection } from "../../Responses/ServiceResponseCollection";
import { TypeContainer } from "../../../TypeContainer";
import { WellKnownFolderName } from "../../../Enumerations/WellKnownFolderName";
import { XmlElementNames } from "../../XmlElementNames";
import { Folder } from "./Folder";
/**
 * Represents a folder containing appointments.
 */
export class CalendarFolder extends Folder {
  /**
   * Initializes an unsaved local instance of **CalendarFolder**. To bind to an existing calendar folder, use CalendarFolder.Bind() instead.
   *
   * @param   {ExchangeService}   service   The ExchangeService object to which the calendar folder will be bound.
   */
  constructor(service: ExchangeService) {
    super(service);
  }

  /**
   * Binds to an existing calendar folder and loads its first class properties.
   * Calling this method results in a call to EWS.
   *
   * @param   {ExchangeService}   service       The service to use to bind to the calendar folder.
   * @param   {FolderId}          id            The Id of the calendar folder to bind to.
   * @return  {Promise<CalendarFolder>}      A CalendarFolder instance representing the folder corresponding to the specified Id :Promise.
   */
  static Bind(service: ExchangeService, id: FolderId): Promise<CalendarFolder>;
  /**
   * Binds to an existing calendar folder and loads its first class properties.
   * Calling this method results in a call to EWS.
   *
   * @param   {ExchangeService}       service       The service to use to bind to the calendar folder.
   * @param   {WellKnownFolderName}   name          The name of the calendar folder to bind to.
   * @return  {Promise<CalendarFolder>}      A CalendarFolder instance representing the folder corresponding to the specified name :Promise.
   */
  static Bind(service: ExchangeService, name: WellKnownFolderName): Promise<CalendarFolder>;
  /**
   * Binds to an existing calendar folder and loads the specified set of properties.
   * Calling this method results in a call to EWS.
   *
   * @param   {ExchangeService}   service       The service to use to bind to the calendar folder.
   * @param   {FolderId}          id            The Id of the calendar folder to bind to.
   * @param   {PropertySet}       propertySet   The set of properties to load.
   * @return  {Promise<CalendarFolder>}      A CalendarFolder instance representing the folder corresponding to the specified Id :Promise.
   */
  static Bind(service: ExchangeService, id: FolderId, propertySet: PropertySet): Promise<CalendarFolder>;
  /**
   * Binds to an existing calendar folder and loads the specified set of properties.
   * Calling this method results in a call to EWS.
   *
   * @param   {ExchangeService}       service       The service to use to bind to the folder.
   * @param   {WellKnownFolderName}   name          The name of the folder to bind to.
   * @param   {PropertySet}           propertySet   The set of properties to load.
   * @return  {Promise<CalendarFolder>}      A CalendarFolder instance representing the folder corresponding to the specified name :Promise.
   */
  static Bind(service: ExchangeService, name: WellKnownFolderName, propertySet: PropertySet): Promise<CalendarFolder>;
  static Bind(service: ExchangeService, idOrName: FolderId | WellKnownFolderName, propertySet: PropertySet = PropertySet.FirstClassProperties): Promise<CalendarFolder> {
    if (idOrName instanceof FolderId) {
      return service.BindToFolder<CalendarFolder>(idOrName, propertySet, TypeContainer.CalendarFolder);
    } else if (typeof idOrName === "number") {
      return service.BindToFolder<CalendarFolder>(new FolderId(idOrName), propertySet, TypeContainer.CalendarFolder);
    }
    EwsLogging.Assert(false, "CalendarFolder.Bind", "unknown paramete type");
    throw new Error("unknow parameter type. this should not be  reached");
  }

  /**
   * Obtains a list of appointments by searching the contents of this folder and performing recurrence expansion for recurring appointments. Calling this method results in a call to EWS.
   *
   * @param   {CalendarView}   view   The view controlling the range of appointments returned.
   * @return  {FindItemsResults<Appointment>}          An object representing the results of the search operation.
   */
  async FindAppointments(view: CalendarView): Promise<FindItemsResults<Appointment>> {
    EwsUtilities.ValidateParam(view, "view");
    const responses: ServiceResponseCollection<FindItemResponse<Appointment>> = await this.InternalFindItems<Appointment>(
      <SearchFilter>null,
      view,
      null /* groupBy */
      );
    return responses.__thisIndexer(0).Results;
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
   * @internal Gets the element name of item in XML
   *
   * @return  {string} name of elelment
   */
  GetXmlElementName(): string {
    return XmlElementNames.CalendarFolder;
  }
}
