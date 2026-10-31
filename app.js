
import pc from "picocolors";
import { productos } from "./data/productos.js";
import { formatearPrecio } from "./utils/formato.js";

import {
  listarAgotados,
  valorInventario,
  buscarPorNombre,
  vender
} from "./servicios/inventario.js";

// Obtener los comandos escritos en la terminal
const comando = process.argv[2];
const valor1 = process.argv[3];
const valor2 = process.argv[4];

console.log(pc.green("===== TIENDA DON PEDRO ====="));

// Mostrar todos los productos
if (comando === "todos") {
  console.table(productos);

// Mostrar productos agotados
} else if (comando === "agotados") {
  const agotados = listarAgotados();

  if (agotados.length === 0) {
    console.log("No hay productos agotados");
  } else {
    agotados.forEach((p) => {
      console.log(`AGOTADO: ${p.nombre}`);
    });
  }

// Buscar productos por nombre
} else if (comando === "buscar" && valor1 !== undefined) {
  const encontrados = buscarPorNombre(valor1);

  if (encontrados.length === 0) {
    console.log(`No hay productos que contengan "${valor1}"`);
  } else {
    encontrados.forEach((p) => {
      console.log(
        `Encontrado: ${p.nombre}: ${formatearPrecio(p.precio)} (quedan ${p.cantidad})`
      );
    });
  }

// Mostrar el valor del inventario
} else if (comando === "valor") {
  console.log(
    `Valor del inventario: ${formatearPrecio(valorInventario())}`
  );

// Registrar una venta
} else if (comando === "vender" && valor2 !== undefined) {
  const mensaje = vender(Number(valor1), Number(valor2));

  if (mensaje.startsWith("ERROR")) {
    console.log(pc.red(mensaje));
  } else {
    console.log(mensaje);
  }

// Mostrar ayuda
} else {
  console.log(`
Comandos disponibles:

npm start -- todos
npm start -- agotados
npm start -- buscar <texto>
npm start -- valor
npm start -- vender <id> <unidades>
  `);
}
