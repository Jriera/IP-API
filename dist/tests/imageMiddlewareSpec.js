"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const fs_1 = __importDefault(require("fs"));
const __1 = __importDefault(require(".."));
describe('It checks a file is resized and saved', () => {
    it('should render an image at the endpoint', async () => {
        const appResponse = await (0, supertest_1.default)(__1.default).get('/api').query({ filename: 'test', height: '100', width: '66' });
        expect(appResponse.type).toBe('image/jpeg');
    });
    it('should find an image stored', async () => {
        const appResponse = await (0, supertest_1.default)(__1.default).get('/api').query({ filename: 'test', height: '100', width: '66' });
        const exists = fs_1.default.existsSync('./assets/thumbnails/test 66x100.jpg');
        expect(exists).toBe(true);
        fs_1.default.unlinkSync('./assets/thumbnails/test 66x100.jpg');
    });
});
