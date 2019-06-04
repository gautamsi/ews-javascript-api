"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the way the FileAs property of a contact is automatically formatted.
 */
var FileAsMapping;
(function (FileAsMapping) {
    /**
     * No automatic formatting is used.
     */
    FileAsMapping[FileAsMapping["None"] = 0] = "None";
    /**
     * Surname, GivenName
     */
    FileAsMapping[FileAsMapping["SurnameCommaGivenName"] = 1] = "SurnameCommaGivenName";
    /**
     * GivenName Surname
     */
    FileAsMapping[FileAsMapping["GivenNameSpaceSurname"] = 2] = "GivenNameSpaceSurname";
    /**
     * Company
     */
    FileAsMapping[FileAsMapping["Company"] = 3] = "Company";
    /**
     * Surname, GivenName (Company)
     */
    FileAsMapping[FileAsMapping["SurnameCommaGivenNameCompany"] = 4] = "SurnameCommaGivenNameCompany";
    /**
     * Company (SurnameGivenName)
     */
    FileAsMapping[FileAsMapping["CompanySurnameGivenName"] = 5] = "CompanySurnameGivenName";
    /**
     * SurnameGivenName
     */
    FileAsMapping[FileAsMapping["SurnameGivenName"] = 6] = "SurnameGivenName";
    /**
     * SurnameGivenName (Company)
     */
    FileAsMapping[FileAsMapping["SurnameGivenNameCompany"] = 7] = "SurnameGivenNameCompany";
    /**
     * Company (Surname, GivenName)
     */
    FileAsMapping[FileAsMapping["CompanySurnameCommaGivenName"] = 8] = "CompanySurnameCommaGivenName";
    /**
     * SurnameGivenName Suffix
     */
    FileAsMapping[FileAsMapping["SurnameGivenNameSuffix"] = 9] = "SurnameGivenNameSuffix";
    /**
     * Surname GivenName (Company)
     */
    FileAsMapping[FileAsMapping["SurnameSpaceGivenNameCompany"] = 10] = "SurnameSpaceGivenNameCompany";
    /**
     * Company (Surname GivenName)
     */
    FileAsMapping[FileAsMapping["CompanySurnameSpaceGivenName"] = 11] = "CompanySurnameSpaceGivenName";
    /**
     * Surname GivenName
     */
    FileAsMapping[FileAsMapping["SurnameSpaceGivenName"] = 12] = "SurnameSpaceGivenName";
    /**
     * Display Name (Exchange 2010 or later).
     */
    FileAsMapping[FileAsMapping["DisplayName"] = 13] = "DisplayName";
    /**
     * GivenName (Exchange 2010 or later).
     */
    FileAsMapping[FileAsMapping["GivenName"] = 14] = "GivenName";
    /**
     * Surname GivenName Middle Suffix (Exchange 2010 or later).
     */
    FileAsMapping[FileAsMapping["SurnameGivenNameMiddleSuffix"] = 15] = "SurnameGivenNameMiddleSuffix";
    /**
     * Surname (Exchange 2010 or later).
     */
    FileAsMapping[FileAsMapping["Surname"] = 16] = "Surname";
    /**
     * Empty (Exchange 2010 or later).
     */
    FileAsMapping[FileAsMapping["Empty"] = 17] = "Empty";
})(FileAsMapping = exports.FileAsMapping || (exports.FileAsMapping = {}));
var ExchangeVersion_1 = require("./ExchangeVersion");
(function (FileAsMapping) {
    /**RequiredServerVersionAttribute */
    function RequiredServerVersion(value) {
        if (value <= 12) //<= FileAsMapping.SurnameSpaceGivenName
            return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
        if (value <= 17) // >= DisplayName && <=Empty
            return ExchangeVersion_1.ExchangeVersion.Exchange2010;
        return ExchangeVersion_1.ExchangeVersion.Exchange_Version_Not_Updated;
    }
    FileAsMapping.RequiredServerVersion = RequiredServerVersion;
    // create map for EwsEnumAttribute, this can be parsed without issue
    var EwsEnumStringMap = {};
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
    function FromEwsEnumString(value) {
        return EwsEnumStringMap[value] || FileAsMapping[value];
    }
    FileAsMapping.FromEwsEnumString = FromEwsEnumString;
    /**EwsEnumAttribute */
    function ToEwsEnumString(value) {
        return EwsEnumStringMap[value] || FileAsMapping[value];
    }
    FileAsMapping.ToEwsEnumString = ToEwsEnumString;
})(FileAsMapping = exports.FileAsMapping || (exports.FileAsMapping = {}));
