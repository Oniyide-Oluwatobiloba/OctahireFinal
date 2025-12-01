function DashboardHeader({ selectedRole, onRoleChange }) {
  try {
    return (
      <header className="bg-white shadow-sm" data-name="dashboard-header" data-file="components/DashboardHeader.js">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="index.html" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{backgroundColor: 'var(--primary-color)'}}>
                <div className="icon-briefcase text-xl text-white"></div>
              </div>
              <span className="text-2xl font-bold" style={{color: 'var(--primary-color)'}}>OCTAHIRE</span>
            </a>
            <div className="flex items-center space-x-4">
              {selectedRole && (
                <button onClick={onRoleChange} className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[var(--primary-color)] transition-colors">
                  Switch Role
                </button>
              )}
              <a href="user-manual.html" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[var(--primary-color)] transition-colors">
                Help
              </a>
              <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <div className="icon-user text-xl text-gray-600"></div>
              </button>
            </div>
          </div>
        </nav>
      </header>
    );
  } catch (error) {
    console.error('DashboardHeader component error:', error);
    return null;
  }
}