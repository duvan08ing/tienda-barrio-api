
# Tienda de Barrio API

Proyecto desarrollado para gestionar el inventario de la tienda de Don Pedro.

## Información del aprendiz

- **Aprendiz:** Duvan Stiven Jaramillo Gonzalez
- **Ficha:** 3472722
- **Programa:** Tecnólogo en Análisis y Desarrollo de Software (ADSO)
- **Instructora:** Diana Marin Torres

## Descripción

Esta aplicación permite consultar productos, buscar por nombre, revisar productos agotados, calcular el valor del inventario y registrar ventas.

## Tecnologías utilizadas

- JavaScript
- Node.js
- NPM
- Git y GitHub
- Picocolors

## Instalación

1. Clonar el repositorio.
2. Abrir la carpeta del proyecto.
3. Instalar las dependencias:

```bash
npm install
```

## Comandos disponibles

| Comando | Descripción |
|---|---|
| `npm start -- todos` | Muestra todos los productos |
| `npm start -- agotados` | Muestra productos agotados |
| `npm start -- buscar leche` | Busca productos por nombre |
| `npm start -- valor` | Calcula el valor del inventario |
| `npm start -- vender 3 2` | Vende 2 unidades del producto con ID 3 |

## Estructura del proyecto

```text
tienda-barrio-api/
│
├── data/
│   └── productos.js
│
├── servicios/
│   └── inventario.js
│
├── utils/
│   └── formato.js
│
├── app.js
├── prueba-formato.js
├── prueba-inventario.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

## Estándares de codificación

- Utilizar camelCase para nombres de variables y funciones.
- Utilizar nombres claros y descriptivos.
- Escribir el código con una indentación de 2 espacios.
- Utilizar comillas dobles.
- Finalizar las instrucciones con punto y coma.
- Utilizar const cuando no sea necesario reasignar una variable.
- Escribir comentarios en español.
- Separar las funciones según su responsabilidad.

## Autor

Proyecto académico desarrollado por Duvan Stiven Jaramillo Gonzalez para el programa ADSO del SENA.
