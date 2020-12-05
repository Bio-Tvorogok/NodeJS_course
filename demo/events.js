const EventEmitter = require('events');
const emitter = new EventEmitter();


class Dispatcher extends EventEmitter {
    sub(eventName, callback) {
        const me = this;
        console.log('[Sub...]');
        me.on(eventName, callback);
    }

    disp(eventName, data) {
        const me = this;
        console.log('[Disp...]');
        me.emit(eventName, data);
    }
}

const dispatcher = new Dispatcher();

dispatcher.sub('anything', data => {
    console.log(data);
});

module.exports = { 
    Dispatcher: Dispatcher,
    EventEmitter: EventEmitter,
    dispatcher: dispatcher
};

// emitter.emit('anything', {c:2});