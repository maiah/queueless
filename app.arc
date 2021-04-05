@app
node-events

@http
post /my-event
post /publish
post /worker

@static

@events
my-event
fninvoker-event

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
