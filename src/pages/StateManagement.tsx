export const StateManagement = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Complex Reactive State Management
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced patterns for managing application state in complex React
            applications
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            State Architecture Patterns
          </h2>
          <div className="bg-card border rounded-lg p-8">
            <p className="text-muted-foreground mb-6">
              Interactive examples of state management solutions I've
              implemented:
            </p>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Redux and modern alternatives (Jotai, Zustand)
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Real-time state synchronization
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Optimistic updates and conflict resolution
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Module Federation state sharing
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
                Varsity Tutors - Frontend Architecture
              </h4>
              <p className="text-muted-foreground">
                Spearheaded frontend architectural improvements in React +
                TypeScript, significantly improving performance and
                maintainability
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                adidas - Modular Architectures
              </h4>
              <p className="text-muted-foreground">
                Implemented modular frontend architectures with React and
                TypeScript for mission-critical digital platforms
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
