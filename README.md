# Aurea Dream

Landing web tipo skincare/e-commerce creada con HTML, CSS y JavaScript vanilla.

## Descripción

El proyecto presenta una página principal con navegación por secciones y enfoque visual de marca:

- `#home`: Hero con mensaje principal y CTA.
- `#product`: Producto destacado con precio, reviews, cantidad y botones de acción.
- `#routines`: Grid promocional de rutinas, productos y suscripción por correo.

## Stack

- HTML5
- CSS3 (con variables y estilos modulares por archivo)
- JavaScript vanilla
- Boxicons (iconografía)
- Google Fonts

## Estructura del proyecto

```text
Aurea Dream/
├─ index.html
├─ README.md
└─ src/
   ├─ assets/
   │  ├─ icons/
   │  └─ images/
   ├─ css/
   │  ├─ index.css
   │  ├─ product.css
   │  └─ routines.css
   └─ js/
      └─ index.js
```

## Organización de estilos

- `src/css/index.css`: variables globales (colores, tipografías, espaciados, tamaños, transiciones) y estilos base.
- `src/css/product.css`: estilos de la sección de producto.
- `src/css/routines.css`: estilos de la sección de rutinas.

### Mejoras recientes de mantenimiento

- Reducción de repetición en tarjetas de rutinas mediante clase compartida `routine-card`.
- Consolidación de estilos comunes de botones en la sección de producto.
- Limpieza semántica en `index.html`:
  - rutas de imagen consistentes (`/`),
  - textos `alt` descriptivos en imágenes principales.

## Comportamiento actual (JS)

En `src/js/index.js`:

- Scroll con rueda del mouse desactivado.
- Navegación por clic en el menú con `scrollIntoView({ behavior: "smooth" })`.
- Cambio visual del item activo del navbar con clase `activeMenu`.

## Cómo ejecutar

No requiere build ni dependencias.

1. Abre `index.html` en el navegador, o
2. Levanta un servidor local simple (recomendado para rutas estáticas), por ejemplo con Live Server en VS Code/Cursor.

## Próximos pasos recomendados

- Implementar versión responsive completa (mobile/tablet/desktop).
- Mejorar accesibilidad (focus states, contraste, labels y roles semánticos).
- Conectar acciones de producto a flujo real (carrito/checkout).
- Optimizar assets (peso de imágenes, formatos y lazy-loading).
