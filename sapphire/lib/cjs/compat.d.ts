import { Signer as AbstractSigner } from '@ethersproject/abstract-signer';
import { JsonRpcProvider, Provider as AbstractProvider } from '@ethersproject/providers';
import { RequireAtLeastOne } from 'type-fest';
import { Cipher } from './cipher.js';
import { Signer as SignedCallSigner } from './signed_calls.js';
export declare type UpstreamProvider = EIP1193Provider | AsyncSendProvider | EthersSigner | EthersProvider | HreProvider;
export declare type EthersProvider = Pick<AbstractProvider, 'sendTransaction' | 'call' | 'estimateGas' | 'getNetwork'>;
export declare type EthersSigner = Pick<AbstractSigner, 'sendTransaction' | 'signTransaction' | 'call' | 'estimateGas' | 'getChainId'> & SignedCallSigner & {
    connect(provider: EthersProvider): EthersSigner;
    provider?: EthersProvider;
};
export declare type EIP1193Provider = {
    request: (args: Web3ReqArgs) => Promise<unknown>;
};
export declare type AsyncSendProvider<Args = Web3ReqArgs> = {
    send?: AsyncSend<Args>;
    sendAsync?: AsyncSend<Args>;
};
export declare type AsyncSend<Args = Web3ReqArgs> = (args: Args, cb: (err: any, ok?: any) => void) => void;
/** As found in `hre.network.provider`. */
export declare type HreProvider = RequireAtLeastOne<EIP1193Provider & {
    sendAsync: AsyncSend<Web3ReqArgs>;
    send: JsonRpcProvider['send'];
}>;
export declare type Web3ReqArgs = {
    readonly jsonrpc?: string;
    readonly id?: string | number;
    readonly method: string;
    readonly params?: any[];
};
export declare type StrictWeb3ReqArgs = {
    readonly jsonrpc: string;
    readonly id: number;
    readonly method: string;
    readonly params: any[];
};
declare const SAPPHIRE_PROP = "sapphire";
export declare type SapphireAnnex = {
    [SAPPHIRE_PROP]: {
        cipher: Cipher;
    };
};
/**
 * Wraps an upstream ethers/web3/EIP-1193 provider to speak the Sapphire format.
 *
 * @param upstream The upstream web3 provider. Try something like one of the following:
 * ```
 * ethers.providers.Web3Provider(window.ethereum)
 * ethers.Wallet(privateKey)
 * ethers.getDefaultProvider(NETWORKS.testnet.defaultGateway)
 * web3.currentProvider
 * window.ethereum
 * a Web3 gateway URL
 * ```
 * @param customCipher An optional cipher to use for encrypting messages. If not provided an encrypting cipher will be chosen. This field is useful for providing a {@link cipher.Plain} cipher or using a custom public key for an encrypting cipher.
 */
export declare function wrap<P extends AsyncSendProvider<StrictWeb3ReqArgs>>(// Web3.js
gatewayUrl: string | P, customCipher?: Cipher): EIP1193Provider & P & SapphireAnnex;
export declare function wrap<U extends UpstreamProvider>(// Ethers, `window.ethereum`
upstream: U, customCipher?: Cipher): U & SapphireAnnex;
export {};
//# sourceMappingURL=compat.d.ts.map