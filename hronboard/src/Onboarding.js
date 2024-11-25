import React from 'react';
import './Onboarding.css';

const steps = [
  {
    number: '01',
    title: 'Application Launch',
    date: 'June 2024',
    description: 'Get started by applying for the Ecobank Fintech Fellowship.',
    icon: '📅'
  },
  {
    number: '02',
    title: 'Application Window Closes',
    date: 'Early July 2024',
    description: 'Submit your application before the deadline.',
    icon: '⏳'
  },
  {
    number: '03',
    title: 'Finalists Announcement',
    date: 'Early August 2024',
    description: 'The selected finalists will be announced.',
    icon: '🎉'
  },
  {
    number: '04',
    title: 'Innovation Fair & Grand Finale',
    date: 'Mid-September 2024',
    description: 'Present your innovation at the grand finale event.',
    icon: '🏆'
  },
  {
    number: '05',
    title: 'Ecobank Fintech Fellowship',
    date: 'Oct. - Dec. 2024',
    description: 'Participate in the fintech fellowship program with Ecobank.',
    icon: '💼'
  },
  {
    number: '06',
    title: 'Commercial Partnership',
    date: 'Dec. 2024 - May 2025',
    description: 'Develop commercial partnerships with Ecobank.',
    icon: '🤝'
  }
];

const Onboarding = () => {
  return (
    <div className="onboarding-container">
      <div className="onboarding-card">
        {steps.map((step, index) => (
          <div key={index} className="onboarding-step">
            <div className="onboarding-header">
              <span className="step-number">{step.number}</span>
              <span className="step-icon">{step.icon}</span>
            </div>
            <h2 className="onboarding-title">{step.title}</h2>
            <p className="onboarding-date">{step.date}</p>
            <p className="onboarding-description">{step.description}</p>
            {index < steps.length - 1 && <div className="divider-line"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Onboarding;
