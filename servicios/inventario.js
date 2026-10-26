
import { productos } from "../data/productos.js";

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
