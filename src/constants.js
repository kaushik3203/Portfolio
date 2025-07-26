// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/ic_logo.png';
import agcLogo from './assets/company_logo/ai_logo.png';


// Education Section Logo's
import glaLogo from './assets/education_logo/gtu_logo.jpg';
import bsaLogo from './assets/education_logo/cbse_logo.png';


// Project Section Logo's
import githubdetLogo from './assets/work_logo/1.jpg';
import csprepLogo from './assets/work_logo/2.jpg';
import movierecLogo from './assets/work_logo/3.jpg';




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: agcLogo,
      role: "Fullstack Developer",
      company: "Aksharraj Infotech",
      date: "June 2025 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Intern",
      company: "Aksharraj Infotech",
      date: "june 2024 - August 2024",
      desc: "Contributed to innovative projects as a Fullstack Intern, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: webverseLogo,
      role: "Frontend Intern",
      company: "InfiCloud",
      date: "June 2023 - August 2023",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Gujarat Technological University, Ahmedabad",
      date: "Sept 2022 - July 2025",
      grade: "7.81 CGPA",
      desc: "I am currently pursuing my Diploma in Computer Engineering from Gujarat Technological University, Ahmedabad. My coursework includes subjects such as Data Structures, Algorithms, Database Management Systems, and Web Development. I have actively participated in various coding competitions and hackathons, which have enhanced my problem-solving skills and practical knowledge in software development.",
      degree: "Diploma in Computer Engineering - GTU",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "Ekta High School, Bhavnagar",
      date: "Sept 2019 - Aug 2022",
      grade: "73.4%",
      desc: "I have completes my 10th grade from Ekta High School, Bhavnagar. During my time at Ekta High School, I developed a strong foundation in various subjects, including Mathematics, Science, and English. I actively participated in extracurricular activities such as sports and cultural events, which helped me develop leadership and teamwork skills. My experience at Ekta High School has been instrumental in shaping my academic journey and preparing me for higher education.",
      degree: "10th Grade - CBSE",
    },
  
  ];
  
  export const projects = [
    {
      id: 0,
      title: "E-commerce Website",
      description:
        "A fully functional e-commerce website built with React JS, Node.js, and MongoDB. It features user authentication, product listings, a shopping cart, and payment integration. The responsive design ensures a seamless shopping experience across devices.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "#",
      webapp: "#",
    },
    {
      id: 1,
      title: "CSPrep - Quiz Platform",
      description:
        "CSPrep is a comprehensive quiz platform designed to help students prepare for competitive exams. It features a wide range of quizzes across various subjects, providing an interactive learning experience. The platform includes user authentication, progress tracking, and a responsive design for easy access on any device.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "#",
      webapp: "#",
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      description:
        "A personal portfolio website showcasing my skills, projects, and experience. Built with React JS, it features a modern design, responsive layout, and smooth animations. The website includes sections for about me, skills, projects, and contact information.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "#",
      webapp: "#",
    },

  ];  