export interface Skill {
  icon: string;
  label: string;
}

// Para agregar una habilidad nueva, agrega un objeto aquí.
// Los íconos viven en public/skills/ (SVGs de devicon, MIT license).
export const skills: Skill[] = [
  { icon: "/skills/html5.svg", label: "HTML" },
  { icon: "/skills/css3.svg", label: "CSS" },
  { icon: "/skills/javascript.svg", label: "JavaScript" },
  { icon: "/skills/typescript.svg", label: "TypeScript" },
  { icon: "/skills/react.svg", label: "React" },
  { icon: "/skills/angular.svg", label: "Angular" },
  { icon: "/skills/nodejs.svg", label: "NodeJS" },
  { icon: "/skills/astro.svg", label: "Astro" },
  { icon: "/skills/git.svg", label: "Git / GitHub" },
  { icon: "/skills/postgresql.svg", label: "SQL / NoSQL / PostgreSQL / Supabase" },
  { icon: "/skills/adobe.svg", label: "Adobe" },
  { icon: "/skills/vercel.svg", label: "Vercel - Render - Netlify" },
];
