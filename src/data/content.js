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
    id: "sports",
    year: "2025",
    slug: "plataforma-gestion-deportiva",
    stack: ["MongoDB", "Express", "React", "Node"],
    media: {
      poster: "/gifs/thumbnails/futbol-thumb.webp",
      video: "https://raw.githubusercontent.com/facumruiz/portfolio/main//gifs/futbol.webm",
    },
    es: {
      title: "Plataforma de Gestión Deportiva",
      tagline: "Aplicación web para visualizar partidos, equipos y estadísticas en tiempo real.",
      outcome: "Mejora en la visualización de datos deportivos y en la experiencia general del usuario.",
      role: "Full-stack · UI",
    },
    en: {
      title: "Sports Management Platform",
      tagline: "Web app to view matches, teams and statistics in real time.",
      outcome: "Improved sports-data visualization and overall user experience.",
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
  {
    id: "landing",
    year: "2024",
    slug: "landing-page-simple",
    stack: ["React", "Performance"],
    media: {
      poster: "/gifs/thumbnails/landing-thumb.webp",
      video: "https://raw.githubusercontent.com/facumruiz/portfolio/main//gifs/landing.webm",
    },
    es: {
      title: "Landing Page de Alta Conversión",
      tagline: "Landing enfocada en la conversión para servicios o productos.",
      outcome: "Carga rápida y estructura pensada para impulsar conversiones.",
      role: "Frontend",
    },
    en: {
      title: "High-Conversion Landing Page",
      tagline: "Landing page focused on conversion for services or products.",
      outcome: "Fast load and a structure designed to drive conversions.",
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
    id: "post-sports",
    slug: "tiempo-real-plataforma-deportiva",
    date: "2025-03-12",
    readMin: 8,
    tags: ["React", "Node.js", "MongoDB", "Tiempo real"],
    projectId: "sports",
    es: {
      title: "Estadísticas en tiempo real sin matar el servidor",
      excerpt: "Cómo resolví la actualización en vivo de partidos y estadísticas sin saturar el backend ni la batería del cliente.",
      body: [
        { type: "p", text: "La Plataforma de Gestión Deportiva tenía un requisito claro: los marcadores y estadísticas debían sentirse en vivo. El primer instinto fue hacer polling cada pocos segundos, pero eso multiplicaba las consultas a MongoDB y descargaba la batería en móvil." },
        { type: "h", text: "El problema" },
        { type: "p", text: "Con polling agresivo, cada cliente abierto generaba decenas de lecturas por minuto. Con cientos de usuarios siguiendo un partido, el backend pasaba la mayor parte del tiempo respondiendo \"no cambió nada\"." },
        { type: "h", text: "La decisión" },
        { type: "p", text: "Pasé a un modelo basado en eventos: el servidor solo emite cuando hay un cambio real en el partido. El cliente se suscribe a un canal por partido y recibe diffs, no el estado completo." },
        { type: "code", text: "// el cliente solo pide el estado completo una vez\nsocket.on('match:patch', (patch) => {\n  setMatch((prev) => applyPatch(prev, patch));\n});" },
        { type: "h", text: "Resultado" },
        { type: "p", text: "Las lecturas a la base de datos cayeron de forma drástica y la interfaz se siente instantánea. La lección: no preguntes constantemente — deja que el dato te avise cuando cambia." },
      ],
    },
    en: {
      title: "Real-time stats without killing the server",
      excerpt: "How I solved live match and stats updates without hammering the backend or draining the client's battery.",
      body: [
        { type: "p", text: "The Sports Management Platform had one clear requirement: scores and stats had to feel live. The first instinct was to poll every few seconds, but that multiplied MongoDB queries and drained mobile batteries." },
        { type: "h", text: "The problem" },
        { type: "p", text: "With aggressive polling, every open client produced dozens of reads per minute. With hundreds of users following a match, the backend spent most of its time answering \"nothing changed\"." },
        { type: "h", text: "The decision" },
        { type: "p", text: "I moved to an event-driven model: the server only emits when something actually changes in the match. The client subscribes to a per-match channel and receives diffs, not the full state." },
        { type: "code", text: "// the client only requests full state once\nsocket.on('match:patch', (patch) => {\n  setMatch((prev) => applyPatch(prev, patch));\n});" },
        { type: "h", text: "Outcome" },
        { type: "p", text: "Database reads dropped dramatically and the UI feels instant. The lesson: don't ask constantly — let the data tell you when it changes." },
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
