"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const {
  startApp,
  initRoutes
} = require('idio');

const {
  resolve
} = require('path');

const routesDir = resolve(__dirname, 'routes');
const DATABASE_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/idio';
const PORT = process.env.PORT || 5000;
const {
  env: {
    NODE_ENV
  }
} = process;
const production = NODE_ENV == 'production';

var _default = async (config = {}, initRoutesConfig = {}) => {
  const res = await startApp(_objectSpread({
    databaseURL: DATABASE_URL,
    // autoConnect: false,
    port: PORT,
    middleware: {
      logger: {
        use: !production
      },
      compress: {
        use: true
      },
      koa2Jsx: {
        wireframe: true,
        use: true
      }
    }
  }, config));
  const {
    url,
    app,
    router
  } = res;
  await initRoutes(routesDir, router, _objectSpread({
    defaultImports: true,
    aliases: {
      get: {
        '/index': ['/']
      }
    },
    middleware: {},
    watch: !production
  }, initRoutesConfig));
  const routes = router.routes();
  app.use(routes);
  return {
    app,
    url
  };
};

exports.default = _default;