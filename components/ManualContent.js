function ManualContent() {
  try {
    const [activeSection, setActiveSection] = React.useState('getting-started');

    const sections = [
      { id: 'getting-started', title: 'Getting Started', icon: 'rocket' },
      { id: 'student-guide', title: 'Student Guide', icon: 'user' },
      { id: 'company-guide', title: 'Company Guide', icon: 'building' },
      { id: 'university-guide', title: 'University Guide', icon: 'graduation-cap' },
      { id: 'faq', title: 'FAQ', icon: 'help-circle' }
    ];

    return (
      <div className="max-w-7xl mx-auto px-4 py-8" data-name="manual-content" data-file="components/ManualContent.js">
        <div className="grid md:grid-cols-4 gap-8">
          <aside className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-4 sticky top-24">
              <h3 className="font-semibold mb-4 text-gray-900">Contents</h3>
              <nav className="space-y-2">
                {sections.map(section => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center space-x-2 ${
                      activeSection === section.id ? 'text-white' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    style={activeSection === section.id ? {backgroundColor: 'var(--primary-color)'} : {}}
                  >
                    <div className={`icon-${section.icon} text-lg`}></div>
                    <span className="text-sm font-medium">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <main className="md:col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-8">
              {activeSection === 'getting-started' && <GettingStartedSection />}
              {activeSection === 'student-guide' && <StudentGuideSection />}
              {activeSection === 'company-guide' && <CompanyGuideSection />}
              {activeSection === 'university-guide' && <UniversityGuideSection />}
              {activeSection === 'faq' && <FAQSection />}
            </div>
          </main>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ManualContent component error:', error);
    return null;
  }
}

function GettingStartedSection() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Getting Started with OCTAHIRE</h1>
      <p className="text-gray-600 mb-6">Welcome to OCTAHIRE, your comprehensive campus recruitment platform. This guide will help you get started quickly.</p>
      
      <h2 className="text-2xl font-bold mb-4 mt-8">First Steps</h2>
      <ol className="list-decimal list-inside space-y-3 text-gray-700">
        <li>Navigate to the Dashboard from the homepage</li>
        <li>Select your role (Student, Company, or University)</li>
        <li>Complete your profile information</li>
        <li>Explore the features available for your role</li>
      </ol>
    </div>
  );
}

function StudentGuideSection() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Student Guide</h1>
      <h2 className="text-2xl font-bold mb-4">Profile Management</h2>
      <p className="text-gray-700 mb-4">Keep your profile updated with your latest skills, education, and experience.</p>
      <h2 className="text-2xl font-bold mb-4 mt-6">Applying for Jobs</h2>
      <p className="text-gray-700">Browse available positions and submit applications directly through the platform.</p>
    </div>
  );
}

function CompanyGuideSection() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Company Guide</h1>
      <h2 className="text-2xl font-bold mb-4">Posting Jobs</h2>
      <p className="text-gray-700 mb-4">Create detailed job postings to attract the right candidates.</p>
      <h2 className="text-2xl font-bold mb-4 mt-6">Managing Applications</h2>
      <p className="text-gray-700">Review applications, schedule interviews, and select candidates efficiently.</p>
    </div>
  );
}

function UniversityGuideSection() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">University Guide</h1>
      <h2 className="text-2xl font-bold mb-4">Student Database</h2>
      <p className="text-gray-700 mb-4">Manage comprehensive records of all students in your institution.</p>
      <h2 className="text-2xl font-bold mb-4 mt-6">Placement Analytics</h2>
      <p className="text-gray-700">Track placement statistics and generate detailed reports.</p>
    </div>
  );
}

function FAQSection() {
  const faqs = [
    { q: 'How do I reset my password?', a: 'Contact your administrator or use the forgot password link.' },
    { q: 'Can I apply to multiple jobs?', a: 'Yes, students can apply to as many positions as they qualify for.' },
    { q: 'How do I schedule interviews?', a: 'Companies can schedule interviews directly through the candidate profile.' }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i}>
            <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
            <p className="text-gray-700">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}