
/**
 * Defines the way the FileAs property of a contact is automatically formatted.
 */
export enum FileAsMapping {

    /**
     * No automatic formatting is used.
     */
    None = 0,

    /**
     * Surname, GivenName
     */
    SurnameCommaGivenName = 1,

    /**
     * GivenName Surname
     */
    GivenNameSpaceSurname = 2,

    /**
     * Company
     */
    Company = 3,

    /**
     * Surname, GivenName (Company)
     */
    SurnameCommaGivenNameCompany = 4,

    /**
     * Company (SurnameGivenName)
     */
    CompanySurnameGivenName = 5,

    /**
     * SurnameGivenName
     */
    SurnameGivenName = 6,

    /**
     * SurnameGivenName (Company)
     */
    SurnameGivenNameCompany = 7,

    /**
     * Company (Surname, GivenName)
     */
    CompanySurnameCommaGivenName = 8,

    /**
     * SurnameGivenName Suffix
     */
    SurnameGivenNameSuffix = 9,

    /**
     * Surname GivenName (Company)
     */
    SurnameSpaceGivenNameCompany = 10,

    /**
     * Company (Surname GivenName)
     */
    CompanySurnameSpaceGivenName = 11,

    /**
     * Surname GivenName
     */
    SurnameSpaceGivenName = 12,

    /**
     * Display Name (Exchange 2010 or later).
     */
    DisplayName = 13,

    /**
     * GivenName (Exchange 2010 or later).
     */
    GivenName = 14,

    /**
     * Surname GivenName Middle Suffix (Exchange 2010 or later).
     */
    SurnameGivenNameMiddleSuffix = 15,

    /**
     * Surname (Exchange 2010 or later).
     */
    Surname = 16,

    /**
     * Empty (Exchange 2010 or later).
     */
    Empty = 17
}

import { ExchangeVersion } from "./ExchangeVersion"
export module FileAsMapping {

    /**RequiredServerVersionAttribute */
    export function RequiredServerVersion(value: FileAsMapping): ExchangeVersion {
        if (value <= 12) //<= FileAsMapping.SurnameSpaceGivenName
            return ExchangeVersion.Exchange2007_SP1;
        if (value <= 17) // >= DisplayName && <=Empty
            return ExchangeVersion.Exchange2010;

        return ExchangeVersion.Exchange_Version_Not_Updated;
    }

    // create map for EwsEnumAttribute, this can be parsed without issue
    let EwsEnumStringMap = {}
    EwsEnumStringMap[EwsEnumStringMap[FileAsMapping.SurnameCommaGivenName] = "LastCommaFirst"] = FileAsMapping.SurnameCommaGivenName;
    EwsEnumStringMap[EwsEnumStringMap[FileAsMapping.GivenNameSpaceSurname] = "FirstSpaceLast"] = FileAsMapping.GivenNameSpaceSurname;
    EwsEnumStringMap[EwsEnumStringMap[FileAsMapping.SurnameCommaGivenNameCompany] = "LastCommaFirstCompany"] = FileAsMapping.SurnameCommaGivenNameCompany;
    EwsEnumStringMap[EwsEnumStringMap[FileAsMapping.CompanySurnameGivenName] = "CompanyLastFirst"] = FileAsMapping.CompanySurnameGivenName;
    EwsEnumStringMap[EwsEnumStringMap[FileAsMapping.SurnameGivenName] = "LastFirst"] = FileAsMapping.SurnameGivenName;
    EwsEnumStringMap[EwsEnumStringMap[FileAsMapping.SurnameGivenNameCompany] = "LastFirstCompany"] = FileAsMapping.SurnameGivenNameCompany;
    EwsEnumStringMap[EwsEnumStringMap[FileAsMapping.CompanySurnameCommaGivenName] = "CompanyLastCommaFirst"] = FileAsMapping.CompanySurnameCommaGivenName;
    EwsEnumStringMap[EwsEnumStringMap[FileAsMapping.SurnameGivenNameSuffix] = "LastFirstSuffix"] = FileAsMapping.SurnameGivenNameSuffix;
    EwsEnumStringMap[EwsEnumStringMap[FileAsMapping.SurnameSpaceGivenNameCompany] = "LastSpaceFirstCompany"] = FileAsMapping.SurnameSpaceGivenNameCompany;
    EwsEnumStringMap[EwsEnumStringMap[FileAsMapping.CompanySurnameSpaceGivenName] = "CompanyLastSpaceFirst"] = FileAsMapping.CompanySurnameSpaceGivenName;
    EwsEnumStringMap[EwsEnumStringMap[FileAsMapping.SurnameSpaceGivenName] = "LastSpaceFirst"] = FileAsMapping.SurnameSpaceGivenName;
    EwsEnumStringMap[EwsEnumStringMap[FileAsMapping.GivenName] = "FirstName"] = FileAsMapping.GivenName;
    EwsEnumStringMap[EwsEnumStringMap[FileAsMapping.SurnameGivenNameMiddleSuffix] = "LastFirstMiddleSuffix"] = FileAsMapping.SurnameGivenNameMiddleSuffix;
    EwsEnumStringMap[EwsEnumStringMap[FileAsMapping.Surname] = "LastName"] = FileAsMapping.Surname;

    /**EwsEnumAttribute */
    export function FromEwsEnumString(value: string): FileAsMapping {
        return EwsEnumStringMap[value] || FileAsMapping[value];
    }

    /**EwsEnumAttribute */
    export function ToEwsEnumString(value: FileAsMapping): string {
        return EwsEnumStringMap[value] || FileAsMapping[value];
    }
}