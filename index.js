'use strict';

const escapeChars = {
    "&": "&amp;",
    "'": "&#39;",
    '"': "&quot;",
    "<": "&lt;",
    ">": "&gt;"
};

const escapeString = (str) => {
    for (let key in escapeChars) {
        let reg = new RegExp(key, "g");
        str = str.replace(reg, escapeChars[key]);
    }
    return str;
};

const unescapeString = (str) => {
    for (let key in escapeChars) {
        let reg = new RegExp(escapeChars[key], "g");
        str = str.replace(reg, key);
    }
    return str;
};

const handleEscapeObject = (obj, fn) => {
    for (let [key, value] of Object.entries(obj)) {
        if (typeof value === "string") {
            value = fn(value)
        } else {
            handleEscapeObject(value);
        }
    }
    return obj;
};

const escapeObject = (obj) => {
    return handleEscapeObject(obj, escapeString);
};

const unescapeObject = (obj) => {
    return handleEscapeObject(obj, unescapeString);
};

export {
    escapeString,
    unescapeString,
    escapeObject,
    unescapeObject
};