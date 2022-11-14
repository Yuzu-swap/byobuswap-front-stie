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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchRuntimePublicKey = exports.lazy = exports.Mock = exports.X25519DeoxysII = exports.Plain = exports.Cipher = exports.Kind = void 0;
var bytes_1 = require("@ethersproject/bytes");
var cbor = __importStar(require("cborg"));
// @ts-expect-error missing declaration
var deoxysii_1 = __importDefault(require("deoxysii"));
var js_sha512_1 = require("js-sha512");
var tweetnacl_1 = __importDefault(require("tweetnacl"));
var index_js_1 = require("./index.cjs");
var Kind;
(function (Kind) {
    Kind[Kind["Plain"] = 0] = "Plain";
    Kind[Kind["X25519DeoxysII"] = 1] = "X25519DeoxysII";
    Kind[Kind["Mock"] = Number.MAX_SAFE_INTEGER] = "Mock";
})(Kind = exports.Kind || (exports.Kind = {}));
var Cipher = /** @class */ (function () {
    function Cipher() {
    }
    /** Encrypts the plaintext and encodes it for sending. */
    Cipher.prototype.encryptEncode = function (plaintext) {
        return __awaiter(this, void 0, void 0, function () {
            var envelope;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.encryptEnvelope(plaintext)];
                    case 1:
                        envelope = _a.sent();
                        return [2 /*return*/, envelope ? (0, bytes_1.hexlify)(cbor.encode(envelope)) : ''];
                }
            });
        });
    };
    /** Encrypts the plaintext and formats it into an envelope. */
    Cipher.prototype.encryptEnvelope = function (plaintext) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, nonce, _b, format, pk, body;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (plaintext === undefined)
                            return [2 /*return*/];
                        if (!(0, bytes_1.isBytesLike)(plaintext)) {
                            throw new Error('Attempted to sign tx having non-byteslike data.');
                        }
                        if (plaintext.length === 0)
                            return [2 /*return*/]; // Txs without data are just balance transfers, and all data in those is public.
                        return [4 /*yield*/, this.encryptCallData((0, bytes_1.arrayify)(plaintext))];
                    case 1:
                        _a = _c.sent(), data = _a.data, nonce = _a.nonce;
                        return [4 /*yield*/, Promise.all([this.kind, this.publicKey])];
                    case 2:
                        _b = _c.sent(), format = _b[0], pk = _b[1];
                        body = pk.length && nonce.length ? { pk: pk, nonce: nonce, data: data } : data;
                        if (format === Kind.Plain)
                            return [2 /*return*/, { body: body }];
                        return [2 /*return*/, { format: format, body: body }];
                }
            });
        });
    };
    Cipher.prototype.encryptCallData = function (plaintext) {
        return __awaiter(this, void 0, void 0, function () {
            var body, _a, data, nonce;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        body = cbor.encode({ body: plaintext });
                        return [4 /*yield*/, this.encrypt(body)];
                    case 1:
                        _a = _b.sent(), data = _a.ciphertext, nonce = _a.nonce;
                        return [2 /*return*/, { data: data, nonce: nonce }];
                }
            });
        });
    };
    /** Decrypts the data contained within a hex-encoded serialized envelope. */
    Cipher.prototype.decryptEncoded = function (callResult) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = bytes_1.hexlify;
                        return [4 /*yield*/, this.decryptCallResult(cbor.decode((0, bytes_1.arrayify)(callResult)))];
                    case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                }
            });
        });
    };
    /** Decrypts the data contained within a result envelope. */
    Cipher.prototype.decryptCallResult = function (res) {
        return __awaiter(this, void 0, void 0, function () {
            function formatFailure(fail) {
                if (fail.message)
                    return fail.message;
                return "Call failed in module '".concat(fail.module, "' with code '").concat(fail.code, "'");
            }
            var inner, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (res.ok)
                            return [2 /*return*/, (0, bytes_1.arrayify)(res.ok)];
                        if (res.fail)
                            throw new index_js_1.CallError(formatFailure(res.fail), fail);
                        if (!res.unknown) return [3 /*break*/, 2];
                        _b = (_a = cbor).decode;
                        return [4 /*yield*/, this.decrypt(res.unknown.nonce, res.unknown.data)];
                    case 1:
                        inner = _b.apply(_a, [_c.sent()]);
                        if (inner.ok)
                            return [2 /*return*/, (0, bytes_1.arrayify)(inner.ok)];
                        if (inner.fail)
                            throw new index_js_1.CallError(formatFailure(inner.fail), inner.fail);
                        throw new index_js_1.CallError("Unexpected inner call result: ".concat(JSON.stringify(inner)), inner);
                    case 2: throw new index_js_1.CallError("Unexpected call result: ".concat(JSON.stringify(res)), res);
                }
            });
        });
    };
    return Cipher;
}());
exports.Cipher = Cipher;
/**
 * A {@link Cipher} that does not encrypt data.
 *
 * This cipher is useful for debugging and sending messages that
 * you would prefer everyone to be able to see (e.g., for auditing purposes).
 */
