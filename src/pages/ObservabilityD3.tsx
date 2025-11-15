export const ObservabilityD3 = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Observability & Data Visualization
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            D3.js visualizations for monitoring, analytics, and experimental
            insights
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Interactive Data Visualizations
          </h2>
          <div className="bg-card border rounded-lg p-8">
            <p className="text-muted-foreground mb-6">
              Live examples of D3.js visualizations I've built for:
            </p>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Real-time system monitoring dashboards
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                A/B testing and experimentation results
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Performance metrics visualization
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                User behavior flow analysis
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Related Experience
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Varsity Tutors - Testing Pipelines
              </h4>
              <p className="text-muted-foreground">
                Directed implementation of automated testing pipelines, reducing
                escaped bugs by 25% as measured by production incident metrics
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                adidas - Performance Monitoring
              </h4>
              <p className="text-muted-foreground">
                Reduced project delivery bottlenecks by 30% through data-driven
                capacity planning across three agile teams
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
