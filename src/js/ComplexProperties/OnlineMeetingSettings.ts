import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {EwsUtilities} from "../Core/EwsUtilities";
import {ExchangeService} from "../Core/ExchangeService";
import {LobbyBypass} from "../Enumerations/LobbyBypass";
import {OnlineMeetingAccessLevel} from "../Enumerations/OnlineMeetingAccessLevel";
import {Presenters} from "../Enumerations/Presenters";
import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlNamespace} from "../Enumerations/XmlNamespace";

import {ComplexProperty} from "./ComplexProperty";
/**
 * Represents Lync online meeting settings.
 */
export class OnlineMeetingSettings extends ComplexProperty {

    private lobbyBypass: LobbyBypass = LobbyBypass.Disabled;
    private accessLevel: OnlineMeetingAccessLevel = OnlineMeetingAccessLevel.Locked;
    private presenters: Presenters = Presenters.Disabled;

    /**
     * Gets or sets the online meeting setting that describes whether users dialing in by phone have to wait in the lobby.
     */
    get LobbyBypass(): LobbyBypass {
        return this.lobbyBypass;
    }
    set LobbyBypass(value: LobbyBypass) {
        this.SetFieldValue<LobbyBypass>({ getValue: () => this.lobbyBypass, setValue: (fieldValue) => { this.LobbyBypass = fieldValue } }, value);
    }

    /**
     * Gets or sets the online meeting setting that describes access permission to the meeting.
     */
    get AccessLevel(): OnlineMeetingAccessLevel {
        return this.accessLevel;
    }
    set AccessLevel(value: OnlineMeetingAccessLevel) {
        this.SetFieldValue<OnlineMeetingAccessLevel>({ getValue: () => this.accessLevel, setValue: (fieldValue) => { this.accessLevel = fieldValue } }, value);
    }

    /**
     * Gets or sets the online meeting setting that defines the meeting leaders.
     */
    get Presenters(): Presenters {
        return this.presenters;
    }
    set Presenters(value: Presenters) {
        this.SetFieldValue<Presenters>({ getValue: () => this.presenters, setValue: (fieldValue) => { this.presenters = fieldValue } }, value);
    }

    /**
     * Initializes a new instance of the **OnlineMeetingSettings** class.
     */
    constructor();
    /**
     * @internal Initializes a new instance of the **OnlineMeetingSettings** class from another OnlineMeetingSettings instance.
     *
     * @param   {OnlineMeetingSettings}   onlineMeetingSettings   OnlineMeetingSettings instance to copy.
     */
    constructor(onlineMeetingSettings: OnlineMeetingSettings);
    /**
     * @internal Initializes a new instance of the **OnlineMeetingSettings** class.
     *
     * @param   {LobbyBypass}               lobbyBypass   The address used to initialize the OnlineMeetingSettings.
     * @param   {OnlineMeetingAccessLevel}  accessLevel   The routing type used to initialize the OnlineMeetingSettings.
     * @param   {Presenters}                presenters    Mailbox type of the participant.
     */
    constructor(lobbyBypass: LobbyBypass, accessLevel: OnlineMeetingAccessLevel, presenters: Presenters);
    constructor(lobbyBypassOrOnlineMeetingSettings?: LobbyBypass | OnlineMeetingSettings, accessLevel?: OnlineMeetingAccessLevel, presenters?: Presenters) {
        super();
        switch (arguments.length) {
            case 1:
                let onlineMeetingSettings = <OnlineMeetingSettings>lobbyBypassOrOnlineMeetingSettings;
                EwsUtilities.ValidateParam(lobbyBypassOrOnlineMeetingSettings, "OnlineMeetingSettings");

                this.LobbyBypass = onlineMeetingSettings.LobbyBypass;
                this.AccessLevel = onlineMeetingSettings.AccessLevel;
                this.Presenters = onlineMeetingSettings.Presenters;
                break;
            case 3:
                this.lobbyBypass = <LobbyBypass>lobbyBypassOrOnlineMeetingSettings;
                this.accessLevel = accessLevel;
                this.presenters = presenters;
                break;
            default:
                break;
        }
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Jason Object converted from XML.
     * @param   {ExchangeService}     service                 The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        for (let key in jsObject) {
            switch (key) {
                case XmlElementNames.LobbyBypass:
                    this.lobbyBypass = LobbyBypass[<string>jsObject[key]];
                    break;
                case XmlElementNames.AccessLevel:
                    this.accessLevel = OnlineMeetingAccessLevel[<string>jsObject[key]];
                    break;
                case XmlElementNames.Presenters:
                    this.presenters = Presenters[<string>jsObject[key]];
                    break;
                default:
                    break;
            }
        }
    }

    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.LobbyBypass, this.LobbyBypass);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.AccessLevel, this.AccessLevel);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.Presenters, this.Presenters);
    }
}