import { productosServicios } from "../servicios/productosServicios.js"


const listaDeProductos = (name, imageUrl, price, id) => {
    const card = document.createElement("div")
    const contenido = `
    <div class="producto_container">
    <a href=""><img class="img_producto" src="${imageUrl}" alt=""></a>
    <h2 class="productoNombre">${name}</h2>
    <h2 class="productoPrecio">$ ${price}</h2>
    <div class="botones">
        <a href="/screens/edit_products.html?id=${id}"><img class="item_productos" src="/assets/editar.png" alt=""></a>
        <a id="${id}" data-btnEliminar><img class="item_productos" src="/assets/eliminar.png" alt=""></a>
    </div>
    </div>
    `;
    card.innerHTML = contenido;

    //Funcion Para Eliminar Productos
    const btn = card.querySelector("[data-btnEliminar]");
    btn.addEventListener("click", () => {
        const id = btn.id;
        productosServicios.eliminarProducto(id);
    });

    return card;
};


//Funcion para que se agrege todos los productos de la API
const product = document.querySelector("[data-products]")

productosServicios.listaProductos()
.then((data) => {
    data.forEach((producto) => {
        const productos = listaDeProductos(producto.name, producto.imageUrl, producto.price, producto.id);
        product.appendChild(productos);
    });
})
.catch((error) => alert("Error"));