import profilePhoto from "../assets/me.jpg";
import type {
  EducationEntry,
  ExperienceEntry,
  ProjectEntry,
  UniProjectEntry,
} from "../types/api";
import JCI1 from "../assets/jci1.png";
import JCI2 from "../assets/jci2.png";
import CamTech from "../assets/logocamtech.png";
import UMN from "../assets/umn.png";
import suntel from "../assets/suntel.webp";
import csgn from "../assets/csgn.jpg";
import strapi from "../assets/strapi.png";
import react from "../assets/react.webp";
import nanningTeam from "../assets/nanning-team.jpg";
import denTeeth1 from "../assets/denteeth1.png";
import docker from "../assets/docker.png";
import springboot from "../assets/springboot.webp";
import cipr from "../assets/cipr.png";

export const PROFILE = {
  name: "Your Name",
  initials: "YN",
  headline: "I build reliable web apps, from the server to the screen.",
  intro:
    "I'm a full-stack developer who builds web applications end to end: APIs and databases on the back end, responsive and accessible interfaces on the front. I care about clean code, reliable systems, and software that's pleasant to use.",
  stack: [
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Laravel",
    "PHP",
    "Java",
    "Docker",
  ],
  status: "Available for new projects",
  photo: profilePhoto,
};

export const EDUCATION_INTRO =
  "University studies, an exchange abroad, and hands-on full-stack training.";

export const EDUCATION: EducationEntry[] = [
  {
    institution: "CamTech University",
    category: "university",
    startDate: "2022-2026",
    current: false,
    intro: "Bachelor's degree in Software Engineering",
    image: CamTech,
  },
  {
    institution: "Universitas Multimedia Nusantara (UMN), Indonesia",
    category: "university",
    description: "Exchange study mainly focus on web development",
    startDate: "2024",
    endDate: "2024",
    current: false,
    period: "2024 · 3 months",
    image: UMN,
  },

  {
    institution: "ADITY Academy",
    category: "training",
    degree: "Full-stack Development Course",
    period: "4 months",
  },
  {
    institution: "Gold Stone School",
    category: "high-school",
    startDate: "2009",
    endDate: "2020",
  },
  {
    institution: "Golden Valley Academy",
    category: "high-school",
    startDate: "2021",
    endDate: "2022",
  },
  { institution: "Spring Education Center", category: "additional" },
  { institution: "CognitiveClass.ai", category: "additional" },
];

export const EXPERIENCE_INTRO =
  "Full-time work and internships across Frontend and Backend.";

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Developer",
    company: "GAEA-SYS Cambodia",
    type: "Full time",
    startDate: "2026-02-11",
    highlights: [
      "Continue developing and maintaining the cloud platform and University Management System.",
      "Work on both front end and back end to implement new features, optimize performance, and improve system reliability.",
      "Collaborate with the team to enhance the platform and support ongoing development.",
    ],
    logo: "https://www.gaea-sys.com/asset/loading.gif",
  },
  {
    role: "Developer Intern",
    company: "GAEA-SYS Cambodia",
    type: "Internship",
    startDate: "2025-11-11",
    endDate: "2026-02-11",
    summary:
      "Contributed to the development of a cloud platform using the CloudStack API, working on both front end and back end to implement features and enhance system functionality.",
    logo: "https://www.gaea-sys.com/asset/loading.gif",
  },
  {
    role: "Frontend Developer Intern",
    company: "SunTel Technology Cambodia",
    type: "Internship",
    startDate: "2025-08-04",
    endDate: "2025-11-04",
    highlights: [
      "Developed modern, responsive interfaces and integrated APIs.",
      "Completed a 3-month internship focusing on front-end optimization.",
    ],
    logo: suntel,
  },
  {
    role: "Lead Web Developer Intern",
    company: "Cambodian Scholar Global Network",
    type: "Internship",
    remote: true,
    startDate: "2025-05-02",
    endDate: "2025-08-01",
    summary:
      "CSGN is a community-driven website that empowers Cambodian youth by connecting them with fellow scholars around the world. It serves as a hub for sharing personal journeys, academic experiences, and career resources.",
    highlights: [
      "Led a small team to design, build, and deploy the official CSGN website.",
      "Managed tasks, reviewed code, and kept the project on schedule.",
    ],
    image: [
      "https://phanreach-portfolio.vercel.app/components/csgn1.png",
      "https://phanreach-portfolio.vercel.app/components/csgn.png",
    ],
    logo: csgn,
    techstack: [
      { name: "React", area: "Frontend", logo: react },
      { name: "Strapi", area: "Backend", logo: strapi },
    ],
  },
];
export const CONTACT = {
  name: "Phan Reach",
  email: "reach4phan@gmail.com",
  phone: "092 352 442",
  phoneHref: "tel:+85592352442",
  location: "Sen Sok, Phnom Penh, Cambodia",
  github: {
    label: "github.com/phanreach",
    href: "https://github.com/phanreach",
  },
  message:
    "I'm open to full-stack roles and freelance projects. Email is the fastest way to reach me.",
};

