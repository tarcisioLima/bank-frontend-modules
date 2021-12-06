import axios from 'axios';
import * as yup from 'yup';

var api = function (baseURL, accessToken) {
    if (accessToken === void 0) { accessToken = ""; }
    var object = axios.create({
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
var KEYTYPES = ["PHONE", "DOCUMENT_NUMBER", "EMAIL", "RANDOM"];

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

var initializeService$6 = function (fetcher, isMock) {
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

var PayloadSchema$4 = yup.object().shape({
    key_id: yup.number().required(REQUIRED_LABEL),
    amount: yup.number(),
    description: yup.string(),
});
var initializeService$5 = function (fetcher, isMock) {
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
                    if (!!PayloadSchema$4.isValidSync(payload)) return [3 /*break*/, 2];
                    return [4 /*yield*/, PayloadSchema$4.validate(payload, {
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

var validateCPF = function (ObjCpf) {
    if (ObjCpf == undefined || ObjCpf == "") {
        return false;
    }
    var strCPF = ObjCpf.replace(/\D/g, "");
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000" ||
        strCPF == "11111111111" ||
        strCPF == "22222222222" ||
        strCPF == "33333333333" ||
        strCPF == "44444444444" ||
        strCPF == "55555555555" ||
        strCPF == "66666666666" ||
        strCPF == "77777777777" ||
        strCPF == "88888888888" ||
        strCPF == "99999999999") {
        return false;
    }
    for (var i = 1; i <= 9; i++) {
        Soma += parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    }
    Resto = (Soma * 10) % 11;
    if (Resto === 10 || Resto === 11)
        Resto = 0;
    if (Resto !== parseInt(strCPF.substring(9, 10)))
        return false;
    Soma = 0;
    for (var i = 1; i <= 10; i++) {
        Soma += parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    }
    Resto = (Soma * 10) % 11;
    if (Resto === 10 || Resto === 11)
        Resto = 0;
    if (Resto !== parseInt(strCPF.substring(10, 11)))
        return false;
    return true;
};
var validateCNPJ = function (cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, "");
    if (cnpj == "")
        return false;
    if (cnpj.length != 14)
        return false;
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999") {
        return false;
    }
    // Valida DVs
    var tamanho = cnpj.length - 2;
    var numeros = cnpj.substring(0, tamanho);
    var digitos = cnpj.substring(tamanho);
    var soma = 0;
    var pos = tamanho - 7;
    for (var i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(0))
        return false;
    tamanho += 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (var i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(1))
        return false;
    return true;
};
var validateDocNumber = (function (doc) {
    doc = doc.replace(/[^0-9]+/g, "");
    if (doc.length <= 11) {
        return validateCPF(doc);
    }
    return validateCNPJ(doc);
});

var validateEmail = function (email) {
    var reg = /\S+@\S+\.\S+/;
    return reg.test(email);
};

var mobilePhone = function (phone) {
    var clean = phone.replace(/[^0-9]+/g, "");
    var phoneLength = 11;
    return clean.length !== phoneLength;
};

var PayloadSchema$3 = yup.object().shape({
    key: yup.string().test("key-error", "", function (value) {
        var type = this.parent.key_type;
        var _a = this, path = _a.path, createError = _a.createError;
        var isValid = false;
        if (!type) {
            isValid = true;
        }
        switch (type) {
            case "EMAIL":
                isValid = validateEmail(value);
                break;
            case "DOCUMENT_NUMBER":
                isValid = validateDocNumber(value);
                break;
            case "PHONE":
                isValid = mobilePhone(value);
                break;
            case "RANDOM":
                isValid = true;
                break;
        }
        return (isValid ||
            createError({
                path: path,
                message: "Chave do tipo ".concat(type, " n\u00E3o est\u00E1 no formato v\u00E1lido"),
            }));
    }),
    key_type: yup.mixed().oneOf(KEYTYPES).required(REQUIRED_LABEL),
    type_origin_account: yup
        .mixed()
        .oneOf(["corrente", "poupança"])
        .required(REQUIRED_LABEL),
});
var initializeService$4 = function (fetcher, isMock) {
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
                    if (!!PayloadSchema$3.isValidSync(payload)) return [3 /*break*/, 2];
                    return [4 /*yield*/, PayloadSchema$3.validate(payload, {
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
    var put = function (key_id, payload) { return __awaiter(void 0, void 0, void 0, function () {
        var PayloadSchemaUpdate, validationResult, data, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    PayloadSchemaUpdate = yup.object().shape({
                        type_origin_account: yup.mixed().oneOf(["corrente", "poupança"]),
                    });
                    if (!!PayloadSchema$3.isValidSync(payload)) return [3 /*break*/, 2];
                    return [4 /*yield*/, PayloadSchemaUpdate.validate(payload, {
                            abortEarly: false,
                        }).catch(function (err) { return err; })];
                case 1:
                    validationResult = _a.sent();
                    return [2 /*return*/, formatYupErrors(validationResult.errors)];
                case 2:
                    // MOCK TRUE
                    if (isMock) {
                        return [2 /*return*/, formatResponse(__assign(__assign(__assign({}, keysMock[0]), payload), { id: key_id }), false, "Criado com sucesso")];
                    }
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, fetcher.request({
                            url: "/keys/".concat(key_id),
                            method: "put",
                            data: payload,
                        })];
                case 4:
                    data = (_a.sent()).data;
                    if (!data) {
                        return [2 /*return*/, formatMessageErrors("Erro na chamada")];
                    }
                    return [2 /*return*/, formatResponse(data, false, "Criado com sucesso")];
                case 5:
                    err_3 = _a.sent();
                    return [2 /*return*/, formatAxiosErrors(err_3)];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var remove = function (key_id) { return __awaiter(void 0, void 0, void 0, function () {
        var data, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // MOCK TRUE
                    if (isMock) {
                        return [2 /*return*/, formatResponse(__assign(__assign({}, keysMock[0]), { id: key_id }), false, "Deletado com sucesso")];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetcher.request({
                            url: "/keys/".concat(key_id),
                            method: "delete",
                        })];
                case 2:
                    data = (_a.sent()).data;
                    if (!data) {
                        return [2 /*return*/, formatMessageErrors("Erro na chamada")];
                    }
                    return [2 /*return*/, formatResponse(data, false, "Deletado com sucesso")];
                case 3:
                    err_4 = _a.sent();
                    return [2 /*return*/, formatAxiosErrors(err_4)];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return {
        get: get,
        post: post,
        put: put,
        remove: remove,
    };
};

var limitsMock = {
    id: 1,
    limit_day_amount: 50000,
    limit_night_amount: 1000,
    updated_at: "06-06-2021",
};

var PayloadSchema$2 = yup.object().shape({
    limit_day_amount: yup.number().required(REQUIRED_LABEL),
    limit_night_amount: yup.number().required(REQUIRED_LABEL),
});
var initializeService$3 = function (fetcher, isMock) {
    var get = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // MOCK TRUE
                    if (isMock) {
                        return [2 /*return*/, formatResponse(limitsMock, false, "Listado com sucesso")];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetcher.request({
                            url: "/limitation",
                            method: "get",
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
        var validationResult, id, updated_at, data, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!PayloadSchema$2.isValidSync(payload)) return [3 /*break*/, 2];
                    return [4 /*yield*/, PayloadSchema$2.validate(payload, {
                            abortEarly: false,
                        }).catch(function (err) { return err; })];
                case 1:
                    validationResult = _a.sent();
                    return [2 /*return*/, formatYupErrors(validationResult.errors)];
                case 2:
                    // MOCK TRUE
                    if (isMock) {
                        id = limitsMock.id, updated_at = limitsMock.updated_at;
                        return [2 /*return*/, formatResponse(__assign(__assign({ id: id }, payload), { updated_at: updated_at }), false, "Criado com sucesso")];
                    }
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, fetcher.request({
                            url: "/limitation",
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

var payqrcodeMock = {
    id: 1,
    authentication: "232F23G31A1FUHSADHUSKGZ",
    code: "00020126350014BR.GOV.BCB.PIX0113test@test.com5204000053039865406225.005802BR5915Fulano da Silca6006Santos62070503***63046647",
    created_at: "2021-10-12",
};

var PayloadSchema$1 = yup.object().shape({
    code: yup.string().required(REQUIRED_LABEL),
});
var initializeService$2 = function (fetcher, isMock) {
    var post = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
        var validationResult, id, created_at, authentication, data, err_1;
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
                        id = payqrcodeMock.id, created_at = payqrcodeMock.created_at, authentication = payqrcodeMock.authentication;
                        return [2 /*return*/, formatResponse(__assign(__assign({ id: id }, payload), { authentication: authentication, created_at: created_at }), false, "Criado com sucesso")];
                    }
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, fetcher.request({
                            url: "/pay-qrcode",
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
                    err_1 = _a.sent();
                    return [2 /*return*/, formatAxiosErrors(err_1)];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return {
        post: post,
    };
};

var receiptstMock = [
    {
        id: 1,
        amount: 521.78,
        description: "agua, luz, telefone e gas",
        created_at: "2021-05-05",
        payment_date: "2021-11-11",
        type_origin_account: "corrente",
        authentication: "19787SDSA68ASD8GSA24F322",
    },
    {
        id: 2,
        amount: 42.18,
        description: "convenios - celular pré pago",
        created_at: "2021-05-06",
        payment_date: "2021-11-11",
        type_origin_account: "corrente",
        authentication: "29787SDSA68ASD8GSA24F322",
    },
    {
        id: 3,
        amount: 841.78,
        description: "pix pagamento",
        created_at: "2021-05-06",
        payment_date: "2021-11-11",
        type_origin_account: "poupanca",
        authentication: "39787SDSA68ASD8GSA24F322",
    },
];

var initializeService$1 = function (fetcher, isMock) {
    var get = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // MOCK TRUE
                    if (isMock) {
                        return [2 /*return*/, formatResponse(receiptstMock, false, "Listado com sucesso")];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetcher.request({
                            url: "/receipts",
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

var transferMock = {
    id: 1,
    amount: 200.5,
    receiver_key: "test@test.com",
    type_origin_account: "poupança",
    status: "done",
    created_at: "2021-06-12",
    updated_at: "2021-06-12",
};

var PayloadSchema = yup.object().shape({
    amount: yup.number().required(REQUIRED_LABEL),
    receiver_key: yup.number().required(REQUIRED_LABEL),
    type_origin_account: yup
        .mixed()
        .oneOf(["corrente", "poupança"])
        .required(REQUIRED_LABEL),
});
var initializeService = function (fetcher, isMock) {
    var post = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
        var validationResult, id, status_1, created_at, updated_at, data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!PayloadSchema.isValidSync(payload)) return [3 /*break*/, 2];
                    return [4 /*yield*/, PayloadSchema.validate(payload, {
                            abortEarly: false,
                        }).catch(function (err) { return err; })];
                case 1:
                    validationResult = _a.sent();
                    return [2 /*return*/, formatYupErrors(validationResult.errors)];
                case 2:
                    // MOCK TRUE
                    if (isMock) {
                        id = transferMock.id, status_1 = transferMock.status, created_at = transferMock.created_at, updated_at = transferMock.updated_at;
                        return [2 /*return*/, formatResponse(__assign(__assign({ id: id }, payload), { status: status_1, created_at: created_at, updated_at: updated_at }), false, "Criado com sucesso")];
                    }
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, fetcher.request({
                            url: "/transfer",
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
                    err_1 = _a.sent();
                    return [2 /*return*/, formatAxiosErrors(err_1)];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return {
        post: post,
    };
};

var all = function (fetcher, isMock) {
    var extract = initializeService$6(fetcher, isMock);
    var charge_someone = initializeService$5(fetcher, isMock);
    var key = initializeService$4(fetcher, isMock);
    var limit = initializeService$3(fetcher, isMock);
    var payqrcode = initializeService$2(fetcher, isMock);
    var receipt = initializeService$1(fetcher, isMock);
    var transfer = initializeService(fetcher, isMock);
    return {
        extract: extract,
        charge_someone: charge_someone,
        key: key,
        limit: limit,
        payqrcode: payqrcode,
        receipt: receipt,
        transfer: transfer,
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

export { PixModule as default };
