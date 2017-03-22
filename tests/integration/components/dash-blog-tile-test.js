import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dash-blog-tile', 'Integration | Component | dash blog tile', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{dash-blog-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#dash-blog-tile}}
      template block text
    {{/dash-blog-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
