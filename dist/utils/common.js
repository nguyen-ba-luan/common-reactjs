"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEqualWithoutNil = exports.arrayToJson = exports.getUniqueListBy = exports.insertObjectIfElse = exports.insertObjectIf = exports.formatToken = exports.findIndex = exports.filter = exports.map = void 0;
const ramda_adjunct_1 = require("ramda-adjunct");
const isNil_1 = __importDefault(require("ramda/src/isNil"));
const isEqual_1 = __importDefault(require("lodash/isEqual"));
const map = (input, callback) => {
    if (!Array.isArray(input))
        return [];
    return input === null || input === void 0 ? void 0 : input.map(callback);
};
exports.map = map;
const filter = (input, callback) => {
    if (!Array.isArray(input))
        return [];
    return input.filter(callback);
};
exports.filter = filter;
const findIndex = (input, compareFunc) => {
    if (!Array.isArray(input))
        return -1;
    return input === null || input === void 0 ? void 0 : input.findIndex(compareFunc);
};
exports.findIndex = findIndex;
const formatToken = (token) => `Bearer ${token !== null && token !== void 0 ? token : ""}`;
exports.formatToken = formatToken;
const insertObjectIf = (condition, elements) => {
    return condition ? elements : {};
};
exports.insertObjectIf = insertObjectIf;
const insertObjectIfElse = (condition, elements1, elements2) => {
    return condition ? elements1 : elements2;
};
exports.insertObjectIfElse = insertObjectIfElse;
const getUniqueListBy = (array, key = "id") => {
    try {
        return [
            // @ts-ignore
            ...new Map((array !== null && array !== void 0 ? array : []).map((item) => [item[key], item])).values(),
        ];
    }
    catch (_a) {
        return [];
    }
};
exports.getUniqueListBy = getUniqueListBy;
const arrayToJson = (array = [], key = "id") => {
    try {
        if ((0, ramda_adjunct_1.isNilOrEmpty)(array))
            return {};
        const result = {};
        for (const item of array) {
            // @ts-ignore
            result[item[key]] = item;
        }
        return result;
    }
    catch (_a) {
        return {};
    }
};
exports.arrayToJson = arrayToJson;
const isEqualWithoutNil = (value, other) => !(0, isNil_1.default)(value) && (0, isEqual_1.default)(value, other);
exports.isEqualWithoutNil = isEqualWithoutNil;
//# sourceMappingURL=common.js.map