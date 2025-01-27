import project1 from "../assets/projects/P1.png";
import project2 from "../assets/projects/P2.png";
import project3 from "../assets/projects/P3.png";
import project4 from "../assets/projects/P4.png";

export const HERO_CONTENT = `Versatile Full-Stack Developer with 3+ years of experience building scalable web applications. Expertise in
 React.js, Node.js, and MongoDB with a strong focus on designing user-centric interfaces and reliable backend
 solutions. Skilled in e-commerce systems, API integration, and cloud deployment. Dedicated to optimizing per
formance and delivering impactful, efficient software solutions.`;

export const EDUCATION = [
  {
    year: "2021 - 2025",
    role: "Bachelor of Technology in Computer Science",
    description: `Indian Institute of Information Technology, Sri City`,
  },
  {
    year: "2019 - 2021",
    role: "Intermediate Education (Class 12)",
    description: `Aditya Intermediate College`,
  },
  {
    year: "2021",
    role: "Secondary Education (Class 10)",
    description: `Sri Chaitanya School`,
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Node.js", "Bootstrap"],
    demo: "https://portfolio-page-nu-two.vercel.app/",
    github: "https://github.com/kvskmurty2802/Portfolio_Page",
  },
  {
    title: "E-Commerce Website",
    image: project2,
    description:
      "A fully functional e-commerce website with product listing, shopping cart, and user authentication.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Cloudinary",
      "Stripe",
      "RazorPay",
    ],
    demo: "https://ecommerce-website-sand-ten.vercel.app/",
    github: "https://github.com/kvskmurty2802/UrbanEdge-Ecommerce",
  },
  {
    title: "Netflix Clone",
    image: project3,
    description:
      "A Netflix clone with features like user authentication, browsing movies, and managing user profiles.",
    technologies: ["React", "TailWind Css", "Node.js", "Firebase", "TMDB API"],
    demo: "https://netflix-0118.vercel.app/",
    github: "https://github.com/kvskmurty2802/Netflix",
  },
  {
    title: "The Movie DB",
    image: project4,
    description:
      "A website that integrates TheMovieDB API for exploring movies, genres, and ratings.",
    technologies: ["React", "TailWind Css", "Node.js", "TMDB API"],
    demo: "https://themoviedb-wine.vercel.app/",
    github: "https://github.com/kvskmurty2802/TheMovieDB",
  },
];

export const EXPERIENCE = [
  {
    year: "2023 - Present",
    role: "Bachelor of Technology in Computer Science",
    company: "Google Inc.",
    description: `Indian Institute of Information Technology, Sri City`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
];
