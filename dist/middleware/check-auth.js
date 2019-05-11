"use strict";

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// eslint-disable-next-line consistent-return
exports = function exports(req, res, next) {
  try {
    var token = req.headers.authorization.split(' ')[1];

    var decoded = _jsonwebtoken["default"].verify(token, process.env.JWT_KEY);

    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Authentication failed'
    });
  }
};