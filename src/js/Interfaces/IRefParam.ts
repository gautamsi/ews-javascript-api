interface IRefParam<T> {
    getValue: () => T;
    //refGet:()=>T;
    setValue?: (value: T) => void;
}
export = IRefParam;