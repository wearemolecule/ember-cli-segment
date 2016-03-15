import Ember from 'ember';
import startApp from '../helpers/start-app';

var application;
var sinon = window.sinon;
window.analytics = {
  page: function() {},
  track: function() {},
  identify: function() {},
  alias: function() {},
};

module('Acceptance: Router', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
    sinon.restore(window.analytics);
  }
});

test('should trigger page and identify when visiting /', function(assert) {
  sinon.spy(window.analytics, 'page');
  sinon.spy(window.analytics, 'identify');

  visit('/');

  andThen(function() {
    assert.ok(window.analytics.page.called);
    assert.ok(window.analytics.identify.calledWith(1, { name: 'Josemar Luedke' }));
  });
});

test('should trigger page and identify when clicking page-1', function(assert) {
  sinon.spy(window.analytics, 'page');
  sinon.spy(window.analytics, 'identify');
  visit('/');
  click('.page-1');

  andThen(function() {
    assert.ok(window.analytics.page.called);
    assert.ok(window.analytics.identify.calledWith(1, { name: 'Josemar Luedke' }));
  });
});

test('should trigger page and identify when clicking page-2', function(assert) {
  sinon.spy(window.analytics, 'page');
  sinon.spy(window.analytics, 'identify');
  visit('/');
  click('.page-2');

  andThen(function() {
    assert.ok(window.analytics.page.called);
    assert.ok(window.analytics.identify.calledWith(1, { name: 'Josemar Luedke' }));
  });
});

test('should trigger page and identify when clicking index', function(assert) {
  sinon.spy(window.analytics, 'page');
  sinon.spy(window.analytics, 'identify');
  visit('/');
  click('.index');

  andThen(function() {
    assert.ok(window.analytics.page.called);
    assert.ok(window.analytics.identify.calledWith(1, { name: 'Josemar Luedke' }));
  });
});

test('should not trigger analytics.identify when visiting /', function(assert) {
  application.__container__.lookup('route:application').set('identifyUser', null);

  sinon.spy(window.analytics, 'identify');
  visit('/');

  andThen(function() {
    assert.ok(!window.analytics.identify.called);
  });
});
