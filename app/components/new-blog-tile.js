import Ember from 'ember';

export default Ember.Component.extend({
  newBlogForm: false,
  actions: {
    blogFormShow() {
      if(this.newBlogForm){
        this.set('newBlogForm', false);
      } else {
        this.set('newBlogForm', true);
      }
    },

    saveBlog() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        image: this.get('image'),
        // image: this.get('image') ? this.get('image') : "https://s-media-cache-ak0.pinimg.com/564x/d9/06/21/d90621cd2211db41b5659bcb369b16e8.jpg",
        date: moment().format('MMM Do YYYY'),
        text: this.get('article'),
        category: this.get('category')
      };
      this.set('newBlogForm', false);
      this.sendAction('saveBlog', params);
    },
  }
});
