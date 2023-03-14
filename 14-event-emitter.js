const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response',(name,id,city)=>{
    console.log(`data received user ${name} with id: ${id} from ${city}`);
});
customEmitter.on('response',()=>{
    console.log('some other logic');
});

customEmitter.emit('response','Umar',21,'Gujranwala');
