import {XmlElementNames} from "../../XmlElementNames";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";
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
export class ServiceObjectSchema {
    //todo: fixing difficulties with following c# code.
    //using PropertyDefinitionDictionary = LazyMember < System.Collections.Generic.Dictionary<string, PropertyDefinitionBase>>;
    //type SchemaTypeList = LazyMember <string[]>;
    get FirstClassProperties(): PropertyDefinition[] { return this.firstClassProperties; }//System.Collections.Generic.List<PropertyDefinition>;
    get FirstClassSummaryProperties(): PropertyDefinition[] { return this.firstClassSummaryProperties; }//System.Collections.Generic.List<PropertyDefinition>;
    get IndexedProperties(): IndexedPropertyDefinition[] { return this.indexedProperties; }//System.Collections.Generic.List<IndexedPropertyDefinition>;
    private properties: Dictionary<string, PropertyDefinition> = new Dictionary<string,PropertyDefinition>((key)=>key);// System.Collections.Generic.Dictionary<TKey, TValue>;
    private visibleProperties: PropertyDefinition[] = [];//System.Collections.Generic.List<PropertyDefinition>;
    private firstClassProperties: PropertyDefinition[] = [];//System.Collections.Generic.List<PropertyDefinition>;
    private firstClassSummaryProperties: PropertyDefinition[] = [];//System.Collections.Generic.List<PropertyDefinition>;
    private indexedProperties: IndexedPropertyDefinition[] = [];//System.Collections.Generic.List<IndexedPropertyDefinition>;
    static AppointmentSchema: AppointmentSchema;
    //static appointmentSchema: AppointmentSchema;
    static ExtendedProperties: PropertyDefinition = new ComplexPropertyDefinition<ExtendedPropertyCollection>(
        "ExtendedProperties",
        XmlElementNames.ExtendedProperty,
        ExchangeVersion.Exchange2007_SP1,
        null,//FieldUri
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.ReuseInstance | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate,
        () => { return new ExtendedPropertyCollection(); }
        );

    
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
    //    static FindPropertyDefinition(uri: string): PropertyDefinitionBase {
    //        return ServiceObjectSchema.allSchemaProperties.Member.get(uri);
    //    }
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
    constructor() {
        this.RegisterProperties();
    }
    GetEnumerator(): PropertyDefinition[] { return this.visibleProperties; }

    RegisterIndexedProperty(indexedProperty: IndexedPropertyDefinition): void { this.indexedProperties.push(indexedProperty); }
    RegisterInternalProperty(property: PropertyDefinition): void { this.RegisterProperty(property, true); }
    RegisterProperties(): void { /*virtual void for derived class to implement if needed*/ }
    //RegisterProperty(property: PropertyDefinition): any { throw new Error("ServiceObjectSchema.ts - RegisterProperty : Not implemented."); }
    RegisterProperty(property: PropertyDefinition, isInternal: boolean = false): void {
        this.properties.Add(property.XmlElementName, property);

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
    TryGetPropertyDefinition(xmlElementName: string, propertyDefinition: IOutParam<PropertyDefinition>): boolean {
        return this.properties.tryGetValue(xmlElementName, propertyDefinition);
    }
}