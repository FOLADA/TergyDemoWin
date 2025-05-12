import React, { useEffect, useState, useRef } from 'react';
import './LandingPage.css';
import WhatWeOffer from '../components/WhatDoWeOffer/Offers';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'პლატფრომა, რომლის წყალობითაც გასხივოსნდები';
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.pageYOffset);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(id);
      }
    }, 100);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const letters = 'აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ';
    const container = containerRef.current;
    if (!container) return;
    const elems: HTMLElement[] = [];
    for (let k = 0; k < 12; k++) {
      const span = document.createElement('span');
      span.className = 'floating-georgian';
      span.textContent = letters[Math.floor(Math.random() * letters.length)];
      span.style.left = `${Math.random() * 100}%`;
      span.style.top = `${Math.random() * 100}%`;
      span.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(span);
      elems.push(span);
    }
    return () => elems.forEach(el => el.remove());
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
    <main className="landingpage-container" ref={containerRef}>
      <div
        className="background-overlay"
        style={{ opacity: Math.min(scrollPosition / 1000, 1) }}
      />

      <section
        className="landingpage-text-div"
        style={{ transform: `translateY(${scrollPosition * 0.1}px)` }}
      >
        <p className="tergi-p">{typedText}</p>
        <h1 className="tergi-h1">თერგი</h1>
        <h2 className="landingpage-h2">შეისისხლხორცე ქართული</h2>
        <div className="cta-container">
          <Link to="/რეგისტრაცია">
            <button
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onMouseMove={handleMouseMove}
              className="landingpage-button"
            >
              ახლავე
            </button>
          </Link>
          {showTooltip && (
            <span
              className="cursor-follow"
              style={{ left: cursorPos.x, top: cursorPos.y }}
            >
              შემოგვიერთდი!
            </span>
          )}
        </div>
      </section>

      <aside
        className="landingpage-img-div"
        style={{ transform: `translateY(${scrollPosition * 0.05}px)` }}
      >
        <div className="image-frame">
          <img
            src="logo.png"
            alt="Landing logo"
            className="landingpage-img"
            loading="lazy"
          />
          <div className="image-reflection" />
        </div>
      </aside>
    </main>
     <WhatWeOffer />
     </>
  );
}

export default LandingPage;