/* SECTION HOMBRE */
let sectionsProductsH = document.getElementById("sectionProductsH");


fetch('./productsH.json')
    .then(response => response.json())
    .then(itemsProducts => {
        itemsProducts.forEach(product => {
            sectionsProductsH.innerHTML += `
                        <div class="card p-4 col-lg-3 col-md-4 col-sm-6 col-xs-12" id="producto${product.id} style="width: 18rem;">
                            <img src="${product.imagen}" style="width: 30rem;" class="card-img-top " alt="Producto Imagen">
                            <div class="card-body">
                                <h5 class="card-title nombre">${product.nombre}</h5>
                                <p class="card-text marca">${product.marca}</p>
                                <p class="card-text precio">$${product.precio}</p>
                                <a href="productPage.html" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Ver más</a>
                            </div>
                        </div>
            `
        });
    })
/* SECTION MUJER */
let sectionsProductsF = document.getElementById("sectionProductsM");


    fetch('./productsF.json')
        .then(response => response.json())
        .then(itemsProducts => {
            itemsProducts.forEach(product => {
                sectionsProductsF.innerHTML += `
                            <div class="card p-4 col-lg-3 col-md-4 col-sm-6 col-xs-12" id="producto${product.id} style="width: 18rem;">
                                <img src="${product.imagen}" style="width: 30rem;" class="card-img-top " alt="Producto Imagen">
                                <div class="card-body">
                                    <h5 class="card-title nombre">${product.nombre}</h5>
                                    <p class="card-text marca">${product.marca}</p>
                                    <p class="card-text precio">$${product.precio}</p>
                                    <a href="productPage.html" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Ver más</a>
                                </div>
                            </div>
                `
            });
        })