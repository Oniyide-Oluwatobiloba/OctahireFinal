function RoleSelector({ onSelectRole }) {
  try {
    const roles = [
      { id: 'student', icon: 'user', title: 'Student', desc: 'Browse jobs and track applications' },
      { id: 'company', icon: 'building', title: 'Company', desc: 'Post jobs and hire candidates' },
      { id: 'university', icon: 'graduation-cap', title: 'University', desc: 'Manage placements and students' }
    ];

    return (
      <div className="max-w-6xl mx-auto px-4 py-16" data-name="role-selector" data-file="components/RoleSelector.js">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to OCTAHIRE</h1>
          <p className="text-xl text-gray-600">Select your role to get started</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {roles.map(role => (
            <button
              key={role.id}
              onClick={() => onSelectRole(role.id)}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto" style={{backgroundColor: 'var(--secondary-color)'}}>
                <div className={`icon-${role.icon} text-4xl`} style={{color: 'var(--primary-color)'}}></div>
              </div>
              <h3 className="text-2xl font-bold mb-3">{role.title}</h3>
              <p className="text-gray-600">{role.desc}</p>
            </button>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('RoleSelector component error:', error);
    return null;
  }
}