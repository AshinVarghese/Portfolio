import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  dotNET,
  SQL,
  JKTech,
  Vendekin,
  OASYS,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Dot Net Developer",
    icon: mobile,
  },
  {
    title: "SQL Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: ".Net",
    icon: dotNET,
  },
  {
    name: "SQL",
    icon: SQL,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "JK Tech",
    icon: JKTech,
    iconBg: "#383E56",
    date: "Jan 2021 - June 2021",
    points: [
      "Developed and maintained a hospital management system using Java and PostgreSQL technologies.",
      "Generated reports and wrote SQL procedures to streamline data retrieval and management.",
      "Collaborated with the team to ensure the smooth functioning of the hospital management system and meet the client's expectations.",
    ],
  },
  {
    title: "Intern",
    company_name: "Vendekin Technologies",
    icon: Vendekin,
    iconBg: "#E6DEDD",
    date: "June 2021 - Oct 2021",
    points: [
      "Enhanced my skills and gained practical experience in ReactJS and Firebase technologies, which are commonly used in web development.",
      "Participated in various software development activities, such as coding, testing, and debugging, to learn the development life cycle.",
      "Acquired experience in working in a team environment and collaborating with other team members to achieve project goals."

    ],
  },
  {
    title: "Jr. Software Engineer ",
    company_name: "Vendekin Technologies",
    icon: Vendekin,
    iconBg: "#383E56",
    date: "Oct 2021 - Jan 2022",
    points: [
      "Developed code using ReactJS and Firebase to enhance the software and meet the client's needs.",
      "Collaborated with the team to add new features and functionalities to the software as per the project requirements."
    ],
  },
  {
    title: "Software Developer",
    company_name: "OASYS Information Technology L.L.C",
    icon: OASYS,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Responsible for writing code in JavaScript, .Net, and SQL to develop a CRM system that meets client requirements.",
      "Develop web pages using JavaScript to ensure a seamless user experience.",
      "Designed and built a data migration tool similar to Excel, with built-in data validation capabilities, to streamline data management processes."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Book recommendation system",
    description:
      "Utilized skills in Python, Machine Learning, ReactJS, and Heroku to create a personalized book recommendation system based on past activities.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "Heroku",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "Baby Care app",
    description:
      "Utilized skills in Android Development, Java, SQLite, and UX Design to create an app that keeps track of a child's activities such as feeding, pumping, sleep, and medicine.",
    tags: [
      {
        name: "Android",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "SQLite",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "Smart Room IOT",
    description:
      "Utilized skills in IOT and Arduino UNO to create a system that automatically controlled the temperature and lighting based on human presence.",
    tags: [
      {
        name: "IOT",
        color: "blue-text-gradient",
      },
      {
        name: "Arduino UNO",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/AshinVarghese/food-delivery-system",
  },
  {
    name: "Food Delivery system",
    description:
      "Quick bites food delivery system which hepls you to order food and make payments.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };