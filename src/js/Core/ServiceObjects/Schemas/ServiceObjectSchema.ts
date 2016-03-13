import {XmlElementNames} from "../../XmlElementNames";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";
import {PropertyDefinitionBase} from "../../../PropertyDefinitions/PropertyDefinitionBase";
import {IndexedPropertyDefinition} from "../../../PropertyDefinitions/IndexedPropertyDefinition";
import {ComplexPropertyDefinition} from "../../../PropertyDefinitions/ComplexPropertyDefinition";
import {PropertyDefinitionFlags} from "../../../Enumerations/PropertyDefinitionFlags";
import {IOutParam} from "../../../Interfaces/IOutParam";
import {Dictionary, DictionaryWithPropertyDefitionKey, PropertyDefinitionDictionary} from "../../../AltDictionary";
import {AppointmentSchema} from "./AppointmentSchema";
import {LazyMember} from "../../LazyMember";
import {EwsUtilities} from "../../EwsUtilities";
import {EwsLogging} from "../../EwsLogging";
import {StringHelper} from "../../../ExtensionMethods";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {ExtendedPropertyCollection} from "../../../ComplexProperties/ExtendedPropertyCollection";

/**
 * Represents the base class for all item and folder schemas.
 */
export abstract class ServiceObjectSchema {
    //todo: fixing difficulties with following c# code. - ref: added as delegate PropertyDefinitionDictionary in AltDictionary
    //using PropertyDefinitionDictionary = LazyMember < System.Collections.Generic.Dictionary<string, PropertyDefinitionBase>>;
    //type SchemaTypeList = LazyMember <string[]>;

    private properties: Dictionary<string, PropertyDefinition> = new Dictionary<string, PropertyDefinition>((key) => key);// System.Collections.Generic.Dictionary<TKey, TValue>;
    private visibleProperties: PropertyDefinition[] = [];//System.Collections.Generic.List<PropertyDefinition>;
    private firstClassProperties: PropertyDefinition[] = [];//System.Collections.Generic.List<PropertyDefinition>;
    private firstClassSummaryProperties: PropertyDefinition[] = [];//System.Collections.Generic.List<PropertyDefinition>;
    private indexedProperties: IndexedPropertyDefinition[] = [];//System.Collections.Generic.List<IndexedPropertyDefinition>;
    //static appointmentSchema: AppointmentSchema; - moved to Schemas

    /**
     * @internal Gets the list of first class properties for this service object type.
     */
    get FirstClassProperties(): PropertyDefinition[] { return this.firstClassProperties; }//System.Collections.Generic.List<PropertyDefinition>;

    /**
     * @internal Gets the list of first class summary properties for this service object type.
     */
    get FirstClassSummaryProperties(): PropertyDefinition[] { return this.firstClassSummaryProperties; }//System.Collections.Generic.List<PropertyDefinition>;

    /**
     * @internal Gets the list of indexed properties for this service object type.
     */
    get IndexedProperties(): IndexedPropertyDefinition[] { return this.indexedProperties; }//System.Collections.Generic.List<IndexedPropertyDefinition>;

