"use strict";
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
exports.enumerateTenant = exports.enumerateNode = exports.nodeExists = exports.tenantExists = exports.createUser = exports.enumerateUsers = exports.getUser = exports.updateUser = exports.getUsers = exports.deleteUser = exports.userExists = exports.createCredential = exports.enumerateCredentials = exports.getCredential = exports.getAllCredentials = exports.deleteCredential = exports.credentialExists = exports.createMetaDataRules = exports.enumerateMetaDataRules = exports.getMetaDataRule = exports.getMetaDataRules = exports.updateMetaDataRule = exports.deleteMetaDataRule = exports.existsMetaDataRule = void 0;
var view_sdk_1 = require("view-sdk");
var api = new view_sdk_1.ViewConfigurationSdk('00000000-0000-0000-0000-000000000000', //tenant Id
'default', //access token
'http://view.homedns.org:8000/' //endpoint
);
// api.accessToken =
//   "mXCNtMWDsW0/pr+IwRFUjbcKaGXxIDHLMkRBC6uiU5EKuJ1vZhr0WCtKx2AUy9mb1Fl67jAdKXTPhS35FWmC0QdR50vS6UcuJdRliZt0a1oudQvMM76q1EIrNwqcNkv7YiNROy3+A8Y6Gkyq2knUlKjgQdp1vkjMuuU1bwyA4HDHRDSDetFjMSxoGcbTZdmb1LWZNZ9vXepBPknDYa+bdIOVeoXKUzOTMO3akkdPT+Jy5JV7f6HEm5Xm8HnZ+62TcSNM24ZaR3U0Kwm9yESI3fjLmMuA26MbP0DD+DRT8uPirP4aA7m1ODeS8NCkzCPU";
var existsWebhookTarget = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.existsWebhookTarget('f4bd1d87-598a-4e16-ace3-5c2a8ce55511')];
            case 1:
                response = _a.sent();
                console.log(response, 'Webhook target exists');
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.log('Error checking Webhook target:', err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// existsWebhookTarget();
var deleteWebhookTarget = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.deleteWebhookTarget('4bd187db-3a56-495e-b7fe-d00c963d5333')];
            case 1:
                response = _a.sent();
                console.log(response, 'Webhook target deleted successfully');
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                console.log('Error deleting Webhook target:', err_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// deleteWebhookTarget();
var updateWebhookTarget = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.updateWebhookTarget({
                        GUID: '4bd187db-3a56-495e-b7fe-d00c963d5333',
                        Name: 'My webhook target [ASH] [UPDATED]',
                        Url: 'http://localhost:8311',
                        ContentType: 'application/json',
                        ExpectStatus: 200,
                    })];
            case 1:
                response = _a.sent();
                console.log(response, 'Webhook target updated successfully');
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                console.log('Error updating Webhook target:', err_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// updateWebhookTarget();
var readAllWebhookTargets = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveWebhookTargets()];
            case 1:
                response = _a.sent();
                console.log(response, 'All webhook targets fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                console.log('Error fetching All webhook targets:', err_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// readAllWebhookTargets();
var readWebhookTarget = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveWebhookTarget('4bd187db-3a56-495e-b7fe-d00c963d5333')];
            case 1:
                response = _a.sent();
                console.log(response, 'Webhook target fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                console.log('Error fetching Webhook target:', err_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// readWebhookTarget();
var enumerateWebhookTargets = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.enumerateWebhookTargets()];
            case 1:
                response = _a.sent();
                console.log(response, 'Webhook targets fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_6 = _a.sent();
                console.log('Error fetching Webhook targets:', err_6);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// enumerateWebhookTargets();
var createWebhookTarget = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.createWebhookTarget({
                        Name: 'My webhook target [ASH]',
                        Url: 'http://localhost:8311',
                        ContentType: 'application/json',
                        ExpectStatus: 200,
                    })];
            case 1:
                response = _a.sent();
                console.log(response, 'Webhook target created successfully');
                return [3 /*break*/, 3];
            case 2:
                err_7 = _a.sent();
                console.log('Error creating Webhook target:', err_7);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// createWebhookTarget();
var existWebhookEvent = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.existsWebhookEvent('b4cf5430-9c25-4514-b3e5-fe7fd1108edb')];
            case 1:
                response = _a.sent();
                console.log(response, 'Webhook event exists');
                return [3 /*break*/, 3];
            case 2:
                err_8 = _a.sent();
                console.log('Error checking Webhook event:', err_8);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// existWebhookEvent();
var readWebhookEvents = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveWebhookEvents()];
            case 1:
                response = _a.sent();
                console.log(response, 'Webhook events fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_9 = _a.sent();
                console.log('Error fetching Webhook events:', err_9);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// readWebhookEvents();
var enumerateWebhookEvents = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.enumerateWebhookEvents()];
            case 1:
                response = _a.sent();
                console.log(response, 'Webhook events fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_10 = _a.sent();
                console.log('Error fetching Webhook events:', err_10);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// enumerateWebhookEvents();
var deleteDataRepository = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_11;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.deleteDataRepository('cd455417-d261-48e3-817f-98f15ba3d6b8')];
            case 1:
                response = _a.sent();
                console.log(response, 'Data repository deleted successfully');
                return [3 /*break*/, 3];
            case 2:
                err_11 = _a.sent();
                console.log('Error deleting Data repository:', err_11);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// deleteDataRepository();
var existsDataRepository = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_12;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.existsDataRepository('cd455417-d261-48e3-817f-98f15ba3d6b8')];
            case 1:
                response = _a.sent();
                console.log(response, 'Data repository exists');
                return [3 /*break*/, 3];
            case 2:
                err_12 = _a.sent();
                console.log('Error checking Data repository:', err_12);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// existsDataRepository();
