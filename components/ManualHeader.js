function ManualHeader() {
  try {
    return (
      <header className="bg-white shadow-sm sticky top-0 z-50" data-name="manual-header" data-file="components/ManualHeader.js">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="index.html" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{backgroundColor: 'var(--primary-color)'}}>
                <div className="icon-briefcase text-xl text-white"></div>
              </div>
              <span className="text-2xl font-bold" style={{color: 'var(--primary-color)'}}>OCTAHIRE</span>
            </a>
            <div className="flex items-center space-x-4">
              <a href="index.html" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[var(--primary-color)] transition-colors">
                Home
              </a>
              <a href="dashboard.html" className="px-6 py-2 rounded-lg font-semibold text-white" style={{backgroundColor: 'var(--primary-color)'}}>
                Dashboard
              </a>
            </div>
          </div>
        </nav>
      </header>
    );
  } catch (error) {
    console.error('ManualHeader component error:', error);
    return null;
  }
}