import { FaLinkedin, FaGithub } from "react-icons/fa6";

import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiMysql } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { PiFileCSharp } from "react-icons/pi";

import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import image4 from "../assets/image4.png";
import image5 from "../assets/logo.png";
import image6 from "../assets/logo.png";
import image7 from "../assets/logo.png";
import image8 from "../assets/logo.png";
import petImage from "../assets/pets.jpeg";

// import user1 from "../assets/profile-pictures/user1.jpg";
// import user2 from "../assets/profile-pictures/user2.jpg";
// import user3 from "../assets/profile-pictures/user3.jpg";
// import user4 from "../assets/profile-pictures/user4.jpg";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Tysen Todd",
  infoList: [
    "Fullstack Developer",
    "CS Graduate",
    "Problem Solver & Continuous Learner",
  ],
  technologies: [
    <div className="flex space-x-4">
      <TbBrandJavascript className="text-3xl text-yellow-400" />
      <RiReactjsLine className="text-3xl text-cyan-400" />
      <DiJava className="text-3xl text-cyan-400" />
      <DiMysql className="text-3xl text-cyan-400" />
      <FaNode className="text-3xl text-green-600" />
      <FaVuejs className="text-3xl text-white" />
      <SiMongodb className="text-3xl text-green-600" />
      <PiFileCSharp className="text-3xl text-purple-600" />
    </div>,
  ],
};
export const ABOUT = {
  text2:
    "Hello, my name is Tysen Todd! Im a 24-year-old, CS graduate & self-taught front-end developer with a passion for creating visually stunning and user-friendly websites and applications. My dedication to solving problems drives me to continually expand my programming knowledge and stay ahead of industry trends. I thrive in environments that challenge me to learn and grow, and I am committed to delivering high-quality, efficient solutions to meet the tasks asked from me.",
  text3:
    "In my free time when I'm not coding, I am playing video games with friends, and spending quality time with my fiancée and our pets. These activities keep me balanced and inspire me throughout the day.",
  image: petImage,
};

export const PROJECTS = [
  {
    title: "Farlight4Fans",
    subtitle:
      "A dedicated fanpage for the video game Farlight 84, built with fundamental web development techniques and featuring an interactive character quiz.",
    date: "March 2024 - May 2024",
    video: video1,
    technologies: [
      <FaHtml5 className="text-2xl text-orange-600" />,
      <FaCss3Alt className="text-2xl text-blue-500" />,
      <TbBrandJavascript className="text-2xl text-yellow-400" />,
    ],
    demoLink: "https://farlight4fanscom.vercel.app/",
    sourceLink: "https://github.com/TysenTodd/Farlight4Fans",
    timeline:
      "My first completed project of my coding career, where I implemented the fundamentals of web development that I learned in the first couple months into my path",
    keyObjectives: [
      "Create a fan hub for the video game Farlight 84.",
      "Establish a strong foundational understanding of HTML and CSS layout techniques.",
      "Understand basic JavaScript to enhance user interaction.",
    ],

    additionalDetails:
      "HTML Fundamentals, CSS & Transitioning Fundamentals, Form Submission Handling, Event Listeners & DOM Manipulation, Conditional Statements, Functions, Array Methods.",
  },
  {
    title: "GamerJunction",
    subtitle:
      "A fullstack e-commerce platform designed to sell video game-related items, fully integrated with a database for secure and efficient inventory management.",
    date: "May 2024 - September 2024",
    video: video2,
    technologies: [
      <RiReactjsLine className="text-2xl text-cyan-400" />,
      <FaNode className="text-2xl text-green-600" />,
      <SiMongodb className="text-2xl text-green-600" />,
    ],
    demoLink: "https://gamerjunction.vercel.app/",
    sourceLink: "https://github.com/TysenTodd/gamerjunction",
    timeline:
      "My second completed project of my coding career, where I implemented the fundamentals of React that I learned 3-4 months into my path. I'm continuing to work on this project and add more advanced features as I increase my knowledge",
    keyObjectives: [
      "Build a professional e-commerce site for gaming products.",
      "Learn & implement the MERN stack basics and MongoDB Atlas.",
      "Enhance JavaScript skills with intermediate-to-advanced techniques.",
      "Ensure a seamless user experience for browsing, cart management, and checkout.",
    ],
    additionalDetails:
      "Components, CSS Transitioning, Form Handling and Validation, State Management, Routing, API Integration (axios/fetch), Asynchronous Operations, Authentication & Authorization, Database Interactions (CRUD)",
  },
  {
    title: "Graceful Solutions",
    subtitle:
      "A front-end website created for a real-world web design company, showcasing their services, portfolio, and allows for clients to create accounts through the site.",
    date: "July 2024 - September 2024",
    video: video3,
    technologies: [
      <FaVuejs className="text-2xl text-white" />,
      <FaNode className="text-2xl text-green-600" />,
    ],

    demoLink: "https://gracefulsolutions.vercel.app/",
    sourceLink: "https://github.com/TysenTodd/gracefulsolutions",
    timeline:
      "My third completed project of my coding career, where I implemented the fundamentals of Vue that I learned 5-6 months into my path.",
    keyObjectives: [
      "Develop a professional, user-friendly website for showcasing web design services.",
      "Ensure easy navigation and interaction for potential clients.",
      "Follow guidelines instructed by business owner on details of website",
      "Learn and implement the basics of Vue.",
    ],
    additionalDetails:
      "Components, CSS Transitioning & Animation, UI/UX Design, Form Handling and Validation, State Management, Routing, Vue Models, Vue Cards  ",
  },
  {
    title: "Personal Portfolio",
    subtitle:
      "A front-end personal portfolio website designed to show off my projects, skills, and testimonals.",
    date: "August 2024 - Ongoing",
    image: image4,
    technologies: [
      <RiReactjsLine className="text-2xl text-cyan-400" />,
      <FaNode className="text-2xl text-green-600" />,
    ],
    sourceLink: "https://github.com/TysenTodd/portfolio",
    timeline: "Continuous",
    keyObjectives:
      "Showcase my programming skills and what I have learned during my programming path.",
  },
];

export const SKILLS = [
  {
    icon: (
      <TbBrandJavascript className="text-4xl lg:text-6xl text-yellow-400" />
    ),
    name: "Javascript",
    experience: "1 Year",
  },
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    experience: "8 Months",
  },
  {
    icon: <DiJava className="text-4xl lg:text-6xl text-green-600" />,
    name: "Java",
    experience: "3-4 Months",
  },
  {
    icon: <DiMysql className="text-4xl lg:text-6xl text-green-600" />,
    name: "mySQL",
    experience: "6-7 Months",
  },
  {
    icon: <FaNode className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
    experience: "2-3 Months",
  },
  {
    icon: <FaVuejs className="text-4xl lg:text-6xl text-white" />,
    name: "Vue",
    experience: "1-2 Months",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
    experience: "1-2 Months",
  },
  {
    icon: <PiFileCSharp className="text-4xl lg:text-6xl text-purple-600" />,
    name: "C#",
    experience: "1-2 Months",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/TysenTodd",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
