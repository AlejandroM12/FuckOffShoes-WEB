
const cart = document.querySelector('.cart');
const btnCart = document.querySelector('.btnCart');

const btnPlus = document.querySelector('#btnPlus'); 
const btnMinus = document.querySelector('#btnMinus'); 
const productCounter = document.querySelector('.counter'); 

const gallery = document.querySelectorAll('.pic');
const heroImg = document.querySelector('.product-here');

const btnNext = document.querySelector('.next');
const btnPrevious = document.querySelector('.previous');

const btnAddToCard = document.querySelector('.btn');
const cartCount = document.querySelector('.cart-count');
const productInShoppingCart =document.querySelector('.products-in-cart');

const msgEmpty = document.querySelector('.msg-empty');
const checkout = document.querySelector('.checkout');

const overlay = document.querySelector('.overlay');
const lightbox = document.querySelector('.lightbox');

let lightboxGallery;
let lightboxHero;

// VARIABLES NUMERICAS
let productCounterValue = 1;
let productsInCart = 0;
let price =  250.00;
let discount = 0.5;

// EVENTOS PARA LAS FUNCIONES
btnCart.addEventListener('click', openCart)

btnPlus.addEventListener('click', productCounterPlus);
btnMinus.addEventListener('click', productCounterMinus);

gallery.forEach(img => {
    img.addEventListener('click', onThumbClick);
});

btnNext.addEventListener('click', handleBtnClickNext);
btnPrevious.addEventListener('click', handleBtnClickPrevious);

btnAddToCard.addEventListener('click', addToCart);

heroImg.addEventListener('click', onHeroImgClick);

// FUNCION PARA ABRIR EL CARRITO
btnCart.addEventListener('click', openCart)

function openCart(){
    cart.classList.toggle('hidden');
}

// FUNCIONES PARA CONTADOR DE PRODUCTO

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

// FUNCIÓN PARA IMAGEN

function onThumbClick(event){
    // clear active
    gallery.forEach(img => {
        img.classList.remove('active');
    });
    // set active thumbnail
    event.target.parentElement.classList.add('active');

    // update hero image
    heroImg.src = event.target.src.replace('-thumbnail', ''); 

}
// FUNCIONES PARA CAMBIAR DE IMAGENES

function handleBtnClickNext(){
    let imageIndex = getCurrentImageIndex();
    imageIndex++;
    if(imageIndex > 4) {
        imageIndex = 1;
    }
    setHeroImage(imageIndex);
}

function handleBtnClickPrevious(){
    let imageIndex = getCurrentImageIndex();
    imageIndex--;
    if(imageIndex < 1) {
        imageIndex = 4;
    }
    setHeroImage(imageIndex);
}

function getCurrentImageIndex(){
    const imageIndex = parseInt(heroImg.src.split('\\').pop().split('/').pop().replace('.jpg', '').replace('image-product-', ''));
    return imageIndex;
}
function setHeroImage(imageIndex){
    heroImg.src = `./images/image-product-${imageIndex}.jpg`;

    gallery.forEach(img => {
        img.classList.remove('active');
    });
    gallery[imageIndex-1].classList.add('active');
}


// FUNCIÓN PARA AGREGAR PRODUCTO AL CARRITO


