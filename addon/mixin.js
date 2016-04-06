import Ember from 'ember';

export default Ember.Mixin.create({
  hasAnalytics: function() {
    return !!(window.analytics && typeof window.analytics === "object");
  },

  log: function() {
    if(this.config && this.config.segment && this.config.segment.LOG_EVENT_TRACKING) {
      Ember.Logger.info('[Segment.io] ', arguments);
    }
  },

  trackPageView: function() {
    if (this.hasAnalytics()) {
      window.analytics.page.apply(this, arguments);

      this.log('trackPageView', arguments);
    }
  },

  trackEvent: function(event, properties, options, callback) {
    if(this.hasAnalytics()) {
      window.analytics.track(event, properties, options, callback);
      this.log(event, properties, options);
    }
  },

  identifyUser: function(userId, traits, options, callback) {
    if(this.hasAnalytics()) {
      window.analytics.identify(userId, traits, options, callback);
      this.log('identifyUser', traits, options);
    }
  },

  group: function(groupId, traits, options, callback) {
    if(this.hasAnalytics()) {
      window.analytics.group(groupId, traits, options, callback);
      this.log('group', traits, options);
    }
  },

  aliasUser: function(userId, previousId, options, callback) {
    if(this.hasAnalytics()) {
      window.analytics.alias(userId, previousId, options, callback);
      this.log('aliasUser', previousId, options);
    }
  }
});
