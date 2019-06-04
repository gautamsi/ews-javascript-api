// import {XmlElementNames} from "../../XmlElementNames";
// import {Schemas} from "./Schemas";
// import {ComplexPropertyDefinition} from "../../../PropertyDefinitions/ComplexPropertyDefinition";
// import {StringPropertyDefinition} from "../../../PropertyDefinitions/StringPropertyDefinition";
// import {DateTimePropertyDefinition} from "../../../PropertyDefinitions/DateTimePropertyDefinition";
// import {ItemId} from "../../../ComplexProperties/ItemId";
// import {AttributedStringCollection} from "../../../ComplexProperties/AttributedStringCollection";
// import {PropertyDefinitionFlags} from "../../../Enumerations/PropertyDefinitionFlags";
// import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
// import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";
// import {ItemSchema} from "./ItemSchema";
// /**
//  * FieldURIs for persona.
//  */
// module FieldUris {
//     export var PersonaId: string = "persona:PersonaId";
//     export var PersonaType: string = "persona:PersonaType";
//     export var CreationTime: string = "persona:CreationTime";
//     export var DisplayNameFirstLastHeader: string = "persona:DisplayNameFirstLastHeader";
//     export var DisplayNameLastFirstHeader: string = "persona:DisplayNameLastFirstHeader";
//     export var DisplayName: string = "persona:DisplayName";
//     export var DisplayNameFirstLast: string = "persona:DisplayNameFirstLast";
//     export var DisplayNameLastFirst: string = "persona:DisplayNameLastFirst";
//     export var FileAs: string = "persona:FileAs";
//     export var Generation: string = "persona:Generation";
//     export var DisplayNamePrefix: string = "persona:DisplayNamePrefix";
//     export var GivenName: string = "persona:GivenName";
//     export var Surname: string = "persona:Surname";
//     export var Title: string = "persona:Title";
//     export var CompanyName: string = "persona:CompanyName";
//     export var EmailAddress: string = "persona:EmailAddress";
//     export var EmailAddresses: string = "persona:EmailAddresses";
//     export var ImAddress: string = "persona:ImAddress";
//     export var HomeCity: string = "persona:HomeCity";
//     export var WorkCity: string = "persona:WorkCity";
//     export var Alias: string = "persona:Alias";
//     export var RelevanceScore: string = "persona:RelevanceScore";
//     export var Attributions: string = "persona:Attributions";
//     export var OfficeLocations: string = "persona:OfficeLocations";
//     export var ImAddresses: string = "persona:ImAddresses";
//     export var Departments: string = "persona:Departments";
//     export var ThirdPartyPhotoUrls: string = "persona:ThirdPartyPhotoUrls";
// }
// /**
//  * Represents the schema for persona.
//  */
// export class PersonaSchema extends ItemSchema {
//     public PersonaId: PropertyDefinition;
//     public PersonaType: PropertyDefinition;
//     public CreationTime: PropertyDefinition;
//     public DisplayNameFirstLastHeader: PropertyDefinition;
//     public DisplayNameLastFirstHeader: PropertyDefinition;
//     public DisplayName: PropertyDefinition;
//     public DisplayNameFirstLast: PropertyDefinition;
//     public DisplayNameLastFirst: PropertyDefinition;
//     public FileAs: PropertyDefinition;
//     public Generation: PropertyDefinition;
//     public DisplayNamePrefix: PropertyDefinition;
//     public GivenName: PropertyDefinition;
//     public Surname: PropertyDefinition;
//     public Title: PropertyDefinition;
//     public CompanyName: PropertyDefinition;
//     public EmailAddress: PropertyDefinition;
//     public EmailAddresses: PropertyDefinition;
//     public ImAddress: PropertyDefinition;
//     public HomeCity: PropertyDefinition;
//     public WorkCity: PropertyDefinition;
//     public Alias: PropertyDefinition;
//     public RelevanceScore: PropertyDefinition;
//     public Attributions: PropertyDefinition;
//     public OfficeLocations: PropertyDefinition;
//     public ImAddresses: PropertyDefinition;
//     public Departments: PropertyDefinition;
//     public ThirdPartyPhotoUrls: PropertyDefinition;
//     /**
//      * @internal Instance of **PostItemSchema** 
//      */
//     static Instance: PersonaSchema = new PersonaSchema();
//     /**
//      * Registers properties.
//      * 
//      * /remarks/ IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
//      */
//     RegisterProperties(): void {
//         super.RegisterProperties();
//         this.RegisterProperty(this.PersonaId);
//         this.RegisterProperty(this.PersonaType);
//         this.RegisterProperty(this.CreationTime);
//         this.RegisterProperty(this.DisplayNameFirstLastHeader);
//         this.RegisterProperty(this.DisplayNameLastFirstHeader);
//         this.RegisterProperty(this.DisplayName);
//         this.RegisterProperty(this.DisplayNameFirstLast);
//         this.RegisterProperty(this.DisplayNameLastFirst);
//         this.RegisterProperty(this.FileAs);
//         this.RegisterProperty(this.Generation);
//         this.RegisterProperty(this.DisplayNamePrefix);
//         this.RegisterProperty(this.GivenName);
//         this.RegisterProperty(this.Surname);
//         this.RegisterProperty(this.Title);
//         this.RegisterProperty(this.CompanyName);
//         this.RegisterProperty(this.EmailAddress);
//         this.RegisterProperty(this.EmailAddresses);
//         this.RegisterProperty(this.ImAddress);
//         this.RegisterProperty(this.HomeCity);
//         this.RegisterProperty(this.WorkCity);
//         this.RegisterProperty(this.Alias);
//         this.RegisterProperty(this.RelevanceScore);
//         this.RegisterProperty(this.Attributions);
//         this.RegisterProperty(this.OfficeLocations);
//         this.RegisterProperty(this.ImAddresses);
//         this.RegisterProperty(this.Departments);
//         this.RegisterProperty(this.ThirdPartyPhotoUrls);
//     }
//     protected init() {
//         super.init();
//         this.PersonaId =
//             new ComplexPropertyDefinition<ItemId>(
//                 "PersonaId",
//                 XmlElementNames.PersonaId,
//                 FieldUris.PersonaId,
//                 PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
//                 ExchangeVersion.Exchange2013_SP1,
//                 () => { return new ItemId(); });
//         this.PersonaType =
//             new StringPropertyDefinition(
//                 "PersonaType",
//                 XmlElementNames.PersonaType,
//                 FieldUris.PersonaType,
//                 PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
//                 ExchangeVersion.Exchange2013_SP1);
//         this.CreationTime =
//             new DateTimePropertyDefinition(
//                 "CreationTime",
//                 XmlElementNames.CreationTime,
//                 FieldUris.CreationTime,
//                 PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
//                 ExchangeVersion.Exchange2013_SP1);
//         this.DisplayNameFirstLastHeader =
//             new StringPropertyDefinition(
//                 "DisplayNameFirstLastHeader",
//                 XmlElementNames.DisplayNameFirstLastHeader,
//                 FieldUris.DisplayNameFirstLastHeader,
//                 PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
//                 ExchangeVersion.Exchange2013_SP1);
//         this.DisplayNameLastFirstHeader =
//             new StringPropertyDefinition(
//                 "DisplayNameLastFirstHeader",
//                 XmlElementNames.DisplayNameLastFirstHeader,
//                 FieldUris.DisplayNameLastFirstHeader,
//                 PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
//                 ExchangeVersion.Exchange2013_SP1);
//         this.DisplayName =
//             new StringPropertyDefinition(
//                 "DisplayName",
//                 XmlElementNames.DisplayName,
//                 FieldUris.DisplayName,
//                 PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
//                 ExchangeVersion.Exchange2013_SP1);
//         this.DisplayNameFirstLast =
//             new StringPropertyDefinition(
//                 "DisplayNameFirstLast",
//                 XmlElementNames.DisplayNameFirstLast,
//                 FieldUris.DisplayNameFirstLast,
//                 PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
//                 ExchangeVersion.Exchange2013_SP1);
//         this.DisplayNameLastFirst =
//             new StringPropertyDefinition(
//                 "DisplayNameLastFirst",
//                 XmlElementNames.DisplayNameLastFirst,
//                 FieldUris.DisplayNameLastFirst,
//                 PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
//                 ExchangeVersion.Exchange2013_SP1);
//         this.FileAs =
//             new StringPropertyDefinition(
//                 "FileAs",
//                 XmlElementNames.FileAs,
//                 FieldUris.FileAs,
//                 PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
//                 ExchangeVersion.Exchange2013_SP1);
//         this.Generation =
//             new StringPropertyDefinition(
//                 "Generation",
//                 XmlElementNames.Generation,
//                 FieldUris.Generation,
//                 PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
//                 ExchangeVersion.Exchange2013_SP1);
//         this.DisplayNamePrefix =
//             new StringPropertyDefinition(
//                 "DisplayNamePrefix",
//                 XmlElementNames.DisplayNamePrefix,
//                 FieldUris.DisplayNamePrefix,
//                 PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
//                 ExchangeVersion.Exchange2013_SP1);
//         this.GivenName =
//             new StringPropertyDefinition(
//                 "GivenName",
//                 XmlElementNames.GivenName,
//                 FieldUris.GivenName,
//                 PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
//                 ExchangeVersion.Exchange2013_SP1);
//         this.Surname =
//             new StringPropertyDefinition(
//                 "Surname",
//                 XmlElementNames.Surname,
//                 FieldUris.Surname,
//                 PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
//                 ExchangeVersion.Exchange2013_SP1);
//         this.Title =
//             new StringPropertyDefinition(
//                 "Title",
//                 XmlElementNames.Title,
//                 FieldUris.Title,
//                 PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
//                 ExchangeVersion.Exchange2013_SP1);
//         this.CompanyName =
//             new StringPropertyDefinition(
//                 "CompanyName",
//                 XmlElementNames.CompanyName,
//                 FieldUris.CompanyName,
//                 PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
//                 ExchangeVersion.Exchange2013_SP1);
//         this.EmailAddress =
//             new ComplexPropertyDefinition<PersonaEmailAddress>(
//                 "EmailAddress",
//                 XmlElementNames.EmailAddress,
//                 FieldUris.EmailAddress,
//                 PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
//                 ExchangeVersion.Exchange2013_SP1,
//                 () => { return new PersonaEmailAddress(); });
//         this.EmailAddresses =
//             new ComplexPropertyDefinition<PersonaEmailAddressCollection>(
//                 "EmailAddresses",
//                 XmlElementNames.EmailAddresses,
//                 FieldUris.EmailAddresses,
//                 PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
//                 ExchangeVersion.Exchange2013_SP1,
//                 () => { return new PersonaEmailAddressCollection(); });
//         this.ImAddress =
//             new StringPropertyDefinition(
//                 "ImAddress",
//                 XmlElementNames.ImAddress,
//                 FieldUris.ImAddress,
//                 PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
//                 ExchangeVersion.Exchange2013_SP1);
//         this.HomeCity =
//             new StringPropertyDefinition(
//                 "HomeCity",
//                 XmlElementNames.HomeCity,
//                 FieldUris.HomeCity,
//                 PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
//                 ExchangeVersion.Exchange2013_SP1);
//         this.WorkCity =
//             new StringPropertyDefinition(
//                 "WorkCity",
//                 XmlElementNames.WorkCity,
//                 FieldUris.WorkCity,
//                 PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
//                 ExchangeVersion.Exchange2013_SP1);
//         this.Alias =
//             new StringPropertyDefinition(
//                 "Alias",
//                 XmlElementNames.Alias,
//                 FieldUris.Alias,
//                 PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
//                 ExchangeVersion.Exchange2013_SP1);
//         this.RelevanceScore =
//             new IntPropertyDefinition(
//                 "RelevanceScore",
//                 XmlElementNames.RelevanceScore,
//                 FieldUris.RelevanceScore,
//                 PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
//                 ExchangeVersion.Exchange2013_SP1,
//                 true);
//         this.Attributions =
//             new ComplexPropertyDefinition<AttributionCollection>(
//                 "Attributions",
//                 XmlElementNames.Attributions,
//                 FieldUris.Attributions,
//                 PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
//                 ExchangeVersion.Exchange2013_SP1,
//                 () => { return new AttributionCollection(); });
//         this.OfficeLocations =
//             new ComplexPropertyDefinition<AttributedStringCollection>(
//                 "OfficeLocations",
//                 XmlElementNames.OfficeLocations,
//                 FieldUris.OfficeLocations,
//                 PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
//                 ExchangeVersion.Exchange2013_SP1,
//                 () => { return new AttributedStringCollection(); });
//         this.ImAddresses =
//             new ComplexPropertyDefinition<AttributedStringCollection>(
//                 "ImAddresses",
//                 XmlElementNames.ImAddresses,
//                 FieldUris.ImAddresses,
//                 PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
//                 ExchangeVersion.Exchange2013_SP1,
//                 () => { return new AttributedStringCollection(); });
//         this.Departments =
//             new ComplexPropertyDefinition<AttributedStringCollection>(
//                 "Departments",
//                 XmlElementNames.Departments,
//                 FieldUris.Departments,
//                 PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
//                 ExchangeVersion.Exchange2013_SP1,
//                 () => { return new AttributedStringCollection(); });
//         this.ThirdPartyPhotoUrls =
//             new ComplexPropertyDefinition<AttributedStringCollection>(
//                 "ThirdPartyPhotoUrls",
//                 XmlElementNames.ThirdPartyPhotoUrls,
//                 FieldUris.ThirdPartyPhotoUrls,
//                 PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
//                 ExchangeVersion.Exchange2013_SP1,
//                 () => { return new AttributedStringCollection(); });
//     }
// }