var readAllDataRepositories = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_13;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveDataRepositories()];
            case 1:
                response = _a.sent();
                console.log(response, 'All data repositories fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_13 = _a.sent();
                console.log('Error fetching All data repositories:', err_13);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// readAllDataRepositories();
var readDataRepository = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_14;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveDataRepository('cd455417-d261-48e3-817f-98f15ba3d6b8')];
            case 1:
                response = _a.sent();
                console.log(response, 'Data repository fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_14 = _a.sent();
                console.log('Error fetching Data repository:', err_14);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// readDataRepository();
var enumerateDataRepositories = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_15;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.enumerateDataRepositories()];
            case 1:
                response = _a.sent();
                console.log(response, 'Data repositories fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_15 = _a.sent();
                console.log('Error fetching Data repositories:', err_15);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// enumerateDataRepositories();
var createDataRepository = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_16;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.createDataRepository({
                        Name: 'My file repository [ASH]',
                        RepositoryType: 'File',
                        BaseUrl: './files/',
                        DiskDirectory: './files/',
                        DiskIncludeSubdirectories: true,
                    })];
            case 1:
                response = _a.sent();
                console.log(response, 'Data repository created successfully');
                return [3 /*break*/, 3];
            case 2:
                err_16 = _a.sent();
                console.log('Error creating Data repository:', err_16);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// createDataRepository();
var readBlobWithData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_17;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveBlobIncludeData('431638f9-1da1-4dd2-b6de-e88acf990c8c')];
            case 1:
                response = _a.sent();
                console.log(response, 'Blob read successfully');
                return [3 /*break*/, 3];
            case 2:
                err_17 = _a.sent();
                console.log('Error reading Blob:', err_17);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// readBlobWithData();
var blobExists = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_18;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.existsBlob('431638f9-1da1-4dd2-b6de-e88acf990c8c')];
            case 1:
                response = _a.sent();
                console.log(response, 'Blob exists');
                return [3 /*break*/, 3];
            case 2:
                err_18 = _a.sent();
                console.log('Error checking Blob:', err_18);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// blobExists();
var deleteBlob = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_19;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.deleteBlob('7f6eee35-fc32-4798-8ea7-e9e84775043e')];
            case 1:
                response = _a.sent();
                console.log(response, 'Blob deleted successfully');
                return [3 /*break*/, 3];
            case 2:
                err_19 = _a.sent();
                console.log('Error deleting Blob:', err_19);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// deleteBlob();
var updateBlob = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_20;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.updateBlob({
                        GUID: '7f6eee35-fc32-4798-8ea7-e9e84775043e',
                        ContentType: 'text/plain',
                        Name: 'helloworldASH[UPDATED].txt',
                        Description: "A text file containing 'Hello, world!'",
                        RefObjType: '[usermanaged]',
                        RefObjGUID: '[usermanaged]',
                        Data: 'SGVsbG8sIHdvcmxkIQ==',
                    })];
            case 1:
                response = _a.sent();
                console.log(response, 'Blob updated successfully');
                return [3 /*break*/, 3];
            case 2:
                err_20 = _a.sent();
                console.log('Error updating Blob:', err_20);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// updateBlob();
var readAllBlobs = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_21;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveBlobs()];
            case 1:
                response = _a.sent();
                console.log(response, 'All blobs fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_21 = _a.sent();
                console.log('Error fetching All blobs:', err_21);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// readAllBlobs();
var readBlob = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_22;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveBlob('431638f9-1da1-4dd2-b6de-e88acf990c8c')];
            case 1:
                response = _a.sent();
                console.log(response, 'Blob read successfully');
                return [3 /*break*/, 3];
            case 2:
                err_22 = _a.sent();
                console.log('Error reading Blob:', err_22);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// readBlob();
var enumerateBlobs = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_23;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.enumerateBlobs()];
            case 1:
                response = _a.sent();
                console.log(response, 'Blobs fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_23 = _a.sent();
                console.log('Error fetching Blobs:', err_23);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// enumerateBlobs();
var createBlob = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_24;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.writeBlob({
                        ContentType: 'text/plain',
                        Name: 'helloworldASH.txt',
                        Description: "A text file containing 'Hello, world!'",
                        RefObjType: '[usermanaged]',
                        RefObjGUID: '[usermanaged]',
                        Data: 'SGVsbG8sIHdvcmxkIQ==',
                    })];
            case 1:
                response = _a.sent();
                console.log(response, 'Blob created successfully');
                return [3 /*break*/, 3];
            case 2:
                err_24 = _a.sent();
                console.log('Error creating blob:', err_24);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// createBlob();
var webhookRuleExists = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_25;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.existsWebhookRule('b4cf5430-9c25-4514-b3e5-fe7fd1108edb')];
            case 1:
                response = _a.sent();
                console.log(response, 'Webhook rule exists');
                return [3 /*break*/, 3];
            case 2:
                err_25 = _a.sent();
                console.log('Error checking Webhook rule:', err_25);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// webhookRuleExists();
var deleteWebhookRule = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_26;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.deleteWebhookRule('59c7402c-dd30-4723-beba-3a3460f26bf7')];
            case 1:
                response = _a.sent();
                console.log(response, 'Webhook rule deleted successfully');
                return [3 /*break*/, 3];
            case 2:
                err_26 = _a.sent();
                console.log('Error deleting Webhook rule:', err_26);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// deleteWebhookRule();
var updateWebhookRule = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_27;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.updateWebhookRule({
                        GUID: '59c7402c-dd30-4723-beba-3a3460f26bf7',
                        TenantGUID: '00000000-0000-0000-0000-000000000000',
                        TargetGUID: '00000000-0000-0000-0000-000000000000',
                        Name: 'My webhook rule [UPDATED]',
                        EventType: 'ObjectWrite',
                        MaxAttempts: 5,
                        RetryIntervalMs: 10000,
                        TimeoutMs: 30000,
                        CreatedUtc: '2025-03-29T11:27:22.814177Z',
                    })];
            case 1:
                response = _a.sent();
                console.log(response, 'Webhook rule updated successfully');
                return [3 /*break*/, 3];
            case 2:
                err_27 = _a.sent();
                console.log('Error updating Webhook rule:', err_27);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// updateWebhookRule();
