import {EwsXmlReader} from "../../Core/EwsXmlReader";
import {XmlElementNames} from "../../Core/XmlElementNames";
import {XmlAttributeNames} from "../../Core/XmlAttributeNames";

import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {UserSettingName} from "../../Enumerations/UserSettingName";

import {UserSettingError} from "../UserSettingError";
import {WebClientUrlCollection} from "../WebClientUrlCollection";
import {ProtocolConnectionCollection} from "../ProtocolConnectionCollection";
import {AlternateMailboxCollection} from "../AlternateMailboxCollection";
import {DocumentSharingLocationCollection} from "../DocumentSharingLocationCollection";

import {EwsLogging} from "../../Core/EwsLogging";
import {StringHelper} from "../../ExtensionMethods";

import {AutodiscoverResponse} from "./AutodiscoverResponse";
export class GetUserSettingsResponse extends AutodiscoverResponse {
    SmtpAddress: string;
    RedirectTarget: string;
    Settings: { [index: number]: any }; //System.Collections.Generic.IDictionary<UserSettingName, any>;
    UserSettingErrors: UserSettingError[];// System.Collections.ObjectModel.Collection<UserSettingError>;

    constructor() {
        super();
        this.SmtpAddress = "";
        this.Settings = {};

        this.UserSettingErrors = new Array<UserSettingError>();
    }
    /**@internal */
    LoadFromXml(reader: EwsXmlReader, parentElementName: string): void {
        do {
            reader.Read();

            if (reader.NodeType == Node.ELEMENT_NODE) {
                switch (reader.LocalName) {
                    case XmlElementNames.RedirectTarget:
                        this.RedirectTarget = reader.ReadElementValue();
                        break;
                    case XmlElementNames.UserSettingErrors:
                        this.LoadUserSettingErrorsFromXml(reader);
                        break;
                    case XmlElementNames.UserSettings:
                        this.LoadUserSettingsFromXml(reader);
                        break;
                    default:
                        super.LoadFromXml(reader, parentElementName);
                        break;
                }
            }
        }
        while (reader.HasRecursiveParent(parentElementName));
        //while (!reader.IsEndElement(XmlNamespace.Autodiscover, endElementName));
    }
    /**@internal */
    LoadUserSettingErrorsFromXml(reader: EwsXmlReader): void {
        if (!reader.IsEmptyElement) {
            do {
                reader.Read();

                if ((reader.NodeType == Node.ELEMENT_NODE) && (reader.LocalName == XmlElementNames.UserSettingError)) {
                    var error = new UserSettingError();
                    error.LoadFromXml(reader);
                    this.UserSettingErrors.push(error);
                }
            }
            while (reader.HasRecursiveParent(XmlElementNames.UserSettingErrors));
            reader.SeekLast();// fix xml treewalker to go back last node, next do..while loop will come back to current node.
        }
    }
    /**@internal */
    LoadUserSettingsFromXml(reader: EwsXmlReader): void {
        var parent: Node = reader.CurrentNode;
        if (!reader.IsEmptyElement) {
            do {
                reader.Read();

                if (reader.Eof || !reader.HasRecursiveParentNode(parent, XmlElementNames.UserSettings))
                    break;

                if ((reader.NodeType == Node.ELEMENT_NODE /*System.Xml.XmlNodeType.Element*/) && (reader.LocalName == XmlElementNames.UserSetting)) {
                    var settingClass: string = reader.ReadAttributeValue(XmlNamespace.XmlSchemaInstance, XmlAttributeNames.Type);

                    switch (settingClass) {
                        case XmlElementNames.StringSetting:
                        case XmlElementNames.WebClientUrlCollectionSetting:
                        case XmlElementNames.AlternateMailboxCollectionSetting:
                        case XmlElementNames.ProtocolConnectionCollectionSetting:
                        case XmlElementNames.DocumentSharingLocationCollectionSetting:
                            this.ReadSettingFromXml(reader);
                            break;

                        default:
                            EwsLogging.Assert(false,
                                "GetUserSettingsResponse.LoadUserSettingsFromXml",
                                StringHelper.Format("Invalid setting class '{0}' returned", settingClass));
                            break;
                    }
                }
            }
            while (true);// (reader.HasRecursiveParent(XmlElementNames.UserSettings));
            //while (!reader.IsEndElement(XmlNamespace.Autodiscover, XmlElementNames.UserSettings));
        }
    }
    /**@internal */
    ReadSettingFromXml(reader: EwsXmlReader): any {
        var name: string = null;
        var value: any = null;
        var parent: Node = reader.CurrentNode;
        do {
            reader.Read();

            if (reader.Eof || !reader.HasRecursiveParentNode(parent, XmlElementNames.UserSetting))
                break;

            if (reader.NodeType == Node.ELEMENT_NODE) {
                switch (reader.LocalName) {
                    case XmlElementNames.Name:
                        name = reader.ReadElementValue();
                        break;
                    case XmlElementNames.Value:
                        value = reader.ReadElementValue();
                        break;
                    case XmlElementNames.WebClientUrls:
                        value = WebClientUrlCollection.LoadFromXml(reader);
                        break;
                    case XmlElementNames.ProtocolConnections:
                        value = ProtocolConnectionCollection.LoadFromXml(reader);
                        break;
                    case XmlElementNames.AlternateMailboxes:
                        value = AlternateMailboxCollection.LoadFromXml(reader);
                        break;
                    case XmlElementNames.DocumentSharingLocations:
                        value = DocumentSharingLocationCollection.LoadFromXml(reader);
                        break;
                }
            }
        }
        while (true);
        //while (reader.HasRecursiveParentNode(parent, XmlElementNames.UserSetting));
        //while (!reader.IsEndElement(XmlNamespace.Autodiscover, XmlElementNames.UserSetting));
        reader.SeekLast();// fix xml treewalker to go back last node, next do..while loop will come back to current node.


        // EWS Managed API is broken with AutoDSvc endpoint in RedirectUrl scenario
        var userSettingName: UserSettingName = UserSettingName[name];// EwsUtilities.Parse<UserSettingName>(name);
        if (userSettingName !== undefined)
            this.Settings[userSettingName] = value;
        else
            EwsLogging.Assert(false,
                "GetUserSettingsResponse.ReadSettingFromXml",
                "Unexpected or empty name element in user setting");

        //try {

        //}
        //catch (ArgumentException) {
        //    // ignore unexpected UserSettingName in the response (due to the server-side bugs).
        //    // it'd be better if this is hooked into ITraceListener, but that is unavailable here.
        //    //
        //    // in case "name" is null, EwsUtilities.Parse throws ArgumentNullException
        //    // (which derives from ArgumentException).
        //    //

        //    //EwsUtilities.Assert(
        //    //    false,
        //    //    "GetUserSettingsResponse.ReadSettingFromXml",
        //    //    "Unexpected or empty name element in user setting");
        //}
    }

