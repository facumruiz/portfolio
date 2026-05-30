# Facundo Ruiz — Portfolio (Astro)

Sitio personal de Facundo Ruiz: desarrollador Full-Stack y de sistemas embebidos / IoT.
Bilingüe (ES / EN), minimalista a dos colores (tinta cálida sobre crema) con modo oscuro,
blog de casos de estudio y una animación de circuito/PCB en el hero.

## Requisitos

- Node.js 18.20+ / 20.3+ / 22+

## Empezar

```bash
npm install
npm run dev      # servidor local en http://localhost:4321
npm run build    # genera el sitio estático en dist/
npm run preview  # previsualiza el build
```

## Estructura

```
astro-portfolio/
├─ public/
│  ├─ img/facundo.webp            ← foto (Sobre mí)
│  ├─ gifs/thumbnails/*.webp      ← posters de los proyectos
│  └─ scripts/client.js           ← tema, reveal, nav, hover-vídeo, filtro de blog, circuito del hero
├─ src/
│  ├─ data/content.js             ← TODO el contenido (textos ES/EN, proyectos, experiencia, blog…)
│  ├─ styles/
│  │  ├─ global.css               ← tokens, reset, layout, botones, tags, reveal
│  │  └─ components.css           ← estilos de cada sección/componente
│  ├─ components/
│  │  ├─ BaseLayout.astro  Nav.astro  Footer.astro  Icon.astro
│  │  ├─ Hero.astro  Work.astro  Expertise.astro  Contact.astro
│  │  ├─ AboutContent.astro        ← página "Sobre mí" (narrativa + experiencia + formación + stack)
│  │  └─ BlogLatest.astro  BlogList.astro  BlogPost.astro
│  └─ pages/
│     ├─ index.astro  sobre-mi.astro  blog/index.astro  blog/[slug].astro
│     └─ en/  index.astro  about.astro  blog/index.astro  blog/[slug].astro
├─ astro.config.mjs
└─ package.json
```

## Rutas

| Español            | English             |
|--------------------|---------------------|
| `/`                | `/en/`              |
| `/sobre-mi`        | `/en/about`         |
| `/blog`            | `/en/blog`          |
| `/blog/[slug]`     | `/en/blog/[slug]`   |

## Editar contenido

Todo el texto e información vive en **`src/data/content.js`** (objetos `es` / `en`).
Cambiá ahí los textos, proyectos, experiencia, formación, certificaciones y casos del blog —
los componentes leen de ese único archivo.

- **Foto:** reemplazá `public/img/facundo.webp`.
- **Vídeos de proyectos:** los `poster` apuntan a `public/gifs/thumbnails/`; los `video` a archivos `.webm`
  (hoy referenciados desde GitHub raw — podés moverlos a `public/gifs/` y ajustar las URLs en `content.js`).
- **Colores / tipografías:** tokens en `src/styles/global.css` (`:root` y `[data-theme="dark"]`).

## Detalles de implementación

- **i18n por rutas:** cada página fija su idioma y pasa el objeto de strings `t` a los componentes.
- **Tema:** botón en el nav; se persiste en `localStorage` y se aplica antes de pintar (sin parpadeo).
- **Animaciones:** reveal al scroll vía IntersectionObserver; respeta `prefers-reduced-motion`.
- **Circuito del hero:** canvas `.hero-fx`, dibujado en `client.js` (monocromo, usa los tokens del tema).
- Sin dependencias de UI: HTML/CSS plano + un único `client.js` vanilla.

## Deploy

Sitio 100% estático (`npm run build` → `dist/`). Funciona en Netlify, Vercel, Cloudflare Pages
o GitHub Pages. En Netlify/Vercel: build command `npm run build`, publish directory `dist`.
