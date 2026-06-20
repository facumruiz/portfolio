// data.jsx — contenido bilingüe (ES/EN) + datos del portfolio.
// Todo el texto visible vive aquí para que el toggle de idioma sea instantáneo.

// ─────────────────────────────────────────────────────────────
// UI strings
// ─────────────────────────────────────────────────────────────
const STRINGS = {
  es: {
    nav: { work: "Proyectos", expertise: "Áreas", blog: "Documentación", about: "Sobre mí", contact: "Contacto" },
    hero: {
      role: "Datos · Full-Stack",
      kicker: "Disponible para nuevos puestos",
      title1: "Análisis de datos",
      title2: "y desarrollo de software.",
      lead: "Trabajo con datos usando SQL, Python, Power BI y Google Analytics: modelado, limpieza, análisis y visualización. También automatizo la carga y el procesamiento de datos, y desarrollo software full-stack. Técnico electrónico con más de 4 años de experiencia.",
      cta: "Ver proyectos",
      cta2: "Contacto",
    },
    work: {
      index: "02",
      title: "Proyectos",
      sub: "Proyectos con su documentación técnica.",
      view: "Ver documentación",
      stack: "Stack",
    },
    expertise: {
      index: "03",
      title: "Áreas de trabajo",
      sub: "Herramientas y tareas por área.",
      stackTitle: "Stack & herramientas",
    },
    experience: {
      index: "04",
      title: "Experiencia",
      sub: "Trayectoria, formación y certificaciones.",
      present: "Actualidad",
      eduTitle: "Formación",
      certTitle: "Certificaciones",
    },
    blog: {
      index: "05",
      title: "Documentación",
      sub: "Notas técnicas y documentación de proyectos.",
      all: "Todos",
      readMore: "Leer",
      readTime: "min de lectura",
      back: "Volver",
      filterBy: "Filtrar por",
      empty: "No hay notas con ese filtro todavía.",
      latest: "Documentación reciente",
      seeAll: "Ver toda la documentación",
    },
    about: {
      index: "01",
      title: "Sobre mí",
      pageSub: "Quién soy, mi trayectoria y mi formación.",
      body1: "Soy Facundo Ruiz, desarrollador Full-Stack y técnico electrónico. Hace más de 4 años construyo software y firmware: desde aplicaciones web hasta sistemas embebidos e IoT con C/C++ y Python.",
      body2: "Me atraen los proyectos donde el código se cruza con el hardware, y el software claro de leer y fácil de mantener. Actualmente curso la Tecnicatura Superior en Sistemas Embebidos e IoT.",
      nowTitle: "Ahora mismo",
      now: "Buscando un puesto en análisis o gestión de datos (Data Analyst / Data Entry). Abierto también a desarrollo full-stack.",
    },
    contact: {
      index: "06",
      title: "Contacto",
      sub: "Para consultas sobre puestos o proyectos, escribime por email.",
      email: "Enviar un email",
      or: "o encontrame en",
    },
    footer: { built: "Diseñado y desarrollado por Facundo Ruiz", top: "Volver arriba" },
    theme: { light: "Claro", dark: "Oscuro" },
  },
  en: {
    nav: { work: "Work", expertise: "Areas", blog: "Docs", about: "About", contact: "Contact" },
    hero: {
      role: "Data · Full-Stack",
      kicker: "Open to new roles",
      title1: "Data analysis",
      title2: "and software development.",
      lead: "I work with data using SQL, Python, Power BI and Google Analytics: modeling, cleaning, analysis and visualization. I also automate data entry and processing, and develop full-stack software. Electronics technician with 4+ years of experience.",
      cta: "View work",
      cta2: "Get in touch",
    },
    work: {
      index: "02",
      title: "Work",
      sub: "Projects with their technical documentation.",
      view: "Read documentation",
      stack: "Stack",
    },
    expertise: {
      index: "03",
      title: "Areas of work",
      sub: "Tools and tasks per area.",
      stackTitle: "Stack & tools",
    },
    experience: {
      index: "04",
      title: "Experience",
      sub: "Background, education and certifications.",
      present: "Present",
      eduTitle: "Education",
      certTitle: "Certifications",
    },
    blog: {
      index: "05",
      title: "Documentation",
      sub: "Technical notes and project documentation.",
      all: "All",
      readMore: "Read",
      readTime: "min read",
      back: "Back",
      filterBy: "Filter by",
      empty: "No notes with that filter yet.",
      latest: "Recent documentation",
      seeAll: "See all documentation",
    },
    about: {
      index: "01",
      title: "About",
      pageSub: "Who I am, my background and my education.",
      body1: "I'm Facundo Ruiz, a Full-Stack developer and electronics technician. For 4+ years I've built software and firmware: from web apps to embedded and IoT systems with C/C++ and Python.",
      body2: "I'm drawn to projects where code meets hardware, and to software that's clear to read and easy to maintain. I'm currently studying a degree in Embedded Systems & IoT.",
      nowTitle: "Right now",
      now: "Looking for a role in data analysis or data management (Data Analyst / Data Entry). Also open to full-stack development.",
    },
    contact: {
      index: "06",
      title: "Contact",
      sub: "For questions about roles or projects, send me an email.",
      email: "Send an email",
      or: "or find me on",
    },
    footer: { built: "Designed & built by Facundo Ruiz", top: "Back to top" },
    theme: { light: "Light", dark: "Dark" },
  },
};

