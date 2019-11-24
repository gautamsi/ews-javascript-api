import { EnumHelper, StringHelper } from "../ExtensionMethods";
import { EwsLogging } from "../Core/EwsLogging";
import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { EwsUtilities } from "../Core/EwsUtilities";
import { ExchangeService } from "../Core/ExchangeService";
import { ExchangeVersion } from "../Enumerations/ExchangeVersion";
import { FolderId } from "../ComplexProperties/FolderId";
import { InvalidOperationException } from "../Exceptions/InvalidOperationException";
import { ItemId } from "../ComplexProperties/ItemId";
import { Promise } from "../Promise";
import { PropertyException } from "../Exceptions/PropertyException";
import { ServiceVersionException } from "../Exceptions/ServiceVersionException";
import { Strings } from "../Strings";
import { UserConfigurationDictionary } from "../ComplexProperties/UserConfigurationDictionary";
import { UserConfigurationProperties } from "../Enumerations/UserConfigurationProperties";
import { WellKnownFolderName } from "../Enumerations/WellKnownFolderName";
import { XmlAttributeNames } from "../Core/XmlAttributeNames";
import { XmlElementNames } from "../Core/XmlElementNames";
import { XmlNamespace } from "../Enumerations/XmlNamespace";

export type base64String = string;

/**
 * Represents an object that can be used to store user-defined configuration settings.
 */
export class UserConfiguration { //IJsonSerializable

  private static ObjectVersion: ExchangeVersion = ExchangeVersion.Exchange2010;

  // For consistency with ServiceObject behavior, access to ItemId is permitted for a new object.
  private static PropertiesAvailableForNewObject: UserConfigurationProperties = UserConfigurationProperties.BinaryData | UserConfigurationProperties.Dictionary | UserConfigurationProperties.XmlData;

  private static NoProperties: UserConfigurationProperties = <UserConfigurationProperties>0;

  // TODO: Consider using SimplePropertyBag class to store XmlData & BinaryData property values.
  private service: ExchangeService;
  private name: string;
  private parentFolderId: FolderId = null;
  private itemId: ItemId = null;
  private dictionary: UserConfigurationDictionary = null;
  private xmlData: base64String = null; //System.Byte[]; //info: base64 encoded value
  private binaryData: base64String = null; //System.Byte[];
  private propertiesAvailableForAccess: UserConfigurationProperties = UserConfigurationProperties.Id;
  private updatedProperties: UserConfigurationProperties = UserConfigurationProperties.Id;

  /**
   * Indicates whether changes trigger an update or create operation.
   */
  private isNew: boolean = false;

  /**
   * Gets the name of the user configuration.
   * internal set
   */
  get Name(): string {
    return this.name;
  }
  set Name(value: string) {
    this.name = value;
  }

  /**
   * Gets the Id of the folder containing the user configuration.
   * internal set
   */
  get ParentFolderId(): FolderId {
    return this.parentFolderId;
  }
  set ParentFolderId(value: FolderId) {
    this.parentFolderId = value;
  }

  /**
   * Gets the Id of the user configuration.
   */
  get ItemId(): ItemId {
    return this.itemId;
  }

  /**
   * Gets the dictionary of the user configuration.
   */
  get Dictionary(): UserConfigurationDictionary {
    return this.dictionary;
  }

  /**
   * Gets or sets the xml data of the user configuration.
   * ### base64 encoded value, not the memory stream or byte[]
   */
  get XmlData(): base64String { //System.Byte[];
    this.ValidatePropertyAccess(UserConfigurationProperties.XmlData);
    return this.xmlData;
  }
  set XmlData(value: base64String) {
    this.xmlData = value;
    this.MarkPropertyForUpdate(UserConfigurationProperties.XmlData);
  }

  /**
   *  Gets or sets the binary data of the user configuration.
   * ### base64 encoded value, not the memory stream or byte[]
   */
  get BinaryData(): base64String { //System.Byte[];
    this.ValidatePropertyAccess(UserConfigurationProperties.BinaryData);

    return this.binaryData;
  }
  set BinaryData(value: base64String) {
    this.binaryData = value;
    this.MarkPropertyForUpdate(UserConfigurationProperties.BinaryData);
  }

