import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      articles: this.store.findAll("article"),
      categories: this.store.findAll("category"),
      category: this.store.findRecord('category', params.category_id)
    });
  },
});
