'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
      return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const routes_1 = __importDefault(require('./routes'));
const app = (0, express_1.default)();
const port = 3000;
//endpoint set up using a route
app.use('/api', routes_1.default);
app.use(express_1.default.static('Public'));
//server initilize on port 3000;
app.listen(port, () => {
    console.log(`server running on localhost:${port}`);
});
