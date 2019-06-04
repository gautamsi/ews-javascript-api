"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the each available Exchange release version
 */
var ExchangeVersion;
(function (ExchangeVersion) {
    /**
     * Microsoft Exchange 2007, Service Pack 1
     */
    ExchangeVersion[ExchangeVersion["Exchange2007_SP1"] = 0] = "Exchange2007_SP1";
    /**
     * Microsoft Exchange 2010
     */
    ExchangeVersion[ExchangeVersion["Exchange2010"] = 1] = "Exchange2010";
    /**
     * Microsoft Exchange 2010, Service Pack 1
     */
    ExchangeVersion[ExchangeVersion["Exchange2010_SP1"] = 2] = "Exchange2010_SP1";
    /**
     * Microsoft Exchange 2010, Service Pack 2
     */
    ExchangeVersion[ExchangeVersion["Exchange2010_SP2"] = 3] = "Exchange2010_SP2";
    /**
     * Microsoft Exchange 2013
     */
    ExchangeVersion[ExchangeVersion["Exchange2013"] = 4] = "Exchange2013";
    /**
     * Microsoft Exchange 2013 SP1
     */
    ExchangeVersion[ExchangeVersion["Exchange2013_SP1"] = 5] = "Exchange2013_SP1";
    /**
     * Microsoft Exchange 2015 (aka Exchange 2016)
     */
    ExchangeVersion[ExchangeVersion["Exchange2015"] = 6] = "Exchange2015";
    /**
     * Microsoft Exchange 2016
     */
    ExchangeVersion[ExchangeVersion["Exchange2016"] = 7] = "Exchange2016";
    /**
     * Functionality starting 10/05/2015
     */
    ExchangeVersion[ExchangeVersion["V2015_10_05"] = 8] = "V2015_10_05";
    /** internal tracking of any version not updated in **ews-javascript-api** */
    ExchangeVersion[ExchangeVersion["Exchange_Version_Not_Updated"] = 15000] = "Exchange_Version_Not_Updated";
})(ExchangeVersion = exports.ExchangeVersion || (exports.ExchangeVersion = {}));
