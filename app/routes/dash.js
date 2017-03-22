import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      articles: this.store.findAll("article"),
      categories: this.store.findAll('category')
    })
  },
  actions: {
    saveBlog(params) {
      var newBlog = this.store.createRecord('article', params);
      var category = params.category;
      category.get('articles').addObject(newBlog);
      newBlog.save().then(function(){
        return category.save();
      })
      this.transitionTo('dash');
    },

    delete(article) {
      var comment_deletions = article.get('comments').map(function(comment) {
        return comment.destroyRecord();
      });
      Ember.RSVP.all(comment_deletions).then(function(){
        return article.destroyRecord();
      });
      this.transitionTo('dash');
    }
  }
});
