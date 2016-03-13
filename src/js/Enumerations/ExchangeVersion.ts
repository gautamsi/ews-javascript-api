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
    
    /** internal tracking of any version not updated in **ews-javascript-api** */
    Exchange_Version_Not_Updated = 15000,
}