var fast = require('../lib'),
    underscore = require('underscore'),
    lodash = require('lodash'),
    history = require('../test/history');

var input = [1,2,3,4,5,6,7,8,9,10];
var mapper = function (item) { return item * item; };

exports['Array::map()'] = function () {
  input.map(mapper);
};

exports['fast.map()'] = function () {
  fast.map(input, mapper);
};

exports['fast.map() v0.0.1'] = function () {
  history.map_0_0_1(input, mapper);
};

exports['fast.map() v0.0.0'] = function () {
  history.map_0_0_0(input, mapper);
};


exports['underscore.map()'] = function () {
  underscore.map(input, mapper);
};

exports['lodash.map()'] = function () {
  lodash.map(input, mapper);
};
