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
    ],
  },
];