var readAllWebhookRules = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_28;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveWebhookRules()];
            case 1:
                response = _a.sent();
                console.log(response, 'All webhook rules fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_28 = _a.sent();
                console.log('Error fetching All webhook rules:', err_28);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// readAllWebhookRules();
var readWebhookRule = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_29;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveWebhookRule('b4cf5430-9c25-4514-b3e5-fe7fd1108edb')];
            case 1:
                response = _a.sent();
                console.log(response, 'Webhook rule fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_29 = _a.sent();
                console.log('Error fetching Webhook rule:', err_29);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// readWebhookRule();
var enumerateWebhookRules = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_30;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.enumerateWebhookRules()];
            case 1:
                response = _a.sent();
                console.log(response, 'Webhook rules fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_30 = _a.sent();
                console.log('Error fetching Webhook rules:', err_30);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// enumerateWebhookRules();
var createWebhookRules = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_31;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.createWebhookRule({
                        Name: 'My webhook rule',
                        TargetGUID: '00000000-0000-0000-0000-000000000000',
                        EventType: 'ObjectWrite',
                        MaxAttempts: 5,
                        RetryIntervalMs: 10000,
                        TimeoutMs: 30000,
                    })];
            case 1:
                response = _a.sent();
                console.log(response, 'Webhook rules created successfully');
                return [3 /*break*/, 3];
            case 2:
                err_31 = _a.sent();
                console.log('Error creating Webhook rules:', err_31);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// createWebhookRules();
var encryptionKeyExists = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_32;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.existsEncryptionKey('d81a743f-1b02-42a6-a66b-df4c8e93a243')];
            case 1:
                response = _a.sent();
                console.log(response, 'Encryption key exists');
                return [3 /*break*/, 3];
            case 2:
                err_32 = _a.sent();
                console.log('Error checking Encryption key:', err_32);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// encryptionKeyExists();
var deleteEncryptionKey = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_33;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.deleteEncryptionKey('d81a743f-1b02-42a6-a66b-df4c8e93a243')];
            case 1:
                response = _a.sent();
                console.log(response, 'Encryption key deleted successfully');
                return [3 /*break*/, 3];
            case 2:
                err_33 = _a.sent();
                console.log('Error deleting Encryption key:', err_33);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// deleteEncryptionKey();
var updateEncryptionKey = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_34;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.updateEncryptionKey({
                        GUID: 'd81a743f-1b02-42a6-a66b-df4c8e93a243',
                        TenantGUID: '00000000-0000-0000-0000-000000000000',
                        OwnerGUID: '00000000-0000-0000-0000-000000000000',
                        KeyBase64: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',
                        KeyHex: '0000000000000000000000000000000000000000000000000000000000000000',
                        IvBase64: 'AAAAAAAAAAAAAAAAAAAAAA==',
                        IvHex: '00000000000000000000000000000000',
                        SaltBase64: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',
                        SaltHex: '0000000000000000000000000000000000000000000000000000000000000000',
                        Name: 'Another default key ash test [UPDATED]',
                        Description: 'Another default key',
                        CreatedUtc: '2025-03-29T08:44:07.522780Z',
                    })];
            case 1:
                response = _a.sent();
                console.log(response, 'Encryption key updated successfully');
                return [3 /*break*/, 3];
            case 2:
                err_34 = _a.sent();
                console.log('Error updating Encryption key:', err_34);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// updateEncryptionKey();
var readAllEncryptionKeys = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_35;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveEncryptionKeys()];
            case 1:
                response = _a.sent();
                console.log(response, 'All encryption keys fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_35 = _a.sent();
                console.log('Error fetching All encryption keys:', err_35);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// readAllEncryptionKeys();
var readEncryptionKey = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_36;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveEncryptionKey('00000000-0000-0000-0000-000000000000')];
            case 1:
                response = _a.sent();
                console.log(response, 'Encryption key fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_36 = _a.sent();
                console.log('Error fetching Encryption key:', err_36);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// readEncryptionKey();
var enumerateEncryptionKeys = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_37;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.enumerateEncryptionKeys()];
            case 1:
                response = _a.sent();
                console.log(response, 'Encryption keys fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_37 = _a.sent();
                console.log('Error fetching Encryption keys:', err_37);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// enumerateEncryptionKeys();
var createEncryptionKeys = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_38;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.createEncryptionKey({
                        KeyBase64: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',
                        KeyHex: '0000000000000000000000000000000000000000000000000000000000000000',
                        IvBase64: 'AAAAAAAAAAAAAAAAAAAAAA==',
                        IvHex: '00000000000000000000000000000000',
                        SaltBase64: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',
                        SaltHex: '0000000000000000000000000000000000000000000000000000000000000000',
                        Name: 'Another default key ash test',
                        Description: 'Another default key',
                    })];
            case 1:
                response = _a.sent();
                console.log(response, 'Encryption keys created successfully');
                return [3 /*break*/, 3];
            case 2:
                err_38 = _a.sent();
                console.log('Error creating Encryption keys:', err_38);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// createEncryptionKeys();
var collectionExists = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_39;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.existsCollection('91928e04-914b-41b0-af1c-fc3575749d17')];
            case 1:
                response = _a.sent();
                console.log(response, 'Collection exists');
                return [3 /*break*/, 3];
            case 2:
                err_39 = _a.sent();
                console.log('Error checking Collection:', err_39);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// collectionExists();
var deleteCollection = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_40;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.deleteCollection('91928e04-914b-41b0-af1c-fc3575749d17')];
            case 1:
                response = _a.sent();
                console.log(response, 'Collection deleted successfully');
                return [3 /*break*/, 3];
            case 2:
                err_40 = _a.sent();
                console.log('Error deleting Collection:', err_40);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// deleteCollection();
