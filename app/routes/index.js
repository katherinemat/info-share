import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      articles: this.store.query("article", {
        limitToLast: 5
      }).then(function(results) {
        return results.toArray().reverse();
      }),
      categories: this.store.findAll("category")
    });
  }
});
