const Dispatcher = require('./demo/events').Dispatcher;
const chalk = require('chalk');
const data = require('./data');
const EventEmitter = require('events');

const dispatcher = new Dispatcher(); 

dispatcher.disp('anything', {c:2});