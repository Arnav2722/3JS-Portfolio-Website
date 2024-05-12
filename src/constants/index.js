import {
  mobile,
  backend,
  creator,
  codersbake,
  ekomart,
  upedd,
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
  figma,
  docker,
  diagnosphere,
  remitout,
  motionvox,
  spotify,
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
    title: "UI Designer",
    icon: mobile,
  },
  {
    title: "Graphic Designer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Graphic Designer",
    company_name: "Coders Bake",
    icon: codersbake,
    iconBg: "#383E56",
    date: "September 2022 - March 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "UI Designer",
    company_name: "Upedian",
    icon: upedd,
    iconBg: "#E6DEDD",
    date: "March 2023 - May 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Graphic Design Head",
    company_name: "Ekomart.org",
    icon: ekomart,
    iconBg: "#383E56",
    date: "March 2023 - March 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "He worked more than I expected. He is very passionate about his work",
    name: "Samyak Jain",
    designation: "CEO",
    company: "Coders Bake",
    image: "/src/constants/imgs/samyak.png",
  },
  {
    testimonial:
      "He did a great work. He created a design which was up to mark.",
    name: "Vishal Kumar",
    designation: "Co- Founder",
    company: "Upedian",
    image: "/src/constants/imgs/vishal.jpeg",
  },
  {
    testimonial:
      "In his intership period with Ekomart.org, He has done alot for our company.",
    name: "Vishal Kumar",
    designation: "Co-Founder",
    company: "Ekomart.org",
    image: "/src/constants/imgs/vishal.jpeg",
  },
];

const projects = [
  {
    name: "Motion Vox",
    description:
      "Empowering the deaf and mute with Python, TensorFlow, and cutting-edge computer vision. Seamlessly translating sign language into spoken words, fostering inclusive communication and societal unity",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tkinter",
        color: "green-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "pink-text-gradient",
      },
      {
        name: "OpenCV",
        color: "white-text=gradient",
      },
    ],
    image: motionvox,
    source_code_link: "https://github.com/Arnav2722/Motion-Vox",
  },
  {
    name: "DiagnoSphere",
    description:
      "Dedicated to healthcare excellence, we tackle diabetes, cancer, heart diseases, and more. Early intervention saves lives, while proactive monitoring ensures lasting wellness.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: diagnosphere,
    source_code_link: "https://github.com/Arnav2722/Diagnosphere",
  },
  {
    name: "RemitOut Clone",
    description:
      "Explore RemitOut's website clone project, replicating a top remittance company's online presence. Enjoy seamless money transfers in 40+ currencies and curated travel recommendations.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: remitout,
    source_code_link: "https://github.com/Arnav2722/Remitout-Website-Clone",
  },
  {
    name: "Spotify Clone",
    description:
      "Experience the essence of Spotify with my HTML, CSS, and JS clone. Enjoy seamless music streaming and personalized playlists in this project.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: spotify,
    source_code_link: "https://github.com/Arnav2722/",
  },
];

export { services, technologies, experiences, testimonials, projects };
