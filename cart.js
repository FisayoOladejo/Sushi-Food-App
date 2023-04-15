// Cart

let cartIcon = document.querySelector("#cart-icon");
let  cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// Open Cart

cartIcon.onclick = () => {
  cart.classList.add("active");
};

// Close Cart
closeCart.onclick = () => {
  cart.classList.remove("active");
};

//Cart working 
if (document.readyState =='loading'){
  document.addEventListener('DOMCONENLOADED', ready)
} else {
  ready();
}

//Making Function 

function ready(){
    //Remove Iteams From Cart 
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for (var i =0; i < removeCartButtons.length;  i++){
      var button = removeCartButtons[i]
      button.addEventListener('click', removeCartItem)
    }
}

 //Remove Iteams From Cart 
 function removeCartItem(event){
   var buttonclicked = event.target
   buttonclicked.parentElement.remove()
 }


