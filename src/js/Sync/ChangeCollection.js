"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArgumentException_1 = require("../Exceptions/ArgumentException");
var EwsLogging_1 = require("../Core/EwsLogging");
var Strings_1 = require("../Strings");
/**
 * Represents a collection of changes as returned by a synchronization operation.
 *
 * @sealed
 * @typeparam	{TChange}	Type representing the type of change (e.g. FolderChange or ItemChange)
 */
var ChangeCollection = /** @class */ (function () {
    /**
     * @internal Initializes a new instance of the **ChangeCollection<TChange>** class.
     */
    function ChangeCollection() {
        this.___typeGenerics = ["Change"];
        this.changes = [];
        this.syncState = null;
        this.moreChangesAvailable = false;
    }
    Object.defineProperty(ChangeCollection.prototype, "Count", {
        /**
         * Gets the number of changes in the collection.
         */
        get: function () {
            return this.changes.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangeCollection.prototype, "SyncState", {
        /**
         * Gets the SyncState blob returned by a synchronization operation.
         */
        get: function () {
            return this.syncState;
        },
        set: function (value) {
            this.syncState = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangeCollection.prototype, "MoreChangesAvailable", {
        /**
         * Gets a value indicating whether the there are more changes to be synchronized from the server.
         */
        get: function () {
            return this.moreChangesAvailable;
        },
        set: function (value) {
            this.moreChangesAvailable = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets an individual change from the change collection.
     *
     * @param   {number}   index   Zero-based index.
     * @return  {TChange}		An single change.
     */
    ChangeCollection.prototype._getItem = function (index) {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("index", Strings_1.Strings.IndexIsOutOfRange);
        }
        return this.changes[index];
    };
    /**
     * @internal Adds the specified change.
     *
     * @param   {TChange}   change   The change.
     */
    ChangeCollection.prototype.Add = function (change) {
        EwsLogging_1.EwsLogging.Assert(change != null, "ChangeList.Add", "change is null");
        this.changes.push(change);
    };
    /**
     *  Returns an enumerator that iterates through the collection. this case this.changes
     */
    ChangeCollection.prototype.GetEnumerator = function () {
        return this.changes;
    };
    return ChangeCollection;
}());
exports.ChangeCollection = ChangeCollection;
