import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();

const EXT_PERMITIDAS = [
  '.astro',
  '.css',
  '.json',
  '.mjs',
  '.ts',
  '.js'
];

const IGNORAR = [
  'node_modules',
  'package-lock.json',
  'dist',
  '.git'
];

function debeIgnorar(ruta) {
  return IGNORAR.some(i => ruta.includes(i));
}

function recorrer(dir, archivos = []) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const full = path.join(dir, item);

    if (debeIgnorar(full)) continue;

    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      recorrer(full, archivos);
    } else {
      const ext = path.extname(full);
      if (EXT_PERMITIDAS.includes(ext)) {
        archivos.push(full);
      }
    }
  }

  return archivos;
}

function extraer() {
  const dirSrc = path.join(ROOT, 'src');

  if (!fs.existsSync(dirSrc)) {
    console.log('No existe src/');
    return;
  }

  const archivos = recorrer(dirSrc);

  let salida = `CONTEXTO DEL PROYECTO ASTRO\n`;
  salida += `Ruta raíz: ${ROOT}\n`;
  salida += `Fecha: ${new Date().toISOString()}\n`;
  salida += `Archivos incluidos: ${archivos.length}\n\n`;

  for (const archivo of archivos) {
    salida += `=============================\n`;
    salida += `ARCHIVO: ${path.relative(ROOT, archivo)}\n`;
    salida += `=============================\n\n`;

    const contenido = fs.readFileSync(archivo, 'utf-8');
    salida += contenido + '\n\n';
  }

  fs.writeFileSync(path.join(ROOT, 'contexto-ia.txt'), salida);

  console.log('Archivo generado: contexto-ia.txt');
}

extraer();

