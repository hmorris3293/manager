"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripImageName = void 0;
var stripImageName = function (images) {
    return images.reduce(function (acc, image) {
        if (image) {
            acc.push(image.replace('linode/', ''));
        }
        return acc;
    }, []);
};
exports.stripImageName = stripImageName;