function addToCart(){
    productsInCart += productCounterValue;

    const productHTMLElement = `
    <div class="item">
          <img class="product-img" src="./images/image-product-1-thumbnail.jpg" alt="product 1">
          <div class="details">
            <div class="product-name">Autumn Limited Edition...</div>
            <div class="price-group">
              <div class="price">$${(price*discount).toFixed(2)}</div> x
              <div class="count">${productsInCart}</div>
              <div class="total-amount">$${(price*discount*productsInCart).toFixed(2)}</div>
          </div>
          </div>
            <img id="btnDelete" src="./images/icon-delete.svg" alt="icon delete">
        </div>
        `;
        
    productInShoppingCart.innerHTML = productHTMLElement;
    updateCart();

    const btnDelete = document.querySelector('#btnDelete');
    btnDelete.addEventListener('click', onBtnDeleteClick);
    
}
function updateCart(){
    updateCartIcon();
    updateMsgEmpty();
    updateCheckoutButton();
}
function updateCartIcon() { 
    cartCount.textContent = productsInCart;
    if(productsInCart == 0){
        if(!cartCount.classList.contains('hidden')){
            cartCount.classList.add('hidden');
        }
    }else{
        cartCount.classList.remove('hidden');
    }

}
// FUNCIÓN PARA MOSTRAR MENSAJE SI EL CARRITO ESTÁ VACÍO
function updateMsgEmpty(){
    if(productsInCart == 0){
        if(msgEmpty.classList.contains('hidden')){
            msgEmpty.classList.remove('hidden');
        }
    }else{
        if(!msgEmpty.classList.contains('hidden')){
            msgEmpty.classList.add('hidden');
        }
    }

}
// FUNCION PARA ACTUALIZAR PRODUCTO
function updateCheckoutButton(){
    if(productsInCart == 0){
        if(checkout.classList.contains('hidden')){
            checkout.classList.add('hidden');
        }
    }else{
        checkout.classList.remove('hidden');
    }
}

// FUNCIÓN PARA ICONO DE ELIMINAR PRODUCTO EN EL CARRITO
function onBtnDeleteClick(){
    productsInCart--;
    updateCart();

    const el = document.querySelector('.count');
    const totalAmount = document.querySelector('.total-amount');
    el.innerHTML = productsInCart;
    totalAmount.innerHTML = `$${(price*discount*productsInCart).toFixed(2)}`;

    if(productsInCart == 0){
        productInShoppingCart.innerHTML = '';
    }
}
// FUNCION PARA OVERLAY EN IMAGEN
function onHeroImgClick(){

    if(window.innerWidth>= 1440){
        if(overlay.childElementCount == 1){
                const newNode = lightbox.cloneNode(true);
                overlay.appendChild(newNode);

                const btnOverlayClose = document.querySelector('#btnOverlayClose');
                btnOverlayClose.addEventListener('click', onBtnOverlayClose);

                lightboxGallery = overlay.querySelectorAll('.pic');
                lightboxHero = overlay.querySelector('.product-here')
                lightboxGallery.forEach(img => {
                    img.addEventListener('click', onThumbClickLightBox);
                });

                const btnOverlayNext = overlay.querySelector('.next');
                const btnOverlayPrevious = overlay.querySelector('.previous');
                btnOverlayNext.addEventListener('click', handleBtnClickNextOverlay);
                btnOverlayPrevious.addEventListener('click', handleBtnClickPreviousOverlay);
            }
            overlay.classList.remove('hidden');
    } 
}

function onBtnOverlayClose() {
    overlay.classList.add('hidden');
}
function onThumbClickLightBox(event){
    // claro activo
    lightboxGallery.forEach(img => {
        img.classList.remove('active');
    });
    // establecer miniatura activa
    event.target.parentElement.classList.add('active');

    // actualizar hero image
    lightboxHero.src = event.target.src.replace('-thumbnail', ''); 

}



function handleBtnClickNextOverlay(){
    let imageIndex = getOverlayCurrentImageIndex();
    imageIndex++;
    if(imageIndex > 4) {
        imageIndex = 1;
    }
    setOverlayHeroImage(imageIndex);
}
function handleBtnClickPreviousOverlay(){
    let imageIndex = getOverlayCurrentImageIndex();
    imageIndex--;
    if(imageIndex < 1) {
        imageIndex = 4;
    }
    setOverlayHeroImage(imageIndex);
}
function getOverlayCurrentImageIndex(){
    const imageIndex = parseInt(lightboxHero.src.split('\\').pop().split('/').pop().replace('.jpg', '').replace('image-product-', ''));
    return imageIndex;
}
function setOverlayHeroImage(imageIndex){
    lightboxHero.src = `./images/image-product-${imageIndex}.jpg`;

    lightboxGallery.forEach(img => {
        img.classList.remove('active');
    });
    lightboxGallery[imageIndex-1].classList.add('active');
}

