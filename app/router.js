import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('dash');
  this.route('update', {path: '/update/:article_id'});
  this.route('article', {path: '/article/:article_id'});
  this.route('category-articles', {path: '/category-articles/:category_id'});
});

export default Router;
