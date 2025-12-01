function SignupForm() {
  try {
    const [selectedRole, setSelectedRole] = React.useState('student');
    const [formData, setFormData] = React.useState({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [errors, setErrors] = React.useState({});

    const roles = [
      { id: 'student', label: 'Student', icon: 'user' },
      { id: 'company', label: 'Company', icon: 'building' },
      { id: 'university', label: 'University', icon: 'graduation-cap' }
    ];

    const handleChange = (field, value) => {
      setFormData(prev => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: '' }));
      }
    };

    const validateForm = () => {
      const newErrors = {};
      if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSignup = (e) => {
      e.preventDefault();
      if (!validateForm()) return;
      
      setIsLoading(true);
      setTimeout(() => {
        localStorage.setItem('octahire_selected_role', selectedRole);
        window.location.href = 'dashboard.html';
      }, 1000);
    };

    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12" data-name="signup-form" data-file="components/SignupForm.js">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <a href="index.html" className="inline-flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: 'var(--primary-color)'}}>
                <div className="icon-briefcase text-2xl text-white"></div>
              </div>
              <span className="text-3xl font-bold" style={{color: 'var(--primary-color)'}}>OCTAHIRE</span>
            </a>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
            <p className="text-gray-600">Join OCTAHIRE to get started</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">I am a</label>
              <div className="grid grid-cols-3 gap-3">
                {roles.map(role => (
                  <button
                    key={role.id}
                    type="button"
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

            <form onSubmit={handleSignup}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="John Doe"
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                    className={`w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all ${
                      errors.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Min. 6 characters"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <div className={`icon-${showPassword ? 'eye-off' : 'eye'} text-lg text-gray-400 hover:text-gray-600`}></div>
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => handleChange('confirmPassword', e.target.value)}
                    className={`w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all ${
                      errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Re-enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <div className={`icon-${showConfirmPassword ? 'eye-off' : 'eye'} text-lg text-gray-400 hover:text-gray-600`}></div>
                  </button>
                </div>
                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-lg font-semibold text-white transition-all hover:shadow-lg disabled:opacity-50"
                style={{backgroundColor: 'var(--primary-color)'}}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <a href="login.html" className="font-semibold hover:underline" style={{color: 'var(--primary-color)'}}>
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('SignupForm component error:', error);
    return null;
  }
}