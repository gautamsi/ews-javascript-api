declare module System {
    export enum DayOfWeek {
        Sunday = 0,
        Monday = 1,
        Tuesday = 2,
        Wednesday = 3,
        Thursday = 4,
        Friday = 5,
        Saturday = 6
    }
    export enum UriHostNameType {
        Unknown = 0,
        Basic = 1,
        Dns = 2,
        IPv4 = 3,
        IPv6 = 4
    }
}
declare module System.Globalization {
    export enum CalendarAlgorithmType {
        Unknown = 0,
        SolarCalendar = 1,
        LunarCalendar = 2,
        LunisolarCalendar = 3
    }
    export enum CalendarWeekRule {
        FirstDay = 0,
        FirstFullWeek = 1,
        FirstFourDayWeek = 2
    }
    export enum CultureTypes {
        NeutralCultures = 1,
        SpecificCultures = 2,
        InstalledWin32Cultures = 4,
        AllCultures = 7,
        UserCustomCulture = 8,
        ReplacementCultures = 16,
        WindowsOnlyCultures = 32,
        FrameworkCultures = 64
    }
    export enum DigitShapes {
        Context = 0,
        None = 1,
        NativeNational = 2
    }
}
declare module System.Net {
    export enum HttpStatusCode {
        Continue = 100,
        SwitchingProtocols = 101,
        OK = 200,
        Created = 201,
        Accepted = 202,
        NonAuthoritativeInformation = 203,
        NoContent = 204,
        ResetContent = 205,
        PartialContent = 206,
        MultipleChoices = 300,
        Ambiguous = 300,
        MovedPermanently = 301,
        Moved = 301,
        Found = 302,
        Redirect = 302,
        SeeOther = 303,
        RedirectMethod = 303,
        NotModified = 304,
        UseProxy = 305,
        Unused = 306,
        TemporaryRedirect = 307,
        RedirectKeepVerb = 307,
        BadRequest = 400,
        Unauthorized = 401,
        PaymentRequired = 402,
        Forbidden = 403,
        NotFound = 404,
        MethodNotAllowed = 405,
        NotAcceptable = 406,
        ProxyAuthenticationRequired = 407,
        RequestTimeout = 408,
        Conflict = 409,
        Gone = 410,
        LengthRequired = 411,
        PreconditionFailed = 412,
        RequestEntityTooLarge = 413,
        RequestUriTooLong = 414,
        UnsupportedMediaType = 415,
        RequestedRangeNotSatisfiable = 416,
        ExpectationFailed = 417,
        UpgradeRequired = 426,
        InternalServerError = 500,
        NotImplemented = 501,
        BadGateway = 502,
        ServiceUnavailable = 503,
        GatewayTimeout = 504,
        HttpVersionNotSupported = 505
    }
}
declare module System.Reflection {
    export enum CallingConventions {
        Standard = 1,
        VarArgs = 2,
        Any = 3,
        HasThis = 32,
        ExplicitThis = 64
    }
    export enum EventAttributes {
        None = 0,
        SpecialName = 512,
        ReservedMask = 1024,
        RTSpecialName = 1024
    }
    export enum FieldAttributes {
        FieldAccessMask = 7,
        PrivateScope = 0,
        Private = 1,
        FamANDAssem = 2,
        Assembly = 3,
        Family = 4,
        FamORAssem = 5,
        Public = 6,
        Static = 16,
        InitOnly = 32,
        Literal = 64,
        NotSerialized = 128,
        SpecialName = 512,
        PinvokeImpl = 8192,
        ReservedMask = 38144,
        RTSpecialName = 1024,
        HasFieldMarshal = 4096,
        HasDefault = 32768,
        HasFieldRVA = 256
    }
    export enum GenericParameterAttributes {
        None = 0,
        VarianceMask = 3,
        Covariant = 1,
        Contravariant = 2,
        SpecialConstraintMask = 28,
        ReferenceTypeConstraint = 4,
        NotNullableValueTypeConstraint = 8,
        DefaultConstructorConstraint = 16
    }
    export enum MemberTypes {
        Constructor = 1,
        Event = 2,
        Field = 4,
        Method = 8,
        Property = 16,
        TypeInfo = 32,
        Custom = 64,
        NestedType = 128,
        All = 191
    }
    export enum MethodAttributes {
        MemberAccessMask = 7,
        PrivateScope = 0,
        Private = 1,
        FamANDAssem = 2,
        Assembly = 3,
        Family = 4,
        FamORAssem = 5,
        Public = 6,
        Static = 16,
        Final = 32,
        Virtual = 64,
        HideBySig = 128,
        CheckAccessOnOverride = 512,
        VtableLayoutMask = 256,
        ReuseSlot = 0,
        NewSlot = 256,
        Abstract = 1024,
        SpecialName = 2048,
        PinvokeImpl = 8192,
        UnmanagedExport = 8,
        RTSpecialName = 4096,
        ReservedMask = 53248,
        HasSecurity = 16384,
        RequireSecObject = 32768
    }
    export enum MethodImplAttributes {
        CodeTypeMask = 3,
        IL = 0,
        Native = 1,
        OPTIL = 2,
        Runtime = 3,
        ManagedMask = 4,
        Unmanaged = 4,
        Managed = 0,
        ForwardRef = 16,
        PreserveSig = 128,
        InternalCall = 4096,
        Synchronized = 32,
        NoInlining = 8,
        AggressiveInlining = 256,
        NoOptimization = 64,
        MaxMethodImplVal = 65535
    }
    export enum ParameterAttributes {
        None = 0,
        In = 1,
        Out = 2,
        Lcid = 4,
        Retval = 8,
        Optional = 16,
        ReservedMask = 61440,
        HasDefault = 4096,
        HasFieldMarshal = 8192,
        Reserved3 = 16384,
        Reserved4 = 32768
    }
    export enum PropertyAttributes {
        None = 0,
        SpecialName = 512,
        ReservedMask = 62464,
        RTSpecialName = 1024,
        HasDefault = 4096,
        Reserved2 = 8192,
        Reserved3 = 16384,
        Reserved4 = 32768
    }
    export enum TypeAttributes {
        VisibilityMask = 7,
        NotPublic = 0,
        Public = 1,
        NestedPublic = 2,
        NestedPrivate = 3,
        NestedFamily = 4,
        NestedAssembly = 5,
        NestedFamANDAssem = 6,
        NestedFamORAssem = 7,
        LayoutMask = 24,
        AutoLayout = 0,
        SequentialLayout = 8,
        ExplicitLayout = 16,
        ClassSemanticsMask = 32,
        Class = 0,
        Interface = 32,
        Abstract = 128,
        Sealed = 256,
        SpecialName = 1024,
        Import = 4096,
        Serializable = 8192,
        WindowsRuntime = 16384,
        StringFormatMask = 196608,
        AnsiClass = 0,
        UnicodeClass = 65536,
        AutoClass = 131072,
        CustomFormatClass = 196608,
        CustomFormatMask = 12582912,
        BeforeFieldInit = 1048576,
        ReservedMask = 264192,
        RTSpecialName = 2048,
        HasSecurity = 262144
    }
}
declare module System.Runtime.InteropServices {
    export enum LayoutKind {
        Sequential = 0,
        Explicit = 2,
        Auto = 3
    }
}
declare module System.Security {
    export enum SecurityRuleSet {
        None = 0,
        Level1 = 1,
        Level2 = 2
    }
}
declare module System.Security.Cryptography {
    export enum CipherMode {
        CBC = 1,
        ECB = 2,
        OFB = 3,
        CFB = 4,
        CTS = 5
    }
    export enum PaddingMode {
        None = 1,
        PKCS7 = 2,
        Zeros = 3,
        ANSIX923 = 4,
        ISO10126 = 5
    }
}
declare module System.Xml {
    export enum ConformanceLevel {
        Auto = 0,
        Fragment = 1,
        Document = 2
    }
    export enum NamespaceHandling {
        Default = 0,
        OmitDuplicates = 1
    }
    export enum NewLineHandling {
        Replace = 0,
        Entitize = 1,
        None = 2
    }
    export enum WriteState {
        Start = 0,
        Prolog = 1,
        Element = 2,
        Attribute = 3,
        Content = 4,
        Closed = 5,
        Error = 6
    }
    export enum XmlNodeType {
        None = 0,
        Element = 1,
        Attribute = 2,
        Text = 3,
        CDATA = 4,
        EntityReference = 5,
        Entity = 6,
        ProcessingInstruction = 7,
        Comment = 8,
        Document = 9,
        DocumentType = 10,
        DocumentFragment = 11,
        Notation = 12,
        Whitespace = 13,
        SignificantWhitespace = 14,
        EndElement = 15,
        EndEntity = 16,
        XmlDeclaration = 17
    }
    export enum XmlOutputMethod {
        Xml = 0,
        Html = 1,
        Text = 2,
        AutoDetect = 3
    }
    export enum XmlSpace {
        None = 0,
        Default = 1,
        Preserve = 2
    }
    export enum XmlTokenizedType {
        CDATA = 0,
        ID = 1,
        IDREF = 2,
        IDREFS = 3,
        ENTITY = 4,
        ENTITIES = 5,
        NMTOKEN = 6,
        NMTOKENS = 7,
        NOTATION = 8,
        ENUMERATION = 9,
        QName = 10,
        NCName = 11,
        None = 12
    }
}
declare module System.Xml.Schema {
    export enum XmlSchemaDatatypeVariety {
        Atomic = 0,
        List = 1,
        Union = 2
    }
    export enum XmlSchemaDerivationMethod {
        Empty = 0,
        Substitution = 1,
        Extension = 2,
        Restriction = 4,
        List = 8,
        Union = 16,
        All = 255,
        None = 256
    }
    export enum XmlSchemaForm {
        None = 0,
        Qualified = 1,
        Unqualified = 2
    }
    export enum XmlSchemaUse {
        None = 0,
        Optional = 1,
        Prohibited = 2,
        Required = 3
    }
    export enum XmlSchemaValidity {
        NotKnown = 0,
        Valid = 1,
        Invalid = 2
    }
    export enum XmlTypeCode {
        None = 0,
        Item = 1,
        Node = 2,
        Document = 3,
        Element = 4,
        Attribute = 5,
        Namespace = 6,
        ProcessingInstruction = 7,
        Comment = 8,
        Text = 9,
        AnyAtomicType = 10,
        UntypedAtomic = 11,
        String = 12,
        Boolean = 13,
        Decimal = 14,
        Float = 15,
        Double = 16,
        Duration = 17,
        DateTime = 18,
        Time = 19,
        Date = 20,
        GYearMonth = 21,
        GYear = 22,
        GMonthDay = 23,
        GDay = 24,
        GMonth = 25,
        HexBinary = 26,
        Base64Binary = 27,
        AnyUri = 28,
        QName = 29,
        Notation = 30,
        NormalizedString = 31,
        Token = 32,
        Language = 33,
        NmToken = 34,
        Name = 35,
        NCName = 36,
        Id = 37,
        Idref = 38,
        Entity = 39,
        Integer = 40,
        NonPositiveInteger = 41,
        NegativeInteger = 42,
        Long = 43,
        Int = 44,
        Short = 45,
        Byte = 46,
        NonNegativeInteger = 47,
        UnsignedLong = 48,
        UnsignedInt = 49,
        UnsignedShort = 50,
        UnsignedByte = 51,
        PositiveInteger = 52,
        YearMonthDuration = 53,
        DayTimeDuration = 54
    }
}