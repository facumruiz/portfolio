// data.jsx — contenido bilingüe (ES/EN) + datos del portfolio.
// Todo el texto visible vive aquí para que el toggle de idioma sea instantáneo.

// ─────────────────────────────────────────────────────────────
// UI strings
// ─────────────────────────────────────────────────────────────
const STRINGS = {
  es: {
    nav: { work: "Proyectos", expertise: "Expertise", blog: "Blog", about: "Sobre mí", contact: "Contacto" },
    hero: {
      role: "Full-Stack · Embebidos & IoT",
      kicker: "Disponible para nuevos puestos y proyectos",
      title1: "Desarrollo web",
      title2: "y sistemas embebidos.",
      lead: "Desarrollador Full-Stack y Técnico Electrónico con más de 4 años de experiencia. Construyo aplicaciones web y sistemas embebidos e IoT, enfocado en código claro y fácil de mantener. Busco sumarme a un equipo a tiempo completo — y también tomo proyectos freelance.",
      cta: "Ver proyectos",
      cta2: "Contacto",
    },
    work: {
      index: "02",
      title: "Proyectos",
      sub: "Una selección de trabajo full-stack — del modelo de datos a la interfaz.",
      view: "Ver caso de estudio",
      stack: "Stack",
    },
    expertise: {
      index: "03",
      title: "Áreas de expertise",
      sub: "Cómo trabajo, en tres frentes.",
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
      title: "Blog",
      sub: "Casos de estudio a fondo — decisiones, trade-offs y resultados.",
      all: "Todos",
      readMore: "Leer caso",
      readTime: "min de lectura",
      back: "Volver al blog",
      filterBy: "Filtrar por",
      empty: "No hay artículos con ese filtro todavía.",
      latest: "Últimos casos de estudio",
      seeAll: "Ver todo el blog",
    },
    about: {
      index: "01",
      title: "Sobre mí",
      pageSub: "Quién soy, mi trayectoria y mi formación.",
      body1: "Soy Facundo Ruiz, desarrollador Full-Stack y técnico electrónico. Hace más de 4 años construyo software y firmware: desde aplicaciones web hasta sistemas embebidos e IoT con C/C++ y Python.",
      body2: "Me atraen los proyectos donde el código se cruza con el hardware, y el software claro de leer y fácil de mantener. Actualmente curso la Tecnicatura Superior en Sistemas Embebidos e IoT.",
      nowTitle: "Ahora mismo",
      now: "Buscando un puesto full-time como desarrollador Full-Stack o de sistemas embebidos / IoT. Disponible también para proyectos freelance y colaboraciones.",
    },
    contact: {
      index: "06",
      title: "Trabajemos juntos",
      sub: "¿Buscás sumar a tu equipo, o tenés un proyecto en mente? Escribime y lo conversamos.",
      email: "Enviar un email",
      or: "o encontrame en",
    },
    footer: { built: "Diseñado y desarrollado por Facundo Ruiz", top: "Volver arriba" },
    theme: { light: "Claro", dark: "Oscuro" },
  },
  en: {
    nav: { work: "Work", expertise: "Expertise", blog: "Blog", about: "About", contact: "Contact" },
    hero: {
      role: "Full-Stack · Embedded & IoT",
      kicker: "Open to new roles & projects",
      title1: "Web development",
      title2: "and embedded systems.",
      lead: "Full-Stack Developer and Electronics Technician with 4+ years of experience. I build web applications and embedded / IoT systems, focused on clear, maintainable code. I'm looking to join a team full-time — and also take on freelance projects.",
      cta: "View work",
      cta2: "Get in touch",
    },
    work: {
      index: "02",
      title: "Work",
      sub: "A selection of full-stack projects — from the data model to the interface.",
      view: "Read case study",
      stack: "Stack",
    },
    expertise: {
      index: "03",
      title: "Areas of expertise",
      sub: "How I work, across three fronts.",
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
      title: "Blog",
      sub: "In-depth case studies — decisions, trade-offs and outcomes.",
      all: "All",
      readMore: "Read case",
      readTime: "min read",
      back: "Back to blog",
      filterBy: "Filter by",
      empty: "No articles with that filter yet.",
      latest: "Latest case studies",
      seeAll: "See all posts",
    },
    about: {
      index: "01",
      title: "About",
      pageSub: "Who I am, my background and my education.",
      body1: "I'm Facundo Ruiz, a Full-Stack developer and electronics technician. For 4+ years I've built software and firmware: from web apps to embedded and IoT systems with C/C++ and Python.",
      body2: "I'm drawn to projects where code meets hardware, and to software that's clear to read and easy to maintain. I'm currently studying a degree in Embedded Systems & IoT.",
      nowTitle: "Right now",
      now: "Looking for a full-time role as a Full-Stack or embedded / IoT developer. Also open to freelance projects and collaborations.",
    },
    contact: {
      index: "06",
      title: "Let's work together",
      sub: "Hiring for your team, or have a project in mind? Drop me a line and let's talk.",
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
      tagline: "Plataforma para gestionar plantillas, comparar jugadores y analizar rendimiento con visualizaciones claras.",
      outcome: "Comparador con gráficos de radar y barras, gestión de squad y formación táctica en una interfaz oscura y enfocada.",
      role: "Full-stack · UI",
    },
    en: {
      title: "Pro Manager — Sports Management",
      tagline: "Platform to manage squads, compare players and analyze performance with clear visualizations.",
      outcome: "Player comparator with radar and bar charts, squad management and tactical formation in a focused dark UI.",
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
      tagline: "Sitio para mostrar vehículos disponibles, especificaciones técnicas y contacto directo.",
      outcome: "Catálogo claro y optimizado para aumentar las consultas.",
      role: "Frontend",
    },
    en: {
      title: "Car Dealership Website",
      tagline: "Site to showcase available vehicles, technical specs and direct contact.",
      outcome: "A clear catalogue optimized to increase enquiries.",
      role: "Frontend",
    },
  },
];

