'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var PORT = process.env.PORT || 4000;

app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({ extended: true }));

app.get('/', function (res, req) {
    return res.status(200).send({
        message: 'Well done champ your first endpoint is working.'
    });
});

app.listen(PORT, function () {
    console.log('App running on ' + PORT);
});

exports.default = app;