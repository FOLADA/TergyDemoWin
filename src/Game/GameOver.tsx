import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './GameOver.css';

interface GameOverProps {
  score: number;
  totalQuestions: number;
  highScore: number;
  onRestart: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ score, totalQuestions, highScore, onRestart }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`gameover-overlay ${visible ? 'visible' : ''}`}>
      <div className={`gameover-box ${visible ? 'scale-in' : 'scale-out'}`}>
        <h2 className="gameover-title">თამაში დასრულებულია</h2>

        <div className="gameover-stats">
          <p className="score-text">თქვენი ქულა: <span className="highlight">{score}</span> / {totalQuestions}</p>
          <p className="highscore-text">საუკეთესო ქულა: <span className="highlight">{highScore}</span> / {totalQuestions}</p>
        </div>

        <div className="gameover-button-wrapper">
          <button className="quiz-btn" onClick={onRestart}>
            <ArrowRight size={20} />
            <span>თავიდან დაწყება</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
