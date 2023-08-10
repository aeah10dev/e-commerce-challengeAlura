import {productosServicios} from "../servicios/productosServicios.js"

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) =>{
    evento.preventDefault();

    const url = document.querySelector("[data-url]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;

    productosServicios.crearProducto(nombre, url, precio)
    .then( respuesta =>{
        window.location.href = "../screens/productos.html"
        console.log(respuesta)
    }).catch(error => {
        console.log(error);
    })
})