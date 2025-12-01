function StudentDashboard() {
  try {
    const [activeTab, setActiveTab] = React.useState('jobs');

    const stats = [
      { label: 'Applications', value: '12', icon: 'file-text', color: 'bg-blue-100 text-blue-600' },
      { label: 'Interviews', value: '3', icon: 'calendar', color: 'bg-green-100 text-green-600' },
      { label: 'Offers', value: '1', icon: 'star', color: 'bg-yellow-100 text-yellow-600' }
    ];

    return (
      <div className="max-w-7xl mx-auto px-4 py-8" data-name="student-dashboard" data-file="components/StudentDashboard.js">
        <h1 className="text-3xl font-bold mb-8">Student Dashboard</h1>
        
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
            {['jobs', 'applications', 'profile'].map(tab => (
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
            {activeTab === 'jobs' && 'Browse available job opportunities'}
            {activeTab === 'applications' && 'Track your application status'}
            {activeTab === 'profile' && 'Manage your profile information'}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('StudentDashboard component error:', error);
    return null;
  }
}