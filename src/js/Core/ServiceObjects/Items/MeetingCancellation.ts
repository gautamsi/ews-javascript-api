import { CalendarActionResults } from "../../../Misc/CalendarActionResults";
import { DateTime } from "../../../DateTime";
import { EnhancedLocation } from "../../../ComplexProperties/EnhancedLocation";
import { ExchangeService } from "../../ExchangeService";
import { ExchangeVersion } from "../../../Enumerations/ExchangeVersion";
import { Item } from "../Items/Item";
import { ItemAttachment } from "../../../ComplexProperties/ItemAttachment";
import { ItemId } from "../../../ComplexProperties/ItemId";
import { Promise } from "../../../Promise";
import { PropertySet } from "../../PropertySet";
import { Recurrence } from "../../../ComplexProperties/Recurrence/Patterns/Recurrence";
import { RemoveFromCalendar } from "../ResponseObjects/RemoveFromCalendar";
import { Schemas } from "../Schemas/Schemas";
import { ServiceObjectSchema } from "../Schemas/ServiceObjectSchema";
import { XmlElementNames } from "../../XmlElementNames";

import { MeetingMessage } from "./MeetingMessage";
/**
 * Represents a meeting cancellation message. Properties available on meeting messages are defined in the MeetingMessageSchema class.
 */
export class MeetingCancellation extends MeetingMessage {
  /**
   * Gets the start time of the appointment.
   */
  get Start(): DateTime {
    return <DateTime>this.PropertyBag._getItem(Schemas.MeetingCancellationSchema.Start);
  }

  /**
   * Gets the end time of the appointment.
   */
  get End(): DateTime {
    return <DateTime>this.PropertyBag._getItem(Schemas.MeetingCancellationSchema.End);
  }

  /**
   * Gets the location of this appointment.
   */
  get Location(): string {
    return <string>this.PropertyBag._getItem(Schemas.MeetingCancellationSchema.Location);
  }

  /**
   * Gets the recurrence pattern for this meeting request.
   */
  get Recurrence(): Recurrence {
    return <Recurrence>this.PropertyBag._getItem(Schemas.AppointmentSchema.Recurrence);
  }

  /**
   * Gets the Enhanced location object.
   */
  get EnhancedLocation(): EnhancedLocation {
    return <EnhancedLocation>this.PropertyBag._getItem(Schemas.MeetingCancellationSchema.EnhancedLocation);
  }

  /**
   * @internal Initializes a new instance of the **MeetingCancellation** class.
   *
   * @param   {ExchangeService}   service   EWS service to which this object belongs.
   */
  constructor(service: ExchangeService);
  /**
   * @internal Initializes a new instance of the **MeetingCancellation** class.
   *
   * @param   {ItemAttachment}   parentAttachment   The parent attachment.
   */
  constructor(parentAttachment: ItemAttachment);
  constructor(serviceOrParentAttachment: ExchangeService | ItemAttachment) {
    super(serviceOrParentAttachment);
  }

  /**
   * Binds to an existing meeting cancellation message and loads the specified set of properties.
   * Calling this method results in a call to EWS.
   *
   * @param   {ExchangeService}   service       The service to use to bind to the meeting cancellation message.
   * @param   {ItemId}            id            The Id of the meeting cancellation message to bind to.
   * @param   {PropertySet}       propertySet   The set of properties to load.
   * @return  {Promise<MeetingCancellation>}   A MeetingCancellation instance representing the meeting cancellation message corresponding to the specified Id   :Promise.
   */
  public static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): Promise<MeetingCancellation>;
  /**
   * Binds to an existing meeting cancellation message and loads its first class properties.
   * Calling this method results in a call to EWS.
   *
   * @param   {ExchangeService}   service       The service to use to bind to the meeting cancellation message.
   * @param   {ItemId}            id            The Id of the meeting cancellation message to bind to.
   * @param   {PropertySet}       propertySet   The set of properties to load.
   * @return  {Promise<MeetingCancellation>}   A MeetingCancellation instance representing the meeting cancellation message corresponding to the specified Id   :Promise.
   */
  public static Bind(service: ExchangeService, id: ItemId): Promise<MeetingCancellation>;
  public static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet = PropertySet.FirstClassProperties): Promise<MeetingCancellation> {
    return service.BindToItem<MeetingCancellation>(id, propertySet, MeetingCancellation);
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
    return Schemas.MeetingCancellationSchema.Instance;
  }

  /**
   * @internal Gets the element name of item in XML
   *
   * @return  {string} name of elelment
   */
  GetXmlElementName(): string {
    return XmlElementNames.MeetingCancellation;
  }

  /**
   * Removes the meeting associated with the cancellation message from the user's calendar.
   *
   * @return  {Promise<CalendarActionResults>}      A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
   */
  async RemoveMeetingFromCalendar(): Promise<CalendarActionResults> {
    let removeFromCalendar = new RemoveFromCalendar(this);

    const items: Item[] = await removeFromCalendar.InternalCreate(null, null);
    return new CalendarActionResults(items);
  }
}
