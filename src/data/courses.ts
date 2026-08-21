export interface Course {
  /** Clase de Font Awesome, ej: "fab fa-react" */
  icon: string;
  title: string;
  provider: string;
  description: string;
  duration: string;
  /** Texto a mostrar, ej: "Completado: Julio 2025" o "En progreso" */
  dateLabel: string;
  status: "completed" | "in-progress";
  /** Opcional: link directo al curso (YouTube, playlist, etc.) */
  link?: string;
}

export interface CourseCategory {
  title: string;
  courses: Course[];
}

// Para agregar un curso nuevo, busca su categoría (o crea una) y agrega un objeto al arreglo.
// No hace falta tocar Cursos.astro.
export const courseCategories: CourseCategory[] = [
  {
    title: "Desarrollo Frontend",
    courses: [
      {
        icon: "fas fa-shuttle-space",
        title: "Astro",
        provider: "Youtube - Midudev",
        description: "Fundamentos avanzados de Astro.",
        duration: "2 horas",
        dateLabel: "Completado: Julio 2025",
        status: "completed",
      },
      {
        icon: "fab fa-react",
        title: "React",
        provider: "Youtube - Midudev",
        description: "Curso completo de React.",
        duration: "20 horas",
        dateLabel: "En progreso",
        status: "in-progress",
      },
      {
        icon: "fab fa-css3-alt",
        title: "HTML y CSS",
        provider: "Youtube - SoyDalto",
        description: "Uso de HTML y CSS curso completo",
        duration: "24 horas",
        dateLabel: "En progreso",
        status: "in-progress",
      },
      {
        icon: "fab fa-html5",
        title: "HTML",
        provider: "Programa Células Plenum",
        description:
          "Fundamentos de HTML como base de toda aplicación web. Como práctica construí una página completa usando solo HTML.",
        duration: "4 días",
        dateLabel: "Completado: Febrero 2026",
        status: "completed",
        link: "https://youtu.be/-oK6zL01fNM?si=q1XZqvwfgPmKxHc4",
      },
      {
        icon: "fab fa-css3-alt",
        title: "CSS",
        provider: "Programa Células Plenum",
        description:
          "Sintaxis básica, selectores, pseudoelementos, modelo de caja y posicionamiento. Apliqué lo aprendido para darle diseño a la página del curso de HTML.",
        duration: "4 días",
        dateLabel: "Completado: Febrero 2026",
        status: "completed",
        link: "https://youtu.be/K3xmRF8ab1o?si=jxBuNlaG6axKWRyL",
      },
      {
        icon: "fab fa-bootstrap",
        title: "Bootstrap",
        provider: "Programa Células Plenum",
        description:
          "Uso del framework para volver responsive a móvil la página construida en los cursos anteriores de HTML y CSS.",
        duration: "~2 horas",
        dateLabel: "Completado: Febrero 2026",
        status: "completed",
        link: "https://youtu.be/1kNwZbRiVcQ?si=m9tjU1_bI0VaVP-s",
      },
      {
        icon: "fab fa-js",
        title: "JavaScript",
        provider: "Programa Células Plenum",
        description:
          "El curso más extenso hasta ahora: lógica de programación, manipulación del DOM y AJAX, con actividades prácticas a lo largo de todo el curso.",
        duration: "+120 videos (~1 mes)",
        dateLabel: "Completado: Marzo 2026",
        status: "completed",
        link: "https://www.youtube.com/watch?v=2SetvwBV-SU&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA",
      },
      {
        icon: "fas fa-code",
        title: "TypeScript",
        provider: "Programa Células Plenum",
        description:
          "Tipado estático sobre JavaScript. Terminó siendo uno de mis lenguajes favoritos tras perderle el miedo inicial.",
        duration: "3 días",
        dateLabel: "Completado: Marzo 2026",
        status: "completed",
        link: "https://www.youtube.com/watch?v=V3qgM5W1Xq4&list=PL9prAn3zOWZ57IqzWvUu3xKuIG_NYTJ6H",
      },
      {
        icon: "fab fa-angular",
        title: "Angular 13",
        provider: "Programa Células Plenum",
        description:
          "Mi primer framework además de Bootstrap. Practiqué construyendo una página que consume una API a elección.",
        duration: "3 días",
        dateLabel: "Completado: Marzo 2026",
        status: "completed",
        link: "https://www.youtube.com/watch?v=8Fwwhjt3jjE&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0",
      },
      {
        icon: "fab fa-angular",
        title: "Angular 17",
        provider: "Programa Células Plenum",
        description:
          "Diferencias y mejoras de las versiones más recientes de Angular frente a la v13, aplicadas al mismo proyecto para actualizar su compatibilidad.",
        duration: "3 días",
        dateLabel: "Completado: Marzo 2026",
        status: "completed",
        link: "https://www.youtube.com/watch?v=XDSGu5jD_3o&list=PL_9MDdjVuFjFUgQu_JDAWfiROWzLbzbdD",
      },
    ],
  },
  {
    title: "Desarrollo Backend",
    courses: [
      {
        icon: "fab fa-node-js",
        title: "Node.js - Desarrollo Backend",
        provider: "Youtube - Midudev",
        description: "Curso completo de NodeJs.",
        duration: "11 horas",
        dateLabel: "Completado: Julio 2025",
        status: "completed",
      },
      {
        icon: "fab fa-python",
        title: "Python Essentials 1 course",
        provider: "Cisco Networking Academy",
        description: "Fundamentos de python3",
        duration: "30 horas",
        dateLabel: "Completado: Septiembre 2025",
        status: "completed",
      },
      {
        icon: "fas fa-database",
        title: "SQL - Base de Datos",
        provider: "Youtube - SoyDalto",
        description: "Diseño de esquemas, agregaciones y optimización de consultas",
        duration: "7 horas",
        dateLabel: "Completado: Junio 2024",
        status: "completed",
      },
      {
        icon: "fas fa-database",
        title: "SQL",
        provider: "Programa Células Plenum",
        description:
          "Repaso de conceptos básicos de SQL: consultas SELECT, condiciones WHERE y uso de Triggers, aplicado en prácticas con un gestor de base de datos a elección.",
        duration: "5 días",
        dateLabel: "Completado: Enero 2026",
        status: "completed",
        link: "https://youtu.be/HlRhFDY1Bmg?si=ipd8kgVw5US37A5q",
      },
      {
        icon: "fas fa-cubes",
        title: "Programación Orientada a Objetos",
        provider: "Programa Células Plenum",
        description:
          "Repaso de los pilares de la POO — encapsulación, herencia, polimorfismo y abstracción — como base para las prácticas posteriores con Java.",
        duration: "4 días",
        dateLabel: "Completado: Enero 2026",
        status: "completed",
        link: "https://youtu.be/AAKoccH230Y?si=gor5ntpIkYNdfsdE",
      },
      {
        icon: "fab fa-java",
        title: "Java y MySQL",
        provider: "Programa Células Plenum",
        description:
          "POO aplicada en Java y conexión con MySQL. Como práctica final desarrollé una aplicación de escritorio con CRUD sobre el modelo Dual (empresas y alumnos).",
        duration: "Curso multi-capítulo",
        dateLabel: "Completado: Enero 2026",
        status: "completed",
        link: "https://www.youtube.com/watch?v=ZRPSxSm6Ztg&list=PL-Mlm_HYjCo9vojnWbPTs6nV51J8WV_O5",
      },
      {
        icon: "fas fa-code",
        title: "C#",
        provider: "Programa Células Plenum",
        description:
          "Fundamentos de C# desde la experiencia previa con JavaScript/TypeScript. Practiqué un CRUD del modelo Dual conectado primero a MySQL y luego a SQL Server.",
        duration: "~3 semanas",
        dateLabel: "Completado: Abril 2026",
        status: "completed",
        link: "https://www.youtube.com/watch?v=enk1-XrJTUo&list=PL0kIvpOlieSN-PDnM2rHXdb3kib9njJaQ",
      },
    ],
  },
  {
    title: "Backend .NET",
    courses: [
      {
        icon: "fas fa-server",
        title: "ASP.NET",
        provider: "Programa Células Plenum",
        description:
          "Introducción al framework con Razor Pages, aplicado en un CRUD del modelo Dual conectado a la base de datos ya creada en SQL Server.",
        duration: "2 semanas",
        dateLabel: "Completado: Abril 2026",
        status: "completed",
        link: "https://www.youtube.com/playlist?list=PLM-p96nOrGcb3aQ2zh8jGzRugtuKUNJdo",
      },
      {
        icon: "fas fa-sitemap",
        title: "MVC.NET",
        provider: "Programa Células Plenum",
        description:
          "El mismo CRUD del curso de ASP.NET pero con arquitectura MVC y Entity Framework, con más cuidado en el manejo de errores.",
        duration: "3 días",
        dateLabel: "Completado: Abril 2026",
        status: "completed",
        link: "https://www.youtube.com/watch?v=UZNoQMio4XM&list=PLWYKfSbdsjJhzIXJW7FUZUEivr3HGKQZG",
      },
    ],
  },
  {
    title: "Herramientas y DevOps",
    courses: [
      {
        icon: "fab fa-git-alt",
        title: "Git y GitHub Profesional",
        provider: "YouTube - SoyDalto",
        description: "Control de versiones, branching strategies y colaboración en equipo",
        duration: "4 horas",
        dateLabel: "Completado: Septiembre 2024",
        status: "completed",
      },
      {
        icon: "fab fa-git-alt",
        title: "Git",
        provider: "Programa Células Plenum",
        description:
          "Curso en inglés visto antes de una demostración en vivo de un compañero de PlenumSoft, con comandos y flujos más avanzados de los que ya conocía.",
        duration: "2 días",
        dateLabel: "Completado: Enero 2026",
        status: "completed",
        link: "https://youtu.be/rH3zE7VlIMs?si=XPpGJV0YnS5LWovo",
      },
      {
        icon: "fas fa-network-wired",
        title: "CCNA v7 200-301",
        provider: "Cisco Networking Academy",
        description:
          "Preparación para la certificación Cisco CCNA: subneteo, ACLs, control de tráfico y prácticas en Cisco Packet Tracer. Obtuve constancia por acreditarlo.",
        duration: "~4 semanas",
        dateLabel: "Completado: Marzo 2026",
        status: "completed",
        link: "https://www.youtube.com/watch?v=6YGZc6XP9u8&list=PLnB2gEd2oMZb-4RzxNWQLfzFKV2klDfMN",
      },
    ],
  },
  {
    title: "Inteligencia Artificial",
    courses: [
      {
        icon: "fas fa-magnifying-glass-chart",
        title: "MOOC Algoritmos de Inteligencia Artificial",
        provider: "Programa Células Plenum",
        description:
          "Estrategias de búsqueda en IA (no informada, heurística y local), con ejercicios y cuadros comparativos para entender cuándo conviene usar cada una.",
        duration: "1 mes",
        dateLabel: "Completado: Mayo 2026",
        status: "completed",
        link: "https://www.youtube.com/@descubriendolainteligencia6940/courses",
      },
    ],
  },
  {
    title: "IA Moderna: Agentes y MCP",
    courses: [
      {
        icon: "fas fa-brain",
        title: "Fundamentos de LLMs y Prompting",
        provider: "Programa Células Plenum — Módulo IA Moderna",
        description:
          "Arquitectura Transformer, tokens, embeddings y ventana de contexto. Prompt engineering, context engineering y gestión de riesgos (OWASP Top 10 para IA, alucinaciones). Incluye implementación de un LLM local con Ollama.",
        duration: "Unidades 1.1 – 1.6",
        dateLabel: "Completado: Mayo 2026",
        status: "completed",
      },
      {
        icon: "fas fa-robot",
        title: "Agentes de IA",
        provider: "Programa Células Plenum — Módulo IA Moderna",
        description:
          "Anatomía de un agente (LLM + herramientas + memoria) y ciclo ReAct. Implementé agentes con LangGraph, herramientas propias en Python (lectura y resumen de correos de Gmail) y un agente en C# con Ollama.",
        duration: "Unidades 2.1 – 2.2",
        dateLabel: "Completado: Junio 2026",
        status: "completed",
      },
      {
        icon: "fas fa-plug",
        title: "Model Context Protocol (MCP)",
        provider: "Programa Células Plenum — Módulo IA Moderna",
        description:
          "Estándar abierto para conectar agentes con sistemas externos. Implementé servidores MCP propios en C#, Python y TypeScript, e integré servidores de terceros (filesystem, PostgreSQL, context7, GitHub y búsqueda web).",
        duration: "Unidades 3.1 – 3.3",
        dateLabel: "Completado: Junio - Julio 2026",
        status: "completed",
      },
      {
        icon: "fas fa-shield-halved",
        title: "Harness Engineering, Skills, Hooks y Guardrails",
        provider: "Programa Células Plenum — Módulo IA Moderna",
        description:
          "Diseño del entorno que rodea a un agente: sistemas multiagente, Agent Skills (Claude Skills, Google ADK), Hooks para control determinista sobre sus acciones, y Guardrails de entrada/salida para seguridad.",
        duration: "Unidades 4.1 – 4.4",
        dateLabel: "Completado: Julio - Agosto 2026",
        status: "completed",
      },
    ],
  },
  {
    title: "Desarrollo Móvil",
    courses: [
      {
        icon: "fas fa-mobile-alt",
        title: "Flutter",
        provider: "Programa Células Plenum",
        description:
          "Desarrollo móvil consumiendo una API propia. Desarrollé el CRUD de una librería, con backend en ASP.NET, como parte de mi propio proyecto.",
        duration: "5 días",
        dateLabel: "Completado: Mayo 2026",
        status: "completed",
        link: "https://www.youtube.com/watch?v=e1yd8RC4l-8&list=PLCKuOXG0bPi0sIn-nDsi7ma9OV6MEMkxj&index=6",
      },
    ],
  },
];