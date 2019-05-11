"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _user = _interopRequireDefault(require("./routes/user"));

var _loan = _interopRequireDefault(require("./routes/loan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
var PORT = process.env.PORT || 4000;
app.use(_user["default"]);
app.use(_loan["default"]);
app.use((0, _bodyParser.json)()); // app.use(router)

app.listen(PORT, function () {
  // eslint-disable-next-line no-console
  console.log("App running on ".concat(PORT));
});
var _default = app;
exports["default"] = _default;