"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lengthErrorMessage = exports.ERROR_MESSAGES = void 0;
exports.ERROR_MESSAGES = {
    descriptionLength: (minLength) => `La description doit comporter au moins ${minLength} caractères`,
    nameLength: (minLength, maxLength) => `Le nom doit comporter entre ${minLength} et ${maxLength} caractères`,
};
const lengthErrorMessage = (field, minLength, maxLength) => {
    if (maxLength) {
        return exports.ERROR_MESSAGES.nameLength(minLength, maxLength);
    }
    return exports.ERROR_MESSAGES.descriptionLength(minLength);
};
exports.lengthErrorMessage = lengthErrorMessage;
//# sourceMappingURL=error-messages.js.map