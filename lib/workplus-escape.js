/*!
 * @w6s/escape.js v1.0.2
 * (c) 2019 Hejx
 * Released under the MIT License.
 * https://github.com/WorkPlusFE/escape#readme
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.workplusEscape = global.workplusEscape || {})));
}(this, (function (exports) { 'use strict';

var escapeChars = {
    "&": "&amp;",
    "'": "&#39;",
    '"': "&quot;",
    "<": "&lt;",
    ">": "&gt;"
};

var escapeString = function escapeString(str) {
    for (var key in escapeChars) {
        var reg = new RegExp(key, "g");
        str = str.replace(reg, escapeChars[key]);
    }
    return str;
};

var unescapeString = function unescapeString(str) {
    for (var key in escapeChars) {
        var reg = new RegExp(escapeChars[key], "g");
        str = str.replace(reg, key);
    }
    return str;
};

var handleEscapeObject = function handleEscapeObject(obj, fn) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === "string") {
                obj[key] = fn(obj[key]);
            } else {
                handleEscapeObject(obj[key], fn);
            }
        }
    }
    return obj;
};

var escapeObject = function escapeObject(obj) {
    return handleEscapeObject(obj, escapeString);
};

var unescapeObject = function unescapeObject(obj) {
    return handleEscapeObject(obj, unescapeString);
};

exports.escapeString = escapeString;
exports.unescapeString = unescapeString;
exports.escapeObject = escapeObject;
exports.unescapeObject = unescapeObject;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=workplus-escape.js.map
