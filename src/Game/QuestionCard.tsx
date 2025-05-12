import React from 'react';
import './QuestionCard.css';

interface QuestionCardProps {
  question: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  return (
    <div className="question-card">
      <h2 className="question-text">{question}</h2>
    </div>
  );
};

export default QuestionCard;
