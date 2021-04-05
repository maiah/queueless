const arc = require("@architect/functions");

exports.handler = async function http(req) {
  const payload = arc.http.helpers.bodyParser(req);
  console.log(`===== got job`, payload);

  return {
    statusCode: 200,
    headers: {
      "content-type": "application/json; charset=utf8",
      "cache-control":
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
    },
    body: JSON.stringify({
      message: "Hello from your Begin worker!",
    }),
  };
};
