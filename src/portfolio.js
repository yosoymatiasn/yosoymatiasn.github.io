import aboutpic from './components/Access/posing.png'
import resume from './components/Access/resume.pdf'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://morganbb104.github.io/HW_20_Portfolio_withReact/',
  title: 'MA.',
}

const about = {
  photo: aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Matias Agnese',
  role: 'Frontend developer in NYC',
  description: ``,
  resume,
  social: {
    linkedin: 'https://www.linkedin.com/in/matias-agnese',
    github: 'https://github.com/yosoymatiasn',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Sorting Visualizer',
    description:
      "This was a tough one. I had to thoroughly learn and understand the sorting algorithms in order to build out the animations for each one. It is not the most valuable application, but it sure is satisfying! (At least if you're the one who built it)",
    stack: ['JS', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/yosoymatiasn/sorting-algorithm-visualizer',
    livePreview: 'https://yosoymatiasn.github.io/sorting-algorithm-visualizer/',
  },
  {
    name: 'Nulanes',
    description:
      "A simple landing page I build for a friend of mine's company. He gave me the design he wanted and I translated it to code.",
    stack: ['HTML', 'CSS', 'React', 'Figma'],
    livePreview: 'https://nulanes.com',
  },
  {
    name: 'Project Precocious',
    description:
      'Another landing page I built for a non-profit business. This was the first time I ever used tailwind css and now I now understand why tools like this are so popular!',
    stack: ['Tailwindcss', 'NextJS', 'Figma'],
    livePreview: 'https://projectprecocious.com',
  },
  {
    name: 'Olympic Campaign',
    description:
      "This is a website I built for my best friend's olympic sailing campaign. They needed a website to host a blog and posts event to keep their followers updated.",
    stack: [
      'InstagramAPI',
      'Hygraph',
      'Graphql',
      'Tailwindcss',
      'NextJS',
      'Figma',
    ],
    livePreview: 'https://williford-brothers-racing.vercel.app',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML / CSS',
  'JavaScript / Typescript',
  'React / NextJS',
  'Apollo',
  'Graphql',
  'Prisma',
  'MongoDB',
  'Postgres',
  'Docker',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'matiasagnese.dev@gmail.com',
}

export { header, about, projects, skills, contact }
