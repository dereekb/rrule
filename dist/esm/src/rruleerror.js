var RRuleError = /** @class */ (function () {
    function RRuleError() {
    }
    RRuleError.logLuxonTzidError = function (e) {
        if (this.emitLuxonTzidError) {
            console.error('Using TZID without Luxon available is unsupported. Returned times are in UTC, not the requested time zone');
        }
    };
    RRuleError.emitLuxonTzidError = true;
    return RRuleError;
}());
export default RRuleError;
//# sourceMappingURL=rruleerror.js.map