import initialize from 'ember-cli-segment/instance-initializer';
import config from '../config/environment';

export default {
  name: 'segment',

  initialize: function(application) {
    let segment = application.lookup('service:segment');

    segment.set('config', config);

    initialize(...arguments);
  }
};
