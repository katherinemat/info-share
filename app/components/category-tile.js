import Ember from 'ember';

export default Ember.Component.extend({
  action: {
    saveArticle(params) {
      this.sendAction("saveArticle", params);
    }
  }
});
