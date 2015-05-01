// ---------------------------------------------------------------------------
// <copyright file="OnlineMeetingSettings.cs" company="Microsoft">
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ---------------------------------------------------------------------------

//-----------------------------------------------------------------------
// <summary>Defines the OnlineMeetingSettings class.</summary>
//-----------------------------------------------------------------------

    /// <summary>
    /// Online Meeting Lobby Bypass options.
    /// </summary>
     enum LobbyBypass
    {
        /// <summary>
        /// Disabled.
        /// </summary>
        Disabled,

        /// <summary>
        /// Enabled for gateway participants.
        /// </summary>
        EnabledForGatewayParticipants,
    }

    /// <summary>
    /// Online Meeting Access Level options.
    /// </summary>
     enum OnlineMeetingAccessLevel
    {
        /// <summary>
        /// Locked.
        /// </summary>
        Locked,

        /// <summary>
        /// Invited.
        /// </summary>
        Invited,

        /// <summary>
        /// Internal.
        /// </summary>
        Internal,

        /// <summary>
        /// Everyone.
        /// </summary>
        Everyone,
    }

    /// <summary>
    /// Online Meeting Presenters options.
    /// </summary>
     enum Presenters
    {
        /// <summary>
        /// Disabled.
        /// </summary>
        Disabled,

        /// <summary>
        /// Internal.
        /// </summary>
        Internal,

        /// <summary>
        /// Everyone.
        /// </summary>
        Everyone,
    }




    class OnlineMeetingSettings extends ComplexProperty {
        LobbyBypass: LobbyBypass;
        AccessLevel: OnlineMeetingAccessLevel;
        Presenters: Presenters;
        private lobbyBypass: LobbyBypass;
        private accessLevel: OnlineMeetingAccessLevel;
        private presenters: Presenters;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