export const PROJECTS_INTRO = "Freelance work outside of my company roles.";

export const PROJECTS: ProjectEntry[] = [
  {
    title: "JCI Chaktomuk website",
    kind: "Freelance project",
    role: "Frontend Developer",
    startDate: "2025-11-20",
    highlights: [
      "Built the public website for visitors, including the landing page.",
      "Built the admin interface and integrate with API where admins manage content, events, and users.",
      "Ensured responsive design and smooth functionality on both sides.",
    ],
    link: { label: "jcichaktomuk.cc", href: "https://jcichaktomuk.cc/" },
    image: [JCI1, JCI2],
    techstack: [
      { name: "React", area: "Frontend", logo: react },
      { name: "SpringBoot", area: "Backend", logo: springboot },
      { name: "Docker", area: "Deployment", logo: docker },
    ],
  },
];

export const UNI_PROJECTS_INTRO =
  "Projects I contribute to develop during my studies and internships.";

export const UNI_PROJECTS: UniProjectEntry[] = [
  {
    title: "DenTeeth",
    tagline: "AI-powered oral health management system",
    kind: "Internship group project",
    description: [
      "DenTeeth uses AI to improve oral health. Patients upload photos of their teeth, and an AI system analyzes them to give an early diagnosis, feedback, and personalized suggestions.",
      "It tackles three problems at once: many people don't realize how much oral health matters, cost keeps some from seeing a dentist, and limited access to dental care often leads to poor oral hygiene.",
    ],
    features: [
      "Early diagnosis",
      "Dental clinic recommendations",
      "Smart appointment management",
    ],
    status: {
      label: "Completed",
      detail:
        "The project is finished. The backend server has been stopped because it was only a university project, so the website shows the interface only, without working features.",
    },
    screens: [{ src: denTeeth1, title: "DenTeeth Interface" }],
    website: { label: "DenTeeth", href: "https://denteeth.pages.dev/" },
  },
  {
    title: "Products Recommender",
    tagline:
      "AI-Driven Customer Insights and Hyper Personalized Recommendations",
    kind: "Internship group project",
    description: [
      "A hybrid recommendation engine combining collaborative filtering, content-based filtering, and basic behavioral analytics to create more accurate customer profiles. The system will analyze factors such as purchase timing patterns, product category preferences to generate recommendations.",
    ],
    features: [
      "Hybrid Recommendation Engine that combines collaborative filtering and content-based filtering",
      "Behavioral Analytics by analyzes purchase history",
      "Integrates user-item interactions, product description similarity, and customer value scores.",
      "delivering instant product suggestions to improve user engagement",
      "Provides a user-friendly interface",
    ],
    status: {
      label: "Completed",
      detail:
        "The project is finished. The backend server has been stopped because it was only a university project, so the interface is shown without working features.",
    },
    highlight: {
      label: "Pitched in China, 2025",
      title: "Smart Market AI link ASEAN, Nanning",
      detail:
        "Honored to represent Cambodia in bringing our AI-powered project to the international stage.",
      photo: nanningTeam,
      caption: "Our team in Nanning, China",
    },
    screens: [{ src: cipr, title: "CIPR UI" }],
    website: {
      label: "Products Recommender",
      href: "https://cipr-ecommerce.vercel.app/",
    },
  },
];
