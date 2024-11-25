import React from 'react';
import './Timeline.css';

const milestones = [
  { number: "01", date: "June 2024", title: "Application Launch" },
  { number: "02", date: "Early July 2024", title: "Application Window Closes" },
  { number: "03", date: "Early August 2024", title: "Finalists Announcement" },
  { number: "04", date: "Mid Sep 2024", title: "Innovation Fair & Grand Finale" },
  { number: "05", date: "Oct. - Dec. 2024", title: "Ecobank Fintech Fellowship" },
  { number: "06", date: "Dec. 2024 - May 2025", title: "Commercial Partnership" }
];

const Timeline = () => {
  return (
    <div className="timeline-container">
      {milestones.map((milestone, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-step">
            <div className="step-number">{milestone.number}</div>
          </div>
          <div className="timeline-details">
            <span className="timeline-date">{milestone.date}</span>
            <span className="timeline-title">{milestone.title}</span>
          </div>
          {index < milestones.length - 1 && <div className="divider"></div>}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
