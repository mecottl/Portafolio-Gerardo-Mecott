export interface Skill {
  icon: string;
  label: string;
  /** true si el logo es oscuro/monocromático y necesita invertirse para verse en fondo oscuro */
  invert?: boolean;
}

export interface SkillGroup {
  label: string;
  skills: Skill[];
}

export interface SkillCategory {
  title: string;
  /** Usa "groups" si la categoría tiene subgrupos (ej. Frontend → Core / Frameworks / UI) */
  groups?: SkillGroup[];
  /** O usa "skills" directo si la categoría no tiene subgrupos (ej. Core Languages, Design) */
  skills?: Skill[];
}

// Para agregar una habilidad nueva: agrega un objeto { icon, label } en el arreglo
// correspondiente. El ícono va en public/skills/ (SVG de devicon, MIT license).
// Usa invert: true solo si el logo es negro/oscuro y no se ve en el fondo oscuro del sitio.
export const skillCategories: SkillCategory[] = [
  {
    title: "Core Languages",
    skills: [
      { icon: "/skills/javascript.svg", label: "JavaScript" },
      { icon: "/skills/typescript.svg", label: "TypeScript" },
      { icon: "/skills/python.svg", label: "Python" },
      { icon: "/skills/csharp.svg", label: "C#" },
      { icon: "/skills/java.svg", label: "Java" },
    ],
  },
  {
    title: "Frontend",
    groups: [
      {
        label: "Core",
        skills: [
          { icon: "/skills/html5.svg", label: "HTML5" },
          { icon: "/skills/css3.svg", label: "CSS3" },
        ],
      },
      {
        label: "Frameworks",
        skills: [
          { icon: "/skills/angular.svg", label: "Angular" },
          { icon: "/skills/react.svg", label: "React" },
          { icon: "/skills/astro.svg", label: "Astro" },
        ],
      },
      {
        label: "UI / Styling",
        skills: [
          { icon: "/skills/bootstrap.svg", label: "Bootstrap" },
          { icon: "/skills/tailwindcss.svg", label: "Tailwind CSS" },
        ],
      },
    ],
  },
  {
    title: "Backend",
    groups: [
      {
        label: "Runtime",
        skills: [
          { icon: "/skills/nodejs.svg", label: "Node.js" },
          { icon: "/skills/dotnetcore.svg", label: ".NET Core" },
        ],
      },
      {
        label: "Frameworks",
        skills: [
          { icon: "/skills/express.svg", label: "Express", invert: true },
          { icon: "/skills/nestjs.svg", label: "NestJS" },
        ],
      },
    ],
  },
  {
    title: "Databases",
    groups: [
      {
        label: "SQL",
        skills: [
          { icon: "/skills/mysql.svg", label: "MySQL" },
          { icon: "/skills/mssql.svg", label: "SQL Server" },
          { icon: "/skills/postgresql.svg", label: "PostgreSQL" },
          { icon: "/skills/sqlite.svg", label: "SQLite" },
        ],
      },
      {
        label: "BaaS / ORM",
        skills: [
          { icon: "/skills/supabase.svg", label: "Supabase" },
          { icon: "/skills/prisma.svg", label: "Prisma", invert: true },
        ],
      },
    ],
  },
  {
    title: "Dev Ecosystem",
    groups: [
      {
        label: "Version Control",
        skills: [
          { icon: "/skills/git.svg", label: "Git" },
          { icon: "/skills/github.svg", label: "GitHub", invert: true },
        ],
      },
      {
        label: "Package Managers",
        skills: [
          { icon: "/skills/npm.svg", label: "npm" },
          { icon: "/skills/pnpm.svg", label: "pnpm" },
          { icon: "/skills/bun.svg", label: "Bun" },
        ],
      },
      {
        label: "API / Query",
        skills: [{ icon: "/skills/graphql.svg", label: "GraphQL" }],
      },
      {
        label: "Build & Deploy",
        skills: [
          { icon: "/skills/vitejs.svg", label: "Vite" },
          { icon: "/skills/vercel.svg", label: "Vercel", invert: true },
        ],
      },
      {
        label: "IDE",
        skills: [
          { icon: "/skills/visualstudio.svg", label: "Visual Studio" },
          { icon: "/skills/vscode.svg", label: "VS Code" },
        ],
      },
    ],
  },
  {
    title: "Design",
    skills: [
      { icon: "/skills/illustrator.svg", label: "Illustrator" },
      { icon: "/skills/photoshop.svg", label: "Photoshop" },
      { icon: "/skills/canva.svg", label: "Canva" },
    ],
  },
];
