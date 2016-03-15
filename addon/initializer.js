import Ember from 'ember';
import segmentMixin from './mixin';

export default function initialize() {
  let application = arguments[1] || arguments[0];

  let segment = Ember.Object.extend(segmentMixin);

  application.register('service:segment', segment, { singleton: true });
  application.inject('route', 'segment', 'service:segment');
  application.inject('router', 'segment', 'service:segment');
  application.inject('controller', 'segment', 'service:segment');
}