// ─────────────────────────────────────────────────────────────
// Projects
// ─────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: "esphome",
    year: "2026",
    slug: "esp-home-domotica-esp32",
    diagram: "/img/esphome-arquitectura.png",
    repo: "https://github.com/facumruiz/esp-home",
    stack: ["ESP-IDF", "C/C++", "MQTT", "Home Assistant", "Docker"],
    es: {
      title: "esp-home — Domótica sobre ESP32",
      tagline: "Proyecto de fin de carrera: domótica construida fase a fase, de un access point aislado a MQTT + Home Assistant.",
      outcome: "Control de luces y sensores en tiempo real, integrado a Home Assistant vía MQTT.",
      role: "Proyecto final · Embebidos & IoT",
    },
    en: {
      title: "esp-home — ESP32 home automation",
      tagline: "Final-year project: home automation built phase by phase, from an isolated access point to MQTT + Home Assistant.",
      outcome: "Real-time light & sensor control, integrated into Home Assistant over MQTT.",
      role: "Final project · Embedded & IoT",
    },
  },
  {
    id: "sports",
    year: "2025",
    slug: "plataforma-gestion-deportiva",
    shots: ["/img/pm-home.jpg", "/img/pm-comparador.jpg", "/img/pm-plantilla.jpg"],
    demo: "https://pro-manager-one.vercel.app/",
    stack: ["TypeScript", "Next.js", "Node.js", "Recharts", "CSS"],
    es: {
      title: "Pro Manager — Gestión Deportiva",
      tagline: "Aplicación web para gestionar plantillas, comparar jugadores y visualizar métricas de rendimiento.",
      outcome: "Comparador de jugadores con gráficos de radar y barras (Recharts), gestión de plantilla y armado de formación.",
      role: "Full-stack · UI",
    },
    en: {
      title: "Pro Manager — Sports Management",
      tagline: "Web app to manage squads, compare players and visualize performance metrics.",
      outcome: "Player comparator with radar and bar charts (Recharts), squad management and formation builder.",
      role: "Full-stack · UI",
    },
  },
  {
    id: "cars",
    year: "2024",
    slug: "concesionaria-autos",
    stack: ["React", "Vite", "CSS"],
    media: {
      poster: "/gifs/thumbnails/autos-thumb.webp",
      video: "https://raw.githubusercontent.com/facumruiz/portfolio/main//gifs/autos.webm",
    },
    es: {
      title: "Sitio Web de Concesionaria de Autos",
      tagline: "Sitio para mostrar vehículos disponibles, especificaciones técnicas y contacto.",
      outcome: "Catálogo de vehículos con fichas técnicas y formulario de contacto.",
      role: "Frontend",
    },
    en: {
      title: "Car Dealership Website",
      tagline: "Site to show available vehicles, technical specs and contact.",
      outcome: "Vehicle catalogue with technical sheets and a contact form.",
      role: "Frontend",
    },
  },
];

