import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  code: DS.attr(),
  name: DS.attr(),
  price: DS.attr()
});