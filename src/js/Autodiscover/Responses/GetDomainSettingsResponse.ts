import EwsXmlReader = require("../../Core/EwsXmlReader");
import XmlElementNames = require("../../Core/XmlElementNames");
import XmlAttributeNames = require("../../Core/XmlAttributeNames");

import XmlNamespace = require("../../Enumerations/XmlNamespace");
import DomainSettingName = require("../../Enumerations/DomainSettingName");

import {EwsLogging} from "../../Core/EwsLogging";
import {StringHelper} from "../../ExtensionMethods";


import DomainSettingError = require("../DomainSettingError");
import AutodiscoverResponse = require("./AutodiscoverResponse");
class GetDomainSettingsResponse extends AutodiscoverResponse {
    Domain: string;
    RedirectTarget: string;
    Settings: { [index: number]: any }; //System.Collections.Generic.IDictionary<DomainSettingName, any>;
    DomainSettingErrors: DomainSettingError[]; //System.Collections.ObjectModel.Collection<DomainSettingError>;
    LoadDomainSettingErrorsFromXml(reader: EwsXmlReader): void {
        if (!reader.IsEmptyElement) {
            do {
                reader.Read();

                if ((reader.NodeType == Node.ELEMENT_NODE) && (reader.LocalName == XmlElementNames.DomainSettingError)) {
                    var error = new DomainSettingError();
                    error.LoadFromXml(reader);
                    this.DomainSettingErrors.push(error);
                }
            }
            while (reader.HasRecursiveParent(XmlElementNames.UserSettingErrors));
            reader.SeekLast();// fix xml treewalker to go back last node, next do..while loop will come back to current node.
        }
    }
    LoadDomainSettingsFromXml(reader: EwsXmlReader): void {
        var parent: Node = reader.CurrentNode;
        if (!reader.IsEmptyElement) {
            do {
                reader.Read();

                if (reader.Eof || !reader.HasRecursiveParentNode(parent, XmlElementNames.DomainSettings))
                    break;

                if ((reader.NodeType == Node.ELEMENT_NODE /*System.Xml.XmlNodeType.Element*/) && (reader.LocalName == XmlElementNames.DomainSetting)) {
                    var settingClass: string = reader.ReadAttributeValue(XmlNamespace.XmlSchemaInstance, XmlAttributeNames.Type);

                    switch (settingClass) {
                        case XmlElementNames.DomainStringSetting:
                            this.ReadSettingFromXml(reader);
                            break;

                        default:
                            EwsLogging.Assert(
                                false,
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
    LoadFromXml(reader: EwsXmlReader, parentElementName: string): void {
        do {
            reader.Read();

            if (reader.NodeType == Node.ELEMENT_NODE) {
                switch (reader.LocalName) {
                    case XmlElementNames.RedirectTarget:
                        this.RedirectTarget = reader.ReadElementValue();
                        break;
                    case XmlElementNames.DomainSettingErrors:
                        this.LoadDomainSettingErrorsFromXml(reader);
                        break;
                    case XmlElementNames.DomainSettings:
                        this.LoadDomainSettingsFromXml(reader);
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
    ReadSettingFromXml(reader: EwsXmlReader): void {
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
                }
            }
        }
        while (true);
        reader.SeekLast();// fix xml treewalker to go back last node, next do..while loop will come back to current node.


        // EWS Managed API is broken with AutoDSvc endpoint in RedirectUrl scenario
        var domainSettingName: DomainSettingName = DomainSettingName[name];// EwsUtilities.Parse<UserSettingName>(name);
        if (domainSettingName !== undefined)
            this.Settings[domainSettingName] = value;
        else
            EwsLogging.Assert(false,
                "GetUserSettingsResponse.ReadSettingFromXml",
                "Unexpected or empty name element in user setting");
    }

    LoadDomainSettingErrorsFromJson(obj: any): void {
        var errors:any = undefined;

        if (typeof (obj[XmlElementNames.DomainSettingError]) === 'undefined') return;

        if (Object.prototype.toString.call(obj[XmlElementNames.DomainSettingError]) === "[object Array]")
            errors = obj[XmlElementNames.DomainSettingError];
        else
            errors = [obj[XmlElementNames.DomainSettingError]];

        for (var i = 0; i < errors.length; i++) {
            var error = new DomainSettingError();
            error.LoadFromObject(errors[0]);
            this.DomainSettingErrors.push(error);
        }

    }
    LoadDomainSettingsFromJson(obj: any): void {
        var settings:any = undefined;

        if (typeof (obj[XmlElementNames.DomainSetting]) === 'undefined') return;

        if (Object.prototype.toString.call(obj[XmlElementNames.DomainSetting]) === "[object Array]")
            settings = obj[XmlElementNames.DomainSetting];
        else
            settings = [obj[XmlElementNames.DomainSetting]];

        for (var i = 0; i < settings.length; i++) {
            var setting = settings[i];
            var settingClass = setting["type"];
            switch (settingClass) {
                case XmlElementNames.DomainStringSetting:
                    this.ReadSettingFromJson(setting);
                    break;

                default:
                    EwsLogging.Assert(
                        false,
                        "GetUserSettingsResponse.LoadUserSettingsFromXml",
                        StringHelper.Format("Invalid setting class '{0}' returned", settingClass));
                    break;
            }
        }
    }
    LoadFromJson(obj: any): void {
        super.LoadFromJson(obj);
        var settingscol = obj[XmlElementNames.DomainSettings];
        this.LoadDomainSettingsFromJson(settingscol);
        this.RedirectTarget = obj[XmlElementNames.RedirectTarget];
        this.LoadDomainSettingErrorsFromJson(obj[XmlElementNames.DomainSettingErrors]);
    }
    ReadSettingFromJson(obj: any): void {
        var name: string = obj[XmlElementNames.Name];
        var value: any = obj[XmlElementNames.Value];

        // EWS Managed API is broken with AutoDSvc endpoint in RedirectUrl scenario
        var domainSettingName: DomainSettingName = DomainSettingName[name];// EwsUtilities.Parse<UserSettingName>(name);
        if (domainSettingName !== undefined)
            this.Settings[domainSettingName] = value;
        else
            EwsLogging.Assert(false,
                "GetUserSettingsResponse.ReadSettingFromObject",
                "Unexpected or empty name element in user setting");
    }

}

export = GetDomainSettingsResponse;


//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;