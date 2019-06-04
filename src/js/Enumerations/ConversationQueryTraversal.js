"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the folder traversal depth in queries.
 */
var ConversationQueryTraversal;
(function (ConversationQueryTraversal) {
    /**
     * Shallow traversal
     */
    ConversationQueryTraversal[ConversationQueryTraversal["Shallow"] = 0] = "Shallow";
    /**
     * Deep traversal
     */
    ConversationQueryTraversal[ConversationQueryTraversal["Deep"] = 1] = "Deep";
})(ConversationQueryTraversal = exports.ConversationQueryTraversal || (exports.ConversationQueryTraversal = {}));
var ExchangeVersion_1 = require("./ExchangeVersion");
(function (ConversationQueryTraversal) {
    /**RequiredServerVersionAttribute */
    function RequiredServerVersion(value) {
        if (value <= 1) //<= ConversationQueryTraversal.Deep
            return ExchangeVersion_1.ExchangeVersion.Exchange2013;
        return ExchangeVersion_1.ExchangeVersion.Exchange_Version_Not_Updated;
    }
    ConversationQueryTraversal.RequiredServerVersion = RequiredServerVersion;
})(ConversationQueryTraversal = exports.ConversationQueryTraversal || (exports.ConversationQueryTraversal = {}));
