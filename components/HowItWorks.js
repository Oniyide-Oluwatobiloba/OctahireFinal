function HowItWorks() {
  try {
    const userTypes = [
      { icon: 'user', title: 'Students', items: ['Create profile', 'Browse job opportunities', 'Apply to positions', 'Track application status'] },
      { icon: 'building', title: 'Companies', items: ['Post job openings', 'Review applications', 'Schedule interviews', 'Select candidates'] },
      { icon: 'graduation-cap', title: 'Universities', items: ['Manage student database', 'Coordinate placements', 'Monitor statistics', 'Generate reports'] }
    ];

    return (
      <section id="how-it-works" className="py-20 bg-gray-50" data-name="how-it-works" data-file="components/HowItWorks.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Different roles, one seamless experience</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {userTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{backgroundColor: 'var(--secondary-color)'}}>
                  <div className={`icon-${type.icon} text-3xl`} style={{color: 'var(--primary-color)'}}></div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-6">{type.title}</h3>
                <ul className="space-y-3">
                  {type.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="icon-check-circle text-lg mr-2 mt-1" style={{color: 'var(--accent-color)'}}></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('HowItWorks component error:', error);
    return null;
  }
}