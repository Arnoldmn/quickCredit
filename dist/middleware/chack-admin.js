"use strict";

var jwt = require('jsonwebtoken');

var isAdmin = require('./helper/checkAdmin');

module.exports = function (req, res, next) {
  try {
    var token = req.headers.authorization.split(' ')[1];
    var adminData = jwt.verify(token, 'superscretkey');
    if (isAdmin(adminData.isAdmin)) return next();
    return res.json({
      status: 404,
      error: 'You are not an admin'
    });
  } catch (error) {
    res.json({
      status: 404,
      error: "".concat(error, ", Athentication fail")
    });
  }
};