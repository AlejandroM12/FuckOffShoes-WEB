const row = document.getElementById('row');
const form = document.getElementById('product-form');


form.addEventListener('submit', function(e){
    e.preventDefault();

    let title = document.getElementById('title-form').value;
    let description = document.getElementById('description-form').value;

    create_card(title,description);
})

// CREAR CARTA
function create_card(title,description){
    let html = `        
                  
                        <div class="col-sm-6 col-md-4 mt-5" id="cardFirst">
                          <div class="card" style="width: 18rem;">
                            <div class="card-body">
                              <h5 class="title_card">${title}</h5>
                              <p class="card-text">${description}</p>
                              <a href="#" class="btn btn-primary" id="btnProd">Eliminar Producto</a>
                            </div>
                          </div>
                          </div>
                          
                          
                        
    `;
    row.innerHTML += html;
} 

// ELIMINAR CARTA

const btn = document.getElementById('btnProd');
btn.addEventListener('click', (e)=>{
  
  let ancestor = get_ancestors(e.target, 3);
  row.removeChild(ancestor);
});

function get_ancestors(ancestor,indice){
  if( indice == 0){
   
    return ancestor;
    
  }
  indice --;
  return get_ancestors(ancestor.parentElement, indice);
}
// EVENTO DEL MOUSE


btn.addEventListener('mouseenter', function(){
  this.className = 'btn btn-danger';
});
btn.addEventListener('mouseout', function(){
  this.className = 'btn btn-primary';
});