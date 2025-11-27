import type { GitHubRepo } from "../types/github";

const techIconMap = {
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
  "three.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original-wordmark.svg",
  Mocha:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg",
  Chai: "https://avatars.githubusercontent.com/u/1515293?s=280%v=4",
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
  Mongoose: "https://avatars.githubusercontent.com/u/7552965?s=280%v=4",
  Express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
  postgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
  PostgreSQL:
    "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
  D3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg",
  Jest: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
  Heroku:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg",
  MUI: "https://mui.com/static/logo.png",
  Axios: "https://avatars.githubusercontent.com/u/32372333?s=200%v=4",
  VISX: "https://airbnb.io/img/projects/visx.png",
  Nodemon: "https://cdn.iconscout.com/icon/free/png-256/nodemon-226039.png",
  Netlify: "https://www.netlify.com/v3/img/components/logomark.png",
} as const;

export type TechIcon = {
  src: string;
  alt: string;
};

export function techImg(tech: string): TechIcon | null {
  const src = techIconMap[tech as keyof typeof techIconMap];
  if (!src) {
    return null;
  }

  return { src, alt: `${tech} icon` };
}

export function projectTech(project: Pick<GitHubRepo, "name">): string[] {
  if (project.name === "NC-News-Back-End") {
    return ["JavaScript", "Node.js", "Express", "PostgreSQL", "Jest", "Heroku"];
  }
  if (project.name === "NC-News-Front-End") {
    return ["JavaScript", "React", "Axios", "MUI", "Netlify"];
  }
  if (project.name === "Vested-Back-End") {
    return [
      "JavaScript",
      "MongoDB",
      "Mongoose",
      "Express",
      "Node.js",
      "Mocha",
      "Chai",
      "Heroku",
      "Nodemon",
    ];
  }
  if (project.name === "Vested-Front-End") {
    return ["JavaScript", "React", "Axios", "Heroku", "MUI", "VISX", "Netlify"];
  }
  if (project.name === "liam-curran-website") {
    return ["JavaScript", "React", "Axios", "three.js"];
  }

  return [];
}

export function projectHostedLink(project: GitHubRepo): string | null {
  if (project.name === "NC-News-Back-End") {
    return "https://lc-nc-news.netlify.app/";
  }
  if (project.name === "NC-News-Front-End") {
    return "https://lc-nc-news.netlify.app/";
  }
  if (project.name === "Vested-Back-End") {
    return "https://vested.netlify.app/";
  }
  if (project.name === "Vested-Front-End") {
    return "https://vested.netlify.app/";
  }
  if (project.name === "liam-curran-website") {
    return "https://liamcurran.dev/";
  }

  return project.homepage || null;
}