var Plain = /** @class */ (function (_super) {
    __extends(Plain, _super);
    function Plain() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = Kind.Plain;
        _this.publicKey = new Uint8Array();
        return _this;
    }
    Plain.prototype.encrypt = function (plaintext) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { ciphertext: plaintext, nonce: new Uint8Array() }];
            });
        });
    };
    Plain.prototype.decrypt = function (_nonce, ciphertext) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ciphertext];
            });
        });
    };
    Plain.prototype.encryptCallData = function (plaintext) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { data: plaintext, nonce: new Uint8Array() }];
            });
        });
    };
    return Plain;
}(Cipher));
exports.Plain = Plain;
/**
 * A {@link Cipher} that derives a shared secret using X25519 and then uses DeoxysII for encrypting using that secret.
 *
 * This is the default cipher.
 */
var X25519DeoxysII = /** @class */ (function (_super) {
    __extends(X25519DeoxysII, _super);
    function X25519DeoxysII(keypair, peerPublicKey) {
        var _this = _super.call(this) || this;
        _this.kind = Kind.X25519DeoxysII;
        _this.publicKey = keypair.publicKey;
        // Derive a shared secret using X25519 (followed by hashing to remove ECDH bias).
        var keyBytes = js_sha512_1.sha512_256.hmac
            .create('MRAE_Box_Deoxys-II-256-128')
            .update(tweetnacl_1.default.scalarMult(keypair.secretKey, peerPublicKey))
            .arrayBuffer();
        _this.key = new Uint8Array(keyBytes);
        _this.cipher = new deoxysii_1.default.AEAD(new Uint8Array(_this.key)); // deoxysii owns the input
        return _this;
    }
    /** Creates a new cipher using an ephemeral keypair stored in memory. */
    X25519DeoxysII.ephemeral = function (peerPublicKey) {
        var keypair = tweetnacl_1.default.box.keyPair();
        return new X25519DeoxysII(keypair, (0, bytes_1.arrayify)(peerPublicKey, { allowMissingPrefix: true }));
    };
    X25519DeoxysII.fromSecretKey = function (secretKey, peerPublicKey) {
        var keypair = tweetnacl_1.default.box.keyPair.fromSecretKey((0, bytes_1.arrayify)(secretKey));
        return new X25519DeoxysII(keypair, (0, bytes_1.arrayify)(peerPublicKey));
    };
    X25519DeoxysII.prototype.encrypt = function (plaintext) {
        return __awaiter(this, void 0, void 0, function () {
            var nonce, ciphertext;
            return __generator(this, function (_a) {
                nonce = tweetnacl_1.default.randomBytes(deoxysii_1.default.NonceSize);
                ciphertext = this.cipher.encrypt(nonce, plaintext);
                return [2 /*return*/, { nonce: nonce, ciphertext: ciphertext }];
            });
        });
    };
    X25519DeoxysII.prototype.decrypt = function (nonce, ciphertext) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.cipher.decrypt(nonce, ciphertext)];
            });
        });
    };
    return X25519DeoxysII;
}(Cipher));
exports.X25519DeoxysII = X25519DeoxysII;
/** A cipher that pretends to be an encrypting cipher. Used for tests. */
var Mock = /** @class */ (function (_super) {
    __extends(Mock, _super);
    function Mock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = Kind.Mock;
        _this.publicKey = new Uint8Array([1, 2, 3]);
        return _this;
    }
    Mock.prototype.encrypt = function (plaintext) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nonce: Mock.NONCE, ciphertext: plaintext }];
            });
        });
    };
    Mock.prototype.decrypt = function (nonce, ciphertext) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if ((0, bytes_1.hexlify)(nonce) !== (0, bytes_1.hexlify)(Mock.NONCE))
                    throw new Error('incorrect nonce');
                return [2 /*return*/, ciphertext];
            });
        });
    };
    Mock.NONCE = new Uint8Array([10, 20, 30, 40]);
    return Mock;
}(Cipher));
exports.Mock = Mock;
/**
 * A Cipher that constructs itself only when needed.
 * Useful for deferring async construction (e.g., fetching public keys) until in an async context.
 *
 * @param generator A function that yields the cipher implementation. This function must be multiply callable and without observable side effects (c.f. Rust's `impl Fn()`).
 */