    LoadFromJson(obj: any/*, parentElementName: string*/): void {
        //debugger;
        super.LoadFromJson(obj/*, parentElementName*/);
        var settingscol = obj[XmlElementNames.UserSettings];
        this.LoadUserSettingsFromJson(settingscol);
        this.RedirectTarget = obj[XmlElementNames.RedirectTarget];
        //var redirecttarget = obj[XmlElementNames.RedirectTarget];
        ////if (redirecttarget["nil"]) redirecttarget = null;
        //this.RedirectTarget = redirecttarget;
        this.LoadUserSettingErrorsFromJson(obj[XmlElementNames.UserSettingErrors]);

    }
    LoadUserSettingErrorsFromJson(obj: any): void {
        var errors: any = undefined;

        if (!obj || typeof (obj[XmlElementNames.UserSettingError]) === 'undefined')
            return;

        if (Object.prototype.toString.call(obj[XmlElementNames.UserSettingError]) === "[object Array]")
            errors = obj[XmlElementNames.UserSettingError];
        else
            errors = [obj[XmlElementNames.UserSettingError]];

        for (var i = 0; i < errors.length; i++) {
            var error = new UserSettingError();
            error.LoadFromJson(errors[0]);
            this.UserSettingErrors.push(error);
        }
    }
    LoadUserSettingsFromJson(obj: any): void {
        var settings: any = undefined;

        if (!obj || typeof (obj[XmlElementNames.UserSetting]) === 'undefined')
            return;

        if (Object.prototype.toString.call(obj[XmlElementNames.UserSetting]) === "[object Array]")
            settings = obj[XmlElementNames.UserSetting];
        else
            settings = [obj[XmlElementNames.UserSetting]];

        for (var i = 0; i < settings.length; i++) {
            var setting = settings[i];
            var settingClass = setting["type"];
            switch (settingClass) {
                case XmlElementNames.StringSetting:
                case XmlElementNames.WebClientUrlCollectionSetting:
                case XmlElementNames.AlternateMailboxCollectionSetting:
                case XmlElementNames.ProtocolConnectionCollectionSetting:
                case XmlElementNames.DocumentSharingLocationCollectionSetting:
                    this.ReadSettingFromJson(setting);
                    break;

                default:
                    EwsLogging.Assert(false,
                        "GetUserSettingsResponse.LoadUserSettingsFromXml",
                        StringHelper.Format("Invalid setting class '{0}' returned", settingClass));
                    break;
            }
        }

    }
    ReadSettingFromJson(obj: any): void {
        var name: string = obj[XmlElementNames.Name];
        var value: any = obj[XmlElementNames.Value];

        switch (obj["type"]) {
            case XmlElementNames.WebClientUrlCollectionSetting://.WebClientUrls:
                value = WebClientUrlCollection.LoadFromJson(obj[XmlElementNames.WebClientUrls]);
                break;
            case XmlElementNames.ProtocolConnectionCollectionSetting://ProtocolConnections:
                value = ProtocolConnectionCollection.LoadFromJson(obj[XmlElementNames.ProtocolConnections]);
                break;
            case XmlElementNames.AlternateMailboxCollectionSetting://AlternateMailboxes:
                value = AlternateMailboxCollection.LoadFromJson(obj[XmlElementNames.AlternateMailboxes]);
                break;
            case XmlElementNames.DocumentSharingLocationCollectionSetting://DocumentSharingLocations:
                //debugger;
                EwsLogging.Log("------------DocumentSharingLocationCollection needs test and fix ----------------", true);
                EwsLogging.Log(obj, true, true);
                value = DocumentSharingLocationCollection.LoadFromJson(obj);
                break;
        }

        // EWS Managed API is broken with AutoDSvc endpoint in RedirectUrl scenario
        var userSettingName: UserSettingName = UserSettingName[name];// EwsUtilities.Parse<UserSettingName>(name);
        if (userSettingName !== undefined)
            this.Settings[userSettingName] = value;
        else
            EwsLogging.Assert(false,
                "GetUserSettingsResponse.ReadSettingFromXml",
                "Unexpected or empty name element in user setting");

        //try {

        //}
        //catch (ArgumentException) {
        //    // ignore unexpected UserSettingName in the response (due to the server-side bugs).
        //    // it'd be better if this is hooked into ITraceListener, but that is unavailable here.
        //    //
        //    // in case "name" is null, EwsUtilities.Parse throws ArgumentNullException
        //    // (which derives from ArgumentException).
        //    //

        //    //EwsUtilities.Assert(
        //    //    false,
        //    //    "GetUserSettingsResponse.ReadSettingFromXml",
        //    //    "Unexpected or empty name element in user setting");
        //}
    }

    GetSettingValue<T>(setting: UserSettingName): T {
        //public bool TryGetSettingValue<T>(UserSettingName setting, out T value)

        return this.Settings[setting];
    }
}
