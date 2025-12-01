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

function UserManualApp() {
  try {
    return (
      <div className="min-h-screen bg-gray-50" data-name="user-manual-app" data-file="user-manual-app.js">
        <ManualHeader />
        <ManualContent />
      </div>
    );
  } catch (error) {
    console.error('UserManualApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <UserManualApp />
  </ErrorBoundary>
);