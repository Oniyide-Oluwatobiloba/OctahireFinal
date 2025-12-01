class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <button onClick={() => window.location.reload()} className="px-6 py-3 rounded-lg font-semibold bg-[var(--primary-color)] text-white">
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function DashboardApp() {
  try {
    const [selectedRole, setSelectedRole] = React.useState(null);
    const [showTutorial, setShowTutorial] = React.useState(() => {
      return !localStorage.getItem('octahire_tutorial_completed');
    });

    const handleRoleSelect = (role) => {
      setSelectedRole(role);
      localStorage.setItem('octahire_selected_role', role);
    };

    const handleTutorialComplete = () => {
      setShowTutorial(false);
      localStorage.setItem('octahire_tutorial_completed', 'true');
    };

    React.useEffect(() => {
      const savedRole = localStorage.getItem('octahire_selected_role');
      if (savedRole) setSelectedRole(savedRole);
    }, []);

    return (
      <div className="min-h-screen bg-gray-50" data-name="dashboard-app" data-file="dashboard-app.js">
        {showTutorial && <Tutorial onComplete={handleTutorialComplete} />}
        <DashboardHeader selectedRole={selectedRole} onRoleChange={() => setSelectedRole(null)} />
        {!selectedRole ? (
          <RoleSelector onSelectRole={handleRoleSelect} />
        ) : selectedRole === 'student' ? (
          <StudentDashboard />
        ) : selectedRole === 'company' ? (
          <CompanyDashboard />
        ) : (
          <UniversityDashboard />
        )}
      </div>
    );
  } catch (error) {
    console.error('DashboardApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <DashboardApp />
  </ErrorBoundary>
);