var cart = [];
function getCart() {
 return cart;
}
var newCart = {};

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random(1)*100+1 );
 newCart = {itemName:item, itemPrice:price};
 cart.push(newCart)
 return `${item} has been added to your cart.`;
 
}

function viewCart() {
  // write your code here
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


function viewCart(){
 var total = [];
 var ammount = cart.length;
 var checkCart = {};
  if (cart.length === 0){
    return `Your shopping cart is empty.`;
  }
  else {
    for (var i = 0; i < ammount; i++){
    checkCart = cart[i];
    console.log(checkCart) ;
    if(i < cart.length - 1){
    total.push(` ${checkCart.itemName} at $${checkCart.itemPrice}` );
    }
    else if(i===0){
      total.push(` ${checkCart.itemName} at $${checkCart.itemPrice}.` );

    }
    else{
    total.push(` and ${checkCart.itemName} at $${checkCart.itemPrice}.` );

    }
    }
  }
  return `In your cart, you have${total}`;
}

function total(){
  var total = 0;
  var ammount = cart.length;

      for (var i = 0; i < ammount; i++){
       checkCart = cart[i];
       console.log(checkCart.itemPrice);

       total += checkCart.itemPrice;
      }
      return total;
}

