function UniversityDashboard() {
  try {
    const [activeTab, setActiveTab] = React.useState('students');

    const stats = [
      { label: 'Total Students', value: '1,234', icon: 'users', color: 'bg-indigo-100 text-indigo-600' },
      { label: 'Placed', value: '856', icon: 'check-circle', color: 'bg-green-100 text-green-600' },
      { label: 'Active Companies', value: '45', icon: 'building', color: 'bg-orange-100 text-orange-600' }
    ];

    return (
      <div className="max-w-7xl mx-auto px-4 py-8" data-name="university-dashboard" data-file="components/UniversityDashboard.js">
        <h1 className="text-3xl font-bold mb-8">University Dashboard</h1>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}>
                  <div className={`icon-${stat.icon} text-xl`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex space-x-4 mb-6 border-b">
            {['students', 'placements', 'reports'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 px-4 font-medium capitalize transition-colors ${
                  activeTab === tab ? 'border-b-2 text-[var(--primary-color)]' : 'text-gray-600'
                }`}
                style={activeTab === tab ? {borderColor: 'var(--primary-color)'} : {}}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="text-center py-12 text-gray-500">
            {activeTab === 'students' && 'Manage student database'}
            {activeTab === 'placements' && 'Track placement statistics'}
            {activeTab === 'reports' && 'Generate placement reports'}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('UniversityDashboard component error:', error);
    return null;
  }
}