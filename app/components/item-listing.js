import Component from '@ember/component';

export default Component.extend({
  quantity: 1,
  actions: {
    addToCart(item, quantity) {
      console.log(item.code)
      console.log(quantity)
      //this.get('shoppingCart').add(item);
    },
    updateQuantity(val) {
      this.set('quantity', val);
      console.log(this.quantity)
    }
  }
});
