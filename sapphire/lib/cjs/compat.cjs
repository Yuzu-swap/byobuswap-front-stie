"use strict";
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrap = void 0;
var abstract_signer_1 = require("@ethersproject/abstract-signer");
var bignumber_1 = require("@ethersproject/bignumber");
var bytes_1 = require("@ethersproject/bytes");
var rlp = __importStar(require("@ethersproject/rlp"));
var providers_1 = require("@ethersproject/providers");
var transactions_1 = require("@ethersproject/transactions");
var cbor = __importStar(require("cborg"));
var cipher_js_1 = require("./cipher.cjs");
var index_js_1 = require("./index.cjs");
var signed_calls_js_1 = require("./signed_calls.cjs");
var SAPPHIRE_PROP = 'sapphire';
/** If a gas limit is not provided, the runtime will produce a very confusing error message, so we set a default limit. This one is very high, but solves the problem. This should be lowered once error messages are better or gas estimation is enabled. */
var DEFAULT_GAS = 10000000;
function wrap(upstream, customCipher) {
    // Already wrapped, so don't wrap it again.
    if (typeof upstream !== 'string' &&
        Reflect.get(upstream, SAPPHIRE_PROP) !== undefined) {
        return upstream;
    }
    if (typeof upstream === 'string') {
        var provider = new providers_1.JsonRpcProvider(upstream);
        var cipher_1 = customCipher !== null && customCipher !== void 0 ? customCipher : getCipher(provider);
        var request = hookExternalProvider(provider, cipher_1);
        var sendAsync = callbackify(request);
        return makeProxy(provider, cipher_1, {
            send: sendAsync,
            sendAsync: sendAsync,
            request: request,
        });
    }
    var cipher = customCipher !== null && customCipher !== void 0 ? customCipher : getCipher(upstream);
    if (isEthersSigner(upstream)) {
        var signer_1;
        if (upstream.provider) {
            try {
                signer_1 = upstream.connect(wrapEthersProvider(upstream.provider, cipher, upstream));
            }
            catch (e) {
                if (e.code !== 'UNSUPPORTED_OPERATION')
                    throw e;
                signer_1 = upstream;
            }
        }
        else {
            signer_1 = upstream;
        }
        var hooks = {
            sendTransaction: hookEthersSend(signer_1.sendTransaction.bind(signer_1), cipher),
            signTransaction: hookEthersSend(signer_1.signTransaction.bind(signer_1), cipher),
            call: hookEthersCall(signer_1, 'call', cipher),
            // TODO(#39): replace with original once resolved
            estimateGas: function () { return DEFAULT_GAS; },
            // estimateGas: hookEthersCall(
            //   signer.estimateGas.bind(signer),
            //   cipher,
            //   signer,
            // ),
            connect: function (provider) {
                return wrap(signer_1.connect(provider), cipher);
            },
        };
        return makeProxy(signer_1, cipher, hooks);
    }
    if (isEthersProvider(upstream)) {
        return wrapEthersProvider(upstream, cipher);
    }
    if ('request' in upstream || 'send' in upstream || 'sendAsync' in upstream) {
        var signer = makeWeb3Provider(upstream).getSigner();
        var request_1 = hookExternalSigner(signer, cipher);
        var sendAsync = callbackify(request_1);
        var send = sendAsync;
        if ('send' in upstream && isEthersSend(upstream.send)) {
            // If the provided `send` is an `JsonRpcProvider.send`, we need to provide that instead of the usual `AsyncSend`
            send = (function (method, params) {
                return request_1({ method: method, params: params });
            });
        }
        return makeProxy(upstream, cipher, {
            request: request_1,
            send: send,
            sendAsync: sendAsync,
        });
    }
    throw new TypeError('Unable to wrap unsupported upstream signer.');
}
exports.wrap = wrap;
function isEthersSend(send) {
    if (!send)
        return false;
    // If the function is async, it's likely ethers send.
    try {
        var res = send(); // either rejects or calls back with an error
        if (res instanceof Promise) {
            res.catch(function () { return void {}; }); // handle the rejection before the next tick
            return true;
        }
    }
    catch (_a) {
        // This is prophyalictic. Neither kind of `send` should synchronously throw.
    }
    return false;
}
function getCipher(provider) {
    var _this = this;
    return (0, cipher_js_1.lazy)(function () { return __awaiter(_this, void 0, void 0, function () {
        var keySource, rtPubKey;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inferRuntimePublicKeySource(provider)];
                case 1:
                    keySource = _a.sent();
                    return [4 /*yield*/, (0, cipher_js_1.fetchRuntimePublicKey)(keySource)];
                case 2:
                    rtPubKey = _a.sent();
                    return [2 /*return*/, cipher_js_1.X25519DeoxysII.ephemeral(rtPubKey)];
            }
        });
    }); });
}
function makeProxy(upstream, cipher, hooks) {
    return new Proxy(upstream, {
        get: function (upstream, prop) {
            if (prop === SAPPHIRE_PROP)
                return { cipher: cipher };
            if (prop in hooks)
                return Reflect.get(hooks, prop);
            var value = Reflect.get(upstream, prop);
            return typeof value === 'function' ? value.bind(upstream) : value;
        },
    });
}
function wrapEthersProvider(provider, cipher, signer) {
    var _this = this;
    // Already wrapped, so don't wrap it again.
    if (Reflect.get(provider, SAPPHIRE_PROP) !== undefined) {
        return provider;
    }
    // If a signer is provided it's because this method was invoked by wrapping a signer,
    // so the `call` and `estimateGas` methods are already hooked.
    var hooks = signer
        ? {
            sendTransaction: (function (raw) { return __awaiter(_this, void 0, void 0, function () {
                var repacked, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = repackRawTx;
                            return [4 /*yield*/, raw];
                        case 1: return [4 /*yield*/, _a.apply(void 0, [_b.sent(), cipher, signer])];
                        case 2:
                            repacked = _b.sent();
                            return [2 /*return*/, provider.sendTransaction(repacked)];
                    }
                });
            }); }),
        }
        : {
            // Calls can be unsigned, but must be enveloped.
            call: hookEthersCall(provider, 'call', cipher),
            estimateGas: hookEthersCall(provider, 'estimateGas', cipher),
        };
    return makeProxy(provider, cipher, hooks);
}
function isEthersProvider(upstream) {
    return providers_1.Provider.isProvider(upstream);
}
function isEthersSigner(upstream) {
    return abstract_signer_1.Signer.isSigner(upstream) && '_signTypedData' in upstream;
}
function hookEthersCall(signerOrProvider, method, cipher) {
    var _this = this;
    var sendUnsignedCall = function (provider, callP) { return __awaiter(_this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e;
        var _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    _b = (_a = provider)[method];
                    _c = [__assign({}, callP)];
                    _f = {};
                    _e = (_d = cipher).encryptEncode;
                    return [4 /*yield*/, callP.data];
                case 1: return [2 /*return*/, _b.apply(_a, [__assign.apply(void 0, _c.concat([(_f.data = _e.apply(_d, [_g.sent()]), _f)]))])];
            }
        });
    }); };
    return function (callP, blockTag) { return __awaiter(_this, void 0, void 0, function () {
        var res, signer, dataPack, _a, _b, provider;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!isEthersSigner(signerOrProvider)) return [3 /*break*/, 8];
                    signer = signerOrProvider;
                    return [4 /*yield*/, callNeedsSigning(callP)];
                case 1:
                    if (!_c.sent()) return [3 /*break*/, 5];
                    _b = (_a = signed_calls_js_1.SignedCallDataPack).make;
                    return [4 /*yield*/, undefer(callP)];
                case 2: return [4 /*yield*/, _b.apply(_a, [(_c.sent()) /* callNeedsSigning ensures type */,
                        signer])];
                case 3:
                    dataPack = _c.sent();
                    return [4 /*yield*/, signer[method](__assign(__assign({}, callP), { data: dataPack.encryptEncode(cipher) }), blockTag)];
                case 4:
                    res = _c.sent();
                    return [3 /*break*/, 7];
                case 5:
                    if (signer._checkProvider)
                        signer._checkProvider(method);
                    return [4 /*yield*/, sendUnsignedCall(signer.provider, callP)];
                case 6:
                    res = _c.sent();
                    _c.label = 7;
                case 7: return [3 /*break*/, 10];
                case 8:
                    provider = signerOrProvider;
                    return [4 /*yield*/, sendUnsignedCall(provider, callP)];
                case 9:
                    res = _c.sent();
                    _c.label = 10;
                case 10:
                    if (typeof res === 'string')
                        return [2 /*return*/, cipher.decryptEncoded(res)];
                    return [2 /*return*/, res];
            }
        });
    }); };
}
function hookEthersSend(send, cipher) {
    var _this = this;
    return function (tx) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, tx.data];
                    case 1:
                        data = _a.sent();
                        tx.data = cipher.encryptEncode(data);
                        if (!tx.gasLimit)
                            tx.gasLimit = DEFAULT_GAS;
                        return [2 /*return*/, send.apply(void 0, __spreadArray([tx], rest, false))];
                }
            });
        });
    };
}
function callNeedsSigning(callP) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, from, to;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, Promise.all([callP.from, callP.to])];
                case 1:
                    _a = _b.sent(), from = _a[0], to = _a[1];
                    return [2 /*return*/, to !== undefined && from !== undefined && !/^(0x)?0{40}$/.test(from)];
            }
        });
    });
}
function undefer(obj) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b;
        var _this = this;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _b = (_a = Object).fromEntries;
                    return [4 /*yield*/, Promise.all(Object.entries(obj).map(function (_a) {
                            var k = _a[0], v = _a[1];
                            return __awaiter(_this, void 0, void 0, function () { var _b; return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        _b = [k];
                                        return [4 /*yield*/, v];
                                    case 1: return [2 /*return*/, _b.concat([_c.sent()])];
                                }
                            }); });
                        }))];
                case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
            }
        });
    });
}
function hookExternalSigner(signer, cipher) {
    var _this = this;
    return function (args) { return __awaiter(_this, void 0, void 0, function () {
        var _a, method, params, res;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (args.method === 'eth_estimateGas')
                        return [2 /*return*/, bignumber_1.BigNumber.from(DEFAULT_GAS).toHexString()]; // TODO(#39)
                    return [4 /*yield*/, prepareRequest(args, signer, cipher)];
                case 1:
                    _a = _b.sent(), method = _a.method, params = _a.params;
                    return [4 /*yield*/, signer.provider.send(method, params !== null && params !== void 0 ? params : [])];
                case 2:
                    res = _b.sent();
                    if (method === 'eth_call')
                        return [2 /*return*/, cipher.decryptEncoded(res)];
                    return [2 /*return*/, res];
            }
        });
    }); };
}
function hookExternalProvider(provider, cipher) {
    var _this = this;
    return function (_a) {
        var method = _a.method, params = _a.params;
        return __awaiter(_this, void 0, void 0, function () {
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (method === 'eth_estimateGas')
                            return [2 /*return*/, bignumber_1.BigNumber.from(DEFAULT_GAS).toHexString()]; // TODO(#39)
                        if (!(method === 'eth_call' && params)) return [3 /*break*/, 2];
                        _b = params[0];
                        return [4 /*yield*/, cipher.encryptEncode(params[0].data)];
                    case 1:
                        _b.data = _c.sent();
                        if (!params[0].gasLimit)
                            params[0].gasLimit = DEFAULT_GAS;
                        return [2 /*return*/, provider.send(method, params)];
                    case 2: return [2 /*return*/, provider.send(method, params !== null && params !== void 0 ? params : [])];
                }
            });
        });
    };
}
function callbackify(request) {
    return function (args, cb) {
        request(args)
            .then(function (res) { return cb(null, { jsonrpc: '2.0', id: args.id, result: res }); })
            .catch(function (err) { return cb(err); });
    };
}
function prepareRequest(_a, signer, cipher) {
    var method = _a.method, params = _a.params;
    return __awaiter(this, void 0, void 0, function () {
        var _b, signedCall, _c;
        var _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    if (!Array.isArray(params))
                        return [2 /*return*/, { method: method, params: params }];
                    if (!(method === 'eth_sendRawTransaction')) return [3 /*break*/, 2];
                    _d = {
                        method: method
                    };
                    return [4 /*yield*/, repackRawTx(params[0], cipher, signer)];
                case 1: return [2 /*return*/, (_d.params = [_e.sent()],
                        _d)];
                case 2:
                    _b = (method === 'eth_call' || method === 'eth_estimateGas');
                    if (!_b) return [3 /*break*/, 4];
                    return [4 /*yield*/, callNeedsSigning(params[0])];
                case 3:
                    _b = (_e.sent());
                    _e.label = 4;
                case 4:
                    if (!_b) return [3 /*break*/, 6];
                    return [4 /*yield*/, prepareSignedCall(params[0], signer, cipher)];
                case 5:
                    signedCall = _e.sent();
                    return [2 /*return*/, {
                            method: method,
                            params: __spreadArray([signedCall], params.slice(1), true),
                        }];
                case 6:
                    if (!/^eth_((send|sign)Transaction|call|estimateGas)$/.test(method)) return [3 /*break*/, 8];
                    _c = params[0];
                    return [4 /*yield*/, cipher.encryptEncode(params[0].data)];
                case 7:
                    _c.data = _e.sent();
                    if (!params[0].gasLimit)
                        params[0].gasLimit = DEFAULT_GAS;
                    return [2 /*return*/, { method: method, params: params }];
                case 8: return [2 /*return*/, { method: method, params: params }];
            }
        });
    });
}
function prepareSignedCall(call, signer, cipher) {
    return __awaiter(this, void 0, void 0, function () {
        var dataPack, _a;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, signed_calls_js_1.SignedCallDataPack.make(call, signer)];
                case 1:
                    dataPack = _c.sent();
                    _a = [__assign({}, call)];
                    _b = {};
                    return [4 /*yield*/, dataPack.encryptEncode(cipher)];
                case 2: return [2 /*return*/, __assign.apply(void 0, _a.concat([(_b.data = _c.sent(), _b)]))];
            }
        });
    });
}
var REPACK_ERROR = 'Un-enveloped data was passed to sendRawTransaction, which is likely incorrect. Is the dapp using the Sapphire compat lib correctly?';
/** Repacks and signs a sendRawTransaction if needed and possible. */
function repackRawTx(raw, cipher, signer) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var DATA_FIELD, txFields, data, _c, format, body, extra, _d, r, s, v, hash, type, parsed, _e, _f, _g, e_1;
        var _h;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0:
                    DATA_FIELD = 5;
                    txFields = rlp.decode(raw);
                    data = (0, bytes_1.arrayify)(txFields[DATA_FIELD], { allowMissingPrefix: true });
                    try {
                        _c = cbor.decode(data), format = _c.format, body = _c.body, extra = __rest(_c, ["format", "body"]);
                        if (envelopeFormatOk(format, body, extra))
                            return [2 /*return*/, raw];
                        throw new EnvelopeError('Bogus enveloped data found in sendRawTransaction.');
                    }
                    catch (e) {
                        if (e instanceof EnvelopeError)
                            throw e;
                        if (((_b = (_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.process) === null || _a === void 0 ? void 0 : _a.env) === null || _b === void 0 ? void 0 : _b.NODE_ENV) !== 'test') {
                            console.trace(REPACK_ERROR);
                        }
                    }
                    _d = (0, transactions_1.parse)(raw), r = _d.r, s = _d.s, v = _d.v, hash = _d.hash, type = _d.type, parsed = __rest(_d, ["r", "s", "v", "hash", "type"]);
                    if (!signer)
                        throw new index_js_1.CallError(REPACK_ERROR, null);
                    if (!parsed.gasLimit)
                        parsed.gasLimit = bignumber_1.BigNumber.from(DEFAULT_GAS); // TODO(39)
                    _j.label = 1;
                case 1:
                    _j.trys.push([1, 3, , 4]);
                    _f = (_e = signer).signTransaction;
                    _g = [__assign({}, parsed)];
                    _h = {};
                    return [4 /*yield*/, cipher.encryptEncode(data)];
                case 2: return [2 /*return*/, _f.apply(_e, [__assign.apply(void 0, _g.concat([(_h.data = _j.sent(), _h)]))])];
                case 3:
                    e_1 = _j.sent();
                    throw new index_js_1.CallError(REPACK_ERROR, e_1);
                case 4: return [2 /*return*/];
            }
        });
    });
}
function envelopeFormatOk(format, body, extra) {
    if (Object.keys(extra).length > 0)
        return false;
    if (!body)
        return false;
    if (format && format !== cipher_js_1.Kind.Plain) {
        if ((0, bytes_1.isBytesLike)(body) || !(0, bytes_1.isBytesLike)(body.data))
            return false;
    }
    return true;
}
var EnvelopeError = /** @class */ (function (_super) {
    __extends(EnvelopeError, _super);
    function EnvelopeError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EnvelopeError;
}(Error));
/**
 * Picks the most user-trusted runtime calldata public key source based on what
 * connections are available.
 * Note: MetaMask does not support Web3 methods it doesn't know about, so we have to
 * fall back to manually querying the default gateway.
 */
