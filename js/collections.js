const products = [
    {
        name: "Zapatilla Urbana",
        marca: "Nike",
        precio: "$4000"
    },
    {
        name: "Zapatilla Urbana",
        marca: "Adidas",
        precio: "$8000"
    },
    {
        name: "Zapatilla Deportiva",
        marca: "Nike",
        precio: "$4000"
    },
    {
        name: "Zapatilla Urbana",
        marca: "Adidas",
        precio: "$5000"
    },
    {
        name: "Zapatilla Deportiva",
        marca: "Adidas",
        precio: "$5000"
    },
    {
        name: "Zapatilla Urbana",
        marca: "Nike",
        precio: "$4000"
    },
    {
        name: "Zapatilla Deportiva",
        marca: "Nike",
        precio: "$5000"
    },
    {
        name: "Zapatilla Deportiva",
        marca: "Nike",
        precio: "$9000"
    },
    {
        name: "Zapatilla Urbana",
        marca: "Adidas",
        precio: "$5000"
    },
    {
        name: "Zapatilla Urbana",
        marca: "Nike",
        precio: "$8000"
    },
    {
        name: "Zapatilla Urbana",
        marca: "Nike",
        precio: "$5000"
    },

];

let tableBody = document.getElementById('table-body')
let productMap = products.map( product =>{
    console.log(products)
    return `
        <tr>
            <td>${product.name}</td>
            <td>${product.marca}</td>
            <td>${product.precio}</td>
        </tr>
    `
}).join('')
tableBody.innerHTML = productMap;