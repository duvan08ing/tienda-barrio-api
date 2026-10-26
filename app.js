
import pc from "picocolors";
import {
    buscarPorId,
    listarAgotados,
    valorInventario,
    listarPorCategoria
} from "./servicios/inventario.js";
import { formatearPrecio } from "./utils/formato.js";

console.log(pc.green("API Mi Tienda de Barrio"));
console.log(pc.yellow("En construcción"));

console.log("\n--- BUSCAR PRODUCTO ---");
console.log(buscarPorId(3));

console.log("\n--- PRODUCTOS AGOTADOS ---");
console.log(listarAgotados());

console.log("\n--- VALOR DEL INVENTARIO ---");
console.log(formatearPrecio(valorInventario()));

console.log("\n--- PRODUCTOS DE LA CATEGORÍA GRANOS ---");
console.log(listarPorCategoria("granos"));
