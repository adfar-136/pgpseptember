const EventEmiiter = require("events")
const myEmitter = new EventEmiiter()
const listener1 = ()=> console.log("Listener 1 executed");
const listener2 = ()=>console.log("Listener 2 executed")

myEmitter.on("testEvent",listener1);
myEmitter.on("testEvent",listener2);

// var count = myEmitter.listenerCount('testEvent')
myEmitter.emit("testEvent")

// console.log(count);
// console.log("Listeners : ", myEmitter.listeners("testEvent"))
// myEmitter.removeListener("testEvent",listener1)
myEmitter.removeAllListeners("testEvent")

myEmitter.emit("testEvent")

