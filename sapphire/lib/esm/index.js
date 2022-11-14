/** @packageDocumentation
 * The main export of this package is {@link wrap}.
 *
 * The {@link cipher} module contains additional ciphers you may use (most notably {@link cipher.Plain}, which can be used for transparency).
 *
 * The {@link signedCalls} module contains utilities for making signed calls that allow the caller to have their address as `msg.sender` during an `eth_call`.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
export * from './cipher.js';
export * from './compat.js';
export * from './signed_calls.js';
var mainnetParams = {
    chainId: 0x5afe,
    defaultGateway: 'https://sapphire.oasis.dev/',
    runtimeId: '0x0000000000000000000000000000000000000000000000000000000000000000',
};
var testnetParams = {
    chainId: 0x5aff,
    defaultGateway: 'https://testnet.sapphire.oasis.dev/',
    runtimeId: '0x000000000000000000000000000000000000000000000000a6d1e3ebf60dff6c',
};
export var NETWORKS = (_a = {
        mainnet: mainnetParams,
        testnet: testnetParams
    },
    _a[mainnetParams.chainId] = mainnetParams,
    _a[testnetParams.chainId] = testnetParams,
    _a);
var CallError = /** @class */ (function (_super) {
    __extends(CallError, _super);
    function CallError(message, response) {
        var _this = _super.call(this, message) || this;
        _this.response = response;
        return _this;
    }
    return CallError;
}(Error));
export { CallError };
//# sourceMappingURL=index.js.map