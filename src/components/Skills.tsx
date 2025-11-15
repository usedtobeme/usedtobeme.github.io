interface SkillCategoryProps {
  title: string;
  skills: string;
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => (
  <div className="bg-card border rounded-lg p-6 border-t-4 border-t-secondary">
    <h3 className="text-lg font-bold text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{skills}</p>
  </div>
);

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Core Technologies',
      skills:
        'JavaScript (16 yrs), TypeScript (8 yrs), React (9 yrs), Redux, Jotai, Module Federation',
    },
    {
      title: 'Design & Accessibility',
      skills: 'Accessibility (10 yrs), Design Systems, Storybook, SVG',
    },
    {
      title: 'DevOps & Architecture',
      skills: 'CI/CD (Git, Webpack, PM2), Docker, Microfrontends',
    },
    {
      title: 'Leadership & Collaboration',
      skills:
        'Cross-functional work with Product/Design/Data, Mentoring, Async Remote Work',
    },
    {
      title: 'AI & Machine Learning',
      skills: 'OpenAI, Bedrock, Vertex AI, LangFuse',
    },
    {
      title: 'Backend & APIs',
      skills: 'GraphQL (3 yrs), REST, Node.js, AWS',
    },
  ];

  return (
    <section id="skills" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};
