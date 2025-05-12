import React, { useEffect, useRef } from 'react';
import { BookOpen } from 'lucide-react';
import './PlayerIcon.css';

interface PlayerIconProps {
  targetX: number;
  targetY: number;
  isMoving: boolean;
  isCorrect: boolean | null;
  onAnimationComplete: () => void;
}

const PlayerIcon: React.FC<PlayerIconProps> = ({ 
  targetX, 
  targetY, 
  isMoving, 
  isCorrect,
  onAnimationComplete 
}) => {
  const iconRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!isMoving || !iconRef.current) return;

    const animate = () => {
      if (!iconRef.current) return;

      iconRef.current.style.transition = 'transform 1s ease-in-out';
      iconRef.current.style.transform = `translate(${targetX}px, ${targetY}px)`;

      if (isCorrect !== null) {
        setTimeout(() => {
          if (!iconRef.current) return;

          if (isCorrect) {
            iconRef.current.classList.add('animate-bounce');
          } else {
            iconRef.current.classList.add('animate-crash');
          }

          setTimeout(() => {
            if (iconRef.current) {
              iconRef.current.classList.remove('animate-bounce', 'animate-crash');
            }
            onAnimationComplete();
          }, 500);
        }, 1000);
      }
    };

    animate();
  }, [targetX, targetY, isMoving, isCorrect, onAnimationComplete]);
  
  return (
    <div 
      ref={iconRef}
      className="player-icon-container"
      style={{ transform: 'translate(0, 0)' }}
    >
      <BookOpen 
        size={40} 
        className={`player-icon ${isCorrect === true ? 'correct' : isCorrect === false ? 'incorrect' : 'neutral'}`} 
      />
    </div>
  );
};

export default PlayerIcon;
