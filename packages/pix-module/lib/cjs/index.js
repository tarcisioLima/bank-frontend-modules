'use strict';

var axios = require('axios');
var yup = require('yup');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
var yup__namespace = /*#__PURE__*/_interopNamespace(yup);

var api = function (baseURL, accessToken) {
    if (accessToken === void 0) { accessToken = ""; }
    var object = axios__default["default"].create({
        baseURL: baseURL,
    });
    object.interceptors.request.use(function (config) {
        if (accessToken) {
            config.headers["Authorization"] = "Bearer ".concat(accessToken);
        }
        return config;
    });
    object.interceptors.response.use(undefined, function (error) {
        if (error.response) {
            return error.response;
        }
        return error;
    });
    return object;
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

var formatAxiosErrors = function (error, showFields) {
    if (showFields === void 0) { showFields = true; }
    var notification = {
        data: undefined,
        error: true,
        message: "Erro na chamada",
    };
    if (!error)
        return notification;
    if ((error.response && error.response.status === 500) ||
        (error.response && error.response.status === 400) ||
        (error.response && error.response.status === 403) ||
        (error.response && error.response.status === 401)) {
        var response = error.response;
        Object.entries(response.data).map(function (arr) {
            if (!showFields) {
                notification.message = String(arr[1]);
            }
            else {
                notification.message = "".concat(arr[0], ": ").concat(arr[1]);
            }
        });
        return notification;
    }
    return notification;
};
var formatMessageErrors = function (message) { return ({
    data: undefined,
    error: true,
    message: message,
}); };
var formatYupErrors = function (fields) {
    var notification = {
        data: undefined,
        error: true,
        message: "Erro na chamada",
    };
    notification.message = Object.values(fields).join(", ");
    return notification;
};
var formatResponse = function (data, error, message) { return ({
    data: data,
    error: error,
    message: message,
}); };

var PAGINATION_LIMIT = 100;
var REQUIRED_LABEL = "Campo obrigatório";

var extractMock = [
    {
        id: 1,
        amount: 121.78,
        description: "pix transf joao 25/11",
        created_at: "25-11-2021",
        transaction_type: "credit",
        type_origin_account: "corrente",
    },
    {
        id: 2,
        amount: 22.18,
        description: "pix transf alvaro 22/11",
        created_at: "22-11-2021",
        transaction_type: "debit",
        type_origin_account: "corrente",
    },
    {
        id: 3,
        amount: 241.78,
        description: "pix transf lucio 25/11",
        created_at: "25-11-2021",
        transaction_type: "credit",
        type_origin_account: "poupanca",
    },
    {
        id: 4,
        amount: 16.0,
        description: "pix transf ana 25/11",
        created_at: "22-11-2021",
        transaction_type: "debit",
        type_origin_account: "corrente",
    },
];

var initializeService$2 = function (fetcher, isMock) {
    var get = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // MOCK TRUE
                    if (isMock) {
                        return [2 /*return*/, formatResponse(extractMock, false, "Listado com sucesso")];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetcher.request({
                            url: "/extract",
                            method: "get",
                            params: {
                                limit: PAGINATION_LIMIT,
                                ordering: "-id",
                            },
                        })];
                case 2:
                    data = (_a.sent()).data;
                    if (!data) {
                        return [2 /*return*/, formatMessageErrors("Erro de api")];
                    }
                    return [2 /*return*/, formatResponse(data, false, "Listado com sucesso")];
                case 3:
                    err_1 = _a.sent();
                    return [2 /*return*/, formatAxiosErrors(err_1)];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return {
        get: get,
    };
};

var chargeMock = [
    {
        key_id: 1,
        amount: 242.4,
        description: "Troca da caixa d'água",
        qr_code: "https://previews.123rf.com/images/charnsitr/charnsitr2001/charnsitr200100063/139124508-vector-of-qr-code-payment-for-product-mock-up.jpg",
    },
    {
        key_id: 2,
        amount: 52,
        description: "Conserto da pia",
        qr_code: "https://previews.123rf.com/images/charnsitr/charnsitr2001/charnsitr200100063/139124508-vector-of-qr-code-payment-for-product-mock-up.jpg",
    },
];

var PayloadSchema$1 = yup__namespace.object().shape({
    key_id: yup__namespace.number().required(REQUIRED_LABEL),
    amount: yup__namespace.number(),
    description: yup__namespace.string(),
});
var initializeService$1 = function (fetcher, isMock) {
    var get = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // MOCK TRUE
                    if (isMock) {
                        return [2 /*return*/, formatResponse(chargeMock, false, "Listado com sucesso")];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetcher.request({
                            url: "/charge-someone",
                            method: "get",
                            params: {
                                limit: PAGINATION_LIMIT,
                                ordering: "-id",
                            },
                        })];
                case 2:
                    data = (_a.sent()).data;
                    if (!data) {
                        return [2 /*return*/, formatMessageErrors("Erro de api")];
                    }
                    return [2 /*return*/, formatResponse(data, false, "Listado com sucesso")];
                case 3:
                    err_1 = _a.sent();
                    return [2 /*return*/, formatAxiosErrors(err_1)];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var post = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
        var validationResult, data, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!PayloadSchema$1.isValidSync(payload)) return [3 /*break*/, 2];
                    return [4 /*yield*/, PayloadSchema$1.validate(payload, {
                            abortEarly: false,
                        }).catch(function (err) { return err; })];
                case 1:
                    validationResult = _a.sent();
                    return [2 /*return*/, formatYupErrors(validationResult.errors)];
                case 2:
                    // MOCK TRUE
                    if (isMock) {
                        return [2 /*return*/, formatResponse(__assign(__assign({}, payload), { qr_code: chargeMock[0].qr_code }), false, "Criado com sucesso")];
                    }
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, fetcher.request({
                            url: "/charge-someone",
                            method: "post",
                            data: payload,
                        })];
                case 4:
                    data = (_a.sent()).data;
                    if (!data) {
                        return [2 /*return*/, formatMessageErrors("Erro na chamada")];
                    }
                    return [2 /*return*/, formatResponse(data, false, "Criado com sucesso")];
                case 5:
                    err_2 = _a.sent();
                    return [2 /*return*/, formatAxiosErrors(err_2)];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return {
        get: get,
        post: post,
    };
};

