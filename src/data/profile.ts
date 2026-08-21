export interface TimelineEntry {
  title: string;
  dateLabel: string;
  /** Puede incluir HTML simple, ej: enlaces <a href="...">texto</a> */
  description: string;
}

// Para agregar experiencia, educación o un concurso nuevo, agrega un objeto al arreglo correspondiente.
// No hace falta tocar index.astro.

export const experience: TimelineEntry[] = [
  {
    title: "Desarrollador Full-Stack Junior",
    dateLabel: "2024 - Presente",
    description:
      "Desarrollo de aplicaciones web con React y Next.js. Colaboración en proyectos de código abierto.",
  },
  {
    title: "Freelancer Web Developer",
    dateLabel: "2024 - 2025",
    description:
      "Desarrollo de sitios web personalizados para pequeñas empresas locales usando tecnologías modernas.",
  },
];

export const education: TimelineEntry[] = [
  {
    title: "Instituto Tecnológico de Mérida",
    dateLabel: "2022 - (2027)",
    description: "Ingeniería en Sistemas Computacionales",
  },
  {
    title: "Preparatoria Estatal #8",
    dateLabel: "2019 - 2022",
    description: "Bachillerato General",
  },
];

export const bioSummary =
  "Estudiante de último año de Ingeniería en Sistemas Computacionales, enfocado en el desarrollo web full-stack. Busco una oportunidad de residencia o prácticas para aplicar mis habilidades en tecnologías como React, Node.js y Next.js. Mi objetivo es contribuir al desarrollo de soluciones web eficientes y aprender del entorno profesional.";

export const hackathons: TimelineEntry[] = [
  {
    title: "Hackathon 3.0",
    dateLabel: "Abril 2025",
    description:
      'Evento organizado por el Instituto Tecnológico de Mérida. Durante 36 horas mi equipo y yo creamos una solución a la empresa <strong>RODAI</strong>. La página para crear CV mediante IA <a href="https://github.com/mecottl/Trazocv" class="link">Trazo</a>.',
  },
  {
    title: "Hackathon 2.0",
    dateLabel: "Marzo 2024",
    description:
      'Evento organizado por el Instituto Tecnológico de Mérida. Durante 36 horas creamos mi equipo y yo una solución a la empresa <strong>EJAD</strong>. Una app para hacer reportes mediante comandos de voz.',
  },
];
