/** @packageDocumentation
 * The main export of this package is {@link wrap}.
 *
 * The {@link cipher} module contains additional ciphers you may use (most notably {@link cipher.Plain}, which can be used for transparency).
 *
 * The {@link signedCalls} module contains utilities for making signed calls that allow the caller to have their address as `msg.sender` during an `eth_call`.
 */
export * from './cipher.js';
export * from './compat.js';
export * from './signed_calls.js';
export declare const NETWORKS: {
    [x: number]: {
        chainId: number;
        defaultGateway: string;
        runtimeId: string;
    };
    mainnet: {
        chainId: number;
        defaultGateway: string;
        runtimeId: string;
    };
    testnet: {
        chainId: number;
        defaultGateway: string;
        runtimeId: string;
    };
};
export declare class CallError extends Error {
    response: unknown;
    constructor(message: string, response: unknown);
}
//# sourceMappingURL=index.d.ts.map