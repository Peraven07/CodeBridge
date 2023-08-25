// Initializes the `contactus` service on path `/contactus`
const { Contactus } = require('./contactus.class');
const createModel = require('../../models/contactus.model');
const hooks = require('./contactus.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/contactus', new Contactus(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('contactus');

  service.hooks(hooks);
};
