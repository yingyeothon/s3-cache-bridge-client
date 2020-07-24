"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeBodyAsBuffer(body) {
    return typeof body === "string" ? Buffer.from(body, "utf8") : body;
}
exports.default = makeBodyAsBuffer;
//# sourceMappingURL=makeBodyAsPayload.js.map