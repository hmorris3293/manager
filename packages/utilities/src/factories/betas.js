"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountBetaFactory = exports.betaFactory = void 0;
var luxon_1 = require("luxon");
var factoryProxy_1 = require("./factoryProxy");
exports.betaFactory = factoryProxy_1.Factory.Sync.makeFactory({
    description: 'Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat.',
    id: factoryProxy_1.Factory.each(function (i) { return "beta-".concat(i); }),
    label: factoryProxy_1.Factory.each(function (i) { return "Beta ".concat(i); }),
    started: luxon_1.DateTime.now().toISO(),
});
exports.accountBetaFactory = factoryProxy_1.Factory.Sync.makeFactory({
    description: 'Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat.',
    ended: null,
    enrolled: luxon_1.DateTime.now().toISO(),
    id: factoryProxy_1.Factory.each(function (i) { return "beta-".concat(i); }),
    label: factoryProxy_1.Factory.each(function (i) { return "Account Beta ".concat(i); }),
    started: luxon_1.DateTime.now().toISO(),
});
