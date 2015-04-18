class LazyMember<T> {
    get Member(): T {
        if (!this.initialized) {
            //lock(this.lockObject)
            //{
            if (!this.initialized) {
                this.lazyMember = this.initializationDelegate();
            }
            this.initialized = true;
            //}
        }
        return this.lazyMember;
    }
    private lazyMember: T;
    private initializationDelegate: InitializeLazyMember<T>;//() => T;
    private lockObject: any;
    private initialized: boolean = false;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="initializationDelegate">The initialization delegate to call for the item on first access
    /// </param>
    constructor(initializationDelegate: InitializeLazyMember<T>) {
        this.initializationDelegate = initializationDelegate;
    }
}

export = LazyMember;

interface InitializeLazyMember<T> {
    (): T;

    //export class InitializeLazyMember<T> extends System.MulticastDelegate {
    //    BeginInvoke(callback: System.AsyncCallback, object: any): System.IAsyncResult{ throw new Error("Not implemented.");}
    //    EndInvoke(result: System.IAsyncResult): T{ throw new Error("Not implemented.");}
    //    Invoke(): T{ throw new Error("Not implemented.");}
    //}
}
