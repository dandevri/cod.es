var products = [
  {
    name: 'Skittles',
    price: 85,
    id: 'A1'
  }
];

module.exports = {
  getProduct: function(productId) {
    var product = products.find(function(p) { return p.id === productId; });
    return product;
  },

  getProducts: function() { 
    return products;
  },
};