// ─────────────────────────────────────────────────────────────
// Expertise
// ─────────────────────────────────────────────────────────────
const EXPERTISE = [
  {
    id: "fullstack",
    es: {
      title: "Desarrollo Full-Stack",
      points: [
        "Aplicaciones web con React, Next.js y Node / Express / Nest.",
        "APIs y bases de datos con MongoDB y MySQL.",
        "Frontend y backend integrados con código reutilizable y mantenible.",
      ],
    },
    en: {
      title: "Full-Stack development",
      points: [
        "Web apps with React, Next.js and Node / Express / Nest.",
        "APIs and databases with MongoDB and MySQL.",
        "Frontend and backend integrated with reusable, maintainable code.",
      ],
    },
  },
  {
    id: "embedded",
    es: {
      title: "Sistemas Embebidos & IoT",
      points: [
        "Firmware en C/C++ para Arduino, ESP32 y Raspberry Pi.",
        "Sensores, adquisición de datos y dispositivos conectados.",
        "Del prototipo electrónico al sistema funcionando.",
      ],
    },
    en: {
      title: "Embedded Systems & IoT",
      points: [
        "Firmware in C/C++ for Arduino, ESP32 and Raspberry Pi.",
        "Sensors, data acquisition and connected devices.",
        "From electronics prototype to a working system.",
      ],
    },
  },
  {
    id: "automation",
    es: {
      title: "Automatización & Datos",
      points: [
        "Scripting y automatización con Python.",
        "Procesamiento y análisis de datos.",
        "Entornos con Linux, Docker, Git y AWS.",
      ],
    },
    en: {
      title: "Automation & Data",
      points: [
        "Scripting and automation with Python.",
        "Data processing and analysis.",
        "Environments with Linux, Docker, Git and AWS.",
      ],
    },
  },
];

// ─────────────────────────────────────────────────────────────
// Skills / stack
// ─────────────────────────────────────────────────────────────
const SKILLS = {
  es: [
    { label: "Lenguajes", items: ["JavaScript", "Python", "C/C++", "SQL"] },
    { label: "Tecnologías", items: ["React", "Next.js", "Node.js", "Express", "Nest", "MongoDB", "MySQL"] },
    { label: "Sistemas & herramientas", items: ["Linux", "Git", "Docker", "AWS", "Postman", "Jira", "Swagger"] },
  ],
  en: [
    { label: "Languages", items: ["JavaScript", "Python", "C/C++", "SQL"] },
    { label: "Technologies", items: ["React", "Next.js", "Node.js", "Express", "Nest", "MongoDB", "MySQL"] },
    { label: "Systems & tools", items: ["Linux", "Git", "Docker", "AWS", "Postman", "Jira", "Swagger"] },
  ],
};

