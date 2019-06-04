"use strict";
//todo - move to file where class Microsoft.Exchange.WebServices.Dns.PrivilegedUserId is located
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @internal Interactive, charge against a copy of target mailbox budget.
 */
var PrivilegedUserIdBudgetType;
(function (PrivilegedUserIdBudgetType) {
    /**
     * Interactive, charge against a copy of target mailbox budget.
     */
    PrivilegedUserIdBudgetType[PrivilegedUserIdBudgetType["Default"] = 0] = "Default";
    /**
     * Running as background load
     */
    PrivilegedUserIdBudgetType[PrivilegedUserIdBudgetType["RunningAsBackgroundLoad"] = 1] = "RunningAsBackgroundLoad";
    /**
     * Unthrottled budget.
     */
    PrivilegedUserIdBudgetType[PrivilegedUserIdBudgetType["Unthrottled"] = 2] = "Unthrottled";
})(PrivilegedUserIdBudgetType = exports.PrivilegedUserIdBudgetType || (exports.PrivilegedUserIdBudgetType = {}));
