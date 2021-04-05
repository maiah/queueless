const arc = require("@architect/functions");
const axios = require("axios");

exports.handler = arc.events.subscribe(async function fninvokerEvent(event) {
  console.log("invoking:", event);
  console.log("typeof:", typeof event);

  const ev = JSON.parse(event);
  console.log("parsing:", ev);

  await axios.post(ev.url, ev.payload);
  console.log("successfully invoked:", ev.url);
});
