//GET

const listaProductos = () => 
    fetch("http://localhost:3000/producto")
    .then((respuesta) => respuesta.json());



//POST 

const crearProducto = (name, imageUrl, price) => {
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, imageUrl, price, id:uuid.v4() })
    });
};


//DELETE
const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`,{
        method: "DELETE",
    });
};

//GET
const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`)
    .then((respuesta) => respuesta.json());
};

//UPDATE
const actualizarProducto = (name, imageUrl, price, id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, imageUrl, price, id })
    });
};

export const productosServicios = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto
};