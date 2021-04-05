const arc = require("@architect/functions");

async function fninvokerEvent(event) {
  console.log("===== trying to invoke:", event);
}

exports.handler = arc.events.subscribe(fninvokerEvent);