var retrieveCollectionStats = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_41;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveCollectionStatistics('00000000-0000-0000-0000-000000000000')];
            case 1:
                response = _a.sent();
                console.log(response, 'Collection stats fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_41 = _a.sent();
                console.log('Error fetching Collection stats:', err_41);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// retrieveCollectionStats();
var readAllCollections = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_42;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveCollections()];
            case 1:
                response = _a.sent();
                console.log(response, 'All collections fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_42 = _a.sent();
                console.log('Error fetching Collections:', err_42);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// readAllCollections();
var readCollection = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_43;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveCollection('91928e04-914b-41b0-af1c-fc3575749d17')];
            case 1:
                response = _a.sent();
                console.log(response, 'Collection fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_43 = _a.sent();
                console.log('Error fetching Collection:', err_43);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// readCollection();
var enumerateCollections = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_44;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.enumerateCollections()];
            case 1:
                response = _a.sent();
                console.log(response, 'Collections fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_44 = _a.sent();
                console.log('Error fetching Collections:', err_44);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// enumerateCollections();
var createCollection = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_45;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.createCollection({
                        Name: 'My second collection asj',
                        AllowOverwrites: true,
                        AdditionalData: 'Created by setup',
                    })];
            case 1:
                response = _a.sent();
                console.log(response, 'Collection created successfully');
                return [3 /*break*/, 3];
            case 2:
                err_45 = _a.sent();
                console.log('Error creating collection:', err_45);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// createCollection();
var graphRepositoryExists = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_46;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.existsGraphRepository('180ee580-9c0b-4ef6-b0b1-cddabfa2067a')];
            case 1:
                response = _a.sent();
                console.log(response, 'Graph repository exists');
                return [3 /*break*/, 3];
            case 2:
                err_46 = _a.sent();
                console.log('Error checking Graph repository:', err_46);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// graphRepositoryExists();
var deleteGraphRepository = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_47;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.deleteGraphRepository('180ee580-9c0b-4ef6-b0b1-cddabfa2067a')];
            case 1:
                response = _a.sent();
                console.log(response, 'Graph repository deleted successfully');
                return [3 /*break*/, 3];
            case 2:
                err_47 = _a.sent();
                console.log('Error deleting Graph repository:', err_47);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// deleteGraphRepository();
var updateGraphRepository = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_48;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.updateGraphRepository({
                        GUID: '31ff2943-f15a-4493-9cfc-21b56f821e89',
                        TenantGUID: '00000000-0000-0000-0000-000000000000',
                        Name: 'My LiteGraph instance ash 3 updated',
                        RepositoryType: 'LiteGraph',
                        EndpointUrl: 'http://localhost:8701/',
                        ApiKey: '***ault',
                        Ssl: false,
                        GraphIdentifier: undefined,
                        CreatedUtc: '2025-03-26T11:49:18.804037Z',
                        Port: 0,
                    })];
            case 1:
                response = _a.sent();
                console.log(response, 'Graph repository updated successfully');
                return [3 /*break*/, 3];
            case 2:
                err_48 = _a.sent();
                console.log('Error updating Graph repository:', err_48);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// updateGraphRepository();
var readAllGraphRepositories = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_49;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveGraphRepositories()];
            case 1:
                response = _a.sent();
                console.log(response, 'All graph repositories fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_49 = _a.sent();
                console.log('Error fetching Graph repositories:', err_49);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// readAllGraphRepositories();
var readGraphRepository = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_50;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveGraphRepository('00000000-0000-0000-0000-000000000000')];
            case 1:
                response = _a.sent();
                console.log(response, 'Graph repository fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_50 = _a.sent();
                console.log('Error fetching Graph repository:', err_50);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// readGraphRepository();
var enumerateGraphRepositories = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_51;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.enumerateGraphRepositories()];
            case 1:
                response = _a.sent();
                console.log(response, 'Graph repositories fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_51 = _a.sent();
                console.log('Error fetching Graph repositories:', err_51);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// enumerateGraphRepositories();
var createGraphRepository = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_52;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.createGraphRepository({
                        Name: 'My LiteGraph instance ash 3',
                        RepositoryType: 'LiteGraph',
                        EndpointUrl: 'http://localhost:8701/',
                        ApiKey: 'default',
                        GraphIdentifier: '00000000-0000-0000-0000-000000000000',
                    })];
            case 1:
                response = _a.sent();
                console.log(response, 'Graph repository created successfully');
                return [3 /*break*/, 3];
            case 2:
                err_52 = _a.sent();
                console.log('Error creating Graph repository:', err_52);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// createGraphRepository();
var vectorRepositoryExists = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_53;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.existsVectorRepository('e345dfe7-3e66-4f2b-b78e-3ae1b1c30d9c')];
            case 1:
                response = _a.sent();
                console.log(response, 'Vector repository exists');
                return [3 /*break*/, 3];
            case 2:
                err_53 = _a.sent();
                console.log('Error checking Vector repository:', err_53);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// vectorRepositoryExists();
var deleteVectorRepository = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_54;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.deleteVectorRepository('57094adf-f08f-4887-a49e-ae898c7317e2')];
            case 1:
                response = _a.sent();
                console.log(response, 'Vector repository deleted successfully');
                return [3 /*break*/, 3];
            case 2:
                err_54 = _a.sent();
                console.log('Error deleting Vector repository:', err_54);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// deleteVectorRepository();
var updateVectorRepository = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_55;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.updateVectorRepository({
                        GUID: 'd5845b70-6da5-4ddf-9795-bf90c24b80fc',
                        TenantGUID: '00000000-0000-0000-0000-000000000000',
                        Name: 'My vector repository ash updated',
                        RepositoryType: 'Pgvector',
                        Model: 'all-MiniLM-L6-v2',
                        Dimensionality: 384,
                        DatabaseHostname: 'localhost',
                        DatabaseName: 'vectordb',
                        SchemaName: 'public',
                        DatabaseTable: 'minilm',
                        DatabasePort: 5432,
                        DatabaseUser: 'postgres',
                        DatabasePassword: 'password',
                        CreatedUtc: '2025-03-26T10:00:43.978210Z',
                    })];
            case 1:
                response = _a.sent();
                console.log(response, 'Vector repository updated successfully');
                return [3 /*break*/, 3];
            case 2:
                err_55 = _a.sent();
                console.log('Error updating Vector repository:', err_55);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// updateVectorRepository();
