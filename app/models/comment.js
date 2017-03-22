import DS from 'ember-data';

export default DS.Model.extend({
  comment: DS.attr(),
  article: DS.belongsTo('article', { async: true })
});
