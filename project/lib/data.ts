import {
  Code2,
  Database,
  Layers,
  Server,
  Terminal,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

export const personal = {
  name: 'Prashant Bhandari',
  title: 'Full Stack Developer',
  subtitle:
    'Building scalable web applications with React, Spring Boot, REST APIs, and modern web technologies.',
  email: 'prashantbhandari7678@gmail.com',
  phone: '+91 8273664778',
  location: 'Srinagar Garhwal, Uttarakhand',
  linkedin: 'prashant-bhandari-34a469262',
  github: 'prashantbhandari7678',
  resumeUrl: 'resume.pdf',
};

export const heroTypingRoles = [
  'Full Stack Developer',
  'React Developer',
  'Java Developer',
  'Spring Boot Developer',
  'Problem Solver',
];

export const aboutParagraphs = [
  "Hi, I'm Prashant Bhandari, a passionate Full Stack Developer who enjoys building clean, responsive, and scalable web applications.",
  'I have experience working with React, JavaScript, Spring Boot, Java, MySQL, Git, and REST APIs. I enjoy solving real-world problems through technology and continuously learning modern development practices.',
  'I believe in writing clean code, building intuitive user experiences, and creating applications that make people\'s lives easier.',
];

export const profileTraits = [
  'Quick Learner',
  'Communication Skills',
  'Problem Solving',
  'Team Collaboration',
  'Creativity',
];

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming',
    icon: Terminal,
    skills: [
      { name: 'Java', level: 88 },
      { name: 'Python', level: 80 },
      { name: 'C', level: 82 },
      { name: 'C++', level: 78 },
    ],
  },
  {
    name: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'HTML', level: 92 },
      { name: 'CSS', level: 88 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 86 },
    ],
  },
  {
    name: 'Backend',
    icon: Server,
    skills: [
      { name: 'Spring Boot', level: 82 },
      { name: 'REST API', level: 85 },
    ],
  },
  {
    name: 'Database',
    icon: Database,
    skills: [{ name: 'MySQL', level: 84 }],
  },
  {
    name: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Git', level: 86 },
      { name: 'VS Code', level: 92 },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  features?: string[];
  tech: string[];
  icon: LucideIcon;
  gradient: string;
};

export const projects: Project[] = [
  {
    title: 'MechanicMate',
    description:
      'A smart roadside assistance platform connecting users with nearby mechanics instantly. Users can request roadside help using location-based services while mechanics receive real-time requests through a dedicated dashboard.',
    features: [
      'Location based assistance',
      'Mechanic Dashboard',
      'User Dashboard',
      'Service Request',
      'Online/Offline Availability',
      'Responsive UI',
    ],
    tech: ['React', 'JavaScript', 'REST API', 'MySQL'],
    icon: Wrench,
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Hill Hopper',
    description:
      'Ride-sharing platform developed using Spring Boot and MySQL supporting user authentication, ride posting, booking approval, and trip tracking.',
    tech: ['Java', 'Spring Boot', 'MySQL'],
    icon: Layers,
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'CollegeConnect',
    description:
      'A university social media platform where students and teachers can communicate, share announcements, academic materials, events, and notices.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    icon: Code2,
    gradient: 'from-sky-500 to-blue-600',
  },
  {
    title: 'Movie Recommendation System',
    description:
      'Machine learning based recommendation system developed in Python that suggests movies based on user preferences.',
    tech: ['Python', 'Machine Learning'],
    icon: Database,
    gradient: 'from-cyan-500 to-teal-500',
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Applications',
    institution: 'Uttaranchal University',
    period: '2023–2026',
  },
  {
    degree: 'Diploma in Mechanical Engineering',
    institution: '',
    period: '2019–2022',
  },
  {
    degree: '12th',
    institution: 'NIOS',
    period: '2022–2023',
  },
  {
    degree: '10th',
    institution: 'CBSE',
    period: '2016',
  },
];

export const certifications = [
  {
    title: 'Artificial Intelligence & Generative AI',
    issuer: '',
  },
  {
    title: 'Data Science and Machine Learning',
    issuer: 'YBI Foundation',
  },
  {
    title: 'Boost Your Tech Excellence Coding Competition',
    issuer: '',
  },
  {
    title: 'Full Stack Development Workshop',
    issuer: '',
  },
];

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];
