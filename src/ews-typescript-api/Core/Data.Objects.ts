module Microsoft.Exchange.WebServices.Data {
    export class ExchangeCredentials {
        //NeedSignature: boolean;

        constructor(public UserName: string, public Password: string) {

        }

        AdjustUrl(url: string /*System.Uri*/): string /*System.Uri*/ { return ExchangeCredentials.GetUriWithoutSuffix(url); }
        EmitExtraSoapHeaderNamespaceAliases(writer: any /*System.Xml.XmlWriter*/): void { /*implemented by derived classes*/ }
        static GetUriWithoutSuffix(url: string/*System.Uri*/): string /*System.Uri*/ {
            var index = url.toLowerCase().indexOf(WSSecurityBasedCredentials.WsSecurityPathSuffix.toLowerCase());//, StringComparison.OrdinalIgnoreCase);
            if (index != -1) {
                return url.substring(0, index);
            }

            return url;
        }
        //PreAuthenticate(): any{ throw new Error("Not implemented.");}
        PrepareWebRequest(request: WinJS.IXHROptions /*IEwsHttpWebRequest*/): void {
            request.headers["Authorization"] = "Basic" + btoa(this.UserName + ":" + this.Password);
        }
        SerializeExtraSoapHeaders(writer: any /*System.Xml.XmlWriter*/, webMethodName: string): void { /*implemented by derived classes*/ }
        //SerializeWSSecurityHeaders(writer: System.Xml.XmlWriter): any{ throw new Error("Not implemented.");}
        //Sign(memoryStream: any): any{ throw new Error("Not implemented.");}
    }

    export class WSSecurityBasedCredentials extends ExchangeCredentials {
        static WsAddressingHeadersFormat: string = "<wsa:Action soap:mustUnderstand='1'>http://schemas.microsoft.com/exchange/services/2006/messages/{0}</wsa:Action><wsa:ReplyTo><wsa:Address>http://www.w3.org/2005/08/addressing/anonymous</wsa:Address></wsa:ReplyTo><wsa:To soap:mustUnderstand='1'>{1}</wsa:To>";
        static WsSecurityHeaderFormat: string = "<wsse:Security soap:mustUnderstand='1'>  {0}</wsse:Security>";
        static WsuTimeStampFormat: string = "<wsu:Timestamp><wsu:Created>{0:yyyy'-'MM'-'dd'T'HH':'mm':'ss'Z'}</wsu:Created><wsu:Expires>{1:yyyy'-'MM'-'dd'T'HH':'mm':'ss'Z'}</wsu:Expires></wsu:Timestamp>";
        static WsSecurityPathSuffix: string = "/wssecurity";

        SecurityToken: string;
        EwsUrl: string;// System.Uri;
        static NamespaceManager: any;// System.Xml.XmlNamespaceManager;
        private addTimestamp: boolean;
        private securityToken: string;
        private ewsUrl: string;//System.Uri;
        private static namespaceManager: any;//System.Xml.XmlNamespaceManager;
        AdjustUrl(url: string/*System.Uri*/): string/*System.Uri*/ { throw new Error("Not implemented."); }
        EmitExtraSoapHeaderNamespaceAliases(writer: System.Xml.XmlWriter): any { throw new Error("Not implemented."); }
        PreAuthenticate(): any { throw new Error("Not implemented."); }
        SerializeExtraSoapHeaders(writer: System.Xml.XmlWriter, webMethodName: string): any { throw new Error("Not implemented."); }
        SerializeWSAddressingHeaders(xmlWriter: System.Xml.XmlWriter, webMethodName: string): any { throw new Error("Not implemented."); }
        SerializeWSSecurityHeaders(xmlWriter: System.Xml.XmlWriter): any { throw new Error("Not implemented."); }

    }

    //export module WSSecurityBasedCredentials {
    //    export var static WsAddressingHeadersFormat: string = "<wsa:Action soap:mustUnderstand='1'>http://schemas.microsoft.com/exchange/services/2006/messages/{0}</wsa:Action><wsa:ReplyTo><wsa:Address>http://www.w3.org/2005/08/addressing/anonymous</wsa:Address></wsa:ReplyTo><wsa:To soap:mustUnderstand='1'>{1}</wsa:To>";
    //    export var static WsSecurityHeaderFormat: string = "<wsse:Security soap:mustUnderstand='1'>  {0}</wsse:Security>";
    //    export var static WsuTimeStampFormat: string = "<wsu:Timestamp><wsu:Created>{0:yyyy'-'MM'-'dd'T'HH':'mm':'ss'Z'}</wsu:Created><wsu:Expires>{1:yyyy'-'MM'-'dd'T'HH':'mm':'ss'Z'}</wsu:Expires></wsu:Timestamp>";
    //    export var static WsSecurityPathSuffix: string = "/wssecurity";
    //}


    //todo: should be done
    export class ExchangeServerInfo {
        MajorVersion: number;
        MinorVersion: number;
        MajorBuildNumber: number;
        MinorBuildNumber: number;
        VersionString: string;
        //private majorVersion: number;
        //private minorVersion: number;
        //private majorBuildNumber: number;
        //private minorBuildNumber: number;
        //private versionString: string;
        //Parse(jsonObject: JsonObject): ExchangeServerInfo{ throw new Error("Not implemented.");}
        static Parse(reader: EwsServiceXmlReader): ExchangeServerInfo {
            EwsUtilities.Assert(
                reader.HasAttributes,
                "ExchangeServerVersion.Parse",
                "Current element doesn't have attributes");

            var info = new ExchangeServerInfo();
            info.MajorVersion = +(reader.ReadAttributeValue(XmlNamespace.Types, "MajorVersion"));
            info.MinorVersion = +(reader.ReadAttributeValue(XmlNamespace.Types, "MinorVersion"));
            info.MajorBuildNumber = +(reader.ReadAttributeValue(XmlNamespace.Types, "MajorBuildNumber"));
            info.MinorBuildNumber = +(reader.ReadAttributeValue(XmlNamespace.Types, "MinorBuildNumber"));
            info.VersionString = reader.ReadAttributeValue(XmlNamespace.Types, "Version");
            return info;
        }
        ToString(): string {
            //return string.Format("{0:d}.{1:d2}.{2:d4}.{3:d3}",
            return string.Format("{0}.{1}.{2}.{3}",
                this.MajorVersion,
                this.MinorVersion,
                this.MajorBuildNumber,
                this.MinorBuildNumber);
        }
    }
    //todo: should be done
    export class ImpersonatedUserId {
        IdType: ConnectingIdType;
        Id: string;
        //private idType: ConnectingIdType;
        //private id: string;

        constructor(idType?: ConnectingIdType, id?: string) {
            this.IdType = idType;
            this.Id = id;
        }

        WriteToXml(writer: EwsServiceXmlWriter): void {
            if (this.Id || this.Id === "") {
                throw new Error("Id property must be set before serialization");// ArgumentException(Strings.IdPropertyMustBeSet);
            }

            writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.ExchangeImpersonation);
            writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.ConnectingSID);

            // For 2007 SP1, use PrimarySmtpAddress for type SmtpAddress
            var connectingIdTypeLocalName =
                (this.IdType == ConnectingIdType.SmtpAddress) && (writer.Service.RequestedServerVersion == ExchangeVersion.Exchange2007_SP1)
                    ? XmlElementNames.PrimarySmtpAddress
                    : ConnectingIdType[this.IdType];

            writer.WriteElementValue(
                XmlNamespace.Types,
                connectingIdTypeLocalName,
                connectingIdTypeLocalName,
                this.Id);

            writer.WriteEndElement(); // ConnectingSID
            writer.WriteEndElement(); // ExchangeImpersonation
        }
    }
    //todo: json not implemented, should be done otherwise
    export class ManagementRoles {
        private userRoles: string[];
        private applicationRoles: string[];

        constructor(userRoles?: string[], applicationRoles?: string[]) {
            if (userRoles) {
                this.userRoles = userRoles;
            }

            if (applicationRoles) {
                this.applicationRoles = applicationRoles;
            }
        }
        //ToJsonObject(): Microsoft.Exchange.WebServices.Data.JsonObject { throw new Error("Not implemented."); }
        WriteRolesToXml(writer: EwsServiceXmlWriter, roles: string[], elementName: string): void {
            if (roles && roles.length > 0) {
                writer.WriteStartElement(XmlNamespace.Types, elementName);

                for (var role in roles) {
                    writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.Role, XmlElementNames.Role, role);
                }

                writer.WriteEndElement();
            }
        }
        WriteToXml(writer: EwsServiceXmlWriter): void {
            writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.ManagementRole);
            this.WriteRolesToXml(writer, this.userRoles, XmlElementNames.UserRoles);
            this.WriteRolesToXml(writer, this.applicationRoles, XmlElementNames.ApplicationRoles);
            writer.WriteEndElement();
        }
    }
    //todo: should be done
    export class PrivilegedUserId {
        IdType: ConnectingIdType;
        Id: string;
        LogonType: PrivilegedLogonType;
        BudgetType: PrivilegedUserIdBudgetType;
        //private logonType: PrivilegedLogonType;
        //private idType: ConnectingIdType;
        //private id: string;
        //private budgetType: PrivilegedUserIdBudgetType;
        constructor(openType?: PrivilegedLogonType, idType?: ConnectingIdType, id?: string) {
            this.LogonType = openType;
            this.IdType = idType;
            this.Id = id;
        }
        WriteToXml(writer: EwsServiceXmlWriter, requestedServerVersion: ExchangeVersion): void {

            if (this.Id == null || this.Id === undefined || this.Id === "") {
                throw new Error("id can not be null");
            }

            writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.OpenAsAdminOrSystemService);
            writer.WriteAttributeString("", XmlElementNames.LogonType, PrivilegedLogonType[this.LogonType]);
            if (requestedServerVersion >= ExchangeVersion.Exchange2013 && this.BudgetType) {
                writer.WriteAttributeString("", XmlElementNames.BudgetType, PrivilegedUserIdBudgetType[this.BudgetType]);
            }

            writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.ConnectingSID);
            writer.WriteElementValue(XmlNamespace.Types, ConnectingIdType[this.IdType], ConnectingIdType[this.IdType], this.Id);
            writer.WriteEndElement(); // ConnectingSID
            writer.WriteEndElement(); // OpenAsAdminOrSystemService
        }
    }
    //todo: should be done
    export class PropertyBag {
        //Properties: PropDictionary<PropertyDefinition, any> = new PropDictionary<PropertyDefinition, any>();//System.Collections.Generic.Dictionary<PropertyDefinition, any>;
        get Owner(): ServiceObject { return this.owner; }
        get IsDirty(): boolean {
            var changes = this.modifiedProperties.length + this.deletedProperties.length + this.addedProperties.length;
            return changes > 0 || this.isDirty;
        }
        Item: any;
        private owner: ServiceObject = undefined;
        private isDirty: boolean;
        private loading: boolean;
        private onlySummaryPropertiesRequested: boolean;
        private loadedProperties: PropertyDefinition[] = [];//System.Collections.Generic.List<PropertyDefinition>;
        private properties: PropDictionary<PropertyDefinition, any> = new PropDictionary<PropertyDefinition, any>();//System.Collections.Generic.Dictionary<PropertyDefinition, any>;
        private deletedProperties: PropDictionary<PropertyDefinition, any> = new PropDictionary<PropertyDefinition, any>();// System.Collections.Generic.Dictionary<PropertyDefinition, any>;
        private modifiedProperties: PropertyDefinition[] = [];//System.Collections.Generic.List<PropertyDefinition>;
        private addedProperties: PropertyDefinition[] = [];//System.Collections.Generic.List<PropertyDefinition>;
        private requestedPropertySet: PropertySet;

        constructor(serviceObject: ServiceObject) {
            throw new Error("not implemented");
        }

        static AddToChangeList(propertyDefinition: PropertyDefinition, changeList: PropertyDefinition[] /*System.Collections.Generic.List<PropertyDefinition>*/): void {
            if (changeList.indexOf(propertyDefinition) < 0) {
                changeList.push(propertyDefinition);
            }
        }
        private Changed(): void {
            //todo: implement onchange type events;
            //if (this.OnChange != null) {
            //    this.OnChange();
            //}
        }
        Clear(): void {
            this.ClearChangeLog();
            this.properties.clear();
            this.loadedProperties.splice(0);
            this.requestedPropertySet = undefined;
        }
        ClearChangeLog(): void {
            this.deletedProperties.clear();
            this.modifiedProperties.splice(0);
            this.addedProperties.splice(0);

            for (var val in this.properties.Values) {
                var complexProperty = <ComplexProperty>val;

                if (complexProperty instanceof ComplexProperty) {
                    complexProperty.ClearChangeLog();
                }
            }

            this.isDirty = false;
        }
        Contains(propertyDefinition: PropertyDefinition): boolean { return this.properties.containsKey(propertyDefinition); }
        //CreateJsonDeleteUpdate(propertyDefinition: PropertyDefinitionBase, service: ExchangeService, serviceObject: ServiceObject): JsonObject { throw new Error("Not implemented."); }
        //CreateJsonSetUpdate(propertyDefinition: PropertyDefinition, service: ExchangeService, serviceObject: ServiceObject, propertyBag: PropertyBag): JsonObject { throw new Error("Not implemented."); }
        //CreateJsonSetUpdate(value: ExtendedProperty, service: ExchangeService, serviceObject: ServiceObject): JsonObject { throw new Error("Not implemented."); }
        DeleteProperty(propertyDefinition: PropertyDefinition): void {
            if (!this.deletedProperties.containsKey(propertyDefinition)) {
                var propertyValue: IOutParam<any> = { value: null };

                this.properties.tryGet(propertyDefinition, propertyValue);

                this.properties.remove(propertyDefinition);
                var modifiedIndex = this.modifiedProperties.indexOf(propertyDefinition);
                if (modifiedIndex >= 0)
                    this.modifiedProperties.splice(modifiedIndex, 1);

                this.deletedProperties.add(propertyDefinition, propertyValue);

                var complexProperty = <ComplexProperty>propertyValue;

                if (complexProperty instanceof ComplexProperty) {
                    var onchangeIndex = complexProperty.OnChange.indexOf(this.PropertyChanged);
                    complexProperty.OnChange.splice(onchangeIndex, 1);// -= this.PropertyChanged; // counld not do c# like event -= in js
                }
            }
        }
        GetIsUpdateCallNecessary(): boolean {
            var propertyDefinitions: PropertyDefinition[] = [];

            propertyDefinitions = propertyDefinitions.concat(this.addedProperties);
            propertyDefinitions = propertyDefinitions.concat(this.modifiedProperties);
            propertyDefinitions = propertyDefinitions.concat(this.deletedProperties.Keys);

            for (var item in propertyDefinitions) {
                var propertyDefinition: PropertyDefinition = item;
                if (propertyDefinition.HasFlag(PropertyDefinitionFlags.CanUpdate)) {
                    return true;
                }
            }
            return false;
        }
        static GetPropertyUpdateItemName(serviceObject: ServiceObject): string {
            return serviceObject instanceof Folder ?
                XmlElementNames.Folder :
                XmlElementNames.Item;
        }
        GetPropertyValueOrException(propertyDefinition: PropertyDefinition, exception: IOutParam<any>): any {
            var outPropertyValue: IOutParam<any> = { value: null };
            exception.value = null;
            var propertyValue;

            if (propertyDefinition.Version > this.Owner.Service.RequestedServerVersion) {
                exception.value = new ServiceVersionException(
                    string.Format(
                        "property: {0} incompatible with this version: {1}"/*Strings.PropertyIncompatibleWithRequestVersion*/,
                        propertyDefinition.Name,
                        propertyDefinition.Version));
                return null;
            }

            if (this.TryGetValue(propertyDefinition, outPropertyValue)) {
                // If the requested property is in the bag, return it.
                return outPropertyValue.value;
            }
            else {
                if (propertyDefinition.HasFlag(PropertyDefinitionFlags.AutoInstantiateOnRead)) {
                    // The requested property is an auto-instantiate-on-read property
                    var complexPropertyDefinition = <ComplexPropertyDefinitionBase>propertyDefinition;

                    EwsUtilities.Assert(
                        !(complexPropertyDefinition instanceof ComplexPropertyDefinitionBase),
                        "PropertyBag.get_this[]",
                        "propertyDefinition is marked with AutoInstantiateOnRead but is not a descendant of ComplexPropertyDefinitionBase");

                    propertyValue = complexPropertyDefinition.CreatePropertyInstance(this.Owner);

                    if (propertyValue != null) {
                        this.InitComplexProperty(<ComplexProperty>propertyValue);
                        this.properties.set(propertyDefinition, propertyValue);
                    }
                }
                else {
                    // If the property is not the Id (we need to let developers read the Id when it's null) and if has
                    // not been loaded, we throw.
                    if (propertyDefinition != this.Owner.GetIdPropertyDefinition()) {
                        if (!this.IsPropertyLoaded(propertyDefinition)) {
                            exception.value = new ServiceObjectPropertyException("Must load or assign property before access"
                            /*Strings.MustLoadOrAssignPropertyBeforeAccess*/, propertyDefinition);
                            return null;
                        }

                        // Non-nullable properties (int, bool, etc.) must be assigned or loaded; cannot return null value.
                        if (!propertyDefinition.IsNullable) {
                            var errorMessage = this.IsRequestedProperty(propertyDefinition)
                                ? "value property not loaded" //Strings.ValuePropertyNotLoaded
                                : "value property not assigned";//Strings.ValuePropertyNotAssigned;
                            exception.value = new ServiceObjectPropertyException(errorMessage, propertyDefinition);
                        }
                    }
                }

                return propertyValue;
            }
        }
        InitComplexProperty(complexProperty: ComplexProperty): void {

            if (complexProperty) {
                complexProperty.OnChange.push(this.PropertyChanged); // can't do += in javascript;

                var isIOwnedProperty = Object.keys(complexProperty).indexOf("Owner") >= 0; //todo: until fix checking interface by some other means, checking property directly

                if (isIOwnedProperty) {
                    var ownedProperty: IOwnedProperty = <any>complexProperty;
                    ownedProperty.Owner = this.Owner;
                }
            }
        }
        IsPropertyLoaded(propertyDefinition: PropertyDefinition): boolean {
            // Is the property loaded?
            if (this.loadedProperties.indexOf(propertyDefinition) >= 0) {
                return true;
            }
            else {
                // Was the property requested?
                return this.IsRequestedProperty(propertyDefinition);
            }
        }
        IsPropertyUpdated(propertyDefinition: PropertyDefinition): boolean {
            return this.modifiedProperties.indexOf(propertyDefinition) >= 0 || this.addedProperties.indexOf(propertyDefinition) >= 0;
        }
        IsRequestedProperty(propertyDefinition: PropertyDefinition): boolean {
            // If no requested property set, then property wasn't requested.
            if (this.requestedPropertySet == null || this.requestedPropertySet == undefined) {
                return false;
            }

            // If base property set is all first-class properties, use the appropriate list of
            // property definitions to see if this property was requested. Otherwise, property had 
            // to be explicitly requested and needs to be listed in AdditionalProperties.
            if (this.requestedPropertySet.BasePropertySet == BasePropertySet.FirstClassProperties) {
                var firstClassProps = this.onlySummaryPropertiesRequested
                    ? this.Owner.Schema.FirstClassSummaryProperties
                    : this.Owner.Schema.FirstClassProperties;

                return firstClassProps.indexOf(propertyDefinition) >= 0 ||
                    this.requestedPropertySet.Contains(propertyDefinition);
            }
            else {
                return this.requestedPropertySet.Contains(propertyDefinition);
            }
        }
        //LoadFromJson(jsonServiceObject: JsonObject, service: ExchangeService, clear: boolean, requestedPropertySet: PropertySet, onlySummaryPropertiesRequested: boolean): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader, clear: boolean, requestedPropertySet: PropertySet, onlySummaryPropertiesRequested: boolean): void {
            if (clear) {
                this.Clear();
            }

            // Put the property bag in "loading" mode. When in loading mode, no checking is done
            // when setting property values.
            this.loading = true;

            this.requestedPropertySet = requestedPropertySet;
            this.onlySummaryPropertiesRequested = onlySummaryPropertiesRequested;

            try {
                do {
                    reader.Read();

                    if (reader.NodeType == Node.ELEMENT_NODE) {// XmlNodeType.Element) {
                        var propertyDefinition: IOutParam<PropertyDefinition> = { value: null };

                        if (this.Owner.Schema.TryGetPropertyDefinition(reader.LocalName, propertyDefinition)) {
                            propertyDefinition.value.LoadPropertyValueFromXml(reader, this);

                            this.loadedProperties.push(propertyDefinition.value);
                        }
                        else {
                            debugger;
                            reader.SkipCurrentElement();
                        }
                    }
                }
                while (reader.HasRecursiveParent(this.Owner.GetXmlElementName()));

                this.ClearChangeLog();
            }
            finally {
                this.loading = false;
            }
        }
        PropertyChanged(complexProperty: ComplexProperty): void {
            for (var item in this.properties.Items) {
                var keyValuePair: KeyValuePair<PropertyDefinition, any> = item;
                if (keyValuePair.value == complexProperty) {
                    if (!this.deletedProperties.containsKey(keyValuePair.key)) {
                        PropertyBag.AddToChangeList(keyValuePair.key, this.modifiedProperties);
                        this.Changed();
                    }
                }
            }
        }

        _propGet(propertyDefinition: PropertyDefinition): any {
            var serviceException: ServiceLocalException;
            var outparam: IOutParam<any> = { value: null };
            var propertyValue = this.GetPropertyValueOrException(propertyDefinition, outparam);
            if (outparam.value == null) {
                return propertyValue;
            }
            else {
                throw serviceException;
            }
        }
        _propSet(propertyDefinition: PropertyDefinition, value: any) {
            if (propertyDefinition.Version > this.Owner.Service.RequestedServerVersion) {
                throw new ServiceVersionException(
                    string.Format(
                        "property: {0} is incompatible with requested version: {1}",//Strings.PropertyIncompatibleWithRequestVersion,
                        propertyDefinition.Name,
                        ExchangeVersion[propertyDefinition.Version]), null);
            }

            // If the property bag is not in the loading state, we need to verify whether
            // the property can actually be set or updated.
            if (!this.loading) {
                // If the owner is new and if the property cannot be set, throw.
                if (this.Owner.IsNew && !propertyDefinition.HasFlag(PropertyDefinitionFlags.CanSet, this.Owner.Service.RequestedServerVersion)) {
                    throw new Error("property is readonly\n" + JSON.stringify(propertyDefinition));// ServiceObjectPropertyException(Strings.PropertyIsReadOnly, propertyDefinition);
                }

                if (!this.Owner.IsNew) {
                    // If owner is an item attachment, properties cannot be updated (EWS doesn't support updating item attachments)
                    var isItem = this.owner instanceof Item;
                    var ownerItem = <Item>this.Owner;
                    if (isItem && ownerItem.IsAttachment) {
                        throw new ServiceObjectPropertyException("Item attachment cannot be updated"/*Strings.ItemAttachmentCannotBeUpdated*/, propertyDefinition);
                    }

                    // If the property cannot be deleted, throw.
                    if (value == null && !propertyDefinition.HasFlag(PropertyDefinitionFlags.CanDelete)) {
                        throw new ServiceObjectPropertyException("property can not be deleted"/*Strings.PropertyCannotBeDeleted*/, propertyDefinition);
                    }

                    // If the property cannot be updated, throw.
                    if (!propertyDefinition.HasFlag(PropertyDefinitionFlags.CanUpdate)) {
                        throw new ServiceObjectPropertyException("propery can not be updated"/*Strings.PropertyCannotBeUpdated*/, propertyDefinition);
                    }
                }
            }

            // If the value is set to null, delete the property.
            if (value == null) {
                this.DeleteProperty(propertyDefinition);
            }
            else {
                var complexProperty: ComplexProperty = null;
                var currentValue = this.properties.get(propertyDefinition);

                if (currentValue) {
                    complexProperty = currentValue;

                    if (complexProperty != null) {
                        var pos = complexProperty.OnChange.indexOf(this.PropertyChanged); //cant do += or -= in javascript (hopefully in ECMA6)
                        if (pos >= 0) complexProperty.OnChange.splice(pos, 1); //see above line comment ^
                    }
                }

                // If the property was to be deleted, the deletion becomes an update.
                if (this.deletedProperties.remove(propertyDefinition)) {
                    PropertyBag.AddToChangeList(propertyDefinition, this.modifiedProperties);

                }
                else {
                    // If the property value was not set, we have a newly set property.
                    if (this.properties.KeyNames.indexOf(propertyDefinition.Name) == -1 /*.ContainsKey(propertyDefinition)*/) {
                        PropertyBag.AddToChangeList(propertyDefinition, this.addedProperties);
                    }
                    else {
                        // The last case is that we have a modified property.
                        if (this.modifiedProperties.indexOf(propertyDefinition) == -1 /*.Contains(propertyDefinition)*/) {
                            PropertyBag.AddToChangeList(propertyDefinition, this.modifiedProperties);
                        }
                    }
                }

                this.InitComplexProperty(value instanceof ComplexProperty ? <ComplexProperty> value : undefined);
                this.properties.set(propertyDefinition, value);

                this.Changed();
            }
        }


        //ToJson(service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
        //ToJsonForCreate(service: ExchangeService, jsonObject: JsonObject): any { throw new Error("Not implemented."); }
        //ToJsonForUpdate(service: ExchangeService, jsonObject: JsonObject): any { throw new Error("Not implemented."); }
        TryGetProperty(propertyDefinition: PropertyDefinition, propertyValue: IOutParam<any>): boolean {
            var serviceException: IOutParam<ServiceLocalException> = { value: null };
            propertyValue.value = this.GetPropertyValueOrException(propertyDefinition, serviceException);
            return serviceException.value == null;
        }
        TryGetPropertyAs<T>(propertyDefinition: PropertyDefinition, propertyValue: IOutParam<T>): boolean {
            // Verify that the type parameter and property definition's type are compatible.
            debugger;//todo: fix isassignablefrom
            //if (!typeof (T).IsAssignableFrom(propertyDefinition.Type)) {
            //    string errorMessage = string.Format(
            //        Strings.PropertyDefinitionTypeMismatch,
            //        EwsUtilities.GetPrintableTypeName(propertyDefinition.Type),
            //        EwsUtilities.GetPrintableTypeName(typeof (T)));
            //    throw new ArgumentException(errorMessage, "propertyDefinition");
            //}

            var outValue: IOutParam<T>;

            var result = this.TryGetProperty(propertyDefinition, outValue);

            propertyValue.value = result ? outValue.value : undefined;

            return result;
        }
        TryGetValue(propertyDefinition: PropertyDefinition, propertyValue: IOutParam<any>): boolean { return this.properties.tryGet(propertyDefinition, propertyValue); }
        Validate(): void {
            for (var item in this.addedProperties) {
                var propertyDefinition: PropertyDefinition = item;
                this.ValidatePropertyValue(propertyDefinition);
            }

            for (var item in this.modifiedProperties) {
                var propertyDefinition: PropertyDefinition = item;
                this.ValidatePropertyValue(propertyDefinition);
            }
        }
        ValidatePropertyValue(propertyDefinition: PropertyDefinition): void {
            var propertyValue: IOutParam<any> = { value: null };
            if (this.TryGetProperty(propertyDefinition, propertyValue)) {
                //todo: check for interface somehow;
                //ISelfValidate validatingValue = propertyValue as ISelfValidate;
                //if (validatingValue != null) {
                //    validatingValue.Validate();
                //}

                //todo: fix interface check based on solution above (when available), this is alternate check
                var validatingValue: ISelfValidate = propertyValue.value;
                if (validatingValue != null && validatingValue.Validate)
                    validatingValue.Validate();
            }
        }
        //WriteDeleteUpdateToJson(jsonUpdates: System.Collections.Generic.List<T>, propertyDefinition: PropertyDefinition, propertyValue: any, service: ExchangeService): any { throw new Error("Not implemented."); }
        WriteDeleteUpdateToXml(writer: EwsServiceXmlWriter, propertyDefinition: PropertyDefinition, propertyValue: any): void {
            // The following test should not be necessary since the property bag prevents
            // properties to be deleted (set to null) if they don't have the CanDelete flag,
            // but it doesn't hurt...
            if (propertyDefinition.HasFlag(PropertyDefinitionFlags.CanDelete)) {
                var handled = false;

                //todo: check interface somehow
                //ICustomUpdateSerializer updateSerializer = propertyValue as ICustomUpdateSerializer;

                //if (updateSerializer != null) {
                //    handled = updateSerializer.WriteDeleteUpdateToXml(writer, this.Owner);
                //}

                //todo: fix interface check based on solution above (when available), this is alternate check
                var updateSerializer: ICustomUpdateSerializer = propertyValue;
                if (propertyValue != null && propertyValue != undefined && propertyValue.WriteDeleteUpdateToXml)
                    handled = updateSerializer.WriteDeleteUpdateToXml(writer, this.Owner);


                if (!handled) {
                    writer.WriteStartElement(XmlNamespace.Types, this.Owner.GetDeleteFieldXmlElementName());
                    propertyDefinition.WriteToXml(writer);
                    writer.WriteEndElement();
                }
            }
        }
        //WriteSetUpdateToJson(jsonUpdates: System.Collections.Generic.List<T>, propertyDefinition: PropertyDefinition, service: ExchangeService): any { throw new Error("Not implemented."); }
        WriteSetUpdateToXml(writer: EwsServiceXmlWriter, propertyDefinition: PropertyDefinition): void {
            // The following test should not be necessary since the property bag prevents
            // properties to be updated if they don't have the CanUpdate flag, but it
            // doesn't hurt...
            if (propertyDefinition.HasFlag(PropertyDefinitionFlags.CanUpdate)) {
                var propertyValue = this._propGet(propertyDefinition);

                var handled = false;

                //todo: check interface somehow, using alternate method
                var updateSerializer: ICustomUpdateSerializer = propertyValue;

                if (updateSerializer != null && updateSerializer.WriteSetUpdateToXml) {
                    handled = updateSerializer.WriteSetUpdateToXml(
                        writer,
                        this.Owner,
                        propertyDefinition);
                }

                if (!handled) {
                    writer.WriteStartElement(XmlNamespace.Types, this.Owner.GetSetFieldXmlElementName());

                    propertyDefinition.WriteToXml(writer);

                    writer.WriteStartElement(XmlNamespace.Types, this.Owner.GetXmlElementName());
                    propertyDefinition.WritePropertyValueToXml(writer, this, true /* isUpdateOperation */);
                    writer.WriteEndElement();

                    writer.WriteEndElement();
                }
            }
        }
        WriteToXml(writer: EwsServiceXmlWriter): void {
            writer.WriteStartElement(XmlNamespace.Types, this.Owner.GetXmlElementName());

            debugger; //fix Schema objects Ienumerable.

            //
            for (var item in this.Owner.Schema.GetEnumerator()) {
                // The following test should not be necessary since the property bag prevents
                // properties to be set if they don't have the CanSet flag, but it doesn't hurt...
                var propertyDefinition: PropertyDefinition = item;
                if (propertyDefinition.HasFlag(PropertyDefinitionFlags.CanSet, writer.Service.RequestedServerVersion)) {
                    if (this.Contains(propertyDefinition)) {
                        propertyDefinition.WritePropertyValueToXml(writer, this, false /* isUpdateOperation */);
                    }
                }
            }

            writer.WriteEndElement();
        }
        WriteToXmlForUpdate(writer: EwsServiceXmlWriter): void {
            writer.WriteStartElement(XmlNamespace.Types, this.Owner.GetChangeXmlElementName());

            this.Owner.GetId().WriteToXml(writer);

            writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.Updates);

            for (var item in this.addedProperties) {
                var propertyDefinition: PropertyDefinition = item;
                this.WriteSetUpdateToXml(writer, propertyDefinition);
            }

            for (var item in this.modifiedProperties) {
                var propertyDefinition: PropertyDefinition = item;
                this.WriteSetUpdateToXml(writer, propertyDefinition);
            }

            for (var kv in this.deletedProperties.Items) {
                var property: KeyValuePair<PropertyDefinition, any> = item;
                this.WriteDeleteUpdateToXml(
                    writer,
                    property.key,
                    property.value);
            }

            writer.WriteEndElement();
            writer.WriteEndElement();
        }
    }
    //todo: should be done except for debugger stops 
    export class PropertySet implements ISelfValidate { //IEnumerable<PropertyDefinitionBase>
        //using DefaultPropertySetDictionary = LazyMember<System.Collections.Generic.Dictionary<BasePropertySet, string>>;

        get BasePropertySet(): BasePropertySet { return this.basePropertySet; }
        set BasePropertySet(value) { this.ThrowIfReadonly(); this.BasePropertySet = value; }
        get RequestedBodyType(): BodyType { return this.requestedBodyType; }
        set RequestedBodyType(value) { this.ThrowIfReadonly(); this.requestedBodyType = value; }
        get RequestedUniqueBodyType(): BodyType { return this.requestedUniqueBodyType; }
        set RequestedUniqueBodyType(value) { this.ThrowIfReadonly(); this.requestedUniqueBodyType = value; }
        get RequestedNormalizedBodyType(): BodyType { return this.RequestedNormalizedBodyType; }
        set RequestedNormalizedBodyType(value) { this.ThrowIfReadonly(); this.RequestedNormalizedBodyType = value; }
        get Count(): number { return this.additionalProperties.length; }
        get FilterHtmlContent(): boolean { return this.filterHtml; } //todo - nullable properties implementations;
        set FilterHtmlContent(value) { this.ThrowIfReadonly(); this.filterHtml = value; }
        get ConvertHtmlCodePageToUTF8(): boolean { return this.convertHtmlCodePageToUTF8; }
        set ConvertHtmlCodePageToUTF8(value) { this.ThrowIfReadonly(); this.convertHtmlCodePageToUTF8 = value; }
        get InlineImageUrlTemplate(): string { return this.inlineImageUrlTemplate; }
        set InlineImageUrlTemplate(value) { this.ThrowIfReadonly(); this.inlineImageUrlTemplate = value; }
        get BlockExternalImages(): boolean { return this.blockExternalImages; }
        set BlockExternalImages(value) { this.ThrowIfReadonly(); this.blockExternalImages = value; }
        get AddBlankTargetToLinks(): boolean { return this.addTargetToLinks; }
        set AddBlankTargetToLinks(value) { this.ThrowIfReadonly(); this.addTargetToLinks = value; }
        get MaximumBodySize(): number { return this.maximumBodySize; }
        set MaximumBodySize(value) { this.ThrowIfReadonly(); this.maximumBodySize = value; }

        Item(index: number): PropertyDefinitionBase { return this.additionalProperties[index]; } //this[int]

        static get DefaultPropertySetMap(): LazyMember<IndexerWithEnumKey<BasePropertySet, string>> { return this.defaultPropertySetMap; }
        private basePropertySet: BasePropertySet;
        private additionalProperties: PropertyDefinitionBase[] = [];// System.Collections.Generic.List<PropertyDefinitionBase>;
        private requestedBodyType: BodyType;
        private requestedUniqueBodyType: BodyType;
        private requestedNormalizedBodyType: BodyType;
        private filterHtml: boolean;
        private convertHtmlCodePageToUTF8: boolean;
        private inlineImageUrlTemplate: string;
        private blockExternalImages: boolean;
        private addTargetToLinks: boolean;
        private isReadOnly: boolean;
        private maximumBodySize: number;
        static IdOnly: PropertySet = PropertySet.CreateReadonlyPropertySet(BasePropertySet.IdOnly);
        static FirstClassProperties: PropertySet = PropertySet.CreateReadonlyPropertySet(BasePropertySet.FirstClassProperties); // static readonly
        private static defaultPropertySetMap: LazyMember<IndexerWithEnumKey<BasePropertySet, string>> = new LazyMember<IndexerWithEnumKey<BasePropertySet, string>>(() => {
            var result: IndexerWithEnumKey<BasePropertySet, string> = {};// = new Dictionary<BasePropertySet, string>();
            result[BasePropertySet.IdOnly] = "IdOnly";
            result[BasePropertySet.FirstClassProperties] = "AllProperties";
            return result;
        });

        //constructor();
        //constructor(basePropertySet:BasePropertySet);
        //constructor(additionalProperties: PropertyDefinitionBase[]);
        constructor(basePropertySet: BasePropertySet = BasePropertySet.IdOnly, additionalProperties?: PropertyDefinitionBase[]) {
            this.basePropertySet = basePropertySet;
            if (additionalProperties) {
                this.additionalProperties.push.apply(this.additionalProperties, additionalProperties); //todo: addrange for array - http://typescript.codeplex.com/workitem/1422
            }
        }
        
        Add(property: PropertyDefinitionBase): void {
            this.ThrowIfReadonly();
            EwsUtilities.ValidateParam(property, "property");

            if (this.additionalProperties.indexOf(property) === -1) {
                this.additionalProperties.push(property);
            }
        }
        AddRange(properties: PropertyDefinitionBase /*System.Collections.Generic.IEnumerable<T>*/): void {
            this.ThrowIfReadonly();
            EwsUtilities.ValidateParamCollection(properties, "properties");

            for (var property in properties) {
                this.Add(<PropertyDefinitionBase>property);
            }
        }
        Clear(): void {
            this.ThrowIfReadonly();
            this.additionalProperties.splice(0);
        }
        Contains(property: PropertyDefinitionBase): boolean { return this.additionalProperties.indexOf(property) !== -1; }
        static CreateReadonlyPropertySet(basePropertySet: BasePropertySet): PropertySet { throw new Error("Not implemented."); }
        GetEnumerator(): any { throw new Error("Not implemented."); }
        GetShapeName(serviceObjectType: ServiceObjectType): string {
            switch (serviceObjectType) {
                case ServiceObjectType.Item:
                    return XmlElementNames.ItemShape;
                case ServiceObjectType.Folder:
                    return XmlElementNames.FolderShape;
                case ServiceObjectType.Conversation:
                    return XmlElementNames.ConversationShape;
                default:
                    EwsUtilities.Assert(
                        false,
                        "PropertySet.GetShapeName",
                        string.Format("An unexpected object type {0} for property shape. This code path should never be reached.", serviceObjectType));
                    return string.Empty;
            }
        }
        InternalValidate(): void {
            for (var i = 0; i < this.additionalProperties.length; i++) {
                if (this.additionalProperties[i] == null) {
                    throw new ServiceValidationException(string.Format("additional property  is null at {0}" /*Strings.AdditionalPropertyIsNull*/, i));
                }
            }
        }
        Remove(property: PropertyDefinitionBase): boolean {
            this.ThrowIfReadonly();
            var index = this.additionalProperties.indexOf(property);
            return typeof (this.additionalProperties.splice(index)) !== undefined;// .Remove(property);
        }
        ThrowIfReadonly(): void {
            if (this.isReadOnly) {
                throw new Error(" PropertySet can not be modified");// System.NotSupportedException(Strings.PropertySetCannotBeModified);
            }
        }
        Validate(): void { //void ISelfValidate.Validate()
            this.InternalValidate();
        }
        ValidateForRequest(request: ServiceRequestBase, summaryPropertiesOnly: boolean): void {
            for (var propItem in this.additionalProperties) {
                var propDefBase: PropertyDefinitionBase = propItem;
                var propertyDefinition = <PropertyDefinition>propDefBase;
                if (propertyDefinition instanceof PropertyDefinition/* != null*/) {
                    if (propertyDefinition.Version > request.Service.RequestedServerVersion) {
                        throw new ServiceVersionException(
                            string.Format(
                                "Property: {0} is incompatible with version: {1}",//Strings.PropertyIncompatibleWithRequestVersion,
                                propertyDefinition.Name,
                                propertyDefinition.Version));
                    }

                    if (summaryPropertiesOnly && !propertyDefinition.HasFlag(PropertyDefinitionFlags.CanFind, request.Service.RequestedServerVersion)) {
                        throw new ServiceValidationException(
                            string.Format(
                                "this is not a summary property; property: {0}, xmlelementaName: {1}",//Strings.NonSummaryPropertyCannotBeUsed,
                                propertyDefinition.Name,
                                request.GetXmlElementName()));
                    }
                }
            }

            if (this.FilterHtmlContent/*.HasValue*/) {
                if (request.Service.RequestedServerVersion < ExchangeVersion.Exchange2010) {
                    throw new ServiceVersionException(
                        string.Format(
                            "property: {0} is is incompatible with requested versioin, require version: {1}",//Strings.PropertyIncompatibleWithRequestVersion,
                            "FilterHtmlContent",
                            ExchangeVersion.Exchange2010));
                }
            }

            if (this.ConvertHtmlCodePageToUTF8/*.HasValue*/) {
                if (request.Service.RequestedServerVersion < ExchangeVersion.Exchange2010_SP1) {
                    throw new ServiceVersionException(
                        string.Format(
                            "property: {0} is is incompatible with requested versioin, require version: {1}",//Strings.PropertyIncompatibleWithRequestVersion,
                            "ConvertHtmlCodePageToUTF8",
                            ExchangeVersion.Exchange2010_SP1));
                }
            }

            if (!string.IsNullOrEmpty(this.InlineImageUrlTemplate)) {
                if (request.Service.RequestedServerVersion < ExchangeVersion.Exchange2013) {
                    throw new ServiceVersionException(
                        string.Format(
                            "property: {0} is is incompatible with requested versioin, require version: {1}",//Strings.PropertyIncompatibleWithRequestVersion,
                            "InlineImageUrlTemplate",
                            ExchangeVersion.Exchange2013));
                }
            }

            if (this.BlockExternalImages/*.HasValue*/) {
                if (request.Service.RequestedServerVersion < ExchangeVersion.Exchange2013) {
                    throw new ServiceVersionException(
                        string.Format(
                            "property: {0} is is incompatible with requested versioin, require version: {1}",//Strings.PropertyIncompatibleWithRequestVersion,
                            "BlockExternalImages",
                            ExchangeVersion.Exchange2013));
                }
            }

            if (this.AddBlankTargetToLinks/*.HasValue*/) {
                if (request.Service.RequestedServerVersion < ExchangeVersion.Exchange2013) {
                    throw new ServiceVersionException(
                        string.Format(
                            "property: {0} is is incompatible with requested versioin, require version: {1}",//Strings.PropertyIncompatibleWithRequestVersion,
                            "AddTargetToLinks",
                            ExchangeVersion.Exchange2013));
                }
            }

            if (this.MaximumBodySize/*.HasValue*/) {
                if (request.Service.RequestedServerVersion < ExchangeVersion.Exchange2013) {
                    throw new ServiceVersionException(
                        string.Format(
                            "property: {0} is is incompatible with requested versioin, require version: {1}",//Strings.PropertyIncompatibleWithRequestVersion,
                            "MaximumBodySize",
                            ExchangeVersion.Exchange2013));
                }
            }
        }
        //WriteAdditionalPropertiesToJson(jsonItemShape: JsonObject, service: ExchangeService, propertyDefinitions: System.Collections.Generic.IEnumerable<T>): any { throw new Error("Not implemented."); }
        WriteAdditionalPropertiesToXml(writer: EwsServiceXmlWriter, propertyDefinitions: PropertyDefinitionBase[]): void {
            writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.AdditionalProperties);

            for (var propertyDefinition in propertyDefinitions) {
                (<PropertyDefinitionBase>propertyDefinition).WriteToXml(writer);
            }

            writer.WriteEndElement();
        }
        //WriteGetShapeToJson(jsonRequest: JsonObject, service: ExchangeService, serviceObjectType: ServiceObjectType): any { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter, serviceObjectType: ServiceObjectType): void {
            var shapeElementName: string = this.GetShapeName(serviceObjectType);

            writer.WriteStartElement(XmlNamespace.Messages, shapeElementName);

            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.BaseShape,
                XmlElementNames.BaseShape,
                PropertySet.defaultPropertySetMap.Member[this.BasePropertySet]);

            if (serviceObjectType == ServiceObjectType.Item) {
                if (this.RequestedBodyType/*.HasValue*/) {
                    writer.WriteElementValue(
                        XmlNamespace.Types,
                        XmlElementNames.BodyType,
                        XmlElementNames.BodyType,
                        this.RequestedBodyType/*.Value*/);
                }

                if (this.RequestedUniqueBodyType/*.HasValue*/) {
                    writer.WriteElementValue(
                        XmlNamespace.Types,
                        XmlElementNames.UniqueBodyType,
                        XmlElementNames.UniqueBodyType,
                        this.RequestedUniqueBodyType/*.Value*/);
                }

                if (this.RequestedNormalizedBodyType/*.HasValue*/) {
                    writer.WriteElementValue(
                        XmlNamespace.Types,
                        XmlElementNames.NormalizedBodyType,
                        XmlElementNames.NormalizedBodyType,
                        this.RequestedNormalizedBodyType/*.Value*/);
                }

                if (this.FilterHtmlContent/*.HasValue*/) {
                    writer.WriteElementValue(
                        XmlNamespace.Types,
                        XmlElementNames.FilterHtmlContent,
                        XmlElementNames.FilterHtmlContent,
                        this.FilterHtmlContent/*.Value*/);
                }

                if (this.ConvertHtmlCodePageToUTF8/*.HasValue*/ &&
                    writer.Service.RequestedServerVersion >= ExchangeVersion.Exchange2010_SP1) {
                    writer.WriteElementValue(
                        XmlNamespace.Types,
                        XmlElementNames.ConvertHtmlCodePageToUTF8,
                        XmlElementNames.ConvertHtmlCodePageToUTF8,
                        this.ConvertHtmlCodePageToUTF8/*.Value*/);
                }

                if (!string.IsNullOrEmpty(this.InlineImageUrlTemplate) &&
                    writer.Service.RequestedServerVersion >= ExchangeVersion.Exchange2013) {
                    writer.WriteElementValue(
                        XmlNamespace.Types,
                        XmlElementNames.InlineImageUrlTemplate,
                        XmlElementNames.InlineImageUrlTemplate,
                        this.InlineImageUrlTemplate);
                }

                if (this.BlockExternalImages/*.HasValue*/ &&
                    writer.Service.RequestedServerVersion >= ExchangeVersion.Exchange2013) {
                    writer.WriteElementValue(
                        XmlNamespace.Types,
                        XmlElementNames.BlockExternalImages,
                        XmlElementNames.BlockExternalImages,
                        this.BlockExternalImages/*.Value*/);
                }

                if (this.AddBlankTargetToLinks/*.HasValue*/ &&
                    writer.Service.RequestedServerVersion >= ExchangeVersion.Exchange2013) {
                    writer.WriteElementValue(
                        XmlNamespace.Types,
                        XmlElementNames.AddBlankTargetToLinks,
                        XmlElementNames.AddBlankTargetToLinks,
                        this.AddBlankTargetToLinks/*.Value*/);
                }

                if (this.MaximumBodySize/*.HasValue*/ &&
                    writer.Service.RequestedServerVersion >= ExchangeVersion.Exchange2013) {
                    writer.WriteElementValue(
                        XmlNamespace.Types,
                        XmlElementNames.MaximumBodySize,
                        XmlElementNames.MaximumBodySize,
                        this.MaximumBodySize/*.Value*/);
                }
            }

            if (this.additionalProperties.length > 0) {
                this.WriteAdditionalPropertiesToXml(writer, this.additionalProperties);
            }

            writer.WriteEndElement(); // Item/FolderShape
        }
    }

    export class SoapFaultDetails {
        FaultCode: string;
        FaultString: string;
        FaultActor: string;
        ResponseCode: ServiceError;
        Message: string;
        ErrorCode: ServiceError;
        ExceptionType: string;
        LineNumber: number;
        PositionWithinLine: number;
        ErrorDetails: { [index: string]: string }; //System.Collections.Generic.Dictionary<string, string>;
        //private faultCode: string;
        //private faultString: string;
        //private faultActor: string;
        //private responseCode: ServiceError;
        //private message: string;
        //private errorCode: ServiceError;
        //private exceptionType: string;
        //private lineNumber: number;
        //private positionWithinLine: number;
        //private errorDetails: any;//System.Collections.Generic.Dictionary<string, string>;
        static ParseObject(obj:any): SoapFaultDetails {
            var soapFaultDetails = new SoapFaultDetails();
            soapFaultDetails.FaultCode = obj[XmlElementNames.SOAPFaultCodeElementName];
            soapFaultDetails.FaultString = obj[XmlElementNames.SOAPFaultStringElementName];
            soapFaultDetails.FaultActor = obj[XmlElementNames.SOAPFaultActorElementName];
            soapFaultDetails.ParseDetailNode(obj[XmlElementNames.SOAPDetailElementName]);
            return soapFaultDetails;
        }

        static Parse(reader: EwsXmlReader, soapNamespace: XmlNamespace): SoapFaultDetails {
            var soapFaultDetails = new SoapFaultDetails();

            do {
                reader.Read();
                if (reader.NodeType == Node.ELEMENT_NODE) {
                    switch (reader.LocalName) {
                        case XmlElementNames.SOAPFaultCodeElementName:
                            soapFaultDetails.FaultCode = reader.ReadElementValue();
                            break;

                        case XmlElementNames.SOAPFaultStringElementName:
                            soapFaultDetails.FaultString = reader.ReadElementValue();
                            break;

                        case XmlElementNames.SOAPFaultActorElementName:
                            soapFaultDetails.FaultActor = reader.ReadElementValue();
                            break;

                        case XmlElementNames.SOAPDetailElementName:
                            soapFaultDetails.ParseDetailNode(reader);
                            break;

                        default:
                            break;
                    }
                }
            }
            while (reader.HasRecursiveParent(XmlElementNames.SOAPFaultElementName));

            return soapFaultDetails;
        }
        //Parse(jsonObject: JsonObject): SoapFaultDetails{ throw new Error("Not implemented.");}
        ParseDetailNodeFromObject(obj: any): void {

        }
        ParseDetailNode(reader: EwsXmlReader): any { throw new Error("Not implemented."); }
        ParseMessageXml(reader: EwsXmlReader): any { throw new Error("Not implemented."); }
    }




}