var getAllVectorRepositories = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_56;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveVectorRepositories()];
            case 1:
                response = _a.sent();
                console.log(response, 'All vector repositories fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_56 = _a.sent();
                console.log('Error fetching Vector repositories:', err_56);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// getAllVectorRepositories();
var getVectorRepository = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_57;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveVectorRepository('d5845b70-6da5-4ddf-9795-bf90c24b80fc')];
            case 1:
                response = _a.sent();
                console.log(response, 'Vector repository fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_57 = _a.sent();
                console.log('Error fetching Vector repository:', err_57);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// getVectorRepository();
var enumerateVectorRepositories = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_58;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.enumerateVectorRepositories()];
            case 1:
                response = _a.sent();
                console.log(response, 'Vector repositories fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_58 = _a.sent();
                console.log('Error fetching Vector repositories:', err_58);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// enumerateVectorRepositories();
var createVectorRepository = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_59;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.createVectorRepository({
                        Name: 'My vector repository ash 3',
                        RepositoryType: 'Pgvector',
                        Model: 'all-MiniLM-L6-v2',
                        Dimensionality: 384,
                        DatabaseHostname: 'localhost',
                        DatabaseName: 'vectordb',
                        SchemaName: 'public',
                        DatabaseTable: 'minilm',
                        DatabasePort: 5432,
                        DatabaseUser: 'postgres',
                        DatabasePassword: 'password',
                    })];
            case 1:
                response = _a.sent();
                console.log(response, 'Vector repository created successfully');
                return [3 /*break*/, 3];
            case 2:
                err_59 = _a.sent();
                console.log('Error creating Vector repository:', err_59);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// createVectorRepository();
var embeddingRuleExists = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_60;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.existsEmbeddingsRule('00000000-0000-0000-0000-000000000000')];
            case 1:
                response = _a.sent();
                console.log(response, 'Embedding rule exists');
                return [3 /*break*/, 3];
            case 2:
                err_60 = _a.sent();
                console.log('Error checking Embedding rule:', err_60);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// embeddingRuleExists();
var deleteEmbeddingRule = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_61;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.deleteEmbeddingsRule('962dfbd8-a6bf-43bb-9430-3c2a12e0b1a8')];
            case 1:
                response = _a.sent();
                console.log(response, 'Embedding rule deleted successfully');
                return [3 /*break*/, 3];
            case 2:
                err_61 = _a.sent();
                console.log('Error deleting Embedding rule:', err_61);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// deleteEmbeddingRule();
var updateEmbeddingRule = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_62;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.updateEmbeddingsRule({
                        GUID: '962dfbd8-a6bf-43bb-9430-3c2a12e0b1a8',
                        TenantGUID: '00000000-0000-0000-0000-000000000000',
                        BucketGUID: '00000000-0000-0000-0000-000000000000',
                        OwnerGUID: '00000000-0000-0000-0000-000000000000',
                        Name: 'Embeddings rule test ash updated',
                        ContentType: '*',
                        GraphRepositoryGUID: '00000000-0000-0000-0000-000000000000',
                        VectorRepositoryGUID: '00000000-0000-0000-0000-000000000000',
                        ProcessingEndpoint: 'http://localhost:8000/v1.0/tenants/00000000-0000-0000-0000-000000000000/processing',
                        ProcessingAccessKey: '***ault',
                        EmbeddingsServerUrl: 'http://nginx-processor:8000/v1.0/tenants/00000000-0000-0000-0000-000000000000/embeddings',
                        EmbeddingsServerApiKey: '***ault',
                        EmbeddingsGenerator: 'LCProxy',
                        EmbeddingsGeneratorUrl: 'http://localhost:8000/v1.0/tenants/00000000-0000-0000-0000-000000000000/embeddings',
                        EmbeddingsGeneratorApiKey: '',
                        BatchSize: 512,
                        MaxGeneratorTasks: 32,
                        MaxRetries: 3,
                        MaxFailures: 3,
                        VectorStoreUrl: 'http://localhost:8000/',
                        VectorStoreAccessKey: '***ault',
                        MaxContentLength: 16777216,
                        CreatedUtc: '2025-03-26T09:37:15.386Z',
                    })];
            case 1:
                response = _a.sent();
                console.log(response, 'Embedding rule updated successfully');
                return [3 /*break*/, 3];
            case 2:
                err_62 = _a.sent();
                console.log('Error updating Embedding rule:', err_62);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// updateEmbeddingRule();
var readAllEmbeddingRules = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_63;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveEmbeddingsRules()];
            case 1:
                response = _a.sent();
                console.log(response, 'All embedding rules fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_63 = _a.sent();
                console.log('Error fetching Embedding rules:', err_63);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// readAllEmbeddingRules();
var readEmbeddingRule = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_64;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveEmbeddingsRule('00000000-0000-0000-0000-000000000000')];
            case 1:
                response = _a.sent();
                console.log(response, 'Embedding rule fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_64 = _a.sent();
                console.log('Error fetching Embedding rule:', err_64);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// readEmbeddingRule();
var enumerateEmbeddingRules = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_65;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.enumerateEmbeddingsRules()];
            case 1:
                response = _a.sent();
                console.log(response, 'Embedding rules fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_65 = _a.sent();
                console.log('Error fetching Embedding rules:', err_65);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// enumerateEmbeddingRules();
var createEmbeddingRules = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_66;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.createEmbeddingsRule({
                        BucketGUID: '00000000-0000-0000-0000-000000000000',
                        Name: 'Embeddings rule test ash',
                        ContentType: '*',
                        GraphRepositoryGUID: '00000000-0000-0000-0000-000000000000',
                        VectorRepositoryGUID: '00000000-0000-0000-0000-000000000000',
                        ProcessingEndpoint: 'http://localhost:8000/v1.0/tenants/00000000-0000-0000-0000-000000000000/processing',
                        ProcessingAccessKey: 'default',
                        EmbeddingsGenerator: 'LCProxy',
                        EmbeddingsGeneratorUrl: 'http://localhost:8000/v1.0/tenants/00000000-0000-0000-0000-000000000000/embeddings',
                        EmbeddingsGeneratorApiKey: '',
                        BatchSize: 512,
                        MaxGeneratorTasks: 32,
                        MaxRetries: 3,
                        MaxFailures: 3,
                        VectorStoreUrl: 'http://localhost:8000/',
                        VectorStoreAccessKey: 'default',
                        MaxContentLength: 16777216,
                    })];
            case 1:
                response = _a.sent();
                console.log(response, 'Embedding rule created successfully');
                return [3 /*break*/, 3];
            case 2:
                err_66 = _a.sent();
                console.log('Error creating Embedding rule:', err_66);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// createEmbeddingRules();
