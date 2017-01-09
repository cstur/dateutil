'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _core = require('./core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ST() {}

ST.prototype.c = _core2.default;

if (typeof window !== 'undefined') {
	window.ST = ST;
}

exports.default = ST;