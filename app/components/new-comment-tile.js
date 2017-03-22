import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment() {
      var params = {
        comment: this.get('comment'),
        article: this.get('model')
      };
      this.sendAction('saveComment', params);
    }
  }
});
