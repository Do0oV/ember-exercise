export default function() {
  this.namespace = '/api';

  const items = [
  {
    id: '1',
    type: 'item',
    attributes: {
      code: 'GR1',
      name: 'Green tea',
      price: 3.11
    }
  }, {
    id: '2',
    type: 'item',
    attributes: {
      code: 'SR1',
      name: 'Strawberries',
      price: 5.00
    }
  }, {
    id: '3',
    type: 'item',
    attributes: {
      code: 'CF1',
      name: 'Coffee',
      price: 11.23
    }

  }];

  this.get('/items', function() {
    return { data: items };
  });
}
