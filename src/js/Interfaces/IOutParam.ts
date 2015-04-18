interface IOutParam<T> {
    outValue?: T;
    exception?: any;
    success?: boolean;
}

export = IOutParam;