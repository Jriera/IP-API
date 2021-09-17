'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
      return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const fs_1 = __importDefault(require('fs'));
/**
 * @param filePath : string
 * @description checks for the duration of 1 second
 * for the existence of a file
 */
const watchFile = (filePath) => {
    const watchStartTime = Date.now();
    while (!fs_1.default.existsSync(filePath)) {
        if (Date.now() - watchStartTime > 1) {
            return false;
        }
    }
    return true;
};
exports.default = watchFile;
