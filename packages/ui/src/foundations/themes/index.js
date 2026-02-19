"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dark = exports.light = void 0;
var styles_1 = require("@mui/material/styles");
var utils_1 = require("@mui/utils");
// Themes & Brands
var dark_1 = require("./dark");
var light_1 = require("./light");
exports.light = (0, styles_1.createTheme)(light_1.lightTheme);
exports.dark = (0, styles_1.createTheme)((0, utils_1.deepmerge)(light_1.lightTheme, dark_1.darkTheme));
