# VEXA SOFTWARE — Sitio Web Corporativo

Landing premium en React + Vite + Tailwind CSS. Modo oscuro, glassmorphism,
animaciones on-scroll, contadores animados y fondo de partículas en canvas.

## Instalación

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Build de producción

```bash
npm run build
npm run preview
```

El build queda en `dist/`, listo para desplegar en Vercel, Netlify o cualquier hosting estático.

## Estructura

```
src/
  components/       Componentes de UI reutilizables (una sección = un archivo)
  data/content.js   Todo el copy y los datos de servicios/productos/proceso/testimonios
  hooks/            useScrollReveal (reveal on scroll), useCounter (contadores animados)
  index.css         Tokens de diseño y utilidades (glass, botones, gradientes)
```

## Personalización rápida

- **Contenido**: editar `src/data/content.js` — no hace falta tocar los componentes.
- **Colores**: editar la paleta en `tailwind.config.js` (`colors.blue`, `colors.violet`, `colors.cyan`).
- **Formulario de contacto**: `src/components/Contact.jsx` tiene un punto de integración
  marcado con comentario donde conectar un backend real, EmailJS o Formspree.
- **WhatsApp**: el número y el mensaje automático están centralizados en
  `src/data/content.js` (`whatsappNumber`, `whatsappMessage`). Se usan tanto en el
  botón flotante como en la sección de Contacto — cambiar solo ahí.
- **Redes sociales**: los links están en `Contact.jsx` y `Footer.jsx` (array `socials`).

## Ampliar con nuevas páginas

El proyecto no usa router todavía. Para agregar páginas (ej. `/servicios`, `/blog`),
instalar `react-router-dom` y mover cada sección de `App.jsx` a su propia ruta —
los componentes ya están desacoplados y listos para eso.
