import Ember from 'ember';

export default Ember.Component.extend({
  newBlogForm: false,
  actions: {
    blogFormShow() {
      this.set('newBlogForm', true);
    },

    saveArticle() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        image: this.get('image'),
        date: moment().format('MMM Do YYYY'),
        text: this.get('article'),
      };
      this.set('newBlogForm', false);
      this.sendAction("saveArticle", params);
    }
  }
});
