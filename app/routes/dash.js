import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll("article");
  },
  actions: {
    saveArticle(params) {
      var newBlog = this.store.createRecord('article', params);
      newBlog.save();
      this.transitionTo('dash');
    }
  }
});
