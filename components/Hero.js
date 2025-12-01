function Hero() {
  try {
    return (
      <section className="bg-gradient-to-br from-[var(--secondary-color)] to-white py-20" data-name="hero" data-file="components/Hero.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm mb-6">
                <span className="text-sm font-semibold" style={{color: 'var(--primary-color)'}}>Developed by Team8</span>
              </div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Streamline Your <span style={{color: 'var(--primary-color)'}}>Campus Recruitment</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Connect universities, students, and companies on a single platform. Make hiring smarter, faster, and more efficient.
              </p>
              <div className="flex space-x-4">
                <a href="signup.html" className="btn-primary">Get Started</a>
                <a href="user-manual.html" className="btn-outline">Learn More</a>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" alt="Team collaboration" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}