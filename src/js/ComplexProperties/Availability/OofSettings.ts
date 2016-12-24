import { ArgumentException } from "../../Exceptions/ArgumentException";
import { EwsServiceXmlReader } from "../../Core/EwsServiceXmlReader";
import { EwsServiceXmlWriter } from "../../Core/EwsServiceXmlWriter";
import { EwsUtilities } from "../../Core/EwsUtilities";
import { ExchangeService } from "../../Core/ExchangeService";
import { ISelfValidate } from "../../Interfaces/ISelfValidate";
import { OofExternalAudience } from "../../Enumerations/OofExternalAudience";
import { OofReply } from "../../Misc/Availability/OofReply";
import { OofState } from "../../Enumerations/OofState";
import { Strings } from "../../Strings";
import { TimeWindow } from "../../Misc/Availability/TimeWindow";
import { XmlElementNames } from "../../Core/XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { ComplexProperty } from "../ComplexProperty";
/**
 * Represents a user's Out of Office (OOF) settings.
 */
export class OofSettings extends ComplexProperty implements ISelfValidate {
    private state: OofState = 0;
    private externalAudience: OofExternalAudience = 0;
    private allowExternalOof: OofExternalAudience = 0;
    private duration: TimeWindow = null;
    private internalReply: OofReply = null;
    private externalReply: OofReply = null;

    /**
     * Gets or sets the user's OOF state.
     * 
     * @value The user's OOF state.
     */
    get State(): OofState {
        return this.state;
    }
    set State(value: OofState) {
        this.state = value;
    }

    /**
     * Gets or sets a value indicating who should receive external OOF messages.
     */
    get ExternalAudience(): OofExternalAudience {
        return this.externalAudience;
    }
    set ExternalAudience(value: OofExternalAudience) {
        this.externalAudience = value;
    }

    /**
     * Gets or sets the duration of the OOF status when State is set to OofState.Scheduled.
     */
    get Duration(): TimeWindow {
        return this.duration;
    }
    set Duration(value: TimeWindow) {
        this.duration = value;
    }

    /**
     * Gets or sets the OOF response sent other users in the user's domain or trusted domain.
     */
    get InternalReply(): OofReply {
        return this.internalReply;
    }
    set InternalReply(value: OofReply) {
        this.internalReply = value;
    }

    /**
     * Gets or sets the OOF response sent to addresses outside the user's domain or trusted domain.
     */
    get ExternalReply(): OofReply {
        return this.externalReply;
    }
    set ExternalReply(value: OofReply) {
        this.externalReply = value;
    }

    /**
     * Gets a value indicating the authorized external OOF notifications.
     */
    get AllowExternalOof(): OofExternalAudience {
        return this.allowExternalOof;
    }
    set AllowExternalOof(value: OofExternalAudience) {
        this.allowExternalOof = value;
    }

    /**
     * Initializes a new instance of OofSettings.
     */
    constructor() {
        super();
    }

    /**
     * @internal Loads from xmlJsObject.
     *
     * @param   {any}               jsObject   The json property.
     * @param   {ExchangeService}   service        [description]
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames.OofState:
                    this.state = <OofState><any>OofState[jsObject[key]];
                    break;
                case XmlElementNames.ExternalAudience:
                    this.externalAudience = <OofExternalAudience><any>OofExternalAudience[jsObject[key]];
                    break;
                case XmlElementNames.Duration:
                    this.duration = new TimeWindow();
                    this.duration.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames.InternalReply:
                    this.internalReply = new OofReply();
                    this.internalReply.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames.ExternalReply:
                    this.externalReply = new OofReply();
                    this.externalReply.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                default:
                    break;
            }
        }
    }

    /**
     * Serializes an OofReply. Emits an empty OofReply in case the one passed in is null.
     *
     * @param   {OofReply}              oofReply         The oof reply.
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {string}                xmlElementName   Name of the XML element.
     */
    private SerializeOofReply(oofReply: OofReply, writer: EwsServiceXmlWriter, xmlElementName: string): void {
        if (oofReply != null) {
            oofReply.WriteToXml(writer, xmlElementName);
        }
        else {
            OofReply.WriteEmptyReplyToXml(writer, xmlElementName);
        }
    }

    /**
     * Validates this instance.
     */
    Validate(): void { //ISelfValidate
        if (this.State == OofState.Scheduled) {
            if (this.Duration == null) {
                throw new ArgumentException(Strings.DurationMustBeSpecifiedWhenScheduled);
            }

            EwsUtilities.ValidateParam(this.Duration, "Duration");
        }
    }

    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        super.WriteElementsToXml(writer);

        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.OofState,
            OofState[this.State]);

        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.ExternalAudience,
            OofExternalAudience[this.ExternalAudience]);

        if (this.Duration != null && this.State == OofState.Scheduled) {
            this.Duration.WriteToXml(writer, XmlElementNames.Duration);
        }

        this.SerializeOofReply(
            this.InternalReply,
            writer,
            XmlElementNames.InternalReply);
        this.SerializeOofReply(
            this.ExternalReply,
            writer,
            XmlElementNames.ExternalReply);
    }
}