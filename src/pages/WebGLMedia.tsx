export const WebGLMedia = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            WebGL & Rich Media
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            High-performance graphics and real-time media streaming platforms
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Real-time Media Applications
          </h2>
          <div className="bg-card border rounded-lg p-8">
            <p className="text-muted-foreground mb-6">
              Interactive examples of media-rich applications I've developed:
            </p>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Real-time video streaming interfaces
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                WebGL-powered interactive visualizations
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Canvas-based drawing and annotation tools
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Audio/video processing pipelines
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
                Sauron Systems - Real-time Media
              </h4>
              <p className="text-muted-foreground">
                Designed and implemented greenfield frontend projects using
                real-time media and events streaming
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Gloss Genius - Interactive Interfaces
              </h4>
              <p className="text-muted-foreground">
                Drove development of highly interactive interfaces with React
                and React Native, focusing on performance metrics
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
