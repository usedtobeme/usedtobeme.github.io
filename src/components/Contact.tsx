export const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-3 text-primary-foreground/90">
              Email
            </h3>
            <a
              href="mailto:iki.amortegui@gmail.com"
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors underline"
            >
              iki.amortegui@gmail.com
            </a>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-3 text-primary-foreground/90">
              Phone
            </h3>
            <a
              href="tel:+573002829854"
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors underline"
            >
              +57 300 282 9854
            </a>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-3 text-primary-foreground/90">
              Location
            </h3>
            <p className="text-primary-foreground/90">Bogota, Colombia</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-3 text-primary-foreground/90">
              LinkedIn
            </h3>
            <a
              href="https://linkedin.com/in/i-amortegui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors underline"
            >
              linkedin.com/in/i-amortegui
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
