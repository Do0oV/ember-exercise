import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      id: 'GR1',
      name: 'Green tea',
      price: 3.11
    }, {
      id: 'SR1',
      name: 'Strawberries',
      price: 5.00
    }, {
      id: 'CF1',
      name: 'Coffee',
      price: 11.23
    }];
  }
});