var existsMetaDataRule = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_67;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.existsMetadataRule('ff0d2c7c-fc51-473a-8c7d-d2123e2d6492')];
            case 1:
                response = _a.sent();
                console.log(response, 'Metadata rule exists');
                return [3 /*break*/, 3];
            case 2:
                err_67 = _a.sent();
                console.log('Error checking Metadata rule:', err_67);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.existsMetaDataRule = existsMetaDataRule;
// existsMetaDataRule();
var deleteMetaDataRule = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_68;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.deleteMetadataRule('dfdee78e-3f48-4199-a27b-988b4fee04c9')];
            case 1:
                response = _a.sent();
                console.log(response, 'Metadata rule deleted successfully');
                return [3 /*break*/, 3];
            case 2:
                err_68 = _a.sent();
                console.log('Error deleting Metadata rule:', err_68);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteMetaDataRule = deleteMetaDataRule;
// deleteMetaDataRule();
var updateMetaDataRule = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_69;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.updateMetadataRule({
                        GUID: 'fc02c566-78d9-4f7b-82e5-5688b92e6cfe',
                        TenantGUID: '00000000-0000-0000-0000-000000000000',
                        BucketGUID: '00000000-0000-0000-0000-000000000000',
                        OwnerGUID: '00000000-0000-0000-0000-000000000000',
                        GraphRepositoryGUID: '00000000-0000-0000-0000-000000000000',
                        Name: 'example-metadata-rule-updated-from-sdk',
                        ContentType: '*',
                        MaxContentLength: 134217728,
                        ProcessingEndpoint: 'http://localhost:8000/v1.0/tenants/00000000-0000-0000-0000-000000000000/processing',
                        ProcessingAccessKey: 'default',
                        CleanupEndpoint: 'http://localhost:8000/v1.0/tenants/00000000-0000-0000-0000-000000000000/processing/cleanup',
                        CleanupAccessKey: 'default',
                        MinChunkContentLength: 2,
                        MaxChunkContentLength: 2048,
                        MaxTokensPerChunk: 1920,
                        ShiftSize: 256,
                        ImageTextExtraction: true,
                        TopTerms: 25,
                        CaseInsensitive: true,
                        IncludeFlattened: true,
                        DataCatalogEndpoint: 'http://localhost:8000/',
                        DataCatalogAccessKey: 'default',
                        DataCatalogType: 'Lexi',
                        DataCatalogCollection: '00000000-0000-0000-0000-000000000000',
                        CreatedUtc: '2025-03-25T12:19:28.976056Z',
                    })];
            case 1:
                response = _a.sent();
                console.log(response, 'Metadata rule updated successfully');
                return [3 /*break*/, 3];
            case 2:
                err_69 = _a.sent();
                console.log('Error updating Metadata rule:', err_69);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateMetaDataRule = updateMetaDataRule;
// updateMetaDataRule();
var getMetaDataRules = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_70;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveMetadataRules()];
            case 1:
                response = _a.sent();
                console.log(response, 'Metadata rules fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_70 = _a.sent();
                console.log('Error fetching Metadata rules:', err_70);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getMetaDataRules = getMetaDataRules;
// getMetaDataRules();
var getMetaDataRule = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_71;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveMetadataRule('00000000-0000-0000-0000-000000000000')];
            case 1:
                response = _a.sent();
                console.log(response, 'Metadata rule fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_71 = _a.sent();
                console.log('Error fetching Metadata rule:', err_71);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getMetaDataRule = getMetaDataRule;
// getMetaDataRule();
var enumerateMetaDataRules = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_72;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.enumerateMetadataRules()];
            case 1:
                response = _a.sent();
                console.log(response, 'Metadata rules fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_72 = _a.sent();
                console.log('Error fetching Metadata rules:', err_72);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.enumerateMetaDataRules = enumerateMetaDataRules;
// enumerateMetaDataRules();
var createMetaDataRules = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_73;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.createMetadataRule({
                        BucketGUID: '00000000-0000-0000-0000-000000000000',
                        Name: 'example-metadata-rule-ash',
                        ContentType: '*',
                        MaxContentLength: 134217728,
                        ProcessingEndpoint: 'http://localhost:8000/v1.0/tenants/00000000-0000-0000-0000-000000000000/processing',
                        ProcessingAccessKey: 'default',
                        CleanupEndpoint: 'http://localhost:8000/v1.0/tenants/00000000-0000-0000-0000-000000000000/processing/cleanup',
                        CleanupAccessKey: 'default',
                        MinChunkContentLength: 2,
                        MaxChunkContentLength: 2048,
                        MaxTokensPerChunk: 1920,
                        ShiftSize: 256,
                        TopTerms: 25,
                        CaseInsensitive: true,
                        IncludeFlattened: true,
                        DataCatalogEndpoint: 'http://localhost:8000/',
                        DataCatalogAccessKey: 'default',
                        DataCatalogType: 'Lexi',
                        DataCatalogCollection: '00000000-0000-0000-0000-000000000000',
                        GraphRepositoryGUID: '00000000-0000-0000-0000-000000000000',
                    })];
            case 1:
                response = _a.sent();
                console.log(response, 'Meta data rules created successfully');
                return [3 /*break*/, 3];
            case 2:
                err_73 = _a.sent();
                console.log('Error creating Meta data rules:', err_73);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createMetaDataRules = createMetaDataRules;
