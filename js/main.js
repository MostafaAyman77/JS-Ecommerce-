// open and close cart

var cart = document.querySelector(".cart");

function openCart() {
    cart.classList.add("active")
}
function closeCart() {
    cart.classList.remove("active")
}

// Add Items To Cart

var allProductsJson;
var itemsInCart = document.querySelector(".items-in-cart");
let productCart = [];

function addToCart(id , btn) {
    productCart.push(allProductsJson[id])
    btn.classList.add("active")
    console.log(productCart);
    getCartItems()
}
let countItems = document.querySelector(".count-item");
let priceCartHead = document.querySelector(".price-cart-head");
let countItemCart = document.querySelector(".count-item-cart");
let priceCartTotal = document.querySelector(".price-cart-total");

function getCartItems(){
    let totalPrice = 0;
    let items = "";
    for(let i = 0 ; i < productCart.length ; i++){
        items += `
        <div class="item-cart">
        <img src="${productCart[i].img}" alt="">
        <div class="content">
            <h4>${productCart[i].name}</h4>
            <p class="price-product">$${productCart.price}</p>
        </div>
        <button class="delete-item"><i onclick="removeFromCart(${i})" class="fa-solid fa-trash-can"></i></button>
    </div>
        `
        totalPrice += productCart[i].price
    }
    itemsInCart.innerHTML = items;
    // Header
    priceCartHead.innerHTML = "$" + totalPrice;
    countItems.innerHTML = productCart.length;
    // Cart
    countItemCart.innerHTML = `(${productCart.length} Item in cart)`;
    priceCartTotal.innerHTML = "$" + totalPrice;
}

function removeFromCart(index){
    productCart.splice(index , 1);
    getCartItems();

    let addButtonToCart = document.querySelectorAll(".fa-cart-plus");
    for(let i = 0 ; i < productCart.length ; i++){
        addButtonToCart[i].classList.remove("active");
        productCart.forEach(product => {
            if (product.id == i){
                addButtonToCart[i].classList.add("active");
            }
        })
    }
}


// Back To Top JS

let bakeToTop = document.querySelector(".back-to-top");
bakeToTop.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

// Open and Close Menu

var menu = document.querySelector("#menu");
function open_menu() {
    menu.classList.add("active");
}
function close_menu() {
    menu.classList.remove("active");
}