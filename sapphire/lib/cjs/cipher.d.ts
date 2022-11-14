import { BytesLike } from '@ethersproject/bytes';
import { BoxKeyPair } from 'tweetnacl';
import { Promisable } from 'type-fest';
export declare enum Kind {
    Plain = 0,
    X25519DeoxysII = 1,
    Mock
}
export declare type Envelope = {
    format?: Kind;
    body: Uint8Array | {
        pk: Uint8Array;
        nonce: Uint8Array;
        data: Uint8Array;
    };
};
export declare type CallResult = {
    ok?: string | Uint8Array;
    fail?: CallFailure;
    unknown?: {
        nonce: Uint8Array;
        data: Uint8Array;
    };
};
export declare type CallFailure = {
    module: string;
    code: number;
    message?: string;
};
export declare abstract class Cipher {
    abstract kind: Promisable<Kind>;
    abstract publicKey: Promisable<Uint8Array>;
    abstract encrypt(plaintext: Uint8Array): Promise<{
        ciphertext: Uint8Array;
        nonce: Uint8Array;
    }>;
    abstract decrypt(nonce: Uint8Array, ciphertext: Uint8Array): Promise<Uint8Array>;
    /** Encrypts the plaintext and encodes it for sending. */
    encryptEncode(plaintext?: BytesLike): Promise<string>;
    /** Encrypts the plaintext and formats it into an envelope. */
    encryptEnvelope(plaintext?: BytesLike): Promise<Envelope | undefined>;
    protected encryptCallData(plaintext: Uint8Array): Promise<{
        data: Uint8Array;
        nonce: Uint8Array;
    }>;
    /** Decrypts the data contained within a hex-encoded serialized envelope. */
    decryptEncoded(callResult: BytesLike): Promise<string>;
    /** Decrypts the data contained within a result envelope. */
    decryptCallResult(res: CallResult): Promise<Uint8Array>;
}
/**
 * A {@link Cipher} that does not encrypt data.
 *
 * This cipher is useful for debugging and sending messages that
 * you would prefer everyone to be able to see (e.g., for auditing purposes).
 */
export declare class Plain extends Cipher {
    readonly kind: Kind;
    readonly publicKey: Uint8Array;
    encrypt(plaintext: Uint8Array): Promise<{
        ciphertext: Uint8Array;
        nonce: Uint8Array;
    }>;
    decrypt(_nonce: Uint8Array, ciphertext: Uint8Array): Promise<Uint8Array>;
    encryptCallData(plaintext: Uint8Array): Promise<{
        data: Uint8Array;
        nonce: Uint8Array;
    }>;
}
/**
 * A {@link Cipher} that derives a shared secret using X25519 and then uses DeoxysII for encrypting using that secret.
 *
 * This is the default cipher.
 */
export declare class X25519DeoxysII extends Cipher {
    readonly kind: Kind;
    readonly publicKey: Uint8Array;
    private cipher;
    private key;
    /** Creates a new cipher using an ephemeral keypair stored in memory. */
    static ephemeral(peerPublicKey: BytesLike): X25519DeoxysII;
    static fromSecretKey(secretKey: BytesLike, peerPublicKey: BytesLike): X25519DeoxysII;
    constructor(keypair: BoxKeyPair, peerPublicKey: Uint8Array);
    encrypt(plaintext: Uint8Array): Promise<{
        ciphertext: Uint8Array;
        nonce: Uint8Array;
    }>;
    decrypt(nonce: Uint8Array, ciphertext: Uint8Array): Promise<Uint8Array>;
}
/** A cipher that pretends to be an encrypting cipher. Used for tests. */
export declare class Mock extends Cipher {
    readonly kind: Kind;
    readonly publicKey: Uint8Array;
    static readonly NONCE: Uint8Array;
    encrypt(plaintext: Uint8Array): Promise<{
        ciphertext: Uint8Array;
        nonce: Uint8Array;
    }>;
    decrypt(nonce: Uint8Array, ciphertext: Uint8Array): Promise<Uint8Array>;
}
/**
 * A Cipher that constructs itself only when needed.
 * Useful for deferring async construction (e.g., fetching public keys) until in an async context.
 *
 * @param generator A function that yields the cipher implementation. This function must be multiply callable and without observable side effects (c.f. Rust's `impl Fn()`).
 */
export declare function lazy(generator: () => Promisable<Cipher>): Cipher;
export declare function fetchRuntimePublicKey(source: {
    gatewayUrl: string;
} | {
    chainId: number;
} | {
    send: (method: string, params: any[]) => Promise<any>;
}, opts?: {
    fetch?: typeof fetch;
}): Promise<Uint8Array>;
//# sourceMappingURL=cipher.d.ts.map