  /**
   * Gets a value indicating whether this user configuration has been modified.
   */
  get IsDirty(): boolean {
    return this.updatedProperties != UserConfiguration.NoProperties || this.dictionary.IsDirty;
  }

  /**
   * Initializes a new instance of **UserConfiguration** class.
   *
   * @param   {ExchangeService}   service               The service to which the user configuration is bound.
   */
  constructor(service: ExchangeService);
  /**
   * @internal Initializes a new instance of **UserConfiguration** class.
   *
   * @param   {ExchangeService}               service               The service to which the user configuration is bound.
   * @param   {UserConfigurationProperties}   requestedProperties   The properties requested for this user configuration.
   */
  constructor(service: ExchangeService, requestedProperties: UserConfigurationProperties);
  constructor(service: ExchangeService, requestedProperties: UserConfigurationProperties = UserConfiguration.PropertiesAvailableForNewObject) {
    EwsUtilities.ValidateParam(service, "service");

    if (service.RequestedServerVersion < UserConfiguration.ObjectVersion) {
      throw new ServiceVersionException(
        StringHelper.Format(
          Strings.ObjectTypeIncompatibleWithRequestVersion,
          "UserConfiguration",
          ExchangeVersion[UserConfiguration.ObjectVersion]));
    }

    this.service = service;
    this.isNew = true;

    this.InitializeProperties(requestedProperties);
  }

  /**
   * Binds to an existing user configuration and loads the specified properties.
   * Calling this method results in a call to EWS.
   *
   * @param   {ExchangeService}               service          The service to which the user configuration is bound.
   * @param   {string}                        name             The name of the user configuration.
   * @param   {FolderId}                      parentFolderId   The Id of the folder containing the user configuration.
   * @param   {UserConfigurationProperties}   properties       The properties to load.
   * @return  {Promise<UserConfiguration>}   A user configuration Instance   :Promise.
   */
  public static Bind(service: ExchangeService, name: string, parentFolderId: FolderId, properties: UserConfigurationProperties): Promise<UserConfiguration>;
  /**
   * Binds to an existing user configuration and loads the specified properties.
   * Calling this method results in a call to EWS.
   *
   * @param   {ExchangeService}               service             The service to which the user configuration is bound.
   * @param   {string}                        name                The name of the user configuration.
   * @param   {parentFolderName}              parentFolderName    The name of the folder containing the user configuration.
   * @param   {UserConfigurationProperties}   properties          The properties to load.
   * @return  {Promise<UserConfiguration>}   A user configuration Instance   :Promise.
   */
  public static Bind(service: ExchangeService, name: string, parentFolderName: WellKnownFolderName, properties: UserConfigurationProperties): Promise<UserConfiguration>;
  public static async Bind(service: ExchangeService, name: string, parentFolderIdOrName: FolderId | WellKnownFolderName, properties: UserConfigurationProperties): Promise<UserConfiguration> {
    let parentFolderId: FolderId = parentFolderIdOrName as FolderId;
    if (typeof parentFolderIdOrName === "number") {
      parentFolderId = new FolderId(parentFolderIdOrName);
    }

    const result: UserConfiguration = await service.GetUserConfiguration(name, parentFolderId, properties);
    result.isNew = false;
    return result;
  }

  /**
   * Deletes the user configuration.
   * Calling this method results in a call to EWS.
   * @return  {Promise<void>}    :Promise.
   */
  Delete(): Promise<void> {
    if (this.isNew) {
      Promise.reject(new InvalidOperationException(Strings.DeleteInvalidForUnsavedUserConfiguration));
    } else {
      return this.service.DeleteUserConfiguration(this.name, this.parentFolderId);
    }
  }

  /**
   * Gets the base64 property value.
   *
   * @param   {base64String}   bytes   The bytes.
   * @return  {string}         [description]
   */
  private GetBase64PropertyValue(bytes: base64String /*System.Byte[]*/): string {
    throw new Error("UserConfiguration.ts - GetBase64PropertyValue : Not implemented.");
  }

