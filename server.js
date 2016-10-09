const hapiWrapper = require('@matthewglover/hapi-wrapper');

const port = process.env.PORT || 4000;
const connectionOptions = { port };
const plugins = [];
const routes = [];

hapiWrapper.createServer()
  .then(hapiWrapper.setConnection(connectionOptions))
  .then(hapiWrapper.registerPlugins(plugins))
  .then(hapiWrapper.addRoutes(routes))
  .then(hapiWrapper.startServer)
  /* eslint-disable no-console */
  .then(server => console.log(`Server running at: ${server.info.uri}`))
  .catch(err => console.log(err));
  /* eslint-enable */
