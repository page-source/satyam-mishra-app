// All the text on the site lives here so I only have to update one file.

export const profile = {
  name: 'Satyam Mishra',
  role: 'Frontend Development Lead',
  location: 'Remote, India',
  available: true,
  // Set photo to null if I don't want my face on here.
  photo: '/images/profile.jpg',
  intro: [
    'I have been working in frontend for 12 years, and leading teams for the last 3. Right now I lead six engineers at Newfold Digital on consumer facing AI features across web and mobile. Before that I spent most of my time migrating older platforms to React and making them faster.',
    'Day to day it is about 80% developer work and 20% management. The management part is timecards, one on ones, unblocking people so they can make progress, and scheduling time with other teams when we need their help.',
  ],
  bio: [
    'The first half of my career was mostly migrations. Perl and Mason systems to React, jQuery codebases to component libraries, and four hosting brands moved onto one shared frontend.',
    'The second half has been AI and mobile. Domain Advisor and Site Health Advisor inside the storefront, and the Network Solutions app on Android and iOS. Production escalation and web performance for the storefront are also mine.',
  ],
};

export const contact = {
  email: 'satyam.mishra333@gmail.com',
  phone: '+91 9711 757809',
  linkedin: 'https://www.linkedin.com/in/satyam-mishra-front-end/',
  github: 'https://github.com/page-source',
};

export const metrics = [
  { value: 12, suffix: '', label: 'Years in frontend', note: 'Since 2014' },
  { value: 6, suffix: '', label: 'Engineers led', note: 'Storefront team' },
  { value: 71, prefix: '39 to ', label: 'Lighthouse perf', note: 'Bluehost India' },
  { value: 2, suffix: 'k+', label: 'Mobile app users', note: 'Network Solutions' },
];

export const work = [
  {
    company: 'Newfold Digital',
    role: 'Engineering Manager',
    start: 'Mar 2024',
    end: 'Present',
    place: 'Remote',
    href: 'https://newfold.com',
    summary: 'Leading the frontend team for the AI tools in our storefront.',
    points: [
      'Lead a team of 6 engineers building AI tools for the Storefront org, including Domain Advisor and Site Health Advisor.',
      'Shipped the Network Solutions mobile app on Android and iOS in early 2026, using React Native, Expo and TypeScript. Over 2k customers use it.',
      'Own production escalation and web performance across the Network Solutions storefront.',
    ],
    stack: ['React', 'Next.js', 'React Native', 'Expo', 'TypeScript', 'LLM APIs', 'Node'],
  },
  {
    company: 'Newfold Digital',
    role: 'Lead Engineer',
    start: 'Oct 2020',
    end: 'Mar 2024',
    place: 'Remote',
    href: 'https://newfold.com',
    summary: 'Migrated the hosting brands to React and worked on their performance.',
    points: [
      'Led the migration of the Bluehost storefront from a legacy Perl codebase to React and Next.js.',
      'Took the Bluehost India performance score from 39 to 71 with code splitting and by upgrading React from 15 to 18.',
      'Migrated 3 more brands onto a shared React and Redux frontend.',
      'Rockstar Award in Q3 2021 for exceptional performance.',
    ],
    stack: ['React', 'Redux', 'Next.js', 'Webpack', 'Micro Frontends', 'Web Performance'],
  },
  {
    company: 'Bed Bath & Beyond',
    role: 'Sr. Frontend Developer',
    start: 'Nov 2018',
    end: 'Sep 2020',
    place: 'Gurgaon',
    href: null,
    summary: 'Storefront work for a large North American retailer.',
    points: [
      'Built and maintained storefront features on a high traffic ecommerce site.',
      'Worked on application performance and improved the scores across the site.',
    ],
    stack: ['React', 'Redux-Saga', 'Node', 'Webpack'],
  },
  {
    company: 'Sapient',
    role: 'Senior Associate, Frontend',
    start: 'Jun 2014',
    end: 'Nov 2018',
    place: 'Gurgaon',
    href: null,
    summary: 'Started my career here and moved from jQuery to React.',
    points: [
      'Worked on frontend for multiple client projects during my time here.',
      'Promoted every year for three years, from Junior Associate to Senior Associate.',
    ],
    stack: ['JavaScript', 'jQuery', 'React', 'HTML', 'CSS'],
  },
];

const NETSOL_IOS =
  'https://apps.apple.com/us/app/networksolutions-com/id6769164881';
const NETSOL_ANDROID =
  'https://play.google.com/store/apps/details?id=com.networksolutions.app';

export const projects = [
  {
    title: 'Network Solutions',
    kind: 'iOS & Android app',
    year: '2026',
    body:
      'Domain and hosting management on mobile, built with React Native, Expo and TypeScript. Shipped on both stores in early 2026 and over 2k customers use it to manage their domains from the phone.',
    links: [
      { label: 'App Store', href: NETSOL_IOS },
      { label: 'Google Play', href: NETSOL_ANDROID },
    ].filter((l) => l.href),
    stack: ['React Native', 'Expo', 'TypeScript'],
  },
  {
    title: 'QuizCafe',
    kind: 'Web app',
    year: '2025',
    body:
      'A quiz platform where users can play quizzes, join the Daily Quiz and compete for a place on the Daily Leaderboard. React on the frontend with Supabase behind it.',
    links: [{ label: 'quizcafe.app', href: 'https://quizcafe.app' }],
    stack: ['React', 'Supabase', 'TypeScript'],
  },
  {
    title: 'Query Rider',
    kind: 'Chrome extension',
    year: '2023',
    body:
      'Adds, updates and saves URL query parameters without editing the address bar by hand. I built it because I was doing this manually many times a day.',
    links: [
      {
        label: 'Chrome Web Store',
        href: 'https://chrome.google.com/webstore/detail/query-rider/adgkhlljnhopgbbckknbdlkdgdajdkll',
      },
    ],
    stack: ['JavaScript', 'Chrome APIs'],
  },
];

export const toolkit = [
  {
    group: 'Building',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Node'],
  },
  {
    group: 'AI',
    items: ['LLM APIs (Claude / OpenAI)', 'Streaming UIs', 'Prompt engineering', 'Evals'],
  },
  {
    group: 'Architecture',
    items: ['Micro frontends', 'Web performance', 'Supabase', 'Jest', 'AEM', 'Cloudflare'],
  },
];

export const marquee = [
  'Network Solutions',
  'Bluehost',
  'Domain.com',
  'Web.com',
  'Bed Bath & Beyond',
  'Sapient',
];

export const education = [
  {
    school: 'The LNMIIT, Jaipur',
    qualification: 'B.Tech, Computer Science',
    score: '7.52 / 10',
    years: '2010 – 2014',
  },
  {
    school: 'Green Field Academy',
    qualification: 'CBSE Class 12',
    score: '92.2%',
    years: '2008 – 2009',
  },
  {
    school: 'Green Field Academy',
    qualification: 'CBSE Class 10',
    score: '89.6%',
    years: '2006 – 2007',
  },
];

export const sections = [
  { id: 'top', index: '00', label: 'Intro' },
  { id: 'work', index: '01', label: 'Work' },
  { id: 'numbers', index: '02', label: 'Numbers' },
  { id: 'projects', index: '03', label: 'Projects' },
  { id: 'education', index: '04', label: 'Education' },
  { id: 'contact', index: '05', label: 'Contact' },
];