  /**
   * Initializes properties.
   *
   * /remarks/    InitializeProperties is called in 3 cases:
   * .  Create new object:  From the UserConfiguration constructor.
   * .  Bind to existing object:  Again from the constructor.  The constructor is called eventually by the GetUserConfiguration request.
   * .  Refresh properties:  From the Load method.
   *
   * @param   {UserConfigurationProperties}   requestedProperties   The properties requested for this UserConfiguration.
   */
  private InitializeProperties(requestedProperties: UserConfigurationProperties): void {
    this.itemId = null;
    this.dictionary = new UserConfigurationDictionary();
    this.xmlData = null;
    this.binaryData = null;
    this.propertiesAvailableForAccess = requestedProperties;

    this.ResetIsDirty();
  }

  /**
   * Determines whether the specified property was updated.
   *
   * @param   {UserConfigurationProperties}   property   property to evaluate.
   * @return  {boolean}                       Boolean indicating whether to send the property Xml.
   */
  private IsPropertyUpdated(property: UserConfigurationProperties): boolean {
    let isPropertyDirty: boolean = false;
    let isPropertyEmpty: boolean = false;

    switch (property) {
      case UserConfigurationProperties.Dictionary:
        isPropertyDirty = this.Dictionary.IsDirty;
        isPropertyEmpty = this.Dictionary.Count == 0;
        break;
      case UserConfigurationProperties.XmlData:
        isPropertyDirty = (property & this.updatedProperties) == property;
        isPropertyEmpty = this.xmlData === null || this.xmlData.length === 0;
        break;
      case UserConfigurationProperties.BinaryData:
        isPropertyDirty = (property & this.updatedProperties) == property;
        isPropertyEmpty = this.binaryData === null || this.binaryData.length === 0;
        break;
      default:
        EwsLogging.Assert(
          false,
          "UserConfiguration.IsPropertyUpdated",
          "property not supported: " + EnumHelper.ToString(UserConfigurationProperties, property));
        break;
    }

    // Consider the property updated, if it's been modified, and either
    //    . there's a value or
    //    . there's no value but the operation is update.
    return isPropertyDirty && (!isPropertyEmpty || !this.isNew);
  }

  /**
   * Loads the specified properties on the user configuration.
   * Calling this method results in a call to EWS.
   * @return  {Promise<void>}    :Promise.
   */
  Load(properties: UserConfigurationProperties): Promise<void> {
    this.InitializeProperties(properties);

    return this.service.LoadPropertiesForUserConfiguration(this, properties);
  }

