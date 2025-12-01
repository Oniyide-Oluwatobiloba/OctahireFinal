function Features() {
  try {
    const features = [
      { icon: 'user-circle', title: 'Student Management', desc: 'Profile management and application tracking for students' },
      { icon: 'building', title: 'Company Portal', desc: 'Post jobs, review candidates, and schedule interviews' },
      { icon: 'graduation-cap', title: 'University Dashboard', desc: 'Manage student database and placement statistics' },
      { icon: 'calendar-check', title: 'Smart Scheduling', desc: 'Automated interview scheduling with conflict detection' },
      { icon: 'chart-bar', title: 'Analytics', desc: 'Real-time insights and placement reports' },
      { icon: 'message-circle', title: 'Communication Hub', desc: 'Integrated messaging system for all users' }
    ];

    return (
      <section id="features" className="py-20 bg-white" data-name="features" data-file="components/Features.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need for successful campus recruitment</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{backgroundColor: 'var(--secondary-color)'}}>
                  <div className={`icon-${feature.icon} text-xl`} style={{color: 'var(--primary-color)'}}></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Features component error:', error);
    return null;
  }
}