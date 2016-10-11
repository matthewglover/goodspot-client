const hapiWrapper = require('@matthewglover/hapi-wrapper');
const Boom = require('boom');

const port = process.env.PORT || 4000;
const connectionOptions = { port };

const routes = [
  {
    method: 'GET',
    path: '/{params*}',
    handler: (req, reply) => {
      reply.file('public/index.html');
    },
  },
  {
    method: 'GET',
    path: '/public/index.html',
    handler: (req, reply) => reply(Boom.notFound()),
  },
];

const routeOptions = { path: '/public/{param*}' };

hapiWrapper.createServer()
  .then(hapiWrapper.setConnection(connectionOptions))
  .then(hapiWrapper.addRoutes(routes, routeOptions))
  .then(hapiWrapper.startServer)
  /* eslint-disable no-console */
  .then(server => console.log(`Server running at: ${server.info.uri}`))
  .catch(err => console.log(err));
  /* eslint-enable */
