
const cart; // CARRITO
const btnCart; // CARRITO
const btnPlus; // BOTONES DE AGREGAR O DISMINUIR PRODUCTO - CONTADOR DE PRODUCTOS
const btnMinus; // BOTONES DE AGREGAR O DISMINUIR PRODUCTO - CONTADOR DE PRODUCTOS
const productCounter; // BOTONES DE AGREGAR O DISMINUIR PRODUCTO - CONTADOR DE PRODUCTOS
const gallery;// SECCION GALERIA DE IMAGEN
const heroImg;// SECCION GALERIA DE IMAGEN
const btnNext; // BOTONES DE SIGUIENTE O ANTERIOR PARA LA GALERIA DE IMAGENES
const btnPrevious; // BOTONES DE SIGUIENTE O ANTERIOR PARA LA GALERIA DE IMAGENES
const btnAddToCart; // BOTON AGREGAR AL CARRITO
const cartCount; // CONTADOR DEL CARRITO

// VARIABLES NUMERICAS
let productCounterValue = 1;
let productsInCart = 0;
let price =  250.00;
let discount = 0.5;

// FUNCION PARA ABRIR EL CARRITO
function openCart(){

}


// FUNCION PARA AGREGAR AL CARRITO

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
        
}


