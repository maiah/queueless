@app
node-events

@aws
region ap-southeast-1

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
