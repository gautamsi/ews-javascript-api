
/**
 * Defines the each available Exchange release version
 */
export enum ExchangeVersion {
    /**
     * Microsoft Exchange 2007, Service Pack 1
     */
    Exchange2007_SP1 = 0,
    /**
     * Microsoft Exchange 2010
     */
    Exchange2010 = 1,
    /**
     * Microsoft Exchange 2010, Service Pack 1
     */
    Exchange2010_SP1 = 2,
    /**
     * Microsoft Exchange 2010, Service Pack 2
     */
    Exchange2010_SP2 = 3,
    /**
     * Microsoft Exchange 2013
     */
    Exchange2013 = 4,
    /**
     * Microsoft Exchange 2013 SP1
     */
    Exchange2013_SP1 = 5,
    /**
     * Microsoft Exchange 2015 (aka Exchange 2016)
     */
    Exchange2015 = 6,
    /**
     * Microsoft Exchange 2016
     */
    Exchange2016 = 7,
    /**
     * Functionality starting 10/05/2015
     */
    V2015_10_05 = 8,

    /**
     * Updated from latest Types.xsd in 03/2023
     */

    /**
     * Functionality starting 01/06/2016
     */
    V2016_01_06 = 9,
    /**
     * Functionality starting 04/13/2016
     */
    V2016_04_13 = 10,
    /**
     * Functionality starting 07/13/2016
     */
    V2016_07_13 = 11,
    /**
     * Functionality starting 10/10/2016
     */
    V2016_10_10 = 12,
    /**
     * Functionality starting 01/07/2017
     */
    V2017_01_07 = 13,
    /**
     * Functionality starting 04/14/2017
     */
    V2017_04_14 = 14,
    /**
     * Functionality starting 07/11/2017
     */
    V2017_07_11 = 15,
    /**
     * Functionality starting 10/09/2017
     */
    V2017_10_09 = 16,
    /**
     * Functionality starting 01/08/2018
     */
    V2018_01_08 = 17,

    /** internal tracking of any version not updated in **ews-javascript-api** */
    Exchange_Version_Not_Updated = 15000,
}