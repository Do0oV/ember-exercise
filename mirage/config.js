export default function() {
  this.namespace = '/api';

  const items = [
  {
    id: '1',
    type: 'item',
    attributes: {
      code: 'GR1',
      name: 'Green tea',
      price: 3.11,
      offer: 'buy one get one free',
      image: 'https://www.grapetree.co.uk/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/M/i/Mighty-Matcha-Green-Tea.png'
    }
  }, {
    id: '2',
    type: 'item',
    attributes: {
      code: 'SR1',
      name: 'Strawberries',
      price: 5.00,
      offer: '+3 price drops to 4.5£',
      image: 'https://nurserylive.com/images/stories/virtuemart/product/resized/nurserylive-strawberry-plant-seed_600x600.jpg'
    }
  }, {
    id: '3',
    type: 'item',
    attributes: {
      code: 'CF1',
      name: 'Coffee',
      price: 11.23,
      offer: '+3 price drops to 7.49£',
      image: 'https://cdn.shopify.com/s/files/1/0271/7209/products/death_wish_coffee_ground_angle_269b630b-3c6d-4126-88f0-65d5abfcc00d_1024x1024.jpg'
    }

  }];

  this.get('/items', function() {
    return { data: items };
  });
}
