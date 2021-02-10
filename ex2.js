//Event-Driven Architecture

// Require in the 'events' core module
const events = require("events");

const listenerCallback = (data) => {
  console.log("Celebrate " + data);
};

// Create an instance of the EventEmitter class
const myEmitter = new events.EventEmitter();

// Assign the myEmitter function as the listener callback
myEmitter.on("celebration", listenerCallback);

//Emit a new event
myEmitter.emit("celebration", "pierogi");