  /**
   * @internal Loads service object from XML.
   *
   * @param   {any}				jsObject	Json Object converted from XML.
   * @param   {ExchangeService}	service	The service.
   */
  LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
    for (let key in jsObject) {
      switch (key) {
        case XmlElementNames.UserConfigurationName:
          let userConfigName: string = jsObject[key];
          let responseName: string = userConfigName[XmlAttributeNames.Name];

          EwsLogging.Assert(
            StringHelper.Compare(this.name, responseName, /** StringComparison.Ordinal*/ false) == 0,
            "UserConfiguration.LoadFromXmlJsObject",
            "UserConfigurationName does not match: Expected: " + this.name + " Name in response: " + responseName
          );

          break;

        case XmlElementNames.ItemId:
          this.itemId = new ItemId();
          this.itemId.LoadFromXmlJsObject(jsObject[key], service);
          break;

        case XmlElementNames.Dictionary:
          this.dictionary.CreateFromXMLJsObjectCollection(jsObject[key], service);
          break;

        case XmlElementNames.XmlData:
          this.xmlData = jsObject[key]; //Convert.FromBase64String(jsObject.ReadAsString(key)); //info: no need to convert, using base64 as is
          break;

        case XmlElementNames.BinaryData:
          this.binaryData = jsObject[key]; //Convert.FromBase64String(jsObject.ReadAsString(key)); //info: no need to convert, using base64 as is
          break;
        default:
          break;
      }
    }
  }

  /**
   * Adds the passed property to updatedProperties.
   *
   * @param   {UserConfigurationProperties}   property   Property to update.
   */
  private MarkPropertyForUpdate(property: UserConfigurationProperties): void {
    this.updatedProperties |= property;
    this.propertiesAvailableForAccess |= property;
  }

  /**
   * Resets flags to indicate that properties haven't been modified.
   */
  private ResetIsDirty(): void {
    this.updatedProperties = UserConfiguration.NoProperties;
    this.dictionary.IsDirty = false;
  }

  /**
   * Saves the user configuration. Calling this method results in a call to EWS.
   *
   * @param   {string}                name             The name of the user configuration.
   * @param   {WellKnownFolderName}   parentFolderName   The Id of the folder in which to save the user configuration.
   * @return  {Promise<void>}        :Promise.
   */
  Save(name: string, parentFolderName: WellKnownFolderName): Promise<void>;
  /**
   * Saves the user configuration. Calling this method results in a call to EWS.
   *
   * @param   {string}        name             The name of the user configuration.
   * @param   {FolderId}      parentFolderId   The Id of the folder in which to save the user configuration.
   * @return  {Promise<void>}                 :Promise.
   */
  Save(name: string, parentFolderId: FolderId): Promise<void>;
  async Save(name: string, parentFolderIdOrName: FolderId | WellKnownFolderName): Promise<void> {
    let parentFolderId: FolderId = parentFolderIdOrName as FolderId;
    if (typeof parentFolderIdOrName === "number") {
      parentFolderId = new FolderId(parentFolderIdOrName);
    }

    EwsUtilities.ValidateParam(name, "name");
    EwsUtilities.ValidateParam(parentFolderId, "parentFolderId");

    parentFolderId.Validate(this.service.RequestedServerVersion);

    if (!this.isNew) {
      throw new InvalidOperationException(Strings.CannotSaveNotNewUserConfiguration);
    }

    this.parentFolderId = parentFolderId;
    this.name = name;

    await this.service.CreateUserConfiguration(this);
    this.isNew = false;
    this.ResetIsDirty();
  }

  /**
   * Updates the user configuration by applying local changes to the Exchange server.
   * Calling this method results in a call to EWS.
   * @return  {Promise<void>}    :Promise.
   */
  async Update(): Promise<void> {
    if (this.isNew) {
      throw new InvalidOperationException(Strings.CannotUpdateNewUserConfiguration);
    }

    if (
      this.IsPropertyUpdated(UserConfigurationProperties.BinaryData) ||
      this.IsPropertyUpdated(UserConfigurationProperties.Dictionary) ||
      this.IsPropertyUpdated(UserConfigurationProperties.XmlData)
    ) {
      await this.service.UpdateUserConfiguration(this);
    }
    this.ResetIsDirty();
  }

  /**
   * Determines whether the specified property may be accessed.
   *
   * @param   {UserConfigurationProperties}   property   Property to access.
   */
  ValidatePropertyAccess(property: UserConfigurationProperties): void {
    if ((property & this.propertiesAvailableForAccess) != property) {
      throw new PropertyException(Strings.MustLoadOrAssignPropertyBeforeAccess, EnumHelper.ToString(UserConfigurationProperties, property));
    }
  }

  /**
   * Writes the BinaryData property to Xml.
   *
   * @param   {EwsServiceXmlWriter}   writer   The writer.
   */
  private WriteBinaryDataToXml(writer: EwsServiceXmlWriter): void {
    EwsLogging.Assert(
      writer != null,
      "UserConfiguration.WriteBinaryDataToXml",
      "writer is null");

    UserConfiguration.WriteByteArrayToXml(
      writer,
      this.binaryData,
      XmlElementNames.BinaryData);
  }

  /**
   * Writes a byte array to Xml.
   *
   * @param   {EwsServiceXmlWriter}   writer           The writer.
   * @param   {base64String}          byteArray        Byte array to write #base64 string.
   * @param   {string}                xmlElementName   Name of the Xml element.
   */
  private static WriteByteArrayToXml(writer: EwsServiceXmlWriter, byteArray: base64String /*System.Byte[]*/, xmlElementName: string): void {
    EwsLogging.Assert(
      writer != null,
      "UserConfiguration.WriteByteArrayToXml",
      "writer is null");
    EwsLogging.Assert(
      xmlElementName != null,
      "UserConfiguration.WriteByteArrayToXml",
    "xmlElementName is null");

    writer.WriteStartElement(XmlNamespace.Types, xmlElementName);

    if (byteArray != null && byteArray.length > 0) {
      //writer.WriteValue(Convert.ToBase64String(byteArray), xmlElementName); //info: no need to convert to string, it is already base 64 encoded string
      writer.WriteValue(byteArray, xmlElementName);
    }

    writer.WriteEndElement();
  }

  /**
   * @internal Writes to XML.
   *
   * @param   {EwsServiceXmlWriter}   writer           The writer.
   * @param   {XmlNamespace}          xmlNamespace     The XML namespace.
   * @param   {string}                xmlElementName   Name of the XML element.
   */
  WriteToXml(writer: EwsServiceXmlWriter, xmlNamespace: XmlNamespace, xmlElementName: string): void {
    EwsLogging.Assert(
      writer != null,
      "UserConfiguration.WriteToXml",
      "writer is null");
    EwsLogging.Assert(
      xmlElementName != null,
      "UserConfiguration.WriteToXml",
    "xmlElementName is null");

    writer.WriteStartElement(xmlNamespace, xmlElementName);

    // Write the UserConfigurationName element
    UserConfiguration.WriteUserConfigurationNameToXml(
      writer,
      XmlNamespace.Types,
      this.name,
      this.parentFolderId);

    // Write the Dictionary element
    if (this.IsPropertyUpdated(UserConfigurationProperties.Dictionary)) {
      this.dictionary.WriteToXml(writer, XmlElementNames.Dictionary);
    }

    // Write the XmlData element
    if (this.IsPropertyUpdated(UserConfigurationProperties.XmlData)) {
      this.WriteXmlDataToXml(writer);
    }

    // Write the BinaryData element
    if (this.IsPropertyUpdated(UserConfigurationProperties.BinaryData)) {
      this.WriteBinaryDataToXml(writer);
    }

    writer.WriteEndElement();
  }

  /**
   * @internal Writes to Xml.
   *
   * @param   {EwsServiceXmlWriter}   writer           The writer.
   * @param   {XmlNamespace}          xmlNamespace     The XML namespace.
   * @param   {string}                name             The user configuration name.
   * @param   {FolderId}              parentFolderId   The Id of the folder containing the user configuration.
   */
  static WriteUserConfigurationNameToXml(writer: EwsServiceXmlWriter, xmlNamespace: XmlNamespace, name: string, parentFolderId: FolderId): void {
    EwsLogging.Assert(
      writer != null,
      "UserConfiguration.WriteUserConfigurationNameToXml",
      "writer is null");
    EwsLogging.Assert(
      name != null,
      "UserConfiguration.WriteUserConfigurationNameToXml",
      "name is null");
    EwsLogging.Assert(
      parentFolderId != null,
      "UserConfiguration.WriteUserConfigurationNameToXml",
      "parentFolderId is null");

    writer.WriteStartElement(xmlNamespace, XmlElementNames.UserConfigurationName);

    writer.WriteAttributeValue(XmlAttributeNames.Name, name);

    parentFolderId.WriteToXml(writer);

    writer.WriteEndElement();
  }

  /**
   * Writes the XmlData property to Xml.
   *
   * @param   {EwsServiceXmlWriter}   writer   The writer.
   */
  private WriteXmlDataToXml(writer: EwsServiceXmlWriter): void {
    EwsLogging.Assert(
      writer != null,
      "UserConfiguration.WriteXmlDataToXml",
      "writer is null");

    UserConfiguration.WriteByteArrayToXml(
      writer,
      this.xmlData,
      XmlElementNames.XmlData);
  }
}
