import Ember from 'ember';
import initialize from 'ember-cli-segment/initializer';

let application;

module('segmentInitializer', {
  setup: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

test('it works', function() {
  initialize(application);
  ok(true);
});