function inferRuntimePublicKeySource(upstream) {
    return __awaiter(this, void 0, void 0, function () {
        var isSigner, _a;
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    isSigner = isEthersSigner(upstream);
                    if (!(isSigner || isEthersProvider(upstream))) return [3 /*break*/, 5];
                    _b = {};
                    if (!isSigner) return [3 /*break*/, 2];
                    return [4 /*yield*/, upstream.getChainId()];
                case 1:
                    _a = _d.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, upstream.getNetwork()];
                case 3:
                    _a = (_d.sent()).chainId;
                    _d.label = 4;
                case 4: return [2 /*return*/, (_b.chainId = _a,
                        _b)];
                case 5:
                    _c = {};
                    return [4 /*yield*/, makeWeb3Provider(upstream).getNetwork()];
                case 6: return [2 /*return*/, (_c.chainId = (_d.sent()).chainId,
                        _c)];
            }
        });
    });
}
function makeWeb3Provider(upstream) {
    var provider;
    if ('send' in upstream && isEthersSend(upstream.send)) {
        provider = {
            request: function (_a) {
                var method = _a.method, params = _a.params;
                return upstream.send(method, params !== null && params !== void 0 ? params : []);
            },
        };
    }
    else {
        provider = upstream;
    }
    return new providers_1.Web3Provider(provider);
}
//# sourceMappingURL=compat.js.map