import React, { useRef } from 'react';
import './AnswerButtons.css';

interface AnswerButtonsProps {
  leftOption: string;
  rightOption: string;
  onSelect: (option: 'left' | 'right', element: HTMLButtonElement) => void;
  disabled: boolean;
}

const AnswerButtons: React.FC<AnswerButtonsProps> = ({
  leftOption,
  rightOption,
  onSelect,
  disabled,
}) => {
  const leftButtonRef = useRef<HTMLButtonElement>(null);
  const rightButtonRef = useRef<HTMLButtonElement>(null);

  const handleSelect = (option: 'left' | 'right') => {
    const buttonRef = option === 'left' ? leftButtonRef.current : rightButtonRef.current;
    if (buttonRef) {
      onSelect(option, buttonRef);
    }
  };

  return (
    <div className="answer-buttons-container">
      <button
        ref={leftButtonRef}
        onClick={() => handleSelect('left')}
        disabled={disabled}
        className="quiz-option-btn"
        aria-label={`Select option: ${leftOption}`}
      >
        {leftOption}
      </button>

      <button
        ref={rightButtonRef}
        onClick={() => handleSelect('right')}
        disabled={disabled}
        className="quiz-option-btn"
        aria-label={`Select option: ${rightOption}`}
      >
        {rightOption}
      </button>
    </div>
  );
};

export default AnswerButtons;