    /**
     * Defines the **ExtendedProperties** property.
     */
    static ExtendedProperties: PropertyDefinition = new ComplexPropertyDefinition<ExtendedPropertyCollection>(
        "ExtendedProperties",
        XmlElementNames.ExtendedProperty,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.ReuseInstance | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new ExtendedPropertyCollection(); }
    );


    private static allSchemaProperties = new PropertyDefinitionDictionary((s) => s);

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
    static FindPropertyDefinition(uri: string): PropertyDefinitionBase {
        return ServiceObjectSchema.allSchemaProperties.get(uri);
    }

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
    constructor() {
        this.RegisterProperties();
    }

    GetEnumerator(): PropertyDefinition[] { return this.visibleProperties; }

    protected init() { }

    /**
     * @internal Registers an indexed property.
     *
     * @param   {IndexedPropertyDefinition}   indexedProperty   The indexed property to register.
     */
    RegisterIndexedProperty(indexedProperty: IndexedPropertyDefinition): void { this.indexedProperties.push(indexedProperty); }

    /**
     * @internal Registers an internal schema property.
     *
     * @param   {any}                   registeringSchemaClass     SchemaClass calling this method - workaround for fieldUri registration oterhwise it registers super/parent class static properties as well. TypeScript does not provide a way to detect inherited property, hasOwnProperty returns true for parent static property
     * @param   {PropertyDefinition}   property   The property to register.
     */
    RegisterInternalProperty(registeringSchemaClass: any, property: PropertyDefinition): void { this.RegisterProperty(registeringSchemaClass, property, true); }

    /**
     * @internal Registers properties.
     * 
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void {/** Virtual */ }

    /**
     * @internal Registers a schema property. - workaround for fieldUri registration oterhwise it registers super/parent class static properties as well. TypeScript does not provide a way to detect inherited property, hasOwnProperty returns true
     *
     * @param   {any}                   registeringSchemaClass     SchemaClass calling this method - workaround for fieldUri registration oterhwise it registers super/parent class static properties as well. TypeScript does not provide a way to detect inherited property, hasOwnProperty returns true for parent static property
     * @param   {PropertyDefinition}    property     The property to register.
     */
    RegisterProperty(registeringSchemaClass: any, property: PropertyDefinition): void;
    /**
     * @private Registers a schema property.
     *
     * @param   {any}                   registeringSchemaClass     SchemaClass calling this method - workaround for fieldUri registration oterhwise it registers super/parent class static properties as well. TypeScript does not provide a way to detect inherited property, hasOwnProperty returns true for parent static property
     * @param   {PropertyDefinition}   property     The property to register.
     * @param   {boolean}   isInternal   Indicates whether the property is internal or should be visible to developers.
     */
    RegisterProperty(registeringSchemaClass: any, property: PropertyDefinition, isInternal: boolean): void;
    RegisterProperty(registeringSchemaClass: any, property: PropertyDefinition, isInternal: boolean = false): void {
        this.properties.Add(property.XmlElementName, property);
        if (!StringHelper.IsNullOrEmpty(property.Uri) && registeringSchemaClass === this.constructor) {
            if (ServiceObjectSchema.allSchemaProperties.containsKey(property.Uri)) {
                EwsLogging.Assert(
                    ServiceObjectSchema.allSchemaProperties.get(property.Uri) == property,
                    "Schema.allSchemaProperties.delegate",
                    StringHelper.Format("There are at least two distinct property definitions with the following URI: {0}", property.Uri));
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
        if (!property.HasFlag(PropertyDefinitionFlags.MustBeExplicitlyLoaded)) {
            this.firstClassProperties.push(property);
        }

        // If this property can be found, add it to the list of firstClassSummaryProperties
        if (property.HasFlag(PropertyDefinitionFlags.CanFind)) {
            this.firstClassSummaryProperties.push(property);
        }
    }

    /**
     * @internal Tries to get property definition.
     *
     * @param   {string}   xmlElementName           Name of the XML element.
     * @param   {IOutParam<PropertyDefinition>}     propertyDefinition   The property definition.
     * @return  {boolean}                           True if property definition exists.
     */
    TryGetPropertyDefinition(xmlElementName: string, propertyDefinition: IOutParam<PropertyDefinition>): boolean {
        return this.properties.tryGetValue(xmlElementName, propertyDefinition);
    }
}

/**
 * Represents the base class for all item and folder schemas.
 */
export interface ServiceObjectSchema {

    /**
     * Defines the **ExtendedProperties** property.
     */
    ExtendedProperties: PropertyDefinition;

    /**
     * @internal Finds the property definition.
     *
     * @param   {string}   uri   The URI.
     * @return  {PropertyDefinitionBase}    Property definition.
     */
    FindPropertyDefinition(uri: string): PropertyDefinitionBase;
}

/**
 * Represents the base class for all item and folder schemas.
 */
export interface ServiceObjectSchemaStatic extends ServiceObjectSchema {
}