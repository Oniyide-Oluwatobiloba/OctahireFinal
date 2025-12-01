function Header() {
  try {
    return (
      <header className="bg-white shadow-sm sticky top-0 z-50" data-name="header" data-file="components/Header.js">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{backgroundColor: 'var(--primary-color)'}}>
                <div className="icon-briefcase text-xl text-white"></div>
              </div>
              <span className="text-2xl font-bold" style={{color: 'var(--primary-color)'}}>OCTAHIRE</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-[var(--primary-color)] transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-[var(--primary-color)] transition-colors">How It Works</a>
              <a href="user-manual.html" className="text-gray-700 hover:text-[var(--primary-color)] transition-colors">User Manual</a>
              <a href="login.html" className="text-gray-700 hover:text-[var(--primary-color)] transition-colors font-medium">Login</a>
              <a href="signup.html" className="btn-primary">Sign Up</a>
            </div>
            <button className="md:hidden">
              <div className="icon-menu text-2xl text-gray-700"></div>
            </button>
          </div>
        </nav>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}