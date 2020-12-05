const dispatcher = require('./demo/events').dispatcher;
const chalk = require('chalk');
const data = require('./data');
const EventEmitter = require('events');

dispatcher.disp('anything', {c:2});