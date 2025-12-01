function LoginForm() {
  try {
    const [selectedRole, setSelectedRole] = React.useState('student');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const roles = [
      { id: 'student', label: 'Student', icon: 'user' },
      { id: 'company', label: 'Company', icon: 'building' },
      { id: 'university', label: 'University', icon: 'graduation-cap' }
    ];

    const handleLogin = (e) => {
      e.preventDefault();
      setIsLoading(true);
      setTimeout(() => {
        localStorage.setItem('octahire_selected_role', selectedRole);
        window.location.href = 'dashboard.html';
      }, 1000);
    };

    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12" data-name="login-form" data-file="components/LoginForm.js">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <a href="index.html" className="inline-flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: 'var(--primary-color)'}}>
                <div className="icon-briefcase text-2xl text-white"></div>
              </div>
              <span className="text-3xl font-bold" style={{color: 'var(--primary-color)'}}>OCTAHIRE</span>
            </a>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Login to continue to your account</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Select Role</label>
              <div className="grid grid-cols-3 gap-3">
                {roles.map(role => (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedRole === role.id ? 'border-[var(--primary-color)] bg-[var(--secondary-color)]' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`icon-${role.icon} text-2xl mb-2 mx-auto`} style={{color: selectedRole === role.id ? 'var(--primary-color)' : '#6B7280'}}></div>
                    <span className={`text-xs font-medium ${selectedRole === role.id ? 'text-[var(--primary-color)]' : 'text-gray-600'}`}>{role.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <div className="icon-mail text-lg text-gray-400"></div>
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <div className="icon-lock text-lg text-gray-400"></div>
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <div className={`icon-${showPassword ? 'eye-off' : 'eye'} text-lg text-gray-400 hover:text-gray-600`}></div>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-lg font-semibold text-white transition-all hover:shadow-lg disabled:opacity-50"
                style={{backgroundColor: 'var(--primary-color)'}}
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="signup.html" className="font-semibold hover:underline" style={{color: 'var(--primary-color)'}}>
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('LoginForm component error:', error);
    return null;
  }
}