var keysMock = [
    {
        id: 1,
        key_type: "PHONE",
        key: "13991064262",
        type_origin_account: "corrente",
        active: true,
        created_at: "02-12-2021",
        updated_at: "03-12-2021",
    },
    {
        id: 2,
        key_type: "DOCUMENT_NUMBER",
        key: "27288126080",
        type_origin_account: "poupança",
        active: true,
        created_at: "02-12-2021",
        updated_at: "03-12-2021",
    },
    {
        id: 3,
        key_type: "DOCUMENT_NUMBER",
        key: "10091561000105",
        type_origin_account: "corrente",
        active: true,
        created_at: "02-12-2021",
        updated_at: "03-12-2021",
    },
    {
        id: 4,
        key_type: "EMAIL",
        key: "teste@teste.com",
        type_origin_account: "poupança",
        active: true,
        created_at: "02-12-2021",
        updated_at: "03-12-2021",
    },
    {
        id: 5,
        key_type: "RANDOM",
        key: "*U(!@#%@!@5",
        type_origin_account: "corrente",
        active: false,
        created_at: "02-12-2021",
        updated_at: "03-12-2021",
    },
];

var PayloadSchema = yup__namespace.object().shape({
    key: yup__namespace.string(),
    key_type: yup__namespace
        .mixed()
        .oneOf(["PHONE", "DOCUMENT_NUMBER", "EMAIL", "RANDOM"])
        .required(REQUIRED_LABEL),
    type_origin_account: yup__namespace
        .mixed()
        .oneOf(["corrente", "poupança"])
        .required(REQUIRED_LABEL),
});
var initializeService = function (fetcher, isMock) {
    var get = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // MOCK TRUE
                    if (isMock) {
                        return [2 /*return*/, formatResponse(keysMock, false, "Listado com sucesso")];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetcher.request({
                            url: "/keys",
                            method: "get",
                            params: {
                                limit: PAGINATION_LIMIT,
                                ordering: "-id",
                            },
                        })];
                case 2:
                    data = (_a.sent()).data;
                    if (!data) {
                        return [2 /*return*/, formatMessageErrors("Erro de api")];
                    }
                    return [2 /*return*/, formatResponse(data, false, "Listado com sucesso")];
                case 3:
                    err_1 = _a.sent();
                    return [2 /*return*/, formatAxiosErrors(err_1)];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var post = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
        var validationResult, _a, id, active, created_at, updated_at, data, err_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!!PayloadSchema.isValidSync(payload)) return [3 /*break*/, 2];
                    return [4 /*yield*/, PayloadSchema.validate(payload, {
                            abortEarly: false,
                        }).catch(function (err) { return err; })];
                case 1:
                    validationResult = _b.sent();
                    return [2 /*return*/, formatYupErrors(validationResult.errors)];
                case 2:
                    // MOCK TRUE
                    if (isMock) {
                        _a = keysMock[0], id = _a.id, active = _a.active, created_at = _a.created_at, updated_at = _a.updated_at;
                        return [2 /*return*/, formatResponse(__assign(__assign({ id: id }, payload), { active: active, created_at: created_at, updated_at: updated_at }), false, "Criado com sucesso")];
                    }
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, fetcher.request({
                            url: "/keys",
                            method: "post",
                            data: payload,
                        })];
                case 4:
                    data = (_b.sent()).data;
                    if (!data) {
                        return [2 /*return*/, formatMessageErrors("Erro na chamada")];
                    }
                    return [2 /*return*/, formatResponse(data, false, "Criado com sucesso")];
                case 5:
                    err_2 = _b.sent();
                    return [2 /*return*/, formatAxiosErrors(err_2)];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return {
        get: get,
        post: post,
    };
};

/* import LimitService from "./Limit";
import PayQRCodeService from "./PayQRCode";
import ReceiptService from "./Receipt";
import TransferService from "./Transfer";
 */
var all = function (fetcher, isMock) {
    var extract = initializeService$2(fetcher, isMock);
    var charge_someone = initializeService$1(fetcher, isMock);
    var key = initializeService(fetcher, isMock);
    /* const limit = LimitService(fetcher, isMock);
    const payqrcode = PayQRCodeService(fetcher, isMock);
    const receipt = ReceiptService(fetcher, isMock);
    const transfer = TransferService(fetcher, isMock); */
    return {
        extract: extract,
        charge_someone: charge_someone,
        key: key,
        /*limit,
        payqrcode,
        receipt,
        transfer, */
    };
};

var PixModule = function (config) {
    var baseURL = config.baseURL, accessToken = config.accessToken;
    var initializedApi = api(baseURL, accessToken);
    var isMock = config.isMock || false;
    return {
        activeBaseURL: baseURL,
        activeAccessToken: accessToken,
        services: all(initializedApi, isMock),
    };
};

module.exports = PixModule;
