import { Link } from 'react-router';

interface JobProps {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  portfolioLinks?: Array<{
    title: string;
    path: string;
    description: string;
  }>;
}

const Job = ({
  title,
  company,
  period,
  location,
  achievements,
  portfolioLinks,
}: JobProps) => (
  <div className="bg-card border rounded-lg p-6 border-l-4 border-l-primary">
    <div className="mb-4">
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <div className="flex flex-col sm:flex-row sm:gap-4 text-sm text-muted-foreground">
        <span className="font-semibold text-primary">{company}</span>
        <span>{period}</span>
        <span>{location}</span>
      </div>
    </div>
    <ul className="space-y-2 mb-6">
      {achievements.map((achievement) => (
        <li key={achievement} className="flex items-start">
          <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
          <span className="text-muted-foreground leading-relaxed">
            {achievement}
          </span>
        </li>
      ))}
    </ul>
    {portfolioLinks && portfolioLinks.length > 0 && (
      <div className="border-t pt-4">
        <h4 className="text-sm font-semibold text-foreground mb-3">
          Explore My Work:
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {portfolioLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="bg-secondary/50 hover:bg-secondary border rounded-md p-3 transition-colors group"
            >
              <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {link.title}
              </div>
              <p className="text-xs text-muted-foreground mt-1 leading-tight">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    )}
  </div>
);

export const Experience = () => {
  const jobs = [
    {
      title: 'Senior Software Engineer',
      company: 'Sauron Systems',
      period: 'August 2025 - Present',
      location: 'Remote',
      achievements: [
        'Spearheaded the design and implementation of two greenfield frontend projects in React + TypeScript, using real-time media and events streaming with an average velocity that exceeded expectations.',
        'Integrated automated CI/CD processes into the development lifecycle, harnessing GitHub Actions and AWS services to maintain deployment consistency and code quality.',
        'Collaborated with designers to refine user interfaces, aligning accessibility standards and visual consistency across applications.',
      ],
      portfolioLinks: [
        {
          title: 'WebGL & Rich Media',
          path: '/webgl-media',
          description: 'Real-time media streaming and interactive graphics',
        },
        {
          title: 'Design Systems',
          path: '/design-systems',
          description: 'UI consistency and accessibility standards',
        },
      ],
    },
    {
      title: 'Staff Software Engineer',
      company: 'Varsity Tutors',
      period: 'August 2024 - August 2025',
      location: 'Remote',
      achievements: [
        'Spearheaded frontend architectural improvements in React + TypeScript, significantly improving performance and maintainability.',
        'Led development of LLM-based AI agents and chat UIs, including prompt and context management.',
        'Partnered closely with Product and Design to deliver user-centric solutions in a remote-first async environment.',
        'Maintained scalable component libraries adhering to design system and accessibility best practices.',
        'Mentored and provided ongoing coaching to a distributed engineering team of 6 through weekly 1:1 sessions over 12 months, accelerating adoption of TypeScript and React patterns while reducing code review turnaround by 40%.',
        'Directed implementation of automated testing pipelines using Jest and Playwright, ensuring product quality throughout automated daily releases and reducing escaped bugs by 25%.',
      ],
      portfolioLinks: [
        {
          title: 'State Management',
          path: '/state-management',
          description: 'Frontend architectural improvements and performance',
        },
        {
          title: 'Design Systems',
          path: '/design-systems',
          description: 'Scalable component libraries and accessibility',
        },
        {
          title: 'Leadership',
          path: '/leadership',
          description: 'Team mentoring and process improvements',
        },
        {
          title: 'Observability & D3',
          path: '/observability-d3',
          description: 'Testing pipelines and quality metrics',
        },
      ],
    },
    {
      title: 'Senior Manager Experience Engineering',
      company: 'Publicis Sapient',
      period: 'March 2024 - August 2024',
      location: 'Bogota, Colombia',
      achievements: [
        'Created collaborative peer learning sessions and practical hands-on labs to advance team proficiency in accessibility, modular architecture, and design systems.',
        'Strengthened the technical vision for experience engineering by evaluating legacy technology stacks and guiding teams toward robust, scalable frontend solutions using React and TypeScript.',
        'Established a peer review framework, leveraging GitHub workflows, to maintain high code quality and streamline collaboration across distributed engineering groups.',
      ],
      portfolioLinks: [
        {
          title: 'Design Systems',
          path: '/design-systems',
          description: 'Accessibility and modular architecture expertise',
        },
        {
          title: 'Leadership',
          path: '/leadership',
          description: 'Peer learning and technical vision development',
        },
      ],
    },
    {
      title: 'Staff Software Engineer',
      company: 'Gloss Genius',
      period: 'April 2023 - January 2024',
      location: 'Remote',
      achievements: [
        'Drove the development of highly interactive interfaces with React and React Native.',
        'Guided implementation of pixel-perfect designs and elevated frontend performance metrics.',
        'Introduced scalable testing strategies and accessibility enhancements across platforms.',
      ],
      portfolioLinks: [
        {
          title: 'WebGL & Rich Media',
          path: '/webgl-media',
          description: 'Highly interactive interface development',
        },
        {
          title: 'Design Systems',
          path: '/design-systems',
          description: 'Pixel-perfect design implementation',
        },
      ],
    },
    {
      title: 'Director Software Engineering',
      company: 'adidas',
      period: 'March 2020 - July 2021',
      location: 'Bogota, Colombia',
      achievements: [
        'Drove technical direction for mission-critical digital platforms by implementing modular frontend architectures with React and TypeScript.',
        'Evaluated existing solutions and applied advanced architectural patterns to streamline codebases and ensure alignment with organization-wide design systems.',
        'Facilitated alignment between business objectives and software engineering processes by collaborating closely with key stakeholders and applying effective communication strategies.',
        'Directed capacity planning efforts across three agile teams, ensuring sustainable resource allocation and reducing project delivery bottlenecks by 30% over a 12-month portfolio of enterprise software projects.',
      ],
      portfolioLinks: [
        {
          title: 'State Management',
          path: '/state-management',
          description: 'Modular frontend architectures and advanced patterns',
        },
        {
          title: 'Design Systems',
          path: '/design-systems',
          description: 'Organization-wide design system alignment',
        },
        {
          title: 'Leadership',
          path: '/leadership',
          description: 'Capacity planning and stakeholder collaboration',
        },
        {
          title: 'Observability & D3',
          path: '/observability-d3',
          description: 'Performance metrics and delivery optimization',
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">
          Experience
        </h2>
        <div className="space-y-8">
          {jobs.map((job) => (
            <Job key={`${job.company}-${job.title}`} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};
