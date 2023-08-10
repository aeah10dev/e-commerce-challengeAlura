import { productosServicios } from "../servicios/productosServicios.js";

const informacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const urlImage =  document.querySelector("[data-urlImage]");
    const nombre =  document.querySelector("[data-nombre]");
    const precio =  document.querySelector("[data-precio]");

    productosServicios.detalleProducto(id)
    .then((producto) => {
        urlImage.value = producto.imageUrl;
        nombre.value = producto.name;
        precio.value = producto.price;
    });
};

informacion();

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const urlImage =  document.querySelector("[data-urlImage]").value;
    const nombre =  document.querySelector("[data-nombre]").value;
    const precio =  document.querySelector("[data-precio]").value;

    productosServicios.actualizarProducto(nombre, urlImage, precio, id)
    .then(() => {
        window.location.href="../screens/productos.html"
    });
});