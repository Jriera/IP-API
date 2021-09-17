'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
      function adopt(value) {
          return value instanceof P
              ? value
              : new P(function (resolve) {
                  resolve(value);
              });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
              try {
                  step(generator.next(value));
              } catch (e) {
                  reject(e);
              }
          }

          function rejected(value) {
              try {
                  step(generator['throw'](value));
              } catch (e) {
                  reject(e);
              }
          }

          function step(result) {
              result.done
                  ? resolve(result.value)
                  : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
Object.defineProperty(exports, '__esModule', {
    value: true,
});
const sharp = require('sharp');
/**
 * @description Function that resizes an input image and outputs it
 * with the dimensions specified in the parameters
 * @param inFile This is the name of the input image
 * @param widthValue This is the final width of the input image
 * @param heightValue This is the final height if the input image
 * @param outFile This is the path (and name) of the transformed image
 */
const resizeImage = (inFile, widthValue, heightValue, outFile) =>
    __awaiter(void 0, void 0, void 0, function* () {
        sharp(`assets/images/${inFile}`)
            .resize({
                width: widthValue,
                height: heightValue,
            })
            .jpeg()
            .toFile(outFile, (err, info) => {
                console.log(info);
                console.log(err);
            });
    });
exports.default = resizeImage;
