"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSignableCall = exports.SignedCallDataPack = exports.signedCallEIP712Params = void 0;
var bignumber_1 = require("@ethersproject/bignumber");
var bytes_1 = require("@ethersproject/bytes");
var cbor = __importStar(require("cborg"));
var DEFAULT_GAS_PRICE = 1; // Default gas params are assigned in the web3 gateway.
var DEFAULT_GAS_LIMIT = 30000000;
var DEFAULT_VALUE = 0;
var DEFAULT_DATA = '0x';
var zeroAddress = function () { return "0x".concat('0'.repeat(40)); };
function signedCallEIP712Params(chainId) {
    return {
        domain: {
            name: 'oasis-runtime-sdk/evm: signed query',
            version: '1.0.0',
            chainId: chainId,
        },
        types: {
            Call: [
                { name: 'from', type: 'address' },
                { name: 'to', type: 'address' },
                { name: 'gasLimit', type: 'uint64' },
                { name: 'gasPrice', type: 'uint256' },
                { name: 'value', type: 'uint256' },
                { name: 'data', type: 'bytes' },
                { name: 'leash', type: 'Leash' },
            ],
            Leash: [
                { name: 'nonce', type: 'uint64' },
                { name: 'blockNumber', type: 'uint64' },
                { name: 'blockHash', type: 'bytes32' },
                { name: 'blockRange', type: 'uint64' },
            ],
        },
    };
}
exports.signedCallEIP712Params = signedCallEIP712Params;
/**
 * Parameters that define a signed call that shall be
 * CBOR-encoded and sent as the call's `data` field.
 */
var SignedCallDataPack = /** @class */ (function () {
    function SignedCallDataPack(leash, 
    /** A signature over the call and leash as generated by `signCall`. */
    signature, 
    /**
     * An oasis-sdk `Call` without the optional fields.
     *
     * After encryption, `body` would be encryped and this field would contain a
     * `format` field. The runtime would decode the data as a `types::transaction::Call`.
     **/
    data) {
        this.leash = leash;
        this.signature = signature;
        this.data = data;
    }
    SignedCallDataPack.make = function (call, signer, overrides) {
        return __awaiter(this, void 0, void 0, function () {
            var leash, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, makeLeash(signer, overrides === null || overrides === void 0 ? void 0 : overrides.leash)];
                    case 1:
                        leash = _c.sent();
                        _a = SignedCallDataPack.bind;
                        _b = [void 0, leash];
                        return [4 /*yield*/, signCall(makeSignableCall(call, leash), signer, {
                                chainId: overrides === null || overrides === void 0 ? void 0 : overrides.chainId,
                            })];
                    case 2: return [2 /*return*/, new (_a.apply(SignedCallDataPack, _b.concat([_c.sent(), call.data ? (0, bytes_1.arrayify)(call.data, { allowMissingPrefix: true }) : undefined])))()];
                }
            });
        });
    };
    SignedCallDataPack.prototype.encode = function () {
        return this._encode(this.data ? { body: this.data } : undefined);
    };
    /** Encodes the data pack after encrypting the signed call data. */
    SignedCallDataPack.prototype.encryptEncode = function (cipher) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.data) return [3 /*break*/, 2];
                        _a = this._encode;
                        return [4 /*yield*/, cipher.encryptEnvelope(this.data)];
                    case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                    case 2: return [2 /*return*/, this.encode()];
                }
            });
        });
    };
    SignedCallDataPack.prototype._encode = function (data) {
        return (0, bytes_1.hexlify)(cbor.encode({
            data: data ? data : undefined,
            leash: this.leash,
            signature: this.signature,
        }));
    };
    return SignedCallDataPack;
}());
exports.SignedCallDataPack = SignedCallDataPack;
function makeLeash(signer, overrides) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var nonceP, blockP, latestBlock, _b, nonce, block;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    nonceP = (overrides === null || overrides === void 0 ? void 0 : overrides.nonce)
                        ? overrides.nonce
                        : signer.getTransactionCount('pending');
                    if (!((overrides === null || overrides === void 0 ? void 0 : overrides.block) !== undefined)) return [3 /*break*/, 1];
                    blockP = overrides.block;
                    return [3 /*break*/, 3];
                case 1:
                    if (signer._checkProvider)
                        signer._checkProvider('getBlock');
                    return [4 /*yield*/, signer.provider.getBlock('latest')];
                case 2:
                    latestBlock = _c.sent();
                    blockP = signer.provider.getBlock(latestBlock.number - 1); // The latest block is not historical.
                    _c.label = 3;
                case 3: return [4 /*yield*/, Promise.all([nonceP, blockP])];
                case 4:
                    _b = _c.sent(), nonce = _b[0], block = _b[1];
                    return [2 /*return*/, {
                            nonce: nonce,
                            block_number: block.number,
                            block_hash: (0, bytes_1.arrayify)(block.hash),
                            block_range: (_a = overrides === null || overrides === void 0 ? void 0 : overrides.blockRange) !== null && _a !== void 0 ? _a : 15 /* ~90s */,
                        }];
            }
        });
    });
}
function makeSignableCall(call, leash) {
    var _a, _b, _c, _d, _e;
    return {
        from: call.from,
        to: (_a = call.to) !== null && _a !== void 0 ? _a : zeroAddress(),
        gasLimit: bignumber_1.BigNumber.from((_c = (_b = call.gas) !== null && _b !== void 0 ? _b : call.gasLimit) !== null && _c !== void 0 ? _c : DEFAULT_GAS_LIMIT).toNumber(),
        gasPrice: bignumber_1.BigNumber.from((_d = call.gasPrice) !== null && _d !== void 0 ? _d : DEFAULT_GAS_PRICE),
        value: bignumber_1.BigNumber.from((_e = call.value) !== null && _e !== void 0 ? _e : DEFAULT_VALUE),
        data: call.data
            ? (0, bytes_1.hexlify)(call.data, { allowMissingPrefix: true })
            : DEFAULT_DATA,
        leash: {
            nonce: leash.nonce,
            blockNumber: leash.block_number,
            blockHash: leash.block_hash,
            blockRange: leash.block_range,
        },
    };
}
exports.makeSignableCall = makeSignableCall;
function signCall(call, signer, overrides) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var chainId, _b, _c, domain, types, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    if (!((_a = overrides === null || overrides === void 0 ? void 0 : overrides.chainId) !== null && _a !== void 0)) return [3 /*break*/, 1];
                    _b = _a;
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, signer.getChainId()];
                case 2:
                    _b = (_e.sent());
                    _e.label = 3;
                case 3:
                    chainId = _b;
                    _c = signedCallEIP712Params(chainId), domain = _c.domain, types = _c.types;
                    _d = bytes_1.arrayify;
                    return [4 /*yield*/, signer._signTypedData(domain, types, call)];
                case 4: return [2 /*return*/, _d.apply(void 0, [_e.sent()])];
            }
        });
    });
}
//# sourceMappingURL=signed_calls.js.map