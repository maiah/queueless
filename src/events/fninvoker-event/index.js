const arc = require("@architect/functions");
const fetch = require("node-fetch");

async function fninvokerEvent(event) {
  console.log("===== trying to invoke:", event);

  const response = await fetch(event.url, {
    method: "POST",
    body: JSON.stringify(event),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();

  console.log("===== worker result:", data);
}

exports.handler = arc.events.subscribe(fninvokerEvent);
