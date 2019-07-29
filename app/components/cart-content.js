import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  shoppingCart: service(),
  price: null,
  didInsertElement() {
    this._super(...arguments);
    const sub = {};
    this.shoppingCart.get('cartItems').forEach(el => {
      sub[el.code] = parseFloat(((el.quantity * el.price) - this.shoppingCart.afterDiscount[el.code]).toFixed(2));
    });
    this.set('price', {...sub})
  },
  actions: {
    remove(item) {
      this.shoppingCart.remove(item);
      delete this.price[item.code]
    }
  }
});
