// Lista de productos
const productos = [
  { id: 1, nombre: "Sudadera con Capucha", precio: 25.99, imagen: "sudadera.jpg" },
  { id: 2, nombre: "Jersey de Lana", precio: 30.99, imagen: "jersey.jpg" },
  { id: 3, nombre: "Pantalón Casual", precio: 20.99, imagen: "pantalon.jpg" },
  { id: 4, nombre: "Zapatillas de Invierno", precio: 40.99, imagen: "zapatillas.jpg" },
];

const carrito = [];

// Cargar productos en la tienda
const productosDiv = document.getElementById("productos");
productos.forEach((producto) => {
  const div = document.createElement("div");
  div.classList.add("producto");
  div.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p>Precio: $${producto.precio.toFixed(2)}</p>
    <button onclick="agregarAlCarrito(${producto.id})">Añadir al Carrito</button>
  `;
  productosDiv.appendChild(div);
});

// Agregar productos al carrito
function agregarAlCarrito(id) {
  const producto = productos.find((p) => p.id === id);
  carrito.push(producto);
  actualizarCarrito();
}

// Actualizar carrito
function actualizarCarrito() {
  const listaCarrito = document.getElementById("lista-carrito");
  listaCarrito.innerHTML = "";
  carrito.forEach((producto) => {
    const li = document.createElement("li");
    li.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
    listaCarrito.appendChild(li);
  });

  const total = carrito.reduce((sum, producto) => sum + producto.precio, 0);
  document.getElementById("total").textContent = `Total: $${total.toFixed(2)}`;
}

// Finalizar compra
document.getElementById("finalizar-compra").addEventListener("click", () => {
  alert("Gracias por tu compra. El pedido se ha procesado.");
});
