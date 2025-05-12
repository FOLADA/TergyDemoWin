import React from 'react';
import './ProgressBar.css';

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentQuestion, totalQuestions }) => {
  const percentage = Math.round((currentQuestion / totalQuestions) * 100);

  return (
    <div className="progress-container">
      <div className="progress-info">
        <span>კითხვა {currentQuestion} / {totalQuestions}</span>
        <span>{percentage}%</span>
      </div>
      <div className="progress-bar-bg">
        <div 
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
