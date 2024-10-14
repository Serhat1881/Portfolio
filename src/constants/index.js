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
  git,
  figma,
} from '../assets'
import nextjs from '../assets/tech/nextjs.png'
import svelte from '../assets/tech/sveltejs.jpg'
import akatis from '../assets/company/akatis.png'
import valde from '../assets/company/valde.jpg'
import proje1 from '../assets/project/proje1.png'
import proje2 from '../assets/project/proje2.png'
import proje3 from '../assets/project/proje3.png'
import proje4 from '../assets/project/proje4.png'
import proje5 from '../assets/project/proje5.png'
import proje6 from '../assets/project/proje6.png'

export const navLinks = [
  {
    id: 'works',
    title: 'Projects',
  },
  {
    id: 'work',
    title: 'Work',
  },
]

const services = [
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'NextJS Developer',
    icon: mobile,
  },
  {
    title: 'ReactJS Developer',
    icon: backend,
  },
  {
    title: 'SvelteJS Developer',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'Svelte JS',
    icon: svelte,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },

  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
]

const experiences = [
  {
    title: 'Frontend Developer',
    company_name: 'Akatis Elektronik Ticaret A.Ş.',
    company_link: 'https://www.linkedin.com/company/valdeagency',
    icon: akatis,
    iconBg: '#383E56',
    date: 'Oct 2023 – Present',
    points: [
      'Actively contributed to the frontend development of B2B management, product, and service panels.',
      'Contributed to the development of four different panels and the main website.',
      'Played an active role throughout the entire project lifecycle as part of a startup initiative.',
      'Enhanced my technical skills by working with modern technologies such as React, Next.js, Svelte, SvelteKit, MUI, and TailwindCSS.',
      'Delivered user-friendly and scalable panels to meet customer requirements.',
      'This experience proved my ability to work effectively in fast-paced and challenging environments.',
    ],
  },
  {
    title: 'Frontend Developer',
    company_name: 'Valde Bilişim Teknolojileri A.Ş.',
    company_link:
      'https://www.linkedin.com/company/akatis-elektronik-ticaret-a-%C5%9F/',
    icon: valde,
    iconBg: '#C4D3FE',
    date: 'Feb 2023 – Sep 2023',
    points: [
      'Developed user-friendly web applications using React.js and Next.js.',
      'Created interactive and dynamic interfaces, managing user feedback effectively through modals.',
      'Implemented scrollable visual elements using Swiper components, enhancing mobile user experience.',
      'Simplified navigation with navbar structures for better accessibility.',
      'Performed SEO optimizations to increase the visibility of applications in search engines.',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'meraklinovaanaokulu',
    description:
      'This project is a website for a kindergarten school. Next.js, Redux, and CSS were used to build the website. The website showcases the school’s services, teachers, and contact information.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'reactjs',
        color: 'green-text-gradient',
      },
      {
        name: 'redux',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: proje3,
    source_code_link: 'https://www.meraklinovaanaokulu.com/',
  },
  {
    name: 'art exhibition',
    description:
      'This project is a website for an art exhibition. Next.js, Redux, and CSS were used to build the website. The website showcases the exhibition’s services, artists, and contact information.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'reactjs',
        color: 'green-text-gradient',
      },
      {
        name: 'redux',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: proje5,
    source_code_link: 'https://quickartspace.com.tr/',
  },
  {
    name: 'NextJs and Vercel-postgres',
    description:
      'The admin panel I developed using Next.js, NextAuth, and Tailwind CSS! The panel offers features for managing invoices, customer information, and user management. Additionally, I handle database management using Vercel Postgres.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'NextAuth',
        color: 'green-text-gradient ',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: proje1,
    source_code_link:
      'https://github.com/Serhat1881/next-full-stack-admin-panel',
  },
  {
    name: 'Full Stack Food ordering app',
    description:
      'This project is a food ordering platform built using modern web development technologies. Leveraging the power of MongoDB and Next.js, this full-stack application makes it easy for users to place food orders and for restaurant owners to manage orders.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'NextAuth',
        color: 'green-text-gradient ',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient ',
      },
    ],
    image: proje2,
    source_code_link:
      'https://github.com/Serhat1881/NextJs-and-MongoDb-full-stack-food-ordering-application-',
  },
  {
    name: 'Hafriyat Website',
    description:
      "This project is a website for a construction company. I built it using Next.js The website showcases the company's services, projects, and contact information.",
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: proje4,
    source_code_link: 'https://github.com/Serhat1881/bekirhafriyat',
  },
  {
    name: 'My All Projects',
    description:
      'You can reach all my projects from this link. You can see the source code and the demo of the projects.',
    tags: [
      {
        name: 'github',
        color: 'green-text-gradient',
      },
      {
        name: 'projects',
        color: 'blue-text-gradient',
      },
    ],
    image: proje6,
    source_code_link: 'https://github.com/Serhat1881?tab=repositories',
  },
]

export { services, technologies, experiences, testimonials, projects }
