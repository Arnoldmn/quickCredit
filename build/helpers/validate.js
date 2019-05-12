"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var validateSignup = function validateSignup(user) {
  var schema = _joi["default"].object().keys({
    email: _joi["default"].string().regex(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/).email().trim(),
    firstname: _joi["default"].string().regex(/^[A-Z]+$/).trim().required(),
    lastname: _joi["default"].string().regex(/^[A-Z]+$/).trim().required(),
    address: _joi["default"].string().trim().required(),
    password: _joi["default"].string().regex(/^[A-Z]+$/).trim().min(6).max(30).required(),
    isAdmin: _joi["default"]["boolean"].trim().required()
  });

  return _joi["default"].validate(user, schema);
};

var validateLogin = function validateLogin(user) {
  var schema = _joi["default"].object().keys({
    email: _joi["default"].string().regex(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/).email().trim(),
    password: _joi["default"].string().regex(/^[a-zA-Z0-9]{3,30}$/).trim().required()
  });

  return _joi["default"].validate(user, schema);
};

var validateLoan = function validateLoan(loan) {
  var schema = _joi["default"].object.keys({
    loanType: _joi["default"].string().trim().required(),
    tenor: _joi["default"].number().integer().min(1).max(12).required(),
    amount: _joi["default"].number().required()
  });

  return _joi["default"].validate(loan, schema);
};

var loanApprovalValidate = function loanApprovalValidate(loan) {
  var schema = _joi["default"].object().keys({
    status: _joi["default"].string().insensitive().valid("Approved", "Rejected").required()
  });

  return _joi["default"].validate(loan, schema);
};

var _default = {
  validateLoan: validateLoan,
  validateLogin: validateLogin,
  validateSignup: validateSignup,
  loanApprovalValidate: loanApprovalValidate
};
exports["default"] = _default;