//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;


//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;




import AutodiscoverRequest = require("./AutodiscoverRequest");
import AutodiscoverResponse = require("../Responses/AutodiscoverResponse");
import AutodiscoverService = require("./Autodiscover/AutodiscoverService");

import GetUserSettingsResponseCollection = require("../Responses/GetUserSettingsResponseCollection");
import GetUserSettingsResponse = require("./Responses/GetUserSettingsResponse");
import GetDomainSettingsResponseCollection = require("../Responses/GetDomainSettingsResponseCollection");
import GetDomainSettingsResponse = require("../Responses/GetDomainSettingsResponse");

import AutodiscoverResponseCollection = require("../AutodiscoverResponseCollection");
import AlternateMailboxCollection = require("../AlternateMailboxCollection");
import DocumentSharingLocationCollection = require("../DocumentSharingLocationCollection");
import WebClientUrlCollection = require("../WebClientUrlCollection");
import ProtocolConnectionCollection = require("../ProtocolConnectionCollection");
import ProtocolConnection = require("./ProtocolConnection");
import DocumentSharingLocation = require("./DocumentSharingLocation");
import GetDomainSettingsRequest = require("./Requests/GetDomainSettingsRequest");
import GetUserSettingsRequest = require("./Requests/GetUserSettingsRequest");

import ConfigurationSettingsBase = require("../ConfigurationSettingsBase");

import UserSettingError = require("../UserSettingError");
import DomainSettingError = require("../DomainSettingError");

import AutodiscoverError = require("../../AutodiscoverError");
import AutodiscoverResponse = require("./AutodiscoverResponse");
import AutodiscoverResponseCollection = require("../AutodiscoverResponseCollection");

import xml = require("System.Xml");

import EwsXmlReader = require("../../Core/EwsXmlReader");
import EwsXmlReader = require("../Core/EwsXmlReader");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

import ServiceResponse = require("../Core/Responses/ServiceResponse");
import ServiceObjectSchema = require("../ServiceObjects/Schemas/ServiceObjectSchema");

import XmlAttributeNames = require("../../Core/XmlAttributeNames");
import XmlElementNames = require("../Core/XmlElementNames");

import AffectedTaskOccurrence = require("../Enumerations/AffectedTaskOccurrence");
import AutodiscoverErrorCode = require("../Enumerations/AutodiscoverErrorCode");
import AutodiscoverResponseType = require("../../../Enumerations/AutodiscoverResponseType");
import BasePropertySet = require("../Enumerations/BasePropertySet");
import BodyType = require("../Enumerations/BodyType");
import DefaultExtendedPropertySet = require("../Enumerations/DefaultExtendedPropertySet");
import DeleteMode = require("../Enumerations/DeleteMode");
import DomainSettingName = require("../../Enumerations/DomainSettingName");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import MapiPropertyType = require("../Enumerations/MapiPropertyType");
import OutlookProtocolType = require("../../../Enumerations/OutlookProtocolType");
import PropertyDefinitionFlags = require("../Enumerations/PropertyDefinitionFlags");
import SendCancellationsMode = require("../Enumerations/SendCancellationsMode");
import ServiceError = require("../Enumerations/ServiceError");
import ServiceObjectType = require("../Enumerations/ServiceObjectType");
import ServiceResult = require("../../Enumerations/ServiceResult");
import TraceFlags = require("../Enumerations/TraceFlags");
import UserSettingName = require("../../Enumerations/UserSettingName");
import WellKnownFolderName = require("../Enumerations/WellKnownFolderName");
import XmlNamespace = require("../Enumerations/XmlNamespace");
import EnumToExchangeVersionMappingHelper = require("../Enumerations/EnumToExchangeVersionMappingHelper");
import DayOfTheWeek = require("../Enumerations/DayOfTheWeek");
import ItemTraversal = require("../Enumerations/ItemTraversal");
import ConversationQueryTraversal = require("../Enumerations/ConversationQueryTraversal");
import FileAsMapping = require("../Enumerations/FileAsMapping");

import WebClientUrl = require("./WebClientUrl");

import RuleOperationErrorCollection = require("../ComplexProperties/RuleOperationErrorCollection");
import Attachment = require("../ComplexProperties/Attachment");
import ItemAttachment = require("../../ComplexProperties/ItemAttachment");
import Mailbox = require("../ComplexProperties/Mailbox");

import ComplexProperty = require("./ComplexProperty");


import ExchangeServiceBase = require("./ExchangeServiceBase");
import ExchangeServiceBase = require("../Core/ExchangeServiceBase");

import ExchangeService = require("../Core/ExchangeService");

import EwsUtilities = require("../../Core/EwsUtilities");

import ExchangeCredentials = require("./Credentials/ExchangeCredentials");

import ExchangeServerInfo = require("../../Core/ExchangeServerInfo");


import PropertyBag = require("../Core/PropertyBag");
import PropertySet = require("./PropertySet");

import SoapFaultDetails = require("../../Misc/SoapFaultDetails");
import DelegateTypes = require("../Misc/DelegateTypes");
import ServiceObject = require("../Core/ServiceObjects/ServiceObject");
import ServiceObjectInfo = require("./ServiceObjects/ServiceObjectInfo");
import Item = require("../ServiceObjects/Items/Item");
import Folder = require("../ServiceObjects/Folders/Folder");
import CalendarFolder = require("../ServiceObjects/Folders/CalendarFolder");
import ContactsFolder = require("../ServiceObjects/Folders/TasksFolder");
import TasksFolder = require("../ServiceObjects/Folders/ContactsFolder");
import SearchFolder = require("./Folders/SearchFolder");
import Contact = require("../ServiceObjects/Items/Contact");
import ContactGroup = require("../ServiceObjects/Items/ContactGroup");
import Conversation = require("../ServiceObjects/Items/Conversation");
import EmailMessage = require("../ServiceObjects/Items/EmailMessage");
import MeetingMessage = require("../ServiceObjects/Items/MeetingMessage");
import MeetingCancellation = require("../ServiceObjects/Items/MeetingCancellation");
import MeetingRequest = require("../ServiceObjects/Items/MeetingRequest");
import MeetingResponse = require("./Items/MeetingResponse");
import PostItem = require("./Items/PostItem");
import Task = require("./Items/Task");

import PropertySet = require("./PropertySet");


import ServiceLocalException = require("./ServiceLocalException");
import ServiceResponseException = require("../../Exceptions/ServiceResponseException");
import ServiceValidationException = require("../../Exceptions/ServiceValidationException");
import ServiceVersionException = require("../Exceptions/ServiceVersionException");

import ISelfValidate = require("../Interfaces/ISelfValidate");


import PropertyDefinitionBase = require("../../PropertyDefinitions/PropertyDefinitionBase");
import PropertyDefinition = require("../PropertyDefinitions/PropertyDefinition");
import IndexedPropertyDefinition = require("../../PropertyDefinitions/IndexedPropertyDefinition");
import ExtendedPropertyDefinition = require("../../PropertyDefinitions/ExtendedPropertyDefinition");

import ExtensionMethods = require("../ExtensionMethods");
import String = ExtensionMethods.stringFormatting;

import ExtensionMethods = require("../../ExtensionMethods");
import String = ExtensionMethods.stringFormatting;


import LazyMember = require("./LazyMember");
//import LazyMember = lm.LazyMember;

import altDict = require("../AltDictionary");