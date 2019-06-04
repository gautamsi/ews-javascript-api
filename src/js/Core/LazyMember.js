"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LazyMember = /** @class */ (function () {
    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="initializationDelegate">The initialization delegate to call for the item on first access
    /// </param>
    function LazyMember(initializationDelegate) {
        this.initialized = false;
        this.initializationDelegate = initializationDelegate;
    }
    Object.defineProperty(LazyMember.prototype, "Member", {
        get: function () {
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
        },
        enumerable: true,
        configurable: true
    });
    return LazyMember;
}());
exports.LazyMember = LazyMember;
