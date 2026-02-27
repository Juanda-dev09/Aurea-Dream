# Aurea Dream

Proyecto web en desarrollo tipo **landing + e-commerce** construido con **HTML, CSS y JavaScript vanilla**.

## Estado actual del proyecto

Actualmente la landing principal está maquetada en `index.html` con tres secciones:

- `#home`: Hero principal con título, texto y CTA.
- `#product`: Bloque de producto destacado con imagen, rating, precio, cantidad y botones de compra.
- `#routines`: Sección de rutinas con layout en grid y tres tarjetas inferiores equilibradas en ancho.

## Funcionalidades implementadas

- Navbar fijo con enlaces a secciones internas: Inicio, Productos y Rutinas.
- Estado activo del menú (`activeMenu`) con cambio dinámico al hacer clic.
- `Inicio` activo por defecto al cargar la página.
- Scroll suave por anclas usando JavaScript (`scrollIntoView`).
- Scroll con rueda del mouse desactivado (navegación enfocada en clic del navbar).
- Íconos integrados con **Boxicons** (incluyendo variantes rellenas como `bxs-star`).

## Estilos y organización

- Variables globales en `src/css/index.css`:
  - Paleta de colores
  - Tipografías
  - Escalas de tamaño
  - Espaciados
  - Transiciones
  - Breakpoints base
- Estilos de producto en `src/css/product.css`.
- Estilos de rutinas en `src/css/routines.css`.
- Lógica de interacción en `src/js/index.js`.

## Estructura principal

- `index.html`
- `README.md`
- `src/css/`
- `src/js/`
- `src/assets/images/`
- `src/assets/icons/`
- `src/pages/`

## Próximos pasos

- Completar estilos visuales finales de la sección `#routines` (contenido real e imágenes).
- Implementar versión responsive (mobile y tablet) para navbar y grids.
- Mejorar accesibilidad: `alt` descriptivos, foco visible y etiquetas semánticas.
- Conectar botones de producto con flujo real (carrito/checkout).
- Agregar optimización de assets (imágenes y peso de recursos).
