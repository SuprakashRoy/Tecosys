import React from 'react';
import 'tailwindcss/tailwind.css';

const features = [
  { title: 'AI Tutoring', description: 'Personalized AI-driven tutoring to support students in their learning journey.', icon: '📚' },
  { title: 'Smart Attendance', description: 'Automated attendance tracking for accurate and efficient student management.', icon: '🕒' },
  { title: 'AI Grading', description: 'Efficient and unbiased AI-based grading to streamline evaluation processes.', icon: '📝' },
  { title: 'Interactive Learning', description: 'Engage students with interactive AI-powered learning tools.', icon: '🎓' },
  { title: 'Data Insights', description: 'Leverage AI to gain valuable insights from educational data for better decision-making.', icon: '📊' },
  { title: 'Virtual Classrooms', description: 'AI-enhanced virtual classrooms for seamless and effective online education.', icon: '💻' },
  { title: 'AI-Powered Security', description: 'Advanced security features powered by AI to ensure a safe learning environment.', icon: '🔒' },
  { title: 'Feedback Analysis', description: 'AI-driven analysis of student feedback to continuously improve the educational experience.', icon: '📈' },
  // Add more features if needed
];

const FeatureCard = ({ title, description, icon }) => (
  <div className="p-6 bg-card text-textPrimary rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
    <div className="text-4xl">{icon}</div>
    <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
    <p className="mt-2">{description}</p>
  </div>
);

const AIEducationManagementSystem = () => {
  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary mb-8">Discover Our AI-Based Education Management System</h2>
        <p className="text-accent mb-12">Transform the educational landscape with our advanced AI solutions, enhancing learning experiences and administrative efficiency.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIEducationManagementSystem;
