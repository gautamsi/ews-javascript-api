"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChangeType_1 = require("../Enumerations/ChangeType");
/**
 * Represents a change as returned by a synchronization operation.
 */
var Change = /** @class */ (function () {
    /**
     * @internal Initializes a new instance of **Change** class.
     */
    function Change() {
        /**
         * The type of change.
         */
        this.changeType = ChangeType_1.ChangeType.Create;
        /**
         * The service object the change applies to.
         */
        this.serviceObject = null;
        /**
         * The Id of the service object the change applies to.
         */
        this.id = null;
    }
    Object.defineProperty(Change.prototype, "ChangeType", {
        /**
         * Gets the type of the change.
         */
        get: function () {
            return this.changeType;
        },
        set: function (value) {
            this.changeType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Change.prototype, "ServiceObject", {
        /**
         * @internal Gets or sets the service object the change applies to.
         */
        get: function () {
            return this.serviceObject;
        },
        set: function (value) {
            this.serviceObject = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Change.prototype, "Id", {
        /**
         * @internal Gets or sets the Id of the service object the change applies to.
         */
        get: function () {
            return this.ServiceObject != null ? this.ServiceObject.GetId() : this.id;
        },
        set: function (value) {
            this.id = value;
        },
        enumerable: true,
        configurable: true
    });
    return Change;
}());
exports.Change = Change;
