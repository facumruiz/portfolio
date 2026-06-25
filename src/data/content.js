// data.jsx — contenido bilingüe (ES/EN) + datos del portfolio.
// Todo el texto visible vive aquí para que el toggle de idioma sea instantáneo.

// ─────────────────────────────────────────────────────────────
// UI strings
// ─────────────────────────────────────────────────────────────
const STRINGS = {
  es: {
    nav: { work: "Proyectos", expertise: "Áreas", blog: "Documentación", about: "Sobre mí", contact: "Contacto" },
    hero: {
      role: "Backend · Datos",
      kicker: "Disponible para nuevos puestos",
      title1: "Desarrollo backend",
      title2: "y análisis de datos.",
      lead: "Desarrollador full-stack con foco en backend: diseño e implementación de bases de datos y APIs para grandes volúmenes de datos con Node, Nest y Next. También trabajo el dato del lado del análisis — SQL, Python, Power BI y Google Analytics — y automatizo su carga y procesamiento.",
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
      body1: "Desarrollador full-stack con foco en backend. Diseño e implemento bases de datos y APIs pensadas para grandes volúmenes de datos, con Node, Nest y Next. Sobre esos datos también trabajo el análisis con SQL, Python, Power BI y Google Analytics.",
      body2: "Más de 4 años en desarrollo de software (web y embebidos, C/C++ y Python). Mi base de desarrollo me permite automatizar el trabajo con datos en lugar de hacerlo a mano. Actualmente curso la Tecnicatura Superior en Sistemas Embebidos e IoT y soy futuro licenciado en Ciencia de Datos. Más adelante me gustaría especializarme con un máster en Inteligencia Artificial o Seguridad Informática.",
      nowTitle: "Ahora mismo",
      now: "Buscando un puesto de desarrollo backend o análisis / gestión de datos. Disponible también para desarrollo full-stack.",
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
      role: "Backend · Data",
      kicker: "Open to new roles",
      title1: "Backend development",
      title2: "and data analysis.",
      lead: "Full-stack developer focused on the backend: designing and implementing databases and APIs for large data volumes with Node, Nest and Next. I also work data on the analysis side — SQL, Python, Power BI and Google Analytics — and automate its loading and processing.",
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
      body1: "Full-stack developer focused on the backend. I design and implement databases and APIs built for large data volumes, with Node, Nest and Next. On top of that data I also do analysis with SQL, Python, Power BI and Google Analytics.",
      body2: "4+ years in software development (web and embedded, C/C++ and Python). My development background lets me automate data work instead of doing it by hand. I'm currently studying a Higher Technician degree in Embedded Systems & IoT and I'm a future Data Science graduate. Down the line I'd like to specialize with a master's in Artificial Intelligence or Information Security.",
      nowTitle: "Right now",
      now: "Looking for a backend development or data analysis / management role. Also available for full-stack development.",
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
    shots: ["/img/ego-modelos.jpg", "/img/ego-ficha.jpg", "/img/ego-analisis.jpg"],
    demo: "https://testdev-ego.onrender.com/",
    stack: ["React", "TypeScript", "JavaScript", "CSS", "REST API"],
    es: {
      title: "EGO — Catálogo de Vehículos & Análisis",
      tagline: "Plataforma de catálogo automotor: listado de modelos, ficha de detalle y un panel de análisis de inventario.",
      outcome: "Catálogo con filtros por segmento y ficha de cada modelo, consumiendo una API REST. Sumé un panel de análisis con estadísticas y gráficos sobre el inventario.",
      role: "Frontend · Análisis de datos",
    },
    en: {
      title: "EGO — Vehicle Catalogue & Analytics",
      tagline: "Automotive catalogue platform: model listing, detail page and an inventory analytics dashboard.",
      outcome: "Catalogue with segment filters and a detail page per model, consuming a REST API. I added an analytics dashboard with statistics and charts over the inventory.",
      role: "Frontend · Data analysis",
    },
  },
];

// ─────────────────────────────────────────────────────────────
// Expertise
// ─────────────────────────────────────────────────────────────
const EXPERTISE = [
  {
    id: "backend",
    es: {
      title: "Backend & Bases de Datos",
      points: [
        "Diseño e implementación de bases de datos para grandes volúmenes de datos.",
        "APIs y servicios con Node, Nest y Next.",
        "Modelado de datos, integridad y consultas eficientes en SQL.",
      ],
    },
    en: {
      title: "Backend & Databases",
      points: [
        "Database design and implementation for large data volumes.",
        "APIs and services with Node, Nest and Next.",
        "Data modeling, integrity and efficient SQL queries.",
      ],
    },
  },
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
    id: "fullstack",
    es: {
      title: "Desarrollo Full-Stack & Automatización",
      points: [
        "Aplicaciones web con React, Next.js y Node / Express / Nest.",
        "Automatización de carga y procesamiento de datos con Python.",
        "Herramientas internas y visualizaciones a medida sobre los datos.",
      ],
    },
    en: {
      title: "Full-Stack & Automation",
      points: [
        "Web apps with React, Next.js and Node / Express / Nest.",
        "Automated data loading and processing with Python.",
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
    { label: "Backend & Bases de Datos", items: ["Node", "Nest", "Next.js", "Express", "MongoDB", "MySQL", "SQL"] },
    { label: "Datos", items: ["SQL", "Python", "Power BI", "Google Analytics", "Excel"] },
    { label: "Lenguajes", items: ["JavaScript", "TypeScript", "Python", "C/C++"] },
    { label: "Sistemas & herramientas", items: ["Linux", "Git", "Docker", "AWS", "Postman", "Jira"] },
  ],
  en: [
    { label: "Backend & Databases", items: ["Node", "Nest", "Next.js", "Express", "MongoDB", "MySQL", "SQL"] },
    { label: "Data", items: ["SQL", "Python", "Power BI", "Google Analytics", "Excel"] },
    { label: "Languages", items: ["JavaScript", "TypeScript", "Python", "C/C++"] },
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

// Cuerpo de la guía SQL (técnico, compartido ES/EN).
const SQL_BODY = [
  { type: "h", text: "00 · Setup del entorno de trabajo" },
  { type: "p", text: "Levantar SQL Server con Docker y cargar AdventureWorks en Linux." },
  { type: "sub", text: "Paso 0 — Instalar Docker" },
  { type: "p", text: "Ubuntu / Debian:" },
  { type: "code", text: "sudo apt update\nsudo apt install -y docker.io\nsudo systemctl enable --now docker\nsudo usermod -aG docker $USER\nnewgrp docker" },
  { type: "p", text: "Arch Linux:" },
  { type: "code", text: "sudo pacman -S docker\nsudo systemctl enable --now docker\nsudo usermod -aG docker $USER\nnewgrp docker" },
  { type: "p", text: "Verificar con `docker ps`. Si no hay contenedores muestra una tabla vacía — eso es correcto." },
  { type: "sub", text: "Paso 1 — Instalar y levantar SQL Server" },
  { type: "p", text: "Un único comando descarga SQL Server y lo deja corriendo:" },
  { type: "code", text: "docker run -e \"ACCEPT_EULA=Y\" -e \"SA_PASSWORD=Admin1234!\" \\\n  -p 1433:1433 --name sqlserver \\\n  -d mcr.microsoft.com/mssql/server:2019-latest" },
  { type: "p", text: "La primera vez descarga la imagen (1–2 min); después es instantáneo. Para parar o reiniciar:" },
  { type: "code", text: "docker stop sqlserver    # parar\ndocker start sqlserver   # volver a levantar" },
  { type: "sub", text: "Paso 2 — Descargar AdventureWorks" },
  { type: "code", text: "wget https://github.com/Microsoft/sql-server-samples/releases/download/adventureworks/AdventureWorks2019.bak" },
  { type: "sub", text: "Paso 3 — Copiar el .bak al contenedor" },
  { type: "code", text: "docker cp AdventureWorks2019.bak sqlserver:/var/opt/mssql/data/" },
  { type: "sub", text: "Paso 4 — Restaurar la base de datos" },
  { type: "p", text: "Usar mssql-tools18 (no mssql-tools, ese path no existe en SQL Server 2019 reciente):" },
  { type: "code", text: "docker exec -it sqlserver /opt/mssql-tools18/bin/sqlcmd \\\n  -S localhost -U SA -P \"Admin1234!\" -No \\\n  -Q \"RESTORE DATABASE AdventureWorks2019 FROM DISK='/var/opt/mssql/data/AdventureWorks2019.bak'\n  WITH MOVE 'AdventureWorks2019' TO '/var/opt/mssql/data/AdventureWorks2019.mdf',\n  MOVE 'AdventureWorks2019_log' TO '/var/opt/mssql/data/AdventureWorks2019_log.ldf'\"" },
  { type: "sub", text: "Paso 5 — Conectarse a la base" },
  { type: "p", text: "Modo interactivo (cada bloque termina con GO):" },
  { type: "code", text: "docker exec -it sqlserver /opt/mssql-tools18/bin/sqlcmd \\\n  -S localhost -U SA -P \"Admin1234!\" -No \\\n  -d AdventureWorks2019" },
  { type: "p", text: "Modo directo con -Q (ejecuta y sale, cómodo para queries largas):" },
  { type: "code", text: "docker exec -it sqlserver /opt/mssql-tools18/bin/sqlcmd \\\n  -S localhost -U SA -P \"Admin1234!\" -No \\\n  -d AdventureWorks2019 \\\n  -Q \"SELECT TOP 5 Name FROM Production.Product\"" },
  { type: "sub", text: "Errores comunes" },
  { type: "table", head: ["Error", "Causa", "Solución"], rows: [
    ["mssql-tools/bin/sqlcmd: no such file", "Path viejo de mssql-tools", "Usar mssql-tools18"],
    ["gzip: stdin: not in gzip format", "URL de descarga incorrecta", "Descargar desde GitHub releases"],
    ["Could not resolve host", "Sin acceso a esa URL", "Buscar la URL correcta en el repo oficial"],
    ["Query no ejecuta (interactivo)", "Falta GO al final", "Escribir GO en línea nueva y Enter"],
    ["-No flag", "Certificado SSL no confiable", "Normal en desarrollo, -No lo ignora"],
  ] },
  { type: "note", text: "Verificar que todo funciona: ejecutá SELECT TOP 3 Name, ListPrice FROM Production.Product. Si ves filas con nombres de productos, el entorno está listo." },

  { type: "h", text: "01 · Explorar la base de datos" },
  { type: "p", text: "Lo primero al entrar a un trabajo nuevo: entender la estructura de la base." },
  { type: "sub", text: "Ver todas las tablas" },
  { type: "code", text: "SELECT SCHEMA_NAME(schema_id) AS esquema, name AS tabla\nFROM sys.tables\nORDER BY esquema, tabla" },
  { type: "sub", text: "Ver columnas de una tabla" },
  { type: "code", text: "SELECT COLUMN_NAME, DATA_TYPE, IS_NULLABLE\nFROM INFORMATION_SCHEMA.COLUMNS\nWHERE TABLE_NAME = 'NombreDeTuTabla'\nORDER BY ORDINAL_POSITION" },
  { type: "sub", text: "Ver cuántas filas tiene cada tabla" },
  { type: "code", text: "SELECT t.TABLE_NAME, p.rows AS CantFilas\nFROM INFORMATION_SCHEMA.TABLES t\nJOIN sys.tables st ON st.name = t.TABLE_NAME\nJOIN sys.partitions p ON p.object_id = st.object_id\nWHERE t.TABLE_TYPE = 'BASE TABLE' AND p.index_id IN (0,1)\nORDER BY p.rows DESC" },

  { type: "h", text: "02 · Reportes de ventas" },
  { type: "p", text: "La query más pedida en cualquier empresa con datos comerciales." },
  { type: "sub", text: "Ventas por categoría" },
  { type: "code", text: "SELECT c.Name AS Categoria,\n       SUM(od.LineTotal) AS TotalVentas,\n       COUNT(DISTINCT oh.SalesOrderID) AS CantOrdenes\nFROM Sales.SalesOrderDetail od\nJOIN Production.Product p ON od.ProductID = p.ProductID\nJOIN Production.ProductSubcategory s ON p.ProductSubcategoryID = s.ProductSubcategoryID\nJOIN Production.ProductCategory c ON s.ProductCategoryID = c.ProductCategoryID\nJOIN Sales.SalesOrderHeader oh ON od.SalesOrderID = oh.SalesOrderID\nGROUP BY c.Name\nORDER BY TotalVentas DESC" },
  { type: "sub", text: "Ventas por mes y año" },
  { type: "code", text: "SELECT YEAR(OrderDate) AS Anio,\n       MONTH(OrderDate) AS Mes,\n       SUM(TotalDue) AS TotalVentas\nFROM Sales.SalesOrderHeader\nGROUP BY YEAR(OrderDate), MONTH(OrderDate)\nORDER BY Anio, Mes" },
  { type: "sub", text: "Top 10 productos más vendidos" },
  { type: "code", text: "SELECT TOP 10\n    p.Name AS Producto,\n    SUM(od.OrderQty) AS UnidadesVendidas,\n    SUM(od.LineTotal) AS TotalVentas\nFROM Sales.SalesOrderDetail od\nJOIN Production.Product p ON od.ProductID = p.ProductID\nGROUP BY p.Name\nORDER BY UnidadesVendidas DESC" },
  { type: "sub", text: "Ventas por vendedor" },
  { type: "code", text: "SELECT\n    p.FirstName + ' ' + p.LastName AS Vendedor,\n    COUNT(oh.SalesOrderID) AS CantOrdenes,\n    SUM(oh.TotalDue) AS TotalVentas\nFROM Sales.SalesOrderHeader oh\nJOIN Sales.SalesPerson sp ON oh.SalesPersonID = sp.BusinessEntityID\nJOIN Person.Person p ON sp.BusinessEntityID = p.BusinessEntityID\nGROUP BY p.FirstName, p.LastName\nORDER BY TotalVentas DESC" },

  { type: "h", text: "03 · Análisis de clientes" },
  { type: "p", text: "Entender quién compra, cuánto gasta y con qué frecuencia." },
  { type: "sub", text: "Top clientes por gasto total" },
  { type: "code", text: "SELECT TOP 10\n    p.FirstName + ' ' + p.LastName AS Cliente,\n    COUNT(oh.SalesOrderID) AS CantOrdenes,\n    SUM(oh.TotalDue) AS TotalGastado\nFROM Sales.SalesOrderHeader oh\nJOIN Sales.Customer c ON oh.CustomerID = c.CustomerID\nJOIN Person.Person p ON c.PersonID = p.BusinessEntityID\nGROUP BY p.FirstName, p.LastName\nORDER BY TotalGastado DESC" },
  { type: "sub", text: "Clientes que no compraron en el último año" },
  { type: "code", text: "SELECT p.FirstName + ' ' + p.LastName AS Cliente,\n       MAX(oh.OrderDate) AS UltimaCompra\nFROM Sales.Customer c\nJOIN Person.Person p ON c.PersonID = p.BusinessEntityID\nLEFT JOIN Sales.SalesOrderHeader oh ON c.CustomerID = oh.CustomerID\nGROUP BY p.FirstName, p.LastName\nHAVING MAX(oh.OrderDate) < DATEADD(YEAR, -1, GETDATE())\n    OR MAX(oh.OrderDate) IS NULL\nORDER BY UltimaCompra" },

  { type: "h", text: "04 · Productos e inventario" },
  { type: "p", text: "Controlar el stock y detectar productos sin movimiento." },
  { type: "sub", text: "Productos sin ventas" },
  { type: "code", text: "SELECT p.Name, p.ListPrice\nFROM Production.Product p\nLEFT JOIN Sales.SalesOrderDetail od ON p.ProductID = od.ProductID\nWHERE od.ProductID IS NULL\nORDER BY p.Name" },
  { type: "sub", text: "Stock bajo mínimo" },
  { type: "code", text: "SELECT p.Name,\n       pi.Quantity AS StockActual,\n       p.ReorderPoint AS StockMinimo\nFROM Production.Product p\nJOIN Production.ProductInventory pi ON p.ProductID = pi.ProductID\nWHERE pi.Quantity < p.ReorderPoint\nORDER BY pi.Quantity ASC" },
  { type: "sub", text: "Productos más caros por categoría" },
  { type: "code", text: "SELECT c.Name AS Categoria,\n       p.Name AS Producto,\n       p.ListPrice\nFROM Production.Product p\nJOIN Production.ProductSubcategory s ON p.ProductSubcategoryID = s.ProductSubcategoryID\nJOIN Production.ProductCategory c ON s.ProductCategoryID = c.ProductCategoryID\nWHERE p.ListPrice = (\n    SELECT MAX(p2.ListPrice)\n    FROM Production.Product p2\n    JOIN Production.ProductSubcategory s2 ON p2.ProductSubcategoryID = s2.ProductSubcategoryID\n    WHERE s2.ProductCategoryID = c.ProductCategoryID\n)\nORDER BY c.Name" },

  { type: "h", text: "05 · Limpieza y calidad de datos" },
  { type: "p", text: "En cualquier empresa vas a encontrar datos sucios. Estas queries los detectan." },
  { type: "sub", text: "Filas duplicadas" },
  { type: "code", text: "SELECT EmailAddress, COUNT(*) AS Repeticiones\nFROM Person.EmailAddress\nGROUP BY EmailAddress\nHAVING COUNT(*) > 1\nORDER BY Repeticiones DESC" },
  { type: "sub", text: "Valores nulos por columna" },
  { type: "code", text: "SELECT\n    COUNT(*) AS TotalFilas,\n    SUM(CASE WHEN Color IS NULL THEN 1 ELSE 0 END) AS Color_Nulos,\n    SUM(CASE WHEN Size IS NULL THEN 1 ELSE 0 END) AS Size_Nulos,\n    SUM(CASE WHEN Weight IS NULL THEN 1 ELSE 0 END) AS Weight_Nulos\nFROM Production.Product" },

  { type: "h", text: "06 · Referencia rápida de sintaxis" },
  { type: "table", head: ["Cláusula", "Para qué sirve", "Ejemplo"], rows: [
    ["SELECT TOP N", "Limitar filas devueltas", "SELECT TOP 10 *"],
    ["WHERE", "Filtrar filas", "WHERE Color = 'Red'"],
    ["AND / OR", "Combinar condiciones", "WHERE Price > 100 AND Color = 'Red'"],
    ["BETWEEN", "Rango de valores", "WHERE Price BETWEEN 100 AND 500"],
    ["IN", "Lista de valores", "WHERE Color IN ('Red','Blue')"],
    ["LIKE", "Búsqueda parcial", "WHERE Name LIKE '%Bike%'"],
    ["IS NULL", "Detectar nulos", "WHERE Color IS NULL"],
    ["ORDER BY DESC", "Ordenar descendente", "ORDER BY Price DESC"],
    ["GROUP BY", "Agrupar para agregar", "GROUP BY Color"],
    ["HAVING", "Filtrar grupos", "HAVING COUNT(*) > 5"],
    ["INNER JOIN", "Solo filas con match", "JOIN Tabla b ON a.id = b.id"],
    ["LEFT JOIN", "Todas las filas izquierda", "LEFT JOIN Tabla b ON a.id = b.id"],
    ["CASE WHEN", "Lógica condicional", "CASE WHEN x > 0 THEN 'SI' ELSE 'NO' END"],
    ["DATEADD", "Sumar / restar fechas", "DATEADD(MONTH, -1, GETDATE())"],
    ["DATEDIFF", "Diferencia de fechas", "DATEDIFF(DAY, FechaInicio, FechaFin)"],
  ] },

  { type: "h", text: "07 · Funciones de agregación" },
  { type: "table", head: ["Función", "Qué hace"], rows: [
    ["COUNT(*)", "Cuenta todas las filas"],
    ["COUNT(columna)", "Cuenta valores no nulos"],
    ["SUM(columna)", "Suma los valores"],
    ["AVG(columna)", "Promedio de los valores"],
    ["MIN(columna)", "Valor mínimo"],
    ["MAX(columna)", "Valor máximo"],
    ["ROUND(n, decimales)", "Redondea un número"],
    ["CAST(x AS tipo)", "Convierte tipo de dato"],
  ] },
];

const POSTS = [
  {
    id: "post-sql",
    slug: "guia-sql-para-el-trabajo",
    date: "2024-12-10",
    readMin: 12,
    noHero: true,
    tags: ["SQL", "Data", "SQL Server", "Referencia"],
    es: {
      title: "Guía SQL",
      excerpt: "Las queries más usadas en entornos laborales reales: setup con Docker, reportes de ventas, análisis de clientes, inventario, limpieza de datos y referencia de sintaxis. SQL Server + AdventureWorks.",
      body: SQL_BODY,
    },
    en: {
      title: "SQL guide",
      excerpt: "The most-used queries in real work settings: Docker setup, sales reports, customer analysis, inventory, data cleaning and a syntax reference. SQL Server + AdventureWorks.",
      body: SQL_BODY,
    },
  },
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
    tags: ["React", "TypeScript", "REST API", "Análisis de datos"],
    projectId: "cars",
    shots: ["/img/ego-modelos.jpg", "/img/ego-ficha.jpg", "/img/ego-analisis.jpg"],
    demo: "https://testdev-ego.onrender.com/",
    es: {
      title: "EGO: catálogo automotor y panel de análisis",
      excerpt: "Plataforma de catálogo de vehículos construida desde un diseño en Figma y una API REST, con un panel de análisis de inventario que sumé al alcance original.",
      body: [
        { type: "p", text: "Desarrollé una plataforma de catálogo automotor para EGO a partir de un diseño en Figma y una API REST de modelos. El alcance era maquetar el listado y la ficha de cada modelo de forma fiel al diseño y responsiva. Sobre esa base agregué un panel de análisis de inventario y propuse al cliente algunos cambios de diseño que mejoraban la experiencia." },
        { type: "h", text: "Listado de modelos" },
        { type: "p", text: "El listado consume la API y muestra cada modelo con su año y precio, con filtros por segmento (sedán, hatchback, pickups, SUVs). Maquetado fiel al diseño de Figma y responsivo de mobile a desktop." },
        { type: "img", src: "/img/ego-modelos.jpg", alt: "Listado de modelos con filtros por segmento" },
        { type: "h", text: "Ficha de modelo" },
        { type: "p", text: "Cada modelo tiene su ficha de detalle: imagen principal, características destacadas en un carrusel, y secciones de motor y transmisión. Los datos vienen del endpoint de detalle de la API." },
        { type: "img", src: "/img/ego-ficha.jpg", alt: "Ficha de detalle de un modelo" },
        { type: "h", text: "Panel de análisis (valor agregado)" },
        { type: "p", text: "Más allá del alcance pedido, sumé un panel de Análisis de Inventario sobre los mismos datos de la API: indicadores (cantidad de modelos, precio promedio, mínimo y máximo), distribución de modelos por segmento, precio promedio por segmento y por año, rankings de más caros y más accesibles, y la mejor relación de precio dentro de cada segmento." },
        { type: "img", src: "/img/ego-analisis.jpg", alt: "Panel de análisis de inventario con estadísticas y gráficos" },
        { type: "h", text: "Stack y decisiones" },
        { type: "p", text: "React con TypeScript, consumo de la API REST con fetch/axios y CSS para reproducir el diseño. El panel de análisis calcula las métricas en el cliente a partir de la respuesta de la API y las muestra con gráficos de torta, barras y línea." },
        { type: "h", text: "Estado" },
        { type: "p", text: "El proyecto está desplegado y disponible para probar en el demo enlazado arriba." },
      ],
    },
    en: {
      title: "EGO: vehicle catalogue and analytics dashboard",
      excerpt: "A vehicle catalogue platform built from a Figma design and a REST API, with an inventory analytics dashboard I added beyond the original scope.",
      body: [
        { type: "p", text: "I built an automotive catalogue platform for EGO from a Figma design and a REST API of models. The scope was to build the listing and each model's detail page faithfully to the design and responsively. On top of that I added an inventory analytics dashboard and proposed a few design changes that improved the experience." },
        { type: "h", text: "Model listing" },
        { type: "p", text: "The listing consumes the API and shows each model with its year and price, with filters by segment (sedan, hatchback, pickups, SUVs). Built faithfully to the Figma design and responsive from mobile to desktop." },
        { type: "img", src: "/img/ego-modelos.jpg", alt: "Model listing with segment filters" },
        { type: "h", text: "Model detail" },
        { type: "p", text: "Each model has its detail page: main image, highlighted features in a carousel, and engine and transmission sections. The data comes from the API's detail endpoint." },
        { type: "img", src: "/img/ego-ficha.jpg", alt: "Model detail page" },
        { type: "h", text: "Analytics dashboard (added value)" },
        { type: "p", text: "Beyond the requested scope, I added an Inventory Analytics dashboard over the same API data: indicators (number of models, average, minimum and maximum price), model distribution by segment, average price by segment and by year, rankings of most expensive and most accessible, and the best price-to-segment ratio." },
        { type: "img", src: "/img/ego-analisis.jpg", alt: "Inventory analytics dashboard with statistics and charts" },
        { type: "h", text: "Stack and decisions" },
        { type: "p", text: "React with TypeScript, consuming the REST API with fetch/axios and CSS to reproduce the design. The analytics dashboard computes the metrics on the client from the API response and shows them with pie, bar and line charts." },
        { type: "h", text: "Status" },
        { type: "p", text: "The project is deployed and available to try in the demo linked above." },
      ],
    },
  },
];



// Enlaces de contacto
const LINKS = {
  github: "https://github.com/facumruiz",
  linkedin: "https://www.linkedin.com/in/facumruiz",
  email: "facundoruizdev@gmail.com",
};

POSTS.sort((a, b) => b.date.localeCompare(a.date));

export { STRINGS, LINKS, PROJECTS, EXPERTISE, SKILLS, EXPERIENCE, EDUCATION, CERTS, POSTS };
