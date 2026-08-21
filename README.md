# Portafolio - Gerardo Mecott

Sitio personal hecho con [Astro](https://astro.build).

## 🚀 Estructura del proyecto

```text
/
├── public/               # Imágenes estáticas (proyectos, avatar, favicon)
├── src/
│   ├── components/       # Componentes reutilizables (tarjetas, items)
│   │   ├── ProjectCard.astro
│   │   ├── CourseItem.astro
│   │   └── TimelineItem.astro
│   ├── data/              # ← AQUÍ SE EDITA EL CONTENIDO
│   │   ├── projects.ts    # Proyectos del portafolio
│   │   ├── courses.ts     # Cursos, agrupados por categoría
│   │   └── profile.ts     # Experiencia, educación, bio, concursos
│   ├── layouts/
│   │   └── Layout.astro   # Estructura común (sidebar, nav, head)
│   ├── pages/
│   │   ├── index.astro       # /
│   │   ├── Portafolio.astro  # /Portafolio
│   │   ├── Cursos.astro      # /Cursos
│   │   └── Contacto.astro    # /Contacto
│   └── styles/
│       └── global.css
└── package.json
```

## ✏️ Cómo agregar contenido nuevo

**No es necesario tocar HTML.** Todo el contenido vive en `src/data/`:

- **Nuevo proyecto** → agrega un objeto al arreglo `projects` en `src/data/projects.ts`. Si tienes una captura de pantalla, colócala en `public/` y referencia su ruta (ej. `"/mi-proyecto.png"`); si no, se muestra un placeholder automáticamente.
- **Nuevo curso** → agrega un objeto dentro de la categoría correspondiente en `src/data/courses.ts` (o crea una categoría nueva).
- **Nueva experiencia laboral, estudio o concurso** → agrega un objeto al arreglo correspondiente (`experience`, `education` o `hackathons`) en `src/data/profile.ts`.

Cada archivo de datos tiene comentarios explicando el formato esperado.

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando           | Acción                                           |
| :----------------- | :----------------------------------------------- |
| `pnpm install`      | Instala las dependencias                          |
| `pnpm dev`          | Levanta el servidor local en `localhost:4321`     |
| `pnpm build`        | Genera el sitio de producción en `./dist/`        |
| `pnpm preview`      | Previsualiza el build de producción localmente    |

## 📌 Pendientes conocidos

- Reemplazar el enlace `#` de LinkedIn en `Contacto.astro` por la URL real.
- Los íconos de la sección "Habilidades" (en `Layout.astro`) están enlazados a imágenes externas de terceros; conviene descargarlos y servirlos desde `public/` para evitar que se rompan.
