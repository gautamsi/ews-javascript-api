declare module Microsoft.Win32.SafeHandles {
}
declare module System {
	export module Array {
		export var MaxArrayLength: number;// =2146435071;
		export var MaxByteArrayLength: number;// =2147483591;
	}
	export module Exception {
		var _COMPlusExceptionCode: number;// =-532462766;
	}
	export module TimeSpan {
		export var TicksPerMillisecond: number;// =10000;
		export var TicksPerSecond: number;// =10000000;
		export var TicksPerMinute: number;// =600000000;
		export var TicksPerHour: number;// =36000000000;
		export var TicksPerDay: number;// =864000000000;
		export var MaxSeconds: number;// =922337203685;
		export var MinSeconds: number;// =-922337203685;
		export var MaxMilliSeconds: number;// =922337203685477;
		export var MinMilliSeconds: number;// =-922337203685477;
		export var TicksPerTenthSecond: number;// =1000000;
		var MillisecondsPerTick: number;// =0.0001;
		var SecondsPerTick: number;// =1E-07;
		var MinutesPerTick: number;// =1.66666666666667E-09;
		var HoursPerTick: number;// =2.77777777777778E-11;
		var DaysPerTick: number;// =1.15740740740741E-12;
		var MillisPerSecond: number;// =1000;
		var MillisPerMinute: number;// =60000;
		var MillisPerHour: number;// =3600000;
		var MillisPerDay: number;// =86400000;
	}
	export module TimeZoneInfo {
		var c_timeZonesRegistryHive: string;// ="SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones";
		var c_timeZonesRegistryHivePermissionList: string;// ="HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones";
		var c_displayValue: string;// ="Display";
		var c_daylightValue: string;// ="Dlt";
		var c_standardValue: string;// ="Std";
		var c_muiDisplayValue: string;// ="MUI_Display";
		var c_muiDaylightValue: string;// ="MUI_Dlt";
		var c_muiStandardValue: string;// ="MUI_Std";
		var c_timeZoneInfoValue: string;// ="TZI";
		var c_firstEntryValue: string;// ="FirstEntry";
		var c_lastEntryValue: string;// ="LastEntry";
		var c_utcId: string;// ="UTC";
		var c_localId: string;// ="Local";
		var c_maxKeyLength: number;// =255;
		var c_regByteLength: number;// =44;
		var c_ticksPerMillisecond: number;// =10000;
		var c_ticksPerSecond: number;// =10000000;
		var c_ticksPerMinute: number;// =600000000;
		var c_ticksPerHour: number;// =36000000000;
		var c_ticksPerDay: number;// =864000000000;
		var c_ticksPerDayRange: number;// =863999990000;
	}
	export module Type {
		export var DeclaredOnlyLookup: any; //System.Reflection.BindingFlags;// =DeclaredOnly, Instance, Static, Public, NonPublic;
		var DefaultLookup: any; //System.Reflection.BindingFlags;// =Instance, Static, Public;
	}
	export module Uri {
		export var c_MaxUriBufferSize: number;// =65520;
		export var c_DummyChar: string;// =￿;
		export var c_EOL: string;// =￾;
		var c_Max16BitUtf8SequenceLength: number;// =12;
		var c_MaxUriSchemeName: number;// =1024;
		var V1ToStringUnescape: any; //System.UriFormat;// =32767;
	}
	export module UriParser {
		export var NoDefaultPort: number;// =-1;
		var SchemeOnlyFlags: any; //System.UriSyntaxFlags;// =MayHavePath;
		var c_UpdatableFlags: any; //System.UriSyntaxFlags;// =UnEscapeDotsAndSlashes;
		var c_InitialTableSize: number;// =25;
		var c_MaxCapacity: number;// =512;
		var UnknownV1SyntaxFlags: any; //System.UriSyntaxFlags;// =OptionalAuthority, MayHaveUserInfo, MayHavePort, MayHavePath, MayHaveQuery, MayHaveFragment, AllowEmptyHost, AllowUncHost, AllowAnInternetHost, V1_UnknownUri, AllowDOSPath, PathIsRooted, ConvertPathSlashes, CompressPath, AllowIdn, AllowIriParsing;
		var FtpSyntaxFlags: any; //System.UriSyntaxFlags;// =MustHaveAuthority, MayHaveUserInfo, MayHavePort, MayHavePath, MayHaveFragment, AllowUncHost, AllowAnInternetHost, PathIsRooted, ConvertPathSlashes, CompressPath, CanonicalizeAsFilePath, AllowIdn, AllowIriParsing;
		var VsmacrosSyntaxFlags: any; //System.UriSyntaxFlags;// =MustHaveAuthority, MayHavePath, MayHaveFragment, AllowEmptyHost, AllowUncHost, AllowAnInternetHost, FileLikeUri, AllowDOSPath, ConvertPathSlashes, CompressPath, CanonicalizeAsFilePath, UnEscapeDotsAndSlashes, AllowIdn, AllowIriParsing;
		var GopherSyntaxFlags: any; //System.UriSyntaxFlags;// =MustHaveAuthority, MayHaveUserInfo, MayHavePort, MayHavePath, MayHaveFragment, AllowUncHost, AllowAnInternetHost, PathIsRooted, AllowIdn, AllowIriParsing;
		var NewsSyntaxFlags: any; //System.UriSyntaxFlags;// =MayHavePath, MayHaveFragment, AllowIriParsing;
		var NntpSyntaxFlags: any; //System.UriSyntaxFlags;// =MustHaveAuthority, MayHaveUserInfo, MayHavePort, MayHavePath, MayHaveFragment, AllowUncHost, AllowAnInternetHost, PathIsRooted, AllowIdn, AllowIriParsing;
		var TelnetSyntaxFlags: any; //System.UriSyntaxFlags;// =MustHaveAuthority, MayHaveUserInfo, MayHavePort, MayHavePath, MayHaveFragment, AllowUncHost, AllowAnInternetHost, PathIsRooted, AllowIdn, AllowIriParsing;
		var LdapSyntaxFlags: any; //System.UriSyntaxFlags;// =MustHaveAuthority, MayHaveUserInfo, MayHavePort, MayHavePath, MayHaveQuery, MayHaveFragment, AllowEmptyHost, AllowUncHost, AllowAnInternetHost, PathIsRooted, AllowIdn, AllowIriParsing;
		var MailtoSyntaxFlags: any; //System.UriSyntaxFlags;// =MayHaveUserInfo, MayHavePort, MayHavePath, MayHaveQuery, MayHaveFragment, AllowEmptyHost, AllowUncHost, AllowAnInternetHost, MailToLikeUri, AllowIdn, AllowIriParsing;
		var NetPipeSyntaxFlags: any; //System.UriSyntaxFlags;// =MustHaveAuthority, MayHavePath, MayHaveQuery, MayHaveFragment, AllowAnInternetHost, PathIsRooted, ConvertPathSlashes, CompressPath, CanonicalizeAsFilePath, UnEscapeDotsAndSlashes, AllowIdn, AllowIriParsing;
		var NetTcpSyntaxFlags: any; //System.UriSyntaxFlags;// =MustHaveAuthority, MayHavePort, MayHavePath, MayHaveQuery, MayHaveFragment, AllowAnInternetHost, PathIsRooted, ConvertPathSlashes, CompressPath, CanonicalizeAsFilePath, UnEscapeDotsAndSlashes, AllowIdn, AllowIriParsing;
	}
	export module Version {
		var ZERO_CHAR_VALUE: number;// =48;
	}
}
declare module System.Collections {
	export module ArrayList {
		var _defaultCapacity: number;// =4;
	}
	export module Hashtable {
		export var HashPrime: number;// =101;
		var InitialSize: number;// =3;
		var LoadFactorName: string;// ="LoadFactor";
		var VersionName: string;// ="Version";
		var ComparerName: string;// ="Comparer";
		var HashCodeProviderName: string;// ="HashCodeProvider";
		var HashSizeName: string;// ="HashSize";
		var KeysName: string;// ="Keys";
		var ValuesName: string;// ="Values";
		var KeyComparerName: string;// ="KeyComparer";
	}
	export module SortedList {
		var _defaultCapacity: number;// =16;
	}
}
//declare module System.Collections.Generic {
//	export module Dictionary<TKey, TValue> {
//		var VersionName: string;// ="Version";
//		var HashSizeName: string;// ="HashSize";
//		var KeyValuePairsName: string;// ="KeyValuePairs";
//		var ComparerName: string;// ="Comparer";
//	}
//	export module List<T> {
//		var _defaultCapacity: number;// =4;
//	}
//}
//declare module System.Collections.Generic.Dictionary`2 {
//}
declare module System.Collections.ObjectModel {
}
declare module System.Collections.Specialized {
	export module NameObjectCollectionBase {
		var ReadOnlyName: string;// ="ReadOnly";
		var CountName: string;// ="Count";
		var ComparerName: string;// ="Comparer";
		var HashCodeProviderName: string;// ="HashProvider";
		var KeysName: string;// ="Keys";
		var ValuesName: string;// ="Values";
		var KeyComparerName: string;// ="KeyComparer";
		var VersionName: string;// ="Version";
	}
}
declare module System.Collections.Specialized.NameObjectCollectionBase {
}
declare module System.ComponentModel {
}
declare module System.Globalization {
	export module Calendar {
		export var TicksPerMillisecond: number;// =10000;
		export var TicksPerSecond: number;// =10000000;
		export var TicksPerMinute: number;// =600000000;
		export var TicksPerHour: number;// =36000000000;
		export var TicksPerDay: number;// =864000000000;
		export var MillisPerSecond: number;// =1000;
		export var MillisPerMinute: number;// =60000;
		export var MillisPerHour: number;// =3600000;
		export var MillisPerDay: number;// =86400000;
		export var DaysPerYear: number;// =365;
		export var DaysPer4Years: number;// =1461;
		export var DaysPer100Years: number;// =36524;
		export var DaysPer400Years: number;// =146097;
		export var DaysTo10000: number;// =3652059;
		export var MaxMillis: number;// =315537897600000;
		export var CAL_GREGORIAN: number;// =1;
		export var CAL_GREGORIAN_US: number;// =2;
		export var CAL_JAPAN: number;// =3;
		export var CAL_TAIWAN: number;// =4;
		export var CAL_KOREA: number;// =5;
		export var CAL_HIJRI: number;// =6;
		export var CAL_THAI: number;// =7;
		export var CAL_HEBREW: number;// =8;
		export var CAL_GREGORIAN_ME_FRENCH: number;// =9;
		export var CAL_GREGORIAN_ARABIC: number;// =10;
		export var CAL_GREGORIAN_XLIT_ENGLISH: number;// =11;
		export var CAL_GREGORIAN_XLIT_FRENCH: number;// =12;
		export var CAL_JULIAN: number;// =13;
		export var CAL_JAPANESELUNISOLAR: number;// =14;
		export var CAL_CHINESELUNISOLAR: number;// =15;
		export var CAL_SAKA: number;// =16;
		export var CAL_LUNAR_ETO_CHN: number;// =17;
		export var CAL_LUNAR_ETO_KOR: number;// =18;
		export var CAL_LUNAR_ETO_ROKUYOU: number;// =19;
		export var CAL_KOREANLUNISOLAR: number;// =20;
		export var CAL_TAIWANLUNISOLAR: number;// =21;
		export var CAL_PERSIAN: number;// =22;
		export var CAL_UMALQURA: number;// =23;
		export var CurrentEra: number;// =0;
	}
	export module CompareInfo {
		export var NORM_LINGUISTIC_CASING: number;// =134217728;
		var ValidIndexMaskOffFlags: any; //any; //System.Globalization.CompareOptions;// =-32;
		var ValidCompareMaskOffFlags: any; //any; //System.Globalization.CompareOptions;// =-536870944;
		var ValidHashCodeOfStringMaskOffFlags: any; //any; //System.Globalization.CompareOptions;// =-32;
		var LINGUISTIC_IGNORECASE: number;// =16;
		var NORM_IGNORECASE: number;// =1;
		var NORM_IGNOREKANATYPE: number;// =65536;
		var LINGUISTIC_IGNOREDIACRITIC: number;// =32;
		var NORM_IGNORENONSPACE: number;// =2;
		var NORM_IGNORESYMBOLS: number;// =4;
		var NORM_IGNOREWIDTH: number;// =131072;
		var SORT_STRINGSORT: number;// =4096;
		var COMPARE_OPTIONS_ORDINAL: number;// =1073741824;
		var RESERVED_FIND_ASCII_STRING: number;// =536870912;
		var SORT_VERSION_WHIDBEY: number;// =4096;
		var SORT_VERSION_V4: number;// =393473;
	}
	export module CultureInfo {
		export var LOCALE_NEUTRAL: number;// =0;
		export var LOCALE_CUSTOM_DEFAULT: number;// =3072;
		export var LOCALE_CUSTOM_UNSPECIFIED: number;// =4096;
		export var LOCALE_INVARIANT: number;// =127;
		var LOCALE_USER_DEFAULT: number;// =1024;
		var LOCALE_SYSTEM_DEFAULT: number;// =2048;
		var LOCALE_TRADITIONAL_SPANISH: number;// =1034;
		var LOCALE_SORTID_MASK: number;// =983040;
	}
	export module DateTimeFormatInfo {
		export var rfc1123Pattern: string;// ="ddd, dd MMM yyyy HH':'mm':'ss 'GMT'";
		export var sortableDateTimePattern: string;// ="yyyy'-'MM'-'dd'T'HH':'mm':'ss";
		export var universalSortableDateTimePattern: string;// ="yyyy'-'MM'-'dd HH':'mm':'ss'Z'";
        export var InvalidDateTimeStyles: any;//System.Globalization.DateTimeStyles;// =-256;
		export var IgnorablePeriod: string;// =".";
		export var IgnorableComma: string;// =",";
		export var CJKYearSuff: string;// ="年";
		export var CJKMonthSuff: string;// ="月";
		export var CJKDaySuff: string;// ="日";
		export var KoreanYearSuff: string;// ="년";
		export var KoreanMonthSuff: string;// ="월";
		export var KoreanDaySuff: string;// ="일";
		export var KoreanHourSuff: string;// ="시";
		export var KoreanMinuteSuff: string;// ="분";
		export var KoreanSecondSuff: string;// ="초";
		export var CJKHourSuff: string;// ="時";
		export var ChineseHourSuff: string;// ="时";
		export var CJKMinuteSuff: string;// ="分";
		export var CJKSecondSuff: string;// ="秒";
		export var LocalTimeMark: string;// ="T";
		export var KoreanLangName: string;// ="ko";
		export var JapaneseLangName: string;// ="ja";
		export var EnglishLangName: string;// ="en";
		var DEFAULT_ALL_DATETIMES_SIZE: number;// =132;
		var TOKEN_HASH_SIZE: number;// =199;
		var SECOND_PRIME: number;// =197;
		var dateSeparatorOrTimeZoneOffset: string;// ="-";
		var invariantDateSeparator: string;// ="/";
		var invariantTimeSeparator: string;// =":";
	}
	export module NumberFormatInfo {
        var InvalidNumberStyles: any;//System.Globalization.NumberStyles;// =-1024;
	}
	export module TextInfo {
		var wordSeparatorMask: number;// =536672256;
	}
}
declare module System.IO {
	export module Stream {
		var _DefaultCopyBufferSize: number;// =81920;
	}
	export module TextWriter {
		var InitialNewLine: string;// ="";
	}
}
declare module System.Net {
	export module CookieContainer {
		export var DefaultCookieLimit: number;// =300;
		export var DefaultPerDomainCookieLimit: number;// =20;
		export var DefaultCookieLengthLimit: number;// =4096;
	}
	export module IPAddress {
		export var LoopbackMask: number;// =255;
		export var IPv4AddressBytes: number;// =4;
		export var IPv6AddressBytes: number;// =16;
		export var NumberOfLabels: number;// =8;
	}
	export module WebHeaderCollection {
		var ApproxAveHeaderLineSize: number;// =30;
		var ApproxHighAvgNumHeaders: number;// =16;
		var c_AcceptRanges: number;// =0;
		var c_ContentLength: number;// =1;
		var c_CacheControl: number;// =2;
		var c_ContentType: number;// =3;
		var c_Date: number;// =4;
		var c_Expires: number;// =5;
		var c_ETag: number;// =6;
		var c_LastModified: number;// =7;
		var c_Location: number;// =8;
		var c_ProxyAuthenticate: number;// =9;
		var c_P3P: number;// =10;
		var c_SetCookie2: number;// =11;
		var c_SetCookie: number;// =12;
		var c_Server: number;// =13;
		var c_Via: number;// =14;
		var c_WwwAuthenticate: number;// =15;
		var c_XAspNetVersion: number;// =16;
		var c_XPoweredBy: number;// =17;
	}
}
declare module System.Net.Sockets {
}
declare module System.Reflection {
	export module module {
		var DefaultLookup: any; //System.Reflection.BindingFlags;// =Instance, Static, Public;
	}
}
declare module System.Resources {
	export module ResourceManager {
		export var ResFileExtension: string;// =".resources";
		export var ResFileExtensionLength: number;// =10;
	}
}
declare module System.Runtime.ConstrainedExecution {
}
declare module System.Runtime.InteropServices {
	export module StructLayoutAttribute {
		var DEFAULT_PACKING_SIZE: number;// =8;
	}
}
declare module System.Security {
	export module PermissionSet {
		var s_str_PermissionSet: string;// ="PermissionSet";
		var s_str_Permission: string;// ="Permission";
		var s_str_IPermission: string;// ="IPermission";
		var s_str_Unrestricted: string;// ="Unrestricted";
		var s_str_PermissionUnion: string;// ="PermissionUnion";
		var s_str_PermissionIntersection: string;// ="PermissionIntersection";
		var s_str_PermissionUnrestrictedUnion: string;// ="PermissionUnrestrictedUnion";
		var s_str_PermissionUnrestrictedIntersection: string;// ="PermissionUnrestrictedIntersection";
	}
}
declare module System.Security.Cryptography {
}
declare module System.Security.Cryptography.X509Certificates {
	export module X509Certificate {
		var m_format: string;// ="X509";
	}
}
declare module System.Security.Cryptography.Xml {
	export module EncryptedXml {
		export var XmlEncNamespaceUrl: string;// ="http://www.w3.org/2001/04/xmlenc#";
		export var XmlEncElementUrl: string;// ="http://www.w3.org/2001/04/xmlenc#Element";
		export var XmlEncElementContentUrl: string;// ="http://www.w3.org/2001/04/xmlenc#Content";
		export var XmlEncEncryptedKeyUrl: string;// ="http://www.w3.org/2001/04/xmlenc#EncryptedKey";
		export var XmlEncDESUrl: string;// ="http://www.w3.org/2001/04/xmlenc#des-cbc";
		export var XmlEncTripleDESUrl: string;// ="http://www.w3.org/2001/04/xmlenc#tripledes-cbc";
		export var XmlEncAES128Url: string;// ="http://www.w3.org/2001/04/xmlenc#aes128-cbc";
		export var XmlEncAES256Url: string;// ="http://www.w3.org/2001/04/xmlenc#aes256-cbc";
		export var XmlEncAES192Url: string;// ="http://www.w3.org/2001/04/xmlenc#aes192-cbc";
		export var XmlEncRSA15Url: string;// ="http://www.w3.org/2001/04/xmlenc#rsa-1_5";
		export var XmlEncRSAOAEPUrl: string;// ="http://www.w3.org/2001/04/xmlenc#rsa-oaep-mgf1p";
		export var XmlEncTripleDESKeyWrapUrl: string;// ="http://www.w3.org/2001/04/xmlenc#kw-tripledes";
		export var XmlEncAES128KeyWrapUrl: string;// ="http://www.w3.org/2001/04/xmlenc#kw-aes128";
		export var XmlEncAES256KeyWrapUrl: string;// ="http://www.w3.org/2001/04/xmlenc#kw-aes256";
		export var XmlEncAES192KeyWrapUrl: string;// ="http://www.w3.org/2001/04/xmlenc#kw-aes192";
		export var XmlEncSHA256Url: string;// ="http://www.w3.org/2001/04/xmlenc#sha256";
		export var XmlEncSHA512Url: string;// ="http://www.w3.org/2001/04/xmlenc#sha512";
		var m_capacity: number;// =4;
	}
	export module SignedXml {
		export var XmlDsigNamespaceUrl: string;// ="http://www.w3.org/2000/09/xmldsig#";
		export var XmlDsigMinimalCanonicalizationUrl: string;// ="http://www.w3.org/2000/09/xmldsig#minimal";
		export var XmlDsigCanonicalizationUrl: string;// ="http://www.w3.org/TR/2001/REC-xml-c14n-20010315";
		export var XmlDsigCanonicalizationWithCommentsUrl: string;// ="http://www.w3.org/TR/2001/REC-xml-c14n-20010315#WithComments";
		export var XmlDsigSHA1Url: string;// ="http://www.w3.org/2000/09/xmldsig#sha1";
		export var XmlDsigDSAUrl: string;// ="http://www.w3.org/2000/09/xmldsig#dsa-sha1";
		export var XmlDsigRSASHA1Url: string;// ="http://www.w3.org/2000/09/xmldsig#rsa-sha1";
		export var XmlDsigHMACSHA1Url: string;// ="http://www.w3.org/2000/09/xmldsig#hmac-sha1";
		export var XmlDsigC14NTransformUrl: string;// ="http://www.w3.org/TR/2001/REC-xml-c14n-20010315";
		export var XmlDsigC14NWithCommentsTransformUrl: string;// ="http://www.w3.org/TR/2001/REC-xml-c14n-20010315#WithComments";
		export var XmlDsigExcC14NTransformUrl: string;// ="http://www.w3.org/2001/10/xml-exc-c14n#";
		export var XmlDsigExcC14NWithCommentsTransformUrl: string;// ="http://www.w3.org/2001/10/xml-exc-c14n#WithComments";
		export var XmlDsigBase64TransformUrl: string;// ="http://www.w3.org/2000/09/xmldsig#base64";
		export var XmlDsigXPathTransformUrl: string;// ="http://www.w3.org/TR/1999/REC-xpath-19991116";
		export var XmlDsigXsltTransformUrl: string;// ="http://www.w3.org/TR/1999/REC-xslt-19991116";
		export var XmlDsigEnvelopedSignatureTransformUrl: string;// ="http://www.w3.org/2000/09/xmldsig#enveloped-signature";
		export var XmlDecryptionTransformUrl: string;// ="http://www.w3.org/2002/07/decrypt#XML";
		export var XmlLicenseTransformUrl: string;// ="urn:mpeg:mpeg21:2003:01-REL-R-NS:licenseTransform";
		var XmlDsigMoreHMACMD5Url: string;// ="http://www.w3.org/2001/04/xmldsig-more#hmac-md5";
		var XmlDsigMoreHMACSHA256Url: string;// ="http://www.w3.org/2001/04/xmldsig-more#hmac-sha256";
		var XmlDsigMoreHMACSHA384Url: string;// ="http://www.w3.org/2001/04/xmldsig-more#hmac-sha384";
		var XmlDsigMoreHMACSHA512Url: string;// ="http://www.w3.org/2001/04/xmldsig-more#hmac-sha512";
		var XmlDsigMoreHMACRIPEMD160Url: string;// ="http://www.w3.org/2001/04/xmldsig-more#hmac-ripemd160";
	}
}
declare module System.Security.Policy {
	export module Evidence {
		var LockTimeout: number;// =5000;
	}
}
declare module System.Text {
	export module Encoding {
		export var CodePageASCII: number;// =20127;
		export var ISO_8859_1: number;// =28591;
		var MIMECONTF_MAILNEWS: number;// =1;
		var MIMECONTF_BROWSER: number;// =2;
		var MIMECONTF_SAVABLE_MAILNEWS: number;// =256;
		var MIMECONTF_SAVABLE_BROWSER: number;// =512;
		var CodePageDefault: number;// =0;
		var CodePageNoOEM: number;// =1;
		var CodePageNoMac: number;// =2;
		var CodePageNoThread: number;// =3;
		var CodePageNoSymbol: number;// =42;
		var CodePageUnicode: number;// =1200;
		var CodePageBigEndian: number;// =1201;
		var CodePageWindows1252: number;// =1252;
		var CodePageMacGB2312: number;// =10008;
		var CodePageGB2312: number;// =20936;
		var CodePageMacKorean: number;// =10003;
		var CodePageDLLKorean: number;// =20949;
		var ISO2022JP: number;// =50220;
		var ISO2022JPESC: number;// =50221;
		var ISO2022JPSISO: number;// =50222;
		var ISOKorean: number;// =50225;
		var ISOSimplifiedCN: number;// =50227;
		var EUCJP: number;// =51932;
		var ChineseHZ: number;// =52936;
		var DuplicateEUCCN: number;// =51936;
		var EUCCN: number;// =936;
		var EUCKR: number;// =51949;
		var ISCIIAssemese: number;// =57006;
		var ISCIIBengali: number;// =57003;
		var ISCIIDevanagari: number;// =57002;
		var ISCIIGujarathi: number;// =57010;
		var ISCIIKannada: number;// =57008;
		var ISCIIMalayalam: number;// =57009;
		var ISCIIOriya: number;// =57007;
		var ISCIIPanjabi: number;// =57011;
		var ISCIITamil: number;// =57004;
		var ISCIITelugu: number;// =57005;
		var GB18030: number;// =54936;
		var ISO_8859_8I: number;// =38598;
		var ISO_8859_8_Visual: number;// =28598;
		var ENC50229: number;// =50229;
		var CodePageUTF7: number;// =65000;
		var CodePageUTF8: number;// =65001;
		var CodePageUTF32: number;// =12000;
		var CodePageUTF32BE: number;// =12001;
	}
}
declare module System.Threading {
	export module WaitHandle {
		export var WaitTimeout: number;// =258;
		var MAX_WAITHANDLES: number;// =64;
		var WAIT_OBJECT_0: number;// =0;
		var WAIT_ABANDONED: number;// =128;
		var WAIT_FAILED: number;// =2147483647;
		var ERROR_TOO_MANY_POSTS: number;// =298;
	}
}
declare module System.Uri {
}
declare module System.Xml {
	export module XmlDeclaration {
		var YES: string;// ="yes";
		var NO: string;// ="no";
	}
	export module XmlNamespaceManager {
		var MinDeclsCountForHashtable: number;// =16;
	}
	export module XmlWriter {
		var WriteNodeBufferSize: number;// =1024;
	}
}
declare module System.Xml.Schema {
	export module SchemaNotation {
		export var SYSTEM: number;// =0;
		export var PUBLIC: number;// =1;
	}
	export module XmlSchema {
		export var Namespace: string;// ="http://www.w3.org/2001/XMLSchema";
		export var InstanceNamespace: string;// ="http://www.w3.org/2001/XMLSchema-instance";
	}
}
declare module System.Xml.Schema.NamespaceList {
}
declare module System.Xml.Schema.SchemaAttDef {
}
declare module System.Xml.Schema.SchemaDeclBase {
}
declare module System.Xml.Serialization {
}
declare module System.Xml.XPath {
}