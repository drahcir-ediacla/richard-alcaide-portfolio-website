import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";
import { RiReactjsLine, RiHtml5Fill, RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import { SiNextdotjs, SiTsnode, SiAdobephotoshop, SiAdobeillustrator, SiCanva, SiMongodb, SiPrisma, SiSequelize, SiGithubactions, SiKubernetes  } from "react-icons/si";
import { TbBrandNodejs, TbBrandRedux, TbBrandMysql } from "react-icons/tb";
import { BiLogoJavascript, BiLogoFigma, BiLogoPostgresql, BiLogoGoogleCloud } from "react-icons/bi";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io5";
import { FaWordpress, FaShopify, FaAws, FaDigitalOcean, FaDocker, FaGithub } from "react-icons/fa";

const person: Person = {
  firstName: "Richard",
  lastName: "Alcaide",
  name: `Richard Alcaide`,
  role: "Full Stack Web Developer",
  avatar: "/images/avatar.jpg",
  email: "richard_alcaide@yahoo.com",
  location: "Asia/Manila", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Tagalog"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/drahcir-ediacla?tab=repositories",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/richard-alcaide-ba2a72260/",
  },
  {
    name: "Behance",
    icon: "behance",
    link: "https://www.behance.net/richard-alcaide",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/figma-vscode.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Dynamic UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/rebotspro-website",
  },
  subline: (
    <>
      I'm Richard, a FullStack Web Developer with Graphics Design experience focused on clean code, intuitive design,
      <br /> and impactful solutions that bring ideas to life.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Richard, a FullStack Web Developer with a passion for creating solutions that balance functionality,
        performance, and design. With hands-on experience across frontend and backend technologies,
        I specialize in building responsive, user-friendly applications that solve real problems.
        Whether it’s designing smooth interfaces, developing robust APIs, or optimizing databases,
        I approach every project with attention to detail, a focus on scalability, and a commitment to delivering results that make an impact.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FIRST G OUTSOURCING INC.",
        timeframe: "March 2025 - Present",
        role: "Freelance WordPress Developer",
        achievements: [
          <>
            Designing and developing new features, functionalities, and the overall website architecture.
          </>,
          <>
            Creating custom themes and plugins to extend WordPress functionality and meet specific project requirements.
          </>,
          <>
            Ensuring website performance, speed, and security through code optimization, caching, and other techniques.
          </>,
        ],
        // images: [
        //   // optional: leave the array empty if you don't want to display images
        //   {
        //     src: "/images/projects/project-01/cover-01.jpg",
        //     alt: "Once UI Project",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        company: "QROAD",
        timeframe: "Jan 2023 - Jan 2025",
        role: "Full Stack Web Developer, UI Designer",
        achievements: [
          <>
            Design & develop full stack web applications from scratch.
          </>,
          <>
            Responsible for publishing and maintaining the content and style attributes of the company’s Shopify and WordPress website.
          </>,
          <>
            Provides graphic design materials for digital and print for marketing department.
          </>,
        ],
        images: [],
      },
      {
        company: "Itech Company LLC",
        timeframe: "Oct 2009 - Jun 2017",
        role: "Website Administrator",
        achievements: [
          <>
            Managing the addition and updating of multiple products across various Yahoo Store e-commerce websites for the client.
          </>,
          <>
            Managing website content using HTML and CSS.
          </>,
          <>
            Optimizing the website’s performance including SEO.
          </>,
        ],
        images: [],
      },
      {
        company: "Global Sky",
        timeframe: "Sep 2007 - Oct 2009",
        role: "Website Administrator",
        achievements: [
          <>
            Oversee website content uploads, formatting, and organization using a CMS or through direct HTML/CSS edits.
          </>,
          <>
            Work closely with marketing teams to implement new features, updates, or campaigns for the website as needed.
          </>,
        ],
        images: [],
      },
      {
        company: "Versomina Inc.",
        timeframe: "Jul 2006 - Aug 2007",
        role: "Junior Web Developer",
        achievements: [
          <>
            Developing a one-page static site daily for submission to various website directories which helps boost search engine optimization, brand reach, and traffic.
          </>,
          <>
            Design and create different size of website’s pop-up banner.
          </>,
        ],
        images: [],
      },
      {
        company: "Foxchit Business Systems, Inc.",
        timeframe: "Apr 2005 - May 2006",
        role: "Graphic Artist",
        achievements: [
          <>
            Creates various layouts, iconography, package designs, logos, and illustrations for the products of the company.
          </>,
        ],
        images: [],
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming Tools",
        description: (
          <>Proficient in modern web development frameworks, libraries, and tools for building scalable applications.</>
        ),
        tags: [
          {
            name: "React.js",
            customIcon: <RiReactjsLine size={20} />,
          },
          {
            name: "Next.js",
            icon: "figma",
            customIcon: <SiNextdotjs size={20} />,
          },
          {
            name: "Node.js",
            customIcon: <TbBrandNodejs size={20} />,
          },
          {
            name: "Express.js",
            customIcon: <BiLogoJavascript size={20} />,
          },
          {
            name: "TypeScript",
            customIcon: <SiTsnode size={20} />,
          },
          {
            name: "JavaScript",
            customIcon: <TbBrandJavascript size={20} />,
          },
          {
            name: "HTML5",
            customIcon: <RiHtml5Fill size={20} />,
          },
          {
            name: "CSS3",
            customIcon: <IoLogoCss3 size={20} />,
          },
          {
            name: "TailwindCSS",
            customIcon: <RiTailwindCssFill size={20} />,
          },
          {
            name: "Redux",
            customIcon: <TbBrandRedux size={20} />,
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "CMS Platforms",
        description: (
          <>Skilled in developing, customizing, and managing content management systems to deliver scalable and user-friendly websites.</>
        ),
        tags: [
          {
            name: "WorPress",
            customIcon: <FaWordpress size={18} />,
          },
          {
            name: "Shopify",
            customIcon: <FaShopify size={18} />,
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Database Tools",
        description: (
          <>Skilled in using ORMs for efficient database modeling, querying, and integration with applications</>
        ),
        tags: [
          {
            name: "MySQL",
            customIcon: <TbBrandMysql size={18} />,
          },
          {
            name: "PostgreSQL",
            customIcon: <BiLogoPostgresql size={20} />,
          },
          {
            name: "MongoDB",
            customIcon: <SiMongodb size={20} />,
          },
          {
            name: "Prisma",
            customIcon: <SiPrisma size={18} />,
          },
          {
            name: "Sequelize",
            customIcon: <SiSequelize size={18} />,
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "DevOps & Deployment Tools",
        description: (
          <>Skilled in containerization, automation, and deployment workflows</>
        ),
        tags: [
          {
            name: "Docker",
            customIcon: <FaDocker size={20} />,
          },
          {
            name: "Kubernetes",
            customIcon: <SiKubernetes size={18} />,
          },
          {
            name: "Github Actions",
            customIcon: <SiGithubactions size={18} />,
          },
          {
            name: "Github",
            customIcon: <FaGithub size={18} />,
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Cloud Platforms",
        description: (
          <>Skilled in deploying, scaling, and managing applications using cloud services</>
        ),
        tags: [
          {
            name: "AWS",
            customIcon: <FaAws size={20} />,
          },
          {
            name: "Google Cloud",
            customIcon: <BiLogoGoogleCloud size={20} />,
          },
          {
            name: "Digital Ocean",
            customIcon: <FaDigitalOcean size={20} />,
          },
          {
            name: "Vercel",
            customIcon: <RiVercelFill size={18} />,
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Graphic Design Tools",
        description: (
          <>Skilled in creating visual assets, user-friendly designs and prototypes using industry-standard design software.</>
        ),
        tags: [
          {
            name: "Figma",
            customIcon: <BiLogoFigma size={20} />,
          },
          {
            name: "Adobe Photoshop",
            customIcon: <SiAdobephotoshop size={18} />,
          },
          {
            name: "Adobe Illustrator",
            customIcon: <SiAdobeillustrator size={18} />,
          },
          {
            name: "Canva",
            customIcon: <SiCanva size={18} />,
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Universidad de Manila (formerly City College of Manila)",
        description: "Bachelor's/College Degree in Computer Science",
        year: <>Attended from 2000 to 2004.</>,
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/graphics-01.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/graphics-02.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/graphics-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/graphics-07.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/graphics-05.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/graphics-03.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/graphics-06.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/graphics-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/graphics-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/graphics-10.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/graphics-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/graphics-12.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/graphics-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/graphics-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/graphics-15.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/graphics-16.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/graphics-17.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/graphics-18.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/graphics-19.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/graphics-20.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/graphics-21.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/graphics-22.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/graphics-23.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
