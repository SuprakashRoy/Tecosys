import React from 'react';
import 'tailwindcss/tailwind.css';

const features = [
  { title: 'AI Doctor', description: 'Intelligent diagnosis and treatment, ensuring superior patient care.', icon: '🔍' },
  { title: 'AI Monitoring', description: 'Continuous AI-driven analysis for accurate and efficient data management.', icon: '📊' },
  { title: 'Enhanced OPD', description: 'Streamlined outpatient processes to boost efficiency and satisfaction.', icon: '⚙' },
  { title: 'Dose Reminders', description: 'Automated reminders for improved patient adherence and outcomes.', icon: '⏰' },
  { title: 'Health Tech', description: 'Advanced AI technologies for enhanced diagnostics and management.', icon: '💡' },
  { title: 'Cloud Solutions', description: 'Scalable cloud-based systems for seamless healthcare data management.', icon: '☁️' },
  { title: 'Top Security', description: 'Robust security protocols to safeguard patient information.', icon: '🔒' },
  { title: 'Paperless', description: 'Fully digital systems for enhanced efficiency and eco-friendliness.', icon: '📄' },
  { title: 'Compliance', description: 'Comprehensive tools to ensure regulatory compliance.', icon: '✅' },
  { title: 'Patient Feedback', description: 'Collect and analyze feedback for continuous quality improvement.', icon: '📋' },
];

const FeatureCard = ({ title, description, icon }) => (
  <div className="p-6 bg-card text-textPrimary rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
    <div className="text-4xl">{icon}</div>
    <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
    <p className="mt-2">{description}</p>
  </div>
);

const AIHospitalManagementSystem = () => {
  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary mb-8">Discover Our AI-Powered Hospital Management System</h2>
        <p className="text-accent mb-12">Unleash the power of AI to transform healthcare management and enhance patient care.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIHospitalManagementSystem;
