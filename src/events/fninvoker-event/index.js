const arc = require("@architect/functions");
const axios = require("axios");

exports.handler = arc.events.subscribe(async function fninvokerEvent(event) {
  console.log("invoking:", event.url);
  console.log("parsing:", JSON.parse(event.url));
  await axios.post(event.url, event.payload);
  console.log("successfully invoked:", event.url);
});
