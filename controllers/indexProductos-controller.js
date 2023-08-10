import { productosServicios } from "../servicios/productosServicios.js"


const listaDeProductos = (name, imageUrl, price) => {
    const card = document.createElement("div")
    const contenido = `
    <div class="producto_container">
    <a href=""><img class="img_producto" src="${imageUrl}" alt=""></a>
    <h2 class="productoNombre">${name}</h2>
    <h2 class="productoPrecio">$ ${price}</h2>
    </div>
    `;
    card.innerHTML = contenido

    return card
};

const product = document.querySelector("[data-products]")

productosServicios.listaProductos()
.then((data) => {
    data.forEach((producto) => {
        const productos = listaDeProductos(producto.name, producto.imageUrl, producto.price);
        product.appendChild(productos);
    });
})
.catch((error) => alert("Error"));
