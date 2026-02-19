"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIsLegacyInterfaceArray = void 0;
/**
 * Determines if the given interfaces payload array is of legacy interface type
 * or of the new Linode Interface type
 * @param interfaces the interfaces to confirm
 * @returns if interfaces is type InterfacePayload
 *
 * @TODO Linode Interfaces - may need to update some logic to depend on Account Settings for Interfaces soon
 * For now, an undefined/empty interfaces array will return true to match existing behavior
 */
var getIsLegacyInterfaceArray = function (interfaces) {
    return (interfaces === undefined ||
        interfaces.length === 0 ||
        interfaces.some(function (iface) { return 'purpose' in iface; }));
};
exports.getIsLegacyInterfaceArray = getIsLegacyInterfaceArray;
