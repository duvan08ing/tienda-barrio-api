
import fs from "node:fs";
import { productos } from "../data/productos.js";
import { formatearPrecio } from "../utils/formato.js";

// Buscar un producto por su ID
export const buscarPorId = (id) => {
  return productos.find((p) => p.id === id);
};

// Mostrar los productos agotados
export const listarAgotados = () => {
  return productos.filter((p) => p.cantidad === 0);
};

// Calcular el valor total del inventario
export const valorInventario = () => {
  let total = 0;

  for (const p of productos) {
    total = total + p.precio * p.cantidad;
  }

  return total;
};

// Mostrar productos por categoría
export const listarPorCategoria = (categoria) => {
  return productos.filter((p) => p.categoria === categoria);
};

// Buscar productos por su nombre
export const buscarPorNombre = (texto) => {
  return productos.filter((p) =>
    p.nombre.toLowerCase().includes(texto.toLowerCase())
  );
};

// Registrar una venta
export const vender = (id, unidades) => {
  const producto = buscarPorId(id);

  if (producto === undefined) {
    return "ERROR: Producto no encontrado";
  }

  if (producto.cantidad < unidades) {
    return `ERROR: No hay suficiente ${producto.nombre} (quedan ${producto.cantidad})`;
  }

  const total = producto.precio * unidades;
  producto.cantidad = producto.cantidad - unidades;

  const fecha = new Date().toLocaleString("es-CO");

  fs.appendFileSync(
    "ventas.txt",
    `${fecha} | ${producto.nombre} | ${unidades} | $${total}\n`
  );

  return `Venta: ${unidades} x ${producto.nombre} = ${formatearPrecio(total)}. Quedan ${producto.cantidad}`;
};
