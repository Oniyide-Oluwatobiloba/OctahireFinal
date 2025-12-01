function Tutorial({ onComplete }) {
  try {
    const [currentStep, setCurrentStep] = React.useState(0);

    const steps = [
      { title: 'Welcome to OCTAHIRE', desc: 'Let us guide you through the platform in just a few steps', icon: 'hand-heart' },
      { title: 'Select Your Role', desc: 'Choose whether you are a Student, Company, or University to access your personalized dashboard', icon: 'user-check' },
      { title: 'Explore Features', desc: 'Navigate through different sections using the tabs to manage your activities', icon: 'compass' },
      { title: 'Get Help Anytime', desc: 'Click on User Manual or Help in the header for detailed guides and support', icon: 'life-buoy' }
    ];

    const handleNext = () => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        onComplete();
      }
    };

    const handleSkip = () => {
      onComplete();
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center" data-name="tutorial" data-file="components/Tutorial.js">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8">
          <div className="text-center mb-6">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto" style={{backgroundColor: 'var(--secondary-color)'}}>
              <div className={`icon-${steps[currentStep].icon} text-4xl`} style={{color: 'var(--primary-color)'}}></div>
            </div>
            <h2 className="text-2xl font-bold mb-2">{steps[currentStep].title}</h2>
            <p className="text-gray-600">{steps[currentStep].desc}</p>
          </div>
          
          <div className="flex justify-center space-x-2 mb-6">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i === currentStep ? 'w-8' : 'w-2'
                }`}
                style={{backgroundColor: i === currentStep ? 'var(--primary-color)' : '#D1D5DB'}}
              ></div>
            ))}
          </div>
          
          <div className="flex space-x-3">
            <button
              onClick={handleSkip}
              className="flex-1 px-6 py-3 rounded-lg font-semibold border-2 transition-colors"
              style={{borderColor: 'var(--primary-color)', color: 'var(--primary-color)'}}
            >
              Skip
            </button>
            <button
              onClick={handleNext}
              className="flex-1 px-6 py-3 rounded-lg font-semibold text-white transition-colors"
              style={{backgroundColor: 'var(--primary-color)'}}
            >
              {currentStep === steps.length - 1 ? 'Get Started' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Tutorial component error:', error);
    return null;
  }
}