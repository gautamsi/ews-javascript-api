import { Convert } from "../ExtensionMethods";
import { EwsLogging } from "../Core/EwsLogging";
import { XmlElementNames } from "../Core/XmlElementNames";

/**
 * Represents a sharing location.
 * @sealed
 */
export class DocumentSharingLocation {
  /**
   * The URL of the web service to use to manipulate documents at the sharing location.
   */
  private serviceUrl: string = null;

  /**
   * The URL of the sharing location (for viewing the contents in a web browser).
   */
  private locationUrl: string = null;

  /**
   * The display name of the location.
   */
  private displayName: string = null;

  /**
   * The set of file extensions that are allowed at the location.
   */
  private supportedFileExtensions: string[] = [];

  /**
   * Indicates whether external users (outside the enterprise/tenant) can view documents at the location.
   */
  private externalAccessAllowed: boolean = false;

  /**
   * Indicates whether anonymous users can view documents at the location.
   */
  private anonymousAccessAllowed: boolean = false;

  /**
   * Indicates whether the user can modify permissions for documents at the location.
   */
  private canModifyPermissions: boolean = false;

  /**
   * Indicates whether this location is the user's default location. This will generally be their My Site.
   */
  private isDefault: boolean = false;

  // ref: no need to have setter for all properties as all of them are private, can directly be assigned to private variables.

  /**
   * Gets the URL of the web service to use to manipulate documents at the sharing location.
   */
  get ServiceUrl(): string {
    return this.serviceUrl;
  }

  /**
   * Gets the URL of the sharing location (for viewing the contents in a web browser).
   */
  get LocationUrl(): string {
    return this.locationUrl;
  }

  /**
   * Gets the display name of the location.
   */
  get DisplayName(): string {
    return this.displayName;
  }

  /**
   * Gets the space-separated list of file extensions that are allowed at the location.
   * @remarks Example:  "docx pptx xlsx"
   */
  get SupportedFileExtensions(): string[] {
    return this.supportedFileExtensions;
  }

  /**
   * Gets a flag indicating whether external users (outside the enterprise/tenant) can view documents at the location.
   */
  get ExternalAccessAllowed(): boolean {
    return this.externalAccessAllowed;
  }

  /**
   * Gets a flag indicating whether anonymous users can view documents at the location.
   */
  get AnonymousAccessAllowed(): boolean {
    return this.anonymousAccessAllowed;
  }

  /**
   * Gets a flag indicating whether the user can modify permissions for documents at the location.
   * @remarks This will be true for the user's "My Site," for example. However, documents at team and project sites will typically be ACLed by the site owner, so the user will not be able to modify permissions. This will most likely by false even if the caller is the owner, to avoid surprises. They should go to SharePoint to modify permissions for team and project sites.
   */
  get CanModifyPermissions(): boolean {
    return this.canModifyPermissions;
  }

  /**
   * Gets a flag indicating whether this location is the user's default location.  This will generally be their My Site.
   */
  get IsDefault(): boolean {
    return this.isDefault;
  }

  /**
   * Initializes a new instance of the **DocumentSharingLocation** class.
   */
  private constructor() {
  }

  /**
   * @internal Loads DocumentSharingLocation instance.
   *
   * @param   {any} jsObject  Json Object converted from XML.
   */
  static LoadFromXmlJsObject(jsObject: any): DocumentSharingLocation {
    EwsLogging.Assert(false, "DocumentSharingLocation.LoadFromXmlJsObject", "Please provide feedback if this is successful or failed.", true);
    const location: DocumentSharingLocation = new DocumentSharingLocation();
    location.serviceUrl = jsObject[XmlElementNames.ServiceUrl];
    location.locationUrl = jsObject[XmlElementNames.LocationUrl];
    location.displayName = jsObject[XmlElementNames.DisplayName];
    location.supportedFileExtensions = [];
    const supportedFileExtensions = jsObject[XmlElementNames.SupportedFileExtensions];
    let extensions = supportedFileExtensions[XmlElementNames.FileExtension];
    if (!Array.isArray(extensions)) {
      extensions = [extensions]
    }
    for (let i = 0; i < extensions.length; i++) {
      location.supportedFileExtensions.push(extensions[i]);
    }
    jsObject[XmlElementNames.SupportedFileExtensions];
    location.externalAccessAllowed = Convert.toBool(jsObject[XmlElementNames.ExternalAccessAllowed]);
    location.anonymousAccessAllowed = Convert.toBool(jsObject[XmlElementNames.AnonymousAccessAllowed]);
    location.canModifyPermissions = Convert.toBool(jsObject[XmlElementNames.CanModifyPermissions]);
    location.isDefault = Convert.toBool(jsObject[XmlElementNames.IsDefault]);
    return location;
  }
}
