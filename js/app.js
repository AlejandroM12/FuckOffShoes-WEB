
const cart = document.querySelector('.cart');
const btnCart = document.querySelector('.btnCart');

// FUNCION PARA ABRIR EL CARRITO
btnCart.addEventListener('click', openCart)

function openCart(){
    cart.classList.toggle('hidden');
}

// BOTONES DE AGREGAR O DISMINUIR PRODUCTO - CONTADOR DE PRODUCTOS
const btnPlus = document.querySelector('#btnPlus'); 
const btnMinus = document.querySelector('#btnMinus'); 
const productCounter = document.querySelector('.counter'); 

let productCounterValue = 1;

btnPlus.addEventListener('click', productCounterPlus);
btnMinus.addEventListener('click', productCounterMinus);

function productCounterPlus(){
    setProductCounter(1);

}
function productCounterMinus(){
    setProductCounter(-1);
}
function setProductCounter(value){
    if((productCounterValue + value) > 0){
        productCounterValue += value;
        productCounter.innerHTML = productCounterValue;
    }
}


