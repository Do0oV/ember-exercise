import Service from '@ember/service';
import { A } from '@ember/array';
import { set } from '@ember/object';

export default Service.extend({

  cartItems: null,
  total: null,
  afterDiscount: null,
  discounts: null,

  init() {
    this._super(...arguments);
    this.set('cartItems', A([]));
    this.set('afterDiscount', {
      'GR1': 0,
      'SR1': 0,
      'CF1': 0
    });
    this.set('discounts', [
    {
      code: 'GR1',
      getPrice: (quantity, price) => {
        if (quantity >= 2) {
          return parseFloat((Math.floor(quantity/2) * price).toFixed(2))
        }
      }
    },
    {
      code: 'SR1',
      getPrice: (quantity, price) => {
        const originalPrice = parseFloat((quantity*price).toFixed(2));
        const finalPrice = parseFloat((quantity*4.5).toFixed(2));
        if (quantity >= 3) {
          return originalPrice - finalPrice;
        }
      }
    },
    {
      code: 'CF1',
      getPrice: (quantity, price) => {
        const originalPrice = parseFloat((quantity*price).toFixed(2));
        const newPrice = parseFloat((price*2/3).toFixed(2))
        const finalPrice = parseFloat((quantity*newPrice).toFixed(2));
        if (quantity >= 3) {
          return parseFloat((originalPrice - finalPrice).toFixed(2));
        }
      }
    }
    ]);
  },
  add(item) {
    if (this.cartItems.find(el => el.code === item.code)) {
      const element = this.cartItems.find(el => el.code === item.code);
      this.get('cartItems').removeObject(element);
      this.get('cartItems').pushObject(item);
      this.getTotal();

    } else {
      this.get('cartItems').pushObject(item);
      this.getTotal();
    }
  },

  remove(item) {
    this.get('cartItems').removeObject(item);
    set(this.get('afterDiscount'), item.code, 0);
    this.getTotal();
  },

  empty() {
    this.set('cartItems', []);
    this.getTotal();
  },

  getTotal() {
    this.applyDiscount(this.get('cartItems'), this.get('discounts'));
    let total = this.get('cartItems').reduce((acc, curr) => {
      return acc + (curr.quantity * curr.price);
    },0);
    Object.values(this.get('afterDiscount')).forEach(el => total = total - el);
    this.set('total', parseFloat(total.toFixed(2)));
  },

  applyDiscount(arr, disc) {
    const isValid = disc.map(el => el.code);
    arr.map(el => {
      if(isValid.includes(el.code)) {
        if (el.quantity) {
        const myDiscount = this.discounts.find(dis => dis.code === el.code ).getPrice(el.quantity, el.price);
        set(this.get('afterDiscount'), el.code, myDiscount  || 0)
        }
      }
    });
  }
});