// ─────────────────────────────────────────────────────────────
// Experience timeline (real)
// ─────────────────────────────────────────────────────────────
const EXPERIENCE = [
  {
    id: "afec",
    es: { period: "Abr 2023 — Nov 2023", role: "Full-Stack Developer", org: "AFEC – Football Academy", note: "Creé un sistema para que los cuerpos técnicos de fútbol diseñen y administren programas de preparación física personalizados." },
    en: { period: "Apr 2023 — Nov 2023", role: "Full-Stack Developer", org: "AFEC – Football Academy", note: "Built a system for football coaching staff to design and manage personalized physical-preparation programs." },
  },
  {
    id: "onetoone",
    es: { period: "Ene 2021 — Dic 2022", role: "Full-Stack Developer", org: "OnetoOne Int'l Trade Consulting", note: "Desarrollé un sistema interno de gestión de clientes y envíos; luego mantuve y optimicé esa plataforma y los sitios web corporativos." },
    en: { period: "Jan 2021 — Dec 2022", role: "Full-Stack Developer", org: "OnetoOne Int'l Trade Consulting", note: "Built an internal client & shipping management system, then maintained and optimized that platform and the corporate websites." },
  },
  {
    id: "dtres",
    es: { period: "Ene 2020 — Dic 2020", role: "Software Developer", org: "Estudio DTRES", note: "Software para simuladores quirúrgicos usados en la formación de profesionales en el Hospital Garrahan. Automaticé por completo la adquisición y el análisis de datos de cada entrenamiento (antes en Excel)." },
    en: { period: "Jan 2020 — Dec 2020", role: "Software Developer", org: "Estudio DTRES", note: "Software for surgical simulators used to train professionals at Hospital Garrahan. Fully automated the acquisition and analysis of each training session's data (previously in Excel)." },
  },
  {
    id: "fablab",
    es: { period: "May 2019 — Dic 2019", role: "Firmware Developer", org: "Fab Lab — Vicente López", note: "Soporte técnico y capacitación en firmware (Arduino, Raspberry Pi) para proyectos de innovación y robótica del laboratorio." },
    en: { period: "May 2019 — Dec 2019", role: "Firmware Developer", org: "Fab Lab — Vicente López", note: "Technical support and training in firmware (Arduino, Raspberry Pi) for the lab's innovation and robotics projects." },
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
      title: "Pro Manager: comparar jugadores de un vistazo",
      excerpt: "Cómo armé una plataforma de gestión deportiva donde el dato se entiende solo: comparador visual, plantilla y formación táctica.",
      body: [
        { type: "p", text: "Pro Manager nació de una idea simple: la mayoría de las apps deportivas tiran tablas enormes de números y te obligan a interpretarlos vos. Quería lo contrario — que abrir un jugador y compararlo con otro fuera tan directo como mirar una figura." },
        { type: "h", text: "El comparador" },
        { type: "p", text: "El corazón de la app es el comparador: elegís dos jugadores y un gráfico de radar superpone sus atributos, mientras barras laterales desglosan cada métrica. En un segundo ves quién domina en qué, sin leer una sola celda de tabla." },
        { type: "img", src: "/img/pm-comparador.jpg", alt: "Comparador de jugadores con gráfico de radar y barras" },
        { type: "h", text: "Plantilla y formación" },
        { type: "p", text: "Desde la gestión de plantilla se arma el squad y se acomoda la formación sobre la cancha. Cada jugador es una tarjeta con su posición y rating, y la formación se actualiza de forma visual al moverlos." },
        { type: "img", src: "/img/pm-plantilla.jpg", alt: "Gestión de plantilla y formación táctica" },
        { type: "h", text: "Decisiones técnicas" },
        { type: "p", text: "La armé con Next.js + TypeScript para tener tipado de punta a punta sobre los datos de jugadores, y Recharts para los gráficos de radar y barras. La interfaz es oscura y de alto contraste a propósito: el foco siempre está en el dato, no en el cromo." },
        { type: "h", text: "Resultado" },
        { type: "p", text: "Una plataforma donde analizar y comparar rendimiento es visual e inmediato. Probala en vivo en el demo." },
      ],
    },
    en: {
      title: "Pro Manager: compare players at a glance",
      excerpt: "How I built a sports management platform where the data explains itself: visual comparator, squad and tactical formation.",
      body: [
        { type: "p", text: "Pro Manager started from a simple idea: most sports apps throw huge tables of numbers at you and make you interpret them yourself. I wanted the opposite — opening a player and comparing them to another should be as direct as looking at a shape." },
        { type: "h", text: "The comparator" },
        { type: "p", text: "The heart of the app is the comparator: you pick two players and a radar chart overlays their attributes, while side bars break down each metric. In a second you see who dominates where, without reading a single table cell." },
        { type: "img", src: "/img/pm-comparador.jpg", alt: "Player comparator with radar and bar charts" },
        { type: "h", text: "Squad and formation" },
        { type: "p", text: "From squad management you build the team and arrange the formation on the pitch. Each player is a card with their position and rating, and the formation updates visually as you move them." },
        { type: "img", src: "/img/pm-plantilla.jpg", alt: "Squad management and tactical formation" },
        { type: "h", text: "Technical decisions" },
        { type: "p", text: "I built it with Next.js + TypeScript for end-to-end typing over the player data, and Recharts for the radar and bar charts. The UI is dark and high-contrast on purpose: focus stays on the data, not the chrome." },
        { type: "h", text: "Outcome" },
        { type: "p", text: "A platform where analyzing and comparing performance is visual and immediate. Try it live in the demo." },
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
      title: "Un catálogo de autos que carga al instante",
      excerpt: "Imágenes pesadas, decenas de modelos y una conexión móvil promedio. Así mantuve la concesionaria rápida.",
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
      title: "A car catalogue that loads instantly",
      excerpt: "Heavy images, dozens of models and an average mobile connection. Here's how I kept the dealership fast.",
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
  {
    id: "post-landing",
    slug: "landing-que-convierte",
    date: "2024-08-20",
    readMin: 5,
    tags: ["Frontend", "UX", "Conversión"],
    projectId: "landing",
    es: {
      title: "Anatomía de una landing que convierte",
      excerpt: "Menos secciones, una sola acción clara y carga inmediata. Las decisiones detrás de una landing efectiva.",
      body: [
        { type: "p", text: "Una landing no es una mini-web: es una sola conversación con un objetivo. Cada elemento que no empuja hacia la acción es ruido que cuesta atención." },
        { type: "h", text: "El principio" },
        { type: "p", text: "Una página, una promesa, una acción. Reduje la estructura a lo esencial: propuesta de valor, prueba, y un único llamado a la acción repetido en los momentos clave." },
        { type: "h", text: "La ejecución" },
        { type: "p", text: "Prioricé el contenido por encima del pliegue, eliminé scripts innecesarios y mantuve el CSS al mínimo para que la página sea interactiva casi al instante." },
        { type: "h", text: "Resultado" },
        { type: "p", text: "Una estructura simple y una carga inmediata hicieron el trabajo: la página guía al visitante hacia una sola decisión, sin fricción." },
      ],
    },
    en: {
      title: "Anatomy of a landing page that converts",
      excerpt: "Fewer sections, one clear action and instant load. The decisions behind an effective landing page.",
      body: [
        { type: "p", text: "A landing page isn't a mini-website: it's a single conversation with one goal. Anything that doesn't push toward the action is noise that costs attention." },
        { type: "h", text: "The principle" },
        { type: "p", text: "One page, one promise, one action. I stripped the structure to the essentials: value proposition, proof, and a single call to action repeated at the key moments." },
        { type: "h", text: "The execution" },
        { type: "p", text: "I prioritized above-the-fold content, removed unnecessary scripts, and kept CSS minimal so the page is interactive almost instantly." },
        { type: "h", text: "Outcome" },
        { type: "p", text: "A simple structure and an instant load did the job: the page guides the visitor toward a single decision, friction-free." },
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
