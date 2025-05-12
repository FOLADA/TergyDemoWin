import React from 'react';
import { BookOpen } from 'lucide-react';
import './StartScreen.css';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="start-screen">
      <div className="start-screen-container">
        <div className="icon-wrapper">
          <BookOpen size={80} className="icon" />
        </div>

        <h1 className="title">ქართული ლიტერატურის კვესტი</h1>

        <p className="subtitle">
          შეამოწმე შენი ცოდნა ქართული ლიტერატურის შესახებ ამ ინტერაქტიულ თამაშში
        </p>

        <button onClick={onStart} className="start-btn">
          თამაშის დაწყება
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
