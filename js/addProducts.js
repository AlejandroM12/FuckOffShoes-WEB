let sectionsProductsH = document.getElementById('sectionProductsH');
let sectionsProductsF = document.getElementById('sectionProductsF');

/* SECTION HOMBRE */

fetch('./js/databaseProducts.json')
    .then(response => response.json())
    .then(items => {
        items.filter((shoes, index) => index <= 15).forEach(product => {
            sectionsProductsH.innerHTML += `
                        <div class="card p-4 col-lg-3 col-md-4 col-sm-6 col-xs-12" id="producto${product.id} style="width: 18rem;">
                            <img src="${product.imagen}" style="width: 30rem;" class="card-img-top " alt="Producto Imagen">
                            <div class="card-body">
                                <h5 class="card-title nombre">${product.nombre}</h5>
                                <p class="card-text marca">${product.marca}</p>
                                <p class="card-text precio">$${product.precio}</p>
                                <div class="btn">
                                  <img  src="./images/icon-cart.svg" alt="icon cart">
                                </div>
                            </div>
                        </div>
            `
        });
        
    })

/* SECTION MUJER */

fetch('./js/databaseProducts.json')
    .then(response => response.json())
    .then(items => {
        items.filter((shoes, index) => index >= 16).forEach(product => {
            sectionsProductsF.innerHTML += `
                        <div class="card p-4 col-lg-3 col-md-4 col-sm-6 col-xs-12" id="producto${product.id} style="width: 18rem;">
                            <img src="${product.imagen}" style="width: 30rem;" class="card-img-top " alt="Producto Imagen">
                            <div class="card-body">
                                <h5 class="card-title nombre">${product.nombre}</h5>
                                <p class="card-text marca">${product.marca}</p>
                                <p class="card-text precio">$${product.precio}</p>
                                <div class="btn">
                                  <img  src="./images/icon-cart.svg" alt="icon cart">
                                </div>
                            </div>
                        </div>
            `
        });
        
    })
    
    
