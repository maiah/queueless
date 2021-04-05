const arc = require("@architect/functions");

exports.handler = async function http(req) {
  const name = "fninvoker-event";
  const payload = arc.http.helpers.bodyParser(req);

  await arc.events.publish({ name, payload });

  return {
    statusCode: 201,
  };
};
