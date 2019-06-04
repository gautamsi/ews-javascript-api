"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ComplexPropertyDefinition_1 = require("../../../PropertyDefinitions/ComplexPropertyDefinition");
var AltDictionary_1 = require("../../../AltDictionary");
var EwsLogging_1 = require("../../EwsLogging");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var ExtendedPropertyCollection_1 = require("../../../ComplexProperties/ExtendedPropertyCollection");
var PropertyDefinitionFlags_1 = require("../../../Enumerations/PropertyDefinitionFlags");
var ExtensionMethods_1 = require("../../../ExtensionMethods");
var XmlElementNames_1 = require("../../XmlElementNames");
/**
 * Represents the base class for all item and folder schemas.
 */
var ServiceObjectSchema = /** @class */ (function () {
    //    static ForeachPublicStaticPropertyFieldInType(type: string /*System.Type*/, propFieldDelegate: (propertyDefinition: PropertyDefinition, fieldInfo: any /*FieldInfo*/) => void /*ServiceObjectSchema.PropertyFieldInfoDelegate*/): void {
    //        
    //        var keys = Object.keys(type);
    //        keys.forEach((s) => {
    //            if (typeof (type[s]) != "function" && type[s] instanceof (PropertyDefinition)) {
    //                var propertyDefinition = <PropertyDefinition> type[s];
    //                propFieldDelegate(propertyDefinition, s);
    //            }
    //        });
    //        //var staticfields = TypeSystem.GetObjectStaticPropertiesByClassName("Microsoft.Exchange.WebServices.Data." + type);
    //
    //        //for (var field in staticfields) {
    //        //    if (fieldInfo.FieldType == typeof (PropertyDefinition) || fieldInfo.FieldType.IsSubclassOf(typeof (PropertyDefinition))) {
    //        //        PropertyDefinition propertyDefinition = (PropertyDefinition) fieldInfo.GetValue(null);
    //        //        propFieldDelegate(propertyDefinition, fieldInfo);
    //        //    }
    //        //}
    //    }
    //    static InitializeSchemaPropertyNames(): void {
    //        
    //        //lock(lockObject)
    //        //{
    //        for (var type of ServiceObjectSchema.allSchemaTypes.Member) {
    //            //var type: string = item;
    //            ServiceObjectSchema.ForeachPublicStaticPropertyFieldInType(
    //                type,
    //                (propDef: PropertyDefinition, fieldName: string) => { propDef.Name = fieldName; });
    //        }
    //        //}
    //    }
    /**
     * @internal Initializes a new instance of the **ServiceObjectSchema** class.
     */
    function ServiceObjectSchema() {
        //todo: fixing difficulties with following c# code. - ref: added as delegate PropertyDefinitionDictionary in AltDictionary
        //using PropertyDefinitionDictionary = LazyMember < System.Collections.Generic.Dictionary<string, PropertyDefinitionBase>>;
        //type SchemaTypeList = LazyMember <string[]>;
        this.properties = new AltDictionary_1.Dictionary(function (key) { return key; }); // System.Collections.Generic.Dictionary<TKey, TValue>;
        this.visibleProperties = []; //System.Collections.Generic.List<PropertyDefinition>;
        this.firstClassProperties = []; //System.Collections.Generic.List<PropertyDefinition>;
        this.firstClassSummaryProperties = []; //System.Collections.Generic.List<PropertyDefinition>;
        this.indexedProperties = []; //System.Collections.Generic.List<IndexedPropertyDefinition>;
        this.RegisterProperties();
    }
    Object.defineProperty(ServiceObjectSchema.prototype, "FirstClassProperties", {
        //static appointmentSchema: AppointmentSchema; - moved to Schemas
        /**
         * @internal Gets the list of first class properties for this service object type.
         */
        get: function () { return this.firstClassProperties; } //System.Collections.Generic.List<PropertyDefinition>;
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceObjectSchema.prototype, "FirstClassSummaryProperties", {
        /**
         * @internal Gets the list of first class summary properties for this service object type.
         */
        get: function () { return this.firstClassSummaryProperties; } //System.Collections.Generic.List<PropertyDefinition>;
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceObjectSchema.prototype, "IndexedProperties", {
        /**
         * @internal Gets the list of indexed properties for this service object type.
         */
        get: function () { return this.indexedProperties; } //System.Collections.Generic.List<IndexedPropertyDefinition>;
        ,
        enumerable: true,
        configurable: true
    });
    //    private static lockObject: any = {};
    //    private static allSchemaTypes: LazyMember<string[]> = new LazyMember<string[]>(() => { //SchemaTypeList - LazyMember<T>; - using typenames[] temporarily
    //        var typeList: string[] = [];
    //        return typeList;
    //        typeList.push("AppointmentSchema");
    //        typeList.push("CalendarResponseObjectSchema");
    //        typeList.push("CancelMeetingMessageSchema");
    //        typeList.push("ContactGroupSchema");
    //        typeList.push("ContactSchema");
    //        typeList.push("ConversationSchema");
    //        typeList.push("EmailMessageSchema");
    //        typeList.push("FolderSchema");
    //        typeList.push("ItemSchema");
    //        typeList.push("MeetingMessageSchema");
    //        typeList.push("MeetingRequestSchema");
    //        typeList.push("MeetingCancellationSchema");
    //        typeList.push("MeetingResponseSchema");
    //        typeList.push("PostItemSchema");
    //        typeList.push("PostReplySchema");
    //        typeList.push("ResponseMessageSchema");
    //        typeList.push("ResponseObjectSchema");
    //        typeList.push("ServiceObjectSchema");
    //        typeList.push("SearchFolderSchema");
    //        typeList.push("TaskSchema");
    //
    //        return typeList;
    //    });
    //    
    ////    private static allSchemaTypes: LazyMember<any[]> = new LazyMember<any[]>(() => { //SchemaTypeList - LazyMember<T>; - using typenames[] temporarily
    ////        var typeList: any[] = [];
    ////        return typeList;
    ////        typeList.push(AppointmentSchema);
    ////        typeList.push(CalendarResponseObjectSchema);
    ////        typeList.push(CancelMeetingMessageSchema);
    ////        typeList.push(ContactGroupSchema);
    ////        typeList.push(ContactSchema);
    ////        typeList.push(ConversationSchema);
    ////        typeList.push(EmailMessageSchema);
    ////        typeList.push(FolderSchema);
    ////        typeList.push(ItemSchema);
    ////        typeList.push(MeetingMessageSchema);
    ////        typeList.push(MeetingRequestSchema);
    ////        typeList.push(MeetingCancellationSchema);
    ////        typeList.push(MeetingResponseSchema);
    ////        typeList.push(PostItemSchema);
    ////        typeList.push(PostReplySchema);
    ////        typeList.push(ResponseMessageSchema);
    ////        typeList.push(ResponseObjectSchema);
    ////        typeList.push(ServiceObjectSchema);
    ////        typeList.push(SearchFolderSchema);
    ////        typeList.push(TaskSchema);
    ////
    ////        return typeList;
    ////    });
    //    private static allSchemaProperties = new LazyMember<StringPropertyDefinitionBaseDictionary<string, PropertyDefinitionBase>>(()=> {// string[] //LazyMember<T>;PropertyDefinitionDictionary => LazyMember<System.Collections.Generic.Dictionary<string, PropertyDefinitionBase>>;
    //        var propDefDictionary: StringPropertyDefinitionBaseDictionary<string, PropertyDefinitionBase> = new StringPropertyDefinitionBaseDictionary<string, PropertyDefinitionBase>();
    //        for (var type of ServiceObjectSchema.allSchemaTypes.Member) {
    //            //var type: string = item;
    //            ServiceObjectSchema.AddSchemaPropertiesToDictionary(type, propDefDictionary);
    //        }
    //        
    //        return propDefDictionary;
    //    });
    //    static AddSchemaPropertiesToDictionary(type: string /*System.Type*/, propDefDictionary: StringPropertyDefinitionBaseDictionary<string, PropertyDefinitionBase> /*System.Collections.Generic.Dictionary<TKey, TValue>*/): void {
    //        ServiceObjectSchema.ForeachPublicStaticPropertyFieldInType(
    //            type,
    //            (propertyDefinition: PropertyDefinition, fieldName: string) => {
    //                // Some property definitions descend from ServiceObjectPropertyDefinition but don't have
    //                // a Uri, like ExtendedProperties. Ignore them.
    //                if (!StringHelper.IsNullOrEmpty(propertyDefinition.Uri)) {
    //                    var existingPropertyDefinition: IOutParam<PropertyDefinitionBase> = { outValue: null };
    //                    if (propDefDictionary.tryGetValue(propertyDefinition.Uri, existingPropertyDefinition)) {
    //                        EwsLogging.Assert(
    //                            existingPropertyDefinition == propertyDefinition,
    //                            "Schema.allSchemaProperties.delegate",
    //                            StringHelper.Format("There are at least two distinct property definitions with the following URI: {0}", propertyDefinition.Uri));
    //                    }
    //                    else {
    //                        propDefDictionary.add(propertyDefinition.Uri, propertyDefinition);
    //
    //                        // The following is a "generic hack" to register properties that are not public and
    //                        // thus not returned by the above GetFields call. It is currently solely used to register
    //                        // the MeetingTimeZone property.
    //                        var associatedInternalProperties: PropertyDefinition[] = propertyDefinition.GetAssociatedInternalProperties();
    //
    //                        for (var associatedInternalProperty of associatedInternalProperties) {
    //                            //var associatedInternalProperty: PropertyDefinition = item;
    //                            propDefDictionary.add(associatedInternalProperty.Uri, associatedInternalProperty);
    //                        }
    //                    }
    //                }
    //            });
    //    }
    //    private static AddSchemaPropertyNamesToDictionary(type: string /*System.Type*/, propertyNameDictionary: PropDictionary<PropertyDefinition, string>  /*System.Collections.Generic.Dictionary<TKey, TValue>*/): void {
    //        ServiceObjectSchema.ForeachPublicStaticPropertyFieldInType(
    //            type,
    //            (propertyDefinition: PropertyDefinition, fieldName: string) =>
    //            { propertyNameDictionary.add(propertyDefinition, fieldName); });
    //    }
    /**
     * @internal Finds the property definition.
     *
     * @param   {string}   uri   The URI.
     * @return  {PropertyDefinitionBase}    Property definition.
     */
    ServiceObjectSchema.FindPropertyDefinition = function (uri) {
        return ServiceObjectSchema.allSchemaProperties.get(uri);
    };
    /**
     *  Returns an enumerator that iterates through the collection. this case this.visibleProperties
     */
    ServiceObjectSchema.prototype.GetEnumerator = function () {
        return this.visibleProperties;
    };
    ServiceObjectSchema.prototype.init = function () { };
    /**
     * @internal Registers an indexed property.
     *
     * @param   {IndexedPropertyDefinition}   indexedProperty   The indexed property to register.
     */
    ServiceObjectSchema.prototype.RegisterIndexedProperty = function (indexedProperty) { this.indexedProperties.push(indexedProperty); };
    /**
     * @internal Registers an internal schema property.
     *
     * @param   {any}                   registeringSchemaClass     SchemaClass calling this method - workaround for fieldUri registration oterhwise it registers super/parent class static properties as well. TypeScript does not provide a way to detect inherited property, hasOwnProperty returns true for parent static property
     * @param   {PropertyDefinition}   property   The property to register.
     */
    ServiceObjectSchema.prototype.RegisterInternalProperty = function (registeringSchemaClass, property) { this.RegisterProperty(registeringSchemaClass, property, true); };
    /**
     * @internal Registers properties.
     *
     * /remarks/ IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    ServiceObjectSchema.prototype.RegisterProperties = function () { };
    ServiceObjectSchema.prototype.RegisterProperty = function (registeringSchemaClass, property, isInternal) {
        if (isInternal === void 0) { isInternal = false; }
        this.properties.Add(property.XmlElementName, property);
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(property.Uri) && registeringSchemaClass === this.constructor) {
            if (ServiceObjectSchema.allSchemaProperties.containsKey(property.Uri)) {
                EwsLogging_1.EwsLogging.Assert(ServiceObjectSchema.allSchemaProperties.get(property.Uri) == property, "Schema.allSchemaProperties.delegate", ExtensionMethods_1.StringHelper.Format("There are at least two distinct property definitions with the following URI: {0}", property.Uri));
            }
            else {
                ServiceObjectSchema.allSchemaProperties.Add(property.Uri, property);
            }
        }
        if (!isInternal) {
            this.visibleProperties.push(property);
        }
        // If this property does not have to be requested explicitly, add
        // it to the list of firstClassProperties.
        if (!property.HasFlag(PropertyDefinitionFlags_1.PropertyDefinitionFlags.MustBeExplicitlyLoaded)) {
            this.firstClassProperties.push(property);
        }
        // If this property can be found, add it to the list of firstClassSummaryProperties
        if (property.HasFlag(PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind)) {
            this.firstClassSummaryProperties.push(property);
        }
    };
    /**
     * @internal Tries to get property definition.
     *
     * @param   {string}   xmlElementName           Name of the XML element.
     * @param   {IOutParam<PropertyDefinition>}     propertyDefinition   The property definition.
     * @return  {boolean}                           True if property definition exists.
     */
    ServiceObjectSchema.prototype.TryGetPropertyDefinition = function (xmlElementName, propertyDefinition) {
        return this.properties.tryGetValue(xmlElementName, propertyDefinition);
    };
    /**
     * Defines the **ExtendedProperties** property.
     */
    ServiceObjectSchema.ExtendedProperties = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("ExtendedProperties", XmlElementNames_1.XmlElementNames.ExtendedProperty, PropertyDefinitionFlags_1.PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags_1.PropertyDefinitionFlags.ReuseInstance | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new ExtendedPropertyCollection_1.ExtendedPropertyCollection(); });
    ServiceObjectSchema.allSchemaProperties = new AltDictionary_1.PropertyDefinitionDictionary(function (s) { return s; });
    return ServiceObjectSchema;
}());
exports.ServiceObjectSchema = ServiceObjectSchema;
