import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  cart: service('shopping-cart'),
  quantity: 1,
  actions: {
    addToCart(item, quantity) {
      let oldQ = 0;
      this.cart.get('cartItems').forEach(el => {
        if(el.code === item.code) {
          oldQ = parseInt(el.quantity);
        }
      })
      item.set('quantity', parseInt(quantity) + parseInt(oldQ))
      this.cart.add(item);
    },
    updateQuantity(val) {
      this.set('quantity', val);
    }
  }
});
