var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPrice = Math.floor((Math.random() * 100) + 1); 
 cart.push({[item]: itemPrice});
 console.log(item + " has been added to your cart.");
 return cart;
}

function viewCart() {
if (cart.length === 0) {
  console.log("Your shopping cart is empty.");
} else if (cart.length === 1) {
  var itemAndPriceList = [];
  let itemAndPrices = cart[0];
  let item = Object.keys(itemAndPrices)[0];
  let price = itemAndPrices[item];
    itemAndPriceList.push(`${item} at \$${price}`);
  console.log(`In your cart, you have ${itemAndPriceList}.`);
} else if (cart.length === 2) {
  var itemAndPriceList2 = [];
  for (let i = 0; i < cart.length; i++) {
    let itemAndPrices = cart[i];
    let item = Object.keys(itemAndPrices)[0];
    let price = itemAndPrices[item];
    itemAndPriceList2.push(`${item} at \$${price}`);
  }
  console.log(`In your cart, you have ${itemAndPriceList2.join(' and ')}.`);
} else {
  let lastItemAndPrice = cart[2];
  let lastItem = Object.keys(lastItemAndPrice)[0];
  let lastPrice = lastItemAndPrice[lastItem];
  var itemAndPriceList3 = [];
  for (let i = 0; i < (cart.length-1); i++) {
    let itemAndPrices = cart[i];
    let item = Object.keys(itemAndPrices)[0];
    let price = itemAndPrices[item];
    itemAndPriceList3.push(`${item} at \$${price}`);
  }
  console.log(`In your cart, you have ${itemAndPriceList3.join(', ')} and ${lastItem} at \$${lastPrice}.`);
}
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
