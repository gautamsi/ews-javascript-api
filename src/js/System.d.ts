declare module Microsoft.Win32.SafeHandles {
    export class SafeHandleZeroOrMinusOneIsInvalid extends System.Runtime.InteropServices.SafeHandle {
        IsInvalid: boolean;
    }
    export class SafeWaitHandle extends Microsoft.Win32.SafeHandles.SafeHandleZeroOrMinusOneIsInvalid {
        ReleaseHandle(): boolean; //{ throw new Error("Not implemented.");}
    }
}
declare module System {
    export class Array {
        Length: number;
        LongLength: number;
        Rank: number;
		private System.Collections.ICollection.Count: number;
        SyncRoot: any;
        IsReadOnly: boolean;
        IsFixedSize: boolean;
        IsSynchronized: boolean;
		private System.Collections.IList.Item: any;
        AsReadOnly(array: any): any; //{ throw new Error("Not implemented.");}
        BinarySearch(array: any, index: number, length: number, value: any): number; //{ throw new Error("Not implemented.");}
        BinarySearch(array: any, value: any): number; //{ throw new Error("Not implemented.");}
        BinarySearch(array: any, value: any, comparer: any): number; //{ throw new Error("Not implemented.");}
        BinarySearch(array: any, index: number, length: number, value: any, comparer: any): number; //{ throw new Error("Not implemented.");}
        BinarySearch(array: System.Array, value: any): number; //{ throw new Error("Not implemented.");}
        BinarySearch(array: System.Array, index: number, length: number, value: any): number; //{ throw new Error("Not implemented.");}
        BinarySearch(array: System.Array, value: any, comparer: System.Collections.IComparer): number; //{ throw new Error("Not implemented.");}
        BinarySearch(array: System.Array, index: number, length: number, value: any, comparer: System.Collections.IComparer): number; //{ throw new Error("Not implemented.");}
        Clear(array: System.Array, index: number, length: number): any; //{ throw new Error("Not implemented.");}
        Clone(): any; //{ throw new Error("Not implemented.");}
        CombineHashCodes(h1: number, h2: number): number; //{ throw new Error("Not implemented.");}
        ConstrainedCopy(sourceArray: System.Array, sourceIndex: number, destinationArray: System.Array, destinationIndex: number, length: number): any; //{ throw new Error("Not implemented.");}
        ConvertAll(array: any, converter: any): any; //{ throw new Error("Not implemented.");}
        Copy(sourceArray: System.Array, destinationArray: System.Array, length: number): any; //{ throw new Error("Not implemented.");}
        Copy(sourceArray: System.Array, sourceIndex: number, destinationArray: System.Array, destinationIndex: number, length: number): any; //{ throw new Error("Not implemented.");}
        Copy(sourceArray: System.Array, sourceIndex: number, destinationArray: System.Array, destinationIndex: number, length: number, reliable: boolean): any; //{ throw new Error("Not implemented.");}
        Copy(sourceArray: System.Array, destinationArray: System.Array, length: number): any; //{ throw new Error("Not implemented.");}
        Copy(sourceArray: System.Array, sourceIndex: number, destinationArray: System.Array, destinationIndex: number, length: number): any; //{ throw new Error("Not implemented.");}
        CopyTo(array: System.Array, index: number): any; //{ throw new Error("Not implemented.");}
        CopyTo(array: System.Array, index: number): any; //{ throw new Error("Not implemented.");}
        CreateInstance(elementType: System.Type, length: number): System.Array; //{ throw new Error("Not implemented.");}
        CreateInstance(elementType: System.Type, lengths: System.Int32[], lowerBounds: System.Int32[]): System.Array; //{ throw new Error("Not implemented.");}
        CreateInstance(elementType: System.Type, lengths: any): System.Array; //{ throw new Error("Not implemented.");}
        CreateInstance(elementType: System.Type, length1: number, length2: number, length3: number): System.Array; //{ throw new Error("Not implemented.");}
        CreateInstance(elementType: System.Type, lengths: System.Int32[]): System.Array; //{ throw new Error("Not implemented.");}
        CreateInstance(elementType: System.Type, length1: number, length2: number): System.Array; //{ throw new Error("Not implemented.");}
        Exists(array: any, match: any): boolean; //{ throw new Error("Not implemented.");}
        Find(array: any, match: any): any; //{ throw new Error("Not implemented.");}
        FindAll(array: any, match: any): any; //{ throw new Error("Not implemented.");}
        FindIndex(array: any, startIndex: number, count: number, match: any): number; //{ throw new Error("Not implemented.");}
        FindIndex(array: any, match: any): number; //{ throw new Error("Not implemented.");}
        FindIndex(array: any, startIndex: number, match: any): number; //{ throw new Error("Not implemented.");}
        FindLast(array: any, match: any): any; //{ throw new Error("Not implemented.");}
        FindLastIndex(array: any, startIndex: number, count: number, match: any): number; //{ throw new Error("Not implemented.");}
        FindLastIndex(array: any, startIndex: number, match: any): number; //{ throw new Error("Not implemented.");}
        FindLastIndex(array: any, match: any): number; //{ throw new Error("Not implemented.");}
        ForEach(array: any, action: any): any; //{ throw new Error("Not implemented.");}
        GetDataPtrOffsetInternal(): number; //{ throw new Error("Not implemented.");}
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
        GetLength(dimension: number): number; //{ throw new Error("Not implemented.");}
        GetLongLength(dimension: number): number; //{ throw new Error("Not implemented.");}
        GetLowerBound(dimension: number): number; //{ throw new Error("Not implemented.");}
        GetMedian(low: number, hi: number): number; //{ throw new Error("Not implemented.");}
        GetUpperBound(dimension: number): number; //{ throw new Error("Not implemented.");}
        GetValue(indices: System.Int32[]): any; //{ throw new Error("Not implemented.");}
        GetValue(index: number): any; //{ throw new Error("Not implemented.");}
        GetValue(index1: number, index2: number): any; //{ throw new Error("Not implemented.");}
        GetValue(index: number): any; //{ throw new Error("Not implemented.");}
        GetValue(index1: number, index2: number, index3: number): any; //{ throw new Error("Not implemented.");}
        GetValue(index1: number, index2: number, index3: number): any; //{ throw new Error("Not implemented.");}
        GetValue(indices: any): any; //{ throw new Error("Not implemented.");}
        GetValue(index1: number, index2: number): any; //{ throw new Error("Not implemented.");}
        IndexOf(array: System.Array, value: any, startIndex: number, count: number): number; //{ throw new Error("Not implemented.");}
        IndexOf(array: System.Array, value: any, startIndex: number): number; //{ throw new Error("Not implemented.");}
        IndexOf(array: any, value: any): number; //{ throw new Error("Not implemented.");}
        IndexOf(array: any, value: any, startIndex: number): number; //{ throw new Error("Not implemented.");}
        IndexOf(array: any, value: any, startIndex: number, count: number): number; //{ throw new Error("Not implemented.");}
        IndexOf(array: System.Array, value: any): number; //{ throw new Error("Not implemented.");}
        Initialize(): any; //{ throw new Error("Not implemented.");}
        InternalCreate(elementType: any, rank: number, pLengths: any, pLowerBounds: any): System.Array; //{ throw new Error("Not implemented.");}
        InternalGetReference(elemRef: any, rank: number, pIndices: any): any; //{ throw new Error("Not implemented.");}
        InternalSetValue(target: any, value: any): any; //{ throw new Error("Not implemented.");}
        LastIndexOf(array: any, value: any, startIndex: number, count: number): number; //{ throw new Error("Not implemented.");}
        LastIndexOf(array: any, value: any): number; //{ throw new Error("Not implemented.");}
        LastIndexOf(array: System.Array, value: any, startIndex: number, count: number): number; //{ throw new Error("Not implemented.");}
        LastIndexOf(array: System.Array, value: any, startIndex: number): number; //{ throw new Error("Not implemented.");}
        LastIndexOf(array: System.Array, value: any): number; //{ throw new Error("Not implemented.");}
        LastIndexOf(array: any, value: any, startIndex: number): number; //{ throw new Error("Not implemented.");}
        Resize(array: any, newSize: number): any; //{ throw new Error("Not implemented.");}
        Reverse(array: System.Array, index: number, length: number): any; //{ throw new Error("Not implemented.");}
        Reverse(array: System.Array): any; //{ throw new Error("Not implemented.");}
        SetValue(value: any, indices: any): any; //{ throw new Error("Not implemented.");}
        SetValue(value: any, index: number): any; //{ throw new Error("Not implemented.");}
        SetValue(value: any, index1: number, index2: number): any; //{ throw new Error("Not implemented.");}
        SetValue(value: any, index1: number, index2: number, index3: number): any; //{ throw new Error("Not implemented.");}
        SetValue(value: any, indices: System.Int32[]): any; //{ throw new Error("Not implemented.");}
        SetValue(value: any, index: number): any; //{ throw new Error("Not implemented.");}
        SetValue(value: any, index1: number, index2: number): any; //{ throw new Error("Not implemented.");}
        SetValue(value: any, index1: number, index2: number, index3: number): any; //{ throw new Error("Not implemented.");}
        Sort(keys: System.Array, items: System.Array): any; //{ throw new Error("Not implemented.");}
        Sort(array: System.Array): any; //{ throw new Error("Not implemented.");}
        Sort(keys: any, items: any, index: number, length: number): any; //{ throw new Error("Not implemented.");}
        Sort(array: System.Array, comparer: System.Collections.IComparer): any; //{ throw new Error("Not implemented.");}
        Sort(keys: System.Array, items: System.Array, comparer: System.Collections.IComparer): any; //{ throw new Error("Not implemented.");}
        Sort(array: System.Array, index: number, length: number, comparer: System.Collections.IComparer): any; //{ throw new Error("Not implemented.");}
        Sort(keys: System.Array, items: System.Array, index: number, length: number, comparer: System.Collections.IComparer): any; //{ throw new Error("Not implemented.");}
        Sort(array: any, index: number, length: number): any; //{ throw new Error("Not implemented.");}
        Sort(array: System.Array, index: number, length: number): any; //{ throw new Error("Not implemented.");}
        Sort(keys: System.Array, items: System.Array, index: number, length: number): any; //{ throw new Error("Not implemented.");}
        Sort(array: any, index: number, length: number, comparer: any): any; //{ throw new Error("Not implemented.");}
        Sort(keys: any, items: any, comparer: any): any; //{ throw new Error("Not implemented.");}
        Sort(array: any): any; //{ throw new Error("Not implemented.");}
        Sort(keys: any, items: any, index: number, length: number, comparer: any): any; //{ throw new Error("Not implemented.");}
        Sort(array: any, comparison: any): any; //{ throw new Error("Not implemented.");}
        Sort(array: any, comparer: any): any; //{ throw new Error("Not implemented.");}
        Sort(keys: any, items: any): any; //{ throw new Error("Not implemented.");}
        TrueForAll(array: any, match: any): boolean; //{ throw new Error("Not implemented.");}
        TrySZBinarySearch(sourceArray: System.Array, sourceIndex: number, count: number, value: any, retVal: any): boolean; //{ throw new Error("Not implemented.");}
        TrySZIndexOf(sourceArray: System.Array, sourceIndex: number, count: number, value: any, retVal: any): boolean; //{ throw new Error("Not implemented.");}
        TrySZLastIndexOf(sourceArray: System.Array, sourceIndex: number, count: number, value: any, retVal: any): boolean; //{ throw new Error("Not implemented.");}
        TrySZReverse(array: System.Array, index: number, count: number): boolean; //{ throw new Error("Not implemented.");}
        TrySZSort(keys: System.Array, items: System.Array, left: number, right: number): boolean; //{ throw new Error("Not implemented.");}
        UnsafeCreateInstance(elementType: System.Type, length1: number, length2: number): System.Array; //{ throw new Error("Not implemented.");}
        UnsafeCreateInstance(elementType: System.Type, lengths: System.Int32[]): System.Array; //{ throw new Error("Not implemented.");}
        UnsafeCreateInstance(elementType: System.Type, length: number): System.Array; //{ throw new Error("Not implemented.");}
        UnsafeCreateInstance(elementType: System.Type, lengths: System.Int32[], lowerBounds: System.Int32[]): System.Array; //{ throw new Error("Not implemented.");}
    }
    export class AsyncCallback extends System.MulticastDelegate {
        BeginInvoke(ar: System.IAsyncResult, callback: System.AsyncCallback, object: any): System.IAsyncResult; //{ throw new Error("Not implemented.");}
        EndInvoke(result: System.IAsyncResult): any; //{ throw new Error("Not implemented.");}
        Invoke(ar: System.IAsyncResult): any; //{ throw new Error("Not implemented.");}
    }
    export class Attribute {
        TypeId: any;
        AddAttributesToList(attributeList: System.Collections.Generic.List<T>, attributes: any, types: System.Collections.Generic.Dictionary<TKey, TValue>): any; //{ throw new Error("Not implemented.");}
        AreFieldValuesEqual(thisValue: any, thatValue: any): boolean; //{ throw new Error("Not implemented.");}
        CopyToArrayList(attributeList: System.Collections.Generic.List<T>, attributes: any, types: System.Collections.Generic.Dictionary<TKey, TValue>): any; //{ throw new Error("Not implemented.");}
        CreateAttributeArrayHelper(elementType: System.Type, elementCount: number): any; //{ throw new Error("Not implemented.");}
        Equals(obj: any): boolean; //{ throw new Error("Not implemented.");}
        GetCustomAttribute(element: System.Reflection.Assembly, attributeType: System.Type, inherit: boolean): System.Attribute; //{ throw new Error("Not implemented.");}
        GetCustomAttribute(element: System.Reflection.Assembly, attributeType: System.Type): System.Attribute; //{ throw new Error("Not implemented.");}
        GetCustomAttribute(element: System.Reflection.MemberInfo, attributeType: System.Type): System.Attribute; //{ throw new Error("Not implemented.");}
        GetCustomAttribute(element: System.Reflection.MemberInfo, attributeType: System.Type, inherit: boolean): System.Attribute; //{ throw new Error("Not implemented.");}
        GetCustomAttribute(element: System.Reflection.ParameterInfo, attributeType: System.Type, inherit: boolean): System.Attribute; //{ throw new Error("Not implemented.");}
        GetCustomAttribute(element: System.Reflection.ParameterInfo, attributeType: System.Type): System.Attribute; //{ throw new Error("Not implemented.");}
        GetCustomAttribute(element: System.Reflection.Module, attributeType: System.Type): System.Attribute; //{ throw new Error("Not implemented.");}
        GetCustomAttribute(element: System.Reflection.Module, attributeType: System.Type, inherit: boolean): System.Attribute; //{ throw new Error("Not implemented.");}
        GetCustomAttributes(element: System.Reflection.Assembly, inherit: boolean): any; //{ throw new Error("Not implemented.");}
        GetCustomAttributes(element: System.Reflection.Assembly, attributeType: System.Type, inherit: boolean): any; //{ throw new Error("Not implemented.");}
        GetCustomAttributes(element: System.Reflection.Module, attributeType: System.Type, inherit: boolean): any; //{ throw new Error("Not implemented.");}
        GetCustomAttributes(element: System.Reflection.Assembly, attributeType: System.Type): any; //{ throw new Error("Not implemented.");}
        GetCustomAttributes(element: System.Reflection.Module, inherit: boolean): any; //{ throw new Error("Not implemented.");}
        GetCustomAttributes(element: System.Reflection.Assembly): any; //{ throw new Error("Not implemented.");}
        GetCustomAttributes(element: System.Reflection.Module, attributeType: System.Type): any; //{ throw new Error("Not implemented.");}
        GetCustomAttributes(element: System.Reflection.MemberInfo, type: System.Type, inherit: boolean): any; //{ throw new Error("Not implemented.");}
        GetCustomAttributes(element: System.Reflection.MemberInfo): any; //{ throw new Error("Not implemented.");}
        GetCustomAttributes(element: System.Reflection.Module): any; //{ throw new Error("Not implemented.");}
        GetCustomAttributes(element: System.Reflection.MemberInfo, inherit: boolean): any; //{ throw new Error("Not implemented.");}
        GetCustomAttributes(element: System.Reflection.ParameterInfo): any; //{ throw new Error("Not implemented.");}
        GetCustomAttributes(element: System.Reflection.ParameterInfo, attributeType: System.Type): any; //{ throw new Error("Not implemented.");}
        GetCustomAttributes(element: System.Reflection.MemberInfo, type: System.Type): any; //{ throw new Error("Not implemented.");}
        GetCustomAttributes(element: System.Reflection.ParameterInfo, inherit: boolean): any; //{ throw new Error("Not implemented.");}
        GetCustomAttributes(element: System.Reflection.ParameterInfo, attributeType: System.Type, inherit: boolean): any; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        GetParentDefinition(param: System.Reflection.ParameterInfo): System.Reflection.ParameterInfo; //{ throw new Error("Not implemented.");}
        GetParentDefinition(ev: System.Reflection.EventInfo): System.Reflection.EventInfo; //{ throw new Error("Not implemented.");}
        GetParentDefinition(property: System.Reflection.PropertyInfo): System.Reflection.PropertyInfo; //{ throw new Error("Not implemented.");}
        InternalGetAttributeUsage(type: System.Type): any; //{ throw new Error("Not implemented.");}
        InternalGetCustomAttributes(element: System.Reflection.EventInfo, type: System.Type, inherit: boolean): any; //{ throw new Error("Not implemented.");}
        InternalGetCustomAttributes(element: System.Reflection.PropertyInfo, type: System.Type, inherit: boolean): any; //{ throw new Error("Not implemented.");}
        InternalIsDefined(element: System.Reflection.PropertyInfo, attributeType: System.Type, inherit: boolean): boolean; //{ throw new Error("Not implemented.");}
        InternalIsDefined(element: System.Reflection.EventInfo, attributeType: System.Type, inherit: boolean): boolean; //{ throw new Error("Not implemented.");}
        InternalParamGetCustomAttributes(param: System.Reflection.ParameterInfo, type: System.Type, inherit: boolean): any; //{ throw new Error("Not implemented.");}
        InternalParamIsDefined(param: System.Reflection.ParameterInfo, type: System.Type, inherit: boolean): boolean; //{ throw new Error("Not implemented.");}
        IsDefaultAttribute(): boolean; //{ throw new Error("Not implemented.");}
        IsDefined(element: System.Reflection.ParameterInfo, attributeType: System.Type, inherit: boolean): boolean; //{ throw new Error("Not implemented.");}
        IsDefined(element: System.Reflection.Assembly, attributeType: System.Type): boolean; //{ throw new Error("Not implemented.");}
        IsDefined(element: System.Reflection.Module, attributeType: System.Type): boolean; //{ throw new Error("Not implemented.");}
        IsDefined(element: System.Reflection.Module, attributeType: System.Type, inherit: boolean): boolean; //{ throw new Error("Not implemented.");}
        IsDefined(element: System.Reflection.Assembly, attributeType: System.Type, inherit: boolean): boolean; //{ throw new Error("Not implemented.");}
        IsDefined(element: System.Reflection.MemberInfo, attributeType: System.Type, inherit: boolean): boolean; //{ throw new Error("Not implemented.");}
        IsDefined(element: System.Reflection.ParameterInfo, attributeType: System.Type): boolean; //{ throw new Error("Not implemented.");}
        IsDefined(element: System.Reflection.MemberInfo, attributeType: System.Type): boolean; //{ throw new Error("Not implemented.");}
        Match(obj: any): boolean; //{ throw new Error("Not implemented.");}
    }
    export class Delegate {
        Method: System.Reflection.MethodInfo;
        Target: any;
        _target: any;
        _methodBase: any;
        _methodPtr: number;
        _methodPtrAux: number;
        AdjustTarget(target: any, methodPtr: number): number; //{ throw new Error("Not implemented.");}
        BindToMethodInfo(target: any, method: any, methodType: any, flags: System.DelegateBindingFlags): boolean; //{ throw new Error("Not implemented.");}
        BindToMethodName(target: any, methodType: any, method: string, flags: System.DelegateBindingFlags): boolean; //{ throw new Error("Not implemented.");}
        Clone(): any; //{ throw new Error("Not implemented.");}
        Combine(a: System.Delegate, b: System.Delegate): System.Delegate; //{ throw new Error("Not implemented.");}
        Combine(delegates: any): System.Delegate; //{ throw new Error("Not implemented.");}
        CombineImpl(d: System.Delegate): System.Delegate; //{ throw new Error("Not implemented.");}
        CompareUnmanagedFunctionPtrs(d1: System.Delegate, d2: System.Delegate): boolean; //{ throw new Error("Not implemented.");}
        CreateDelegate(type: System.Type, target: System.Type, method: string, ignoreCase: boolean, throwOnBindFailure: boolean): System.Delegate; //{ throw new Error("Not implemented.");}
        CreateDelegate(type: System.Type, target: System.Type, method: string, ignoreCase: boolean): System.Delegate; //{ throw new Error("Not implemented.");}
        CreateDelegate(type: System.Type, target: System.Type, method: string): System.Delegate; //{ throw new Error("Not implemented.");}
        CreateDelegate(type: System.Type, target: any, method: string, ignoreCase: boolean, throwOnBindFailure: boolean): System.Delegate; //{ throw new Error("Not implemented.");}
        CreateDelegate(type: System.Type, target: any, method: string, ignoreCase: boolean): System.Delegate; //{ throw new Error("Not implemented.");}
        CreateDelegate(type: System.Type, firstArgument: any, method: System.Reflection.MethodInfo): System.Delegate; //{ throw new Error("Not implemented.");}
        CreateDelegate(type: System.Type, method: System.Reflection.MethodInfo, throwOnBindFailure: boolean): System.Delegate; //{ throw new Error("Not implemented.");}
        CreateDelegate(type: System.Type, method: System.Reflection.MethodInfo): System.Delegate; //{ throw new Error("Not implemented.");}
        CreateDelegate(type: System.Type, target: any, method: string): System.Delegate; //{ throw new Error("Not implemented.");}
        CreateDelegate(type: System.Type, firstArgument: any, method: System.Reflection.MethodInfo, throwOnBindFailure: boolean): System.Delegate; //{ throw new Error("Not implemented.");}
        CreateDelegateInternal(rtType: any, rtMethod: any, firstArgument: any, flags: System.DelegateBindingFlags, stackMark: any): System.Delegate; //{ throw new Error("Not implemented.");}
        CreateDelegateNoSecurityCheck(type: System.Type, target: any, method: System.RuntimeMethodHandle): System.Delegate; //{ throw new Error("Not implemented.");}
        CreateDelegateNoSecurityCheck(type: any, firstArgument: any, method: System.Reflection.MethodInfo): System.Delegate; //{ throw new Error("Not implemented.");}
        DelegateConstruct(target: any, slot: number): any; //{ throw new Error("Not implemented.");}
        DynamicInvoke(args: any): any; //{ throw new Error("Not implemented.");}
        DynamicInvokeImpl(args: any): any; //{ throw new Error("Not implemented.");}
        Equals(obj: any): boolean; //{ throw new Error("Not implemented.");}
        FindMethodHandle(): any; //{ throw new Error("Not implemented.");}
        GetCallStub(methodPtr: number): number; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        GetInvocationList(): any; //{ throw new Error("Not implemented.");}
        GetInvokeMethod(): number; //{ throw new Error("Not implemented.");}
        GetMethodImpl(): System.Reflection.MethodInfo; //{ throw new Error("Not implemented.");}
        GetMulticastInvoke(): number; //{ throw new Error("Not implemented.");}
        GetObjectData(info: any, context: any): any; //{ throw new Error("Not implemented.");}
        GetTarget(): any; //{ throw new Error("Not implemented.");}
        InternalAlloc(type: any): System.MulticastDelegate; //{ throw new Error("Not implemented.");}
        InternalAllocLike(d: System.Delegate): System.MulticastDelegate; //{ throw new Error("Not implemented.");}
        InternalEqualMethodHandles(left: System.Delegate, right: System.Delegate): boolean; //{ throw new Error("Not implemented.");}
        InternalEqualTypes(a: any, b: any): boolean; //{ throw new Error("Not implemented.");}
        Remove(source: System.Delegate, value: System.Delegate): System.Delegate; //{ throw new Error("Not implemented.");}
        RemoveAll(source: System.Delegate, value: System.Delegate): System.Delegate; //{ throw new Error("Not implemented.");}
        RemoveImpl(d: System.Delegate): System.Delegate; //{ throw new Error("Not implemented.");}
        UnsafeCreateDelegate(rtType: any, rtMethod: any, firstArgument: any, flags: System.DelegateBindingFlags): System.Delegate; //{ throw new Error("Not implemented.");}
    }
    export class EventArgs {
        static Empty: System.EventArgs;
    }
    export class Exception {
        Data: System.Collections.IDictionary;
        Message: string;
        InnerException: System.Exception;
        TargetSite: System.Reflection.MethodBase;
        StackTrace: string;
        HelpLink: string;
        Source: string;
        IPForWatsonBuckets: number;
        WatsonBuckets: any;
        RemoteStackTrace: string;
        HResult: number;
        IsTransient: boolean;
        private _className: string;
        private _exceptionMethod: System.Reflection.MethodBase;
        private _exceptionMethodString: string;
        _message: string;
        private _data: System.Collections.IDictionary;
        private _innerException: System.Exception;
        private _helpURL: string;
        private _stackTrace: any;
        private _watsonBuckets: any;
        private _stackTraceString: string;
        private _remoteStackTraceString: string;
        private _remoteStackIndex: number;
        private _dynamicMethods: any;
        _HResult: number;
        private _source: string;
        private _xptrs: number;
        private _xcode: number;
        private _ipForWatsonBuckets: number;
        private _safeSerializationManager: any;
        private static s_EDILock: any;
        AddExceptionDataForRestrictedErrorInfo(restrictedError: string, restrictedErrorReference: string, restrictedCapabilitySid: string, restrictedErrorObject: any, hasrestrictedLanguageErrorObject?: boolean): any; //{ throw new Error("Not implemented.");}
        CopyDynamicMethods(currentDynamicMethods: any): any; //{ throw new Error("Not implemented.");}
        CopyStackTrace(currentStackTrace: any): any; //{ throw new Error("Not implemented.");}
        DeepCopyDynamicMethods(currentDynamicMethods: any): any; //{ throw new Error("Not implemented.");}
        DeepCopyStackTrace(currentStackTrace: any): any; //{ throw new Error("Not implemented.");}
        GetBaseException(): System.Exception; //{ throw new Error("Not implemented.");}
        GetClassName(): string; //{ throw new Error("Not implemented.");}
        GetExceptionMethodFromStackTrace(): System.Reflection.MethodBase; //{ throw new Error("Not implemented.");}
        GetExceptionMethodFromString(): System.Reflection.MethodBase; //{ throw new Error("Not implemented.");}
        GetExceptionMethodString(): string; //{ throw new Error("Not implemented.");}
        GetMessageFromNativeResources(kind: System.Exception.ExceptionMessageKind): string; //{ throw new Error("Not implemented.");}
        GetMessageFromNativeResources(kind: System.Exception.ExceptionMessageKind, retMesg: any): any; //{ throw new Error("Not implemented.");}
        GetMethodFromStackTrace(stackTrace: any): any; //{ throw new Error("Not implemented.");}
        GetObjectData(info: any, context: any): any; //{ throw new Error("Not implemented.");}
        GetStackTrace(needFileInfo: boolean): string; //{ throw new Error("Not implemented.");}
        GetStackTracesDeepCopy(currentStackTrace: any, dynamicMethodArray: any): any; //{ throw new Error("Not implemented.");}
        GetStackTracesDeepCopy(exception: System.Exception, currentStackTrace: any, dynamicMethodArray: any): any; //{ throw new Error("Not implemented.");}
        GetTargetSiteInternal(): System.Reflection.MethodBase; //{ throw new Error("Not implemented.");}
        GetType(): System.Type; //{ throw new Error("Not implemented.");}
        Init(): any; //{ throw new Error("Not implemented.");}
        InternalPreserveStackTrace(): any; //{ throw new Error("Not implemented.");}
        InternalToString(): string; //{ throw new Error("Not implemented.");}
        IsImmutableAgileException(e: System.Exception): boolean; //{ throw new Error("Not implemented.");}
        nIsTransient(hr: number): boolean; //{ throw new Error("Not implemented.");}
        OnDeserialized(context: any): any; //{ throw new Error("Not implemented.");}
        PrepareForForeignExceptionRaise(): any; //{ throw new Error("Not implemented.");}
        PrepForRemoting(): System.Exception; //{ throw new Error("Not implemented.");}
        RestoreExceptionDispatchInfo(exceptionDispatchInfo: any): any; //{ throw new Error("Not implemented.");}
        SaveStackTracesFromDeepCopy(exception: System.Exception, currentStackTrace: any, dynamicMethodArray: any): any; //{ throw new Error("Not implemented.");}
        SetErrorCode(hr: number): any; //{ throw new Error("Not implemented.");}
        StripFileInfo(stackTrace: string, isRemoteStackTrace: boolean): string; //{ throw new Error("Not implemented.");}
        ToString(): string; //{ throw new Error("Not implemented.");}
        ToString(needFileLineInfo: boolean, needMessage: boolean): string; //{ throw new Error("Not implemented.");}
        TryGetRestrictedLanguageErrorObject(restrictedErrorObject: any): boolean; //{ throw new Error("Not implemented.");}
    }
    export class Func<T, TResult> extends System.MulticastDelegate {
        BeginInvoke(arg: T, callback: System.AsyncCallback, object: any): System.IAsyncResult; //{ throw new Error("Not implemented.");}
        EndInvoke(result: System.IAsyncResult): TResult; //{ throw new Error("Not implemented.");}
        Invoke(arg: T): TResult; //{ throw new Error("Not implemented.");}
    }
    export class Guid {
        private _a: number;
        private _b: number;
        private _c: number;
        private _d: number;
        private _e: number;
        private _f: number;
        private _g: number;
        private _h: number;
        private _i: number;
        private _j: number;
        private _k: number;
        static Empty: System.Guid;
        CompareTo(value: System.Guid): number; //{ throw new Error("Not implemented.");}
        CompareTo(value: any): number; //{ throw new Error("Not implemented.");}
        EatAllWhitespace(str: string): string; //{ throw new Error("Not implemented.");}
        Equals(o: any): boolean; //{ throw new Error("Not implemented.");}
        Equals(g: System.Guid): boolean; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        GetResult(me: number, them: number): number; //{ throw new Error("Not implemented.");}
        HexsToChars(guidChars: any, offset: number, a: number, b: number, hex: boolean): number; //{ throw new Error("Not implemented.");}
        HexsToChars(guidChars: any, offset: number, a: number, b: number): number; //{ throw new Error("Not implemented.");}
        HexToChar(a: number): string; //{ throw new Error("Not implemented.");}
        IsHexPrefix(str: string, i: number): boolean; //{ throw new Error("Not implemented.");}
        NewGuid(): System.Guid; //{ throw new Error("Not implemented.");}
        Parse(input: string): System.Guid; //{ throw new Error("Not implemented.");}
        ParseExact(input: string, format: string): System.Guid; //{ throw new Error("Not implemented.");}
        StringToInt(str: string, parsePos: any, requiredLength: number, flags: number, result: any, parseResult: any): boolean; //{ throw new Error("Not implemented.");}
        StringToInt(str: string, requiredLength: number, flags: number, result: any, parseResult: any): boolean; //{ throw new Error("Not implemented.");}
        StringToInt(str: string, parsePos: any, requiredLength: number, flags: number, result: any, parseResult: any): boolean; //{ throw new Error("Not implemented.");}
        StringToLong(str: string, parsePos: any, flags: number, result: any, parseResult: any): boolean; //{ throw new Error("Not implemented.");}
        StringToLong(str: string, parsePos: any, flags: number, result: any, parseResult: any): boolean; //{ throw new Error("Not implemented.");}
        StringToLong(str: string, flags: number, result: any, parseResult: any): boolean; //{ throw new Error("Not implemented.");}
        StringToShort(str: string, requiredLength: number, flags: number, result: any, parseResult: any): boolean; //{ throw new Error("Not implemented.");}
        StringToShort(str: string, parsePos: any, requiredLength: number, flags: number, result: any, parseResult: any): boolean; //{ throw new Error("Not implemented.");}
        StringToShort(str: string, parsePos: any, requiredLength: number, flags: number, result: any, parseResult: any): boolean; //{ throw new Error("Not implemented.");}
        ToByteArray(): System.Byte[]; //{ throw new Error("Not implemented.");}
        ToString(format: string): string; //{ throw new Error("Not implemented.");}
        ToString(format: string, provider: System.IFormatProvider): string; //{ throw new Error("Not implemented.");}
        ToString(): string; //{ throw new Error("Not implemented.");}
        TryParse(input: string, result: any): boolean; //{ throw new Error("Not implemented.");}
        TryParseExact(input: string, format: string, result: any): boolean; //{ throw new Error("Not implemented.");}
        TryParseGuid(g: string, flags: System.Guid.GuidStyles, result: any): boolean; //{ throw new Error("Not implemented.");}
        TryParseGuidWithDashes(guidString: string, result: any): boolean; //{ throw new Error("Not implemented.");}
        TryParseGuidWithHexPrefix(guidString: string, result: any): boolean; //{ throw new Error("Not implemented.");}
        TryParseGuidWithNoStyle(guidString: string, result: any): boolean; //{ throw new Error("Not implemented.");}
    }
    interface IAsyncResult {
        IsCompleted: boolean;
        AsyncWaitHandle: System.Threading.WaitHandle;
        AsyncState: any;
        CompletedSynchronously: boolean;
    }
    interface IFormatProvider {
        GetFormat(formatType: System.Type): any;
    }
    export class MarshalByRefObject {
        private Identity: any;
        private __identity: any;
        __RaceSetServerIdentity(id: any): any; //{ throw new Error("Not implemented.");}
        __ResetServerIdentity(): any; //{ throw new Error("Not implemented.");}
        CanCastToXmlType(xmlTypeName: string, xmlTypeNamespace: string): boolean; //{ throw new Error("Not implemented.");}
        CanCastToXmlTypeHelper(castType: any, o: System.MarshalByRefObject): boolean; //{ throw new Error("Not implemented.");}
        CreateObjRef(requestedType: System.Type): any; //{ throw new Error("Not implemented.");}
        GetComIUnknown(fIsBeingMarshalled: boolean): number; //{ throw new Error("Not implemented.");}
        GetComIUnknown(o: System.MarshalByRefObject): number; //{ throw new Error("Not implemented.");}
        GetIdentity(obj: System.MarshalByRefObject, fServer: any): any; //{ throw new Error("Not implemented.");}
        GetIdentity(obj: System.MarshalByRefObject): any; //{ throw new Error("Not implemented.");}
        GetLifetimeService(): any; //{ throw new Error("Not implemented.");}
        InitializeLifetimeService(): any; //{ throw new Error("Not implemented.");}
        InvokeMember(name: string, invokeAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, args: any, modifiers: any, culture: System.Globalization.CultureInfo, namedParameters: System.String[]): any; //{ throw new Error("Not implemented.");}
        IsInstanceOfType(T: System.Type): boolean; //{ throw new Error("Not implemented.");}
        MemberwiseClone(cloneIdentity: boolean): System.MarshalByRefObject; //{ throw new Error("Not implemented.");}
    }
    export class ModuleHandle {
        MDStreamVersion: number;
        private m_ptr: any;
        static EmptyHandle: System.ModuleHandle;
        _ContainsPropertyMatchingHash(module: any, propertyToken: number, hash: number): boolean; //{ throw new Error("Not implemented.");}
        _GetMetadataImport(module: any): number; //{ throw new Error("Not implemented.");}
        ContainsPropertyMatchingHash(module: any, propertyToken: number, hash: number): boolean; //{ throw new Error("Not implemented.");}
        Equals(obj: any): boolean; //{ throw new Error("Not implemented.");}
        Equals(handle: System.ModuleHandle): boolean; //{ throw new Error("Not implemented.");}
        GetAssembly(handle: any, retAssembly: any): any; //{ throw new Error("Not implemented.");}
        GetAssembly(module: any): any; //{ throw new Error("Not implemented.");}
        GetDynamicMethod(method: any, module: any, name: string, sig: System.Byte[], resolver: any): any; //{ throw new Error("Not implemented.");}
        GetEmptyMH(): System.ModuleHandle; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        GetMDStreamVersion(module: any): number; //{ throw new Error("Not implemented.");}
        GetMetadataImport(module: any): any; //{ throw new Error("Not implemented.");}
        GetModuleType(module: any): any; //{ throw new Error("Not implemented.");}
        GetModuleType(handle: any, type: any): any; //{ throw new Error("Not implemented.");}
        GetPEKind(handle: any, peKind: any, machine: any): any; //{ throw new Error("Not implemented.");}
        GetPEKind(module: any, peKind: any, machine: any): any; //{ throw new Error("Not implemented.");}
        GetRuntimeFieldHandleFromMetadataToken(fieldToken: number): System.RuntimeFieldHandle; //{ throw new Error("Not implemented.");}
        GetRuntimeMethodHandleFromMetadataToken(methodToken: number): System.RuntimeMethodHandle; //{ throw new Error("Not implemented.");}
        GetRuntimeModule(): any; //{ throw new Error("Not implemented.");}
        GetRuntimeTypeHandleFromMetadataToken(typeToken: number): System.RuntimeTypeHandle; //{ throw new Error("Not implemented.");}
        GetToken(module: any): number; //{ throw new Error("Not implemented.");}
        IsNullHandle(): boolean; //{ throw new Error("Not implemented.");}
        ResolveField(module: any, fieldToken: number, typeInstArgs: any, typeInstCount: number, methodInstArgs: any, methodInstCount: number, retField: any): any; //{ throw new Error("Not implemented.");}
        ResolveFieldHandle(fieldToken: number, typeInstantiationContext: any, methodInstantiationContext: any): System.RuntimeFieldHandle; //{ throw new Error("Not implemented.");}
        ResolveFieldHandle(fieldToken: number): System.RuntimeFieldHandle; //{ throw new Error("Not implemented.");}
        ResolveFieldHandleInternal(module: any, fieldToken: number, typeInstantiationContext: any, methodInstantiationContext: any): any; //{ throw new Error("Not implemented.");}
        ResolveMethod(module: any, methodToken: number, typeInstArgs: any, typeInstCount: number, methodInstArgs: any, methodInstCount: number): any; //{ throw new Error("Not implemented.");}
        ResolveMethodHandle(methodToken: number, typeInstantiationContext: any, methodInstantiationContext: any): System.RuntimeMethodHandle; //{ throw new Error("Not implemented.");}
        ResolveMethodHandle(methodToken: number): System.RuntimeMethodHandle; //{ throw new Error("Not implemented.");}
        ResolveMethodHandleInternal(module: any, methodToken: number): any; //{ throw new Error("Not implemented.");}
        ResolveMethodHandleInternal(module: any, methodToken: number, typeInstantiationContext: any, methodInstantiationContext: any): any; //{ throw new Error("Not implemented.");}
        ResolveMethodHandleInternalCore(module: any, methodToken: number, typeInstantiationContext: any, typeInstCount: number, methodInstantiationContext: any, methodInstCount: number): any; //{ throw new Error("Not implemented.");}
        ResolveType(module: any, typeToken: number, typeInstArgs: any, typeInstCount: number, methodInstArgs: any, methodInstCount: number, type: any): any; //{ throw new Error("Not implemented.");}
        ResolveTypeHandle(typeToken: number, typeInstantiationContext: any, methodInstantiationContext: any): System.RuntimeTypeHandle; //{ throw new Error("Not implemented.");}
        ResolveTypeHandle(typeToken: number): System.RuntimeTypeHandle; //{ throw new Error("Not implemented.");}
        ResolveTypeHandleInternal(module: any, typeToken: number, typeInstantiationContext: any, methodInstantiationContext: any): any; //{ throw new Error("Not implemented.");}
        ValidateModulePointer(module: any): any; //{ throw new Error("Not implemented.");}
    }
    export class MulticastDelegate extends System.Delegate {
        private _invocationList: any;
        private _invocationCount: number;
        CombineImpl(follow: System.Delegate): System.Delegate; //{ throw new Error("Not implemented.");}
        CtorClosed(target: any, methodPtr: number): any; //{ throw new Error("Not implemented.");}
        CtorClosedStatic(target: any, methodPtr: number): any; //{ throw new Error("Not implemented.");}
        CtorCollectibleClosedStatic(target: any, methodPtr: number, gchandle: number): any; //{ throw new Error("Not implemented.");}
        CtorCollectibleOpened(target: any, methodPtr: number, shuffleThunk: number, gchandle: number): any; //{ throw new Error("Not implemented.");}
        CtorCollectibleVirtualDispatch(target: any, methodPtr: number, shuffleThunk: number, gchandle: number): any; //{ throw new Error("Not implemented.");}
        CtorOpened(target: any, methodPtr: number, shuffleThunk: number): any; //{ throw new Error("Not implemented.");}
        CtorRTClosed(target: any, methodPtr: number): any; //{ throw new Error("Not implemented.");}
        CtorSecureClosed(target: any, methodPtr: number, callThunk: number, creatorMethod: number): any; //{ throw new Error("Not implemented.");}
        CtorSecureClosedStatic(target: any, methodPtr: number, callThunk: number, creatorMethod: number): any; //{ throw new Error("Not implemented.");}
        CtorSecureOpened(target: any, methodPtr: number, shuffleThunk: number, callThunk: number, creatorMethod: number): any; //{ throw new Error("Not implemented.");}
        CtorSecureRTClosed(target: any, methodPtr: number, callThunk: number, creatorMethod: number): any; //{ throw new Error("Not implemented.");}
        CtorSecureVirtualDispatch(target: any, methodPtr: number, shuffleThunk: number, callThunk: number, creatorMethod: number): any; //{ throw new Error("Not implemented.");}
        CtorVirtualDispatch(target: any, methodPtr: number, shuffleThunk: number): any; //{ throw new Error("Not implemented.");}
        DeleteFromInvocationList(invocationList: any, invocationCount: number, deleteIndex: number, deleteCount: number): any; //{ throw new Error("Not implemented.");}
        EqualInvocationLists(a: any, b: any, start: number, count: number): boolean; //{ throw new Error("Not implemented.");}
        Equals(obj: any): boolean; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        GetInvocationList(): any; //{ throw new Error("Not implemented.");}
        GetMethodImpl(): System.Reflection.MethodInfo; //{ throw new Error("Not implemented.");}
        GetObjectData(info: any, context: any): any; //{ throw new Error("Not implemented.");}
        GetTarget(): any; //{ throw new Error("Not implemented.");}
        InvocationListEquals(d: System.MulticastDelegate): boolean; //{ throw new Error("Not implemented.");}
        InvocationListLogicallyNull(): boolean; //{ throw new Error("Not implemented.");}
        IsUnmanagedFunctionPtr(): boolean; //{ throw new Error("Not implemented.");}
        NewMulticastDelegate(invocationList: any, invocationCount: number): System.MulticastDelegate; //{ throw new Error("Not implemented.");}
        NewMulticastDelegate(invocationList: any, invocationCount: number, thisIsMultiCastAlready: boolean): System.MulticastDelegate; //{ throw new Error("Not implemented.");}
        RemoveImpl(value: System.Delegate): System.Delegate; //{ throw new Error("Not implemented.");}
        StoreDynamicMethod(dynamicMethod: System.Reflection.MethodInfo): any; //{ throw new Error("Not implemented.");}
        ThrowNullThisInDelegateToInstance(): any; //{ throw new Error("Not implemented.");}
        TrySetSlot(a: any, index: number, o: any): boolean; //{ throw new Error("Not implemented.");}
    }
    export class RuntimeFieldHandle {
        Value: number;
        private m_ptr: any;
        _GetUtf8Name(field: any): any; //{ throw new Error("Not implemented.");}
        AcquiresContextFromThis(field: any): boolean; //{ throw new Error("Not implemented.");}
        CheckAttributeAccess(fieldHandle: System.RuntimeFieldHandle, decoratedTarget: any): any; //{ throw new Error("Not implemented.");}
        Equals(handle: System.RuntimeFieldHandle): boolean; //{ throw new Error("Not implemented.");}
        Equals(obj: any): boolean; //{ throw new Error("Not implemented.");}
        GetApproxDeclaringType(field: any): any; //{ throw new Error("Not implemented.");}
        GetApproxDeclaringType(field: any): any; //{ throw new Error("Not implemented.");}
        GetAttributes(field: any): System.Reflection.FieldAttributes; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        GetName(field: any): string; //{ throw new Error("Not implemented.");}
        GetNativeHandle(): System.RuntimeFieldHandle; //{ throw new Error("Not implemented.");}
        GetObjectData(info: any, context: any): any; //{ throw new Error("Not implemented.");}
        GetRuntimeFieldInfo(): any; //{ throw new Error("Not implemented.");}
        GetStaticFieldForGenericType(field: any, declaringType: any): any; //{ throw new Error("Not implemented.");}
        GetToken(field: any): number; //{ throw new Error("Not implemented.");}
        GetUtf8Name(field: any): any; //{ throw new Error("Not implemented.");}
        GetValue(field: any, instance: any, fieldType: any, declaringType: any, domainInitialized: any): any; //{ throw new Error("Not implemented.");}
        GetValueDirect(field: any, fieldType: any, pTypedRef: any, contextType: any): any; //{ throw new Error("Not implemented.");}
        IsNullHandle(): boolean; //{ throw new Error("Not implemented.");}
        IsSecurityCritical(fieldHandle: System.RuntimeFieldHandle): boolean; //{ throw new Error("Not implemented.");}
        IsSecurityCritical(): boolean; //{ throw new Error("Not implemented.");}
        IsSecuritySafeCritical(): boolean; //{ throw new Error("Not implemented.");}
        IsSecuritySafeCritical(fieldHandle: System.RuntimeFieldHandle): boolean; //{ throw new Error("Not implemented.");}
        IsSecurityTransparent(fieldHandle: System.RuntimeFieldHandle): boolean; //{ throw new Error("Not implemented.");}
        IsSecurityTransparent(): boolean; //{ throw new Error("Not implemented.");}
        MatchesNameHash(handle: any, hash: number): boolean; //{ throw new Error("Not implemented.");}
        SetValue(field: any, obj: any, value: any, fieldType: any, fieldAttr: System.Reflection.FieldAttributes, declaringType: any, domainInitialized: any): any; //{ throw new Error("Not implemented.");}
        SetValueDirect(field: any, fieldType: any, pTypedRef: any, value: any, contextType: any): any; //{ throw new Error("Not implemented.");}
    }
    export class RuntimeMethodHandle {
        static EmptyHandle: System.RuntimeMethodHandle;
        Value: number;
        private m_value: any;
        _GetCurrentMethod(stackMark: any): any; //{ throw new Error("Not implemented.");}
        _GetUtf8Name(method: any): any; //{ throw new Error("Not implemented.");}
        _IsSecurityCritical(method: any): boolean; //{ throw new Error("Not implemented.");}
        _IsSecuritySafeCritical(method: any): boolean; //{ throw new Error("Not implemented.");}
        _IsSecurityTransparent(method: any): boolean; //{ throw new Error("Not implemented.");}
        _IsTokenSecurityTransparent(module: any, metaDataToken: number): boolean; //{ throw new Error("Not implemented.");}
        CheckLinktimeDemands(method: any, module: any, isDecoratedTargetSecurityTransparent: boolean): any; //{ throw new Error("Not implemented.");}
        ConstructInstantiation(method: any, format: System.TypeNameFormatFlags, retString: any): any; //{ throw new Error("Not implemented.");}
        ConstructInstantiation(method: any, format: System.TypeNameFormatFlags): string; //{ throw new Error("Not implemented.");}
        Destroy(method: any): any; //{ throw new Error("Not implemented.");}
        EnsureNonNullMethodInfo(method: any): any; //{ throw new Error("Not implemented.");}
        Equals(obj: any): boolean; //{ throw new Error("Not implemented.");}
        Equals(handle: System.RuntimeMethodHandle): boolean; //{ throw new Error("Not implemented.");}
        GetAttributes(method: any): System.Reflection.MethodAttributes; //{ throw new Error("Not implemented.");}
        GetAttributes(method: any): System.Reflection.MethodAttributes; //{ throw new Error("Not implemented.");}
        GetCallerType(stackMark: any): any; //{ throw new Error("Not implemented.");}
        GetCallerType(stackMark: any, retType: any): any; //{ throw new Error("Not implemented.");}
        GetCurrentMethod(stackMark: any): any; //{ throw new Error("Not implemented.");}
        GetDeclaringType(method: any): any; //{ throw new Error("Not implemented.");}
        GetDeclaringType(method: any): any; //{ throw new Error("Not implemented.");}
        GetFunctionPointer(handle: any): number; //{ throw new Error("Not implemented.");}
        GetFunctionPointer(): number; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        GetImplAttributes(method: any): System.Reflection.MethodImplAttributes; //{ throw new Error("Not implemented.");}
        GetLoaderAllocator(method: any): any; //{ throw new Error("Not implemented.");}
        GetMethodBody(method: any, declaringType: any): any; //{ throw new Error("Not implemented.");}
        GetMethodDef(method: any): number; //{ throw new Error("Not implemented.");}
        GetMethodFromCanonical(method: any, declaringType: any): any; //{ throw new Error("Not implemented.");}
        GetMethodInfo(): any; //{ throw new Error("Not implemented.");}
        GetMethodInstantiation(method: any, types: any, fAsRuntimeTypeArray: boolean): any; //{ throw new Error("Not implemented.");}
        GetMethodInstantiationInternal(method: any): any; //{ throw new Error("Not implemented.");}
        GetMethodInstantiationInternal(method: any): any; //{ throw new Error("Not implemented.");}
        GetMethodInstantiationPublic(method: any): System.Type[]; //{ throw new Error("Not implemented.");}
        GetName(method: any): string; //{ throw new Error("Not implemented.");}
        GetName(method: any): string; //{ throw new Error("Not implemented.");}
        GetObjectData(info: any, context: any): any; //{ throw new Error("Not implemented.");}
        GetResolver(method: any): any; //{ throw new Error("Not implemented.");}
        GetSecurityFlags(handle: any): System.Reflection.INVOCATION_FLAGS; //{ throw new Error("Not implemented.");}
        GetSlot(method: any): number; //{ throw new Error("Not implemented.");}
        GetSlot(method: any): number; //{ throw new Error("Not implemented.");}
        GetSpecialSecurityFlags(method: any): number; //{ throw new Error("Not implemented.");}
        GetStubIfNeeded(method: any, declaringType: any, methodInstantiation: any): any; //{ throw new Error("Not implemented.");}
        GetTypicalMethodDefinition(method: any, outMethod: any): any; //{ throw new Error("Not implemented.");}
        GetTypicalMethodDefinition(method: any): any; //{ throw new Error("Not implemented.");}
        GetUtf8Name(method: any): any; //{ throw new Error("Not implemented.");}
        GetValueInternal(rmh: System.RuntimeMethodHandle): number; //{ throw new Error("Not implemented.");}
        HasMethodInstantiation(method: any): boolean; //{ throw new Error("Not implemented.");}
        HasMethodInstantiation(method: any): boolean; //{ throw new Error("Not implemented.");}
        InvokeMethod(target: any, arguments: any, sig: any, constructor: boolean): any; //{ throw new Error("Not implemented.");}
        IsCAVisibleFromDecoratedType(attrTypeHandle: System.RuntimeTypeHandle, attrCtor: any, sourceTypeHandle: System.RuntimeTypeHandle, sourceModule: any): boolean; //{ throw new Error("Not implemented.");}
        IsConstructor(method: any): boolean; //{ throw new Error("Not implemented.");}
        IsDynamicMethod(method: any): boolean; //{ throw new Error("Not implemented.");}
        IsGenericMethodDefinition(method: any): boolean; //{ throw new Error("Not implemented.");}
        IsGenericMethodDefinition(method: any): boolean; //{ throw new Error("Not implemented.");}
        IsNullHandle(): boolean; //{ throw new Error("Not implemented.");}
        IsSecurityCritical(method: any): boolean; //{ throw new Error("Not implemented.");}
        IsSecuritySafeCritical(method: any): boolean; //{ throw new Error("Not implemented.");}
        IsSecurityTransparent(method: any): boolean; //{ throw new Error("Not implemented.");}
        IsTokenSecurityTransparent(module: System.Reflection.Module, metaDataToken: number): boolean; //{ throw new Error("Not implemented.");}
        IsTypicalMethodDefinition(method: any): boolean; //{ throw new Error("Not implemented.");}
        MatchesNameHash(method: any, hash: number): boolean; //{ throw new Error("Not implemented.");}
        PerformSecurityCheck(obj: any, method: any, parent: any, invocationFlags: number): any; //{ throw new Error("Not implemented.");}
        PerformSecurityCheck(obj: any, method: any, parent: any, invocationFlags: number): any; //{ throw new Error("Not implemented.");}
        SerializationInvoke(method: any, target: any, info: any, context: any): any; //{ throw new Error("Not implemented.");}
        StripMethodInstantiation(method: any): any; //{ throw new Error("Not implemented.");}
        StripMethodInstantiation(method: any, outMethod: any): any; //{ throw new Error("Not implemented.");}
    }
    export class RuntimeTypeHandle {
        static EmptyHandle: System.RuntimeTypeHandle;
        Value: number;
        private m_type: any;
        _GetMetadataImport(type: any): number; //{ throw new Error("Not implemented.");}
        _GetUtf8Name(type: any): any; //{ throw new Error("Not implemented.");}
        _IsVisible(typeHandle: System.RuntimeTypeHandle): boolean; //{ throw new Error("Not implemented.");}
        Allocate(type: any): any; //{ throw new Error("Not implemented.");}
        CanCastTo(type: any, target: any): boolean; //{ throw new Error("Not implemented.");}
        CompareCanonicalHandles(left: any, right: any): boolean; //{ throw new Error("Not implemented.");}
        ConstructName(formatFlags: System.TypeNameFormatFlags): string; //{ throw new Error("Not implemented.");}
        ConstructName(handle: System.RuntimeTypeHandle, formatFlags: System.TypeNameFormatFlags, retString: any): any; //{ throw new Error("Not implemented.");}
        ContainsGenericVariables(): boolean; //{ throw new Error("Not implemented.");}
        ContainsGenericVariables(handle: any): boolean; //{ throw new Error("Not implemented.");}
        CopyRuntimeTypeHandles(inHandles: any, length: any): any; //{ throw new Error("Not implemented.");}
        CopyRuntimeTypeHandles(inHandles: System.Type[], length: any): any; //{ throw new Error("Not implemented.");}
        CreateCaInstance(type: any, ctor: any): any; //{ throw new Error("Not implemented.");}
        CreateInstance(type: any, publicOnly: boolean, noCheck: boolean, canBeCached: any, ctor: any, bNeedSecurityCheck: any): any; //{ throw new Error("Not implemented.");}
        CreateInstanceForAnotherGenericParameter(type: any, genericParameter: any): any; //{ throw new Error("Not implemented.");}
        Equals(obj: any): boolean; //{ throw new Error("Not implemented.");}
        Equals(handle: System.RuntimeTypeHandle): boolean; //{ throw new Error("Not implemented.");}
        GetArrayRank(type: any): number; //{ throw new Error("Not implemented.");}
        GetAssembly(type: any): any; //{ throw new Error("Not implemented.");}
        GetAttributes(type: any): System.Reflection.TypeAttributes; //{ throw new Error("Not implemented.");}
        GetBaseType(type: any): any; //{ throw new Error("Not implemented.");}
        GetConstraints(handle: System.RuntimeTypeHandle, types: any): any; //{ throw new Error("Not implemented.");}
        GetConstraints(): System.Type[]; //{ throw new Error("Not implemented.");}
        GetCorElementType(type: any): System.Reflection.CorElementType; //{ throw new Error("Not implemented.");}
        GetDeclaringMethod(type: any): any; //{ throw new Error("Not implemented.");}
        GetDeclaringType(type: any): any; //{ throw new Error("Not implemented.");}
        GetDefaultConstructor(): any; //{ throw new Error("Not implemented.");}
        GetDefaultConstructor(handle: System.RuntimeTypeHandle, method: any): any; //{ throw new Error("Not implemented.");}
        GetElementType(type: any): any; //{ throw new Error("Not implemented.");}
        GetFields(type: any, result: any, count: any): boolean; //{ throw new Error("Not implemented.");}
        GetFirstIntroducedMethod(type: any): any; //{ throw new Error("Not implemented.");}
        GetGCHandle(type: System.Runtime.InteropServices.GCHandleType): number; //{ throw new Error("Not implemented.");}
        GetGCHandle(handle: System.RuntimeTypeHandle, type: System.Runtime.InteropServices.GCHandleType): number; //{ throw new Error("Not implemented.");}
        GetGenericTypeDefinition(type: any): any; //{ throw new Error("Not implemented.");}
        GetGenericTypeDefinition(type: System.RuntimeTypeHandle, retType: any): any; //{ throw new Error("Not implemented.");}
        GetGenericVariableIndex(type: any): number; //{ throw new Error("Not implemented.");}
        GetGenericVariableIndex(): number; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        GetInstantiation(type: System.RuntimeTypeHandle, types: any, fAsRuntimeTypeArray: boolean): any; //{ throw new Error("Not implemented.");}
        GetInstantiationInternal(): any; //{ throw new Error("Not implemented.");}
        GetInstantiationPublic(): System.Type[]; //{ throw new Error("Not implemented.");}
        GetInterfaceMethodImplementationSlot(interfaceHandle: System.RuntimeTypeHandle, interfaceMethodHandle: any): number; //{ throw new Error("Not implemented.");}
        GetInterfaceMethodImplementationSlot(handle: System.RuntimeTypeHandle, interfaceHandle: System.RuntimeTypeHandle, interfaceMethodHandle: any): number; //{ throw new Error("Not implemented.");}
        GetInterfaces(type: any): System.Type[]; //{ throw new Error("Not implemented.");}
        GetIntroducedMethods(type: any): any; //{ throw new Error("Not implemented.");}
        GetMetadataImport(type: any): any; //{ throw new Error("Not implemented.");}
        GetMethodAt(type: any, slot: number): any; //{ throw new Error("Not implemented.");}
        GetModule(type: any): any; //{ throw new Error("Not implemented.");}
        GetModuleHandle(): System.ModuleHandle; //{ throw new Error("Not implemented.");}
        GetNativeHandle(): System.RuntimeTypeHandle; //{ throw new Error("Not implemented.");}
        GetNextIntroducedMethod(method: any): any; //{ throw new Error("Not implemented.");}
        GetNumVirtuals(type: any): number; //{ throw new Error("Not implemented.");}
        GetObjectData(info: any, context: any): any; //{ throw new Error("Not implemented.");}
        GetRuntimeType(): any; //{ throw new Error("Not implemented.");}
        GetToken(type: any): number; //{ throw new Error("Not implemented.");}
        GetTypeByName(name: string, throwOnError: boolean, ignoreCase: boolean, reflectionOnly: boolean, stackMark: any, loadTypeFromPartialName: boolean): any; //{ throw new Error("Not implemented.");}
        GetTypeByName(name: string, throwOnError: boolean, ignoreCase: boolean, reflectionOnly: boolean, stackMark: any, pPrivHostBinder: number, loadTypeFromPartialName: boolean): any; //{ throw new Error("Not implemented.");}
        GetTypeByName(name: string, stackMark: any): System.Type; //{ throw new Error("Not implemented.");}
        GetTypeByName(name: string, throwOnError: boolean, ignoreCase: boolean, reflectionOnly: boolean, stackMark: any, pPrivHostBinder: number, loadTypeFromPartialName: boolean, type: any): any; //{ throw new Error("Not implemented.");}
        GetTypeByNameUsingCARules(name: string, scope: any): any; //{ throw new Error("Not implemented.");}
        GetTypeByNameUsingCARules(name: string, scope: any, type: any): any; //{ throw new Error("Not implemented.");}
        GetTypeChecked(): any; //{ throw new Error("Not implemented.");}
        GetTypeHelper(typeStart: System.Type, genericArgs: System.Type[], pModifiers: number, cModifiers: number): System.Type; //{ throw new Error("Not implemented.");}
        GetUtf8Name(type: any): any; //{ throw new Error("Not implemented.");}
        GetValueInternal(handle: System.RuntimeTypeHandle): number; //{ throw new Error("Not implemented.");}
        HasElementType(type: any): boolean; //{ throw new Error("Not implemented.");}
        HasInstantiation(type: any): boolean; //{ throw new Error("Not implemented.");}
        HasInstantiation(): boolean; //{ throw new Error("Not implemented.");}
        HasProxyAttribute(type: any): boolean; //{ throw new Error("Not implemented.");}
        Instantiate(inst: System.Type[]): any; //{ throw new Error("Not implemented.");}
        Instantiate(handle: System.RuntimeTypeHandle, pInst: any, numGenericArgs: number, type: any): any; //{ throw new Error("Not implemented.");}
        IsArray(type: any): boolean; //{ throw new Error("Not implemented.");}
        IsByRef(type: any): boolean; //{ throw new Error("Not implemented.");}
        IsCollectible(handle: System.RuntimeTypeHandle): boolean; //{ throw new Error("Not implemented.");}
        IsComObject(type: any, isGenericCOM: boolean): boolean; //{ throw new Error("Not implemented.");}
        IsContextful(type: any): boolean; //{ throw new Error("Not implemented.");}
        IsEquivalentTo(rtType1: any, rtType2: any): boolean; //{ throw new Error("Not implemented.");}
        IsEquivalentType(type: any): boolean; //{ throw new Error("Not implemented.");}
        IsGenericTypeDefinition(type: any): boolean; //{ throw new Error("Not implemented.");}
        IsGenericVariable(type: any): boolean; //{ throw new Error("Not implemented.");}
        IsGenericVariable(): boolean; //{ throw new Error("Not implemented.");}
        IsInstanceOfType(type: any, o: any): boolean; //{ throw new Error("Not implemented.");}
        IsInterface(type: any): boolean; //{ throw new Error("Not implemented.");}
        IsNullHandle(): boolean; //{ throw new Error("Not implemented.");}
        IsPointer(type: any): boolean; //{ throw new Error("Not implemented.");}
        IsPrimitive(type: any): boolean; //{ throw new Error("Not implemented.");}
        IsSecurityCritical(typeHandle: System.RuntimeTypeHandle): boolean; //{ throw new Error("Not implemented.");}
        IsSecurityCritical(): boolean; //{ throw new Error("Not implemented.");}
        IsSecuritySafeCritical(typeHandle: System.RuntimeTypeHandle): boolean; //{ throw new Error("Not implemented.");}
        IsSecuritySafeCritical(): boolean; //{ throw new Error("Not implemented.");}
        IsSecurityTransparent(typeHandle: System.RuntimeTypeHandle): boolean; //{ throw new Error("Not implemented.");}
        IsSecurityTransparent(): boolean; //{ throw new Error("Not implemented.");}
        IsSzArray(type: any): boolean; //{ throw new Error("Not implemented.");}
        IsValueType(type: any): boolean; //{ throw new Error("Not implemented.");}
        IsVisible(type: any): boolean; //{ throw new Error("Not implemented.");}
        MakeArray(rank: number): any; //{ throw new Error("Not implemented.");}
        MakeArray(handle: System.RuntimeTypeHandle, rank: number, type: any): any; //{ throw new Error("Not implemented.");}
        MakeByRef(handle: System.RuntimeTypeHandle, type: any): any; //{ throw new Error("Not implemented.");}
        MakeByRef(): any; //{ throw new Error("Not implemented.");}
        MakePointer(): any; //{ throw new Error("Not implemented.");}
        MakePointer(handle: System.RuntimeTypeHandle, type: any): any; //{ throw new Error("Not implemented.");}
        MakeSZArray(): any; //{ throw new Error("Not implemented.");}
        MakeSZArray(handle: System.RuntimeTypeHandle, type: any): any; //{ throw new Error("Not implemented.");}
        SatisfiesConstraints(paramType: any, pTypeContext: any, typeContextLength: number, pMethodContext: any, methodContextLength: number, toType: any): boolean; //{ throw new Error("Not implemented.");}
        SatisfiesConstraints(paramType: any, typeContext: any, methodContext: any, toType: any): boolean; //{ throw new Error("Not implemented.");}
        VerifyInterfaceIsImplemented(handle: System.RuntimeTypeHandle, interfaceHandle: System.RuntimeTypeHandle): any; //{ throw new Error("Not implemented.");}
        VerifyInterfaceIsImplemented(interfaceHandle: System.RuntimeTypeHandle): any; //{ throw new Error("Not implemented.");}
    }
    export class SystemException extends System.Exception {
    }
    export class TimeSpan {
        Ticks: number;
        Days: number;
        Hours: number;
        Milliseconds: number;
        Minutes: number;
        Seconds: number;
        TotalDays: number;
        TotalHours: number;
        TotalMilliseconds: number;
        TotalMinutes: number;
        TotalSeconds: number;
        private static LegacyMode: boolean;
        _ticks: number;
        static Zero: System.TimeSpan;
        static MaxValue: System.TimeSpan;
        static MinValue: System.TimeSpan;
        private static _legacyConfigChecked: boolean;
        private static _legacyMode: boolean;
        Add(ts: System.TimeSpan): System.TimeSpan; //{ throw new Error("Not implemented.");}
        Compare(t1: System.TimeSpan, t2: System.TimeSpan): number; //{ throw new Error("Not implemented.");}
        CompareTo(value: any): number; //{ throw new Error("Not implemented.");}
        CompareTo(value: System.TimeSpan): number; //{ throw new Error("Not implemented.");}
        Duration(): System.TimeSpan; //{ throw new Error("Not implemented.");}
        Equals(value: any): boolean; //{ throw new Error("Not implemented.");}
        Equals(obj: System.TimeSpan): boolean; //{ throw new Error("Not implemented.");}
        Equals(t1: System.TimeSpan, t2: System.TimeSpan): boolean; //{ throw new Error("Not implemented.");}
        FromDays(value: number): System.TimeSpan; //{ throw new Error("Not implemented.");}
        FromHours(value: number): System.TimeSpan; //{ throw new Error("Not implemented.");}
        FromMilliseconds(value: number): System.TimeSpan; //{ throw new Error("Not implemented.");}
        FromMinutes(value: number): System.TimeSpan; //{ throw new Error("Not implemented.");}
        FromSeconds(value: number): System.TimeSpan; //{ throw new Error("Not implemented.");}
        FromTicks(value: number): System.TimeSpan; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        GetLegacyFormatMode(): boolean; //{ throw new Error("Not implemented.");}
        Interval(value: number, scale: number): System.TimeSpan; //{ throw new Error("Not implemented.");}
        LegacyFormatMode(): boolean; //{ throw new Error("Not implemented.");}
        Negate(): System.TimeSpan; //{ throw new Error("Not implemented.");}
        Parse(s: string): System.TimeSpan; //{ throw new Error("Not implemented.");}
        Parse(input: string, formatProvider: System.IFormatProvider): System.TimeSpan; //{ throw new Error("Not implemented.");}
        ParseExact(input: string, format: string, formatProvider: System.IFormatProvider, styles: System.Globalization.TimeSpanStyles): System.TimeSpan; //{ throw new Error("Not implemented.");}
        ParseExact(input: string, formats: System.String[], formatProvider: System.IFormatProvider, styles: System.Globalization.TimeSpanStyles): System.TimeSpan; //{ throw new Error("Not implemented.");}
        ParseExact(input: string, format: string, formatProvider: System.IFormatProvider): System.TimeSpan; //{ throw new Error("Not implemented.");}
        ParseExact(input: string, formats: System.String[], formatProvider: System.IFormatProvider): System.TimeSpan; //{ throw new Error("Not implemented.");}
        Subtract(ts: System.TimeSpan): System.TimeSpan; //{ throw new Error("Not implemented.");}
        TimeToTicks(hour: number, minute: number, second: number): number; //{ throw new Error("Not implemented.");}
        ToString(): string; //{ throw new Error("Not implemented.");}
        ToString(format: string): string; //{ throw new Error("Not implemented.");}
        ToString(format: string, formatProvider: System.IFormatProvider): string; //{ throw new Error("Not implemented.");}
        TryParse(s: string, result: any): boolean; //{ throw new Error("Not implemented.");}
        TryParse(input: string, formatProvider: System.IFormatProvider, result: any): boolean; //{ throw new Error("Not implemented.");}
        TryParseExact(input: string, formats: System.String[], formatProvider: System.IFormatProvider, result: any): boolean; //{ throw new Error("Not implemented.");}
        TryParseExact(input: string, format: string, formatProvider: System.IFormatProvider, styles: System.Globalization.TimeSpanStyles, result: any): boolean; //{ throw new Error("Not implemented.");}
        TryParseExact(input: string, formats: System.String[], formatProvider: System.IFormatProvider, styles: System.Globalization.TimeSpanStyles, result: any): boolean; //{ throw new Error("Not implemented.");}
        TryParseExact(input: string, format: string, formatProvider: System.IFormatProvider, result: any): boolean; //{ throw new Error("Not implemented.");}
    }
    export class TimeZoneInfo {
        Id: string;
        DisplayName: string;
        StandardName: string;
        DaylightName: string;
        BaseUtcOffset: System.TimeSpan;
        SupportsDaylightSavingTime: boolean;
        static Local: System.TimeZoneInfo;
        static Utc: System.TimeZoneInfo;
        private m_id: string;
        private m_displayName: string;
        private m_standardDisplayName: string;
        private m_daylightDisplayName: string;
        private m_baseUtcOffset: System.TimeSpan;
        private m_supportsDaylightSavingTime: boolean;
        private m_adjustmentRules: any;
        private static s_cachedData: any;
        private static s_maxDateOnly: Date;
        private static s_minDateOnly: Date;
        CheckDaylightSavingTimeNotSupported(timeZone: any): boolean; //{ throw new Error("Not implemented.");}
        CheckIsDst(startTime: Date, time: Date, endTime: Date): boolean; //{ throw new Error("Not implemented.");}
        ClearCachedData(): any; //{ throw new Error("Not implemented.");}
        ConvertTime(dateTimeOffset: Date, destinationTimeZone: System.TimeZoneInfo): Date; //{ throw new Error("Not implemented.");}
        ConvertTime(dateTime: Date, sourceTimeZone: System.TimeZoneInfo, destinationTimeZone: System.TimeZoneInfo): Date; //{ throw new Error("Not implemented.");}
        ConvertTime(dateTime: Date, sourceTimeZone: System.TimeZoneInfo, destinationTimeZone: System.TimeZoneInfo, flags: System.TimeZoneInfoOptions): Date; //{ throw new Error("Not implemented.");}
        ConvertTime(dateTime: Date, destinationTimeZone: System.TimeZoneInfo): Date; //{ throw new Error("Not implemented.");}
        ConvertTime(dateTime: Date, sourceTimeZone: System.TimeZoneInfo, destinationTimeZone: System.TimeZoneInfo, flags: System.TimeZoneInfoOptions, cachedData: any): Date; //{ throw new Error("Not implemented.");}
        ConvertTimeBySystemTimeZoneId(dateTime: Date, sourceTimeZoneId: string, destinationTimeZoneId: string): Date; //{ throw new Error("Not implemented.");}
        ConvertTimeBySystemTimeZoneId(dateTime: Date, destinationTimeZoneId: string): Date; //{ throw new Error("Not implemented.");}
        ConvertTimeBySystemTimeZoneId(dateTimeOffset: Date, destinationTimeZoneId: string): Date; //{ throw new Error("Not implemented.");}
        ConvertTimeFromUtc(dateTime: Date, destinationTimeZone: System.TimeZoneInfo): Date; //{ throw new Error("Not implemented.");}
        ConvertTimeToUtc(dateTime: Date): Date; //{ throw new Error("Not implemented.");}
        ConvertTimeToUtc(dateTime: Date, sourceTimeZone: System.TimeZoneInfo): Date; //{ throw new Error("Not implemented.");}
        ConvertTimeToUtc(dateTime: Date, flags: System.TimeZoneInfoOptions): Date; //{ throw new Error("Not implemented.");}
        ConvertUtcToTimeZone(ticks: number, destinationTimeZone: System.TimeZoneInfo, isAmbiguousLocalDst: any): Date; //{ throw new Error("Not implemented.");}
        CreateAdjustmentRuleFromTimeZoneInformation(timeZoneInformation: any, startDate: Date, endDate: Date): any; //{ throw new Error("Not implemented.");}
        CreateCustomTimeZone(id: string, baseUtcOffset: System.TimeSpan, displayName: string, standardDisplayName: string, daylightDisplayName: string, adjustmentRules: any, disableDaylightSavingTime: boolean): System.TimeZoneInfo; //{ throw new Error("Not implemented.");}
        CreateCustomTimeZone(id: string, baseUtcOffset: System.TimeSpan, displayName: string, standardDisplayName: string): System.TimeZoneInfo; //{ throw new Error("Not implemented.");}
        CreateCustomTimeZone(id: string, baseUtcOffset: System.TimeSpan, displayName: string, standardDisplayName: string, daylightDisplayName: string, adjustmentRules: any): System.TimeZoneInfo; //{ throw new Error("Not implemented.");}
        Equals(obj: any): boolean; //{ throw new Error("Not implemented.");}
        Equals(other: System.TimeZoneInfo): boolean; //{ throw new Error("Not implemented.");}
        FindIdFromTimeZoneInformation(timeZone: any, dstDisabled: any): string; //{ throw new Error("Not implemented.");}
        FindSystemTimeZoneById(id: string): System.TimeZoneInfo; //{ throw new Error("Not implemented.");}
        FromSerializedString(source: string): System.TimeZoneInfo; //{ throw new Error("Not implemented.");}
        GetAdjustmentRuleForTime(dateTime: Date): any; //{ throw new Error("Not implemented.");}
        GetAdjustmentRules(): any; //{ throw new Error("Not implemented.");}
        GetAmbiguousTimeOffsets(dateTime: Date): any; //{ throw new Error("Not implemented.");}
        GetAmbiguousTimeOffsets(dateTimeOffset: Date): any; //{ throw new Error("Not implemented.");}
        GetDateTimeNowUtcOffsetFromUtc(time: Date, isAmbiguousLocalDst: any): System.TimeSpan; //{ throw new Error("Not implemented.");}
        GetDaylightTime(year: number, rule: any): any; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        GetIsAmbiguousTime(time: Date, rule: any, daylightTime: any): boolean; //{ throw new Error("Not implemented.");}
        GetIsDaylightSavings(time: Date, rule: any, daylightTime: any, flags: System.TimeZoneInfoOptions): boolean; //{ throw new Error("Not implemented.");}
        GetIsDaylightSavingsFromUtc(time: Date, Year: number, utc: System.TimeSpan, rule: any, isAmbiguousLocalDst: any): boolean; //{ throw new Error("Not implemented.");}
        GetIsInvalidTime(time: Date, rule: any, daylightTime: any): boolean; //{ throw new Error("Not implemented.");}
        GetLocalTimeZone(cachedData: any): System.TimeZoneInfo; //{ throw new Error("Not implemented.");}
        GetLocalTimeZoneFromWin32Data(timeZoneInformation: any, dstDisabled: boolean): System.TimeZoneInfo; //{ throw new Error("Not implemented.");}
        GetLocalUtcOffset(dateTime: Date, flags: System.TimeZoneInfoOptions): System.TimeSpan; //{ throw new Error("Not implemented.");}
        GetSystemTimeZones(): any; //{ throw new Error("Not implemented.");}
        GetUtcOffset(dateTime: Date, flags: System.TimeZoneInfoOptions, cachedData: any): System.TimeSpan; //{ throw new Error("Not implemented.");}
        GetUtcOffset(time: Date, zone: System.TimeZoneInfo, flags: System.TimeZoneInfoOptions): System.TimeSpan; //{ throw new Error("Not implemented.");}
        GetUtcOffset(dateTime: Date): System.TimeSpan; //{ throw new Error("Not implemented.");}
        GetUtcOffset(dateTimeOffset: Date): System.TimeSpan; //{ throw new Error("Not implemented.");}
        GetUtcOffset(dateTime: Date, flags: System.TimeZoneInfoOptions): System.TimeSpan; //{ throw new Error("Not implemented.");}
        GetUtcOffsetFromUtc(time: Date, zone: System.TimeZoneInfo, isDaylightSavings: any): System.TimeSpan; //{ throw new Error("Not implemented.");}
        GetUtcOffsetFromUtc(time: Date, zone: System.TimeZoneInfo): System.TimeSpan; //{ throw new Error("Not implemented.");}
        GetUtcOffsetFromUtc(time: Date, zone: System.TimeZoneInfo, isDaylightSavings: any, isAmbiguousLocalDst: any): System.TimeSpan; //{ throw new Error("Not implemented.");}
        HasSameRules(other: System.TimeZoneInfo): boolean; //{ throw new Error("Not implemented.");}
        IsAmbiguousTime(dateTimeOffset: Date): boolean; //{ throw new Error("Not implemented.");}
        IsAmbiguousTime(dateTime: Date, flags: System.TimeZoneInfoOptions): boolean; //{ throw new Error("Not implemented.");}
        IsAmbiguousTime(dateTime: Date): boolean; //{ throw new Error("Not implemented.");}
        IsDaylightSavingTime(dateTime: Date, flags: System.TimeZoneInfoOptions, cachedData: any): boolean; //{ throw new Error("Not implemented.");}
        IsDaylightSavingTime(dateTime: Date, flags: System.TimeZoneInfoOptions): boolean; //{ throw new Error("Not implemented.");}
        IsDaylightSavingTime(dateTime: Date): boolean; //{ throw new Error("Not implemented.");}
        IsDaylightSavingTime(dateTimeOffset: Date): boolean; //{ throw new Error("Not implemented.");}
        IsInvalidTime(dateTime: Date): boolean; //{ throw new Error("Not implemented.");}
        ToSerializedString(): string; //{ throw new Error("Not implemented.");}
        ToString(): string; //{ throw new Error("Not implemented.");}
        TransitionTimeFromTimeZoneInformation(timeZoneInformation: any, transitionTime: any, readStartDate: boolean): boolean; //{ throw new Error("Not implemented.");}
        TransitionTimeToDateTime(year: number, transitionTime: any): Date; //{ throw new Error("Not implemented.");}
        TryCompareStandardDate(timeZone: any, registryTimeZoneInfo: any): boolean; //{ throw new Error("Not implemented.");}
        TryCompareTimeZoneInformationToRegistry(timeZone: any, id: string, dstDisabled: any): boolean; //{ throw new Error("Not implemented.");}
        TryCreateAdjustmentRules(id: string, defaultTimeZoneInformation: any, rules: any, e: any): boolean; //{ throw new Error("Not implemented.");}
        TryGetLocalizedNameByMuiNativeResource(resource: string): string; //{ throw new Error("Not implemented.");}
        TryGetLocalizedNameByNativeResource(filePath: string, resource: number): string; //{ throw new Error("Not implemented.");}
        TryGetLocalizedNamesByRegistryKey(key: any, displayName: any, standardName: any, daylightName: any): boolean; //{ throw new Error("Not implemented.");}
        TryGetTimeZone(id: string, dstDisabled: boolean, value: any, e: any, cachedData: any): System.TimeZoneInfo.TimeZoneInfoResult; //{ throw new Error("Not implemented.");}
        TryGetTimeZoneByRegistryKey(id: string, value: any, e: any): System.TimeZoneInfo.TimeZoneInfoResult; //{ throw new Error("Not implemented.");}
        UtcOffsetOutOfRange(offset: System.TimeSpan): boolean; //{ throw new Error("Not implemented.");}
        ValidateTimeZoneInfo(id: string, baseUtcOffset: System.TimeSpan, adjustmentRules: any, adjustmentRulesSupportDst: any): any; //{ throw new Error("Not implemented.");}
    }
    export class Type extends System.Reflection.MemberInfo {
        MemberType: System.Reflection.MemberTypes;
        DeclaringType: System.Type;
        DeclaringMethod: System.Reflection.MethodBase;
        ReflectedType: System.Type;
        StructLayoutAttribute: System.Runtime.InteropServices.StructLayoutAttribute;
        GUID: System.Guid;
        static DefaultBinder: System.Reflection.Binder;
        Module: System.Reflection.Module;
        Assembly: System.Reflection.Assembly;
        TypeHandle: System.RuntimeTypeHandle;
        FullName: string;
        Namespace: string;
        AssemblyQualifiedName: string;
        BaseType: System.Type;
        TypeInitializer: System.Reflection.ConstructorInfo;
        IsNested: boolean;
        Attributes: System.Reflection.TypeAttributes;
        GenericParameterAttributes: System.Reflection.GenericParameterAttributes;
        IsVisible: boolean;
        IsNotPublic: boolean;
        IsPublic: boolean;
        IsNestedPublic: boolean;
        IsNestedPrivate: boolean;
        IsNestedFamily: boolean;
        IsNestedAssembly: boolean;
        IsNestedFamANDAssem: boolean;
        IsNestedFamORAssem: boolean;
        IsAutoLayout: boolean;
        IsLayoutSequential: boolean;
        IsExplicitLayout: boolean;
        IsClass: boolean;
        IsInterface: boolean;
        IsValueType: boolean;
        IsAbstract: boolean;
        IsSealed: boolean;
        IsEnum: boolean;
        IsSpecialName: boolean;
        IsImport: boolean;
        IsSerializable: boolean;
        IsAnsiClass: boolean;
        IsUnicodeClass: boolean;
        IsAutoClass: boolean;
        IsArray: boolean;
        IsSzArray: boolean;
        IsGenericType: boolean;
        IsGenericTypeDefinition: boolean;
        IsConstructedGenericType: boolean;
        IsGenericParameter: boolean;
        GenericParameterPosition: number;
        ContainsGenericParameters: boolean;
        IsByRef: boolean;
        IsPointer: boolean;
        IsPrimitive: boolean;
        IsCOMObject: boolean;
        IsWindowsRuntimeObject: boolean;
        IsExportedToWindowsRuntime: boolean;
        HasElementType: boolean;
        IsContextful: boolean;
        IsMarshalByRef: boolean;
        HasProxyAttribute: boolean;
        GenericTypeArguments: System.Type[];
        IsSecurityCritical: boolean;
        IsSecuritySafeCritical: boolean;
        IsSecurityTransparent: boolean;
        NeedsReflectionSecurityCheck: boolean;
        UnderlyingSystemType: System.Type;
        static FilterAttribute: any;
        static FilterName: any;
        static FilterNameIgnoreCase: any;
        static Missing: any;
        static Delimiter: string;
        static EmptyTypes: System.Type[];
        private static defaultBinder: System.Reflection.Binder;
        BinarySearch(array: System.Array, value: any): number; //{ throw new Error("Not implemented.");}
        CreateBinder(): any; //{ throw new Error("Not implemented.");}
        Equals(o: System.Type): boolean; //{ throw new Error("Not implemented.");}
        Equals(o: any): boolean; //{ throw new Error("Not implemented.");}
        FindInterfaces(filter: any, filterCriteria: any): System.Type[]; //{ throw new Error("Not implemented.");}
        FindMembers(memberType: System.Reflection.MemberTypes, bindingAttr: System.Reflection.BindingFlags, filter: any, filterCriteria: any): any; //{ throw new Error("Not implemented.");}
        FormatTypeName(serialization: boolean): string; //{ throw new Error("Not implemented.");}
        FormatTypeName(): string; //{ throw new Error("Not implemented.");}
        GetArrayRank(): number; //{ throw new Error("Not implemented.");}
        GetAttributeFlagsImpl(): System.Reflection.TypeAttributes; //{ throw new Error("Not implemented.");}
        GetConstructor(types: System.Type[]): System.Reflection.ConstructorInfo; //{ throw new Error("Not implemented.");}
        GetConstructor(bindingAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, types: System.Type[], modifiers: any): System.Reflection.ConstructorInfo; //{ throw new Error("Not implemented.");}
        GetConstructor(bindingAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, callConvention: System.Reflection.CallingConventions, types: System.Type[], modifiers: any): System.Reflection.ConstructorInfo; //{ throw new Error("Not implemented.");}
        GetConstructorImpl(bindingAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, callConvention: System.Reflection.CallingConventions, types: System.Type[], modifiers: any): System.Reflection.ConstructorInfo; //{ throw new Error("Not implemented.");}
        GetConstructors(bindingAttr: System.Reflection.BindingFlags): any; //{ throw new Error("Not implemented.");}
        GetConstructors(): any; //{ throw new Error("Not implemented.");}
        GetDefaultMembers(): any; //{ throw new Error("Not implemented.");}
        GetElementType(): System.Type; //{ throw new Error("Not implemented.");}
        GetEnumData(enumNames: any, enumValues: any): any; //{ throw new Error("Not implemented.");}
        GetEnumName(value: any): string; //{ throw new Error("Not implemented.");}
        GetEnumNames(): System.String[]; //{ throw new Error("Not implemented.");}
        GetEnumRawConstantValues(): System.Array; //{ throw new Error("Not implemented.");}
        GetEnumUnderlyingType(): System.Type; //{ throw new Error("Not implemented.");}
        GetEnumValues(): System.Array; //{ throw new Error("Not implemented.");}
        GetEvent(name: string, bindingAttr: System.Reflection.BindingFlags): System.Reflection.EventInfo; //{ throw new Error("Not implemented.");}
        GetEvent(name: string): System.Reflection.EventInfo; //{ throw new Error("Not implemented.");}
        GetEvents(): any; //{ throw new Error("Not implemented.");}
        GetEvents(bindingAttr: System.Reflection.BindingFlags): any; //{ throw new Error("Not implemented.");}
        GetField(name: string): System.Reflection.FieldInfo; //{ throw new Error("Not implemented.");}
        GetField(name: string, bindingAttr: System.Reflection.BindingFlags): System.Reflection.FieldInfo; //{ throw new Error("Not implemented.");}
        GetFields(bindingAttr: System.Reflection.BindingFlags): any; //{ throw new Error("Not implemented.");}
        GetFields(): any; //{ throw new Error("Not implemented.");}
        GetGenericArguments(): System.Type[]; //{ throw new Error("Not implemented.");}
        GetGenericParameterConstraints(): System.Type[]; //{ throw new Error("Not implemented.");}
        GetGenericTypeDefinition(): System.Type; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        GetInterface(name: string, ignoreCase: boolean): System.Type; //{ throw new Error("Not implemented.");}
        GetInterface(name: string): System.Type; //{ throw new Error("Not implemented.");}
        GetInterfaceMap(interfaceType: System.Type): any; //{ throw new Error("Not implemented.");}
        GetInterfaces(): System.Type[]; //{ throw new Error("Not implemented.");}
        GetMember(name: string, type: System.Reflection.MemberTypes, bindingAttr: System.Reflection.BindingFlags): any; //{ throw new Error("Not implemented.");}
        GetMember(name: string, bindingAttr: System.Reflection.BindingFlags): any; //{ throw new Error("Not implemented.");}
        GetMember(name: string): any; //{ throw new Error("Not implemented.");}
        GetMembers(bindingAttr: System.Reflection.BindingFlags): any; //{ throw new Error("Not implemented.");}
        GetMembers(): any; //{ throw new Error("Not implemented.");}
        GetMethod(name: string, bindingAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, types: System.Type[], modifiers: any): System.Reflection.MethodInfo; //{ throw new Error("Not implemented.");}
        GetMethod(name: string): System.Reflection.MethodInfo; //{ throw new Error("Not implemented.");}
        GetMethod(name: string, bindingAttr: System.Reflection.BindingFlags): System.Reflection.MethodInfo; //{ throw new Error("Not implemented.");}
        GetMethod(name: string, types: System.Type[]): System.Reflection.MethodInfo; //{ throw new Error("Not implemented.");}
        GetMethod(name: string, types: System.Type[], modifiers: any): System.Reflection.MethodInfo; //{ throw new Error("Not implemented.");}
        GetMethod(name: string, bindingAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, callConvention: System.Reflection.CallingConventions, types: System.Type[], modifiers: any): System.Reflection.MethodInfo; //{ throw new Error("Not implemented.");}
        GetMethodImpl(name: string, bindingAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, callConvention: System.Reflection.CallingConventions, types: System.Type[], modifiers: any): System.Reflection.MethodInfo; //{ throw new Error("Not implemented.");}
        GetMethods(bindingAttr: System.Reflection.BindingFlags): any; //{ throw new Error("Not implemented.");}
        GetMethods(): any; //{ throw new Error("Not implemented.");}
        GetNestedType(name: string): System.Type; //{ throw new Error("Not implemented.");}
        GetNestedType(name: string, bindingAttr: System.Reflection.BindingFlags): System.Type; //{ throw new Error("Not implemented.");}
        GetNestedTypes(): System.Type[]; //{ throw new Error("Not implemented.");}
        GetNestedTypes(bindingAttr: System.Reflection.BindingFlags): System.Type[]; //{ throw new Error("Not implemented.");}
        GetProperties(): any; //{ throw new Error("Not implemented.");}
        GetProperties(bindingAttr: System.Reflection.BindingFlags): any; //{ throw new Error("Not implemented.");}
        GetProperty(name: string, bindingAttr: System.Reflection.BindingFlags, returnType: System.Type): System.Reflection.PropertyInfo; //{ throw new Error("Not implemented.");}
        GetProperty(name: string): System.Reflection.PropertyInfo; //{ throw new Error("Not implemented.");}
        GetProperty(name: string, returnType: System.Type): System.Reflection.PropertyInfo; //{ throw new Error("Not implemented.");}
        GetProperty(name: string, returnType: System.Type, types: System.Type[]): System.Reflection.PropertyInfo; //{ throw new Error("Not implemented.");}
        GetProperty(name: string, bindingAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, returnType: System.Type, types: System.Type[], modifiers: any): System.Reflection.PropertyInfo; //{ throw new Error("Not implemented.");}
        GetProperty(name: string, returnType: System.Type, types: System.Type[], modifiers: any): System.Reflection.PropertyInfo; //{ throw new Error("Not implemented.");}
        GetProperty(name: string, types: System.Type[]): System.Reflection.PropertyInfo; //{ throw new Error("Not implemented.");}
        GetProperty(name: string, bindingAttr: System.Reflection.BindingFlags): System.Reflection.PropertyInfo; //{ throw new Error("Not implemented.");}
        GetPropertyImpl(name: string, bindingAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, returnType: System.Type, types: System.Type[], modifiers: any): System.Reflection.PropertyInfo; //{ throw new Error("Not implemented.");}
        GetRootElementType(): System.Type; //{ throw new Error("Not implemented.");}
        GetType(typeName: string, assemblyResolver: System.Func<T, TResult>, typeResolver: any, throwOnError: boolean, ignoreCase: boolean): System.Type; //{ throw new Error("Not implemented.");}
        GetType(typeName: string, assemblyResolver: System.Func<T, TResult>, typeResolver: any): System.Type; //{ throw new Error("Not implemented.");}
        GetType(typeName: string, assemblyResolver: System.Func<T, TResult>, typeResolver: any, throwOnError: boolean): System.Type; //{ throw new Error("Not implemented.");}
        GetType(typeName: string, throwOnError: boolean): System.Type; //{ throw new Error("Not implemented.");}
        GetType(): System.Type; //{ throw new Error("Not implemented.");}
        GetType(typeName: string, throwOnError: boolean, ignoreCase: boolean): System.Type; //{ throw new Error("Not implemented.");}
        GetType(typeName: string): System.Type; //{ throw new Error("Not implemented.");}
        GetTypeArray(args: any): System.Type[]; //{ throw new Error("Not implemented.");}
        GetTypeCode(type: System.Type): System.TypeCode; //{ throw new Error("Not implemented.");}
        GetTypeCodeImpl(): System.TypeCode; //{ throw new Error("Not implemented.");}
        GetTypeFromCLSID(clsid: System.Guid, server: string, throwOnError: boolean): System.Type; //{ throw new Error("Not implemented.");}
        GetTypeFromCLSID(clsid: System.Guid, server: string): System.Type; //{ throw new Error("Not implemented.");}
        GetTypeFromCLSID(clsid: System.Guid, throwOnError: boolean): System.Type; //{ throw new Error("Not implemented.");}
        GetTypeFromCLSID(clsid: System.Guid): System.Type; //{ throw new Error("Not implemented.");}
        GetTypeFromHandle(handle: System.RuntimeTypeHandle): System.Type; //{ throw new Error("Not implemented.");}
        GetTypeFromHandleUnsafe(handle: number): any; //{ throw new Error("Not implemented.");}
        GetTypeFromProgID(progID: string, server: string): System.Type; //{ throw new Error("Not implemented.");}
        GetTypeFromProgID(progID: string): System.Type; //{ throw new Error("Not implemented.");}
        GetTypeFromProgID(progID: string, throwOnError: boolean): System.Type; //{ throw new Error("Not implemented.");}
        GetTypeFromProgID(progID: string, server: string, throwOnError: boolean): System.Type; //{ throw new Error("Not implemented.");}
        GetTypeHandle(o: any): System.RuntimeTypeHandle; //{ throw new Error("Not implemented.");}
        GetTypeHandleInternal(): System.RuntimeTypeHandle; //{ throw new Error("Not implemented.");}
        HasElementTypeImpl(): boolean; //{ throw new Error("Not implemented.");}
        HasProxyAttributeImpl(): boolean; //{ throw new Error("Not implemented.");}
        ImplementInterface(ifaceType: System.Type): boolean; //{ throw new Error("Not implemented.");}
        InvokeMember(name: string, invokeAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, target: any, args: any): any; //{ throw new Error("Not implemented.");}
        InvokeMember(name: string, invokeAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, target: any, args: any, modifiers: any, culture: System.Globalization.CultureInfo, namedParameters: System.String[]): any; //{ throw new Error("Not implemented.");}
        InvokeMember(name: string, invokeAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, target: any, args: any, culture: System.Globalization.CultureInfo): any; //{ throw new Error("Not implemented.");}
        IsArrayImpl(): boolean; //{ throw new Error("Not implemented.");}
        IsAssignableFrom(c: System.Type): boolean; //{ throw new Error("Not implemented.");}
        IsByRefImpl(): boolean; //{ throw new Error("Not implemented.");}
        IsCOMObjectImpl(): boolean; //{ throw new Error("Not implemented.");}
        IsContextfulImpl(): boolean; //{ throw new Error("Not implemented.");}
        IsEnumDefined(value: any): boolean; //{ throw new Error("Not implemented.");}
        IsEquivalentTo(other: System.Type): boolean; //{ throw new Error("Not implemented.");}
        IsExportedToWindowsRuntimeImpl(): boolean; //{ throw new Error("Not implemented.");}
        IsInstanceOfType(o: any): boolean; //{ throw new Error("Not implemented.");}
        IsIntegerType(t: System.Type): boolean; //{ throw new Error("Not implemented.");}
        IsMarshalByRefImpl(): boolean; //{ throw new Error("Not implemented.");}
        IsPointerImpl(): boolean; //{ throw new Error("Not implemented.");}
        IsPrimitiveImpl(): boolean; //{ throw new Error("Not implemented.");}
        IsSubclassOf(c: System.Type): boolean; //{ throw new Error("Not implemented.");}
        IsValueTypeImpl(): boolean; //{ throw new Error("Not implemented.");}
        IsWindowsRuntimeObjectImpl(): boolean; //{ throw new Error("Not implemented.");}
        MakeArrayType(): System.Type; //{ throw new Error("Not implemented.");}
        MakeArrayType(rank: number): System.Type; //{ throw new Error("Not implemented.");}
        MakeByRefType(): System.Type; //{ throw new Error("Not implemented.");}
        MakeGenericType(typeArguments: System.Type[]): System.Type; //{ throw new Error("Not implemented.");}
        MakePointerType(): System.Type; //{ throw new Error("Not implemented.");}
        ReflectionOnlyGetType(typeName: string, throwIfNotFound: boolean, ignoreCase: boolean): System.Type; //{ throw new Error("Not implemented.");}
        ToString(): string; //{ throw new Error("Not implemented.");}
    }
    export class Uri {
        private IsImplicitFile: boolean;
        private IsUncOrDosPath: boolean;
        private IsDosPath: boolean;
        private IsUncPath: boolean;
        private HostType: System.Uri.Flags;
        private Syntax: System.UriParser;
        private IsNotAbsoluteUri: boolean;
        private AllowIdn: boolean;
        UserDrivenParsing: boolean;
        private SecuredPathIndex: number;
        AbsolutePath: string;
        private PrivateAbsolutePath: string;
        AbsoluteUri: string;
        LocalPath: string;
        Authority: string;
        HostNameType: System.UriHostNameType;
        IsDefaultPort: boolean;
        IsFile: boolean;
        IsLoopback: boolean;
        PathAndQuery: string;
        Segments: System.String[];
        IsUnc: boolean;
        Host: string;
        private static InitializeLock: any;
        Port: number;
        Query: string;
        Fragment: string;
        Scheme: string;
        private OriginalStringSwitched: boolean;
        OriginalString: string;
        DnsSafeHost: string;
        IdnHost: string;
        IsAbsoluteUri: boolean;
        UserEscaped: boolean;
        UserInfo: string;
        HasAuthority: boolean;
        private m_String: string;
        private m_originalUnicodeString: string;
        private m_Syntax: System.UriParser;
        private m_DnsSafeHost: string;
        private m_Flags: System.Uri.Flags;
        private m_Info: any;
        private m_iriParsing: boolean;
        static UriSchemeFile: string;
        static UriSchemeFtp: string;
        static UriSchemeGopher: string;
        static UriSchemeHttp: string;
        static UriSchemeHttps: string;
        static UriSchemeWs: string;
        static UriSchemeWss: string;
        static UriSchemeMailto: string;
        static UriSchemeNews: string;
        static UriSchemeNntp: string;
        static UriSchemeNetTcp: string;
        static UriSchemeNetPipe: string;
        static SchemeDelimiter: string;
        private static s_ManagerRef: any;
        private static s_IntranetLock: any;
        private static s_ConfigInitialized: boolean;
        private static s_ConfigInitializing: boolean;
        private static s_IdnScope: System.UriIdnScope;
        private static s_IriParsing: boolean;
        private static s_initLock: any;
        static HexLowerChars: any;
        private static _WSchars: any;
        AllowIdnStatic(syntax: System.UriParser, flags: System.Uri.Flags): boolean; //{ throw new Error("Not implemented.");}
        CalculateCaseInsensitiveHashCode(text: string): number; //{ throw new Error("Not implemented.");}
        Canonicalize(): any; //{ throw new Error("Not implemented.");}
        CheckAuthorityHelper(pString: any, idx: number, length: number, err: any, flags: any, syntax: System.UriParser, newHost: any): number; //{ throw new Error("Not implemented.");}
        CheckAuthorityHelperHandleAnyHostIri(pString: any, startInput: number, end: number, iriParsing: boolean, hasUnicode: boolean, syntax: System.UriParser, flags: any, newHost: any, err: any): any; //{ throw new Error("Not implemented.");}
        CheckAuthorityHelperHandleDnsIri(pString: any, start: number, end: number, startInput: number, iriParsing: boolean, hasUnicode: boolean, syntax: System.UriParser, userInfoString: string, flags: any, justNormalized: any, newHost: any, err: any): any; //{ throw new Error("Not implemented.");}
        CheckCanonical(str: any, idx: any, end: number, delim: string): System.Uri.Check; //{ throw new Error("Not implemented.");}
        CheckForColonInFirstPathSegment(uriString: string): boolean; //{ throw new Error("Not implemented.");}
        CheckForConfigLoad(data: string): boolean; //{ throw new Error("Not implemented.");}
        CheckForEscapedUnreserved(data: string): boolean; //{ throw new Error("Not implemented.");}
        CheckForUnicode(data: string): boolean; //{ throw new Error("Not implemented.");}
        CheckHostName(name: string): System.UriHostNameType; //{ throw new Error("Not implemented.");}
        CheckKnownSchemes(lptr: any, nChars: number, syntax: any): boolean; //{ throw new Error("Not implemented.");}
        CheckSchemeName(schemeName: string): boolean; //{ throw new Error("Not implemented.");}
        CheckSchemeSyntax(ptr: any, length: number, syntax: any): System.ParsingError; //{ throw new Error("Not implemented.");}
        CheckSecurity(): any; //{ throw new Error("Not implemented.");}
        CombineUri(basePart: System.Uri, relativePart: string, uriFormat: System.UriFormat): string; //{ throw new Error("Not implemented.");}
        Compare(uri1: System.Uri, uri2: System.Uri, partsToCompare: System.UriComponents, compareFormat: System.UriFormat, comparisonType: System.StringComparison): number; //{ throw new Error("Not implemented.");}
        Compress(dest: any, start: number, destLength: any, syntax: System.UriParser): any; //{ throw new Error("Not implemented.");}
        CreateHelper(uriString: string, dontEscape: boolean, uriKind: System.UriKind, e: any): System.Uri; //{ throw new Error("Not implemented.");}
        CreateHostString(): any; //{ throw new Error("Not implemented.");}
        CreateHostStringHelper(str: string, idx: number, end: number, flags: any, scopeId: any): string; //{ throw new Error("Not implemented.");}
        CreateThis(uri: string, dontEscape: boolean, uriKind: System.UriKind): any; //{ throw new Error("Not implemented.");}
        CreateThisFromUri(otherUri: System.Uri): any; //{ throw new Error("Not implemented.");}
        CreateUri(baseUri: System.Uri, relativeUri: string, dontEscape: boolean): any; //{ throw new Error("Not implemented.");}
        CreateUriInfo(cF: System.Uri.Flags): any; //{ throw new Error("Not implemented.");}
        EnsureHostString(allowDnsOptimization: boolean): any; //{ throw new Error("Not implemented.");}
        EnsureParseRemaining(): any; //{ throw new Error("Not implemented.");}
        EnsureUriInfo(): any; //{ throw new Error("Not implemented.");}
        Equals(comparand: any): boolean; //{ throw new Error("Not implemented.");}
        Escape(): any; //{ throw new Error("Not implemented.");}
        EscapeDataString(stringToEscape: string): string; //{ throw new Error("Not implemented.");}
        EscapeString(str: string): string; //{ throw new Error("Not implemented.");}
        EscapeUnescapeIri(input: string, start: number, end: number, component: System.UriComponents): string; //{ throw new Error("Not implemented.");}
        EscapeUriString(stringToEscape: string): string; //{ throw new Error("Not implemented.");}
        FindEndOfComponent(str: any, idx: any, end: number, delim: string): any; //{ throw new Error("Not implemented.");}
        FindEndOfComponent(input: string, idx: any, end: number, delim: string): any; //{ throw new Error("Not implemented.");}
        FromHex(digit: string): number; //{ throw new Error("Not implemented.");}
        GetCanonicalPath(dest: any, pos: any, formatAs: System.UriFormat): any; //{ throw new Error("Not implemented.");}
        GetCombinedString(baseUri: System.Uri, relativeStr: string, dontEscape: boolean, result: any): System.ParsingError; //{ throw new Error("Not implemented.");}
        GetComponents(components: System.UriComponents, format: System.UriFormat): string; //{ throw new Error("Not implemented.");}
        GetComponentsHelper(uriComponents: System.UriComponents, uriFormat: System.UriFormat): string; //{ throw new Error("Not implemented.");}
        GetEscapedParts(uriParts: System.UriComponents): string; //{ throw new Error("Not implemented.");}
        GetException(err: System.ParsingError): any; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        GetHostViaCustomSyntax(): any; //{ throw new Error("Not implemented.");}
        GetLeftPart(part: System.UriPartial): string; //{ throw new Error("Not implemented.");}
        GetLocalPath(): string; //{ throw new Error("Not implemented.");}
        GetObjectData(serializationInfo: any, streamingContext: any): any; //{ throw new Error("Not implemented.");}
        GetParts(uriParts: System.UriComponents, formatAs: System.UriFormat): string; //{ throw new Error("Not implemented.");}
        GetRelativeSerializationString(format: System.UriFormat): string; //{ throw new Error("Not implemented.");}
        GetUnescapedParts(uriParts: System.UriComponents, formatAs: System.UriFormat): string; //{ throw new Error("Not implemented.");}
        GetUriPartsFromUserString(uriParts: System.UriComponents): string; //{ throw new Error("Not implemented.");}
        HexEscape(character: string): string; //{ throw new Error("Not implemented.");}
        HexUnescape(pattern: string, index: any): string; //{ throw new Error("Not implemented.");}
        InFact(flags: System.Uri.Flags): boolean; //{ throw new Error("Not implemented.");}
        InitializeUri(err: System.ParsingError, uriKind: System.UriKind, e: any): any; //{ throw new Error("Not implemented.");}
        InitializeUriConfig(): any; //{ throw new Error("Not implemented.");}
        InternalEscapeString(rawString: string): string; //{ throw new Error("Not implemented.");}
        InternalIsWellFormedOriginalString(): boolean; //{ throw new Error("Not implemented.");}
        IriParsingStatic(syntax: System.UriParser): boolean; //{ throw new Error("Not implemented.");}
        IsAsciiLetter(character: string): boolean; //{ throw new Error("Not implemented.");}
        IsAsciiLetterOrDigit(character: string): boolean; //{ throw new Error("Not implemented.");}
        IsBadFileSystemCharacter(character: string): boolean; //{ throw new Error("Not implemented.");}
        IsBaseOf(uri: System.Uri): boolean; //{ throw new Error("Not implemented.");}
        IsBaseOfHelper(uriLink: System.Uri): boolean; //{ throw new Error("Not implemented.");}
        IsBidiControlCharacter(ch: string): boolean; //{ throw new Error("Not implemented.");}
        IsExcludedCharacter(character: string): boolean; //{ throw new Error("Not implemented.");}
        IsGenDelim(ch: string): boolean; //{ throw new Error("Not implemented.");}
        IsHexDigit(character: string): boolean; //{ throw new Error("Not implemented.");}
        IsHexEncoding(pattern: string, index: number): boolean; //{ throw new Error("Not implemented.");}
        IsIntranet(schemeHost: string): boolean; //{ throw new Error("Not implemented.");}
        IsLWS(ch: string): boolean; //{ throw new Error("Not implemented.");}
        IsReservedCharacter(character: string): boolean; //{ throw new Error("Not implemented.");}
        IsWellFormedOriginalString(): boolean; //{ throw new Error("Not implemented.");}
        IsWellFormedUriString(uriString: string, uriKind: System.UriKind): boolean; //{ throw new Error("Not implemented.");}
        MakeRelative(toUri: System.Uri): string; //{ throw new Error("Not implemented.");}
        MakeRelativeUri(uri: System.Uri): System.Uri; //{ throw new Error("Not implemented.");}
        NotAny(flags: System.Uri.Flags): boolean; //{ throw new Error("Not implemented.");}
        Parse(): any; //{ throw new Error("Not implemented.");}
        ParseMinimal(): any; //{ throw new Error("Not implemented.");}
        ParseRemaining(): any; //{ throw new Error("Not implemented.");}
        ParseScheme(uriString: string, flags: any, syntax: any): System.ParsingError; //{ throw new Error("Not implemented.");}
        ParseSchemeCheckImplicitFile(uriString: any, length: number, err: any, flags: any, syntax: any): number; //{ throw new Error("Not implemented.");}
        PathDifference(path1: string, path2: string, compareCase: boolean): string; //{ throw new Error("Not implemented.");}
        PrivateParseMinimal(): System.ParsingError; //{ throw new Error("Not implemented.");}
        PrivateParseMinimalIri(newHost: string, idx: number): any; //{ throw new Error("Not implemented.");}
        ReCreateParts(parts: System.UriComponents, nonCanonical: number, formatAs: System.UriFormat): string; //{ throw new Error("Not implemented.");}
        ResolveHelper(baseUri: System.Uri, relativeUri: System.Uri, newUriString: any, userEscaped: any, e: any): System.Uri; //{ throw new Error("Not implemented.");}
        SetEscapedDotSlashSettings(uriSection: any, scheme: string): any; //{ throw new Error("Not implemented.");}
        SetUserDrivenParsing(): any; //{ throw new Error("Not implemented.");}
        StaticInFact(allFlags: System.Uri.Flags, checkFlags: System.Uri.Flags): boolean; //{ throw new Error("Not implemented.");}
        StaticIsFile(syntax: System.UriParser): boolean; //{ throw new Error("Not implemented.");}
        StaticNotAny(allFlags: System.Uri.Flags, checkFlags: System.Uri.Flags): boolean; //{ throw new Error("Not implemented.");}
        StripBidiControlCharacter(strToClean: any, start: number, length: number): string; //{ throw new Error("Not implemented.");}
        ToString(): string; //{ throw new Error("Not implemented.");}
        TryCreate(baseUri: System.Uri, relativeUri: System.Uri, result: any): boolean; //{ throw new Error("Not implemented.");}
        TryCreate(baseUri: System.Uri, relativeUri: string, result: any): boolean; //{ throw new Error("Not implemented.");}
        TryCreate(uriString: string, uriKind: System.UriKind, result: any): boolean; //{ throw new Error("Not implemented.");}
        Unescape(path: string): string; //{ throw new Error("Not implemented.");}
        UnescapeDataString(stringToUnescape: string): string; //{ throw new Error("Not implemented.");}
        UnescapeOnly(pch: any, start: number, end: any, ch1: string, ch2: string, ch3: string): any; //{ throw new Error("Not implemented.");}
    }
    export class UriParser {
        SchemeName: string;
        DefaultPort: number;
        static ShouldUseLegacyV2Quirks: boolean;
        Flags: System.UriSyntaxFlags;
        IsSimple: boolean;
        private m_Flags: System.UriSyntaxFlags;
        private m_UpdatableFlags: System.UriSyntaxFlags;
        private m_UpdatableFlagsUsed: boolean;
        private m_Port: number;
        private m_Scheme: string;
        private static m_Table: System.Collections.Generic.Dictionary<TKey, TValue>;
        private static m_TempTable: System.Collections.Generic.Dictionary<TKey, TValue>;
        static HttpUri: System.UriParser;
        static HttpsUri: System.UriParser;
        static WsUri: System.UriParser;
        static WssUri: System.UriParser;
        static FtpUri: System.UriParser;
        static FileUri: System.UriParser;
        static GopherUri: System.UriParser;
        static NntpUri: System.UriParser;
        static NewsUri: System.UriParser;
        static MailToUri: System.UriParser;
        static UuidUri: System.UriParser;
        static TelnetUri: System.UriParser;
        static LdapUri: System.UriParser;
        static NetTcpUri: System.UriParser;
        static NetPipeUri: System.UriParser;
        static VsMacrosUri: System.UriParser;
        private static s_QuirksVersion: System.UriParser.UriQuirksVersion;
        private static HttpSyntaxFlags: System.UriSyntaxFlags;
        private static FileSyntaxFlags: System.UriSyntaxFlags;
        CheckSetIsSimpleFlag(): any; //{ throw new Error("Not implemented.");}
        FetchSyntax(syntax: System.UriParser, lwrCaseSchemeName: string, defaultPort: number): any; //{ throw new Error("Not implemented.");}
        FindOrFetchAsUnknownV1Syntax(lwrCaseScheme: string): System.UriParser; //{ throw new Error("Not implemented.");}
        GetComponents(uri: System.Uri, components: System.UriComponents, format: System.UriFormat): string; //{ throw new Error("Not implemented.");}
        GetSyntax(lwrCaseScheme: string): System.UriParser; //{ throw new Error("Not implemented.");}
        InFact(flags: System.UriSyntaxFlags): boolean; //{ throw new Error("Not implemented.");}
        InitializeAndValidate(uri: System.Uri, parsingError: any): any; //{ throw new Error("Not implemented.");}
        InternalGetComponents(thisUri: System.Uri, uriComponents: System.UriComponents, uriFormat: System.UriFormat): string; //{ throw new Error("Not implemented.");}
        InternalIsBaseOf(thisBaseUri: System.Uri, uriLink: System.Uri): boolean; //{ throw new Error("Not implemented.");}
        InternalIsWellFormedOriginalString(thisUri: System.Uri): boolean; //{ throw new Error("Not implemented.");}
        InternalOnNewUri(): System.UriParser; //{ throw new Error("Not implemented.");}
        InternalResolve(thisBaseUri: System.Uri, uriLink: System.Uri, parsingError: any): string; //{ throw new Error("Not implemented.");}
        InternalValidate(thisUri: System.Uri, parsingError: any): any; //{ throw new Error("Not implemented.");}
        IsAllSet(flags: System.UriSyntaxFlags): boolean; //{ throw new Error("Not implemented.");}
        IsBaseOf(baseUri: System.Uri, relativeUri: System.Uri): boolean; //{ throw new Error("Not implemented.");}
        IsFullMatch(flags: System.UriSyntaxFlags, expected: System.UriSyntaxFlags): boolean; //{ throw new Error("Not implemented.");}
        IsKnownScheme(schemeName: string): boolean; //{ throw new Error("Not implemented.");}
        IsWellFormedOriginalString(uri: System.Uri): boolean; //{ throw new Error("Not implemented.");}
        NotAny(flags: System.UriSyntaxFlags): boolean; //{ throw new Error("Not implemented.");}
        OnNewUri(): System.UriParser; //{ throw new Error("Not implemented.");}
        OnRegister(schemeName: string, defaultPort: number): any; //{ throw new Error("Not implemented.");}
        Register(uriParser: System.UriParser, schemeName: string, defaultPort: number): any; //{ throw new Error("Not implemented.");}
        Resolve(baseUri: System.Uri, relativeUri: System.Uri, parsingError: any): string; //{ throw new Error("Not implemented.");}
        SetUpdatableFlags(flags: System.UriSyntaxFlags): any; //{ throw new Error("Not implemented.");}
    }
    export class Version {
        Major: number;
        Minor: number;
        Build: number;
        Revision: number;
        MajorRevision: number;
        MinorRevision: number;
        private _Major: number;
        private _Minor: number;
        private _Build: number;
        private _Revision: number;
        private static SeparatorsArray: any;
        AppendPositiveNumber(num: number, sb: any): any; //{ throw new Error("Not implemented.");}
        Clone(): any; //{ throw new Error("Not implemented.");}
        CompareTo(version: any): number; //{ throw new Error("Not implemented.");}
        CompareTo(value: System.Version): number; //{ throw new Error("Not implemented.");}
        Equals(obj: any): boolean; //{ throw new Error("Not implemented.");}
        Equals(obj: System.Version): boolean; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        Parse(input: string): System.Version; //{ throw new Error("Not implemented.");}
        ToString(): string; //{ throw new Error("Not implemented.");}
        ToString(fieldCount: number): string; //{ throw new Error("Not implemented.");}
        TryParse(input: string, result: any): boolean; //{ throw new Error("Not implemented.");}
        TryParseComponent(component: string, componentName: string, result: any, parsedComponent: any): boolean; //{ throw new Error("Not implemented.");}
        TryParseVersion(version: string, result: any): boolean; //{ throw new Error("Not implemented.");}
    }
}
declare module System.Collections {
    export class ArrayList {
        Capacity: number;
        Count: number;
        IsFixedSize: boolean;
        IsReadOnly: boolean;
        IsSynchronized: boolean;
        SyncRoot: any;
        Item: any;
        private _items: any;
        private _size: number;
        private _version: number;
        private _syncRoot: any;
        private static emptyArray: any;
        Adapter(list: System.Collections.IList): System.Collections.ArrayList; //{ throw new Error("Not implemented.");}
        Add(value: any): number; //{ throw new Error("Not implemented.");}
        AddRange(c: System.Collections.ICollection): any; //{ throw new Error("Not implemented.");}
        BinarySearch(index: number, count: number, value: any, comparer: System.Collections.IComparer): number; //{ throw new Error("Not implemented.");}
        BinarySearch(value: any): number; //{ throw new Error("Not implemented.");}
        BinarySearch(value: any, comparer: System.Collections.IComparer): number; //{ throw new Error("Not implemented.");}
        Clear(): any; //{ throw new Error("Not implemented.");}
        Clone(): any; //{ throw new Error("Not implemented.");}
        Contains(item: any): boolean; //{ throw new Error("Not implemented.");}
        CopyTo(array: System.Array): any; //{ throw new Error("Not implemented.");}
        CopyTo(array: System.Array, arrayIndex: number): any; //{ throw new Error("Not implemented.");}
        CopyTo(index: number, array: System.Array, arrayIndex: number, count: number): any; //{ throw new Error("Not implemented.");}
        EnsureCapacity(min: number): any; //{ throw new Error("Not implemented.");}
        FixedSize(list: System.Collections.ArrayList): System.Collections.ArrayList; //{ throw new Error("Not implemented.");}
        FixedSize(list: System.Collections.IList): System.Collections.IList; //{ throw new Error("Not implemented.");}
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
        GetEnumerator(index: number, count: number): any; //{ throw new Error("Not implemented.");}
        GetRange(index: number, count: number): System.Collections.ArrayList; //{ throw new Error("Not implemented.");}
        IndexOf(value: any): number; //{ throw new Error("Not implemented.");}
        IndexOf(value: any, startIndex: number): number; //{ throw new Error("Not implemented.");}
        IndexOf(value: any, startIndex: number, count: number): number; //{ throw new Error("Not implemented.");}
        Insert(index: number, value: any): any; //{ throw new Error("Not implemented.");}
        InsertRange(index: number, c: System.Collections.ICollection): any; //{ throw new Error("Not implemented.");}
        LastIndexOf(value: any): number; //{ throw new Error("Not implemented.");}
        LastIndexOf(value: any, startIndex: number): number; //{ throw new Error("Not implemented.");}
        LastIndexOf(value: any, startIndex: number, count: number): number; //{ throw new Error("Not implemented.");}
        ReadOnly(list: System.Collections.IList): System.Collections.IList; //{ throw new Error("Not implemented.");}
        ReadOnly(list: System.Collections.ArrayList): System.Collections.ArrayList; //{ throw new Error("Not implemented.");}
        Remove(obj: any): any; //{ throw new Error("Not implemented.");}
        RemoveAt(index: number): any; //{ throw new Error("Not implemented.");}
        RemoveRange(index: number, count: number): any; //{ throw new Error("Not implemented.");}
        Repeat(value: any, count: number): System.Collections.ArrayList; //{ throw new Error("Not implemented.");}
        Reverse(): any; //{ throw new Error("Not implemented.");}
        Reverse(index: number, count: number): any; //{ throw new Error("Not implemented.");}
        SetRange(index: number, c: System.Collections.ICollection): any; //{ throw new Error("Not implemented.");}
        Sort(): any; //{ throw new Error("Not implemented.");}
        Sort(comparer: System.Collections.IComparer): any; //{ throw new Error("Not implemented.");}
        Sort(index: number, count: number, comparer: System.Collections.IComparer): any; //{ throw new Error("Not implemented.");}
        Synchronized(list: System.Collections.IList): System.Collections.IList; //{ throw new Error("Not implemented.");}
        Synchronized(list: System.Collections.ArrayList): System.Collections.ArrayList; //{ throw new Error("Not implemented.");}
        ToArray(): any; //{ throw new Error("Not implemented.");}
        ToArray(type: System.Type): System.Array; //{ throw new Error("Not implemented.");}
        TrimToSize(): any; //{ throw new Error("Not implemented.");}
    }
    export class CollectionBase {
        InnerList: System.Collections.ArrayList;
        List: System.Collections.IList;
        Capacity: number;
        Count: number;
		private System.Collections.IList.IsReadOnly: boolean;
		private System.Collections.IList.IsFixedSize: boolean;
		private System.Collections.ICollection.IsSynchronized: boolean;
		private System.Collections.ICollection.SyncRoot: any;
		private System.Collections.IList.Item: any;
        private list: System.Collections.ArrayList;
        Clear(): any; //{ throw new Error("Not implemented.");}
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
        OnClear(): any; //{ throw new Error("Not implemented.");}
        OnClearComplete(): any; //{ throw new Error("Not implemented.");}
        OnInsert(index: number, value: any): any; //{ throw new Error("Not implemented.");}
        OnInsertComplete(index: number, value: any): any; //{ throw new Error("Not implemented.");}
        OnRemove(index: number, value: any): any; //{ throw new Error("Not implemented.");}
        OnRemoveComplete(index: number, value: any): any; //{ throw new Error("Not implemented.");}
        OnSet(index: number, oldValue: any, newValue: any): any; //{ throw new Error("Not implemented.");}
        OnSetComplete(index: number, oldValue: any, newValue: any): any; //{ throw new Error("Not implemented.");}
        OnValidate(value: any): any; //{ throw new Error("Not implemented.");}
        RemoveAt(index: number): any; //{ throw new Error("Not implemented.");}
    }
    export class Hashtable {
        hcp: System.Collections.IHashCodeProvider;
        comparer: System.Collections.IComparer;
        EqualityComparer: System.Collections.IEqualityComparer;
        Item: any;
        IsReadOnly: boolean;
        IsFixedSize: boolean;
        IsSynchronized: boolean;
        Keys: System.Collections.ICollection;
        Values: System.Collections.ICollection;
        SyncRoot: any;
        Count: number;
        private buckets: any;
        private count: number;
        private occupancy: number;
        private loadsize: number;
        private loadFactor: number;
        private version: number;
        private isWriterInProgress: boolean;
        private keys: System.Collections.ICollection;
        private values: System.Collections.ICollection;
        private _keycomparer: System.Collections.IEqualityComparer;
        private _syncRoot: any;
        Add(key: any, value: any): any; //{ throw new Error("Not implemented.");}
        Clear(): any; //{ throw new Error("Not implemented.");}
        Clone(): any; //{ throw new Error("Not implemented.");}
        Contains(key: any): boolean; //{ throw new Error("Not implemented.");}
        ContainsKey(key: any): boolean; //{ throw new Error("Not implemented.");}
        ContainsValue(value: any): boolean; //{ throw new Error("Not implemented.");}
        CopyEntries(array: System.Array, arrayIndex: number): any; //{ throw new Error("Not implemented.");}
        CopyKeys(array: System.Array, arrayIndex: number): any; //{ throw new Error("Not implemented.");}
        CopyTo(array: System.Array, arrayIndex: number): any; //{ throw new Error("Not implemented.");}
        CopyValues(array: System.Array, arrayIndex: number): any; //{ throw new Error("Not implemented.");}
        expand(): any; //{ throw new Error("Not implemented.");}
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
        GetHash(key: any): number; //{ throw new Error("Not implemented.");}
        GetObjectData(info: any, context: any): any; //{ throw new Error("Not implemented.");}
        InitHash(key: any, hashsize: number, seed: any, incr: any): number; //{ throw new Error("Not implemented.");}
        Insert(key: any, nvalue: any, add: boolean): any; //{ throw new Error("Not implemented.");}
        KeyEquals(item: any, key: any): boolean; //{ throw new Error("Not implemented.");}
        OnDeserialization(sender: any): any; //{ throw new Error("Not implemented.");}
        putEntry(newBuckets: any, key: any, nvalue: any, hashcode: number): any; //{ throw new Error("Not implemented.");}
        rehash(newsize: number, forceNewHashCode: boolean): any; //{ throw new Error("Not implemented.");}
        rehash(): any; //{ throw new Error("Not implemented.");}
        Remove(key: any): any; //{ throw new Error("Not implemented.");}
        Synchronized(table: System.Collections.Hashtable): System.Collections.Hashtable; //{ throw new Error("Not implemented.");}
        ToKeyValuePairsArray(): any; //{ throw new Error("Not implemented.");}
        UpdateVersion(): any; //{ throw new Error("Not implemented.");}
    }
    interface ICollection {
        Count: number;
        SyncRoot: any;
        IsSynchronized: boolean;
        CopyTo(array: System.Array, index: number): any;
    }
    interface IComparer {
        Compare(x: any, y: any): number;
    }
    interface IDictionary {
        Item: any;
        Keys: System.Collections.ICollection;
        Values: System.Collections.ICollection;
        IsReadOnly: boolean;
        IsFixedSize: boolean;
        Add(key: any, value: any): any;
        Clear(): any;
        Contains(key: any): boolean;
        GetEnumerator(): any;
        Remove(key: any): any;
    }
    interface IEqualityComparer {
        Equals(x: any, y: any): boolean;
        GetHashCode(obj: any): number;
    }
    interface IHashCodeProvider {
        GetHashCode(obj: any): number;
    }
    interface IList {
        Item: any;
        IsReadOnly: boolean;
        IsFixedSize: boolean;
        Add(value: any): number;
        Clear(): any;
        Contains(value: any): boolean;
        IndexOf(value: any): number;
        Insert(index: number, value: any): any;
        Remove(value: any): any;
        RemoveAt(index: number): any;
    }
    export class SortedList {
        Capacity: number;
        Count: number;
        Keys: System.Collections.ICollection;
        Values: System.Collections.ICollection;
        IsReadOnly: boolean;
        IsFixedSize: boolean;
        IsSynchronized: boolean;
        SyncRoot: any;
        Item: any;
        private keys: any;
        private values: any;
        private _size: number;
        private version: number;
        private comparer: System.Collections.IComparer;
        private keyList: any;
        private valueList: any;
        private _syncRoot: any;
        private static emptyArray: any;
        Add(key: any, value: any): any; //{ throw new Error("Not implemented.");}
        Clear(): any; //{ throw new Error("Not implemented.");}
        Clone(): any; //{ throw new Error("Not implemented.");}
        Contains(key: any): boolean; //{ throw new Error("Not implemented.");}
        ContainsKey(key: any): boolean; //{ throw new Error("Not implemented.");}
        ContainsValue(value: any): boolean; //{ throw new Error("Not implemented.");}
        CopyTo(array: System.Array, arrayIndex: number): any; //{ throw new Error("Not implemented.");}
        EnsureCapacity(min: number): any; //{ throw new Error("Not implemented.");}
        GetByIndex(index: number): any; //{ throw new Error("Not implemented.");}
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
        GetKey(index: number): any; //{ throw new Error("Not implemented.");}
        GetKeyList(): System.Collections.IList; //{ throw new Error("Not implemented.");}
        GetValueList(): System.Collections.IList; //{ throw new Error("Not implemented.");}
        IndexOfKey(key: any): number; //{ throw new Error("Not implemented.");}
        IndexOfValue(value: any): number; //{ throw new Error("Not implemented.");}
        Init(): any; //{ throw new Error("Not implemented.");}
        Insert(index: number, key: any, value: any): any; //{ throw new Error("Not implemented.");}
        Remove(key: any): any; //{ throw new Error("Not implemented.");}
        RemoveAt(index: number): any; //{ throw new Error("Not implemented.");}
        SetByIndex(index: number, value: any): any; //{ throw new Error("Not implemented.");}
        Synchronized(list: System.Collections.SortedList): System.Collections.SortedList; //{ throw new Error("Not implemented.");}
        ToKeyValuePairsArray(): any; //{ throw new Error("Not implemented.");}
        TrimToSize(): any; //{ throw new Error("Not implemented.");}
    }
}
declare module System.Collections.Generic {
	 export class Dictionary<TKey, TValue> {
        Comparer: System.Collections.Generic.IEqualityComparer<TKey>;
        Count: number;
        Keys: System.Collections.Generic.Dictionary`2.KeyCollection<TKey, TValue>;
		private System.Collections.Generic.IDictionary<TKey, TValue>.Keys: System.Collections.Generic.ICollection<TKey>;
		private System.Collections.Generic.IReadOnlyDictionary<TKey, TValue>.Keys: System.Collections.Generic.IEnumerable<TKey>;
        Values: System.Collections.Generic.Dictionary`2.ValueCollection<TKey, TValue>;
		private System.Collections.Generic.IDictionary<TKey, TValue>.Values: System.Collections.Generic.ICollection<TValue>;
		private System.Collections.Generic.IReadOnlyDictionary<TKey, TValue>.Values: System.Collections.Generic.IEnumerable<TValue>;
        Item: TValue;
		private System.Collections.Generic.ICollection<System.Collections.Generic.KeyValuePair<TKey, TValue >>.IsReadOnly: boolean;
		private System.Collections.ICollection.IsSynchronized: boolean;
		private System.Collections.ICollection.SyncRoot: any;
		private System.Collections.IDictionary.IsFixedSize: boolean;
		private System.Collections.IDictionary.IsReadOnly: boolean;
		private System.Collections.IDictionary.Keys: System.Collections.ICollection;
		private System.Collections.IDictionary.Values: System.Collections.ICollection;
		private System.Collections.IDictionary.Item: any;
		private buckets: System.Int32[];
		private entries: any;
		private count: number;
		private version: number;
		private freeList: number;
		private freeCount: number;
		private comparer: System.Collections.Generic.IEqualityComparer < TKey>;
		private keys: System.Collections.Generic.Dictionary`2.KeyCollection < TKey, TValue>;
		private values: System.Collections.Generic.Dictionary`2.ValueCollection < TKey, TValue>;
		private _syncRoot: any;
    Add(key: TKey, value: TValue): any; //{ throw new Error("Not implemented.");}
    Clear(): any; //{ throw new Error("Not implemented.");}
    ContainsKey(key: TKey): boolean; //{ throw new Error("Not implemented.");}
    ContainsValue(value: TValue): boolean; //{ throw new Error("Not implemented.");}
    CopyTo(array: any, index: number): any; //{ throw new Error("Not implemented.");}
    FindEntry(key: TKey): number; //{ throw new Error("Not implemented.");}
    GetEnumerator(): any; //{ throw new Error("Not implemented.");}
    GetObjectData(info: any, context: any): any; //{ throw new Error("Not implemented.");}
    GetValueOrDefault(key: TKey): TValue; //{ throw new Error("Not implemented.");}
    Initialize(capacity: number): any; //{ throw new Error("Not implemented.");}
    Insert(key: TKey, value: TValue, add: boolean): any; //{ throw new Error("Not implemented.");}
    IsCompatibleKey(key: any): boolean; //{ throw new Error("Not implemented.");}
    OnDeserialization(sender: any): any; //{ throw new Error("Not implemented.");}
    Remove(key: TKey): boolean; //{ throw new Error("Not implemented.");}
    Resize(newSize: number, forceNewHashCodes: boolean): any; //{ throw new Error("Not implemented.");}
    Resize(): any; //{ throw new Error("Not implemented.");}
    TryGetValue(key: TKey, value: any): boolean; //{ throw new Error("Not implemented.");}
}
interface ICollection<T> {
    Count: number;
    IsReadOnly: boolean;
    Add(item: T): any;
    Clear(): any;
    Contains(item: T): boolean;
    CopyTo(array: any, arrayIndex: number): any;
    Remove(item: T): boolean;
}
interface IDictionary<TKey, TValue> {
    Item: TValue;
    Keys: System.Collections.Generic.ICollection<TKey>;
    Values: System.Collections.Generic.ICollection<TValue>;
    Add(key: TKey, value: TValue): any;
    ContainsKey(key: TKey): boolean;
    Remove(key: TKey): boolean;
    TryGetValue(key: TKey, value: any): boolean;
}
interface IEnumerable<T> {
    GetEnumerator(): any;
}
interface IEqualityComparer<T> {
    Equals(x: T, y: T): boolean;
    GetHashCode(obj: T): number;
}
interface IList<T> {
    Item: T;
    IndexOf(item: T): number;
    Insert(index: number, item: T): any;
    RemoveAt(index: number): any;
}
class KeyValuePair<TKey, TValue> {
    Key: TKey;
    Value: TValue;
    private key: TKey;
    private value: TValue;
    ToString(): string; //{ throw new Error("Not implemented.");}
}
	 export class List<T> {
    Capacity: number;
    Count: number;
		private System.Collections.IList.IsFixedSize: boolean;
		private System.Collections.Generic.ICollection<T>.IsReadOnly: boolean;
		private System.Collections.IList.IsReadOnly: boolean;
		private System.Collections.ICollection.IsSynchronized: boolean;
		private System.Collections.ICollection.SyncRoot: any;
    Item: T;
		private System.Collections.IList.Item: any;
    private _items: any;
    private _size: number;
    private _version: number;
    private _syncRoot: any;
    private static _emptyArray: any;
    Add(item: T): any; //{ throw new Error("Not implemented.");}
    AddRange(collection: System.Collections.Generic.IEnumerable<T>): any; //{ throw new Error("Not implemented.");}
    AsReadOnly(): any; //{ throw new Error("Not implemented.");}
    BinarySearch(index: number, count: number, item: T, comparer: any): number; //{ throw new Error("Not implemented.");}
    BinarySearch(item: T): number; //{ throw new Error("Not implemented.");}
    BinarySearch(item: T, comparer: any): number; //{ throw new Error("Not implemented.");}
    Clear(): any; //{ throw new Error("Not implemented.");}
    Contains(item: T): boolean; //{ throw new Error("Not implemented.");}
    ConvertAll(converter: any): System.Collections.Generic.List<T>; //{ throw new Error("Not implemented.");}
    CopyTo(array: any): any; //{ throw new Error("Not implemented.");}
    CopyTo(index: number, array: any, arrayIndex: number, count: number): any; //{ throw new Error("Not implemented.");}
    CopyTo(array: any, arrayIndex: number): any; //{ throw new Error("Not implemented.");}
    EnsureCapacity(min: number): any; //{ throw new Error("Not implemented.");}
    Exists(match: any): boolean; //{ throw new Error("Not implemented.");}
    Find(match: any): T; //{ throw new Error("Not implemented.");}
    FindAll(match: any): System.Collections.Generic.List<T>; //{ throw new Error("Not implemented.");}
    FindIndex(startIndex: number, count: number, match: any): number; //{ throw new Error("Not implemented.");}
    FindIndex(startIndex: number, match: any): number; //{ throw new Error("Not implemented.");}
    FindIndex(match: any): number; //{ throw new Error("Not implemented.");}
    FindLast(match: any): T; //{ throw new Error("Not implemented.");}
    FindLastIndex(match: any): number; //{ throw new Error("Not implemented.");}
    FindLastIndex(startIndex: number, match: any): number; //{ throw new Error("Not implemented.");}
    FindLastIndex(startIndex: number, count: number, match: any): number; //{ throw new Error("Not implemented.");}
    ForEach(action: any): any; //{ throw new Error("Not implemented.");}
    GetEnumerator(): any; //{ throw new Error("Not implemented.");}
    GetRange(index: number, count: number): System.Collections.Generic.List<T>; //{ throw new Error("Not implemented.");}
    IndexOf(item: T, index: number): number; //{ throw new Error("Not implemented.");}
    IndexOf(item: T, index: number, count: number): number; //{ throw new Error("Not implemented.");}
    IndexOf(item: T): number; //{ throw new Error("Not implemented.");}
    Insert(index: number, item: T): any; //{ throw new Error("Not implemented.");}
    InsertRange(index: number, collection: System.Collections.Generic.IEnumerable<T>): any; //{ throw new Error("Not implemented.");}
    IsCompatibleObject(value: any): boolean; //{ throw new Error("Not implemented.");}
    LastIndexOf(item: T): number; //{ throw new Error("Not implemented.");}
    LastIndexOf(item: T, index: number, count: number): number; //{ throw new Error("Not implemented.");}
    LastIndexOf(item: T, index: number): number; //{ throw new Error("Not implemented.");}
    Remove(item: T): boolean; //{ throw new Error("Not implemented.");}
    RemoveAll(match: any): number; //{ throw new Error("Not implemented.");}
    RemoveAt(index: number): any; //{ throw new Error("Not implemented.");}
    RemoveRange(index: number, count: number): any; //{ throw new Error("Not implemented.");}
    Reverse(index: number, count: number): any; //{ throw new Error("Not implemented.");}
    Reverse(): any; //{ throw new Error("Not implemented.");}
    Sort(comparison: any): any; //{ throw new Error("Not implemented.");}
    Sort(index: number, count: number, comparer: any): any; //{ throw new Error("Not implemented.");}
    Sort(comparer: any): any; //{ throw new Error("Not implemented.");}
    Sort(): any; //{ throw new Error("Not implemented.");}
    Synchronized(list: System.Collections.Generic.List<T>): System.Collections.Generic.IList<T>; //{ throw new Error("Not implemented.");}
    ToArray(): any; //{ throw new Error("Not implemented.");}
    TrimExcess(): any; //{ throw new Error("Not implemented.");}
    TrueForAll(match: any): boolean; //{ throw new Error("Not implemented.");}
	}
}
declare module System.Collections.Generic.Dictionary`2 {
	 export class KeyCollection<TKey, TValue> {
    Count: number;
		private System.Collections.Generic.ICollection<TKey>.IsReadOnly: boolean;
		private System.Collections.ICollection.IsSynchronized: boolean;
		private System.Collections.ICollection.SyncRoot: any;
    private dictionary: System.Collections.Generic.Dictionary<TKey, TValue>;
    CopyTo(array: any, index: number): any; //{ throw new Error("Not implemented.");}
    GetEnumerator(): any; //{ throw new Error("Not implemented.");}
}
	 export class ValueCollection<TKey, TValue> {
    Count: number;
		private System.Collections.Generic.ICollection<TValue>.IsReadOnly: boolean;
		private System.Collections.ICollection.IsSynchronized: boolean;
		private System.Collections.ICollection.SyncRoot: any;
    private dictionary: System.Collections.Generic.Dictionary<TKey, TValue>;
    CopyTo(array: any, index: number): any; //{ throw new Error("Not implemented.");}
    GetEnumerator(): any; //{ throw new Error("Not implemented.");}
	}
}
declare module System.Collections.ObjectModel {
    export class Collection<T> {
        Count: number;
        Items: System.Collections.Generic.IList<T>;
        Item: T;
		private System.Collections.Generic.ICollection<T>.IsReadOnly: boolean;
		private System.Collections.ICollection.IsSynchronized: boolean;
		private System.Collections.ICollection.SyncRoot: any;
		private System.Collections.IList.Item: any;
		private System.Collections.IList.IsReadOnly: boolean;
		private System.Collections.IList.IsFixedSize: boolean;
        private items: System.Collections.Generic.IList<T>;
        private _syncRoot: any;
        Add(item: T): any; //{ throw new Error("Not implemented.");}
        Clear(): any; //{ throw new Error("Not implemented.");}
        ClearItems(): any; //{ throw new Error("Not implemented.");}
        Contains(item: T): boolean; //{ throw new Error("Not implemented.");}
        CopyTo(array: any, index: number): any; //{ throw new Error("Not implemented.");}
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
        IndexOf(item: T): number; //{ throw new Error("Not implemented.");}
        Insert(index: number, item: T): any; //{ throw new Error("Not implemented.");}
        InsertItem(index: number, item: T): any; //{ throw new Error("Not implemented.");}
        IsCompatibleObject(value: any): boolean; //{ throw new Error("Not implemented.");}
        Remove(item: T): boolean; //{ throw new Error("Not implemented.");}
        RemoveAt(index: number): any; //{ throw new Error("Not implemented.");}
        RemoveItem(index: number): any; //{ throw new Error("Not implemented.");}
        SetItem(index: number, item: T): any; //{ throw new Error("Not implemented.");}
    }
}
declare module System.Collections.Specialized {
    export class NameObjectCollectionBase {
        Comparer: System.Collections.IEqualityComparer;
        IsReadOnly: boolean;
        Count: number;
		private System.Collections.ICollection.SyncRoot: any;
		private System.Collections.ICollection.IsSynchronized: boolean;
        Keys: System.Collections.Specialized.NameObjectCollectionBase.KeysCollection;
        private _readOnly: boolean;
        private _entriesArray: System.Collections.ArrayList;
        private _keyComparer: System.Collections.IEqualityComparer;
        private _entriesTable: System.Collections.Hashtable;
        private _nullKeyEntry: any;
        private _keys: System.Collections.Specialized.NameObjectCollectionBase.KeysCollection;
        private _serializationInfo: any;
        private _version: number;
        private _syncRoot: any;
        private static defaultComparer: any;
        BaseAdd(name: string, value: any): any; //{ throw new Error("Not implemented.");}
        BaseClear(): any; //{ throw new Error("Not implemented.");}
        BaseGet(index: number): any; //{ throw new Error("Not implemented.");}
        BaseGet(name: string): any; //{ throw new Error("Not implemented.");}
        BaseGetAllKeys(): System.String[]; //{ throw new Error("Not implemented.");}
        BaseGetAllValues(type: System.Type): any; //{ throw new Error("Not implemented.");}
        BaseGetAllValues(): any; //{ throw new Error("Not implemented.");}
        BaseGetKey(index: number): string; //{ throw new Error("Not implemented.");}
        BaseHasKeys(): boolean; //{ throw new Error("Not implemented.");}
        BaseRemove(name: string): any; //{ throw new Error("Not implemented.");}
        BaseRemoveAt(index: number): any; //{ throw new Error("Not implemented.");}
        BaseSet(name: string, value: any): any; //{ throw new Error("Not implemented.");}
        BaseSet(index: number, value: any): any; //{ throw new Error("Not implemented.");}
        FindEntry(key: string): any; //{ throw new Error("Not implemented.");}
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
        GetObjectData(info: any, context: any): any; //{ throw new Error("Not implemented.");}
        OnDeserialization(sender: any): any; //{ throw new Error("Not implemented.");}
        Reset(capacity: number): any; //{ throw new Error("Not implemented.");}
        Reset(): any; //{ throw new Error("Not implemented.");}
    }
    export class NameValueCollection extends System.Collections.Specialized.NameObjectCollectionBase {
        Item: string;
        Item: string;
        AllKeys: System.String[];
        private _all: System.String[];
        private _allKeys: System.String[];
        Add(c: System.Collections.Specialized.NameValueCollection): any; //{ throw new Error("Not implemented.");}
        Add(name: string, value: string): any; //{ throw new Error("Not implemented.");}
        Clear(): any; //{ throw new Error("Not implemented.");}
        CopyTo(dest: System.Array, index: number): any; //{ throw new Error("Not implemented.");}
        Get(name: string): string; //{ throw new Error("Not implemented.");}
        Get(index: number): string; //{ throw new Error("Not implemented.");}
        GetAsOneString(list: System.Collections.ArrayList): string; //{ throw new Error("Not implemented.");}
        GetAsStringArray(list: System.Collections.ArrayList): System.String[]; //{ throw new Error("Not implemented.");}
        GetKey(index: number): string; //{ throw new Error("Not implemented.");}
        GetValues(name: string): System.String[]; //{ throw new Error("Not implemented.");}
        GetValues(index: number): System.String[]; //{ throw new Error("Not implemented.");}
        HasKeys(): boolean; //{ throw new Error("Not implemented.");}
        InternalHasKeys(): boolean; //{ throw new Error("Not implemented.");}
        InvalidateCachedArrays(): any; //{ throw new Error("Not implemented.");}
        Remove(name: string): any; //{ throw new Error("Not implemented.");}
        Set(name: string, value: string): any; //{ throw new Error("Not implemented.");}
    }
}
declare module System.Collections.Specialized.NameObjectCollectionBase {
    export class KeysCollection {
        Item: string;
        Count: number;
		private System.Collections.ICollection.SyncRoot: any;
		private System.Collections.ICollection.IsSynchronized: boolean;
        private _coll: System.Collections.Specialized.NameObjectCollectionBase;
        Get(index: number): string; //{ throw new Error("Not implemented.");}
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
    }
}
declare module System.ComponentModel {
    export class Win32Exception extends System.Runtime.InteropServices.ExternalException {
        NativeErrorCode: number;
        private nativeErrorCode: number;
        GetErrorMessage(error: number): string; //{ throw new Error("Not implemented.");}
        GetObjectData(info: any, context: any): any; //{ throw new Error("Not implemented.");}
    }
}
declare module System.Globalization {
    export class Calendar {
        MinSupportedDateTime: Date;
        MaxSupportedDateTime: Date;
        ID: number;
        BaseCalendarID: number;
        AlgorithmType: System.Globalization.CalendarAlgorithmType;
        IsReadOnly: boolean;
        CurrentEraValue: number;
        Eras: System.Int32[];
        DaysInYearBeforeMinSupportedYear: number;
        TwoDigitYearMax: number;
        m_currentEraValue: number;
        private m_isReadOnly: boolean;
        twoDigitYearMax: number;
        Add(time: Date, value: number, scale: number): Date; //{ throw new Error("Not implemented.");}
        AddDays(time: Date, days: number): Date; //{ throw new Error("Not implemented.");}
        AddHours(time: Date, hours: number): Date; //{ throw new Error("Not implemented.");}
        AddMilliseconds(time: Date, milliseconds: number): Date; //{ throw new Error("Not implemented.");}
        AddMinutes(time: Date, minutes: number): Date; //{ throw new Error("Not implemented.");}
        AddMonths(time: Date, months: number): Date; //{ throw new Error("Not implemented.");}
        AddSeconds(time: Date, seconds: number): Date; //{ throw new Error("Not implemented.");}
        AddWeeks(time: Date, weeks: number): Date; //{ throw new Error("Not implemented.");}
        AddYears(time: Date, years: number): Date; //{ throw new Error("Not implemented.");}
        CheckAddResult(ticks: number, minValue: Date, maxValue: Date): any; //{ throw new Error("Not implemented.");}
        Clone(): any; //{ throw new Error("Not implemented.");}
        GetDayOfMonth(time: Date): number; //{ throw new Error("Not implemented.");}
        GetDayOfWeek(time: Date): System.DayOfWeek; //{ throw new Error("Not implemented.");}
        GetDayOfYear(time: Date): number; //{ throw new Error("Not implemented.");}
        GetDaysInMonth(year: number, month: number): number; //{ throw new Error("Not implemented.");}
        GetDaysInMonth(year: number, month: number, era: number): number; //{ throw new Error("Not implemented.");}
        GetDaysInYear(year: number): number; //{ throw new Error("Not implemented.");}
        GetDaysInYear(year: number, era: number): number; //{ throw new Error("Not implemented.");}
        GetEra(time: Date): number; //{ throw new Error("Not implemented.");}
        GetFirstDayWeekOfYear(time: Date, firstDayOfWeek: number): number; //{ throw new Error("Not implemented.");}
        GetHour(time: Date): number; //{ throw new Error("Not implemented.");}
        GetLeapMonth(year: number): number; //{ throw new Error("Not implemented.");}
        GetLeapMonth(year: number, era: number): number; //{ throw new Error("Not implemented.");}
        GetMilliseconds(time: Date): number; //{ throw new Error("Not implemented.");}
        GetMinute(time: Date): number; //{ throw new Error("Not implemented.");}
        GetMonth(time: Date): number; //{ throw new Error("Not implemented.");}
        GetMonthsInYear(year: number): number; //{ throw new Error("Not implemented.");}
        GetMonthsInYear(year: number, era: number): number; //{ throw new Error("Not implemented.");}
        GetSecond(time: Date): number; //{ throw new Error("Not implemented.");}
        GetSystemTwoDigitYearSetting(CalID: number, defaultYearValue: number): number; //{ throw new Error("Not implemented.");}
        GetWeekOfYear(time: Date, rule: System.Globalization.CalendarWeekRule, firstDayOfWeek: System.DayOfWeek): number; //{ throw new Error("Not implemented.");}
        GetWeekOfYearFullDays(time: Date, firstDayOfWeek: number, fullDays: number): number; //{ throw new Error("Not implemented.");}
        GetWeekOfYearOfMinSupportedDateTime(firstDayOfWeek: number, minimumDaysInFirstWeek: number): number; //{ throw new Error("Not implemented.");}
        GetYear(time: Date): number; //{ throw new Error("Not implemented.");}
        IsLeapDay(year: number, month: number, day: number, era: number): boolean; //{ throw new Error("Not implemented.");}
        IsLeapDay(year: number, month: number, day: number): boolean; //{ throw new Error("Not implemented.");}
        IsLeapMonth(year: number, month: number): boolean; //{ throw new Error("Not implemented.");}
        IsLeapMonth(year: number, month: number, era: number): boolean; //{ throw new Error("Not implemented.");}
        IsLeapYear(year: number, era: number): boolean; //{ throw new Error("Not implemented.");}
        IsLeapYear(year: number): boolean; //{ throw new Error("Not implemented.");}
        IsValidDay(year: number, month: number, day: number, era: number): boolean; //{ throw new Error("Not implemented.");}
        IsValidMonth(year: number, month: number, era: number): boolean; //{ throw new Error("Not implemented.");}
        IsValidYear(year: number, era: number): boolean; //{ throw new Error("Not implemented.");}
        ReadOnly(calendar: System.Globalization.Calendar): System.Globalization.Calendar; //{ throw new Error("Not implemented.");}
        SetReadOnlyState(readOnly: boolean): any; //{ throw new Error("Not implemented.");}
        TimeToTicks(hour: number, minute: number, second: number, millisecond: number): number; //{ throw new Error("Not implemented.");}
        ToDateTime(year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number): Date; //{ throw new Error("Not implemented.");}
        ToDateTime(year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number, era: number): Date; //{ throw new Error("Not implemented.");}
        ToFourDigitYear(year: number): number; //{ throw new Error("Not implemented.");}
        TryToDateTime(year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number, era: number, result: any): boolean; //{ throw new Error("Not implemented.");}
        VerifyWritable(): any; //{ throw new Error("Not implemented.");}
    }
    export class CompareInfo {
        Name: string;
        LCID: number;
        static IsLegacy20SortingBehaviorRequested: boolean;
        private static InternalSortVersion: number;
        Version: System.Globalization.SortVersion;
        private m_name: string;
        private m_sortName: string;
        private m_dataHandle: number;
        private m_handleOrigin: number;
        private win32LCID: number;
        private culture: number;
        private m_SortVersion: System.Globalization.SortVersion;
        Compare(string1: string, offset1: number, length1: number, string2: string, offset2: number, length2: number, options: System.Globalization.CompareOptions): number; //{ throw new Error("Not implemented.");}
        Compare(string1: string, string2: string): number; //{ throw new Error("Not implemented.");}
        Compare(string1: string, string2: string, options: System.Globalization.CompareOptions): number; //{ throw new Error("Not implemented.");}
        Compare(string1: string, offset1: number, length1: number, string2: string, offset2: number, length2: number): number; //{ throw new Error("Not implemented.");}
        Compare(string1: string, offset1: number, string2: string, offset2: number, options: System.Globalization.CompareOptions): number; //{ throw new Error("Not implemented.");}
        Compare(string1: string, offset1: number, string2: string, offset2: number): number; //{ throw new Error("Not implemented.");}
        CompareOrdinal(string1: string, offset1: number, length1: number, string2: string, offset2: number, length2: number): number; //{ throw new Error("Not implemented.");}
        CreateSortKey(source: string, options: System.Globalization.CompareOptions): any; //{ throw new Error("Not implemented.");}
        Equals(value: any): boolean; //{ throw new Error("Not implemented.");}
        GetCompareInfo(culture: number, assembly: System.Reflection.Assembly): System.Globalization.CompareInfo; //{ throw new Error("Not implemented.");}
        GetCompareInfo(name: string, assembly: System.Reflection.Assembly): System.Globalization.CompareInfo; //{ throw new Error("Not implemented.");}
        GetCompareInfo(culture: number): System.Globalization.CompareInfo; //{ throw new Error("Not implemented.");}
        GetCompareInfo(name: string): System.Globalization.CompareInfo; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        GetHashCode(source: string, options: System.Globalization.CompareOptions): number; //{ throw new Error("Not implemented.");}
        GetHashCodeOfString(source: string, options: System.Globalization.CompareOptions, forceRandomizedHashing: boolean, additionalEntropy: number): number; //{ throw new Error("Not implemented.");}
        GetHashCodeOfString(source: string, options: System.Globalization.CompareOptions): number; //{ throw new Error("Not implemented.");}
        GetNativeCompareFlags(options: System.Globalization.CompareOptions): number; //{ throw new Error("Not implemented.");}
        GetSortKey(source: string, options: System.Globalization.CompareOptions): any; //{ throw new Error("Not implemented.");}
        GetSortKey(source: string): any; //{ throw new Error("Not implemented.");}
        IndexOf(source: string, value: string): number; //{ throw new Error("Not implemented.");}
        IndexOf(source: string, value: string, startIndex: number, count: number, options: System.Globalization.CompareOptions): number; //{ throw new Error("Not implemented.");}
        IndexOf(source: string, value: string, startIndex: number, count: number, options: System.Globalization.CompareOptions): number; //{ throw new Error("Not implemented.");}
        IndexOf(source: string, value: string, startIndex: number, count: number): number; //{ throw new Error("Not implemented.");}
        IndexOf(source: string, value: string, startIndex: number, options: System.Globalization.CompareOptions): number; //{ throw new Error("Not implemented.");}
        IndexOf(source: string, value: string, startIndex: number, count: number): number; //{ throw new Error("Not implemented.");}
        IndexOf(source: string, value: string, startIndex: number): number; //{ throw new Error("Not implemented.");}
        IndexOf(source: string, value: string, options: System.Globalization.CompareOptions): number; //{ throw new Error("Not implemented.");}
        IndexOf(source: string, value: string, options: System.Globalization.CompareOptions): number; //{ throw new Error("Not implemented.");}
        IndexOf(source: string, value: string): number; //{ throw new Error("Not implemented.");}
        IndexOf(source: string, value: string, startIndex: number): number; //{ throw new Error("Not implemented.");}
        IndexOf(source: string, value: string, startIndex: number, options: System.Globalization.CompareOptions): number; //{ throw new Error("Not implemented.");}
        InternalCompareString(handle: number, handleOrigin: number, localeName: string, string1: string, offset1: number, length1: number, string2: string, offset2: number, length2: number, flags: number): number; //{ throw new Error("Not implemented.");}
        InternalFindNLSStringEx(handle: number, handleOrigin: number, localeName: string, flags: number, source: string, sourceCount: number, startIndex: number, target: string, targetCount: number): number; //{ throw new Error("Not implemented.");}
        InternalGetGlobalizedHashCode(handle: number, handleOrigin: number, localeName: string, source: string, length: number, dwFlags: number, forceRandomizedHashing: boolean, additionalEntropy: number): number; //{ throw new Error("Not implemented.");}
        InternalGetNlsVersionEx(handle: number, handleOrigin: number, localeName: string, lpNlsVersionInformation: any): boolean; //{ throw new Error("Not implemented.");}
        InternalGetSortKey(handle: number, handleOrigin: number, localeName: string, flags: number, source: string, sourceCount: number, target: System.Byte[], targetCount: number): number; //{ throw new Error("Not implemented.");}
        InternalGetSortVersion(): number; //{ throw new Error("Not implemented.");}
        InternalInitSortHandle(localeName: string, handleOrigin: any): number; //{ throw new Error("Not implemented.");}
        InternalIsSortable(handle: number, handleOrigin: number, localeName: string, source: string, length: number): boolean; //{ throw new Error("Not implemented.");}
        IsPrefix(source: string, prefix: string, options: System.Globalization.CompareOptions): boolean; //{ throw new Error("Not implemented.");}
        IsPrefix(source: string, prefix: string): boolean; //{ throw new Error("Not implemented.");}
        IsSortable(ch: string): boolean; //{ throw new Error("Not implemented.");}
        IsSortable(text: string): boolean; //{ throw new Error("Not implemented.");}
        IsSuffix(source: string, suffix: string, options: System.Globalization.CompareOptions): boolean; //{ throw new Error("Not implemented.");}
        IsSuffix(source: string, suffix: string): boolean; //{ throw new Error("Not implemented.");}
        LastIndexOf(source: string, value: string, startIndex: number): number; //{ throw new Error("Not implemented.");}
        LastIndexOf(source: string, value: string, startIndex: number, options: System.Globalization.CompareOptions): number; //{ throw new Error("Not implemented.");}
        LastIndexOf(source: string, value: string, options: System.Globalization.CompareOptions): number; //{ throw new Error("Not implemented.");}
        LastIndexOf(source: string, value: string, startIndex: number, options: System.Globalization.CompareOptions): number; //{ throw new Error("Not implemented.");}
        LastIndexOf(source: string, value: string, startIndex: number, count: number): number; //{ throw new Error("Not implemented.");}
        LastIndexOf(source: string, value: string, startIndex: number, count: number): number; //{ throw new Error("Not implemented.");}
        LastIndexOf(source: string, value: string, startIndex: number, count: number, options: System.Globalization.CompareOptions): number; //{ throw new Error("Not implemented.");}
        LastIndexOf(source: string, value: string): number; //{ throw new Error("Not implemented.");}
        LastIndexOf(source: string, value: string): number; //{ throw new Error("Not implemented.");}
        LastIndexOf(source: string, value: string, startIndex: number, count: number, options: System.Globalization.CompareOptions): number; //{ throw new Error("Not implemented.");}
        LastIndexOf(source: string, value: string, startIndex: number): number; //{ throw new Error("Not implemented.");}
        LastIndexOf(source: string, value: string, options: System.Globalization.CompareOptions): number; //{ throw new Error("Not implemented.");}
        NativeInternalInitSortHandle(localeName: string, handleOrigin: any): number; //{ throw new Error("Not implemented.");}
        OnDeserialized(ctx: any): any; //{ throw new Error("Not implemented.");}
        OnDeserialized(): any; //{ throw new Error("Not implemented.");}
        OnDeserializing(ctx: any): any; //{ throw new Error("Not implemented.");}
        OnSerializing(ctx: any): any; //{ throw new Error("Not implemented.");}
        ToString(): string; //{ throw new Error("Not implemented.");}
    }
    export class CultureInfo {
        static CurrentUICulture: System.Globalization.CultureInfo;
        Name: string;
        IsSafeCrossDomain: boolean;
        CreatedDomainID: number;
        static CurrentCulture: System.Globalization.CultureInfo;
        static UserDefaultCulture: System.Globalization.CultureInfo;
        static UserDefaultUICulture: System.Globalization.CultureInfo;
        static InstalledUICulture: System.Globalization.CultureInfo;
        static DefaultThreadCurrentCulture: System.Globalization.CultureInfo;
        static DefaultThreadCurrentUICulture: System.Globalization.CultureInfo;
        static InvariantCulture: System.Globalization.CultureInfo;
        Parent: System.Globalization.CultureInfo;
        LCID: number;
        KeyboardLayoutId: number;
        SortName: string;
        IetfLanguageTag: string;
        DisplayName: string;
        NativeName: string;
        EnglishName: string;
        TwoLetterISOLanguageName: string;
        ThreeLetterISOLanguageName: string;
        ThreeLetterWindowsLanguageName: string;
        CompareInfo: System.Globalization.CompareInfo;
        private Region: System.Globalization.RegionInfo;
        TextInfo: System.Globalization.TextInfo;
        IsNeutralCulture: boolean;
        CultureTypes: System.Globalization.CultureTypes;
        NumberFormat: System.Globalization.NumberFormatInfo;
        DateTimeFormat: System.Globalization.DateTimeFormatInfo;
        Calendar: System.Globalization.Calendar;
        OptionalCalendars: System.Globalization.Calendar[];
        UseUserOverride: boolean;
        IsReadOnly: boolean;
        HasInvariantCultureName: boolean;
        static IsTaiwanSku: boolean;
        m_isReadOnly: boolean;
        compareInfo: System.Globalization.CompareInfo;
        textInfo: System.Globalization.TextInfo;
        regionInfo: System.Globalization.RegionInfo;
        numInfo: System.Globalization.NumberFormatInfo;
        dateTimeInfo: System.Globalization.DateTimeFormatInfo;
        calendar: System.Globalization.Calendar;
        m_dataItem: number;
        cultureID: number;
        m_cultureData: any;
        m_isInherited: boolean;
        private m_isSafeCrossDomain: boolean;
        private m_createdDomainID: number;
        private m_consoleFallbackCulture: System.Globalization.CultureInfo;
        m_name: string;
        private m_nonSortName: string;
        private m_sortName: string;
        private m_parent: System.Globalization.CultureInfo;
        private m_useUserOverride: boolean;
        private static s_userDefaultCulture: System.Globalization.CultureInfo;
        private static s_InvariantCultureInfo: System.Globalization.CultureInfo;
        private static s_userDefaultUICulture: System.Globalization.CultureInfo;
        private static s_InstalledUICultureInfo: System.Globalization.CultureInfo;
        private static s_DefaultThreadCurrentUICulture: System.Globalization.CultureInfo;
        private static s_DefaultThreadCurrentCulture: System.Globalization.CultureInfo;
        private static s_LcidCachedCultures: System.Collections.Hashtable;
        private static s_NameCachedCultures: System.Collections.Hashtable;
        private static s_WindowsRuntimeResourceManager: any;
        private static init: boolean;
        private static s_isTaiwanSku: boolean;
        private static s_haveIsTaiwanSku: boolean;
        private static ts_IsDoingAppXCultureInfoLookup: boolean;
        CanSendCrossDomain(): boolean; //{ throw new Error("Not implemented.");}
        CheckDomainSafetyObject(obj: any, container: any): any; //{ throw new Error("Not implemented.");}
        ClearCachedData(): any; //{ throw new Error("Not implemented.");}
        Clone(): any; //{ throw new Error("Not implemented.");}
        CreateSpecificCulture(name: string): System.Globalization.CultureInfo; //{ throw new Error("Not implemented.");}
        Equals(value: any): boolean; //{ throw new Error("Not implemented.");}
        GetCalendarInstance(calType: number): System.Globalization.Calendar; //{ throw new Error("Not implemented.");}
        GetCalendarInstanceRare(calType: number): System.Globalization.Calendar; //{ throw new Error("Not implemented.");}
        GetConsoleFallbackUICulture(): System.Globalization.CultureInfo; //{ throw new Error("Not implemented.");}
        GetCultureByName(name: string, userOverride: boolean): System.Globalization.CultureInfo; //{ throw new Error("Not implemented.");}
        GetCultureInfo(name: string): System.Globalization.CultureInfo; //{ throw new Error("Not implemented.");}
        GetCultureInfo(name: string, altName: string): System.Globalization.CultureInfo; //{ throw new Error("Not implemented.");}
        GetCultureInfo(culture: number): System.Globalization.CultureInfo; //{ throw new Error("Not implemented.");}
        GetCultureInfoByIetfLanguageTag(name: string): System.Globalization.CultureInfo; //{ throw new Error("Not implemented.");}
        GetCultureInfoForUserPreferredLanguageInAppX(): System.Globalization.CultureInfo; //{ throw new Error("Not implemented.");}
        GetCultureInfoHelper(lcid: number, name: string, altName: string): System.Globalization.CultureInfo; //{ throw new Error("Not implemented.");}
        GetCultures(types: System.Globalization.CultureTypes): any; //{ throw new Error("Not implemented.");}
        GetDefaultLocaleName(localeType: number): string; //{ throw new Error("Not implemented.");}
        GetFormat(formatType: System.Type): any; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        GetSystemDefaultUILanguage(): string; //{ throw new Error("Not implemented.");}
        GetUserDefaultUILanguage(): string; //{ throw new Error("Not implemented.");}
        Init(): boolean; //{ throw new Error("Not implemented.");}
        InitializeFromCultureId(culture: number, useUserOverride: boolean): any; //{ throw new Error("Not implemented.");}
        InitUserDefaultCulture(): System.Globalization.CultureInfo; //{ throw new Error("Not implemented.");}
        InitUserDefaultUICulture(): System.Globalization.CultureInfo; //{ throw new Error("Not implemented.");}
        InternalGetDefaultLocaleName(localetype: number, localeString: any): boolean; //{ throw new Error("Not implemented.");}
        InternalGetSystemDefaultUILanguage(systemDefaultUiLanguage: any): boolean; //{ throw new Error("Not implemented.");}
        InternalGetUserDefaultUILanguage(userDefaultUiLanguage: any): boolean; //{ throw new Error("Not implemented.");}
        IsAlternateSortLcid(lcid: number): boolean; //{ throw new Error("Not implemented.");}
        nativeGetLocaleInfoEx(localeName: string, field: number): string; //{ throw new Error("Not implemented.");}
        nativeGetLocaleInfoExInt(localeName: string, field: number): number; //{ throw new Error("Not implemented.");}
        nativeSetThreadLocale(localeName: string): boolean; //{ throw new Error("Not implemented.");}
        OnDeserialized(ctx: any): any; //{ throw new Error("Not implemented.");}
        OnSerializing(ctx: any): any; //{ throw new Error("Not implemented.");}
        ReadOnly(ci: System.Globalization.CultureInfo): System.Globalization.CultureInfo; //{ throw new Error("Not implemented.");}
        StartCrossDomainTracking(): any; //{ throw new Error("Not implemented.");}
        ToString(): string; //{ throw new Error("Not implemented.");}
        VerifyCultureName(cultureName: string, throwException: boolean): boolean; //{ throw new Error("Not implemented.");}
        VerifyCultureName(culture: System.Globalization.CultureInfo, throwException: boolean): boolean; //{ throw new Error("Not implemented.");}
        VerifyWritable(): any; //{ throw new Error("Not implemented.");}
    }
    export class DateTimeFormatInfo {
        private CultureName: string;
        private Culture: System.Globalization.CultureInfo;
        private LanguageName: string;
        static InvariantInfo: System.Globalization.DateTimeFormatInfo;
        static CurrentInfo: System.Globalization.DateTimeFormatInfo;
        AMDesignator: string;
        Calendar: System.Globalization.Calendar;
        private OptionalCalendars: System.Int32[];
        EraNames: System.String[];
        AbbreviatedEraNames: System.String[];
        AbbreviatedEnglishEraNames: System.String[];
        DateSeparator: string;
        FirstDayOfWeek: System.DayOfWeek;
        CalendarWeekRule: System.Globalization.CalendarWeekRule;
        FullDateTimePattern: string;
        LongDatePattern: string;
        LongTimePattern: string;
        MonthDayPattern: string;
        PMDesignator: string;
        RFC1123Pattern: string;
        ShortDatePattern: string;
        ShortTimePattern: string;
        SortableDateTimePattern: string;
        GeneralShortTimePattern: string;
        GeneralLongTimePattern: string;
        DateTimeOffsetPattern: string;
        TimeSeparator: string;
        UniversalSortableDateTimePattern: string;
        YearMonthPattern: string;
        AbbreviatedDayNames: System.String[];
        ShortestDayNames: System.String[];
        DayNames: System.String[];
        AbbreviatedMonthNames: System.String[];
        MonthNames: System.String[];
        HasSpacesInMonthNames: boolean;
        HasSpacesInDayNames: boolean;
        private AllYearMonthPatterns: System.String[];
        private AllShortDatePatterns: System.String[];
        private AllShortTimePatterns: System.String[];
        private AllLongDatePatterns: System.String[];
        private AllLongTimePatterns: System.String[];
        private UnclonedYearMonthPatterns: System.String[];
        private UnclonedShortDatePatterns: System.String[];
        private UnclonedLongDatePatterns: System.String[];
        private UnclonedShortTimePatterns: System.String[];
        private UnclonedLongTimePatterns: System.String[];
        IsReadOnly: boolean;
        NativeCalendarName: string;
        AbbreviatedMonthGenitiveNames: System.String[];
        MonthGenitiveNames: System.String[];
        FullTimeSpanPositivePattern: string;
        FullTimeSpanNegativePattern: string;
        CompareInfo: System.Globalization.CompareInfo;
        FormatFlags: System.Globalization.DateTimeFormatFlags;
        HasForceTwoDigitYears: boolean;
        HasYearMonthAdjustment: boolean;
        private m_cultureData: any;
        m_name: string;
        private m_langName: string;
        private m_compareInfo: System.Globalization.CompareInfo;
        private m_cultureInfo: System.Globalization.CultureInfo;
        amDesignator: string;
        pmDesignator: string;
        dateSeparator: string;
        generalShortTimePattern: string;
        generalLongTimePattern: string;
        timeSeparator: string;
        monthDayPattern: string;
        dateTimeOffsetPattern: string;
        calendar: System.Globalization.Calendar;
        firstDayOfWeek: number;
        calendarWeekRule: number;
        fullDateTimePattern: string;
        abbreviatedDayNames: System.String[];
        m_superShortDayNames: System.String[];
        dayNames: System.String[];
        abbreviatedMonthNames: System.String[];
        monthNames: System.String[];
        genitiveMonthNames: System.String[];
        m_genitiveAbbreviatedMonthNames: System.String[];
        leapYearMonthNames: System.String[];
        longDatePattern: string;
        shortDatePattern: string;
        yearMonthPattern: string;
        longTimePattern: string;
        shortTimePattern: string;
        private allYearMonthPatterns: System.String[];
        allShortDatePatterns: System.String[];
        allLongDatePatterns: System.String[];
        allShortTimePatterns: System.String[];
        allLongTimePatterns: System.String[];
        m_eraNames: System.String[];
        m_abbrevEraNames: System.String[];
        m_abbrevEnglishEraNames: System.String[];
        optionalCalendars: System.Int32[];
        m_isReadOnly: boolean;
        formatFlags: System.Globalization.DateTimeFormatFlags;
        private CultureID: number;
        private m_useUserOverride: boolean;
        private bUseCalendarInfo: boolean;
        private nDataItem: number;
        m_isDefaultCalendar: boolean;
        m_dateWords: System.String[];
        private m_fullTimeSpanPositivePattern: string;
        private m_fullTimeSpanNegativePattern: string;
        private m_dtfiTokenHash: any;
        private static invariantInfo: System.Globalization.DateTimeFormatInfo;
        static preferExistingTokens: boolean;
        private static s_calendarNativeNames: System.Collections.Hashtable;
        private static MonthSpaces: any;
        private static s_jajpDTFI: System.Globalization.DateTimeFormatInfo;
        private static s_zhtwDTFI: System.Globalization.DateTimeFormatInfo;
        AddMonthNames(temp: any, monthPostfix: string): any; //{ throw new Error("Not implemented.");}
        CheckNullValue(values: System.String[], length: number): any; //{ throw new Error("Not implemented.");}
        ClearTokenHashTable(): any; //{ throw new Error("Not implemented.");}
        Clone(): any; //{ throw new Error("Not implemented.");}
        CreateTokenHashTable(): any; //{ throw new Error("Not implemented.");}
        GetAbbreviatedDayName(dayofweek: System.DayOfWeek): string; //{ throw new Error("Not implemented.");}
        GetAbbreviatedEraName(era: number): string; //{ throw new Error("Not implemented.");}
        GetAbbreviatedMonthName(month: number): string; //{ throw new Error("Not implemented.");}
        GetAllDateTimePatterns(): System.String[]; //{ throw new Error("Not implemented.");}
        GetAllDateTimePatterns(format: string): System.String[]; //{ throw new Error("Not implemented.");}
        GetCombinedPatterns(patterns1: System.String[], patterns2: System.String[], connectString: string): System.String[]; //{ throw new Error("Not implemented.");}
        GetDayName(dayofweek: System.DayOfWeek): string; //{ throw new Error("Not implemented.");}
        GetEra(eraName: string): number; //{ throw new Error("Not implemented.");}
        GetEraName(era: number): string; //{ throw new Error("Not implemented.");}
        GetFormat(formatType: System.Type): any; //{ throw new Error("Not implemented.");}
        GetInstance(provider: System.IFormatProvider): System.Globalization.DateTimeFormatInfo; //{ throw new Error("Not implemented.");}
        GetJapaneseCalendarDTFI(): System.Globalization.DateTimeFormatInfo; //{ throw new Error("Not implemented.");}
        GetMergedPatterns(patterns: System.String[], defaultPattern: string): System.String[]; //{ throw new Error("Not implemented.");}
        GetMonthName(month: number): string; //{ throw new Error("Not implemented.");}
        GetShortestDayName(dayOfWeek: System.DayOfWeek): string; //{ throw new Error("Not implemented.");}
        GetTaiwanCalendarDTFI(): System.Globalization.DateTimeFormatInfo; //{ throw new Error("Not implemented.");}
        InitializeOverridableProperties(cultureData: any, calendarID: number): any; //{ throw new Error("Not implemented.");}
        InitPreferExistingTokens(): boolean; //{ throw new Error("Not implemented.");}
        InsertAtCurrentHashNode(hashTable: any, str: string, ch: string, tokenType: System.TokenType, tokenValue: number, pos: number, hashcode: number, hashProbe: number): any; //{ throw new Error("Not implemented.");}
        InsertHash(hashTable: any, str: string, tokenType: System.TokenType, tokenValue: number): any; //{ throw new Error("Not implemented.");}
        internalGetAbbreviatedDayOfWeekNames(): System.String[]; //{ throw new Error("Not implemented.");}
        internalGetAbbreviatedMonthNames(): System.String[]; //{ throw new Error("Not implemented.");}
        internalGetDayOfWeekNames(): System.String[]; //{ throw new Error("Not implemented.");}
        internalGetGenitiveMonthNames(abbreviated: boolean): System.String[]; //{ throw new Error("Not implemented.");}
        internalGetLeapYearMonthNames(): System.String[]; //{ throw new Error("Not implemented.");}
        internalGetMonthName(month: number, style: System.Globalization.MonthNameStyles, abbreviated: boolean): string; //{ throw new Error("Not implemented.");}
        internalGetMonthNames(): System.String[]; //{ throw new Error("Not implemented.");}
        internalGetSuperShortDayNames(): System.String[]; //{ throw new Error("Not implemented.");}
        IsHebrewChar(ch: string): boolean; //{ throw new Error("Not implemented.");}
        OnDeserialized(ctx: any): any; //{ throw new Error("Not implemented.");}
        OnSerializing(ctx: any): any; //{ throw new Error("Not implemented.");}
        ReadOnly(dtfi: System.Globalization.DateTimeFormatInfo): System.Globalization.DateTimeFormatInfo; //{ throw new Error("Not implemented.");}
        SetAllDateTimePatterns(patterns: System.String[], format: string): any; //{ throw new Error("Not implemented.");}
        Tokenize(TokenMask: System.TokenType, tokenType: any, tokenValue: any, str: any): boolean; //{ throw new Error("Not implemented.");}
        TryParseHebrewNumber(str: any, badFormat: any, number: any): boolean; //{ throw new Error("Not implemented.");}
        ValidateStyles(style: System.Globalization.DateTimeStyles, parameterName: string): any; //{ throw new Error("Not implemented.");}
        YearMonthAdjustment(year: any, month: any, parsedMonthName: boolean): boolean; //{ throw new Error("Not implemented.");}
    }
    export class NumberFormatInfo {
        static InvariantInfo: System.Globalization.NumberFormatInfo;
        CurrencyDecimalDigits: number;
        CurrencyDecimalSeparator: string;
        IsReadOnly: boolean;
        CurrencyGroupSizes: System.Int32[];
        NumberGroupSizes: System.Int32[];
        PercentGroupSizes: System.Int32[];
        CurrencyGroupSeparator: string;
        CurrencySymbol: string;
        static CurrentInfo: System.Globalization.NumberFormatInfo;
        NaNSymbol: string;
        CurrencyNegativePattern: number;
        NumberNegativePattern: number;
        PercentPositivePattern: number;
        PercentNegativePattern: number;
        NegativeInfinitySymbol: string;
        NegativeSign: string;
        NumberDecimalDigits: number;
        NumberDecimalSeparator: string;
        NumberGroupSeparator: string;
        CurrencyPositivePattern: number;
        PositiveInfinitySymbol: string;
        PositiveSign: string;
        PercentDecimalDigits: number;
        PercentDecimalSeparator: string;
        PercentGroupSeparator: string;
        PercentSymbol: string;
        PerMilleSymbol: string;
        NativeDigits: System.String[];
        DigitSubstitution: System.Globalization.DigitShapes;
        numberGroupSizes: System.Int32[];
        currencyGroupSizes: System.Int32[];
        percentGroupSizes: System.Int32[];
        positiveSign: string;
        negativeSign: string;
        numberDecimalSeparator: string;
        numberGroupSeparator: string;
        currencyGroupSeparator: string;
        currencyDecimalSeparator: string;
        currencySymbol: string;
        ansiCurrencySymbol: string;
        nanSymbol: string;
        positiveInfinitySymbol: string;
        negativeInfinitySymbol: string;
        percentDecimalSeparator: string;
        percentGroupSeparator: string;
        percentSymbol: string;
        perMilleSymbol: string;
        nativeDigits: System.String[];
        m_dataItem: number;
        numberDecimalDigits: number;
        currencyDecimalDigits: number;
        currencyPositivePattern: number;
        currencyNegativePattern: number;
        numberNegativePattern: number;
        percentPositivePattern: number;
        percentNegativePattern: number;
        percentDecimalDigits: number;
        digitSubstitution: number;
        isReadOnly: boolean;
        m_useUserOverride: boolean;
        m_isInvariant: boolean;
        validForParseAsNumber: boolean;
        validForParseAsCurrency: boolean;
        private static invariantInfo: System.Globalization.NumberFormatInfo;
        CheckGroupSize(propName: string, groupSize: System.Int32[]): any; //{ throw new Error("Not implemented.");}
        Clone(): any; //{ throw new Error("Not implemented.");}
        GetFormat(formatType: System.Type): any; //{ throw new Error("Not implemented.");}
        GetInstance(formatProvider: System.IFormatProvider): System.Globalization.NumberFormatInfo; //{ throw new Error("Not implemented.");}
        OnDeserialized(ctx: any): any; //{ throw new Error("Not implemented.");}
        OnDeserializing(ctx: any): any; //{ throw new Error("Not implemented.");}
        OnSerializing(ctx: any): any; //{ throw new Error("Not implemented.");}
        ReadOnly(nfi: System.Globalization.NumberFormatInfo): System.Globalization.NumberFormatInfo; //{ throw new Error("Not implemented.");}
        ValidateParseStyleFloatingPoint(style: System.Globalization.NumberStyles): any; //{ throw new Error("Not implemented.");}
        ValidateParseStyleInteger(style: System.Globalization.NumberStyles): any; //{ throw new Error("Not implemented.");}
        VerifyDecimalSeparator(decSep: string, propertyName: string): any; //{ throw new Error("Not implemented.");}
        VerifyDigitSubstitution(digitSub: System.Globalization.DigitShapes, propertyName: string): any; //{ throw new Error("Not implemented.");}
        VerifyGroupSeparator(groupSep: string, propertyName: string): any; //{ throw new Error("Not implemented.");}
        VerifyNativeDigits(nativeDig: System.String[], propertyName: string): any; //{ throw new Error("Not implemented.");}
        VerifyWritable(): any; //{ throw new Error("Not implemented.");}
    }
    export class RegionInfo {
        static CurrentRegion: System.Globalization.RegionInfo;
        Name: string;
        EnglishName: string;
        DisplayName: string;
        NativeName: string;
        TwoLetterISORegionName: string;
        ThreeLetterISORegionName: string;
        ThreeLetterWindowsRegionName: string;
        IsMetric: boolean;
        GeoId: number;
        CurrencyEnglishName: string;
        CurrencyNativeName: string;
        CurrencySymbol: string;
        ISOCurrencySymbol: string;
        m_name: string;
        m_cultureData: any;
        private m_cultureId: number;
        m_dataItem: number;
        static s_currentRegionInfo: System.Globalization.RegionInfo;
        private static IdFromEverettRegionInfoDataItem: System.Int32[];
        Equals(value: any): boolean; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        OnDeserialized(ctx: any): any; //{ throw new Error("Not implemented.");}
        OnSerializing(ctx: any): any; //{ throw new Error("Not implemented.");}
        SetName(name: string): any; //{ throw new Error("Not implemented.");}
        ToString(): string; //{ throw new Error("Not implemented.");}
    }
    export class SortVersion {
        FullVersion: number;
        SortId: System.Guid;
        private m_NlsVersion: number;
        private m_SortId: System.Guid;
        Equals(obj: any): boolean; //{ throw new Error("Not implemented.");}
        Equals(other: System.Globalization.SortVersion): boolean; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
    }
    export class TextInfo {
        static Invariant: System.Globalization.TextInfo;
        ANSICodePage: number;
        OEMCodePage: number;
        MacCodePage: number;
        EBCDICCodePage: number;
        LCID: number;
        CultureName: string;
        IsReadOnly: boolean;
        ListSeparator: string;
        private IsAsciiCasingSameAsInvariant: boolean;
        IsRightToLeft: boolean;
        private m_listSeparator: string;
        private m_isReadOnly: boolean;
        private m_cultureName: string;
        private m_cultureData: any;
        private m_textInfoName: string;
        private m_dataHandle: number;
        private m_handleOrigin: number;
        private m_IsAsciiCasingSameAsInvariant: boolean;
        private customCultureName: string;
        m_nDataItem: number;
        m_useUserOverride: boolean;
        m_win32LangID: number;
        static s_Invariant: System.Globalization.TextInfo;
        AddNonLetter(result: any, input: any, inputIndex: number, charLen: number): number; //{ throw new Error("Not implemented.");}
        AddTitlecaseLetter(result: any, input: any, inputIndex: number, charLen: number): number; //{ throw new Error("Not implemented.");}
        Clone(): any; //{ throw new Error("Not implemented.");}
        CompareOrdinalIgnoreCase(str1: string, str2: string): number; //{ throw new Error("Not implemented.");}
        CompareOrdinalIgnoreCaseEx(strA: string, indexA: number, strB: string, indexB: number, lengthA: number, lengthB: number): number; //{ throw new Error("Not implemented.");}
        Equals(obj: any): boolean; //{ throw new Error("Not implemented.");}
        GetCaseInsensitiveHashCode(str: string, forceRandomizedHashing: boolean, additionalEntropy: number): number; //{ throw new Error("Not implemented.");}
        GetCaseInsensitiveHashCode(str: string): number; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        GetHashCodeOrdinalIgnoreCase(s: string): number; //{ throw new Error("Not implemented.");}
        GetHashCodeOrdinalIgnoreCase(s: string, forceRandomizedHashing: boolean, additionalEntropy: number): number; //{ throw new Error("Not implemented.");}
        IndexOfStringOrdinalIgnoreCase(source: string, value: string, startIndex: number, count: number): number; //{ throw new Error("Not implemented.");}
        InternalChangeCaseChar(handle: number, handleOrigin: number, localeName: string, ch: string, isToUpper: boolean): string; //{ throw new Error("Not implemented.");}
        InternalChangeCaseString(handle: number, handleOrigin: number, localeName: string, str: string, isToUpper: boolean): string; //{ throw new Error("Not implemented.");}
        InternalCompareStringOrdinalIgnoreCase(string1: string, index1: number, string2: string, index2: number, length1: number, length2: number): number; //{ throw new Error("Not implemented.");}
        InternalGetCaseInsHash(handle: number, handleOrigin: number, localeName: string, str: string, forceRandomizedHashing: boolean, additionalEntropy: number): number; //{ throw new Error("Not implemented.");}
        InternalTryFindStringOrdinalIgnoreCase(searchFlags: number, source: string, sourceCount: number, startIndex: number, target: string, targetCount: number, foundIndex: any): boolean; //{ throw new Error("Not implemented.");}
        IsAscii(c: string): boolean; //{ throw new Error("Not implemented.");}
        IsLetterCategory(uc: System.Globalization.UnicodeCategory): boolean; //{ throw new Error("Not implemented.");}
        IsWordSeparator(category: System.Globalization.UnicodeCategory): boolean; //{ throw new Error("Not implemented.");}
        LastIndexOfStringOrdinalIgnoreCase(source: string, value: string, startIndex: number, count: number): number; //{ throw new Error("Not implemented.");}
        OnDeserialized(ctx: any): any; //{ throw new Error("Not implemented.");}
        OnDeserialized(): any; //{ throw new Error("Not implemented.");}
        OnDeserializing(ctx: any): any; //{ throw new Error("Not implemented.");}
        OnSerializing(ctx: any): any; //{ throw new Error("Not implemented.");}
        ReadOnly(textInfo: System.Globalization.TextInfo): System.Globalization.TextInfo; //{ throw new Error("Not implemented.");}
        SetReadOnlyState(readOnly: boolean): any; //{ throw new Error("Not implemented.");}
        ToLower(str: string): string; //{ throw new Error("Not implemented.");}
        ToLower(c: string): string; //{ throw new Error("Not implemented.");}
        ToLowerAsciiInvariant(c: string): string; //{ throw new Error("Not implemented.");}
        ToString(): string; //{ throw new Error("Not implemented.");}
        ToTitleCase(str: string): string; //{ throw new Error("Not implemented.");}
        ToUpper(c: string): string; //{ throw new Error("Not implemented.");}
        ToUpper(str: string): string; //{ throw new Error("Not implemented.");}
        ToUpperAsciiInvariant(c: string): string; //{ throw new Error("Not implemented.");}
        TryFastFindStringOrdinalIgnoreCase(searchFlags: number, source: string, startIndex: number, value: string, count: number, foundIndex: any): boolean; //{ throw new Error("Not implemented.");}
        VerifyWritable(): any; //{ throw new Error("Not implemented.");}
    }
}
declare module System.IO {
    export class Stream extends System.MarshalByRefObject {
        CanRead: boolean;
        CanSeek: boolean;
        CanTimeout: boolean;
        CanWrite: boolean;
        Length: number;
        Position: number;
        ReadTimeout: number;
        WriteTimeout: number;
        private _activeReadWriteTask: any;
        private _asyncActiveSemaphore: any;
        static Null: System.IO.Stream;
        BeginEndReadAsync(buffer: System.Byte[], offset: number, count: number): any; //{ throw new Error("Not implemented.");}
        BeginEndWriteAsync(buffer: System.Byte[], offset: number, count: number): any; //{ throw new Error("Not implemented.");}
        BeginRead(buffer: System.Byte[], offset: number, count: number, callback: System.AsyncCallback, state: any): System.IAsyncResult; //{ throw new Error("Not implemented.");}
        BeginReadInternal(buffer: System.Byte[], offset: number, count: number, callback: System.AsyncCallback, state: any, serializeAsynchronously: boolean): System.IAsyncResult; //{ throw new Error("Not implemented.");}
        BeginWrite(buffer: System.Byte[], offset: number, count: number, callback: System.AsyncCallback, state: any): System.IAsyncResult; //{ throw new Error("Not implemented.");}
        BeginWriteInternal(buffer: System.Byte[], offset: number, count: number, callback: System.AsyncCallback, state: any, serializeAsynchronously: boolean): System.IAsyncResult; //{ throw new Error("Not implemented.");}
        BlockingBeginRead(buffer: System.Byte[], offset: number, count: number, callback: System.AsyncCallback, state: any): System.IAsyncResult; //{ throw new Error("Not implemented.");}
        BlockingBeginWrite(buffer: System.Byte[], offset: number, count: number, callback: System.AsyncCallback, state: any): System.IAsyncResult; //{ throw new Error("Not implemented.");}
        BlockingEndRead(asyncResult: System.IAsyncResult): number; //{ throw new Error("Not implemented.");}
        BlockingEndWrite(asyncResult: System.IAsyncResult): any; //{ throw new Error("Not implemented.");}
        Close(): any; //{ throw new Error("Not implemented.");}
        CopyTo(destination: System.IO.Stream, bufferSize: number): any; //{ throw new Error("Not implemented.");}
        CopyTo(destination: System.IO.Stream): any; //{ throw new Error("Not implemented.");}
        CopyToAsync(destination: System.IO.Stream, bufferSize: number, cancellationToken: any): any; //{ throw new Error("Not implemented.");}
        CopyToAsync(destination: System.IO.Stream, bufferSize: number): any; //{ throw new Error("Not implemented.");}
        CopyToAsync(destination: System.IO.Stream): any; //{ throw new Error("Not implemented.");}
        CopyToAsyncInternal(destination: System.IO.Stream, bufferSize: number, cancellationToken: any): any; //{ throw new Error("Not implemented.");}
        CreateWaitHandle(): System.Threading.WaitHandle; //{ throw new Error("Not implemented.");}
        Dispose(disposing: boolean): any; //{ throw new Error("Not implemented.");}
        Dispose(): any; //{ throw new Error("Not implemented.");}
        EndRead(asyncResult: System.IAsyncResult): number; //{ throw new Error("Not implemented.");}
        EndWrite(asyncResult: System.IAsyncResult): any; //{ throw new Error("Not implemented.");}
        EnsureAsyncActiveSemaphoreInitialized(): any; //{ throw new Error("Not implemented.");}
        Flush(): any; //{ throw new Error("Not implemented.");}
        FlushAsync(): any; //{ throw new Error("Not implemented.");}
        FlushAsync(cancellationToken: any): any; //{ throw new Error("Not implemented.");}
        InternalCopyTo(destination: System.IO.Stream, bufferSize: number): any; //{ throw new Error("Not implemented.");}
        ObjectInvariant(): any; //{ throw new Error("Not implemented.");}
        Read(buffer: System.Byte[], offset: number, count: number): number; //{ throw new Error("Not implemented.");}
        ReadAsync(buffer: System.Byte[], offset: number, count: number): any; //{ throw new Error("Not implemented.");}
        ReadAsync(buffer: System.Byte[], offset: number, count: number, cancellationToken: any): any; //{ throw new Error("Not implemented.");}
        ReadByte(): number; //{ throw new Error("Not implemented.");}
        RunReadWriteTask(readWriteTask: any): any; //{ throw new Error("Not implemented.");}
        RunReadWriteTaskWhenReady(asyncWaiter: any, readWriteTask: any): any; //{ throw new Error("Not implemented.");}
        Seek(offset: number, origin: System.IO.SeekOrigin): number; //{ throw new Error("Not implemented.");}
        SetLength(value: number): any; //{ throw new Error("Not implemented.");}
        Synchronized(stream: System.IO.Stream): System.IO.Stream; //{ throw new Error("Not implemented.");}
        Write(buffer: System.Byte[], offset: number, count: number): any; //{ throw new Error("Not implemented.");}
        WriteAsync(buffer: System.Byte[], offset: number, count: number, cancellationToken: any): any; //{ throw new Error("Not implemented.");}
        WriteAsync(buffer: System.Byte[], offset: number, count: number): any; //{ throw new Error("Not implemented.");}
        WriteByte(value: number): any; //{ throw new Error("Not implemented.");}
    }
    export class TextWriter extends System.MarshalByRefObject {
        FormatProvider: System.IFormatProvider;
        Encoding: System.Text.Encoding;
        NewLine: string;
        CoreNewLine: any;
        private InternalFormatProvider: System.IFormatProvider;
        static Null: System.IO.TextWriter;
        private static _WriteCharDelegate: any;
        private static _WriteStringDelegate: any;
        private static _WriteCharArrayRangeDelegate: any;
        private static _WriteLineCharDelegate: any;
        private static _WriteLineStringDelegate: any;
        private static _WriteLineCharArrayRangeDelegate: any;
        private static _FlushDelegate: any;
        Close(): any; //{ throw new Error("Not implemented.");}
        Dispose(disposing: boolean): any; //{ throw new Error("Not implemented.");}
        Dispose(): any; //{ throw new Error("Not implemented.");}
        Flush(): any; //{ throw new Error("Not implemented.");}
        FlushAsync(): any; //{ throw new Error("Not implemented.");}
        Synchronized(writer: System.IO.TextWriter): System.IO.TextWriter; //{ throw new Error("Not implemented.");}
        Write(buffer: any, index: number, count: number): any; //{ throw new Error("Not implemented.");}
        Write(buffer: any): any; //{ throw new Error("Not implemented.");}
        Write(value: string): any; //{ throw new Error("Not implemented.");}
        Write(format: string, arg: any): any; //{ throw new Error("Not implemented.");}
        Write(format: string, arg0: any, arg1: any, arg2: any): any; //{ throw new Error("Not implemented.");}
        Write(format: string, arg0: any, arg1: any): any; //{ throw new Error("Not implemented.");}
        Write(value: boolean): any; //{ throw new Error("Not implemented.");}
        Write(value: any): any; //{ throw new Error("Not implemented.");}
        Write(value: number): any; //{ throw new Error("Not implemented.");}
        Write(format: string, arg0: any): any; //{ throw new Error("Not implemented.");}
        Write(value: number): any; //{ throw new Error("Not implemented.");}
        Write(value: number): any; //{ throw new Error("Not implemented.");}
        Write(value: number): any; //{ throw new Error("Not implemented.");}
        Write(value: number): any; //{ throw new Error("Not implemented.");}
        Write(value: number): any; //{ throw new Error("Not implemented.");}
        Write(value: string): any; //{ throw new Error("Not implemented.");}
        Write(value: number): any; //{ throw new Error("Not implemented.");}
        WriteAsync(buffer: any, index: number, count: number): any; //{ throw new Error("Not implemented.");}
        WriteAsync(buffer: any): any; //{ throw new Error("Not implemented.");}
        WriteAsync(value: string): any; //{ throw new Error("Not implemented.");}
        WriteAsync(value: string): any; //{ throw new Error("Not implemented.");}
        WriteLine(format: string, arg0: any, arg1: any, arg2: any): any; //{ throw new Error("Not implemented.");}
        WriteLine(format: string, arg: any): any; //{ throw new Error("Not implemented.");}
        WriteLine(format: string, arg0: any, arg1: any): any; //{ throw new Error("Not implemented.");}
        WriteLine(value: number): any; //{ throw new Error("Not implemented.");}
        WriteLine(value: any): any; //{ throw new Error("Not implemented.");}
        WriteLine(): any; //{ throw new Error("Not implemented.");}
        WriteLine(value: string): any; //{ throw new Error("Not implemented.");}
        WriteLine(buffer: any): any; //{ throw new Error("Not implemented.");}
        WriteLine(buffer: any, index: number, count: number): any; //{ throw new Error("Not implemented.");}
        WriteLine(value: boolean): any; //{ throw new Error("Not implemented.");}
        WriteLine(value: number): any; //{ throw new Error("Not implemented.");}
        WriteLine(format: string, arg0: any): any; //{ throw new Error("Not implemented.");}
        WriteLine(value: number): any; //{ throw new Error("Not implemented.");}
        WriteLine(value: number): any; //{ throw new Error("Not implemented.");}
        WriteLine(value: number): any; //{ throw new Error("Not implemented.");}
        WriteLine(value: number): any; //{ throw new Error("Not implemented.");}
        WriteLine(value: number): any; //{ throw new Error("Not implemented.");}
        WriteLine(value: string): any; //{ throw new Error("Not implemented.");}
        WriteLineAsync(value: string): any; //{ throw new Error("Not implemented.");}
        WriteLineAsync(): any; //{ throw new Error("Not implemented.");}
        WriteLineAsync(value: string): any; //{ throw new Error("Not implemented.");}
        WriteLineAsync(buffer: any): any; //{ throw new Error("Not implemented.");}
        WriteLineAsync(buffer: any, index: number, count: number): any; //{ throw new Error("Not implemented.");}
    }
}
declare module System.Net {
    export class CookieContainer {
        Capacity: number;
        Count: number;
        MaxCookieSize: number;
        PerDomainCapacity: number;
        private m_domainTable: System.Collections.Hashtable;
        private m_maxCookieSize: number;
        private m_maxCookies: number;
        private m_maxCookiesPerDomain: number;
        private m_count: number;
        private m_fqdnMyDomain: string;
        private static HeaderInfo: any;
        Add(cookie: any): any; //{ throw new Error("Not implemented.");}
        Add(cookie: any, throwOnError: boolean): any; //{ throw new Error("Not implemented.");}
        Add(cookies: any): any; //{ throw new Error("Not implemented.");}
        Add(uri: System.Uri, cookie: any): any; //{ throw new Error("Not implemented.");}
        Add(uri: System.Uri, cookies: any): any; //{ throw new Error("Not implemented.");}
        AddRemoveDomain(key: string, value: any): any; //{ throw new Error("Not implemented.");}
        AgeCookies(domain: string): boolean; //{ throw new Error("Not implemented.");}
        BuildCookieCollectionFromDomainMatches(uri: System.Uri, isSecure: boolean, port: number, cookies: any, domainAttribute: System.Collections.Generic.List<string>, matchOnlyPlainCookie: boolean): any; //{ throw new Error("Not implemented.");}
        CookieCutter(uri: System.Uri, headerName: string, setCookieHeader: string, isThrow: boolean): any; //{ throw new Error("Not implemented.");}
        ExpireCollection(cc: any): number; //{ throw new Error("Not implemented.");}
        GetCookieHeader(uri: System.Uri): string; //{ throw new Error("Not implemented.");}
        GetCookieHeader(uri: System.Uri, optCookie2: any): string; //{ throw new Error("Not implemented.");}
        GetCookies(uri: System.Uri): any; //{ throw new Error("Not implemented.");}
        InternalGetCookies(uri: System.Uri): any; //{ throw new Error("Not implemented.");}
        IsLocalDomain(host: string): boolean; //{ throw new Error("Not implemented.");}
        MergeUpdateCollections(destination: any, source: any, port: number, isSecure: boolean, isPlainOnly: boolean): any; //{ throw new Error("Not implemented.");}
        SetCookies(uri: System.Uri, cookieHeader: string): any; //{ throw new Error("Not implemented.");}
    }
    interface ICredentials {
        GetCredential(uri: System.Uri, authType: string): any;
    }
    export class IPAddress {
        Address: number;
        AddressFamily: System.Net.Sockets.AddressFamily;
        ScopeId: number;
        IsBroadcast: boolean;
        IsIPv6Multicast: boolean;
        IsIPv6LinkLocal: boolean;
        IsIPv6SiteLocal: boolean;
        IsIPv6Teredo: boolean;
        IsIPv4MappedToIPv6: boolean;
        m_Address: number;
        m_ToString: string;
        private m_Family: System.Net.Sockets.AddressFamily;
        private m_Numbers: any;
        private m_ScopeId: number;
        private m_HashCode: number;
        static Any: System.Net.IPAddress;
        static Loopback: System.Net.IPAddress;
        static Broadcast: System.Net.IPAddress;
        static None: System.Net.IPAddress;
        static IPv6Any: System.Net.IPAddress;
        static IPv6Loopback: System.Net.IPAddress;
        static IPv6None: System.Net.IPAddress;
        Equals(comparand: any): boolean; //{ throw new Error("Not implemented.");}
        Equals(comparandObj: any, compareScopeId: boolean): boolean; //{ throw new Error("Not implemented.");}
        GetAddressBytes(): System.Byte[]; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        HostToNetworkOrder(host: number): number; //{ throw new Error("Not implemented.");}
        HostToNetworkOrder(host: number): number; //{ throw new Error("Not implemented.");}
        HostToNetworkOrder(host: number): number; //{ throw new Error("Not implemented.");}
        InternalParse(ipString: string, tryParse: boolean): System.Net.IPAddress; //{ throw new Error("Not implemented.");}
        IsLoopback(address: System.Net.IPAddress): boolean; //{ throw new Error("Not implemented.");}
        MapToIPv4(): System.Net.IPAddress; //{ throw new Error("Not implemented.");}
        MapToIPv6(): System.Net.IPAddress; //{ throw new Error("Not implemented.");}
        NetworkToHostOrder(network: number): number; //{ throw new Error("Not implemented.");}
        NetworkToHostOrder(network: number): number; //{ throw new Error("Not implemented.");}
        NetworkToHostOrder(network: number): number; //{ throw new Error("Not implemented.");}
        Parse(ipString: string): System.Net.IPAddress; //{ throw new Error("Not implemented.");}
        Snapshot(): System.Net.IPAddress; //{ throw new Error("Not implemented.");}
        ToString(): string; //{ throw new Error("Not implemented.");}
        TryParse(ipString: string, address: any): boolean; //{ throw new Error("Not implemented.");}
    }
    interface IWebProxy {
        Credentials: System.Net.ICredentials;
        GetProxy(destination: System.Uri): System.Uri;
        IsBypassed(host: System.Uri): boolean;
    }
    export class WebHeaderCollection extends System.Collections.Specialized.NameValueCollection {
        ContentLength: string;
        CacheControl: string;
        ContentType: string;
        Date: string;
        Expires: string;
        ETag: string;
        LastModified: string;
        Location: string;
        ProxyAuthenticate: string;
        SetCookie2: string;
        SetCookie: string;
        Server: string;
        Via: string;
        private InnerCollection: System.Collections.Specialized.NameValueCollection;
        private AllowHttpRequestHeader: boolean;
        AllowHttpResponseHeader: boolean;
        Item: string;
        Item: string;
        Count: number;
        Keys: System.Collections.Specialized.NameObjectCollectionBase.KeysCollection;
        AllKeys: System.String[];
        private m_CommonHeaders: System.String[];
        private m_NumCommonHeaders: number;
        private m_InnerCollection: System.Collections.Specialized.NameValueCollection;
        private m_Type: System.Net.WebHeaderCollectionType;
        private static HInfo: any;
        private static s_CommonHeaderNames: System.String[];
        private static s_CommonHeaderHints: any;
        private static HttpTrimCharacters: any;
        private static RfcCharMap: any;
        Add(header: System.Net.HttpRequestHeader, value: string): any; //{ throw new Error("Not implemented.");}
        Add(header: System.Net.HttpResponseHeader, value: string): any; //{ throw new Error("Not implemented.");}
        Add(header: string): any; //{ throw new Error("Not implemented.");}
        Add(name: string, value: string): any; //{ throw new Error("Not implemented.");}
        AddInternal(name: string, value: string): any; //{ throw new Error("Not implemented.");}
        AddInternalNotCommon(name: string, value: string): any; //{ throw new Error("Not implemented.");}
        AddWithoutValidate(headerName: string, headerValue: string): any; //{ throw new Error("Not implemented.");}
        ChangeInternal(name: string, value: string): any; //{ throw new Error("Not implemented.");}
        CheckBadChars(name: string, isHeaderValue: boolean): string; //{ throw new Error("Not implemented.");}
        CheckUpdate(name: string, value: string): any; //{ throw new Error("Not implemented.");}
        Clear(): any; //{ throw new Error("Not implemented.");}
        ContainsNonAsciiChars(token: string): boolean; //{ throw new Error("Not implemented.");}
        Get(index: number): string; //{ throw new Error("Not implemented.");}
        Get(name: string): string; //{ throw new Error("Not implemented.");}
        GetAsString(cc: System.Collections.Specialized.NameValueCollection, winInetCompat: boolean, forTrace: boolean): string; //{ throw new Error("Not implemented.");}
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
        GetKey(index: number): string; //{ throw new Error("Not implemented.");}
        GetObjectData(serializationInfo: any, streamingContext: any): any; //{ throw new Error("Not implemented.");}
        GetValues(index: number): System.String[]; //{ throw new Error("Not implemented.");}
        GetValues(header: string): System.String[]; //{ throw new Error("Not implemented.");}
        InternalHasKeys(): boolean; //{ throw new Error("Not implemented.");}
        IsRestricted(headerName: string, response: boolean): boolean; //{ throw new Error("Not implemented.");}
        IsRestricted(headerName: string): boolean; //{ throw new Error("Not implemented.");}
        IsValidToken(token: string): boolean; //{ throw new Error("Not implemented.");}
        NormalizeCommonHeaders(): any; //{ throw new Error("Not implemented.");}
        OnDeserialization(sender: any): any; //{ throw new Error("Not implemented.");}
        ParseHeaders(buffer: System.Byte[], size: number, unparsed: any, totalResponseHeadersLength: any, maximumResponseHeadersLength: number, parseError: any): System.Net.DataParseStatus; //{ throw new Error("Not implemented.");}
        ParseHeadersStrict(buffer: System.Byte[], size: number, unparsed: any, totalResponseHeadersLength: any, maximumResponseHeadersLength: number, parseError: any): System.Net.DataParseStatus; //{ throw new Error("Not implemented.");}
        Remove(header: System.Net.HttpResponseHeader): any; //{ throw new Error("Not implemented.");}
        Remove(name: string): any; //{ throw new Error("Not implemented.");}
        Remove(header: System.Net.HttpRequestHeader): any; //{ throw new Error("Not implemented.");}
        RemoveInternal(name: string): any; //{ throw new Error("Not implemented.");}
        Set(name: string, value: string): any; //{ throw new Error("Not implemented.");}
        Set(header: System.Net.HttpRequestHeader, value: string): any; //{ throw new Error("Not implemented.");}
        Set(header: System.Net.HttpResponseHeader, value: string): any; //{ throw new Error("Not implemented.");}
        SetAddVerified(name: string, value: string): any; //{ throw new Error("Not implemented.");}
        SetInternal(name: string, value: string): any; //{ throw new Error("Not implemented.");}
        SetInternal(header: System.Net.HttpResponseHeader, value: string): any; //{ throw new Error("Not implemented.");}
        ThrowOnRestrictedHeader(headerName: string): any; //{ throw new Error("Not implemented.");}
        ToByteArray(): System.Byte[]; //{ throw new Error("Not implemented.");}
        ToString(): string; //{ throw new Error("Not implemented.");}
        ToString(forTrace: boolean): string; //{ throw new Error("Not implemented.");}
    }
}
declare module System.Net.Sockets {
}
declare module System.Reflection {
    export class Assembly {
        CodeBase: string;
        EscapedCodeBase: string;
        FullName: string;
        EntryPoint: System.Reflection.MethodInfo;
        ExportedTypes: System.Collections.Generic.IEnumerable<System.Type>;
        DefinedTypes: System.Collections.Generic.IEnumerable<System.Reflection.TypeInfo>;
        Evidence: System.Security.Policy.Evidence;
        PermissionSet: System.Security.PermissionSet;
        IsFullyTrusted: boolean;
        SecurityRuleSet: System.Security.SecurityRuleSet;
        ManifestModule: System.Reflection.Module;
        CustomAttributes: System.Collections.Generic.IEnumerable<System.Reflection.CustomAttributeData>;
        ReflectionOnly: boolean;
        Modules: System.Collections.Generic.IEnumerable<System.Reflection.Module>;
        Location: string;
        ImageRuntimeVersion: string;
        GlobalAssemblyCache: boolean;
        HostContext: number;
        IsDynamic: boolean;
        CreateInstance(typeName: string, ignoreCase: boolean): any; //{ throw new Error("Not implemented.");}
        CreateInstance(typeName: string): any; //{ throw new Error("Not implemented.");}
        CreateInstance(typeName: string, ignoreCase: boolean, bindingAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, args: any, culture: System.Globalization.CultureInfo, activationAttributes: any): any; //{ throw new Error("Not implemented.");}
        CreateQualifiedName(assemblyName: string, typeName: string): string; //{ throw new Error("Not implemented.");}
        Equals(o: any): boolean; //{ throw new Error("Not implemented.");}
        GetAssembly(type: System.Type): System.Reflection.Assembly; //{ throw new Error("Not implemented.");}
        GetCallingAssembly(): System.Reflection.Assembly; //{ throw new Error("Not implemented.");}
        GetCustomAttributes(attributeType: System.Type, inherit: boolean): any; //{ throw new Error("Not implemented.");}
        GetCustomAttributes(inherit: boolean): any; //{ throw new Error("Not implemented.");}
        GetCustomAttributesData(): System.Collections.Generic.IList<T>; //{ throw new Error("Not implemented.");}
        GetEntryAssembly(): System.Reflection.Assembly; //{ throw new Error("Not implemented.");}
        GetExecutingAssembly(): System.Reflection.Assembly; //{ throw new Error("Not implemented.");}
        GetExportedTypes(): System.Type[]; //{ throw new Error("Not implemented.");}
        GetFile(name: string): any; //{ throw new Error("Not implemented.");}
        GetFiles(): any; //{ throw new Error("Not implemented.");}
        GetFiles(getResourceModules: boolean): any; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        GetLoadedModules(getResourceModules: boolean): any; //{ throw new Error("Not implemented.");}
        GetLoadedModules(): any; //{ throw new Error("Not implemented.");}
        GetManifestResourceInfo(resourceName: string): any; //{ throw new Error("Not implemented.");}
        GetManifestResourceNames(): System.String[]; //{ throw new Error("Not implemented.");}
        GetManifestResourceStream(name: string): System.IO.Stream; //{ throw new Error("Not implemented.");}
        GetManifestResourceStream(type: System.Type, name: string): System.IO.Stream; //{ throw new Error("Not implemented.");}
        GetModule(name: string): System.Reflection.Module; //{ throw new Error("Not implemented.");}
        GetModules(getResourceModules: boolean): any; //{ throw new Error("Not implemented.");}
        GetModules(): any; //{ throw new Error("Not implemented.");}
        GetName(copiedName: boolean): any; //{ throw new Error("Not implemented.");}
        GetName(): any; //{ throw new Error("Not implemented.");}
        GetObjectData(info: any, context: any): any; //{ throw new Error("Not implemented.");}
        GetReferencedAssemblies(): any; //{ throw new Error("Not implemented.");}
        GetSatelliteAssembly(culture: System.Globalization.CultureInfo): System.Reflection.Assembly; //{ throw new Error("Not implemented.");}
        GetSatelliteAssembly(culture: System.Globalization.CultureInfo, version: System.Version): System.Reflection.Assembly; //{ throw new Error("Not implemented.");}
        GetType(name: string, throwOnError: boolean): System.Type; //{ throw new Error("Not implemented.");}
        GetType(name: string, throwOnError: boolean, ignoreCase: boolean): System.Type; //{ throw new Error("Not implemented.");}
        GetType(name: string): System.Type; //{ throw new Error("Not implemented.");}
        GetType_Compat(assemblyString: string, typeName: string): System.Type; //{ throw new Error("Not implemented.");}
        GetTypes(): System.Type[]; //{ throw new Error("Not implemented.");}
        IsDefined(attributeType: System.Type, inherit: boolean): boolean; //{ throw new Error("Not implemented.");}
        Load(rawAssembly: System.Byte[], rawSymbolStore: System.Byte[], securityEvidence: System.Security.Policy.Evidence): System.Reflection.Assembly; //{ throw new Error("Not implemented.");}
        Load(assemblyString: string): System.Reflection.Assembly; //{ throw new Error("Not implemented.");}
        Load(assemblyString: string, assemblySecurity: System.Security.Policy.Evidence): System.Reflection.Assembly; //{ throw new Error("Not implemented.");}
        Load(rawAssembly: System.Byte[], rawSymbolStore: System.Byte[], securityContextSource: System.Security.SecurityContextSource): System.Reflection.Assembly; //{ throw new Error("Not implemented.");}
        Load(rawAssembly: System.Byte[], rawSymbolStore: System.Byte[]): System.Reflection.Assembly; //{ throw new Error("Not implemented.");}
        Load(assemblyRef: any): System.Reflection.Assembly; //{ throw new Error("Not implemented.");}
        Load(assemblyRef: any, assemblySecurity: System.Security.Policy.Evidence): System.Reflection.Assembly; //{ throw new Error("Not implemented.");}
        Load(rawAssembly: System.Byte[]): System.Reflection.Assembly; //{ throw new Error("Not implemented.");}
        LoadFile(path: string): System.Reflection.Assembly; //{ throw new Error("Not implemented.");}
        LoadFile(path: string, securityEvidence: System.Security.Policy.Evidence): System.Reflection.Assembly; //{ throw new Error("Not implemented.");}
        LoadFrom(assemblyFile: string, securityEvidence: System.Security.Policy.Evidence, hashValue: System.Byte[], hashAlgorithm: System.Configuration.Assemblies.AssemblyHashAlgorithm): System.Reflection.Assembly; //{ throw new Error("Not implemented.");}
        LoadFrom(assemblyFile: string): System.Reflection.Assembly; //{ throw new Error("Not implemented.");}
        LoadFrom(assemblyFile: string, hashValue: System.Byte[], hashAlgorithm: System.Configuration.Assemblies.AssemblyHashAlgorithm): System.Reflection.Assembly; //{ throw new Error("Not implemented.");}
        LoadFrom(assemblyFile: string, securityEvidence: System.Security.Policy.Evidence): System.Reflection.Assembly; //{ throw new Error("Not implemented.");}
        LoadModule(moduleName: string, rawModule: System.Byte[]): System.Reflection.Module; //{ throw new Error("Not implemented.");}
        LoadModule(moduleName: string, rawModule: System.Byte[], rawSymbolStore: System.Byte[]): System.Reflection.Module; //{ throw new Error("Not implemented.");}
        LoadWithPartialName(partialName: string): System.Reflection.Assembly; //{ throw new Error("Not implemented.");}
        LoadWithPartialName(partialName: string, securityEvidence: System.Security.Policy.Evidence): System.Reflection.Assembly; //{ throw new Error("Not implemented.");}
        ReflectionOnlyLoad(rawAssembly: System.Byte[]): System.Reflection.Assembly; //{ throw new Error("Not implemented.");}
        ReflectionOnlyLoad(assemblyString: string): System.Reflection.Assembly; //{ throw new Error("Not implemented.");}
        ReflectionOnlyLoadFrom(assemblyFile: string): System.Reflection.Assembly; //{ throw new Error("Not implemented.");}
        ToString(): string; //{ throw new Error("Not implemented.");}
        UnsafeLoadFrom(assemblyFile: string): System.Reflection.Assembly; //{ throw new Error("Not implemented.");}
    }
    export class Binder {
        BindToField(bindingAttr: System.Reflection.BindingFlags, match: any, value: any, culture: System.Globalization.CultureInfo): System.Reflection.FieldInfo; //{ throw new Error("Not implemented.");}
        BindToMethod(bindingAttr: System.Reflection.BindingFlags, match: any, args: any, modifiers: any, culture: System.Globalization.CultureInfo, names: System.String[], state: any): System.Reflection.MethodBase; //{ throw new Error("Not implemented.");}
        ChangeType(value: any, type: System.Type, culture: System.Globalization.CultureInfo): any; //{ throw new Error("Not implemented.");}
        ReorderArgumentArray(args: any, state: any): any; //{ throw new Error("Not implemented.");}
        SelectMethod(bindingAttr: System.Reflection.BindingFlags, match: any, types: System.Type[], modifiers: any): System.Reflection.MethodBase; //{ throw new Error("Not implemented.");}
        SelectProperty(bindingAttr: System.Reflection.BindingFlags, match: any, returnType: System.Type, indexes: System.Type[], modifiers: any): System.Reflection.PropertyInfo; //{ throw new Error("Not implemented.");}
    }
    export class ConstructorInfo extends System.Reflection.MethodBase {
        MemberType: System.Reflection.MemberTypes;
        static ConstructorName: string;
        static TypeConstructorName: string;
        Equals(obj: any): boolean; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        GetReturnType(): System.Type; //{ throw new Error("Not implemented.");}
        Invoke(invokeAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, parameters: any, culture: System.Globalization.CultureInfo): any; //{ throw new Error("Not implemented.");}
        Invoke(parameters: any): any; //{ throw new Error("Not implemented.");}
    }
    export class CustomAttributeData {
        AttributeType: System.Type;
        Constructor: System.Reflection.ConstructorInfo;
        ConstructorArguments: System.Collections.Generic.IList<System.Reflection.CustomAttributeTypedArgument>;
        NamedArguments: System.Collections.Generic.IList<System.Reflection.CustomAttributeNamedArgument>;
        private m_ctor: System.Reflection.ConstructorInfo;
        private m_scope: any;
        private m_members: any;
        private m_ctorParams: any;
        private m_namedParams: any;
        private m_typedCtorArgs: System.Collections.Generic.IList<System.Reflection.CustomAttributeTypedArgument>;
        private m_namedArgs: System.Collections.Generic.IList<System.Reflection.CustomAttributeNamedArgument>;
        Equals(obj: any): boolean; //{ throw new Error("Not implemented.");}
        Filter(attrs: System.Collections.Generic.IList<T>, caType: System.Type, parameter: number): System.Reflection.CustomAttributeTypedArgument; //{ throw new Error("Not implemented.");}
        GetCustomAttributeRecords(module: any, targetToken: number): any; //{ throw new Error("Not implemented.");}
        GetCustomAttributes(target: System.Reflection.MemberInfo): System.Collections.Generic.IList<T>; //{ throw new Error("Not implemented.");}
        GetCustomAttributes(target: System.Reflection.Module): System.Collections.Generic.IList<T>; //{ throw new Error("Not implemented.");}
        GetCustomAttributes(target: System.Reflection.Assembly): System.Collections.Generic.IList<T>; //{ throw new Error("Not implemented.");}
        GetCustomAttributes(target: System.Reflection.ParameterInfo): System.Collections.Generic.IList<T>; //{ throw new Error("Not implemented.");}
        GetCustomAttributes(module: any, tkTarget: number): System.Collections.Generic.IList<T>; //{ throw new Error("Not implemented.");}
        GetCustomAttributesInternal(target: any): System.Collections.Generic.IList<T>; //{ throw new Error("Not implemented.");}
        GetCustomAttributesInternal(target: any): System.Collections.Generic.IList<T>; //{ throw new Error("Not implemented.");}
        GetCustomAttributesInternal(target: any): System.Collections.Generic.IList<T>; //{ throw new Error("Not implemented.");}
        GetCustomAttributesInternal(target: any): System.Collections.Generic.IList<T>; //{ throw new Error("Not implemented.");}
        GetCustomAttributesInternal(target: any): System.Collections.Generic.IList<T>; //{ throw new Error("Not implemented.");}
        GetCustomAttributesInternal(target: any): System.Collections.Generic.IList<T>; //{ throw new Error("Not implemented.");}
        GetCustomAttributesInternal(target: any): System.Collections.Generic.IList<T>; //{ throw new Error("Not implemented.");}
        GetCustomAttributesInternal(target: any): System.Collections.Generic.IList<T>; //{ throw new Error("Not implemented.");}
        GetCustomAttributesInternal(target: any): System.Collections.Generic.IList<T>; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        Init(forwardedTo: any): any; //{ throw new Error("Not implemented.");}
        Init(dllImport: any): any; //{ throw new Error("Not implemented.");}
        Init(fieldOffset: any): any; //{ throw new Error("Not implemented.");}
        Init(marshalAs: any): any; //{ throw new Error("Not implemented.");}
        Init(pca: any): any; //{ throw new Error("Not implemented.");}
        InitCustomAttributeType(parameterType: any): any; //{ throw new Error("Not implemented.");}
        ToString(): string; //{ throw new Error("Not implemented.");}
        TypeToCustomAttributeEncoding(type: any): System.Reflection.CustomAttributeEncoding; //{ throw new Error("Not implemented.");}
    }
    export class CustomAttributeNamedArgument {
        ArgumentType: System.Type;
        MemberInfo: System.Reflection.MemberInfo;
        TypedValue: System.Reflection.CustomAttributeTypedArgument;
        MemberName: string;
        IsField: boolean;
        private m_memberInfo: System.Reflection.MemberInfo;
        private m_value: System.Reflection.CustomAttributeTypedArgument;
        Equals(obj: any): boolean; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        ToString(): string; //{ throw new Error("Not implemented.");}
    }
    export class CustomAttributeTypedArgument {
        ArgumentType: System.Type;
        Value: any;
        private m_value: any;
        private m_argumentType: System.Type;
        CanonicalizeValue(value: any): any; //{ throw new Error("Not implemented.");}
        CustomAttributeEncodingToType(encodedType: System.Reflection.CustomAttributeEncoding): System.Type; //{ throw new Error("Not implemented.");}
        EncodedValueToRawValue(val: number, encodedType: System.Reflection.CustomAttributeEncoding): any; //{ throw new Error("Not implemented.");}
        Equals(obj: any): boolean; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        ResolveType(scope: any, typeName: string): any; //{ throw new Error("Not implemented.");}
        ToString(): string; //{ throw new Error("Not implemented.");}
        ToString(typed: boolean): string; //{ throw new Error("Not implemented.");}
    }
    export class EventInfo extends System.Reflection.MemberInfo {
        MemberType: System.Reflection.MemberTypes;
        Attributes: System.Reflection.EventAttributes;
        AddMethod: System.Reflection.MethodInfo;
        RemoveMethod: System.Reflection.MethodInfo;
        RaiseMethod: System.Reflection.MethodInfo;
        EventHandlerType: System.Type;
        IsSpecialName: boolean;
        IsMulticast: boolean;
        AddEventHandler(target: any, handler: System.Delegate): any; //{ throw new Error("Not implemented.");}
        Equals(obj: any): boolean; //{ throw new Error("Not implemented.");}
        GetAddMethod(nonPublic: boolean): System.Reflection.MethodInfo; //{ throw new Error("Not implemented.");}
        GetAddMethod(): System.Reflection.MethodInfo; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        GetOtherMethods(nonPublic: boolean): any; //{ throw new Error("Not implemented.");}
        GetOtherMethods(): any; //{ throw new Error("Not implemented.");}
        GetRaiseMethod(nonPublic: boolean): System.Reflection.MethodInfo; //{ throw new Error("Not implemented.");}
        GetRaiseMethod(): System.Reflection.MethodInfo; //{ throw new Error("Not implemented.");}
        GetRemoveMethod(): System.Reflection.MethodInfo; //{ throw new Error("Not implemented.");}
        GetRemoveMethod(nonPublic: boolean): System.Reflection.MethodInfo; //{ throw new Error("Not implemented.");}
        RemoveEventHandler(target: any, handler: System.Delegate): any; //{ throw new Error("Not implemented.");}
    }
    export class FieldInfo extends System.Reflection.MemberInfo {
        MemberType: System.Reflection.MemberTypes;
        FieldHandle: System.RuntimeFieldHandle;
        FieldType: System.Type;
        Attributes: System.Reflection.FieldAttributes;
        IsPublic: boolean;
        IsPrivate: boolean;
        IsFamily: boolean;
        IsAssembly: boolean;
        IsFamilyAndAssembly: boolean;
        IsFamilyOrAssembly: boolean;
        IsStatic: boolean;
        IsInitOnly: boolean;
        IsLiteral: boolean;
        IsNotSerialized: boolean;
        IsSpecialName: boolean;
        IsPinvokeImpl: boolean;
        IsSecurityCritical: boolean;
        IsSecuritySafeCritical: boolean;
        IsSecurityTransparent: boolean;
        Equals(obj: any): boolean; //{ throw new Error("Not implemented.");}
        GetFieldFromHandle(handle: System.RuntimeFieldHandle): System.Reflection.FieldInfo; //{ throw new Error("Not implemented.");}
        GetFieldFromHandle(handle: System.RuntimeFieldHandle, declaringType: System.RuntimeTypeHandle): System.Reflection.FieldInfo; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        GetOptionalCustomModifiers(): System.Type[]; //{ throw new Error("Not implemented.");}
        GetRawConstantValue(): any; //{ throw new Error("Not implemented.");}
        GetRequiredCustomModifiers(): System.Type[]; //{ throw new Error("Not implemented.");}
        GetValue(obj: any): any; //{ throw new Error("Not implemented.");}
        GetValueDirect(obj: any): any; //{ throw new Error("Not implemented.");}
        SetValue(obj: any, value: any, invokeAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, culture: System.Globalization.CultureInfo): any; //{ throw new Error("Not implemented.");}
        SetValue(obj: any, value: any): any; //{ throw new Error("Not implemented.");}
        SetValueDirect(obj: any, value: any): any; //{ throw new Error("Not implemented.");}
    }
    interface ICustomAttributeProvider {
        GetCustomAttributes(attributeType: System.Type, inherit: boolean): any;
        GetCustomAttributes(inherit: boolean): any;
        IsDefined(attributeType: System.Type, inherit: boolean): boolean;
    }
    export class MemberInfo {
        MemberType: System.Reflection.MemberTypes;
        Name: string;
        DeclaringType: System.Type;
        ReflectedType: System.Type;
        CustomAttributes: System.Collections.Generic.IEnumerable<System.Reflection.CustomAttributeData>;
        MetadataToken: number;
        Module: System.Reflection.Module;
        CacheEquals(o: any): boolean; //{ throw new Error("Not implemented.");}
        Equals(obj: any): boolean; //{ throw new Error("Not implemented.");}
        GetCustomAttributes(inherit: boolean): any; //{ throw new Error("Not implemented.");}
        GetCustomAttributes(attributeType: System.Type, inherit: boolean): any; //{ throw new Error("Not implemented.");}
        GetCustomAttributesData(): System.Collections.Generic.IList<T>; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        IsDefined(attributeType: System.Type, inherit: boolean): boolean; //{ throw new Error("Not implemented.");}
    }
    export class MethodBase extends System.Reflection.MemberInfo {
        IsDynamicallyInvokable: boolean;
        MethodImplementationFlags: System.Reflection.MethodImplAttributes;
        MethodHandle: System.RuntimeMethodHandle;
        Attributes: System.Reflection.MethodAttributes;
        CallingConvention: System.Reflection.CallingConventions;
        IsGenericMethodDefinition: boolean;
        ContainsGenericParameters: boolean;
        IsGenericMethod: boolean;
        IsSecurityCritical: boolean;
        IsSecuritySafeCritical: boolean;
        IsSecurityTransparent: boolean;
        IsPublic: boolean;
        IsPrivate: boolean;
        IsFamily: boolean;
        IsAssembly: boolean;
        IsFamilyAndAssembly: boolean;
        IsFamilyOrAssembly: boolean;
        IsStatic: boolean;
        IsFinal: boolean;
        IsVirtual: boolean;
        IsHideBySig: boolean;
        IsAbstract: boolean;
        IsSpecialName: boolean;
        IsConstructor: boolean;
        FullName: string;
		private System.Runtime.InteropServices._MethodBase.IsPublic: boolean;
		private System.Runtime.InteropServices._MethodBase.IsPrivate: boolean;
		private System.Runtime.InteropServices._MethodBase.IsFamily: boolean;
		private System.Runtime.InteropServices._MethodBase.IsAssembly: boolean;
		private System.Runtime.InteropServices._MethodBase.IsFamilyAndAssembly: boolean;
		private System.Runtime.InteropServices._MethodBase.IsFamilyOrAssembly: boolean;
		private System.Runtime.InteropServices._MethodBase.IsStatic: boolean;
		private System.Runtime.InteropServices._MethodBase.IsFinal: boolean;
		private System.Runtime.InteropServices._MethodBase.IsVirtual: boolean;
		private System.Runtime.InteropServices._MethodBase.IsHideBySig: boolean;
		private System.Runtime.InteropServices._MethodBase.IsAbstract: boolean;
		private System.Runtime.InteropServices._MethodBase.IsSpecialName: boolean;
		private System.Runtime.InteropServices._MethodBase.IsConstructor: boolean;
        CheckArguments(parameters: any, binder: System.Reflection.Binder, invokeAttr: System.Reflection.BindingFlags, culture: System.Globalization.CultureInfo, sig: any): any; //{ throw new Error("Not implemented.");}
        ConstructParameters(parameterTypes: System.Type[], callingConvention: System.Reflection.CallingConventions, serialization: boolean): string; //{ throw new Error("Not implemented.");}
        Equals(obj: any): boolean; //{ throw new Error("Not implemented.");}
        FormatNameAndSig(serialization: boolean): string; //{ throw new Error("Not implemented.");}
        FormatNameAndSig(): string; //{ throw new Error("Not implemented.");}
        GetCurrentMethod(): System.Reflection.MethodBase; //{ throw new Error("Not implemented.");}
        GetGenericArguments(): System.Type[]; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        GetMethodBody(): any; //{ throw new Error("Not implemented.");}
        GetMethodDesc(): number; //{ throw new Error("Not implemented.");}
        GetMethodFromHandle(handle: System.RuntimeMethodHandle, declaringType: System.RuntimeTypeHandle): System.Reflection.MethodBase; //{ throw new Error("Not implemented.");}
        GetMethodFromHandle(handle: System.RuntimeMethodHandle): System.Reflection.MethodBase; //{ throw new Error("Not implemented.");}
        GetMethodImplementationFlags(): System.Reflection.MethodImplAttributes; //{ throw new Error("Not implemented.");}
        GetParameters(): any; //{ throw new Error("Not implemented.");}
        GetParametersNoCopy(): any; //{ throw new Error("Not implemented.");}
        GetParameterTypes(): System.Type[]; //{ throw new Error("Not implemented.");}
        Invoke(obj: any, parameters: any): any; //{ throw new Error("Not implemented.");}
        Invoke(obj: any, invokeAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, parameters: any, culture: System.Globalization.CultureInfo): any; //{ throw new Error("Not implemented.");}
    }
    export class MethodInfo extends System.Reflection.MethodBase {
        MemberType: System.Reflection.MemberTypes;
        ReturnType: System.Type;
        ReturnParameter: System.Reflection.ParameterInfo;
        ReturnTypeCustomAttributes: System.Reflection.ICustomAttributeProvider;
        CreateDelegate(delegateType: System.Type): System.Delegate; //{ throw new Error("Not implemented.");}
        CreateDelegate(delegateType: System.Type, target: any): System.Delegate; //{ throw new Error("Not implemented.");}
        Equals(obj: any): boolean; //{ throw new Error("Not implemented.");}
        GetBaseDefinition(): System.Reflection.MethodInfo; //{ throw new Error("Not implemented.");}
        GetGenericArguments(): System.Type[]; //{ throw new Error("Not implemented.");}
        GetGenericMethodDefinition(): System.Reflection.MethodInfo; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        MakeGenericMethod(typeArguments: System.Type[]): System.Reflection.MethodInfo; //{ throw new Error("Not implemented.");}
    }
    export class Module {
        CustomAttributes: System.Collections.Generic.IEnumerable<System.Reflection.CustomAttributeData>;
        MDStreamVersion: number;
        FullyQualifiedName: string;
        ModuleVersionId: System.Guid;
        MetadataToken: number;
        ScopeName: string;
        Name: string;
        Assembly: System.Reflection.Assembly;
        ModuleHandle: System.ModuleHandle;
        static FilterTypeName: any;
        static FilterTypeNameIgnoreCase: any;
        Equals(o: any): boolean; //{ throw new Error("Not implemented.");}
        FindTypes(filter: any, filterCriteria: any): System.Type[]; //{ throw new Error("Not implemented.");}
        GetCustomAttributes(inherit: boolean): any; //{ throw new Error("Not implemented.");}
        GetCustomAttributes(attributeType: System.Type, inherit: boolean): any; //{ throw new Error("Not implemented.");}
        GetCustomAttributesData(): System.Collections.Generic.IList<T>; //{ throw new Error("Not implemented.");}
        GetField(name: string): System.Reflection.FieldInfo; //{ throw new Error("Not implemented.");}
        GetField(name: string, bindingAttr: System.Reflection.BindingFlags): System.Reflection.FieldInfo; //{ throw new Error("Not implemented.");}
        GetFields(): any; //{ throw new Error("Not implemented.");}
        GetFields(bindingFlags: System.Reflection.BindingFlags): any; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        GetMethod(name: string, bindingAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, callConvention: System.Reflection.CallingConventions, types: System.Type[], modifiers: any): System.Reflection.MethodInfo; //{ throw new Error("Not implemented.");}
        GetMethod(name: string): System.Reflection.MethodInfo; //{ throw new Error("Not implemented.");}
        GetMethod(name: string, types: System.Type[]): System.Reflection.MethodInfo; //{ throw new Error("Not implemented.");}
        GetMethodImpl(name: string, bindingAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, callConvention: System.Reflection.CallingConventions, types: System.Type[], modifiers: any): System.Reflection.MethodInfo; //{ throw new Error("Not implemented.");}
        GetMethods(bindingFlags: System.Reflection.BindingFlags): any; //{ throw new Error("Not implemented.");}
        GetMethods(): any; //{ throw new Error("Not implemented.");}
        GetModuleHandle(): System.ModuleHandle; //{ throw new Error("Not implemented.");}
        GetObjectData(info: any, context: any): any; //{ throw new Error("Not implemented.");}
        GetPEKind(peKind: any, machine: any): any; //{ throw new Error("Not implemented.");}
        GetSignerCertificate(): System.Security.Cryptography.X509Certificates.X509Certificate; //{ throw new Error("Not implemented.");}
        GetType(className: string, throwOnError: boolean, ignoreCase: boolean): System.Type; //{ throw new Error("Not implemented.");}
        GetType(className: string): System.Type; //{ throw new Error("Not implemented.");}
        GetType(className: string, ignoreCase: boolean): System.Type; //{ throw new Error("Not implemented.");}
        GetTypes(): System.Type[]; //{ throw new Error("Not implemented.");}
        IsDefined(attributeType: System.Type, inherit: boolean): boolean; //{ throw new Error("Not implemented.");}
        IsResource(): boolean; //{ throw new Error("Not implemented.");}
        ResolveField(metadataToken: number): System.Reflection.FieldInfo; //{ throw new Error("Not implemented.");}
        ResolveField(metadataToken: number, genericTypeArguments: System.Type[], genericMethodArguments: System.Type[]): System.Reflection.FieldInfo; //{ throw new Error("Not implemented.");}
        ResolveMember(metadataToken: number): System.Reflection.MemberInfo; //{ throw new Error("Not implemented.");}
        ResolveMember(metadataToken: number, genericTypeArguments: System.Type[], genericMethodArguments: System.Type[]): System.Reflection.MemberInfo; //{ throw new Error("Not implemented.");}
        ResolveMethod(metadataToken: number, genericTypeArguments: System.Type[], genericMethodArguments: System.Type[]): System.Reflection.MethodBase; //{ throw new Error("Not implemented.");}
        ResolveMethod(metadataToken: number): System.Reflection.MethodBase; //{ throw new Error("Not implemented.");}
        ResolveSignature(metadataToken: number): System.Byte[]; //{ throw new Error("Not implemented.");}
        ResolveString(metadataToken: number): string; //{ throw new Error("Not implemented.");}
        ResolveType(metadataToken: number, genericTypeArguments: System.Type[], genericMethodArguments: System.Type[]): System.Type; //{ throw new Error("Not implemented.");}
        ResolveType(metadataToken: number): System.Type; //{ throw new Error("Not implemented.");}
        ToString(): string; //{ throw new Error("Not implemented.");}
    }
    export class ParameterInfo {
        ParameterType: System.Type;
        Name: string;
        HasDefaultValue: boolean;
        DefaultValue: any;
        RawDefaultValue: any;
        Position: number;
        Attributes: System.Reflection.ParameterAttributes;
        Member: System.Reflection.MemberInfo;
        IsIn: boolean;
        IsOut: boolean;
        IsLcid: boolean;
        IsRetval: boolean;
        IsOptional: boolean;
        MetadataToken: number;
        CustomAttributes: System.Collections.Generic.IEnumerable<System.Reflection.CustomAttributeData>;
        NameImpl: string;
        ClassImpl: System.Type;
        PositionImpl: number;
        AttrsImpl: System.Reflection.ParameterAttributes;
        DefaultValueImpl: any;
        MemberImpl: System.Reflection.MemberInfo;
        private _importer: number;
        private _token: number;
        private bExtraConstChecked: boolean;
        GetCustomAttributes(inherit: boolean): any; //{ throw new Error("Not implemented.");}
        GetCustomAttributes(attributeType: System.Type, inherit: boolean): any; //{ throw new Error("Not implemented.");}
        GetCustomAttributesData(): System.Collections.Generic.IList<T>; //{ throw new Error("Not implemented.");}
        GetOptionalCustomModifiers(): System.Type[]; //{ throw new Error("Not implemented.");}
        GetRealObject(context: any): any; //{ throw new Error("Not implemented.");}
        GetRequiredCustomModifiers(): System.Type[]; //{ throw new Error("Not implemented.");}
        IsDefined(attributeType: System.Type, inherit: boolean): boolean; //{ throw new Error("Not implemented.");}
        SetAttributes(attributes: System.Reflection.ParameterAttributes): any; //{ throw new Error("Not implemented.");}
        SetName(name: string): any; //{ throw new Error("Not implemented.");}
        ToString(): string; //{ throw new Error("Not implemented.");}
    }
    export class PropertyInfo extends System.Reflection.MemberInfo {
        MemberType: System.Reflection.MemberTypes;
        PropertyType: System.Type;
        Attributes: System.Reflection.PropertyAttributes;
        CanRead: boolean;
        CanWrite: boolean;
        GetMethod: System.Reflection.MethodInfo;
        SetMethod: System.Reflection.MethodInfo;
        IsSpecialName: boolean;
        Equals(obj: any): boolean; //{ throw new Error("Not implemented.");}
        GetAccessors(nonPublic: boolean): any; //{ throw new Error("Not implemented.");}
        GetAccessors(): any; //{ throw new Error("Not implemented.");}
        GetConstantValue(): any; //{ throw new Error("Not implemented.");}
        GetGetMethod(nonPublic: boolean): System.Reflection.MethodInfo; //{ throw new Error("Not implemented.");}
        GetGetMethod(): System.Reflection.MethodInfo; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        GetIndexParameters(): any; //{ throw new Error("Not implemented.");}
        GetOptionalCustomModifiers(): System.Type[]; //{ throw new Error("Not implemented.");}
        GetRawConstantValue(): any; //{ throw new Error("Not implemented.");}
        GetRequiredCustomModifiers(): System.Type[]; //{ throw new Error("Not implemented.");}
        GetSetMethod(): System.Reflection.MethodInfo; //{ throw new Error("Not implemented.");}
        GetSetMethod(nonPublic: boolean): System.Reflection.MethodInfo; //{ throw new Error("Not implemented.");}
        GetValue(obj: any, invokeAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, index: any, culture: System.Globalization.CultureInfo): any; //{ throw new Error("Not implemented.");}
        GetValue(obj: any, index: any): any; //{ throw new Error("Not implemented.");}
        GetValue(obj: any): any; //{ throw new Error("Not implemented.");}
        SetValue(obj: any, value: any): any; //{ throw new Error("Not implemented.");}
        SetValue(obj: any, value: any, invokeAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, index: any, culture: System.Globalization.CultureInfo): any; //{ throw new Error("Not implemented.");}
        SetValue(obj: any, value: any, index: any): any; //{ throw new Error("Not implemented.");}
    }
    export class TypeInfo extends System.Type {
        GenericTypeParameters: System.Type[];
        DeclaredConstructors: System.Collections.Generic.IEnumerable<System.Reflection.ConstructorInfo>;
        DeclaredEvents: System.Collections.Generic.IEnumerable<System.Reflection.EventInfo>;
        DeclaredFields: System.Collections.Generic.IEnumerable<System.Reflection.FieldInfo>;
        DeclaredMembers: System.Collections.Generic.IEnumerable<System.Reflection.MemberInfo>;
        DeclaredMethods: System.Collections.Generic.IEnumerable<System.Reflection.MethodInfo>;
        DeclaredNestedTypes: System.Collections.Generic.IEnumerable<System.Reflection.TypeInfo>;
        DeclaredProperties: System.Collections.Generic.IEnumerable<System.Reflection.PropertyInfo>;
        ImplementedInterfaces: System.Collections.Generic.IEnumerable<System.Type>;
        AsType(): System.Type; //{ throw new Error("Not implemented.");}
        GetDeclaredEvent(name: string): System.Reflection.EventInfo; //{ throw new Error("Not implemented.");}
        GetDeclaredField(name: string): System.Reflection.FieldInfo; //{ throw new Error("Not implemented.");}
        GetDeclaredMethod(name: string): System.Reflection.MethodInfo; //{ throw new Error("Not implemented.");}
        GetDeclaredMethods(name: string): System.Collections.Generic.IEnumerable<System.Reflection.MethodInfo>; //{ throw new Error("Not implemented.");}
        GetDeclaredNestedType(name: string): System.Reflection.TypeInfo; //{ throw new Error("Not implemented.");}
        GetDeclaredProperty(name: string): System.Reflection.PropertyInfo; //{ throw new Error("Not implemented.");}
        IsAssignableFrom(typeInfo: System.Reflection.TypeInfo): boolean; //{ throw new Error("Not implemented.");}
    }
}
declare module System.Resources {
    export class ResourceManager {
        BaseName: string;
        IgnoreCase: boolean;
        ResourceSetType: System.Type;
        FallbackLocation: System.Resources.UltimateResourceFallbackLocation;
        BaseNameField: string;
        ResourceSets: System.Collections.Hashtable;
        private _resourceSets: System.Collections.Generic.Dictionary<TKey, TValue>;
        private moduleDir: string;
        MainAssembly: System.Reflection.Assembly;
        private _locationInfo: System.Type;
        private _userResourceSet: System.Type;
        private _neutralResourcesCulture: System.Globalization.CultureInfo;
        private _lastUsedResourceCache: any;
        private _ignoreCase: boolean;
        private UseManifest: boolean;
        private UseSatelliteAssem: boolean;
        private _fallbackLoc: System.Resources.UltimateResourceFallbackLocation;
        private _satelliteContractVersion: System.Version;
        private _lookedForSatelliteContractVersion: boolean;
        private _callingAssembly: System.Reflection.Assembly;
        private m_callingAssembly: any;
        private resourceGroveler: any;
        private _bUsingModernResourceManagement: boolean;
        private _WinRTResourceManager: any;
        private _PRIonAppXInitialized: boolean;
        private _PRIExceptionInfo: any;
        private static _installedSatelliteInfo: System.Collections.Hashtable;
        private static _checkedConfigFile: boolean;
        static MagicNumber: number;
        static HeaderVersionNumber: number;
        private static _minResourceSet: System.Type;
        static ResReaderTypeName: string;
        static ResSetTypeName: string;
        static MscorlibName: string;
        static DEBUG: number;
        private static s_IsAppXModel: boolean;
        AddResourceSet(localResourceSets: System.Collections.Generic.Dictionary<TKey, TValue>, cultureName: string, rs: any): any; //{ throw new Error("Not implemented.");}
        CommonAssemblyInit(): any; //{ throw new Error("Not implemented.");}
        CompareNames(asmTypeName1: string, typeName2: string, asmName2: any): boolean; //{ throw new Error("Not implemented.");}
        CreateFileBasedResourceManager(baseName: string, resourceDir: string, usingResourceSet: System.Type): System.Resources.ResourceManager; //{ throw new Error("Not implemented.");}
        GetFirstResourceSet(culture: System.Globalization.CultureInfo): any; //{ throw new Error("Not implemented.");}
        GetNeutralResourcesLanguage(a: System.Reflection.Assembly): System.Globalization.CultureInfo; //{ throw new Error("Not implemented.");}
        GetObject(name: string, culture: System.Globalization.CultureInfo, wrapUnmanagedMemStream: boolean): any; //{ throw new Error("Not implemented.");}
        GetObject(name: string, culture: System.Globalization.CultureInfo): any; //{ throw new Error("Not implemented.");}
        GetObject(name: string): any; //{ throw new Error("Not implemented.");}
        GetResourceFileName(culture: System.Globalization.CultureInfo): string; //{ throw new Error("Not implemented.");}
        GetResourceSet(culture: System.Globalization.CultureInfo, createIfNotExists: boolean, tryParents: boolean): any; //{ throw new Error("Not implemented.");}
        GetSatelliteAssembliesFromConfig(): System.Collections.Hashtable; //{ throw new Error("Not implemented.");}
        GetSatelliteContractVersion(a: System.Reflection.Assembly): System.Version; //{ throw new Error("Not implemented.");}
        GetStream(name: string): any; //{ throw new Error("Not implemented.");}
        GetStream(name: string, culture: System.Globalization.CultureInfo): any; //{ throw new Error("Not implemented.");}
        GetString(name: string): string; //{ throw new Error("Not implemented.");}
        GetString(name: string, culture: System.Globalization.CultureInfo): string; //{ throw new Error("Not implemented.");}
        GetStringFromPRI(stringName: string, startingCulture: string, neutralResourcesCulture: string): string; //{ throw new Error("Not implemented.");}
        GetWinRTResourceManager(): any; //{ throw new Error("Not implemented.");}
        Init(): any; //{ throw new Error("Not implemented.");}
        InternalGetResourceSet(requestedCulture: System.Globalization.CultureInfo, createIfNotExists: boolean, tryParents: boolean, stackMark: any): any; //{ throw new Error("Not implemented.");}
        InternalGetResourceSet(culture: System.Globalization.CultureInfo, createIfNotExists: boolean, tryParents: boolean): any; //{ throw new Error("Not implemented.");}
        OnDeserialized(ctx: any): any; //{ throw new Error("Not implemented.");}
        OnDeserializing(ctx: any): any; //{ throw new Error("Not implemented.");}
        OnSerializing(ctx: any): any; //{ throw new Error("Not implemented.");}
        ReleaseAllResources(): any; //{ throw new Error("Not implemented.");}
        SetAppXConfiguration(): any; //{ throw new Error("Not implemented.");}
        ShouldUseSatelliteAssemblyResourceLookupUnderAppX(resourcesAssembly: any): boolean; //{ throw new Error("Not implemented.");}
        TryLookingForSatellite(lookForCulture: System.Globalization.CultureInfo): boolean; //{ throw new Error("Not implemented.");}
    }
}
declare module System.Runtime.ConstrainedExecution {
    export class CriticalFinalizerObject {
        Finalize(): any; //{ throw new Error("Not implemented.");}
    }
}
declare module System.Runtime.InteropServices {
    export class ExternalException extends System.SystemException {
        ErrorCode: number;
        ToString(): string; //{ throw new Error("Not implemented.");}
    }
    export class SafeHandle extends System.Runtime.ConstrainedExecution.CriticalFinalizerObject {
        IsClosed: boolean;
        IsInvalid: boolean;
        handle: number;
        private _state: number;
        private _ownsHandle: boolean;
        private _fullyInitialized: boolean;
        Close(): any; //{ throw new Error("Not implemented.");}
        DangerousAddRef(success: any): any; //{ throw new Error("Not implemented.");}
        DangerousGetHandle(): number; //{ throw new Error("Not implemented.");}
        DangerousRelease(): any; //{ throw new Error("Not implemented.");}
        Dispose(): any; //{ throw new Error("Not implemented.");}
        Dispose(disposing: boolean): any; //{ throw new Error("Not implemented.");}
        Finalize(): any; //{ throw new Error("Not implemented.");}
        InternalDispose(): any; //{ throw new Error("Not implemented.");}
        InternalFinalize(): any; //{ throw new Error("Not implemented.");}
        ReleaseHandle(): boolean; //{ throw new Error("Not implemented.");}
        SetHandle(handle: number): any; //{ throw new Error("Not implemented.");}
        SetHandleAsInvalid(): any; //{ throw new Error("Not implemented.");}
    }
    export class StructLayoutAttribute extends System.Attribute {
        Value: System.Runtime.InteropServices.LayoutKind;
        _val: System.Runtime.InteropServices.LayoutKind;
        Pack: number;
        Size: number;
        CharSet: System.Runtime.InteropServices.CharSet;
        GetCustomAttribute(type: any): System.Attribute; //{ throw new Error("Not implemented.");}
        IsDefined(type: any): boolean; //{ throw new Error("Not implemented.");}
    }
}
declare module System.Security {
    interface IEvidenceFactory {
        Evidence: System.Security.Policy.Evidence;
    }
    export class PermissionSet {
        SyncRoot: any;
        IsSynchronized: boolean;
        IsReadOnly: boolean;
        Count: number;
        IgnoreTypeLoadFailures: boolean;
        private m_Unrestricted: boolean;
        private m_allPermissionsDecoded: boolean;
        m_permSet: any;
        private m_ignoreTypeLoadFailures: boolean;
        private m_serializedPermissionSet: string;
        private m_CheckedForNonCas: boolean;
        private m_ContainsCas: boolean;
        private m_ContainsNonCas: boolean;
        private m_permSetSaved: any;
        private readableonly: boolean;
        private m_unrestrictedPermSet: any;
        private m_normalPermSet: any;
        private m_canUnrestrictedOverride: boolean;
        static s_fullTrust: System.Security.PermissionSet;
        AddPermission(perm: any): any; //{ throw new Error("Not implemented.");}
        AddPermissionImpl(perm: any): any; //{ throw new Error("Not implemented.");}
        Assert(): any; //{ throw new Error("Not implemented.");}
        CheckAssertion(target: System.Security.PermissionSet): boolean; //{ throw new Error("Not implemented.");}
        CheckDecoded(demandedPerm: any, tokenDemandedPerm: any): any; //{ throw new Error("Not implemented.");}
        CheckDecoded(index: number): any; //{ throw new Error("Not implemented.");}
        CheckDecoded(demandedSet: System.Security.PermissionSet): any; //{ throw new Error("Not implemented.");}
        CheckDemand(target: System.Security.PermissionSet, firstPermThatFailed: any): boolean; //{ throw new Error("Not implemented.");}
        CheckDeny(deniedSet: System.Security.PermissionSet, firstPermThatFailed: any): boolean; //{ throw new Error("Not implemented.");}
        CheckPermitOnly(target: System.Security.PermissionSet, firstPermThatFailed: any): boolean; //{ throw new Error("Not implemented.");}
        CheckSet(): any; //{ throw new Error("Not implemented.");}
        Contains(perm: any): boolean; //{ throw new Error("Not implemented.");}
        ContainsNonCodeAccessPermissions(): boolean; //{ throw new Error("Not implemented.");}
        ConvertPermissionSet(inFormat: string, inData: System.Byte[], outFormat: string): System.Byte[]; //{ throw new Error("Not implemented.");}
        Copy(): System.Security.PermissionSet; //{ throw new Error("Not implemented.");}
        CopyTo(array: System.Array, index: number): any; //{ throw new Error("Not implemented.");}
        CopyWithNoIdentityPermissions(): System.Security.PermissionSet; //{ throw new Error("Not implemented.");}
        CreateEmptyPermissionSetXml(): any; //{ throw new Error("Not implemented.");}
        CreatePerm(obj: any): any; //{ throw new Error("Not implemented.");}
        CreatePerm(obj: any, ignoreTypeLoadFailures: boolean): any; //{ throw new Error("Not implemented.");}
        CreatePermission(obj: any, index: number): any; //{ throw new Error("Not implemented.");}
        CreateSerialized(attrs: any, serialize: boolean, nonCasBlob: any, casPset: any, fullTrustOnlyResources: System.Security.Permissions.HostProtectionResource, allowEmptyPermissionSets: boolean): System.Byte[]; //{ throw new Error("Not implemented.");}
        DEBUG_COND_WRITE(exp: boolean, str: string): any; //{ throw new Error("Not implemented.");}
        DEBUG_PRINTSTACK(e: System.Exception): any; //{ throw new Error("Not implemented.");}
        DEBUG_WRITE(str: string): any; //{ throw new Error("Not implemented.");}
        DecodeAllPermissions(): any; //{ throw new Error("Not implemented.");}
        DecodeXml(data: System.Byte[], fullTrustOnlyResources: System.Security.Permissions.HostProtectionResource, inaccessibleResources: System.Security.Permissions.HostProtectionResource): boolean; //{ throw new Error("Not implemented.");}
        Demand(): any; //{ throw new Error("Not implemented.");}
        DemandNonCAS(): any; //{ throw new Error("Not implemented.");}
        Deny(): any; //{ throw new Error("Not implemented.");}
        EncodeXml(): System.Byte[]; //{ throw new Error("Not implemented.");}
        Equals(obj: any): boolean; //{ throw new Error("Not implemented.");}
        FastIsEmpty(): boolean; //{ throw new Error("Not implemented.");}
        FilterHostProtectionPermissions(fullTrustOnly: System.Security.Permissions.HostProtectionResource, inaccessible: System.Security.Permissions.HostProtectionResource): any; //{ throw new Error("Not implemented.");}
        FromXml(doc: any, position: number, allowInternalOnly: boolean): any; //{ throw new Error("Not implemented.");}
        FromXml(et: any, allowInternalOnly: boolean, ignoreTypeLoadFailures: boolean): any; //{ throw new Error("Not implemented.");}
        FromXml(et: any): any; //{ throw new Error("Not implemented.");}
        GetCasOnlySet(): System.Security.PermissionSet; //{ throw new Error("Not implemented.");}
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
        GetEnumeratorImpl(): any; //{ throw new Error("Not implemented.");}
        GetEnumeratorInternal(): any; //{ throw new Error("Not implemented.");}
        GetFirstPerm(): any; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        GetPermission(permClass: System.Type): any; //{ throw new Error("Not implemented.");}
        GetPermission(perm: any): any; //{ throw new Error("Not implemented.");}
        GetPermission(permToken: any): any; //{ throw new Error("Not implemented.");}
        GetPermission(index: number): any; //{ throw new Error("Not implemented.");}
        GetPermissionElement(el: any): any; //{ throw new Error("Not implemented.");}
        GetPermissionImpl(permClass: System.Type): any; //{ throw new Error("Not implemented.");}
        InplaceIntersect(other: System.Security.PermissionSet): any; //{ throw new Error("Not implemented.");}
        InplaceUnion(other: System.Security.PermissionSet): any; //{ throw new Error("Not implemented.");}
        InternalToXml(): any; //{ throw new Error("Not implemented.");}
        Intersect(other: System.Security.PermissionSet): System.Security.PermissionSet; //{ throw new Error("Not implemented.");}
        IsEmpty(): boolean; //{ throw new Error("Not implemented.");}
        IsIntersectingAssertedPermissions(assertSet1: System.Security.PermissionSet, assertSet2: System.Security.PermissionSet): boolean; //{ throw new Error("Not implemented.");}
        IsPermissionTag(tag: string, allowInternalOnly: boolean): boolean; //{ throw new Error("Not implemented.");}
        IsSubsetOf(target: System.Security.PermissionSet): boolean; //{ throw new Error("Not implemented.");}
        IsSubsetOfHelper(target: System.Security.PermissionSet, type: System.Security.PermissionSet.IsSubsetOfType, firstPermThatFailed: any, ignoreNonCas: boolean): boolean; //{ throw new Error("Not implemented.");}
        IsUnrestricted(): boolean; //{ throw new Error("Not implemented.");}
        MergeDeniedSet(denied: System.Security.PermissionSet): any; //{ throw new Error("Not implemented.");}
        MergePermission(perm: any, separateCasFromNonCas: boolean, casPset: any, nonCasPset: any): any; //{ throw new Error("Not implemented.");}
        NormalizePermissionSet(): any; //{ throw new Error("Not implemented.");}
        OnDeserialized(ctx: any): any; //{ throw new Error("Not implemented.");}
        OnDeserializing(ctx: any): any; //{ throw new Error("Not implemented.");}
        OnSerialized(context: any): any; //{ throw new Error("Not implemented.");}
        OnSerializing(ctx: any): any; //{ throw new Error("Not implemented.");}
        PermitOnly(): any; //{ throw new Error("Not implemented.");}
        RemoveAssertedPermissionSet(demandSet: System.Security.PermissionSet, assertSet: System.Security.PermissionSet, alteredDemandSet: any): any; //{ throw new Error("Not implemented.");}
        RemovePermission(index: number): any; //{ throw new Error("Not implemented.");}
        RemovePermission(permClass: System.Type): any; //{ throw new Error("Not implemented.");}
        RemovePermissionImpl(permClass: System.Type): any; //{ throw new Error("Not implemented.");}
        RemoveRefusedPermissionSet(assertSet: System.Security.PermissionSet, refusedSet: System.Security.PermissionSet, bFailedToCompress: any): System.Security.PermissionSet; //{ throw new Error("Not implemented.");}
        Reset(): any; //{ throw new Error("Not implemented.");}
        RevertAssert(): any; //{ throw new Error("Not implemented.");}
        SafeChildAdd(parent: any, child: any, copy: boolean): any; //{ throw new Error("Not implemented.");}
        SetPermission(perm: any): any; //{ throw new Error("Not implemented.");}
        SetPermissionImpl(perm: any): any; //{ throw new Error("Not implemented.");}
        SetUnrestricted(unrestricted: boolean): any; //{ throw new Error("Not implemented.");}
        SetupSecurity(): any; //{ throw new Error("Not implemented.");}
        ToString(): string; //{ throw new Error("Not implemented.");}
        ToXml(permName: string): any; //{ throw new Error("Not implemented.");}
        ToXml(): any; //{ throw new Error("Not implemented.");}
        Union(other: System.Security.PermissionSet): System.Security.PermissionSet; //{ throw new Error("Not implemented.");}
    }
}
declare module System.Security.Cryptography {
    export class AsymmetricAlgorithm {
        KeySize: number;
        LegalKeySizes: System.Security.Cryptography.KeySizes[];
        SignatureAlgorithm: string;
        KeyExchangeAlgorithm: string;
        KeySizeValue: number;
        LegalKeySizesValue: System.Security.Cryptography.KeySizes[];
        Clear(): any; //{ throw new Error("Not implemented.");}
        Create(): System.Security.Cryptography.AsymmetricAlgorithm; //{ throw new Error("Not implemented.");}
        Create(algName: string): System.Security.Cryptography.AsymmetricAlgorithm; //{ throw new Error("Not implemented.");}
        Dispose(): any; //{ throw new Error("Not implemented.");}
        Dispose(disposing: boolean): any; //{ throw new Error("Not implemented.");}
        FromXmlString(xmlString: string): any; //{ throw new Error("Not implemented.");}
        ToXmlString(includePrivateParameters: boolean): string; //{ throw new Error("Not implemented.");}
    }
}
declare module System.Security.Cryptography.X509Certificates {
    export class SafeCertContextHandle extends Microsoft.Win32.SafeHandles.SafeHandleZeroOrMinusOneIsInvalid {
        static InvalidHandle: System.Security.Cryptography.X509Certificates.SafeCertContextHandle;
        pCertContext: number;
        _FreePCertContext(pCert: number): any; //{ throw new Error("Not implemented.");}
        ReleaseHandle(): boolean; //{ throw new Error("Not implemented.");}
    }
    export class X509Certificate {
        Handle: number;
        Issuer: string;
        Subject: string;
        CertContext: System.Security.Cryptography.X509Certificates.SafeCertContextHandle;
        private NotAfter: Date;
        private NotBefore: Date;
        private RawData: System.Byte[];
        private SerialNumber: string;
        private m_subjectName: string;
        private m_issuerName: string;
        private m_serialNumber: System.Byte[];
        private m_publicKeyParameters: System.Byte[];
        private m_publicKeyValue: System.Byte[];
        private m_publicKeyOid: string;
        private m_rawData: System.Byte[];
        private m_thumbprint: System.Byte[];
        private m_notBefore: Date;
        private m_notAfter: Date;
        private m_safeCertContext: System.Security.Cryptography.X509Certificates.SafeCertContextHandle;
        private m_certContextCloned: boolean;
        CreateFromCertFile(filename: string): System.Security.Cryptography.X509Certificates.X509Certificate; //{ throw new Error("Not implemented.");}
        CreateFromSignedFile(filename: string): System.Security.Cryptography.X509Certificates.X509Certificate; //{ throw new Error("Not implemented.");}
        Dispose(disposing: boolean): any; //{ throw new Error("Not implemented.");}
        Dispose(): any; //{ throw new Error("Not implemented.");}
        Equals(other: System.Security.Cryptography.X509Certificates.X509Certificate): boolean; //{ throw new Error("Not implemented.");}
        Equals(obj: any): boolean; //{ throw new Error("Not implemented.");}
        Export(contentType: System.Security.Cryptography.X509Certificates.X509ContentType, password: any): System.Byte[]; //{ throw new Error("Not implemented.");}
        Export(contentType: System.Security.Cryptography.X509Certificates.X509ContentType, password: string): System.Byte[]; //{ throw new Error("Not implemented.");}
        Export(contentType: System.Security.Cryptography.X509Certificates.X509ContentType): System.Byte[]; //{ throw new Error("Not implemented.");}
        ExportHelper(contentType: System.Security.Cryptography.X509Certificates.X509ContentType, password: any): System.Byte[]; //{ throw new Error("Not implemented.");}
        FormatDate(date: Date): string; //{ throw new Error("Not implemented.");}
        GetCertContextForCloning(): System.Security.Cryptography.X509Certificates.SafeCertContextHandle; //{ throw new Error("Not implemented.");}
        GetCertHash(): System.Byte[]; //{ throw new Error("Not implemented.");}
        GetCertHashString(): string; //{ throw new Error("Not implemented.");}
        GetEffectiveDateString(): string; //{ throw new Error("Not implemented.");}
        GetExpirationDateString(): string; //{ throw new Error("Not implemented.");}
        GetFormat(): string; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        GetIssuerName(): string; //{ throw new Error("Not implemented.");}
        GetKeyAlgorithm(): string; //{ throw new Error("Not implemented.");}
        GetKeyAlgorithmParameters(): System.Byte[]; //{ throw new Error("Not implemented.");}
        GetKeyAlgorithmParametersString(): string; //{ throw new Error("Not implemented.");}
        GetName(): string; //{ throw new Error("Not implemented.");}
        GetPublicKey(): System.Byte[]; //{ throw new Error("Not implemented.");}
        GetPublicKeyString(): string; //{ throw new Error("Not implemented.");}
        GetRawCertData(): System.Byte[]; //{ throw new Error("Not implemented.");}
        GetRawCertDataString(): string; //{ throw new Error("Not implemented.");}
        GetSerialNumber(): System.Byte[]; //{ throw new Error("Not implemented.");}
        GetSerialNumberString(): string; //{ throw new Error("Not implemented.");}
        Import(fileName: string): any; //{ throw new Error("Not implemented.");}
        Import(fileName: string, password: string, keyStorageFlags: System.Security.Cryptography.X509Certificates.X509KeyStorageFlags): any; //{ throw new Error("Not implemented.");}
        Import(rawData: System.Byte[], password: any, keyStorageFlags: System.Security.Cryptography.X509Certificates.X509KeyStorageFlags): any; //{ throw new Error("Not implemented.");}
        Import(rawData: System.Byte[], password: string, keyStorageFlags: System.Security.Cryptography.X509Certificates.X509KeyStorageFlags): any; //{ throw new Error("Not implemented.");}
        Import(rawData: System.Byte[]): any; //{ throw new Error("Not implemented.");}
        Import(fileName: string, password: any, keyStorageFlags: System.Security.Cryptography.X509Certificates.X509KeyStorageFlags): any; //{ throw new Error("Not implemented.");}
        Init(): any; //{ throw new Error("Not implemented.");}
        LoadCertificateFromBlob(rawData: System.Byte[], password: any, keyStorageFlags: System.Security.Cryptography.X509Certificates.X509KeyStorageFlags): any; //{ throw new Error("Not implemented.");}
        LoadCertificateFromFile(fileName: string, password: any, keyStorageFlags: System.Security.Cryptography.X509Certificates.X509KeyStorageFlags): any; //{ throw new Error("Not implemented.");}
        Reset(): any; //{ throw new Error("Not implemented.");}
        SetThumbprint(): any; //{ throw new Error("Not implemented.");}
        ThrowIfContextInvalid(): any; //{ throw new Error("Not implemented.");}
        ToString(fVerbose: boolean): string; //{ throw new Error("Not implemented.");}
        ToString(): string; //{ throw new Error("Not implemented.");}
    }
    export class X509CertificateCollection extends System.Collections.CollectionBase {
        Item: System.Security.Cryptography.X509Certificates.X509Certificate;
        Add(value: System.Security.Cryptography.X509Certificates.X509Certificate): number; //{ throw new Error("Not implemented.");}
        AddRange(value: any): any; //{ throw new Error("Not implemented.");}
        AddRange(value: System.Security.Cryptography.X509Certificates.X509CertificateCollection): any; //{ throw new Error("Not implemented.");}
        Contains(value: System.Security.Cryptography.X509Certificates.X509Certificate): boolean; //{ throw new Error("Not implemented.");}
        CopyTo(array: any, index: number): any; //{ throw new Error("Not implemented.");}
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        IndexOf(value: System.Security.Cryptography.X509Certificates.X509Certificate): number; //{ throw new Error("Not implemented.");}
        Insert(index: number, value: System.Security.Cryptography.X509Certificates.X509Certificate): any; //{ throw new Error("Not implemented.");}
        Remove(value: System.Security.Cryptography.X509Certificates.X509Certificate): any; //{ throw new Error("Not implemented.");}
    }
}
declare module System.Security.Cryptography.Xml {
    export class CanonicalXmlNodeList extends System.Xml.XmlNodeList {
        Count: number;
        IsFixedSize: boolean;
        IsReadOnly: boolean;
		private System.Collections.IList.Item: any;
        SyncRoot: any;
        IsSynchronized: boolean;
        private m_nodeArray: System.Collections.ArrayList;
        Add(value: any): number; //{ throw new Error("Not implemented.");}
        Clear(): any; //{ throw new Error("Not implemented.");}
        Contains(value: any): boolean; //{ throw new Error("Not implemented.");}
        CopyTo(array: System.Array, index: number): any; //{ throw new Error("Not implemented.");}
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
        IndexOf(value: any): number; //{ throw new Error("Not implemented.");}
        Insert(index: number, value: any): any; //{ throw new Error("Not implemented.");}
        Item(index: number): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        Remove(value: any): any; //{ throw new Error("Not implemented.");}
        RemoveAt(index: number): any; //{ throw new Error("Not implemented.");}
    }
    export class EncryptedXml {
        DocumentEvidence: System.Security.Policy.Evidence;
        Resolver: System.Xml.XmlResolver;
        Padding: System.Security.Cryptography.PaddingMode;
        Mode: System.Security.Cryptography.CipherMode;
        Encoding: System.Text.Encoding;
        Recipient: string;
        private m_document: System.Xml.XmlDocument;
        private m_evidence: System.Security.Policy.Evidence;
        private m_xmlResolver: System.Xml.XmlResolver;
        private m_keyNameMapping: System.Collections.Hashtable;
        private m_padding: System.Security.Cryptography.PaddingMode;
        private m_mode: System.Security.Cryptography.CipherMode;
        private m_encoding: System.Text.Encoding;
        private m_recipient: string;
        AddKeyNameMapping(keyName: string, keyObject: any): any; //{ throw new Error("Not implemented.");}
        ClearKeyNameMappings(): any; //{ throw new Error("Not implemented.");}
        DecryptData(encryptedData: any, symmetricAlgorithm: any): System.Byte[]; //{ throw new Error("Not implemented.");}
        DecryptDocument(): any; //{ throw new Error("Not implemented.");}
        DecryptEncryptedKey(encryptedKey: any): System.Byte[]; //{ throw new Error("Not implemented.");}
        DecryptKey(keyData: System.Byte[], rsa: any, useOAEP: boolean): System.Byte[]; //{ throw new Error("Not implemented.");}
        DecryptKey(keyData: System.Byte[], symmetricAlgorithm: any): System.Byte[]; //{ throw new Error("Not implemented.");}
        DownloadCipherValue(cipherData: any, inputStream: any, decInputStream: any, response: any): any; //{ throw new Error("Not implemented.");}
        Encrypt(inputElement: System.Xml.XmlElement, certificate: any): any; //{ throw new Error("Not implemented.");}
        Encrypt(inputElement: System.Xml.XmlElement, keyName: string): any; //{ throw new Error("Not implemented.");}
        EncryptData(plaintext: System.Byte[], symmetricAlgorithm: any): System.Byte[]; //{ throw new Error("Not implemented.");}
        EncryptData(inputElement: System.Xml.XmlElement, symmetricAlgorithm: any, content: boolean): System.Byte[]; //{ throw new Error("Not implemented.");}
        EncryptKey(keyData: System.Byte[], symmetricAlgorithm: any): System.Byte[]; //{ throw new Error("Not implemented.");}
        EncryptKey(keyData: System.Byte[], rsa: any, useOAEP: boolean): System.Byte[]; //{ throw new Error("Not implemented.");}
        GetCipherValue(cipherData: any): System.Byte[]; //{ throw new Error("Not implemented.");}
        GetDecryptionIV(encryptedData: any, symmetricAlgorithmUri: string): System.Byte[]; //{ throw new Error("Not implemented.");}
        GetDecryptionKey(encryptedData: any, symmetricAlgorithmUri: string): any; //{ throw new Error("Not implemented.");}
        GetIdElement(document: System.Xml.XmlDocument, idValue: string): System.Xml.XmlElement; //{ throw new Error("Not implemented.");}
        ReplaceData(inputElement: System.Xml.XmlElement, decryptedData: System.Byte[]): any; //{ throw new Error("Not implemented.");}
        ReplaceElement(inputElement: System.Xml.XmlElement, encryptedData: any, content: boolean): any; //{ throw new Error("Not implemented.");}
    }
    export class KeyInfo {
        Id: string;
        Count: number;
        private m_id: string;
        private m_KeyInfoClauses: System.Collections.ArrayList;
        AddClause(clause: any): any; //{ throw new Error("Not implemented.");}
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
        GetEnumerator(requestedObjectType: System.Type): any; //{ throw new Error("Not implemented.");}
        GetXml(): System.Xml.XmlElement; //{ throw new Error("Not implemented.");}
        GetXml(xmlDocument: System.Xml.XmlDocument): System.Xml.XmlElement; //{ throw new Error("Not implemented.");}
        LoadXml(value: System.Xml.XmlElement): any; //{ throw new Error("Not implemented.");}
    }
    export class Reference {
        Id: string;
        Uri: string;
        Type: string;
        DigestMethod: string;
        DigestValue: System.Byte[];
        TransformChain: System.Security.Cryptography.Xml.TransformChain;
        CacheValid: boolean;
        SignedXml: System.Security.Cryptography.Xml.SignedXml;
        ReferenceTargetType: System.Security.Cryptography.Xml.ReferenceTargetType;
        private m_id: string;
        private m_uri: string;
        private m_type: string;
        private m_transformChain: System.Security.Cryptography.Xml.TransformChain;
        private m_digestMethod: string;
        private m_digestValue: System.Byte[];
        private m_hashAlgorithm: any;
        private m_refTarget: any;
        private m_refTargetType: System.Security.Cryptography.Xml.ReferenceTargetType;
        private m_cachedXml: System.Xml.XmlElement;
        private m_signedXml: System.Security.Cryptography.Xml.SignedXml;
        m_namespaces: System.Security.Cryptography.Xml.CanonicalXmlNodeList;
        AddTransform(transform: System.Security.Cryptography.Xml.Transform): any; //{ throw new Error("Not implemented.");}
        CalculateHashValue(document: System.Xml.XmlDocument, refList: System.Security.Cryptography.Xml.CanonicalXmlNodeList): System.Byte[]; //{ throw new Error("Not implemented.");}
        GetXml(): System.Xml.XmlElement; //{ throw new Error("Not implemented.");}
        GetXml(document: System.Xml.XmlDocument): System.Xml.XmlElement; //{ throw new Error("Not implemented.");}
        LoadXml(value: System.Xml.XmlElement): any; //{ throw new Error("Not implemented.");}
        UpdateHashValue(document: System.Xml.XmlDocument, refList: System.Security.Cryptography.Xml.CanonicalXmlNodeList): any; //{ throw new Error("Not implemented.");}
    }
    export class Signature {
        SignedXml: System.Security.Cryptography.Xml.SignedXml;
        Id: string;
        SignedInfo: System.Security.Cryptography.Xml.SignedInfo;
        SignatureValue: System.Byte[];
        KeyInfo: System.Security.Cryptography.Xml.KeyInfo;
        ObjectList: System.Collections.IList;
        ReferencedItems: System.Security.Cryptography.Xml.CanonicalXmlNodeList;
        private m_id: string;
        private m_signedInfo: System.Security.Cryptography.Xml.SignedInfo;
        private m_signatureValue: System.Byte[];
        private m_signatureValueId: string;
        private m_keyInfo: System.Security.Cryptography.Xml.KeyInfo;
        private m_embeddedObjects: System.Collections.IList;
        private m_referencedItems: System.Security.Cryptography.Xml.CanonicalXmlNodeList;
        private m_signedXml: System.Security.Cryptography.Xml.SignedXml;
        AddObject(dataObject: any): any; //{ throw new Error("Not implemented.");}
        GetXml(): System.Xml.XmlElement; //{ throw new Error("Not implemented.");}
        GetXml(document: System.Xml.XmlDocument): System.Xml.XmlElement; //{ throw new Error("Not implemented.");}
        LoadXml(value: System.Xml.XmlElement): any; //{ throw new Error("Not implemented.");}
    }
    export class SignedInfo {
        SignedXml: System.Security.Cryptography.Xml.SignedXml;
        Count: number;
        IsReadOnly: boolean;
        IsSynchronized: boolean;
        SyncRoot: any;
        Id: string;
        CanonicalizationMethod: string;
        CanonicalizationMethodObject: System.Security.Cryptography.Xml.Transform;
        SignatureMethod: string;
        SignatureLength: string;
        References: System.Collections.ArrayList;
        CacheValid: boolean;
        private m_id: string;
        private m_canonicalizationMethod: string;
        private m_signatureMethod: string;
        private m_signatureLength: string;
        private m_references: System.Collections.ArrayList;
        private m_cachedXml: System.Xml.XmlElement;
        private m_signedXml: System.Security.Cryptography.Xml.SignedXml;
        private m_canonicalizationMethodTransform: System.Security.Cryptography.Xml.Transform;
        AddReference(reference: System.Security.Cryptography.Xml.Reference): any; //{ throw new Error("Not implemented.");}
        CopyTo(array: System.Array, index: number): any; //{ throw new Error("Not implemented.");}
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
        GetXml(): System.Xml.XmlElement; //{ throw new Error("Not implemented.");}
        GetXml(document: System.Xml.XmlDocument): System.Xml.XmlElement; //{ throw new Error("Not implemented.");}
        LoadXml(value: System.Xml.XmlElement): any; //{ throw new Error("Not implemented.");}
    }
    export class SignedXml {
        SigningKeyName: string;
        Resolver: System.Xml.XmlResolver;
        ResolverSet: boolean;
        SignatureFormatValidator: System.Func<System.Security.Cryptography.Xml.SignedXml, boolean>;
        SafeCanonicalizationMethods: System.Collections.ObjectModel.Collection<string>;
        SigningKey: System.Security.Cryptography.AsymmetricAlgorithm;
        EncryptedXml: System.Security.Cryptography.Xml.EncryptedXml;
        Signature: System.Security.Cryptography.Xml.Signature;
        SignedInfo: System.Security.Cryptography.Xml.SignedInfo;
        SignatureMethod: string;
        SignatureLength: string;
        SignatureValue: System.Byte[];
        KeyInfo: System.Security.Cryptography.Xml.KeyInfo;
        private static KnownCanonicalizationMethods: System.Collections.Generic.IList<string>;
        m_signature: System.Security.Cryptography.Xml.Signature;
        m_strSigningKeyName: string;
        private m_signingKey: System.Security.Cryptography.AsymmetricAlgorithm;
        private m_containingDocument: System.Xml.XmlDocument;
        private m_keyInfoEnum: any;
        private m_x509Collection: any;
        private m_x509Enum: any;
        private m_refProcessed: any;
        private m_refLevelCache: System.Int32[];
        m_xmlResolver: System.Xml.XmlResolver;
        m_context: System.Xml.XmlElement;
        private m_bResolverSet: boolean;
        private m_signatureFormatValidator: System.Func<System.Security.Cryptography.Xml.SignedXml, boolean>;
        private m_safeCanonicalizationMethods: System.Collections.ObjectModel.Collection<string>;
        private m_exml: System.Security.Cryptography.Xml.EncryptedXml;
        private bCacheValid: boolean;
        private _digestedSignedInfo: System.Byte[];
        private static s_knownCanonicalizationMethods: System.Collections.Generic.IList<string>;
        AddObject(dataObject: any): any; //{ throw new Error("Not implemented.");}
        AddReference(reference: System.Security.Cryptography.Xml.Reference): any; //{ throw new Error("Not implemented.");}
        BuildBagOfCerts(): any; //{ throw new Error("Not implemented.");}
        BuildDigestedReferences(): any; //{ throw new Error("Not implemented.");}
        CheckDigestedReferences(): boolean; //{ throw new Error("Not implemented.");}
        CheckSignature(): boolean; //{ throw new Error("Not implemented.");}
        CheckSignature(key: System.Security.Cryptography.AsymmetricAlgorithm): boolean; //{ throw new Error("Not implemented.");}
        CheckSignature(macAlg: any): boolean; //{ throw new Error("Not implemented.");}
        CheckSignature(certificate: any, verifySignatureOnly: boolean): boolean; //{ throw new Error("Not implemented.");}
        CheckSignatureFormat(): boolean; //{ throw new Error("Not implemented.");}
        CheckSignatureReturningKey(signingKey: any): boolean; //{ throw new Error("Not implemented.");}
        CheckSignedInfo(key: System.Security.Cryptography.AsymmetricAlgorithm): boolean; //{ throw new Error("Not implemented.");}
        CheckSignedInfo(macAlg: any): boolean; //{ throw new Error("Not implemented.");}
        ComputeSignature(macAlg: any): any; //{ throw new Error("Not implemented.");}
        ComputeSignature(): any; //{ throw new Error("Not implemented.");}
        DefaultSignatureFormatValidator(signedXml: System.Security.Cryptography.Xml.SignedXml): boolean; //{ throw new Error("Not implemented.");}
        DoesSignatureUseSafeCanonicalizationMethod(): boolean; //{ throw new Error("Not implemented.");}
        DoesSignatureUseTruncatedHmac(): boolean; //{ throw new Error("Not implemented.");}
        GetC14NDigest(hash: any): System.Byte[]; //{ throw new Error("Not implemented.");}
        GetIdElement(document: System.Xml.XmlDocument, idValue: string): System.Xml.XmlElement; //{ throw new Error("Not implemented.");}
        GetNextCertificatePublicKey(): System.Security.Cryptography.AsymmetricAlgorithm; //{ throw new Error("Not implemented.");}
        GetPublicKey(): System.Security.Cryptography.AsymmetricAlgorithm; //{ throw new Error("Not implemented.");}
        GetReferenceLevel(index: number, references: System.Collections.ArrayList): number; //{ throw new Error("Not implemented.");}
        GetXml(): System.Xml.XmlElement; //{ throw new Error("Not implemented.");}
        Initialize(element: System.Xml.XmlElement): any; //{ throw new Error("Not implemented.");}
        LoadXml(value: System.Xml.XmlElement): any; //{ throw new Error("Not implemented.");}
        ReadAdditionalSafeCanonicalizationMethods(): System.Collections.Generic.List<string>; //{ throw new Error("Not implemented.");}
    }
    export class Transform {
        BaseURI: string;
        SignedXml: System.Security.Cryptography.Xml.SignedXml;
        Reference: System.Security.Cryptography.Xml.Reference;
        Algorithm: string;
        Resolver: System.Xml.XmlResolver;
        ResolverSet: boolean;
        InputTypes: System.Type[];
        OutputTypes: System.Type[];
        Context: System.Xml.XmlElement;
        PropagatedNamespaces: System.Collections.Hashtable;
        private m_algorithm: string;
        private m_baseUri: string;
        m_xmlResolver: System.Xml.XmlResolver;
        private m_bResolverSet: boolean;
        private m_signedXml: System.Security.Cryptography.Xml.SignedXml;
        private m_reference: System.Security.Cryptography.Xml.Reference;
        private m_propagatedNamespaces: System.Collections.Hashtable;
        private m_context: System.Xml.XmlElement;
        AcceptsType(inputType: System.Type): boolean; //{ throw new Error("Not implemented.");}
        GetDigestedOutput(hash: any): System.Byte[]; //{ throw new Error("Not implemented.");}
        GetInnerXml(): System.Xml.XmlNodeList; //{ throw new Error("Not implemented.");}
        GetOutput(): any; //{ throw new Error("Not implemented.");}
        GetOutput(type: System.Type): any; //{ throw new Error("Not implemented.");}
        GetXml(): System.Xml.XmlElement; //{ throw new Error("Not implemented.");}
        GetXml(document: System.Xml.XmlDocument): System.Xml.XmlElement; //{ throw new Error("Not implemented.");}
        GetXml(document: System.Xml.XmlDocument, name: string): System.Xml.XmlElement; //{ throw new Error("Not implemented.");}
        LoadInnerXml(nodeList: System.Xml.XmlNodeList): any; //{ throw new Error("Not implemented.");}
        LoadInput(obj: any): any; //{ throw new Error("Not implemented.");}
    }
    export class TransformChain {
        Count: number;
        Item: System.Security.Cryptography.Xml.Transform;
        private m_transforms: System.Collections.ArrayList;
        Add(transform: System.Security.Cryptography.Xml.Transform): any; //{ throw new Error("Not implemented.");}
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
        GetXml(document: System.Xml.XmlDocument, ns: string): System.Xml.XmlElement; //{ throw new Error("Not implemented.");}
        LoadXml(value: System.Xml.XmlElement): any; //{ throw new Error("Not implemented.");}
        TransformToOctetStream(inputObject: any, inputType: System.Type, resolver: System.Xml.XmlResolver, baseUri: string): System.IO.Stream; //{ throw new Error("Not implemented.");}
        TransformToOctetStream(input: System.IO.Stream, resolver: System.Xml.XmlResolver, baseUri: string): System.IO.Stream; //{ throw new Error("Not implemented.");}
        TransformToOctetStream(document: System.Xml.XmlDocument, resolver: System.Xml.XmlResolver, baseUri: string): System.IO.Stream; //{ throw new Error("Not implemented.");}
    }
}
declare module System.Security.Policy {
    export class Evidence {
        static RuntimeEvidenceTypes: System.Type[];
        private IsReaderLockHeld: boolean;
        private IsWriterLockHeld: boolean;
        IsUnmodified: boolean;
        Locked: boolean;
        Target: System.Security.Policy.IRuntimeEvidenceFactory;
        Count: number;
        RawCount: number;
        SyncRoot: any;
        IsSynchronized: boolean;
        IsReadOnly: boolean;
        private m_evidence: System.Collections.Generic.Dictionary<TKey, TValue>;
        private m_deserializedTargetEvidence: boolean;
        private m_hostList: System.Collections.ArrayList;
        private m_assemblyList: System.Collections.ArrayList;
        private m_evidenceLock: any;
        private m_version: number;
        private m_target: System.Security.Policy.IRuntimeEvidenceFactory;
        private m_locked: boolean;
        private m_cloneOrigin: any;
        private static s_runtimeEvidenceTypes: System.Type[];
        AcquireReaderLock(): any; //{ throw new Error("Not implemented.");}
        AcquireWriterlock(): any; //{ throw new Error("Not implemented.");}
        AddAssembly(id: any): any; //{ throw new Error("Not implemented.");}
        AddAssemblyEvidence(evidence: any): any; //{ throw new Error("Not implemented.");}
        AddAssemblyEvidence(evidence: any, evidenceType: System.Type, duplicateAction: System.Security.Policy.Evidence.DuplicateEvidenceAction): any; //{ throw new Error("Not implemented.");}
        AddAssemblyEvidenceNoLock(evidence: any, evidenceType: System.Type, duplicateAction: System.Security.Policy.Evidence.DuplicateEvidenceAction): any; //{ throw new Error("Not implemented.");}
        AddHost(id: any): any; //{ throw new Error("Not implemented.");}
        AddHostEvidence(evidence: any): any; //{ throw new Error("Not implemented.");}
        AddHostEvidence(evidence: any, evidenceType: System.Type, duplicateAction: System.Security.Policy.Evidence.DuplicateEvidenceAction): any; //{ throw new Error("Not implemented.");}
        AddHostEvidenceNoLock(evidence: any, evidenceType: System.Type, duplicateAction: System.Security.Policy.Evidence.DuplicateEvidenceAction): any; //{ throw new Error("Not implemented.");}
        Clear(): any; //{ throw new Error("Not implemented.");}
        Clone(): System.Security.Policy.Evidence; //{ throw new Error("Not implemented.");}
        CopyTo(array: System.Array, index: number): any; //{ throw new Error("Not implemented.");}
        DeserializeTargetEvidence(): any; //{ throw new Error("Not implemented.");}
        DowngradeFromWriterLock(lockCookie: any): any; //{ throw new Error("Not implemented.");}
        GenerateHostEvidence(type: System.Type, hostCanGenerate: boolean): any; //{ throw new Error("Not implemented.");}
        GetAssemblyEnumerator(): any; //{ throw new Error("Not implemented.");}
        GetAssemblyEvidence(): any; //{ throw new Error("Not implemented.");}
        GetAssemblyEvidence(type: System.Type): any; //{ throw new Error("Not implemented.");}
        GetAssemblyEvidenceNoLock(type: System.Type): any; //{ throw new Error("Not implemented.");}
        GetDelayEvaluatedHostEvidence(): any; //{ throw new Error("Not implemented.");}
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
        GetEvidenceIndexType(evidence: any): System.Type; //{ throw new Error("Not implemented.");}
        GetEvidenceTypeDescriptor(evidenceType: System.Type, addIfNotExist: boolean): any; //{ throw new Error("Not implemented.");}
        GetEvidenceTypeDescriptor(evidenceType: System.Type): any; //{ throw new Error("Not implemented.");}
        GetHostEnumerator(): any; //{ throw new Error("Not implemented.");}
        GetHostEvidence(type: System.Type): any; //{ throw new Error("Not implemented.");}
        GetHostEvidence(): any; //{ throw new Error("Not implemented.");}
        GetHostEvidence(type: System.Type, markDelayEvaluatedEvidenceUsed: boolean): any; //{ throw new Error("Not implemented.");}
        GetHostEvidenceNoLock(type: System.Type): any; //{ throw new Error("Not implemented.");}
        GetRawAssemblyEvidenceEnumerator(): any; //{ throw new Error("Not implemented.");}
        GetRawHostEvidenceEnumerator(): any; //{ throw new Error("Not implemented.");}
        HandleDuplicateEvidence(original: any, duplicate: any, action: System.Security.Policy.Evidence.DuplicateEvidenceAction): any; //{ throw new Error("Not implemented.");}
        MarkAllEvidenceAsUsed(): any; //{ throw new Error("Not implemented.");}
        Merge(evidence: System.Security.Policy.Evidence): any; //{ throw new Error("Not implemented.");}
        MergeWithNoDuplicates(evidence: System.Security.Policy.Evidence): any; //{ throw new Error("Not implemented.");}
        OnDeserialized(context: any): any; //{ throw new Error("Not implemented.");}
        OnSerializing(context: any): any; //{ throw new Error("Not implemented.");}
        QueryHostForPossibleEvidenceTypes(): any; //{ throw new Error("Not implemented.");}
        RawSerialize(): System.Byte[]; //{ throw new Error("Not implemented.");}
        ReleaseReaderLock(): any; //{ throw new Error("Not implemented.");}
        ReleaseWriterLock(): any; //{ throw new Error("Not implemented.");}
        RemoveType(t: System.Type): any; //{ throw new Error("Not implemented.");}
        UnwrapEvidence(evidence: any): any; //{ throw new Error("Not implemented.");}
        UpgradeToWriterLock(): any; //{ throw new Error("Not implemented.");}
        WasStrongNameEvidenceUsed(): boolean; //{ throw new Error("Not implemented.");}
        WrapLegacyEvidence(evidence: any): any; //{ throw new Error("Not implemented.");}
    }
    interface IRuntimeEvidenceFactory {
        Target: System.Security.IEvidenceFactory;
        GenerateEvidence(evidenceType: System.Type): any;
        GetFactorySuppliedEvidence(): System.Collections.Generic.IEnumerable<T>;
    }
}
declare module System.Text {
    export class DecoderFallback {
        private static InternalSyncObject: any;
        static ReplacementFallback: System.Text.DecoderFallback;
        static ExceptionFallback: System.Text.DecoderFallback;
        MaxCharCount: number;
        IsMicrosoftBestFitFallback: boolean;
        bIsMicrosoftBestFitFallback: boolean;
        private static replacementFallback: System.Text.DecoderFallback;
        private static exceptionFallback: System.Text.DecoderFallback;
        private static s_InternalSyncObject: any;
        CreateFallbackBuffer(): any; //{ throw new Error("Not implemented.");}
    }
    export class EncoderFallback {
        private static InternalSyncObject: any;
        static ReplacementFallback: System.Text.EncoderFallback;
        static ExceptionFallback: System.Text.EncoderFallback;
        MaxCharCount: number;
        bIsMicrosoftBestFitFallback: boolean;
        private static replacementFallback: System.Text.EncoderFallback;
        private static exceptionFallback: System.Text.EncoderFallback;
        private static s_InternalSyncObject: any;
        CreateFallbackBuffer(): any; //{ throw new Error("Not implemented.");}
    }
    export class Encoding {
        private static InternalSyncObject: any;
        BodyName: string;
        EncodingName: string;
        HeaderName: string;
        WebName: string;
        WindowsCodePage: number;
        IsBrowserDisplay: boolean;
        IsBrowserSave: boolean;
        IsMailNewsDisplay: boolean;
        IsMailNewsSave: boolean;
        IsSingleByte: boolean;
        EncoderFallback: System.Text.EncoderFallback;
        DecoderFallback: System.Text.DecoderFallback;
        IsReadOnly: boolean;
        static ASCII: System.Text.Encoding;
        private static Latin1: System.Text.Encoding;
        CodePage: number;
        static Default: System.Text.Encoding;
        static Unicode: System.Text.Encoding;
        static BigEndianUnicode: System.Text.Encoding;
        static UTF7: System.Text.Encoding;
        static UTF8: System.Text.Encoding;
        static UTF32: System.Text.Encoding;
        m_codePage: number;
        dataItem: any;
        m_deserializedFromEverett: boolean;
        private m_isReadOnly: boolean;
        encoderFallback: System.Text.EncoderFallback;
        decoderFallback: System.Text.DecoderFallback;
        private static defaultEncoding: System.Text.Encoding;
        private static unicodeEncoding: System.Text.Encoding;
        private static bigEndianUnicode: System.Text.Encoding;
        private static utf7Encoding: System.Text.Encoding;
        private static utf8Encoding: System.Text.Encoding;
        private static utf32Encoding: System.Text.Encoding;
        private static asciiEncoding: System.Text.Encoding;
        private static latin1Encoding: System.Text.Encoding;
        private static encodings: System.Collections.Hashtable;
        private static s_InternalSyncObject: any;
        Clone(): any; //{ throw new Error("Not implemented.");}
        Convert(srcEncoding: System.Text.Encoding, dstEncoding: System.Text.Encoding, bytes: System.Byte[]): System.Byte[]; //{ throw new Error("Not implemented.");}
        Convert(srcEncoding: System.Text.Encoding, dstEncoding: System.Text.Encoding, bytes: System.Byte[], index: number, count: number): System.Byte[]; //{ throw new Error("Not implemented.");}
        CreateDefaultEncoding(): System.Text.Encoding; //{ throw new Error("Not implemented.");}
        DeserializeEncoding(info: any, context: any): any; //{ throw new Error("Not implemented.");}
        Equals(value: any): boolean; //{ throw new Error("Not implemented.");}
        GetBestFitBytesToUnicodeData(): any; //{ throw new Error("Not implemented.");}
        GetBestFitUnicodeToBytesData(): any; //{ throw new Error("Not implemented.");}
        GetByteCount(s: string): number; //{ throw new Error("Not implemented.");}
        GetByteCount(chars: any, count: number, encoder: any): number; //{ throw new Error("Not implemented.");}
        GetByteCount(chars: any, count: number): number; //{ throw new Error("Not implemented.");}
        GetByteCount(chars: any, index: number, count: number): number; //{ throw new Error("Not implemented.");}
        GetByteCount(chars: any): number; //{ throw new Error("Not implemented.");}
        GetBytes(chars: any, charIndex: number, charCount: number, bytes: System.Byte[], byteIndex: number): number; //{ throw new Error("Not implemented.");}
        GetBytes(chars: any, charCount: number, bytes: any, byteCount: number, encoder: any): number; //{ throw new Error("Not implemented.");}
        GetBytes(s: string, charIndex: number, charCount: number, bytes: System.Byte[], byteIndex: number): number; //{ throw new Error("Not implemented.");}
        GetBytes(chars: any): System.Byte[]; //{ throw new Error("Not implemented.");}
        GetBytes(chars: any, charCount: number, bytes: any, byteCount: number): number; //{ throw new Error("Not implemented.");}
        GetBytes(s: string): System.Byte[]; //{ throw new Error("Not implemented.");}
        GetBytes(chars: any, index: number, count: number): System.Byte[]; //{ throw new Error("Not implemented.");}
        GetCharCount(bytes: System.Byte[]): number; //{ throw new Error("Not implemented.");}
        GetCharCount(bytes: any, count: number): number; //{ throw new Error("Not implemented.");}
        GetCharCount(bytes: any, count: number, decoder: any): number; //{ throw new Error("Not implemented.");}
        GetCharCount(bytes: System.Byte[], index: number, count: number): number; //{ throw new Error("Not implemented.");}
        GetChars(bytes: any, byteCount: number, chars: any, charCount: number, decoder: any): number; //{ throw new Error("Not implemented.");}
        GetChars(bytes: System.Byte[]): any; //{ throw new Error("Not implemented.");}
        GetChars(bytes: System.Byte[], index: number, count: number): any; //{ throw new Error("Not implemented.");}
        GetChars(bytes: System.Byte[], byteIndex: number, byteCount: number, chars: any, charIndex: number): number; //{ throw new Error("Not implemented.");}
        GetChars(bytes: any, byteCount: number, chars: any, charCount: number): number; //{ throw new Error("Not implemented.");}
        GetDataItem(): any; //{ throw new Error("Not implemented.");}
        GetDecoder(): any; //{ throw new Error("Not implemented.");}
        GetEncoder(): any; //{ throw new Error("Not implemented.");}
        GetEncoding(name: string, encoderFallback: System.Text.EncoderFallback, decoderFallback: System.Text.DecoderFallback): System.Text.Encoding; //{ throw new Error("Not implemented.");}
        GetEncoding(name: string): System.Text.Encoding; //{ throw new Error("Not implemented.");}
        GetEncoding(codepage: number, encoderFallback: System.Text.EncoderFallback, decoderFallback: System.Text.DecoderFallback): System.Text.Encoding; //{ throw new Error("Not implemented.");}
        GetEncoding(codepage: number): System.Text.Encoding; //{ throw new Error("Not implemented.");}
        GetEncodingCodePage(CodePage: number): System.Text.Encoding; //{ throw new Error("Not implemented.");}
        GetEncodingRare(codepage: number): System.Text.Encoding; //{ throw new Error("Not implemented.");}
        GetEncodings(): any; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        GetMaxByteCount(charCount: number): number; //{ throw new Error("Not implemented.");}
        GetMaxCharCount(byteCount: number): number; //{ throw new Error("Not implemented.");}
        GetPreamble(): System.Byte[]; //{ throw new Error("Not implemented.");}
        GetString(bytes: System.Byte[], index: number, count: number): string; //{ throw new Error("Not implemented.");}
        GetString(bytes: System.Byte[]): string; //{ throw new Error("Not implemented.");}
        GetString(bytes: any, byteCount: number): string; //{ throw new Error("Not implemented.");}
        IsAlwaysNormalized(form: System.Text.NormalizationForm): boolean; //{ throw new Error("Not implemented.");}
        IsAlwaysNormalized(): boolean; //{ throw new Error("Not implemented.");}
        OnDeserialized(): any; //{ throw new Error("Not implemented.");}
        OnDeserialized(ctx: any): any; //{ throw new Error("Not implemented.");}
        OnDeserializing(): any; //{ throw new Error("Not implemented.");}
        OnDeserializing(ctx: any): any; //{ throw new Error("Not implemented.");}
        OnSerializing(ctx: any): any; //{ throw new Error("Not implemented.");}
        RegisterProvider(provider: any): any; //{ throw new Error("Not implemented.");}
        SerializeEncoding(info: any, context: any): any; //{ throw new Error("Not implemented.");}
        SetDefaultFallbacks(): any; //{ throw new Error("Not implemented.");}
        ThrowBytesOverflow(): any; //{ throw new Error("Not implemented.");}
        ThrowBytesOverflow(encoder: any, nothingEncoded: boolean): any; //{ throw new Error("Not implemented.");}
        ThrowCharsOverflow(): any; //{ throw new Error("Not implemented.");}
        ThrowCharsOverflow(decoder: any, nothingDecoded: boolean): any; //{ throw new Error("Not implemented.");}
    }
}
declare module System.Threading {
    export class WaitHandle extends System.MarshalByRefObject {
        Handle: number;
        SafeWaitHandle: Microsoft.Win32.SafeHandles.SafeWaitHandle;
        private waitHandle: number;
        safeWaitHandle: Microsoft.Win32.SafeHandles.SafeWaitHandle;
        hasThreadAffinity: boolean;
        static InvalidHandle: number;
        Close(): any; //{ throw new Error("Not implemented.");}
        Dispose(): any; //{ throw new Error("Not implemented.");}
        Dispose(explicitDisposing: boolean): any; //{ throw new Error("Not implemented.");}
        GetInvalidHandle(): number; //{ throw new Error("Not implemented.");}
        Init(): any; //{ throw new Error("Not implemented.");}
        InternalWaitOne(waitableSafeHandle: System.Runtime.InteropServices.SafeHandle, millisecondsTimeout: number, hasThreadAffinity: boolean, exitContext: boolean): boolean; //{ throw new Error("Not implemented.");}
        SetHandleInternal(handle: Microsoft.Win32.SafeHandles.SafeWaitHandle): any; //{ throw new Error("Not implemented.");}
        SignalAndWait(toSignal: System.Threading.WaitHandle, toWaitOn: System.Threading.WaitHandle, millisecondsTimeout: number, exitContext: boolean): boolean; //{ throw new Error("Not implemented.");}
        SignalAndWait(toSignal: System.Threading.WaitHandle, toWaitOn: System.Threading.WaitHandle, timeout: System.TimeSpan, exitContext: boolean): boolean; //{ throw new Error("Not implemented.");}
        SignalAndWait(toSignal: System.Threading.WaitHandle, toWaitOn: System.Threading.WaitHandle): boolean; //{ throw new Error("Not implemented.");}
        SignalAndWaitOne(waitHandleToSignal: Microsoft.Win32.SafeHandles.SafeWaitHandle, waitHandleToWaitOn: Microsoft.Win32.SafeHandles.SafeWaitHandle, millisecondsTimeout: number, hasThreadAffinity: boolean, exitContext: boolean): number; //{ throw new Error("Not implemented.");}
        ThrowAbandonedMutexException(): any; //{ throw new Error("Not implemented.");}
        ThrowAbandonedMutexException(location: number, handle: System.Threading.WaitHandle): any; //{ throw new Error("Not implemented.");}
        WaitAll(waitHandles: any, timeout: System.TimeSpan): boolean; //{ throw new Error("Not implemented.");}
        WaitAll(waitHandles: any, millisecondsTimeout: number): boolean; //{ throw new Error("Not implemented.");}
        WaitAll(waitHandles: any): boolean; //{ throw new Error("Not implemented.");}
        WaitAll(waitHandles: any, millisecondsTimeout: number, exitContext: boolean): boolean; //{ throw new Error("Not implemented.");}
        WaitAll(waitHandles: any, timeout: System.TimeSpan, exitContext: boolean): boolean; //{ throw new Error("Not implemented.");}
        WaitAny(waitHandles: any, timeout: System.TimeSpan, exitContext: boolean): number; //{ throw new Error("Not implemented.");}
        WaitAny(waitHandles: any): number; //{ throw new Error("Not implemented.");}
        WaitAny(waitHandles: any, timeout: System.TimeSpan): number; //{ throw new Error("Not implemented.");}
        WaitAny(waitHandles: any, millisecondsTimeout: number, exitContext: boolean): number; //{ throw new Error("Not implemented.");}
        WaitAny(waitHandles: any, millisecondsTimeout: number): number; //{ throw new Error("Not implemented.");}
        WaitMultiple(waitHandles: any, millisecondsTimeout: number, exitContext: boolean, WaitAll: boolean): number; //{ throw new Error("Not implemented.");}
        WaitOne(timeout: System.TimeSpan): boolean; //{ throw new Error("Not implemented.");}
        WaitOne(millisecondsTimeout: number): boolean; //{ throw new Error("Not implemented.");}
        WaitOne(): boolean; //{ throw new Error("Not implemented.");}
        WaitOne(timeout: System.TimeSpan, exitContext: boolean): boolean; //{ throw new Error("Not implemented.");}
        WaitOne(timeout: number, exitContext: boolean): boolean; //{ throw new Error("Not implemented.");}
        WaitOne(millisecondsTimeout: number, exitContext: boolean): boolean; //{ throw new Error("Not implemented.");}
        WaitOneNative(waitableSafeHandle: System.Runtime.InteropServices.SafeHandle, millisecondsTimeout: number, hasThreadAffinity: boolean, exitContext: boolean): number; //{ throw new Error("Not implemented.");}
        WaitOneWithoutFAS(): boolean; //{ throw new Error("Not implemented.");}
    }
}
declare module System.Uri {
}
declare module System.Xml {
    interface IDtdDefaultAttributeInfo {
        DefaultValueExpanded: string;
        DefaultValueTyped: any;
        ValueLineNumber: number;
        ValueLinePosition: number;
    }
    interface IXmlNamespaceResolver {
        GetNamespacesInScope(scope: System.Xml.XmlNamespaceScope): System.Collections.Generic.IDictionary<string, string>;
        LookupNamespace(prefix: string): string;
        LookupPrefix(namespaceName: string): string;
    }
    export class XmlAttribute extends System.Xml.XmlNode {
        LocalNameHash: number;
        XmlName: System.Xml.XmlName;
        ParentNode: System.Xml.XmlNode;
        Name: string;
        LocalName: string;
        NamespaceURI: string;
        Prefix: string;
        NodeType: System.Xml.XmlNodeType;
        OwnerDocument: System.Xml.XmlDocument;
        Value: string;
        SchemaInfo: System.Xml.Schema.IXmlSchemaInfo;
        InnerText: string;
        IsContainer: boolean;
        LastNode: System.Xml.XmlLinkedNode;
        Specified: boolean;
        OwnerElement: System.Xml.XmlElement;
        InnerXml: string;
        BaseURI: string;
        XmlSpace: System.Xml.XmlSpace;
        XmlLang: string;
        XPNodeType: System.Xml.XPath.XPathNodeType;
        XPLocalName: string;
        IsNamespace: boolean;
        private name: System.Xml.XmlName;
        private lastChild: System.Xml.XmlLinkedNode;
        AppendChild(newChild: System.Xml.XmlNode): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        AppendChildForLoad(newChild: System.Xml.XmlNode, doc: System.Xml.XmlDocument): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        CloneNode(deep: boolean): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        InsertAfter(newChild: System.Xml.XmlNode, refChild: System.Xml.XmlNode): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        InsertBefore(newChild: System.Xml.XmlNode, refChild: System.Xml.XmlNode): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        IsValidChildType(type: System.Xml.XmlNodeType): boolean; //{ throw new Error("Not implemented.");}
        PrepareOwnerElementInElementIdAttrMap(): boolean; //{ throw new Error("Not implemented.");}
        PrependChild(newChild: System.Xml.XmlNode): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        RemoveChild(oldChild: System.Xml.XmlNode): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        ReplaceChild(newChild: System.Xml.XmlNode, oldChild: System.Xml.XmlNode): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        ResetOwnerElementInElementIdAttrMap(oldInnerText: string): any; //{ throw new Error("Not implemented.");}
        SetParent(node: System.Xml.XmlNode): any; //{ throw new Error("Not implemented.");}
        WriteContentTo(w: System.Xml.XmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteTo(w: System.Xml.XmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class XmlAttributeCollection extends System.Xml.XmlNamedNodeMap {
        ItemOf: System.Xml.XmlAttribute;
        ItemOf: System.Xml.XmlAttribute;
        ItemOf: System.Xml.XmlAttribute;
		private System.Collections.ICollection.IsSynchronized: boolean;
		private System.Collections.ICollection.SyncRoot: any;
		private System.Collections.ICollection.Count: number;
        AddNode(node: System.Xml.XmlNode): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        Append(node: System.Xml.XmlAttribute): System.Xml.XmlAttribute; //{ throw new Error("Not implemented.");}
        CopyTo(array: System.Xml.XmlAttribute[], index: number): any; //{ throw new Error("Not implemented.");}
        Detach(attr: System.Xml.XmlAttribute): any; //{ throw new Error("Not implemented.");}
        FindNodeOffset(node: System.Xml.XmlAttribute): number; //{ throw new Error("Not implemented.");}
        FindNodeOffsetNS(node: System.Xml.XmlAttribute): number; //{ throw new Error("Not implemented.");}
        InsertAfter(newNode: System.Xml.XmlAttribute, refNode: System.Xml.XmlAttribute): System.Xml.XmlAttribute; //{ throw new Error("Not implemented.");}
        InsertBefore(newNode: System.Xml.XmlAttribute, refNode: System.Xml.XmlAttribute): System.Xml.XmlAttribute; //{ throw new Error("Not implemented.");}
        InsertNodeAt(i: number, node: System.Xml.XmlNode): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        InsertParentIntoElementIdAttrMap(attr: System.Xml.XmlAttribute): any; //{ throw new Error("Not implemented.");}
        InternalAppendAttribute(node: System.Xml.XmlAttribute): System.Xml.XmlAttribute; //{ throw new Error("Not implemented.");}
        PrepareParentInElementIdAttrMap(attrPrefix: string, attrLocalName: string): boolean; //{ throw new Error("Not implemented.");}
        Prepend(node: System.Xml.XmlAttribute): System.Xml.XmlAttribute; //{ throw new Error("Not implemented.");}
        Remove(node: System.Xml.XmlAttribute): System.Xml.XmlAttribute; //{ throw new Error("Not implemented.");}
        RemoveAll(): any; //{ throw new Error("Not implemented.");}
        RemoveAt(i: number): System.Xml.XmlAttribute; //{ throw new Error("Not implemented.");}
        RemoveDuplicateAttribute(attr: System.Xml.XmlAttribute): number; //{ throw new Error("Not implemented.");}
        RemoveNodeAt(i: number): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        RemoveParentFromElementIdAttrMap(attr: System.Xml.XmlAttribute): any; //{ throw new Error("Not implemented.");}
        ResetParentInElementIdAttrMap(oldVal: string, newVal: string): any; //{ throw new Error("Not implemented.");}
        SetNamedItem(node: System.Xml.XmlNode): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
    }
    export class XmlDeclaration extends System.Xml.XmlLinkedNode {
        Version: string;
        Encoding: string;
        Standalone: string;
        Value: string;
        InnerText: string;
        Name: string;
        LocalName: string;
        NodeType: System.Xml.XmlNodeType;
        private version: string;
        private encoding: string;
        private standalone: string;
        CloneNode(deep: boolean): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        IsValidXmlVersion(ver: string): boolean; //{ throw new Error("Not implemented.");}
        WriteContentTo(w: System.Xml.XmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteTo(w: System.Xml.XmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class XmlDocument extends System.Xml.XmlNode {
        DtdSchemaInfo: System.Xml.Schema.SchemaInfo;
        NodeType: System.Xml.XmlNodeType;
        ParentNode: System.Xml.XmlNode;
        DocumentType: System.Xml.XmlDocumentType;
        Declaration: System.Xml.XmlDeclaration;
        Implementation: System.Xml.XmlImplementation;
        Name: string;
        LocalName: string;
        DocumentElement: System.Xml.XmlElement;
        IsContainer: boolean;
        LastNode: System.Xml.XmlLinkedNode;
        OwnerDocument: System.Xml.XmlDocument;
        Schemas: System.Xml.Schema.XmlSchemaSet;
        CanReportValidity: boolean;
        HasSetResolver: boolean;
        XmlResolver: System.Xml.XmlResolver;
        NameTable: System.Xml.XmlNameTable;
        PreserveWhitespace: boolean;
        IsReadOnly: boolean;
        Entities: System.Xml.XmlNamedNodeMap;
        IsLoading: boolean;
        ActualLoadingStatus: boolean;
        TextEncoding: System.Text.Encoding;
        InnerText: string;
        InnerXml: string;
        Version: string;
        Encoding: string;
        Standalone: string;
        SchemaInfo: System.Xml.Schema.IXmlSchemaInfo;
        BaseURI: string;
        XPNodeType: System.Xml.XPath.XPathNodeType;
        HasEntityReferences: boolean;
        NamespaceXml: System.Xml.XmlAttribute;
        private implementation: System.Xml.XmlImplementation;
        private domNameTable: any;
        private lastChild: System.Xml.XmlLinkedNode;
        private entities: System.Xml.XmlNamedNodeMap;
        private htElementIdMap: System.Collections.Hashtable;
        private htElementIDAttrDecl: System.Collections.Hashtable;
        private schemaInfo: System.Xml.Schema.SchemaInfo;
        private schemas: System.Xml.Schema.XmlSchemaSet;
        private reportValidity: boolean;
        private actualLoadingStatus: boolean;
        private onNodeInsertingDelegate: any;
        private onNodeInsertedDelegate: any;
        private onNodeRemovingDelegate: any;
        private onNodeRemovedDelegate: any;
        private onNodeChangingDelegate: any;
        private onNodeChangedDelegate: any;
        fEntRefNodesPresent: boolean;
        fCDataNodesPresent: boolean;
        private preserveWhitespace: boolean;
        private isLoading: boolean;
        strDocumentName: string;
        strDocumentFragmentName: string;
        strCommentName: string;
        strTextName: string;
        strCDataSectionName: string;
        strEntityName: string;
        strID: string;
        strXmlns: string;
        strXml: string;
        strSpace: string;
        strLang: string;
        strEmpty: string;
        strNonSignificantWhitespaceName: string;
        strSignificantWhitespaceName: string;
        strReservedXmlns: string;
        strReservedXml: string;
        baseURI: string;
        private resolver: System.Xml.XmlResolver;
        bSetResolver: boolean;
        objLock: any;
        private namespaceXml: System.Xml.XmlAttribute;
        static EmptyEnumerator: any;
        static NotKnownSchemaInfo: System.Xml.Schema.IXmlSchemaInfo;
        static ValidSchemaInfo: System.Xml.Schema.IXmlSchemaInfo;
        static InvalidSchemaInfo: System.Xml.Schema.IXmlSchemaInfo;
        AddAttrXmlName(prefix: string, localName: string, namespaceURI: string, schemaInfo: System.Xml.Schema.IXmlSchemaInfo): System.Xml.XmlName; //{ throw new Error("Not implemented.");}
        AddDefaultAttributes(elem: System.Xml.XmlElement): any; //{ throw new Error("Not implemented.");}
        AddElementWithId(id: string, elem: System.Xml.XmlElement): any; //{ throw new Error("Not implemented.");}
        AddIdInfo(eleName: System.Xml.XmlName, attrName: System.Xml.XmlName): boolean; //{ throw new Error("Not implemented.");}
        AddXmlName(prefix: string, localName: string, namespaceURI: string, schemaInfo: System.Xml.Schema.IXmlSchemaInfo): System.Xml.XmlName; //{ throw new Error("Not implemented.");}
        AfterEvent(args: any): any; //{ throw new Error("Not implemented.");}
        AppendChildForLoad(newChild: System.Xml.XmlNode, doc: System.Xml.XmlDocument): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        BeforeEvent(args: any): any; //{ throw new Error("Not implemented.");}
        CanInsertAfter(newChild: System.Xml.XmlNode, refChild: System.Xml.XmlNode): boolean; //{ throw new Error("Not implemented.");}
        CanInsertBefore(newChild: System.Xml.XmlNode, refChild: System.Xml.XmlNode): boolean; //{ throw new Error("Not implemented.");}
        CheckName(name: string): any; //{ throw new Error("Not implemented.");}
        CloneNode(deep: boolean): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        ConvertToNodeType(nodeTypeString: string): System.Xml.XmlNodeType; //{ throw new Error("Not implemented.");}
        CreateAttribute(name: string): System.Xml.XmlAttribute; //{ throw new Error("Not implemented.");}
        CreateAttribute(prefix: string, localName: string, namespaceURI: string): System.Xml.XmlAttribute; //{ throw new Error("Not implemented.");}
        CreateAttribute(qualifiedName: string, namespaceURI: string): System.Xml.XmlAttribute; //{ throw new Error("Not implemented.");}
        CreateCDataSection(data: string): any; //{ throw new Error("Not implemented.");}
        CreateComment(data: string): any; //{ throw new Error("Not implemented.");}
        CreateDefaultAttribute(prefix: string, localName: string, namespaceURI: string): System.Xml.XmlAttribute; //{ throw new Error("Not implemented.");}
        CreateDocumentFragment(): any; //{ throw new Error("Not implemented.");}
        CreateDocumentType(name: string, publicId: string, systemId: string, internalSubset: string): System.Xml.XmlDocumentType; //{ throw new Error("Not implemented.");}
        CreateElement(prefix: string, localName: string, namespaceURI: string): System.Xml.XmlElement; //{ throw new Error("Not implemented.");}
        CreateElement(qualifiedName: string, namespaceURI: string): System.Xml.XmlElement; //{ throw new Error("Not implemented.");}
        CreateElement(name: string): System.Xml.XmlElement; //{ throw new Error("Not implemented.");}
        CreateEntityReference(name: string): any; //{ throw new Error("Not implemented.");}
        CreateNavigator(node: System.Xml.XmlNode): any; //{ throw new Error("Not implemented.");}
        CreateNavigator(): any; //{ throw new Error("Not implemented.");}
        CreateNode(type: System.Xml.XmlNodeType, prefix: string, name: string, namespaceURI: string): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        CreateNode(nodeTypeString: string, name: string, namespaceURI: string): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        CreateNode(type: System.Xml.XmlNodeType, name: string, namespaceURI: string): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        CreateProcessingInstruction(target: string, data: string): any; //{ throw new Error("Not implemented.");}
        CreateSignificantWhitespace(text: string): any; //{ throw new Error("Not implemented.");}
        CreateTextNode(text: string): any; //{ throw new Error("Not implemented.");}
        CreateWhitespace(text: string): any; //{ throw new Error("Not implemented.");}
        CreateXmlDeclaration(version: string, encoding: string, standalone: string): System.Xml.XmlDeclaration; //{ throw new Error("Not implemented.");}
        GetDefaultAttribute(elem: System.Xml.XmlElement, attrPrefix: string, attrLocalname: string, attrNamespaceURI: string): System.Xml.XmlAttribute; //{ throw new Error("Not implemented.");}
        GetElement(elementList: System.Collections.ArrayList, elem: System.Xml.XmlElement): any; //{ throw new Error("Not implemented.");}
        GetElementById(elementId: string): System.Xml.XmlElement; //{ throw new Error("Not implemented.");}
        GetElementsByTagName(localName: string, namespaceURI: string): System.Xml.XmlNodeList; //{ throw new Error("Not implemented.");}
        GetElementsByTagName(name: string): System.Xml.XmlNodeList; //{ throw new Error("Not implemented.");}
        GetEntityNode(name: string): any; //{ throw new Error("Not implemented.");}
        GetEventArgs(node: System.Xml.XmlNode, oldParent: System.Xml.XmlNode, newParent: System.Xml.XmlNode, oldValue: string, newValue: string, action: System.Xml.XmlNodeChangedAction): any; //{ throw new Error("Not implemented.");}
        GetIDInfoByElement(eleName: System.Xml.XmlName): System.Xml.XmlName; //{ throw new Error("Not implemented.");}
        GetIDInfoByElement_(eleName: System.Xml.XmlName): System.Xml.XmlName; //{ throw new Error("Not implemented.");}
        GetInsertEventArgsForLoad(node: System.Xml.XmlNode, newParent: System.Xml.XmlNode): any; //{ throw new Error("Not implemented.");}
        GetResolver(): System.Xml.XmlResolver; //{ throw new Error("Not implemented.");}
        GetSchemaElementDecl(elem: System.Xml.XmlElement): System.Xml.Schema.SchemaElementDecl; //{ throw new Error("Not implemented.");}
        GetXmlName(prefix: string, localName: string, namespaceURI: string, schemaInfo: System.Xml.Schema.IXmlSchemaInfo): System.Xml.XmlName; //{ throw new Error("Not implemented.");}
        HasNodeTypeInNextSiblings(nt: System.Xml.XmlNodeType, refNode: System.Xml.XmlNode): boolean; //{ throw new Error("Not implemented.");}
        HasNodeTypeInPrevSiblings(nt: System.Xml.XmlNodeType, refNode: System.Xml.XmlNode): boolean; //{ throw new Error("Not implemented.");}
        ImportAttributes(fromElem: System.Xml.XmlNode, toElem: System.Xml.XmlNode): any; //{ throw new Error("Not implemented.");}
        ImportChildren(fromNode: System.Xml.XmlNode, toNode: System.Xml.XmlNode, deep: boolean): any; //{ throw new Error("Not implemented.");}
        ImportNode(node: System.Xml.XmlNode, deep: boolean): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        ImportNodeInternal(node: System.Xml.XmlNode, deep: boolean): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        IsTextNode(nt: System.Xml.XmlNodeType): boolean; //{ throw new Error("Not implemented.");}
        IsValidChildType(type: System.Xml.XmlNodeType): boolean; //{ throw new Error("Not implemented.");}
        Load(filename: string): any; //{ throw new Error("Not implemented.");}
        Load(txtReader: any): any; //{ throw new Error("Not implemented.");}
        Load(inStream: System.IO.Stream): any; //{ throw new Error("Not implemented.");}
        Load(reader: any): any; //{ throw new Error("Not implemented.");}
        LoadXml(xml: string): any; //{ throw new Error("Not implemented.");}
        NormalizeText(n: System.Xml.XmlNode): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        PrepareDefaultAttribute(attdef: System.Xml.Schema.SchemaAttDef, attrPrefix: string, attrLocalname: string, attrNamespaceURI: string): System.Xml.XmlAttribute; //{ throw new Error("Not implemented.");}
        ReadNode(reader: any): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        RemoveElementWithId(id: string, elem: System.Xml.XmlElement): any; //{ throw new Error("Not implemented.");}
        Save(writer: System.IO.TextWriter): any; //{ throw new Error("Not implemented.");}
        Save(filename: string): any; //{ throw new Error("Not implemented.");}
        Save(w: System.Xml.XmlWriter): any; //{ throw new Error("Not implemented.");}
        Save(outStream: System.IO.Stream): any; //{ throw new Error("Not implemented.");}
        SetBaseURI(inBaseURI: string): any; //{ throw new Error("Not implemented.");}
        SetDefaultNamespace(prefix: string, localName: string, namespaceURI: any): any; //{ throw new Error("Not implemented.");}
        SetupReader(tr: any): any; //{ throw new Error("Not implemented.");}
        Validate(validationEventHandler: any): any; //{ throw new Error("Not implemented.");}
        Validate(validationEventHandler: any, nodeToValidate: System.Xml.XmlNode): any; //{ throw new Error("Not implemented.");}
        WriteContentTo(xw: System.Xml.XmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteTo(w: System.Xml.XmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class XmlDocumentType extends System.Xml.XmlLinkedNode {
        Name: string;
        LocalName: string;
        NodeType: System.Xml.XmlNodeType;
        IsReadOnly: boolean;
        Entities: System.Xml.XmlNamedNodeMap;
        Notations: System.Xml.XmlNamedNodeMap;
        PublicId: string;
        SystemId: string;
        InternalSubset: string;
        ParseWithNamespaces: boolean;
        DtdSchemaInfo: System.Xml.Schema.SchemaInfo;
        private name: string;
        private publicId: string;
        private systemId: string;
        private internalSubset: string;
        private namespaces: boolean;
        private entities: System.Xml.XmlNamedNodeMap;
        private notations: System.Xml.XmlNamedNodeMap;
        private schemaInfo: System.Xml.Schema.SchemaInfo;
        CloneNode(deep: boolean): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        WriteContentTo(w: System.Xml.XmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteTo(w: System.Xml.XmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class XmlElement extends System.Xml.XmlLinkedNode {
        XmlName: System.Xml.XmlName;
        Name: string;
        LocalName: string;
        NamespaceURI: string;
        Prefix: string;
        NodeType: System.Xml.XmlNodeType;
        ParentNode: System.Xml.XmlNode;
        OwnerDocument: System.Xml.XmlDocument;
        IsContainer: boolean;
        IsEmpty: boolean;
        LastNode: System.Xml.XmlLinkedNode;
        Attributes: System.Xml.XmlAttributeCollection;
        HasAttributes: boolean;
        SchemaInfo: System.Xml.Schema.IXmlSchemaInfo;
        InnerXml: string;
        InnerText: string;
        NextSibling: System.Xml.XmlNode;
        XPNodeType: System.Xml.XPath.XPathNodeType;
        XPLocalName: string;
        private name: System.Xml.XmlName;
        private attributes: System.Xml.XmlAttributeCollection;
        private lastChild: System.Xml.XmlLinkedNode;
        AppendChildForLoad(newChild: System.Xml.XmlNode, doc: System.Xml.XmlDocument): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        CloneNode(deep: boolean): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        GetAttribute(name: string): string; //{ throw new Error("Not implemented.");}
        GetAttribute(localName: string, namespaceURI: string): string; //{ throw new Error("Not implemented.");}
        GetAttributeNode(name: string): System.Xml.XmlAttribute; //{ throw new Error("Not implemented.");}
        GetAttributeNode(localName: string, namespaceURI: string): System.Xml.XmlAttribute; //{ throw new Error("Not implemented.");}
        GetElementsByTagName(name: string): System.Xml.XmlNodeList; //{ throw new Error("Not implemented.");}
        GetElementsByTagName(localName: string, namespaceURI: string): System.Xml.XmlNodeList; //{ throw new Error("Not implemented.");}
        GetXPAttribute(localName: string, ns: string): string; //{ throw new Error("Not implemented.");}
        HasAttribute(localName: string, namespaceURI: string): boolean; //{ throw new Error("Not implemented.");}
        HasAttribute(name: string): boolean; //{ throw new Error("Not implemented.");}
        IsValidChildType(type: System.Xml.XmlNodeType): boolean; //{ throw new Error("Not implemented.");}
        RemoveAll(): any; //{ throw new Error("Not implemented.");}
        RemoveAllAttributes(): any; //{ throw new Error("Not implemented.");}
        RemoveAllChildren(): any; //{ throw new Error("Not implemented.");}
        RemoveAttribute(localName: string, namespaceURI: string): any; //{ throw new Error("Not implemented.");}
        RemoveAttribute(name: string): any; //{ throw new Error("Not implemented.");}
        RemoveAttributeAt(i: number): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        RemoveAttributeNode(oldAttr: System.Xml.XmlAttribute): System.Xml.XmlAttribute; //{ throw new Error("Not implemented.");}
        RemoveAttributeNode(localName: string, namespaceURI: string): System.Xml.XmlAttribute; //{ throw new Error("Not implemented.");}
        SetAttribute(localName: string, namespaceURI: string, value: string): string; //{ throw new Error("Not implemented.");}
        SetAttribute(name: string, value: string): any; //{ throw new Error("Not implemented.");}
        SetAttributeNode(localName: string, namespaceURI: string): System.Xml.XmlAttribute; //{ throw new Error("Not implemented.");}
        SetAttributeNode(newAttr: System.Xml.XmlAttribute): System.Xml.XmlAttribute; //{ throw new Error("Not implemented.");}
        SetParent(node: System.Xml.XmlNode): any; //{ throw new Error("Not implemented.");}
        WriteContentTo(w: System.Xml.XmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteElementTo(writer: System.Xml.XmlWriter, e: System.Xml.XmlElement): any; //{ throw new Error("Not implemented.");}
        WriteStartElement(w: System.Xml.XmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteTo(w: System.Xml.XmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class XmlException extends System.SystemException {
        LineNumber: number;
        LinePosition: number;
        SourceUri: string;
        Message: string;
        ResString: string;
        private res: string;
        private args: System.String[];
        private lineNumber: number;
        private linePosition: number;
        private sourceUri: string;
        private message: string;
        BuildCharExceptionArgs(data: string, invCharIndex: number): System.String[]; //{ throw new Error("Not implemented.");}
        BuildCharExceptionArgs(data: any, invCharIndex: number): System.String[]; //{ throw new Error("Not implemented.");}
        BuildCharExceptionArgs(data: any, length: number, invCharIndex: number): System.String[]; //{ throw new Error("Not implemented.");}
        BuildCharExceptionArgs(invChar: string, nextChar: string): System.String[]; //{ throw new Error("Not implemented.");}
        CreateMessage(res: string, args: System.String[], lineNumber: number, linePosition: number): string; //{ throw new Error("Not implemented.");}
        FormatUserMessage(message: string, lineNumber: number, linePosition: number): string; //{ throw new Error("Not implemented.");}
        GetObjectData(info: any, context: any): any; //{ throw new Error("Not implemented.");}
        IsCatchableException(e: System.Exception): boolean; //{ throw new Error("Not implemented.");}
    }
    export class XmlImplementation {
        NameTable: System.Xml.XmlNameTable;
        private nameTable: System.Xml.XmlNameTable;
        CreateDocument(): System.Xml.XmlDocument; //{ throw new Error("Not implemented.");}
        HasFeature(strFeature: string, strVersion: string): boolean; //{ throw new Error("Not implemented.");}
    }
    export class XmlLinkedNode extends System.Xml.XmlNode {
        PreviousSibling: System.Xml.XmlNode;
        NextSibling: System.Xml.XmlNode;
        next: System.Xml.XmlLinkedNode;
    }
    export class XmlName {
        LocalName: string;
        NamespaceURI: string;
        Prefix: string;
        HashCode: number;
        OwnerDocument: System.Xml.XmlDocument;
        Name: string;
        Validity: System.Xml.Schema.XmlSchemaValidity;
        IsDefault: boolean;
        IsNil: boolean;
        MemberType: System.Xml.Schema.XmlSchemaSimpleType;
        SchemaType: System.Xml.Schema.XmlSchemaType;
        SchemaElement: System.Xml.Schema.XmlSchemaElement;
        SchemaAttribute: System.Xml.Schema.XmlSchemaAttribute;
        private prefix: string;
        private localName: string;
        private ns: string;
        private name: string;
        private hashCode: number;
        ownerDoc: System.Xml.XmlDocument;
        next: System.Xml.XmlName;
        Create(prefix: string, localName: string, ns: string, hashCode: number, ownerDoc: System.Xml.XmlDocument, next: System.Xml.XmlName, schemaInfo: System.Xml.Schema.IXmlSchemaInfo): System.Xml.XmlName; //{ throw new Error("Not implemented.");}
        Equals(schemaInfo: System.Xml.Schema.IXmlSchemaInfo): boolean; //{ throw new Error("Not implemented.");}
        GetHashCode(name: string): number; //{ throw new Error("Not implemented.");}
    }
    export class XmlNamedNodeMap {
        Count: number;
        parent: System.Xml.XmlNode;
        nodes: any;
        AddNode(node: System.Xml.XmlNode): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        AddNodeForLoad(node: System.Xml.XmlNode, doc: System.Xml.XmlDocument): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        FindNodeOffset(name: string): number; //{ throw new Error("Not implemented.");}
        FindNodeOffset(localName: string, namespaceURI: string): number; //{ throw new Error("Not implemented.");}
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
        GetNamedItem(name: string): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        GetNamedItem(localName: string, namespaceURI: string): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        InsertNodeAt(i: number, node: System.Xml.XmlNode): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        Item(index: number): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        RemoveNamedItem(name: string): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        RemoveNamedItem(localName: string, namespaceURI: string): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        RemoveNodeAt(i: number): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        ReplaceNodeAt(i: number, node: System.Xml.XmlNode): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        SetNamedItem(node: System.Xml.XmlNode): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
    }
    export class XmlNamespaceManager {
        static EmptyResolver: System.Xml.IXmlNamespaceResolver;
        NameTable: System.Xml.XmlNameTable;
        DefaultNamespace: string;
        private nsdecls: any;
        private lastDecl: number;
        private nameTable: System.Xml.XmlNameTable;
        private scopeId: number;
        private hashTable: System.Collections.Generic.Dictionary<TKey, TValue>;
        private useHashtable: boolean;
        private xml: string;
        private xmlNs: string;
        private static s_EmptyResolver: System.Xml.IXmlNamespaceResolver;
        AddNamespace(prefix: string, uri: string): any; //{ throw new Error("Not implemented.");}
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
        GetNamespaceDeclaration(idx: number, prefix: any, uri: any): boolean; //{ throw new Error("Not implemented.");}
        GetNamespacesInScope(scope: System.Xml.XmlNamespaceScope): System.Collections.Generic.IDictionary<string, string>; //{ throw new Error("Not implemented.");}
        HasNamespace(prefix: string): boolean; //{ throw new Error("Not implemented.");}
        LookupNamespace(prefix: string): string; //{ throw new Error("Not implemented.");}
        LookupNamespaceDecl(prefix: string): number; //{ throw new Error("Not implemented.");}
        LookupPrefix(uri: string): string; //{ throw new Error("Not implemented.");}
        PopScope(): boolean; //{ throw new Error("Not implemented.");}
        PushScope(): any; //{ throw new Error("Not implemented.");}
        RemoveNamespace(prefix: string, uri: string): any; //{ throw new Error("Not implemented.");}
    }
    export class XmlNameTable {
        Add(array: any, offset: number, length: number): string; //{ throw new Error("Not implemented.");}
        Add(array: string): string; //{ throw new Error("Not implemented.");}
        Get(array: any, offset: number, length: number): string; //{ throw new Error("Not implemented.");}
        Get(array: string): string; //{ throw new Error("Not implemented.");}
    }
    export class XmlNode {
        Name: string;
        Value: string;
        NodeType: System.Xml.XmlNodeType;
        ParentNode: System.Xml.XmlNode;
        ChildNodes: System.Xml.XmlNodeList;
        PreviousSibling: System.Xml.XmlNode;
        NextSibling: System.Xml.XmlNode;
        Attributes: System.Xml.XmlAttributeCollection;
        OwnerDocument: System.Xml.XmlDocument;
        FirstChild: System.Xml.XmlNode;
        LastChild: System.Xml.XmlNode;
        IsContainer: boolean;
        LastNode: System.Xml.XmlLinkedNode;
        HasChildNodes: boolean;
        NamespaceURI: string;
        Prefix: string;
        LocalName: string;
        IsReadOnly: boolean;
        InnerText: string;
        OuterXml: string;
        InnerXml: string;
        SchemaInfo: System.Xml.Schema.IXmlSchemaInfo;
        BaseURI: string;
        Document: System.Xml.XmlDocument;
        Item: System.Xml.XmlElement;
        Item: System.Xml.XmlElement;
        XmlSpace: System.Xml.XmlSpace;
        XmlLang: string;
        XPNodeType: System.Xml.XPath.XPathNodeType;
        XPLocalName: string;
        IsText: boolean;
        PreviousText: System.Xml.XmlNode;
        private debuggerDisplayProxy: any;
        parentNode: System.Xml.XmlNode;
        AfterEvent(args: any): any; //{ throw new Error("Not implemented.");}
        AncestorNode(node: System.Xml.XmlNode): boolean; //{ throw new Error("Not implemented.");}
        AppendChild(newChild: System.Xml.XmlNode): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        AppendChildForLoad(newChild: System.Xml.XmlNode, doc: System.Xml.XmlDocument): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        AppendChildText(builder: any): any; //{ throw new Error("Not implemented.");}
        BeforeEvent(args: any): any; //{ throw new Error("Not implemented.");}
        CanInsertAfter(newChild: System.Xml.XmlNode, refChild: System.Xml.XmlNode): boolean; //{ throw new Error("Not implemented.");}
        CanInsertBefore(newChild: System.Xml.XmlNode, refChild: System.Xml.XmlNode): boolean; //{ throw new Error("Not implemented.");}
        Clone(): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        CloneNode(deep: boolean): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        CopyChildren(doc: System.Xml.XmlDocument, container: System.Xml.XmlNode, deep: boolean): any; //{ throw new Error("Not implemented.");}
        CreateNavigator(): any; //{ throw new Error("Not implemented.");}
        FindChild(type: System.Xml.XmlNodeType): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
        GetEventArgs(node: System.Xml.XmlNode, oldParent: System.Xml.XmlNode, newParent: System.Xml.XmlNode, oldValue: string, newValue: string, action: System.Xml.XmlNodeChangedAction): any; //{ throw new Error("Not implemented.");}
        GetNamespaceOfPrefix(prefix: string): string; //{ throw new Error("Not implemented.");}
        GetNamespaceOfPrefixStrict(prefix: string): string; //{ throw new Error("Not implemented.");}
        GetPrefixOfNamespace(namespaceURI: string): string; //{ throw new Error("Not implemented.");}
        GetPrefixOfNamespaceStrict(namespaceURI: string): string; //{ throw new Error("Not implemented.");}
        GetXPAttribute(localName: string, namespaceURI: string): string; //{ throw new Error("Not implemented.");}
        HasReadOnlyParent(n: System.Xml.XmlNode): boolean; //{ throw new Error("Not implemented.");}
        InsertAfter(newChild: System.Xml.XmlNode, refChild: System.Xml.XmlNode): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        InsertBefore(newChild: System.Xml.XmlNode, refChild: System.Xml.XmlNode): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        IsConnected(): boolean; //{ throw new Error("Not implemented.");}
        IsValidChildType(type: System.Xml.XmlNodeType): boolean; //{ throw new Error("Not implemented.");}
        NestTextNodes(prevNode: System.Xml.XmlNode, nextNode: System.Xml.XmlNode): any; //{ throw new Error("Not implemented.");}
        Normalize(): any; //{ throw new Error("Not implemented.");}
        NormalizeWinner(firstNode: System.Xml.XmlNode, secondNode: System.Xml.XmlNode): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        PrependChild(newChild: System.Xml.XmlNode): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        RemoveAll(): any; //{ throw new Error("Not implemented.");}
        RemoveChild(oldChild: System.Xml.XmlNode): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        ReplaceChild(newChild: System.Xml.XmlNode, oldChild: System.Xml.XmlNode): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        SelectNodes(xpath: string): System.Xml.XmlNodeList; //{ throw new Error("Not implemented.");}
        SelectNodes(xpath: string, nsmgr: System.Xml.XmlNamespaceManager): System.Xml.XmlNodeList; //{ throw new Error("Not implemented.");}
        SelectSingleNode(xpath: string, nsmgr: System.Xml.XmlNamespaceManager): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        SelectSingleNode(xpath: string): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        SetParent(node: System.Xml.XmlNode): any; //{ throw new Error("Not implemented.");}
        SetParentForLoad(node: System.Xml.XmlNode): any; //{ throw new Error("Not implemented.");}
        SplitName(name: string, prefix: any, localName: any): any; //{ throw new Error("Not implemented.");}
        Supports(feature: string, version: string): boolean; //{ throw new Error("Not implemented.");}
        UnnestTextNodes(prevNode: System.Xml.XmlNode, nextNode: System.Xml.XmlNode): any; //{ throw new Error("Not implemented.");}
        WriteContentTo(w: System.Xml.XmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteTo(w: System.Xml.XmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class XmlNodeList {
        Count: number;
        ItemOf: System.Xml.XmlNode;
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
        Item(index: number): System.Xml.XmlNode; //{ throw new Error("Not implemented.");}
        PrivateDisposeNodeList(): any; //{ throw new Error("Not implemented.");}
    }
    export class XmlQualifiedName {
        Namespace: string;
        Name: string;
        IsEmpty: boolean;
        private name: string;
        private ns: string;
        private hash: number;
        private static hashCodeDelegate: any;
        static Empty: System.Xml.XmlQualifiedName;
        Atomize(nameTable: System.Xml.XmlNameTable): any; //{ throw new Error("Not implemented.");}
        Clone(): System.Xml.XmlQualifiedName; //{ throw new Error("Not implemented.");}
        Compare(a: System.Xml.XmlQualifiedName, b: System.Xml.XmlQualifiedName): number; //{ throw new Error("Not implemented.");}
        Equals(other: any): boolean; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        GetHashCodeDelegate(): any; //{ throw new Error("Not implemented.");}
        GetHashCodeOfString(s: string, length: number, additionalEntropy: number): number; //{ throw new Error("Not implemented.");}
        Init(name: string, ns: string): any; //{ throw new Error("Not implemented.");}
        IsRandomizedHashingDisabled(): boolean; //{ throw new Error("Not implemented.");}
        Parse(s: string, nsmgr: System.Xml.IXmlNamespaceResolver, prefix: any): System.Xml.XmlQualifiedName; //{ throw new Error("Not implemented.");}
        ReadBoolFromXmlRegistrySettings(hive: any, regValueName: string, value: any): boolean; //{ throw new Error("Not implemented.");}
        SetNamespace(ns: string): any; //{ throw new Error("Not implemented.");}
        ToString(): string; //{ throw new Error("Not implemented.");}
        ToString(name: string, ns: string): string; //{ throw new Error("Not implemented.");}
        Verify(): any; //{ throw new Error("Not implemented.");}
    }
    export class XmlReaderSettings {
        Async: boolean;
        NameTable: System.Xml.XmlNameTable;
        IsXmlResolverSet: boolean;
        XmlResolver: System.Xml.XmlResolver;
        LineNumberOffset: number;
        LinePositionOffset: number;
        ConformanceLevel: System.Xml.ConformanceLevel;
        CheckCharacters: boolean;
        MaxCharactersInDocument: number;
        MaxCharactersFromEntities: number;
        IgnoreWhitespace: boolean;
        IgnoreProcessingInstructions: boolean;
        IgnoreComments: boolean;
        ProhibitDtd: boolean;
        DtdProcessing: System.Xml.DtdProcessing;
        CloseInput: boolean;
        ValidationType: System.Xml.ValidationType;
        ValidationFlags: System.Xml.Schema.XmlSchemaValidationFlags;
        Schemas: System.Xml.Schema.XmlSchemaSet;
        ReadOnly: boolean;
        private useAsync: boolean;
        private nameTable: System.Xml.XmlNameTable;
        private xmlResolver: System.Xml.XmlResolver;
        private lineNumberOffset: number;
        private linePositionOffset: number;
        private conformanceLevel: System.Xml.ConformanceLevel;
        private checkCharacters: boolean;
        private maxCharactersInDocument: number;
        private maxCharactersFromEntities: number;
        private ignoreWhitespace: boolean;
        private ignorePIs: boolean;
        private ignoreComments: boolean;
        private dtdProcessing: System.Xml.DtdProcessing;
        private validationType: System.Xml.ValidationType;
        private validationFlags: System.Xml.Schema.XmlSchemaValidationFlags;
        private schemas: System.Xml.Schema.XmlSchemaSet;
        private valEventHandler: any;
        private closeInput: boolean;
        private isReadOnly: boolean;
        private static s_enableLegacyXmlSettings: boolean;
        AddConformanceWrapper(baseReader: any): any; //{ throw new Error("Not implemented.");}
        AddValidation(reader: any): any; //{ throw new Error("Not implemented.");}
        AddValidationAndConformanceWrapper(reader: any): any; //{ throw new Error("Not implemented.");}
        CheckReadOnly(propertyName: string): any; //{ throw new Error("Not implemented.");}
        Clone(): System.Xml.XmlReaderSettings; //{ throw new Error("Not implemented.");}
        CreateDefaultResolver(): System.Xml.XmlResolver; //{ throw new Error("Not implemented.");}
        CreateDtdValidatingReader(baseReader: any): any; //{ throw new Error("Not implemented.");}
        CreateReader(inputUri: string, inputContext: any): any; //{ throw new Error("Not implemented.");}
        CreateReader(input: System.IO.Stream, baseUri: System.Uri, baseUriString: string, inputContext: any): any; //{ throw new Error("Not implemented.");}
        CreateReader(input: any, baseUriString: string, inputContext: any): any; //{ throw new Error("Not implemented.");}
        CreateReader(reader: any): any; //{ throw new Error("Not implemented.");}
        EnableLegacyXmlSettings(): boolean; //{ throw new Error("Not implemented.");}
        GetEventHandler(): any; //{ throw new Error("Not implemented.");}
        GetXmlResolver(): System.Xml.XmlResolver; //{ throw new Error("Not implemented.");}
        GetXmlResolver_CheckConfig(): System.Xml.XmlResolver; //{ throw new Error("Not implemented.");}
        Initialize(resolver: System.Xml.XmlResolver): any; //{ throw new Error("Not implemented.");}
        Initialize(): any; //{ throw new Error("Not implemented.");}
        ReadSettingsFromRegistry(hive: any, value: any): boolean; //{ throw new Error("Not implemented.");}
        Reset(): any; //{ throw new Error("Not implemented.");}
    }
    export class XmlResolver {
        Credentials: System.Net.ICredentials;
        GetEntity(absoluteUri: System.Uri, role: string, ofObjectToReturn: System.Type): any; //{ throw new Error("Not implemented.");}
        GetEntityAsync(absoluteUri: System.Uri, role: string, ofObjectToReturn: System.Type): any; //{ throw new Error("Not implemented.");}
        ResolveUri(baseUri: System.Uri, relativeUri: string): System.Uri; //{ throw new Error("Not implemented.");}
        SupportsType(absoluteUri: System.Uri, type: System.Type): boolean; //{ throw new Error("Not implemented.");}
    }
}
declare module System.Xml.Schema {
    export class ContentValidator {
        ContentType: System.Xml.Schema.XmlSchemaContentType;
        PreserveWhitespace: boolean;
        IsEmptiable: boolean;
        IsOpen: boolean;
        private contentType: System.Xml.Schema.XmlSchemaContentType;
        private isOpen: boolean;
        private isEmptiable: boolean;
        static Empty: System.Xml.Schema.ContentValidator;
        static TextOnly: System.Xml.Schema.ContentValidator;
        static Mixed: System.Xml.Schema.ContentValidator;
        static Any: System.Xml.Schema.ContentValidator;
        AddParticleToExpected(p: System.Xml.Schema.XmlSchemaParticle, schemaSet: System.Xml.Schema.XmlSchemaSet, particles: System.Collections.ArrayList): any; //{ throw new Error("Not implemented.");}
        AddParticleToExpected(p: System.Xml.Schema.XmlSchemaParticle, schemaSet: System.Xml.Schema.XmlSchemaSet, particles: System.Collections.ArrayList, global: boolean): any; //{ throw new Error("Not implemented.");}
        CompleteValidation(context: any): boolean; //{ throw new Error("Not implemented.");}
        ExpectedElements(context: any, isRequiredOnly: boolean): System.Collections.ArrayList; //{ throw new Error("Not implemented.");}
        ExpectedParticles(context: any, isRequiredOnly: boolean, schemaSet: System.Xml.Schema.XmlSchemaSet): System.Collections.ArrayList; //{ throw new Error("Not implemented.");}
        InitValidation(context: any): any; //{ throw new Error("Not implemented.");}
        ValidateElement(name: System.Xml.XmlQualifiedName, context: any, errorCode: any): any; //{ throw new Error("Not implemented.");}
    }
    export class FacetsChecker {
        CheckLexicalFacets(parseString: any, datatype: System.Xml.Schema.XmlSchemaDatatype): System.Exception; //{ throw new Error("Not implemented.");}
        CheckPatternFacets(restriction: System.Xml.Schema.RestrictionFacets, value: string): System.Exception; //{ throw new Error("Not implemented.");}
        CheckValueFacets(value: System.Xml.XmlQualifiedName, datatype: System.Xml.Schema.XmlSchemaDatatype): System.Exception; //{ throw new Error("Not implemented.");}
        CheckValueFacets(value: System.TimeSpan, datatype: System.Xml.Schema.XmlSchemaDatatype): System.Exception; //{ throw new Error("Not implemented.");}
        CheckValueFacets(value: System.Byte[], datatype: System.Xml.Schema.XmlSchemaDatatype): System.Exception; //{ throw new Error("Not implemented.");}
        CheckValueFacets(value: string, datatype: System.Xml.Schema.XmlSchemaDatatype): System.Exception; //{ throw new Error("Not implemented.");}
        CheckValueFacets(value: number, datatype: System.Xml.Schema.XmlSchemaDatatype): System.Exception; //{ throw new Error("Not implemented.");}
        CheckValueFacets(value: number, datatype: System.Xml.Schema.XmlSchemaDatatype): System.Exception; //{ throw new Error("Not implemented.");}
        CheckValueFacets(value: number, datatype: System.Xml.Schema.XmlSchemaDatatype): System.Exception; //{ throw new Error("Not implemented.");}
        CheckValueFacets(value: number, datatype: System.Xml.Schema.XmlSchemaDatatype): System.Exception; //{ throw new Error("Not implemented.");}
        CheckValueFacets(value: number, datatype: System.Xml.Schema.XmlSchemaDatatype): System.Exception; //{ throw new Error("Not implemented.");}
        CheckValueFacets(value: number, datatype: System.Xml.Schema.XmlSchemaDatatype): System.Exception; //{ throw new Error("Not implemented.");}
        CheckValueFacets(value: number, datatype: System.Xml.Schema.XmlSchemaDatatype): System.Exception; //{ throw new Error("Not implemented.");}
        CheckValueFacets(value: any, datatype: System.Xml.Schema.XmlSchemaDatatype): System.Exception; //{ throw new Error("Not implemented.");}
        CheckValueFacets(value: Date, datatype: System.Xml.Schema.XmlSchemaDatatype): System.Exception; //{ throw new Error("Not implemented.");}
        CheckWhitespaceFacets(s: any, datatype: System.Xml.Schema.XmlSchemaDatatype): any; //{ throw new Error("Not implemented.");}
        ConstructRestriction(datatype: any, facets: System.Xml.Schema.XmlSchemaObjectCollection, nameTable: System.Xml.XmlNameTable): System.Xml.Schema.RestrictionFacets; //{ throw new Error("Not implemented.");}
        MatchEnumeration(value: any, enumeration: System.Collections.ArrayList, datatype: System.Xml.Schema.XmlSchemaDatatype): boolean; //{ throw new Error("Not implemented.");}
        Power(x: number, y: number): number; //{ throw new Error("Not implemented.");}
    }
    interface IXmlSchemaInfo {
        Validity: System.Xml.Schema.XmlSchemaValidity;
        IsDefault: boolean;
        IsNil: boolean;
        MemberType: System.Xml.Schema.XmlSchemaSimpleType;
        SchemaType: System.Xml.Schema.XmlSchemaType;
        SchemaElement: System.Xml.Schema.XmlSchemaElement;
        SchemaAttribute: System.Xml.Schema.XmlSchemaAttribute;
    }
    export class NamespaceList {
        Type: System.Xml.Schema.NamespaceList.ListType;
        Excluded: string;
        Enumerate: System.Collections.ICollection;
        private type: System.Xml.Schema.NamespaceList.ListType;
        private set: System.Collections.Hashtable;
        private targetNamespace: string;
        Allows(ns: string): boolean; //{ throw new Error("Not implemented.");}
        Allows(qname: System.Xml.XmlQualifiedName): boolean; //{ throw new Error("Not implemented.");}
        Clone(): System.Xml.Schema.NamespaceList; //{ throw new Error("Not implemented.");}
        CompareSetToOther(other: System.Xml.Schema.NamespaceList): System.Xml.Schema.NamespaceList; //{ throw new Error("Not implemented.");}
        Intersection(o1: System.Xml.Schema.NamespaceList, o2: System.Xml.Schema.NamespaceList, v1Compat: boolean): System.Xml.Schema.NamespaceList; //{ throw new Error("Not implemented.");}
        IsEmpty(): boolean; //{ throw new Error("Not implemented.");}
		IsSubset(sub: System.Xml.Schema.NamespaceList, super: System.Xml.Schema.NamespaceList): boolean; //{ throw new Error("Not implemented.");}
        RemoveNamespace(tns: string): any; //{ throw new Error("Not implemented.");}
        ToString(): string; //{ throw new Error("Not implemented.");}
        Union(o1: System.Xml.Schema.NamespaceList, o2: System.Xml.Schema.NamespaceList, v1Compat: boolean): System.Xml.Schema.NamespaceList; //{ throw new Error("Not implemented.");}
    }
    export class RestrictionFacets {
        Length: number;
        MinLength: number;
        MaxLength: number;
        Patterns: System.Collections.ArrayList;
        Enumeration: System.Collections.ArrayList;
        WhiteSpace: System.Xml.Schema.XmlSchemaWhiteSpace;
        MaxInclusive: any;
        MaxExclusive: any;
        MinInclusive: any;
        MinExclusive: any;
        TotalDigits: number;
        FractionDigits: number;
        Flags: System.Xml.Schema.RestrictionFlags;
        FixedFlags: System.Xml.Schema.RestrictionFlags;
    }
    export class SchemaAttDef extends System.Xml.Schema.SchemaDeclBase {
		private System.Xml.IDtdAttributeInfo.Prefix: string;
		private System.Xml.IDtdAttributeInfo.LocalName: string;
		private System.Xml.IDtdAttributeInfo.LineNumber: number;
		private System.Xml.IDtdAttributeInfo.LinePosition: number;
		private System.Xml.IDtdAttributeInfo.IsNonCDataType: boolean;
		private System.Xml.IDtdAttributeInfo.IsDeclaredInExternal: boolean;
		private System.Xml.IDtdAttributeInfo.IsXmlAttribute: boolean;
		private System.Xml.IDtdDefaultAttributeInfo.DefaultValueExpanded: string;
		private System.Xml.IDtdDefaultAttributeInfo.DefaultValueTyped: any;
		private System.Xml.IDtdDefaultAttributeInfo.ValueLineNumber: number;
		private System.Xml.IDtdDefaultAttributeInfo.ValueLinePosition: number;
        LinePosition: number;
        LineNumber: number;
        ValueLinePosition: number;
        ValueLineNumber: number;
        DefaultValueExpanded: string;
        TokenizedType: System.Xml.XmlTokenizedType;
        Reserved: System.Xml.Schema.SchemaAttDef.Reserve;
        DefaultValueChecked: boolean;
        HasEntityRef: boolean;
        SchemaAttribute: System.Xml.Schema.XmlSchemaAttribute;
        private defExpanded: string;
        private lineNum: number;
        private linePos: number;
        private valueLineNum: number;
        private valueLinePos: number;
        private reserved: System.Xml.Schema.SchemaAttDef.Reserve;
        private defaultValueChecked: boolean;
        private hasEntityRef: boolean;
        private schemaAttribute: System.Xml.Schema.XmlSchemaAttribute;
        static Empty: System.Xml.Schema.SchemaAttDef;
        CheckXmlSpace(validationEventHandling: any): any; //{ throw new Error("Not implemented.");}
        Clone(): System.Xml.Schema.SchemaAttDef; //{ throw new Error("Not implemented.");}
    }
    export class SchemaDeclBase {
        Name: System.Xml.XmlQualifiedName;
        Prefix: string;
        IsDeclaredInExternal: boolean;
        Presence: System.Xml.Schema.SchemaDeclBase.Use;
        MaxLength: number;
        MinLength: number;
        SchemaType: System.Xml.Schema.XmlSchemaType;
        Datatype: System.Xml.Schema.XmlSchemaDatatype;
        Values: System.Collections.Generic.List<string>;
        DefaultValueRaw: string;
        DefaultValueTyped: any;
        name: System.Xml.XmlQualifiedName;
        prefix: string;
        isDeclaredInExternal: boolean;
        presence: System.Xml.Schema.SchemaDeclBase.Use;
        schemaType: System.Xml.Schema.XmlSchemaType;
        datatype: System.Xml.Schema.XmlSchemaDatatype;
        defaultValueRaw: string;
        defaultValueTyped: any;
        maxLength: number;
        minLength: number;
        values: System.Collections.Generic.List<string>;
        AddValue(value: string): any; //{ throw new Error("Not implemented.");}
        CheckEnumeration(pVal: any): boolean; //{ throw new Error("Not implemented.");}
        CheckValue(pVal: any): boolean; //{ throw new Error("Not implemented.");}
    }
    export class SchemaElementDecl extends System.Xml.Schema.SchemaDeclBase {
		private System.Xml.IDtdAttributeListInfo.Prefix: string;
		private System.Xml.IDtdAttributeListInfo.LocalName: string;
		private System.Xml.IDtdAttributeListInfo.HasNonCDataAttributes: boolean;
        IsIdDeclared: boolean;
        HasNonCDataAttribute: boolean;
        IsAbstract: boolean;
        IsNillable: boolean;
        Block: System.Xml.Schema.XmlSchemaDerivationMethod;
        IsNotationDeclared: boolean;
        HasDefaultAttribute: boolean;
        HasRequiredAttribute: boolean;
        ContentValidator: System.Xml.Schema.ContentValidator;
        AnyAttribute: System.Xml.Schema.XmlSchemaAnyAttribute;
        Constraints: System.Xml.Schema.CompiledIdentityConstraint[];
        SchemaElement: System.Xml.Schema.XmlSchemaElement;
        DefaultAttDefs: System.Collections.Generic.IList<System.Xml.IDtdDefaultAttributeInfo>;
        AttDefs: System.Collections.Generic.Dictionary<System.Xml.XmlQualifiedName, System.Xml.Schema.SchemaAttDef>;
        ProhibitedAttributes: System.Collections.Generic.Dictionary<System.Xml.XmlQualifiedName, System.Xml.XmlQualifiedName>;
        private attdefs: System.Collections.Generic.Dictionary<System.Xml.XmlQualifiedName, System.Xml.Schema.SchemaAttDef>;
        private defaultAttdefs: System.Collections.Generic.List<T>;
        private isIdDeclared: boolean;
        private hasNonCDataAttribute: boolean;
        private isAbstract: boolean;
        private isNillable: boolean;
        private hasRequiredAttribute: boolean;
        private isNotationDeclared: boolean;
        private prohibitedAttributes: System.Collections.Generic.Dictionary<System.Xml.XmlQualifiedName, System.Xml.XmlQualifiedName>;
        private contentValidator: System.Xml.Schema.ContentValidator;
        private anyAttribute: System.Xml.Schema.XmlSchemaAnyAttribute;
        private block: System.Xml.Schema.XmlSchemaDerivationMethod;
        private constraints: System.Xml.Schema.CompiledIdentityConstraint[];
        private schemaElement: System.Xml.Schema.XmlSchemaElement;
        static Empty: System.Xml.Schema.SchemaElementDecl;
        AddAttDef(attdef: System.Xml.Schema.SchemaAttDef): any; //{ throw new Error("Not implemented.");}
        CheckAttributes(presence: System.Collections.Hashtable, standalone: boolean): any; //{ throw new Error("Not implemented.");}
        Clone(): System.Xml.Schema.SchemaElementDecl; //{ throw new Error("Not implemented.");}
        CreateAnyTypeElementDecl(): System.Xml.Schema.SchemaElementDecl; //{ throw new Error("Not implemented.");}
        GetAttDef(qname: System.Xml.XmlQualifiedName): System.Xml.Schema.SchemaAttDef; //{ throw new Error("Not implemented.");}
    }
    export class SchemaEntity {
		private System.Xml.IDtdEntityInfo.Name: string;
		private System.Xml.IDtdEntityInfo.IsExternal: boolean;
		private System.Xml.IDtdEntityInfo.IsDeclaredInExternal: boolean;
		private System.Xml.IDtdEntityInfo.IsUnparsedEntity: boolean;
		private System.Xml.IDtdEntityInfo.IsParameterEntity: boolean;
		private System.Xml.IDtdEntityInfo.BaseUriString: string;
		private System.Xml.IDtdEntityInfo.DeclaredUriString: string;
		private System.Xml.IDtdEntityInfo.SystemId: string;
		private System.Xml.IDtdEntityInfo.PublicId: string;
		private System.Xml.IDtdEntityInfo.Text: string;
		private System.Xml.IDtdEntityInfo.LineNumber: number;
		private System.Xml.IDtdEntityInfo.LinePosition: number;
        Name: System.Xml.XmlQualifiedName;
        Url: string;
        Pubid: string;
        IsExternal: boolean;
        DeclaredInExternal: boolean;
        NData: System.Xml.XmlQualifiedName;
        Text: string;
        Line: number;
        Pos: number;
        BaseURI: string;
        ParsingInProgress: boolean;
        DeclaredURI: string;
        private qname: System.Xml.XmlQualifiedName;
        private url: string;
        private pubid: string;
        private text: string;
        private ndata: System.Xml.XmlQualifiedName;
        private lineNumber: number;
        private linePosition: number;
        private isParameter: boolean;
        private isExternal: boolean;
        private parsingInProgress: boolean;
        private isDeclaredInExternal: boolean;
        private baseURI: string;
        private declaredURI: string;
        IsPredefinedEntity(n: string): boolean; //{ throw new Error("Not implemented.");}
    }
    export class SchemaInfo {
        DocTypeName: System.Xml.XmlQualifiedName;
        InternalDtdSubset: string;
        ElementDecls: System.Collections.Generic.Dictionary<System.Xml.XmlQualifiedName, System.Xml.Schema.SchemaElementDecl>;
        UndeclaredElementDecls: System.Collections.Generic.Dictionary<System.Xml.XmlQualifiedName, System.Xml.Schema.SchemaElementDecl>;
        GeneralEntities: System.Collections.Generic.Dictionary<System.Xml.XmlQualifiedName, System.Xml.Schema.SchemaEntity>;
        ParameterEntities: System.Collections.Generic.Dictionary<System.Xml.XmlQualifiedName, System.Xml.Schema.SchemaEntity>;
        SchemaType: System.Xml.Schema.SchemaType;
        TargetNamespaces: System.Collections.Generic.Dictionary<string, boolean>;
        ElementDeclsByType: System.Collections.Generic.Dictionary<System.Xml.XmlQualifiedName, System.Xml.Schema.SchemaElementDecl>;
        AttributeDecls: System.Collections.Generic.Dictionary<System.Xml.XmlQualifiedName, System.Xml.Schema.SchemaAttDef>;
        Notations: System.Collections.Generic.Dictionary<string, System.Xml.Schema.SchemaNotation>;
        ErrorCount: number;
		private System.Xml.IDtdInfo.HasDefaultAttributes: boolean;
		private System.Xml.IDtdInfo.HasNonCDataAttributes: boolean;
		private System.Xml.IDtdInfo.Name: System.Xml.XmlQualifiedName;
		private System.Xml.IDtdInfo.InternalDtdSubset: string;
        private elementDecls: System.Collections.Generic.Dictionary<System.Xml.XmlQualifiedName, System.Xml.Schema.SchemaElementDecl>;
        private undeclaredElementDecls: System.Collections.Generic.Dictionary<System.Xml.XmlQualifiedName, System.Xml.Schema.SchemaElementDecl>;
        private generalEntities: System.Collections.Generic.Dictionary<System.Xml.XmlQualifiedName, System.Xml.Schema.SchemaEntity>;
        private parameterEntities: System.Collections.Generic.Dictionary<System.Xml.XmlQualifiedName, System.Xml.Schema.SchemaEntity>;
        private docTypeName: System.Xml.XmlQualifiedName;
        private internalDtdSubset: string;
        private hasNonCDataAttributes: boolean;
        private hasDefaultAttributes: boolean;
        private targetNamespaces: System.Collections.Generic.Dictionary<string, boolean>;
        private attributeDecls: System.Collections.Generic.Dictionary<System.Xml.XmlQualifiedName, System.Xml.Schema.SchemaAttDef>;
        private errorCount: number;
        private schemaType: System.Xml.Schema.SchemaType;
        private elementDeclsByType: System.Collections.Generic.Dictionary<System.Xml.XmlQualifiedName, System.Xml.Schema.SchemaElementDecl>;
        private notations: System.Collections.Generic.Dictionary<string, System.Xml.Schema.SchemaNotation>;
        Add(sinfo: System.Xml.Schema.SchemaInfo, eventhandler: any): any; //{ throw new Error("Not implemented.");}
        Contains(ns: string): boolean; //{ throw new Error("Not implemented.");}
        Finish(): any; //{ throw new Error("Not implemented.");}
        GetAttribute(qname: System.Xml.XmlQualifiedName): System.Xml.Schema.XmlSchemaAttribute; //{ throw new Error("Not implemented.");}
        GetAttributeXdr(ed: System.Xml.Schema.SchemaElementDecl, qname: System.Xml.XmlQualifiedName): System.Xml.Schema.SchemaAttDef; //{ throw new Error("Not implemented.");}
        GetAttributeXsd(ed: System.Xml.Schema.SchemaElementDecl, qname: System.Xml.XmlQualifiedName, partialValidationType: System.Xml.Schema.XmlSchemaObject, attributeMatchState: any): System.Xml.Schema.SchemaAttDef; //{ throw new Error("Not implemented.");}
        GetAttributeXsd(ed: System.Xml.Schema.SchemaElementDecl, qname: System.Xml.XmlQualifiedName, skip: any): System.Xml.Schema.SchemaAttDef; //{ throw new Error("Not implemented.");}
        GetElement(qname: System.Xml.XmlQualifiedName): System.Xml.Schema.XmlSchemaElement; //{ throw new Error("Not implemented.");}
        GetElementDecl(qname: System.Xml.XmlQualifiedName): System.Xml.Schema.SchemaElementDecl; //{ throw new Error("Not implemented.");}
        GetType(qname: System.Xml.XmlQualifiedName): System.Xml.Schema.XmlSchemaElement; //{ throw new Error("Not implemented.");}
        GetTypeDecl(qname: System.Xml.XmlQualifiedName): System.Xml.Schema.SchemaElementDecl; //{ throw new Error("Not implemented.");}
        HasSchema(ns: string): boolean; //{ throw new Error("Not implemented.");}
    }
    export class SchemaNotation {
        Name: System.Xml.XmlQualifiedName;
        SystemLiteral: string;
        Pubid: string;
        private name: System.Xml.XmlQualifiedName;
        private systemLiteral: string;
        private pubid: string;
    }
    export class XmlSchema extends System.Xml.Schema.XmlSchemaObject {
        AttributeFormDefault: System.Xml.Schema.XmlSchemaForm;
        BlockDefault: System.Xml.Schema.XmlSchemaDerivationMethod;
        FinalDefault: System.Xml.Schema.XmlSchemaDerivationMethod;
        ElementFormDefault: System.Xml.Schema.XmlSchemaForm;
        TargetNamespace: string;
        Version: string;
        Includes: System.Xml.Schema.XmlSchemaObjectCollection;
        Items: System.Xml.Schema.XmlSchemaObjectCollection;
        IsCompiled: boolean;
        IsCompiledBySet: boolean;
        IsPreprocessed: boolean;
        IsRedefined: boolean;
        Attributes: System.Xml.Schema.XmlSchemaObjectTable;
        AttributeGroups: System.Xml.Schema.XmlSchemaObjectTable;
        SchemaTypes: System.Xml.Schema.XmlSchemaObjectTable;
        Elements: System.Xml.Schema.XmlSchemaObjectTable;
        Id: string;
        UnhandledAttributes: System.Xml.XmlAttribute[];
        Groups: System.Xml.Schema.XmlSchemaObjectTable;
        Notations: System.Xml.Schema.XmlSchemaObjectTable;
        IdentityConstraints: System.Xml.Schema.XmlSchemaObjectTable;
        BaseUri: System.Uri;
        SchemaId: number;
        IsChameleon: boolean;
        Ids: System.Collections.Hashtable;
        Document: System.Xml.XmlDocument;
        ErrorCount: number;
        IdAttribute: string;
        NameTable: System.Xml.XmlNameTable;
        ImportedSchemas: System.Collections.ArrayList;
        ImportedNamespaces: System.Collections.ArrayList;
        private attributeFormDefault: System.Xml.Schema.XmlSchemaForm;
        private elementFormDefault: System.Xml.Schema.XmlSchemaForm;
        private blockDefault: System.Xml.Schema.XmlSchemaDerivationMethod;
        private finalDefault: System.Xml.Schema.XmlSchemaDerivationMethod;
        private targetNs: string;
        private version: string;
        private includes: System.Xml.Schema.XmlSchemaObjectCollection;
        private items: System.Xml.Schema.XmlSchemaObjectCollection;
        private id: string;
        private moreAttributes: System.Xml.XmlAttribute[];
        private isCompiled: boolean;
        private isCompiledBySet: boolean;
        private isPreprocessed: boolean;
        private isRedefined: boolean;
        private errorCount: number;
        private attributes: System.Xml.Schema.XmlSchemaObjectTable;
        private attributeGroups: System.Xml.Schema.XmlSchemaObjectTable;
        private elements: System.Xml.Schema.XmlSchemaObjectTable;
        private types: System.Xml.Schema.XmlSchemaObjectTable;
        private groups: System.Xml.Schema.XmlSchemaObjectTable;
        private notations: System.Xml.Schema.XmlSchemaObjectTable;
        private identityConstraints: System.Xml.Schema.XmlSchemaObjectTable;
        private importedSchemas: System.Collections.ArrayList;
        private importedNamespaces: System.Collections.ArrayList;
        private schemaId: number;
        private baseUri: System.Uri;
        private isChameleon: boolean;
        private ids: System.Collections.Hashtable;
        private document: System.Xml.XmlDocument;
        private nameTable: System.Xml.XmlNameTable;
        private static globalIdCounter: number;
        AddAnnotation(annotation: System.Xml.Schema.XmlSchemaAnnotation): any; //{ throw new Error("Not implemented.");}
        Clone(): System.Xml.Schema.XmlSchema; //{ throw new Error("Not implemented.");}
        Compile(validationEventHandler: any): any; //{ throw new Error("Not implemented.");}
        Compile(validationEventHandler: any, resolver: System.Xml.XmlResolver): any; //{ throw new Error("Not implemented.");}
        CompileSchema(xsc: any, resolver: System.Xml.XmlResolver, schemaInfo: System.Xml.Schema.SchemaInfo, ns: string, validationEventHandler: any, nameTable: System.Xml.XmlNameTable, CompileContentModel: boolean): boolean; //{ throw new Error("Not implemented.");}
        CompileSchemaInSet(nameTable: System.Xml.XmlNameTable, eventHandler: any, compilationSettings: System.Xml.Schema.XmlSchemaCompilationSettings): any; //{ throw new Error("Not implemented.");}
        DeepClone(): System.Xml.Schema.XmlSchema; //{ throw new Error("Not implemented.");}
        GetExternalSchemasList(extList: System.Collections.IList, schema: System.Xml.Schema.XmlSchema): any; //{ throw new Error("Not implemented.");}
        Read(reader: any, validationEventHandler: any): System.Xml.Schema.XmlSchema; //{ throw new Error("Not implemented.");}
        Read(stream: System.IO.Stream, validationEventHandler: any): System.Xml.Schema.XmlSchema; //{ throw new Error("Not implemented.");}
        Read(reader: any, validationEventHandler: any): System.Xml.Schema.XmlSchema; //{ throw new Error("Not implemented.");}
        SetIsCompiled(isCompiled: boolean): any; //{ throw new Error("Not implemented.");}
        SetUnhandledAttributes(moreAttributes: System.Xml.XmlAttribute[]): any; //{ throw new Error("Not implemented.");}
        Write(writer: System.Xml.XmlWriter, namespaceManager: System.Xml.XmlNamespaceManager): any; //{ throw new Error("Not implemented.");}
        Write(writer: System.IO.TextWriter, namespaceManager: System.Xml.XmlNamespaceManager): any; //{ throw new Error("Not implemented.");}
        Write(writer: System.IO.TextWriter): any; //{ throw new Error("Not implemented.");}
        Write(stream: System.IO.Stream, namespaceManager: System.Xml.XmlNamespaceManager): any; //{ throw new Error("Not implemented.");}
        Write(stream: System.IO.Stream): any; //{ throw new Error("Not implemented.");}
        Write(writer: System.Xml.XmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class XmlSchemaAnnotated extends System.Xml.Schema.XmlSchemaObject {
        Id: string;
        Annotation: System.Xml.Schema.XmlSchemaAnnotation;
        UnhandledAttributes: System.Xml.XmlAttribute[];
        IdAttribute: string;
        private id: string;
        private annotation: System.Xml.Schema.XmlSchemaAnnotation;
        private moreAttributes: System.Xml.XmlAttribute[];
        AddAnnotation(annotation: System.Xml.Schema.XmlSchemaAnnotation): any; //{ throw new Error("Not implemented.");}
        SetUnhandledAttributes(moreAttributes: System.Xml.XmlAttribute[]): any; //{ throw new Error("Not implemented.");}
    }
    export class XmlSchemaAnnotation extends System.Xml.Schema.XmlSchemaObject {
        Id: string;
        Items: System.Xml.Schema.XmlSchemaObjectCollection;
        UnhandledAttributes: System.Xml.XmlAttribute[];
        IdAttribute: string;
        private id: string;
        private items: System.Xml.Schema.XmlSchemaObjectCollection;
        private moreAttributes: System.Xml.XmlAttribute[];
        SetUnhandledAttributes(moreAttributes: System.Xml.XmlAttribute[]): any; //{ throw new Error("Not implemented.");}
    }
    export class XmlSchemaAnyAttribute extends System.Xml.Schema.XmlSchemaAnnotated {
        Namespace: string;
        ProcessContents: System.Xml.Schema.XmlSchemaContentProcessing;
        NamespaceList: System.Xml.Schema.NamespaceList;
        ProcessContentsCorrect: System.Xml.Schema.XmlSchemaContentProcessing;
        private ns: string;
        private processContents: System.Xml.Schema.XmlSchemaContentProcessing;
        private namespaceList: System.Xml.Schema.NamespaceList;
        Allows(qname: System.Xml.XmlQualifiedName): boolean; //{ throw new Error("Not implemented.");}
        BuildNamespaceList(targetNamespace: string): any; //{ throw new Error("Not implemented.");}
        BuildNamespaceListV1Compat(targetNamespace: string): any; //{ throw new Error("Not implemented.");}
        Intersection(o1: System.Xml.Schema.XmlSchemaAnyAttribute, o2: System.Xml.Schema.XmlSchemaAnyAttribute, v1Compat: boolean): System.Xml.Schema.XmlSchemaAnyAttribute; //{ throw new Error("Not implemented.");}
		IsSubset(sub: System.Xml.Schema.XmlSchemaAnyAttribute, super: System.Xml.Schema.XmlSchemaAnyAttribute): boolean; //{ throw new Error("Not implemented.");}
        Union(o1: System.Xml.Schema.XmlSchemaAnyAttribute, o2: System.Xml.Schema.XmlSchemaAnyAttribute, v1Compat: boolean): System.Xml.Schema.XmlSchemaAnyAttribute; //{ throw new Error("Not implemented.");}
    }
    export class XmlSchemaAttribute extends System.Xml.Schema.XmlSchemaAnnotated {
        DefaultValue: string;
        FixedValue: string;
        Form: System.Xml.Schema.XmlSchemaForm;
        Name: string;
        RefName: System.Xml.XmlQualifiedName;
        SchemaTypeName: System.Xml.XmlQualifiedName;
        SchemaType: System.Xml.Schema.XmlSchemaSimpleType;
        Use: System.Xml.Schema.XmlSchemaUse;
        QualifiedName: System.Xml.XmlQualifiedName;
        AttributeType: any;
        AttributeSchemaType: System.Xml.Schema.XmlSchemaSimpleType;
        Datatype: System.Xml.Schema.XmlSchemaDatatype;
        AttDef: System.Xml.Schema.SchemaAttDef;
        HasDefault: boolean;
        NameAttribute: string;
        private defaultValue: string;
        private fixedValue: string;
        private name: string;
        private form: System.Xml.Schema.XmlSchemaForm;
        private use: System.Xml.Schema.XmlSchemaUse;
        private refName: System.Xml.XmlQualifiedName;
        private typeName: System.Xml.XmlQualifiedName;
        private qualifiedName: System.Xml.XmlQualifiedName;
        private type: System.Xml.Schema.XmlSchemaSimpleType;
        private attributeType: System.Xml.Schema.XmlSchemaSimpleType;
        private attDef: System.Xml.Schema.SchemaAttDef;
        Clone(): System.Xml.Schema.XmlSchemaObject; //{ throw new Error("Not implemented.");}
        SetAttributeType(value: System.Xml.Schema.XmlSchemaSimpleType): any; //{ throw new Error("Not implemented.");}
        SetQualifiedName(value: System.Xml.XmlQualifiedName): any; //{ throw new Error("Not implemented.");}
        Validate(reader: any, resolver: System.Xml.XmlResolver, schemaSet: System.Xml.Schema.XmlSchemaSet, valEventHandler: any): any; //{ throw new Error("Not implemented.");}
    }
    export class XmlSchemaCompilationSettings {
        EnableUpaCheck: boolean;
        private enableUpaCheck: boolean;
    }
    export class XmlSchemaDatatype {
        ValueType: System.Type;
        TokenizedType: System.Xml.XmlTokenizedType;
        Variety: System.Xml.Schema.XmlSchemaDatatypeVariety;
        TypeCode: System.Xml.Schema.XmlTypeCode;
        HasLexicalFacets: boolean;
        HasValueFacets: boolean;
        ValueConverter: System.Xml.Schema.XmlValueConverter;
        Restriction: System.Xml.Schema.RestrictionFacets;
        FacetsChecker: System.Xml.Schema.FacetsChecker;
        BuiltInWhitespaceFacet: System.Xml.Schema.XmlSchemaWhiteSpace;
        TypeCodeString: string;
        ChangeType(value: any, targetType: System.Type): any; //{ throw new Error("Not implemented.");}
        ChangeType(value: any, targetType: System.Type, namespaceResolver: System.Xml.IXmlNamespaceResolver): any; //{ throw new Error("Not implemented.");}
        Compare(value1: any, value2: any): number; //{ throw new Error("Not implemented.");}
        ConcatenatedToString(value: any): string; //{ throw new Error("Not implemented.");}
        DeriveByList(schemaType: System.Xml.Schema.XmlSchemaType): System.Xml.Schema.XmlSchemaDatatype; //{ throw new Error("Not implemented.");}
        DeriveByRestriction(facets: System.Xml.Schema.XmlSchemaObjectCollection, nameTable: System.Xml.XmlNameTable, schemaType: System.Xml.Schema.XmlSchemaType): System.Xml.Schema.XmlSchemaDatatype; //{ throw new Error("Not implemented.");}
        DeriveByUnion(types: any, schemaType: System.Xml.Schema.XmlSchemaType): System.Xml.Schema.XmlSchemaDatatype; //{ throw new Error("Not implemented.");}
        FromXdrName(name: string): System.Xml.Schema.XmlSchemaDatatype; //{ throw new Error("Not implemented.");}
        FromXmlTokenizedType(token: System.Xml.XmlTokenizedType): System.Xml.Schema.XmlSchemaDatatype; //{ throw new Error("Not implemented.");}
        FromXmlTokenizedTypeXsd(token: System.Xml.XmlTokenizedType): System.Xml.Schema.XmlSchemaDatatype; //{ throw new Error("Not implemented.");}
        IsComparable(dtype: System.Xml.Schema.XmlSchemaDatatype): boolean; //{ throw new Error("Not implemented.");}
        IsDerivedFrom(datatype: System.Xml.Schema.XmlSchemaDatatype): boolean; //{ throw new Error("Not implemented.");}
        IsEqual(o1: any, o2: any): boolean; //{ throw new Error("Not implemented.");}
        ParseValue(s: string, nameTable: System.Xml.XmlNameTable, nsmgr: System.Xml.IXmlNamespaceResolver): any; //{ throw new Error("Not implemented.");}
        ParseValue(s: string, nameTable: System.Xml.XmlNameTable, nsmgr: System.Xml.IXmlNamespaceResolver, createAtomicValue: boolean): any; //{ throw new Error("Not implemented.");}
        ParseValue(s: string, typDest: System.Type, nameTable: System.Xml.XmlNameTable, nsmgr: System.Xml.IXmlNamespaceResolver): any; //{ throw new Error("Not implemented.");}
        TryParseValue(value: any, nameTable: System.Xml.XmlNameTable, namespaceResolver: System.Xml.IXmlNamespaceResolver, typedValue: any): System.Exception; //{ throw new Error("Not implemented.");}
        TryParseValue(s: string, nameTable: System.Xml.XmlNameTable, nsmgr: System.Xml.IXmlNamespaceResolver, typedValue: any): System.Exception; //{ throw new Error("Not implemented.");}
        TypeCodeToString(typeCode: System.Xml.Schema.XmlTypeCode): string; //{ throw new Error("Not implemented.");}
        VerifySchemaValid(notations: System.Xml.Schema.XmlSchemaObjectTable, caller: System.Xml.Schema.XmlSchemaObject): any; //{ throw new Error("Not implemented.");}
        XdrCanonizeUri(uri: string, nameTable: System.Xml.XmlNameTable, schemaNames: any): string; //{ throw new Error("Not implemented.");}
    }
    export class XmlSchemaElement extends System.Xml.Schema.XmlSchemaParticle {
        IsAbstract: boolean;
        Block: System.Xml.Schema.XmlSchemaDerivationMethod;
        DefaultValue: string;
        Final: System.Xml.Schema.XmlSchemaDerivationMethod;
        FixedValue: string;
        Form: System.Xml.Schema.XmlSchemaForm;
        Name: string;
        IsNillable: boolean;
        HasNillableAttribute: boolean;
        HasAbstractAttribute: boolean;
        RefName: System.Xml.XmlQualifiedName;
        SubstitutionGroup: System.Xml.XmlQualifiedName;
        SchemaTypeName: System.Xml.XmlQualifiedName;
        SchemaType: System.Xml.Schema.XmlSchemaType;
        Constraints: System.Xml.Schema.XmlSchemaObjectCollection;
        QualifiedName: System.Xml.XmlQualifiedName;
        ElementType: any;
        ElementSchemaType: System.Xml.Schema.XmlSchemaType;
        BlockResolved: System.Xml.Schema.XmlSchemaDerivationMethod;
        FinalResolved: System.Xml.Schema.XmlSchemaDerivationMethod;
        HasDefault: boolean;
        HasConstraints: boolean;
        IsLocalTypeDerivationChecked: boolean;
        ElementDecl: System.Xml.Schema.SchemaElementDecl;
        NameAttribute: string;
        NameString: string;
        private isAbstract: boolean;
        private hasAbstractAttribute: boolean;
        private isNillable: boolean;
        private hasNillableAttribute: boolean;
        private isLocalTypeDerivationChecked: boolean;
        private block: System.Xml.Schema.XmlSchemaDerivationMethod;
        private final: System.Xml.Schema.XmlSchemaDerivationMethod;
        private form: System.Xml.Schema.XmlSchemaForm;
        private defaultValue: string;
        private fixedValue: string;
        private name: string;
        private refName: System.Xml.XmlQualifiedName;
        private substitutionGroup: System.Xml.XmlQualifiedName;
        private typeName: System.Xml.XmlQualifiedName;
        private type: System.Xml.Schema.XmlSchemaType;
        private qualifiedName: System.Xml.XmlQualifiedName;
        private elementType: System.Xml.Schema.XmlSchemaType;
        private blockResolved: System.Xml.Schema.XmlSchemaDerivationMethod;
        private finalResolved: System.Xml.Schema.XmlSchemaDerivationMethod;
        private constraints: System.Xml.Schema.XmlSchemaObjectCollection;
        private elementDecl: System.Xml.Schema.SchemaElementDecl;
        Clone(): System.Xml.Schema.XmlSchemaObject; //{ throw new Error("Not implemented.");}
        Clone(parentSchema: System.Xml.Schema.XmlSchema): System.Xml.Schema.XmlSchemaObject; //{ throw new Error("Not implemented.");}
        SetBlockResolved(value: System.Xml.Schema.XmlSchemaDerivationMethod): any; //{ throw new Error("Not implemented.");}
        SetElementType(value: System.Xml.Schema.XmlSchemaType): any; //{ throw new Error("Not implemented.");}
        SetFinalResolved(value: System.Xml.Schema.XmlSchemaDerivationMethod): any; //{ throw new Error("Not implemented.");}
        SetQualifiedName(value: System.Xml.XmlQualifiedName): any; //{ throw new Error("Not implemented.");}
        Validate(reader: any, resolver: System.Xml.XmlResolver, schemaSet: System.Xml.Schema.XmlSchemaSet, valEventHandler: any): any; //{ throw new Error("Not implemented.");}
    }
    export class XmlSchemaObject {
        LineNumber: number;
        LinePosition: number;
        SourceUri: string;
        Parent: System.Xml.Schema.XmlSchemaObject;
        Namespaces: System.Xml.Serialization.XmlSerializerNamespaces;
        IdAttribute: string;
        NameAttribute: string;
        IsProcessing: boolean;
        private lineNum: number;
        private linePos: number;
        private sourceUri: string;
        private namespaces: System.Xml.Serialization.XmlSerializerNamespaces;
        private parent: System.Xml.Schema.XmlSchemaObject;
        private isProcessing: boolean;
        AddAnnotation(annotation: System.Xml.Schema.XmlSchemaAnnotation): any; //{ throw new Error("Not implemented.");}
        Clone(): System.Xml.Schema.XmlSchemaObject; //{ throw new Error("Not implemented.");}
        OnAdd(container: System.Xml.Schema.XmlSchemaObjectCollection, item: any): any; //{ throw new Error("Not implemented.");}
        OnClear(container: System.Xml.Schema.XmlSchemaObjectCollection): any; //{ throw new Error("Not implemented.");}
        OnRemove(container: System.Xml.Schema.XmlSchemaObjectCollection, item: any): any; //{ throw new Error("Not implemented.");}
        SetUnhandledAttributes(moreAttributes: System.Xml.XmlAttribute[]): any; //{ throw new Error("Not implemented.");}
    }
    export class XmlSchemaObjectCollection extends System.Collections.CollectionBase {
        Item: System.Xml.Schema.XmlSchemaObject;
        private parent: System.Xml.Schema.XmlSchemaObject;
        Add(item: System.Xml.Schema.XmlSchemaObject): number; //{ throw new Error("Not implemented.");}
        Add(collToAdd: System.Xml.Schema.XmlSchemaObjectCollection): any; //{ throw new Error("Not implemented.");}
        Clone(): System.Xml.Schema.XmlSchemaObjectCollection; //{ throw new Error("Not implemented.");}
        Contains(item: System.Xml.Schema.XmlSchemaObject): boolean; //{ throw new Error("Not implemented.");}
        CopyTo(array: any, index: number): any; //{ throw new Error("Not implemented.");}
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
        IndexOf(item: System.Xml.Schema.XmlSchemaObject): number; //{ throw new Error("Not implemented.");}
        Insert(index: number, item: System.Xml.Schema.XmlSchemaObject): any; //{ throw new Error("Not implemented.");}
        OnClear(): any; //{ throw new Error("Not implemented.");}
        OnInsert(index: number, item: any): any; //{ throw new Error("Not implemented.");}
        OnRemove(index: number, item: any): any; //{ throw new Error("Not implemented.");}
        OnSet(index: number, oldValue: any, newValue: any): any; //{ throw new Error("Not implemented.");}
        Remove(item: System.Xml.Schema.XmlSchemaObject): any; //{ throw new Error("Not implemented.");}
    }
    export class XmlSchemaObjectTable {
        Count: number;
        Item: System.Xml.Schema.XmlSchemaObject;
        Names: System.Collections.ICollection;
        Values: System.Collections.ICollection;
        private table: System.Collections.Generic.Dictionary<TKey, TValue>;
        private entries: System.Collections.Generic.List<T>;
        Add(name: System.Xml.XmlQualifiedName, value: System.Xml.Schema.XmlSchemaObject): any; //{ throw new Error("Not implemented.");}
        Clear(): any; //{ throw new Error("Not implemented.");}
        Contains(name: System.Xml.XmlQualifiedName): boolean; //{ throw new Error("Not implemented.");}
        FindIndexByValue(xso: System.Xml.Schema.XmlSchemaObject): number; //{ throw new Error("Not implemented.");}
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
        Insert(name: System.Xml.XmlQualifiedName, value: System.Xml.Schema.XmlSchemaObject): any; //{ throw new Error("Not implemented.");}
        Remove(name: System.Xml.XmlQualifiedName): any; //{ throw new Error("Not implemented.");}
        Replace(name: System.Xml.XmlQualifiedName, value: System.Xml.Schema.XmlSchemaObject): any; //{ throw new Error("Not implemented.");}
    }
    export class XmlSchemaParticle extends System.Xml.Schema.XmlSchemaAnnotated {
        MinOccursString: string;
        MaxOccursString: string;
        MinOccurs: number;
        MaxOccurs: number;
        IsEmpty: boolean;
        IsMultipleOccurrence: boolean;
        NameString: string;
        private minOccurs: number;
        private maxOccurs: number;
        private flags: System.Xml.Schema.XmlSchemaParticle.Occurs;
        static Empty: System.Xml.Schema.XmlSchemaParticle;
        GetQualifiedName(): System.Xml.XmlQualifiedName; //{ throw new Error("Not implemented.");}
    }
    export class XmlSchemaSet {
        InternalSyncObject: any;
        NameTable: System.Xml.XmlNameTable;
        IsCompiled: boolean;
        XmlResolver: System.Xml.XmlResolver;
        CompilationSettings: System.Xml.Schema.XmlSchemaCompilationSettings;
        Count: number;
        GlobalElements: System.Xml.Schema.XmlSchemaObjectTable;
        GlobalAttributes: System.Xml.Schema.XmlSchemaObjectTable;
        GlobalTypes: System.Xml.Schema.XmlSchemaObjectTable;
        SubstitutionGroups: System.Xml.Schema.XmlSchemaObjectTable;
        SchemaLocations: System.Collections.Hashtable;
        TypeExtensions: System.Xml.Schema.XmlSchemaObjectTable;
        CompiledInfo: System.Xml.Schema.SchemaInfo;
        ReaderSettings: System.Xml.XmlReaderSettings;
        SortedSchemas: System.Collections.SortedList;
        CompileAll: boolean;
        private nameTable: System.Xml.XmlNameTable;
        private schemaNames: any;
        private schemas: System.Collections.SortedList;
        private internalEventHandler: any;
        private eventHandler: any;
        private isCompiled: boolean;
        private schemaLocations: System.Collections.Hashtable;
        private chameleonSchemas: System.Collections.Hashtable;
        private targetNamespaces: System.Collections.Hashtable;
        private compileAll: boolean;
        private cachedCompiledInfo: System.Xml.Schema.SchemaInfo;
        private readerSettings: System.Xml.XmlReaderSettings;
        private schemaForSchema: System.Xml.Schema.XmlSchema;
        private compilationSettings: System.Xml.Schema.XmlSchemaCompilationSettings;
        elements: System.Xml.Schema.XmlSchemaObjectTable;
        attributes: System.Xml.Schema.XmlSchemaObjectTable;
        schemaTypes: System.Xml.Schema.XmlSchemaObjectTable;
        substitutionGroups: System.Xml.Schema.XmlSchemaObjectTable;
        private typeExtensions: System.Xml.Schema.XmlSchemaObjectTable;
        private internalSyncObject: any;
        Add(targetNamespace: string, schemaUri: string): System.Xml.Schema.XmlSchema; //{ throw new Error("Not implemented.");}
        Add(targetNamespace: string, schemaDocument: any): System.Xml.Schema.XmlSchema; //{ throw new Error("Not implemented.");}
        Add(schemas: System.Xml.Schema.XmlSchemaSet): any; //{ throw new Error("Not implemented.");}
        Add(schema: System.Xml.Schema.XmlSchema): System.Xml.Schema.XmlSchema; //{ throw new Error("Not implemented.");}
        Add(targetNamespace: string, schema: System.Xml.Schema.XmlSchema): System.Xml.Schema.XmlSchema; //{ throw new Error("Not implemented.");}
        Add(targetNamespace: string, reader: any, validatedNamespaces: System.Collections.Hashtable): any; //{ throw new Error("Not implemented.");}
        AddSchemaToSet(schema: System.Xml.Schema.XmlSchema): any; //{ throw new Error("Not implemented.");}
        AddToTable(table: System.Xml.Schema.XmlSchemaObjectTable, qname: System.Xml.XmlQualifiedName, item: System.Xml.Schema.XmlSchemaObject): boolean; //{ throw new Error("Not implemented.");}
        ClearTables(): any; //{ throw new Error("Not implemented.");}
        Compile(): any; //{ throw new Error("Not implemented.");}
        Contains(targetNamespace: string): boolean; //{ throw new Error("Not implemented.");}
        Contains(schema: System.Xml.Schema.XmlSchema): boolean; //{ throw new Error("Not implemented.");}
        CopyFromCompiledSet(otherSet: System.Xml.Schema.XmlSchemaSet): any; //{ throw new Error("Not implemented.");}
        CopyTo(schemas: any, index: number): any; //{ throw new Error("Not implemented.");}
        FindSchemaByNSAndUrl(schemaUri: System.Uri, ns: string, locationsTable: any): System.Xml.Schema.XmlSchema; //{ throw new Error("Not implemented.");}
        GetEventHandler(): any; //{ throw new Error("Not implemented.");}
        GetResolver(): System.Xml.XmlResolver; //{ throw new Error("Not implemented.");}
        GetSchemaByUri(schemaUri: System.Uri, schema: any): boolean; //{ throw new Error("Not implemented.");}
        GetSchemaNames(nt: System.Xml.XmlNameTable): any; //{ throw new Error("Not implemented.");}
        GetTargetNamespace(schema: System.Xml.Schema.XmlSchema): string; //{ throw new Error("Not implemented.");}
        InternalValidationCallback(sender: any, e: any): any; //{ throw new Error("Not implemented.");}
        IsSchemaLoaded(schemaUri: System.Uri, targetNamespace: string, schema: any): boolean; //{ throw new Error("Not implemented.");}
        ParseSchema(targetNamespace: string, reader: any): System.Xml.Schema.XmlSchema; //{ throw new Error("Not implemented.");}
        PreprocessSchema(schema: any, targetNamespace: string): boolean; //{ throw new Error("Not implemented.");}
        ProcessNewSubstitutionGroups(substitutionGroupsTable: System.Xml.Schema.XmlSchemaObjectTable, resolve: boolean): any; //{ throw new Error("Not implemented.");}
        Remove(schema: System.Xml.Schema.XmlSchema): System.Xml.Schema.XmlSchema; //{ throw new Error("Not implemented.");}
        Remove(schema: System.Xml.Schema.XmlSchema, forceCompile: boolean): System.Xml.Schema.XmlSchema; //{ throw new Error("Not implemented.");}
        RemoveRecursive(schemaToRemove: System.Xml.Schema.XmlSchema): boolean; //{ throw new Error("Not implemented.");}
        RemoveSchemaFromCaches(schema: System.Xml.Schema.XmlSchema): any; //{ throw new Error("Not implemented.");}
        RemoveSchemaFromGlobalTables(schema: System.Xml.Schema.XmlSchema): any; //{ throw new Error("Not implemented.");}
        Reprocess(schema: System.Xml.Schema.XmlSchema): System.Xml.Schema.XmlSchema; //{ throw new Error("Not implemented.");}
        ResolveSubstitutionGroup(substitutionGroup: any, substTable: System.Xml.Schema.XmlSchemaObjectTable): any; //{ throw new Error("Not implemented.");}
        Schemas(): System.Collections.ICollection; //{ throw new Error("Not implemented.");}
        Schemas(targetNamespace: string): System.Collections.ICollection; //{ throw new Error("Not implemented.");}
        SendValidationEvent(e: any, severity: System.Xml.Schema.XmlSeverityType): any; //{ throw new Error("Not implemented.");}
        SetDtdProcessing(reader: any): any; //{ throw new Error("Not implemented.");}
        VerifyTables(): any; //{ throw new Error("Not implemented.");}
    }
    export class XmlSchemaSimpleType extends System.Xml.Schema.XmlSchemaType {
        Content: System.Xml.Schema.XmlSchemaSimpleTypeContent;
        DerivedFrom: System.Xml.XmlQualifiedName;
        private content: System.Xml.Schema.XmlSchemaSimpleTypeContent;
        Clone(): System.Xml.Schema.XmlSchemaObject; //{ throw new Error("Not implemented.");}
    }
    export class XmlSchemaSimpleTypeContent extends System.Xml.Schema.XmlSchemaAnnotated {
    }
    export class XmlSchemaType extends System.Xml.Schema.XmlSchemaAnnotated {
        Name: string;
        Final: System.Xml.Schema.XmlSchemaDerivationMethod;
        QualifiedName: System.Xml.XmlQualifiedName;
        FinalResolved: System.Xml.Schema.XmlSchemaDerivationMethod;
        BaseSchemaType: any;
        BaseXmlSchemaType: System.Xml.Schema.XmlSchemaType;
        DerivedBy: System.Xml.Schema.XmlSchemaDerivationMethod;
        Datatype: System.Xml.Schema.XmlSchemaDatatype;
        IsMixed: boolean;
        TypeCode: System.Xml.Schema.XmlTypeCode;
        ValueConverter: System.Xml.Schema.XmlValueConverter;
        SchemaContentType: System.Xml.Schema.XmlSchemaContentType;
        ElementDecl: System.Xml.Schema.SchemaElementDecl;
        Redefined: System.Xml.Schema.XmlSchemaType;
        DerivedFrom: System.Xml.XmlQualifiedName;
        NameAttribute: string;
        private name: string;
        private final: System.Xml.Schema.XmlSchemaDerivationMethod;
        private derivedBy: System.Xml.Schema.XmlSchemaDerivationMethod;
        private baseSchemaType: System.Xml.Schema.XmlSchemaType;
        private datatype: System.Xml.Schema.XmlSchemaDatatype;
        private finalResolved: System.Xml.Schema.XmlSchemaDerivationMethod;
        private elementDecl: System.Xml.Schema.SchemaElementDecl;
        private qname: System.Xml.XmlQualifiedName;
        private redefined: System.Xml.Schema.XmlSchemaType;
        private contentType: System.Xml.Schema.XmlSchemaContentType;
        GetBuiltInComplexType(typeCode: System.Xml.Schema.XmlTypeCode): any; //{ throw new Error("Not implemented.");}
        GetBuiltInComplexType(qualifiedName: System.Xml.XmlQualifiedName): any; //{ throw new Error("Not implemented.");}
        GetBuiltInSimpleType(qualifiedName: System.Xml.XmlQualifiedName): System.Xml.Schema.XmlSchemaSimpleType; //{ throw new Error("Not implemented.");}
        GetBuiltInSimpleType(typeCode: System.Xml.Schema.XmlTypeCode): System.Xml.Schema.XmlSchemaSimpleType; //{ throw new Error("Not implemented.");}
        IsDerivedFrom(derivedType: System.Xml.Schema.XmlSchemaType, baseType: System.Xml.Schema.XmlSchemaType, except: System.Xml.Schema.XmlSchemaDerivationMethod): boolean; //{ throw new Error("Not implemented.");}
        IsDerivedFromDatatype(derivedDataType: System.Xml.Schema.XmlSchemaDatatype, baseDataType: System.Xml.Schema.XmlSchemaDatatype, except: System.Xml.Schema.XmlSchemaDerivationMethod): boolean; //{ throw new Error("Not implemented.");}
        SetBaseSchemaType(value: System.Xml.Schema.XmlSchemaType): any; //{ throw new Error("Not implemented.");}
        SetContentType(value: System.Xml.Schema.XmlSchemaContentType): any; //{ throw new Error("Not implemented.");}
        SetDatatype(value: System.Xml.Schema.XmlSchemaDatatype): any; //{ throw new Error("Not implemented.");}
        SetDerivedBy(value: System.Xml.Schema.XmlSchemaDerivationMethod): any; //{ throw new Error("Not implemented.");}
        SetFinalResolved(value: System.Xml.Schema.XmlSchemaDerivationMethod): any; //{ throw new Error("Not implemented.");}
        SetQualifiedName(value: System.Xml.XmlQualifiedName): any; //{ throw new Error("Not implemented.");}
        Validate(reader: any, resolver: System.Xml.XmlResolver, schemaSet: System.Xml.Schema.XmlSchemaSet, valEventHandler: any): any; //{ throw new Error("Not implemented.");}
    }
    export class XmlValueConverter {
        ChangeType(value: any, destinationType: System.Type, nsResolver: System.Xml.IXmlNamespaceResolver): any; //{ throw new Error("Not implemented.");}
        ChangeType(value: string, destinationType: System.Type, nsResolver: System.Xml.IXmlNamespaceResolver): any; //{ throw new Error("Not implemented.");}
        ChangeType(value: string, destinationType: System.Type): any; //{ throw new Error("Not implemented.");}
        ChangeType(value: Date, destinationType: System.Type): any; //{ throw new Error("Not implemented.");}
        ChangeType(value: Date, destinationType: System.Type): any; //{ throw new Error("Not implemented.");}
        ChangeType(value: number, destinationType: System.Type): any; //{ throw new Error("Not implemented.");}
        ChangeType(value: number, destinationType: System.Type): any; //{ throw new Error("Not implemented.");}
        ChangeType(value: number, destinationType: System.Type): any; //{ throw new Error("Not implemented.");}
        ChangeType(value: number, destinationType: System.Type): any; //{ throw new Error("Not implemented.");}
        ChangeType(value: number, destinationType: System.Type): any; //{ throw new Error("Not implemented.");}
        ChangeType(value: boolean, destinationType: System.Type): any; //{ throw new Error("Not implemented.");}
        ChangeType(value: any, destinationType: System.Type): any; //{ throw new Error("Not implemented.");}
        ToBoolean(value: boolean): boolean; //{ throw new Error("Not implemented.");}
        ToBoolean(value: any): boolean; //{ throw new Error("Not implemented.");}
        ToBoolean(value: number): boolean; //{ throw new Error("Not implemented.");}
        ToBoolean(value: number): boolean; //{ throw new Error("Not implemented.");}
        ToBoolean(value: number): boolean; //{ throw new Error("Not implemented.");}
        ToBoolean(value: number): boolean; //{ throw new Error("Not implemented.");}
        ToBoolean(value: Date): boolean; //{ throw new Error("Not implemented.");}
        ToBoolean(value: Date): boolean; //{ throw new Error("Not implemented.");}
        ToBoolean(value: string): boolean; //{ throw new Error("Not implemented.");}
        ToBoolean(value: number): boolean; //{ throw new Error("Not implemented.");}
        ToDateTime(value: number): Date; //{ throw new Error("Not implemented.");}
        ToDateTime(value: boolean): Date; //{ throw new Error("Not implemented.");}
        ToDateTime(value: number): Date; //{ throw new Error("Not implemented.");}
        ToDateTime(value: number): Date; //{ throw new Error("Not implemented.");}
        ToDateTime(value: number): Date; //{ throw new Error("Not implemented.");}
        ToDateTime(value: Date): Date; //{ throw new Error("Not implemented.");}
        ToDateTime(value: string): Date; //{ throw new Error("Not implemented.");}
        ToDateTime(value: any): Date; //{ throw new Error("Not implemented.");}
        ToDateTime(value: Date): Date; //{ throw new Error("Not implemented.");}
        ToDateTime(value: number): Date; //{ throw new Error("Not implemented.");}
        ToDateTimeOffset(value: boolean): Date; //{ throw new Error("Not implemented.");}
        ToDateTimeOffset(value: number): Date; //{ throw new Error("Not implemented.");}
        ToDateTimeOffset(value: number): Date; //{ throw new Error("Not implemented.");}
        ToDateTimeOffset(value: number): Date; //{ throw new Error("Not implemented.");}
        ToDateTimeOffset(value: number): Date; //{ throw new Error("Not implemented.");}
        ToDateTimeOffset(value: number): Date; //{ throw new Error("Not implemented.");}
        ToDateTimeOffset(value: Date): Date; //{ throw new Error("Not implemented.");}
        ToDateTimeOffset(value: Date): Date; //{ throw new Error("Not implemented.");}
        ToDateTimeOffset(value: string): Date; //{ throw new Error("Not implemented.");}
        ToDateTimeOffset(value: any): Date; //{ throw new Error("Not implemented.");}
        ToDecimal(value: Date): number; //{ throw new Error("Not implemented.");}
        ToDecimal(value: string): number; //{ throw new Error("Not implemented.");}
        ToDecimal(value: boolean): number; //{ throw new Error("Not implemented.");}
        ToDecimal(value: number): number; //{ throw new Error("Not implemented.");}
        ToDecimal(value: number): number; //{ throw new Error("Not implemented.");}
        ToDecimal(value: number): number; //{ throw new Error("Not implemented.");}
        ToDecimal(value: number): number; //{ throw new Error("Not implemented.");}
        ToDecimal(value: number): number; //{ throw new Error("Not implemented.");}
        ToDecimal(value: Date): number; //{ throw new Error("Not implemented.");}
        ToDecimal(value: any): number; //{ throw new Error("Not implemented.");}
        ToDouble(value: number): number; //{ throw new Error("Not implemented.");}
        ToDouble(value: boolean): number; //{ throw new Error("Not implemented.");}
        ToDouble(value: any): number; //{ throw new Error("Not implemented.");}
        ToDouble(value: string): number; //{ throw new Error("Not implemented.");}
        ToDouble(value: number): number; //{ throw new Error("Not implemented.");}
        ToDouble(value: Date): number; //{ throw new Error("Not implemented.");}
        ToDouble(value: number): number; //{ throw new Error("Not implemented.");}
        ToDouble(value: number): number; //{ throw new Error("Not implemented.");}
        ToDouble(value: number): number; //{ throw new Error("Not implemented.");}
        ToDouble(value: Date): number; //{ throw new Error("Not implemented.");}
        ToInt32(value: number): number; //{ throw new Error("Not implemented.");}
        ToInt32(value: number): number; //{ throw new Error("Not implemented.");}
        ToInt32(value: number): number; //{ throw new Error("Not implemented.");}
        ToInt32(value: number): number; //{ throw new Error("Not implemented.");}
        ToInt32(value: Date): number; //{ throw new Error("Not implemented.");}
        ToInt32(value: Date): number; //{ throw new Error("Not implemented.");}
        ToInt32(value: string): number; //{ throw new Error("Not implemented.");}
        ToInt32(value: any): number; //{ throw new Error("Not implemented.");}
        ToInt32(value: number): number; //{ throw new Error("Not implemented.");}
        ToInt32(value: boolean): number; //{ throw new Error("Not implemented.");}
        ToInt64(value: number): number; //{ throw new Error("Not implemented.");}
        ToInt64(value: boolean): number; //{ throw new Error("Not implemented.");}
        ToInt64(value: number): number; //{ throw new Error("Not implemented.");}
        ToInt64(value: number): number; //{ throw new Error("Not implemented.");}
        ToInt64(value: Date): number; //{ throw new Error("Not implemented.");}
        ToInt64(value: Date): number; //{ throw new Error("Not implemented.");}
        ToInt64(value: string): number; //{ throw new Error("Not implemented.");}
        ToInt64(value: any): number; //{ throw new Error("Not implemented.");}
        ToInt64(value: number): number; //{ throw new Error("Not implemented.");}
        ToInt64(value: number): number; //{ throw new Error("Not implemented.");}
        ToSingle(value: string): number; //{ throw new Error("Not implemented.");}
        ToSingle(value: number): number; //{ throw new Error("Not implemented.");}
        ToSingle(value: boolean): number; //{ throw new Error("Not implemented.");}
        ToSingle(value: number): number; //{ throw new Error("Not implemented.");}
        ToSingle(value: number): number; //{ throw new Error("Not implemented.");}
        ToSingle(value: number): number; //{ throw new Error("Not implemented.");}
        ToSingle(value: number): number; //{ throw new Error("Not implemented.");}
        ToSingle(value: Date): number; //{ throw new Error("Not implemented.");}
        ToSingle(value: Date): number; //{ throw new Error("Not implemented.");}
        ToSingle(value: any): number; //{ throw new Error("Not implemented.");}
        ToString(value: number): string; //{ throw new Error("Not implemented.");}
        ToString(value: boolean): string; //{ throw new Error("Not implemented.");}
        ToString(value: any, nsResolver: System.Xml.IXmlNamespaceResolver): string; //{ throw new Error("Not implemented.");}
        ToString(value: any): string; //{ throw new Error("Not implemented.");}
        ToString(value: string, nsResolver: System.Xml.IXmlNamespaceResolver): string; //{ throw new Error("Not implemented.");}
        ToString(value: string): string; //{ throw new Error("Not implemented.");}
        ToString(value: Date): string; //{ throw new Error("Not implemented.");}
        ToString(value: Date): string; //{ throw new Error("Not implemented.");}
        ToString(value: number): string; //{ throw new Error("Not implemented.");}
        ToString(value: number): string; //{ throw new Error("Not implemented.");}
        ToString(value: number): string; //{ throw new Error("Not implemented.");}
        ToString(value: number): string; //{ throw new Error("Not implemented.");}
    }
}
declare module System.Xml.Schema.NamespaceList {
}
declare module System.Xml.Schema.SchemaAttDef {
}
declare module System.Xml.Schema.SchemaDeclBase {
}
declare module System.Xml.Serialization {
    export class XmlSerializerNamespaces {
        Count: number;
        NamespaceList: System.Collections.ArrayList;
        Namespaces: System.Collections.Hashtable;
        private namespaces: System.Collections.Hashtable;
        Add(prefix: string, ns: string): any; //{ throw new Error("Not implemented.");}
        AddInternal(prefix: string, ns: string): any; //{ throw new Error("Not implemented.");}
        LookupPrefix(ns: string): string; //{ throw new Error("Not implemented.");}
        ToArray(): any; //{ throw new Error("Not implemented.");}
    }
}
declare module System.Xml.XPath {
}
