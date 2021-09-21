"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const __1 = __importDefault(require(".."));
const coder = async (endpoint) => {
    const appResponse = await (0, supertest_1.default)(__1.default).get(endpoint);
    const code = appResponse.statusCode;
    return code;
};
describe('Confirm that server and endpoint are reachable', () => {
    it('checks if the server is up', async () => {
        expect(await coder('/')).toEqual(200);
    });
    it('checks the endpoint is up', async () => {
        expect(await coder('/api')).toEqual(200);
    });
});
