import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('article', params.article_id);
  },
  actions: {
    update(article) {
      var params = {
                title: this.get('title'),
                author: this.get('author'),
                date: this.get('date'),
                image: this.get('image'),
                article: this.get('article'),
            };
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          article.set(key,params[key]);
        }
      });
      article.save();
      this.transitionTo('dash');
    },
  }
});
