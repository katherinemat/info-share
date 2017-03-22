import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  // articles: DS.hasMany('article', { async: true })
});
