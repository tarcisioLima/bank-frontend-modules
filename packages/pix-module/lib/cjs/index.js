'use strict';

var axios = require('axios');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

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

var showResponseErrors = function (error, showFields) {
    if (showFields === void 0) { showFields = true; }
    var notification = { message: "Alerta", description: "" };
    if (!error)
        return false;
    if ((error.response && error.response.status === 500) ||
        (error.response && error.response.status === 400) ||
        (error.response && error.response.status === 403) ||
        (error.response && error.response.status === 401)) {
        var response = error.response;
        Object.entries(response.data).map(function (arr) {
            if (!showFields) {
                notification.description = String(arr[1]);
            }
            else {
                notification.description = "".concat(arr[0], ": ").concat(arr[1]);
            }
        });
        return notification;
    }
    return false;
};

var PAGINATION_LIMIT = 100;

var initializeService$6 = function (fetcher) {
    return {
        get: function () { return __awaiter(void 0, void 0, void 0, function () {
            var data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fetcher({
                                url: "/extract",
                                method: "get",
                                params: {
                                    limit: PAGINATION_LIMIT,
                                    ordering: "-id",
                                },
                            })];
                    case 1:
                        data = (_a.sent()).data;
                        if (!data) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, data];
                    case 2:
                        err_1 = _a.sent();
                        return [2 /*return*/, showResponseErrors(err_1)];
                    case 3: return [2 /*return*/];
                }
            });
        }); },
    };
};

var initializeService$5 = function (fetcher) {
    return {
        get: function () { return __awaiter(void 0, void 0, void 0, function () {
            var data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fetcher({
                                url: "/charge-someone",
                                method: "get",
                                params: {
                                    limit: PAGINATION_LIMIT,
                                    ordering: "-id",
                                },
                            })];
                    case 1:
                        data = (_a.sent()).data;
                        if (!data) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, data];
                    case 2:
                        err_1 = _a.sent();
                        return [2 /*return*/, showResponseErrors(err_1)];
                    case 3: return [2 /*return*/];
                }
            });
        }); },
    };
};

var initializeService$4 = function (fetcher) {
    return {
        get: function () { return __awaiter(void 0, void 0, void 0, function () {
            var data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fetcher({
                                url: "/keys",
                                method: "get",
                                params: {
                                    limit: PAGINATION_LIMIT,
                                    ordering: "-id",
                                },
                            })];
                    case 1:
                        data = (_a.sent()).data;
                        if (!data) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, data];
                    case 2:
                        err_1 = _a.sent();
                        return [2 /*return*/, showResponseErrors(err_1)];
                    case 3: return [2 /*return*/];
                }
            });
        }); },
    };
};

var initializeService$3 = function (fetcher) {
    return {
        get: function () { return __awaiter(void 0, void 0, void 0, function () {
            var data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fetcher({
                                url: "/limits",
                                method: "get",
                                params: {
                                    limit: PAGINATION_LIMIT,
                                    ordering: "-id",
                                },
                            })];
                    case 1:
                        data = (_a.sent()).data;
                        if (!data) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, data];
                    case 2:
                        err_1 = _a.sent();
                        return [2 /*return*/, showResponseErrors(err_1)];
                    case 3: return [2 /*return*/];
                }
            });
        }); },
    };
};

var initializeService$2 = function (fetcher) {
    return {
        get: function () { return __awaiter(void 0, void 0, void 0, function () {
            var data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fetcher({
                                url: "/keys",
                                method: "get",
                                params: {
                                    limit: PAGINATION_LIMIT,
                                    ordering: "-id",
                                },
                            })];
                    case 1:
                        data = (_a.sent()).data;
                        if (!data) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, data];
                    case 2:
                        err_1 = _a.sent();
                        return [2 /*return*/, showResponseErrors(err_1)];
                    case 3: return [2 /*return*/];
                }
            });
        }); },
    };
};

var initializeService$1 = function (fetcher) {
    return {
        get: function () { return __awaiter(void 0, void 0, void 0, function () {
            var data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fetcher({
                                url: "/limits",
                                method: "get",
                                params: {
                                    limit: PAGINATION_LIMIT,
                                    ordering: "-id",
                                },
                            })];
                    case 1:
                        data = (_a.sent()).data;
                        if (!data) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, data];
                    case 2:
                        err_1 = _a.sent();
                        return [2 /*return*/, showResponseErrors(err_1)];
                    case 3: return [2 /*return*/];
                }
            });
        }); },
    };
};

var initializeService = function (fetcher) {
    return {
        get: function () { return __awaiter(void 0, void 0, void 0, function () {
            var data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fetcher({
                                url: "/limits",
                                method: "get",
                                params: {
                                    limit: PAGINATION_LIMIT,
                                    ordering: "-id",
                                },
                            })];
                    case 1:
                        data = (_a.sent()).data;
                        if (!data) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, data];
                    case 2:
                        err_1 = _a.sent();
                        return [2 /*return*/, showResponseErrors(err_1)];
                    case 3: return [2 /*return*/];
                }
            });
        }); },
    };
};

var all = function (fetcher) {
    var extract = initializeService$6(fetcher);
    var chargeSomeone = initializeService$5(fetcher);
    var key = initializeService$4(fetcher);
    var limit = initializeService$3(fetcher);
    var payQRCode = initializeService$2(fetcher);
    var receipt = initializeService$1(fetcher);
    var transfer = initializeService(fetcher);
    return {
        extract: extract,
        chargeSomeone: chargeSomeone,
        key: key,
        limit: limit,
        payQRCode: payQRCode,
        receipt: receipt,
        transfer: transfer,
    };
};

var PixModule = function (config) {
    var baseURL = config.baseURL, accessToken = config.accessToken;
    var initializedApi = api(baseURL, accessToken);
    return {
        activeBaseURL: baseURL,
        activeAccessToken: accessToken,
        services: all(initializedApi),
    };
};

// import PixModuleWeb from "./web/PixModuleWeb";
// export { PixModule };

module.exports = PixModule;
