
export const formatearPrecio = (valor) => {
  return `$ ${valor.toLocaleString("es-CO")}`;
};

// Convierte un nombre a mayúsculas y elimina espacios externos
export const formatearNombre = (nombre) => {
  return nombre.trim().toUpperCase();
};

// Calcula el IVA del 19 %
export const calcularIVA = (valor) => {
  return Math.round(valor * 0.19);
};

// Suma el IVA al valor original
export const totalConIVA = (valor) => {
  return valor + calcularIVA(valor);
};