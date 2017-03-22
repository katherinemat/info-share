import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveBlog(params) {
      this.sendAction('saveBlog', params);
    }
  }
});
