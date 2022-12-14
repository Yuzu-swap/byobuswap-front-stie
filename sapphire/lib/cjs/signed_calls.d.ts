import { BlockTag, Provider } from '@ethersproject/abstract-provider';
import { Signer as EthersSigner, TypedDataDomain, TypedDataField, TypedDataSigner } from '@ethersproject/abstract-signer';
import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { BytesLike } from '@ethersproject/bytes';
import type { CamelCasedProperties, RequireExactlyOne } from 'type-fest';
import { Cipher, Envelope } from './cipher.js';
export declare type Signer = Pick<EthersSigner, 'getTransactionCount' | 'getChainId'> & TypedDataSigner & {
    provider?: Pick<Provider, 'getBlock'>;
    _checkProvider?: EthersSigner['_checkProvider'];
};
export declare function signedCallEIP712Params(chainId: number): {
    domain: TypedDataDomain;
    types: Record<string, TypedDataField[]>;
};
/**
 * Parameters that define a signed call that shall be
 * CBOR-encoded and sent as the call's `data` field.
 */
export declare class SignedCallDataPack {
    leash: Leash;
    /** A signature over the call and leash as generated by `signCall`. */
    signature: Uint8Array;
    /**
     * An oasis-sdk `Call` without the optional fields.
     *
     * After encryption, `body` would be encryped and this field would contain a
     * `format` field. The runtime would decode the data as a `types::transaction::Call`.
     **/
    data?: Uint8Array | undefined;
    static make<C extends EthCall>(call: C, signer: Signer & TypedDataSigner, overrides?: PrepareSignedCallOverrides): Promise<SignedCallDataPack>;
    private constructor();
    encode(): string;
    /** Encodes the data pack after encrypting the signed call data. */
    encryptEncode(cipher: Cipher): Promise<string>;
    _encode(data?: Envelope | {
        body: Uint8Array;
    }): string;
}
export declare function makeSignableCall(call: EthCall, leash: Leash): SignableEthCall;
export declare type PrepareSignedCallOverrides = Partial<{
    leash: LeashOverrides;
    chainId: number;
}>;
export declare type LeashOverrides = Partial<{
    nonce: number;
    blockRange: number;
} & RequireExactlyOne<{
    block: BlockId;
    blockTag: BlockTag;
}>>;
export declare type EthCall = {
    /** 0x-prefixed hex-encoded address. */
    from: string;
    /** Optional 0x-prefixed hex-encoded address. */
    to?: string;
    value?: BigNumberish;
    gasPrice?: BigNumberish;
    data?: BytesLike;
} & Partial<RequireExactlyOne<{
    gas: number | string;
    gasLimit: BigNumberish;
}>>;
/**
 * The structure passed to eth_signTypedData_v4.
 *
 * `uint256`, `address`, and `bytes` are required to be hex-stringified.
 */
export declare type SignableEthCall = {
    from: string;
    to: string;
    gasLimit?: number;
    gasPrice?: BigNumber;
    value?: BigNumber;
    data?: string;
    leash: CamelCasedProperties<Leash>;
};
export declare type Leash = {
    /** The largest sender account nonce whence the call will be valid. */
    nonce: number;
    /** The block number whence the call will be valid. */
    block_number: number;
    /** The expected block hash to be found at `block_number`. */
    block_hash: Uint8Array;
    /** The number of blocks past the block at `block_number` whence the call will be valid. */
    block_range: number;
};
export declare type BlockId = {
    hash: string;
    number: number;
};
//# sourceMappingURL=signed_calls.d.ts.map