"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function buildQueryParams(params) {
    return (`?` +
        Object.entries(params)
            .map(([key, value]) => value === true
            ? `${key}=1`
            : value === false
                ? `${key}=0`
                : `${key}=${encodeURIComponent(value)}`)
            .join("&"));
}
exports.default = buildQueryParams;
//# sourceMappingURL=buildQueryParams.js.map