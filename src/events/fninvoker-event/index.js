const arc = require("@architect/functions");
const fetch = require("node-fetch");

exports.handler = arc.events.subscribe(async function fninvokerEvent(event) {
  console.log("invoking:", event);

  await fetch(event.url, {
    method: "POST",
    body: JSON.stringify(event.payload),
    headers: { "Content-Type": "application/json" },
  });

  console.log("successfully invoked:", event.url);
});