// ─────────────────────────────────────────────────────────────
// Expertise
// ─────────────────────────────────────────────────────────────
const EXPERTISE = [
  {
    id: "data",
    es: {
      title: "Análisis de Datos",
      points: [
        "Consultas y modelado de datos con SQL.",
        "Limpieza, transformación y análisis con Python (pandas).",
        "Dashboards y reportes con Power BI y Google Analytics.",
      ],
    },
    en: {
      title: "Data Analysis",
      points: [
        "Querying and data modeling with SQL.",
        "Cleaning, transformation and analysis with Python (pandas).",
        "Dashboards and reporting with Power BI and Google Analytics.",
      ],
    },
  },
  {
    id: "automation",
    es: {
      title: "Data Entry & Automatización",
      points: [
        "Carga y control de datos en sistemas ERP, con foco en precisión.",
        "Automatización de adquisición y procesamiento con Python.",
        "Reemplazo de planillas Excel por procesos confiables y repetibles.",
      ],
    },
    en: {
      title: "Data Entry & Automation",
      points: [
        "Data entry and validation in ERP systems, focused on accuracy.",
        "Automated acquisition and processing with Python.",
        "Replacing Excel spreadsheets with reliable, repeatable processes.",
      ],
    },
  },
  {
    id: "fullstack",
    es: {
      title: "Desarrollo Full-Stack",
      points: [
        "Aplicaciones web con React, Next.js y Node / Express / Nest.",
        "APIs y bases de datos con MongoDB y MySQL.",
        "Herramientas internas y visualizaciones a medida sobre los datos.",
      ],
    },
    en: {
      title: "Full-Stack development",
      points: [
        "Web apps with React, Next.js and Node / Express / Nest.",
        "APIs and databases with MongoDB and MySQL.",
        "Internal tools and custom visualizations on top of the data.",
      ],
    },
  },
];

// ─────────────────────────────────────────────────────────────
// Skills / stack
// ─────────────────────────────────────────────────────────────
const SKILLS = {
  es: [
    { label: "Datos", items: ["SQL", "Python", "Power BI", "Google Analytics", "Excel"] },
    { label: "Lenguajes", items: ["Python", "SQL", "JavaScript", "C/C++"] },
    { label: "Tecnologías", items: ["React", "Next.js", "Node.js", "Express", "MongoDB", "MySQL"] },
    { label: "Sistemas & herramientas", items: ["Linux", "Git", "Docker", "AWS", "Postman", "Jira"] },
  ],
  en: [
    { label: "Data", items: ["SQL", "Python", "Power BI", "Google Analytics", "Excel"] },
    { label: "Languages", items: ["Python", "SQL", "JavaScript", "C/C++"] },
    { label: "Technologies", items: ["React", "Next.js", "Node.js", "Express", "MongoDB", "MySQL"] },
    { label: "Systems & tools", items: ["Linux", "Git", "Docker", "AWS", "Postman", "Jira"] },
  ],
};

// ─────────────────────────────────────────────────────────────
// Experience timeline (real)
// ─────────────────────────────────────────────────────────────
const EXPERIENCE = [
  {
    id: "afec",
    es: { period: "Abr 2023 — Abr 2024", role: "Data Analyst / Desarrollador Fullstack", org: "AFEC – Football Academy", note: "Creación y mantenimiento de bases de datos internas para el seguimiento de jugadores y cuerpos técnicos. Desarrollé un sistema para diseñar y administrar programas de preparación física personalizados." },
    en: { period: "Apr 2023 — Apr 2024", role: "Data Analyst / Fullstack Developer", org: "AFEC – Football Academy", note: "Built and maintained internal databases to track players and coaching staff. Developed a system to design and manage personalized physical-preparation programs." },
  },
  {
    id: "onetoone",
    es: { period: "Ene 2021 — Dic 2022", role: "Desarrollador Fullstack / Data Entry", org: "OnetoOne Int'l Trade Consulting", note: "Carga y actualización de datos de productos, clientes e inventario en sistemas ERP internos. Verificación y control de registros de envíos internacionales, reduciendo errores en la operación." },
    en: { period: "Jan 2021 — Dec 2022", role: "Fullstack Developer / Data Entry", org: "OnetoOne Int'l Trade Consulting", note: "Loaded and updated product, client and inventory data in internal ERP systems. Verified and audited international shipping records, reducing operational errors." },
  },
  {
    id: "dtres",
    es: { period: "Ene 2020 — Dic 2020", role: "Software Developer / Data Analyst", org: "Estudio DTRES", note: "Registro y control de datos generados por simuladores quirúrgicos usados en la formación de profesionales en el Hospital Garrahan. Automaticé el proceso de adquisición y análisis de datos, reemplazando planillas Excel." },
    en: { period: "Jan 2020 — Dec 2020", role: "Software Developer / Data Analyst", org: "Estudio DTRES", note: "Recorded and audited data generated by surgical simulators used to train professionals at Hospital Garrahan. Automated the data acquisition and analysis process, replacing Excel spreadsheets." },
  },
  {
    id: "fablab",
    es: { period: "Abr 2019 — Dic 2019", role: "Soporte Técnico / Firmware Developer", org: "Fab Lab — Vicente López", note: "Soporte técnico en la operación de impresoras 3D y máquinas de corte láser y CNC. Capacitación básica a usuarios en programación de firmware con Arduino y Raspberry Pi." },
    en: { period: "Apr 2019 — Dec 2019", role: "Technical Support / Firmware Developer", org: "Fab Lab — Vicente López", note: "Technical support for 3D printers and laser/CNC cutting machines. Basic user training in firmware programming with Arduino and Raspberry Pi." },
  },
];

