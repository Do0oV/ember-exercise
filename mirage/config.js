export default function() {
  this.namespace = '/api';

  this.get('/shop', function() {
    return {
      data: [{
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
      }]
    };
  });
}