// createMetaDataRules();
var credentialExists = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_74;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.existsCredential('65bcfde5-76de-4866-9259-6698e935b894')];
            case 1:
                response = _a.sent();
                console.log(response, 'Credential exists');
                return [3 /*break*/, 3];
            case 2:
                err_74 = _a.sent();
                console.log('Error fetching Credential:', err_74);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.credentialExists = credentialExists;
// credentialExists();
var deleteCredential = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_75;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.deleteCredential('58051d5c-fb01-4e9a-83f7-f310b4449f15')];
            case 1:
                response = _a.sent();
                console.log(response, 'Credential deleted successfully');
                return [3 /*break*/, 3];
            case 2:
                err_75 = _a.sent();
                console.log('Error deleting Credential:', err_75);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteCredential = deleteCredential;
// deleteCredential();
var getAllCredentials = function () { return __awaiter(void 0, void 0, void 0, function () {
    var credentials, err_76;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveCredentials()];
            case 1:
                credentials = _a.sent();
                console.log(credentials, 'All credentials fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_76 = _a.sent();
                console.log('Error fetching Credentials:', err_76);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllCredentials = getAllCredentials;
// getAllCredentials();
var getCredential = function () { return __awaiter(void 0, void 0, void 0, function () {
    var credential, err_77;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveCredential('f734b815-c9ef-403a-8125-cfec4d405482')];
            case 1:
                credential = _a.sent();
                console.log(credential, 'Credential fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_77 = _a.sent();
                console.log('Error fetching Credential:', err_77);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getCredential = getCredential;
// getCredential();
var enumerateCredentials = function () { return __awaiter(void 0, void 0, void 0, function () {
    var credentials, err_78;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.enumerateCredentials()];
            case 1:
                credentials = _a.sent();
                console.log(credentials, 'Credentials fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_78 = _a.sent();
                console.log('Error fetching Credentials:', err_78);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.enumerateCredentials = enumerateCredentials;
// enumerateCredentials();
var createCredential = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_79;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.createCredential({
                        UserGUID: '9b7796bc-b36f-4e68-8cec-4ce98c9be7cd',
                        Name: 'Default credential',
                        Active: true,
                    })];
            case 1:
                response = _a.sent();
                console.log(response, 'Credential created successfully');
                return [3 /*break*/, 3];
            case 2:
                err_79 = _a.sent();
                console.log('Error creating Credential:', err_79);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createCredential = createCredential;
// createCredential();
var userExists = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_80;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.existsUser('9b7796bc-b36f-4e68-8cec-4ce98c9be7cd')];
            case 1:
                response = _a.sent();
                console.log(response, 'User exists');
                return [3 /*break*/, 3];
            case 2:
                err_80 = _a.sent();
                console.log('Error fetching User:', err_80);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.userExists = userExists;
// userExists();
var deleteUser = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_81;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.deleteUser('1522f272-c572-4419-88b5-f0a0d37dabf6')];
            case 1:
                response = _a.sent();
                console.log(response, 'User deleted successfully');
                return [3 /*break*/, 3];
            case 2:
                err_81 = _a.sent();
                console.log('Error deleting User:', err_81);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteUser = deleteUser;
// deleteUser();
var getUsers = function () { return __awaiter(void 0, void 0, void 0, function () {
    var users, err_82;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveUsers()];
            case 1:
                users = _a.sent();
                console.log(users, 'Users fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_82 = _a.sent();
                console.log('Error fetching Users:', err_82);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUsers = getUsers;
// getUsers();
var updateUser = function () { return __awaiter(void 0, void 0, void 0, function () {
    var user, err_83;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.updateUser('0a54349a-39d4-4756-960d-9d7b6af9435c', {
                        FirstName: 'New',
                        LastName: 'User',
                        Notes: 'Default password is password',
                        Email: 'new@user.com',
                        PasswordSha256: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
                    })];
            case 1:
                user = _a.sent();
                console.log(user, 'User updated successfully');
                return [3 /*break*/, 3];
            case 2:
                err_83 = _a.sent();
                console.log('Error updating User:', err_83);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateUser = updateUser;
// updateUser();
var getUser = function () { return __awaiter(void 0, void 0, void 0, function () {
    var user, err_84;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveUser('0a54349a-39d4-4756-960d-9d7b6af9435c')];
            case 1:
                user = _a.sent();
                console.log(user, 'User fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_84 = _a.sent();
                console.log('Error fetching User:', err_84);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUser = getUser;
// getUser();
var enumerateUsers = function () { return __awaiter(void 0, void 0, void 0, function () {
    var users, err_85;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.enumerateUsers()];
            case 1:
                users = _a.sent();
                console.log(users, 'Users fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_85 = _a.sent();
                console.log('Error fetching Users:', err_85);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.enumerateUsers = enumerateUsers;
// enumerateUsers();
var createUser = function () { return __awaiter(void 0, void 0, void 0, function () {
    var user, err_86;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.createUser({
                        FirstName: 'Ashish',
                        LastName: 'Patel',
                        Notes: 'Default password is password',
                        Email: 'ashish@user.com',
                        PasswordSha256: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
                    })];
            case 1:
                user = _a.sent();
                console.log(user, 'User created successfully');
                return [3 /*break*/, 3];
            case 2:
                err_86 = _a.sent();
                console.log('Error creating User:', err_86);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createUser = createUser;
// createUser();
var tenantExists = function () { return __awaiter(void 0, void 0, void 0, function () {
    var tenant, err_87;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.existsTenant('904a458b-8e62-4a8d-baa4-dae577245930')];
            case 1:
                tenant = _a.sent();
                console.log(tenant, 'Tenant exists'); //true
                return [3 /*break*/, 3];
            case 2:
                err_87 = _a.sent();
                console.log('Error fetching Tenant:', err_87);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.tenantExists = tenantExists;
// tenantExists();
var nodeExists = function () { return __awaiter(void 0, void 0, void 0, function () {
    var node, err_88;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.existsNode('33079aff-6421-4987-a80e-26c621f2aa24')];
            case 1:
                node = _a.sent();
                console.log(node, 'Node exists'); //true
                return [3 /*break*/, 3];
            case 2:
                err_88 = _a.sent();
                console.log('Error fetching Node:', err_88);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.nodeExists = nodeExists;
// nodeExists();
var enumerateNode = function () { return __awaiter(void 0, void 0, void 0, function () {
    var nodes, err_89;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.enumerateNodes(2)];
            case 1:
                nodes = _a.sent();
                console.log(nodes, 'Nodes fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_89 = _a.sent();
                console.log('Error fetching Nodes:', err_89);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.enumerateNode = enumerateNode;
// enumerateNode();
var enumerateTenant = function () { return __awaiter(void 0, void 0, void 0, function () {
    var tenants, err_90;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.enumerateTenants()];
            case 1:
                tenants = _a.sent();
                console.log(tenants, 'Tenants fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_90 = _a.sent();
                console.log('Error fetching Tenants:', err_90);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.enumerateTenant = enumerateTenant;
// enumerateTenant();
var deleteNode = function () { return __awaiter(void 0, void 0, void 0, function () {
    var err_91;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.deleteNode('a46fa027-1b89-4250-996e-d7c5c0c82ca3', 'mXCNtMWDsW0/pr+IwRFUjRIMUbQt3q8fPhMkZy/hqGcOngKCn7Y2ECkUnzAbBrPgPCdPA3ASJRxnKBByHm4Wx7hBS0IXrS5TbP72dmcD8YuuIc/xD/acvVvhqcFokjkTXY/em8FEA14OsxTPHcBmT3bo2rBv6/scgUffg7EsmN5+n9J18PTV9ZeM+1sKbkVq/uqd/VNUkPCr2K+7/IJEcujnChGW4xoHvjvjMcaNuEoYgHkzjpyOqhUibQXgMTacgfmHEwyOiTyKTZDjGhMqmgbojWvXeyATJspRnTMgsMbBtpu9Es6HT719uq8p0Lfv')];
            case 1:
                _a.sent();
                console.log('Node deleted successfully');
                return [3 /*break*/, 3];
            case 2:
                err_91 = _a.sent();
                console.log('Error deleting Node:', err_91);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// deleteNode();
var getNode = function () { return __awaiter(void 0, void 0, void 0, function () {
    var nodes, err_92;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveNode('33079aff-6421-4987-a80e-26c621f2aa24')];
            case 1:
                nodes = _a.sent();
                console.log(nodes, 'Nodes fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_92 = _a.sent();
                console.log('Error fetching Nodes:', err_92);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// getNode();
var getNodes = function () { return __awaiter(void 0, void 0, void 0, function () {
    var nodes, err_93;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveNodes()];
            case 1:
                nodes = _a.sent();
                console.log(nodes, 'Nodes fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_93 = _a.sent();
                console.log('Error fetching Nodes:', err_93);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// getNodes();
var fetchTenant = function () { return __awaiter(void 0, void 0, void 0, function () {
    var tenants, err_94;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveTenants()];
            case 1:
                tenants = _a.sent();
                console.log(tenants, 'Tenant fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_94 = _a.sent();
                console.log('Error fetching Tenant:', err_94);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// fetchTenant();
var updateTenant = function () { return __awaiter(void 0, void 0, void 0, function () {
    var tenant, updatedTenant, err_95;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                tenant = {
                    GUID: '904a458b-8e62-4a8d-baa4-dae577245930',
                    parentGUID: null,
                    name: 'My tenant demo updated now',
                    region: 'us-west-1',
                    s3BaseDomain: '',
                    restBaseDomain: 'localhost',
                    defaultPoolGUID: 'df6c9117-a1ea-44ca-bddc-fa7a3d932fe9',
                    active: true,
                    createdUtc: '2025-03-25T08:49:01.577527Z',
                    accountGUID: 'e6c5dd52-cb13-47c0-839c-6c5281f05075',
                    isProtected: false,
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, api.updateTenant('904a458b-8e62-4a8d-baa4-dae577245930', // tenant guid
                    tenant)];
            case 2:
                updatedTenant = _a.sent();
                console.log(updatedTenant, 'Tenant updated successfully');
                return [3 /*break*/, 4];
            case 3:
                err_95 = _a.sent();
                console.log('Error updating Tenant:', err_95);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
// updateTenant();
var deleteTenant = function () { return __awaiter(void 0, void 0, void 0, function () {
    var err_96;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.deleteTenant('3b681727-f9a0-4904-ad9a-223b8101d2f4')];
            case 1:
                _a.sent();
                console.log('Tenant deleted successfully');
                return [3 /*break*/, 3];
            case 2:
                err_96 = _a.sent();
                console.log('Error deleting Tenant:', err_96);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// deleteTenant();
var enumerateTenants = function () { return __awaiter(void 0, void 0, void 0, function () {
    var tenants, err_97;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.enumerateTenants()];
            case 1:
                tenants = _a.sent();
                console.log(tenants, 'Tenants fetched successfully');
                return [3 /*break*/, 3];
            case 2:
                err_97 = _a.sent();
                console.log('Error fetching Tenants:', err_97);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// enumerateTenants();
var createTenant = function () { return __awaiter(void 0, void 0, void 0, function () {
    var createdTenant, err_98;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.writeTenant({
                        Name: 'My tenant demo',
                        Region: 'us-west-1',
                        S3BaseDomain: 'localhost',
                        RestBaseDomain: 'localhost',
                        DefaultPoolGUID: 'df6c9117-a1ea-44ca-bddc-fa7a3d932fe9',
                    })];
            case 1:
                createdTenant = _a.sent();
                console.log(createdTenant, 'Tenant created successfully');
                return [3 /*break*/, 3];
            case 2:
                err_98 = _a.sent();
                console.log('Error creating Tenant:', err_98);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// createTenant();
var retrieveTenantById = function () { return __awaiter(void 0, void 0, void 0, function () {
    var tenant, err_99;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.retrieveTenant('00000000-0000-0000-0000-000000000000')];
            case 1:
                tenant = _a.sent();
                console.log(tenant);
                return [3 /*break*/, 3];
            case 2:
                err_99 = _a.sent();
                console.log('err: ', err_99);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// retrieveTenantById();
