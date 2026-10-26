
export const formatearPrecio = (valor) => {
    return `$ ${valor.toLocaleString("es-CO")}`;
};

export const formatearNombre = (nombre) => {
    return nombre.trim().toUpperCase();
};
