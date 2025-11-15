export const Leadership = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Engineering Leadership
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building teams, processes, and technical vision that scale
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Leadership Philosophy & Impact
          </h2>
          <div className="bg-card border rounded-lg p-8">
            <p className="text-muted-foreground mb-6">
              Interactive case studies of my leadership approaches:
            </p>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Mentoring frameworks and team development
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Technical decision-making processes
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Cross-functional collaboration strategies
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Engineering culture and best practices
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Related Experience
          </h3>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-card border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Varsity Tutors - Team Mentoring
              </h4>
              <p className="text-muted-foreground">
                Mentored distributed engineering team of 6, reducing code review
                turnaround by 40%
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Endava - Team Building
              </h4>
              <p className="text-muted-foreground">
                Mentored and trained over 30 junior software engineers through
                personalized development plans
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                adidas - Capacity Planning
              </h4>
              <p className="text-muted-foreground">
                Directed capacity planning efforts across three agile teams,
                reducing delivery bottlenecks by 30%
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