// ─────────────────────────────────────────────────────────────
// Education + certifications
// ─────────────────────────────────────────────────────────────
const EDUCATION = [
  {
    id: "ifts",
    es: { period: "2024 — En curso", degree: "Téc. Superior en Sistemas Embebidos e IoT", org: "IFTS N°14" },
    en: { period: "2024 — In progress", degree: "Higher Technician in Embedded Systems & IoT", org: "IFTS N°14" },
  },
  {
    id: "utn",
    es: { period: "2023", degree: "Diplomatura Profesional Full-Stack", org: "UTN" },
    en: { period: "2023", degree: "Professional Full-Stack Diploma", org: "UTN" },
  },
  {
    id: "ader",
    es: { period: "2012 — 2019", degree: "Técnico Electrónico", org: "E.E.S.T N°1 «Eduardo Ader»" },
    en: { period: "2012 — 2019", degree: "Electronics Technician", org: "E.E.S.T N°1 «Eduardo Ader»" },
  },
];

const CERTS = [
  { name: "Google IT Automation with Python", org: "Google", year: "2023" },
  { name: "Data Analytics", org: "CoderHouse", year: "2021" },
  { name: "IoT", org: "Cisco Networking Academy", year: "2017" },
];

// ─────────────────────────────────────────────────────────────
// Blog — case studies
// ─────────────────────────────────────────────────────────────
const POSTS = [
  {
    id: "post-esphome",
    slug: "esp-home-domotica-esp32",
    date: "2026-04-15",
    readMin: 9,
    tags: ["ESP32", "MQTT", "Home Assistant", "IoT", "C/C++"],
    projectId: "esphome",
    youtube: "GxJcZw_B8DM",
    poster: "/img/esphome-portada.jpg",
    repo: "https://github.com/facumruiz/esp-home",
    es: {
      title: "esp-home: domótica sobre ESP32, fase a fase",
      excerpt: "Mi proyecto de fin de carrera: domótica sobre ESP32 construida fase a fase, de un access point aislado a MQTT + Home Assistant.",
      body: [
        { type: "p", text: "esp-home es mi proyecto de fin de carrera de la Tecnicatura en Sistemas Embebidos e IoT. La idea era llevar una placa ESP32 desde un dispositivo aislado hasta un nodo integrado en una instalación domótica real — y hacerlo paso a paso, sin reescribir todo el firmware en cada avance." },
        { type: "h", text: "El objetivo" },
        { type: "p", text: "Construir un sistema de domótica progresivo: cada fase debía funcionar por sí sola y, a la vez, ser la base de la siguiente. De esa forma el proyecto se podía mostrar, probar y documentar en cualquier punto del camino." },
        { type: "h", text: "Fase a fase" },
        { type: "p", text: "Arranqué con un access point local y un webserver HTTP para encender un LED desde el navegador — cero dependencia de la red de casa. Después levanté Home Assistant en Docker como cerebro central. Por último migré la comunicación a MQTT, con fallback automático entre AP y STA para que el dispositivo nunca quede inalcanzable." },
        { type: "h", text: "La decisión técnica" },
        { type: "p", text: "MQTT en lugar de HTTP-polling: el ESP32 publica su estado y se suscribe a comandos por tópico. Mensajes chicos, reconexión barata y Home Assistant descubre el dispositivo casi solo." },
        { type: "code", text: "// el ESP32 escucha comandos y publica estado\nesp_mqtt_client_subscribe(client, \"home/led/set\", 1);\n\nvoid on_message(const char *topic, const char *payload) {\n  if (!strcmp(topic, \"home/led/set\"))\n    gpio_set_level(LED_GPIO, atoi(payload));\n}" },
        { type: "h", text: "Módulos" },
        { type: "p", text: "Sobre esa base sumé una tira WS2812B controlable por MQTT y webserver local, y un sensor de luz LM393 que habilita un modo automático: las luces responden a la luz ambiente sin intervención." },
        { type: "h", text: "Resultado" },
        { type: "p", text: "Un sistema domótico funcionando de punta a punta — firmware en C/C++ con ESP-IDF, broker MQTT y Home Assistant — documentado fase por fase en el repositorio para poder reproducirlo o extenderlo. El video muestra el sistema en funcionamiento." },
      ],
    },
    en: {
      title: "esp-home: ESP32 home automation, phase by phase",
      excerpt: "My final-year project: ESP32 home automation built phase by phase, from an isolated access point to MQTT + Home Assistant.",
      body: [
        { type: "p", text: "esp-home is the final project of my Embedded Systems & IoT degree. The goal was to take an ESP32 board from an isolated device to a node integrated into a real home-automation setup — and to do it step by step, without rewriting the whole firmware at each stage." },
        { type: "h", text: "The goal" },
        { type: "p", text: "Build a progressive home-automation system: each phase had to work on its own and, at the same time, be the foundation of the next. That way the project could be shown, tested and documented at any point along the way." },
        { type: "h", text: "Phase by phase" },
        { type: "p", text: "I started with a local access point and an HTTP webserver to toggle an LED from the browser — zero dependency on the home network. Then I stood up Home Assistant in Docker as the central brain. Finally I moved communication to MQTT, with automatic fallback between AP and STA so the device is never unreachable." },
        { type: "h", text: "The technical decision" },
        { type: "p", text: "MQTT instead of HTTP polling: the ESP32 publishes its state and subscribes to commands by topic. Small messages, cheap reconnection, and Home Assistant discovers the device almost on its own." },
        { type: "code", text: "// the ESP32 listens for commands and publishes state\nesp_mqtt_client_subscribe(client, \"home/led/set\", 1);\n\nvoid on_message(const char *topic, const char *payload) {\n  if (!strcmp(topic, \"home/led/set\"))\n    gpio_set_level(LED_GPIO, atoi(payload));\n}" },
        { type: "h", text: "Modules" },
        { type: "p", text: "On top of that base I added a WS2812B strip controllable over MQTT and a local webserver, plus an LM393 light sensor that enables an automatic mode: the lights respond to ambient light with no intervention." },
        { type: "h", text: "Outcome" },
        { type: "p", text: "A home-automation system working end to end — firmware in C/C++ with ESP-IDF, an MQTT broker and Home Assistant — documented phase by phase in the repository so it can be reproduced or extended. The video shows the system in action." },
      ],
    },
  },
  {
    id: "post-sports",
    slug: "tiempo-real-plataforma-deportiva",
    date: "2025-03-12",
    readMin: 7,
    tags: ["Next.js", "TypeScript", "Recharts", "UI/UX"],
    projectId: "sports",
    shots: ["/img/pm-home.jpg", "/img/pm-comparador.jpg", "/img/pm-plantilla.jpg"],
    demo: "https://pro-manager-one.vercel.app/",
    es: {
      title: "Pro Manager: comparación y gestión de plantillas",
      excerpt: "Documentación de Pro Manager: comparador de jugadores con gráficos de radar y barras, gestión de plantilla y armado de formación.",
      body: [
        { type: "p", text: "Pro Manager es una aplicación web de gestión deportiva. Permite administrar una plantilla de jugadores, comparar sus atributos y armar una formación táctica. Esta nota documenta sus secciones principales y las decisiones técnicas detrás." },
        { type: "h", text: "Comparador" },
        { type: "p", text: "La sección de comparación toma dos jugadores y superpone sus atributos en un gráfico de radar; barras laterales desglosan cada métrica por separado. El objetivo es leer las diferencias de forma visual en lugar de sobre una tabla." },
        { type: "img", src: "/img/pm-comparador.jpg", alt: "Comparador de jugadores con gráfico de radar y barras" },
        { type: "h", text: "Plantilla y formación" },
        { type: "p", text: "Desde la gestión de plantilla se administran los jugadores y se ubica la formación sobre la cancha. Cada jugador es una tarjeta con su posición y rating; la formación se actualiza al reubicarlos." },
        { type: "img", src: "/img/pm-plantilla.jpg", alt: "Gestión de plantilla y formación táctica" },
        { type: "h", text: "Decisiones técnicas" },
        { type: "p", text: "Construida con Next.js y TypeScript, con tipado sobre los datos de jugadores. Los gráficos de radar y barras usan Recharts. La interfaz es oscura y de alto contraste para mantener la atención en los datos." },
        { type: "h", text: "Estado" },
        { type: "p", text: "La aplicación está desplegada y disponible para probar en el demo enlazado arriba." },
      ],
    },
    en: {
      title: "Pro Manager: player comparison and squad management",
      excerpt: "Documentation for Pro Manager: player comparator with radar and bar charts, squad management and formation builder.",
      body: [
        { type: "p", text: "Pro Manager is a web application for sports management. It manages a player squad, compares their attributes and builds a tactical formation. This note documents its main sections and the technical decisions behind them." },
        { type: "h", text: "Comparator" },
        { type: "p", text: "The comparison section takes two players and overlays their attributes on a radar chart; side bars break down each metric separately. The goal is to read differences visually rather than from a table." },
        { type: "img", src: "/img/pm-comparador.jpg", alt: "Player comparator with radar and bar charts" },
        { type: "h", text: "Squad and formation" },
        { type: "p", text: "Squad management handles the players and places the formation on the pitch. Each player is a card with their position and rating; the formation updates as they are repositioned." },
        { type: "img", src: "/img/pm-plantilla.jpg", alt: "Squad management and tactical formation" },
        { type: "h", text: "Technical decisions" },
        { type: "p", text: "Built with Next.js and TypeScript, with typing over the player data. Radar and bar charts use Recharts. The interface is dark and high-contrast to keep attention on the data." },
        { type: "h", text: "Status" },
        { type: "p", text: "The application is deployed and available to try in the demo linked above." },
      ],
    },
  },
  {
    id: "post-cars",
    slug: "catalogo-rapido-concesionaria",
    date: "2024-11-04",
    readMin: 6,
    tags: ["React", "Frontend", "Rendimiento", "UX"],
    projectId: "cars",
    es: {
      title: "Optimización de carga en un catálogo de autos",
      excerpt: "Notas sobre cómo reduje el peso inicial del catálogo: carga diferida, imágenes responsivas y placeholders.",
      body: [
        { type: "p", text: "Una concesionaria vive de sus fotos: el usuario quiere ver el auto. Pero cada modelo traía imágenes de alta resolución y la galería completa pesaba demasiado para una primera carga." },
        { type: "h", text: "El problema" },
        { type: "p", text: "Cargar todo de golpe daba una pantalla en blanco de varios segundos. En móvil, muchos visitantes se iban antes de ver el primer auto." },
        { type: "h", text: "La decisión" },
        { type: "p", text: "Apliqué carga diferida por tarjeta, imágenes en formato moderno con tamaños responsivos, y un placeholder de bajo peso mientras llega la foto real. La lista se renderiza primero; las imágenes entran a medida que aparecen en pantalla." },
        { type: "h", text: "Resultado" },
        { type: "p", text: "La primera vista útil llega en una fracción del tiempo anterior y el catálogo se siente fluido al hacer scroll. Optimizar imágenes fue el cambio de mayor impacto del proyecto." },
      ],
    },
    en: {
      title: "Load optimization in a car catalogue",
      excerpt: "Notes on reducing the catalogue's initial weight: lazy loading, responsive images and placeholders.",
      body: [
        { type: "p", text: "A dealership lives on its photos: the user wants to see the car. But every model shipped high-resolution images, and the full gallery was too heavy for a first load." },
        { type: "h", text: "The problem" },
        { type: "p", text: "Loading everything at once gave a blank screen for several seconds. On mobile, many visitors left before seeing the first car." },
        { type: "h", text: "The decision" },
        { type: "p", text: "I applied per-card lazy loading, modern image formats with responsive sizes, and a lightweight placeholder while the real photo arrives. The list renders first; images come in as they enter the viewport." },
        { type: "h", text: "Outcome" },
        { type: "p", text: "The first useful view arrives in a fraction of the previous time and the catalogue feels smooth on scroll. Optimizing images was the single highest-impact change in the project." },
      ],
    },
  },
];



// Enlaces de contacto
const LINKS = {
  github: "https://github.com/facumruiz",
  linkedin: "https://www.linkedin.com/in/facundoruiz",
  email: "facundoruizdev@gmail.com",
};

export { STRINGS, LINKS, PROJECTS, EXPERTISE, SKILLS, EXPERIENCE, EDUCATION, CERTS, POSTS };