function lazy(generator) {
    // Note: in cases when `generate` is run concurrently, the first fulfillment will be used.
    return new Proxy({}, {
        get: function (target, prop) {
            var _this = this;
            // Props (Promiseable)
            if (prop === 'kind' || prop === 'publicKey') {
                if (!target.inner)
                    target.inner = Promise.resolve(generator());
                return target.inner.then(function (c) { return Reflect.get(c, prop); });
            }
            // Funcs (async)
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        if (!target.inner)
                            target.inner = Promise.resolve(generator());
                        return [2 /*return*/, target.inner.then(function (c) { return Reflect.get(c, prop).apply(c, args); })];
                    });
                });
            };
        },
    });
}
exports.lazy = lazy;
var OASIS_CALL_DATA_PUBLIC_KEY = 'oasis_callDataPublicKey';
function fetchRuntimePublicKey(source, opts) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var key, gatewayUrl, chainId, fetchImpl, res;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!('send' in source)) return [3 /*break*/, 2];
                    return [4 /*yield*/, source.send(OASIS_CALL_DATA_PUBLIC_KEY, [])];
                case 1:
                    key = (_b.sent()).key;
                    return [2 /*return*/, (0, bytes_1.arrayify)(key)];
                case 2:
                    if ('gatewayUrl' in source) {
                        gatewayUrl = source.gatewayUrl;
                    }
                    else {
                        chainId = source.chainId;
                        (gatewayUrl = index_js_1.NETWORKS[chainId].defaultGateway);
                        if (!gatewayUrl)
                            throw new Error("Unable to fetch runtime public key for network with unknown ID: ".concat(chainId, "."));
                    }
                    fetchImpl = (_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.fetch) !== null && _a !== void 0 ? _a : opts === null || opts === void 0 ? void 0 : opts.fetch;
                    return [4 /*yield*/, (fetchImpl
                            ? fetchRuntimePublicKeyBrowser(gatewayUrl, fetchImpl)
                            : fetchRuntimePublicKeyNode(gatewayUrl))];
                case 3:
                    res = _b.sent();
                    return [2 /*return*/, (0, bytes_1.arrayify)(res.result.key)];
            }
        });
    });
}
exports.fetchRuntimePublicKey = fetchRuntimePublicKey;
function fetchRuntimePublicKeyNode(gwUrl) {
    return __awaiter(this, void 0, void 0, function () {
        var https, body;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require(/* webpackIgnore: true */ 'https')); })];
                case 1:
                    https = _a.sent();
                    body = makeCallDataPublicKeyBody();
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var opts = {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json',
                                    'content-length': body.length,
                                },
                            };
                            var req = https.request(gwUrl, opts, function (res) {
                                var chunks = [];
                                res.on('error', function (err) { return reject(err); });
                                res.on('data', function (chunk) { return chunks.push(chunk); });
                                res.on('end', function () {
                                    resolve(JSON.parse(Buffer.concat(chunks).toString()));
                                });
                            });
                            req.on('error', function (err) { return reject(err); });
                            req.write(body);
                            req.end();
                        })];
            }
        });
    });
}
function fetchRuntimePublicKeyBrowser(gwUrl, fetchImpl) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchImpl(gwUrl, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: makeCallDataPublicKeyBody(),
                    })];
                case 1:
                    res = _a.sent();
                    if (!res.ok) {
                        throw new index_js_1.CallError('Failed to fetch runtime public key.', res);
                    }
                    return [4 /*yield*/, res.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function makeCallDataPublicKeyBody() {
    return JSON.stringify({
        jsonrpc: '2.0',
        id: Math.floor(Math.random() * 1e9),
        method: 'oasis_callDataPublicKey',
        params: [],
    });
}
//# sourceMappingURL=cipher.js.map