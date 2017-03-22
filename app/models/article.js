import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  image: DS.attr(),
  date: DS.attr(),
  text: DS.attr(),
  comments: DS.hasMany('comment', { async: true }),
  // category: DS.belongsTo('category', { async: true })
});
