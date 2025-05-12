import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiCalendar } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import './TutorDetailed.css';
import tutors from './tutors.data';
import FeedbackForm from './FeedbackSystem';

interface ExperienceEntry {
  date: string;
  role: string;
}

interface Tutor {
  id: number;
  name: string;
  tagline: string;
  image: string;
  bio: string;
  cv?: string;
  achievements: string[];
  experience: ExperienceEntry[];
}

const TutorDetailed: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const tutor: Tutor | undefined = tutors.find(t => t.id.toString() === id);

  if (!tutor) {
    return (
      <div className="not-found">
        <h2>რეპეტიტორი ვერ მოიძებნა</h2>
        <Link to="/tutors" className="return-button">
          უკან დაბრუნება
        </Link>
      </div>
    );
  }

  return (
    <section className="tutor-detail" role="main" aria-label="Tutor Detailed View">
      <div className="georgian-bg">
        {['ვ', 'ზ', 'თ', 'ი', 'კ'].map((char, i) => (
          <span 
            key={i} 
            className="floating-char"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              animationDelay: `${i * 2}s`,
              color: '#f0e6ed'
            }}
          >
            {char}
          </span>
        ))}
      </div>

      <Link to="/რეპეტიტორები" className="back-button" aria-label="Return to all tutors">
        <FiArrowLeft className="button-icon" />
        <span>უკან დაბრუნება</span>
      </Link>

      <div className="tutor-content">
        <div className="bio-column">
          <div className="tutor-header">
            <img 
              src={tutor.image} 
              alt={`Portrait of ${tutor.name}`} 
              className="profile-image"
              loading="lazy"
            />
            <div className="header-info">
              <h1 className="tutor-name">{tutor.name}</h1>
              <p className="tutor-tagline">{tutor.tagline}</p>
              <button 
                className="book-button"
                onClick={() => {/* Add booking logic */}}
                aria-label="Book appointment with this tutor"
              >
                <FiCalendar className="button-icon" />
                <span>ჩნიშნე შეხვედრა</span>
              </button>
            </div>
          </div>

          <h2 className="bio-heading">ბიოგრაფია</h2>
          {tutor.bio.split('\n').map((p, i) => (
            <p key={i} className="bio-text">{p}</p>
          ))}
          {tutor.cv && (
            <a 
              href={tutor.cv} 
              className="cv-button"
              download
              aria-label={`Download ${tutor.name}'s CV`}
            >
              გადმოიწერე CV
            </a>
          )}
          <div className="rating-section">
            <h3 className="rating-heading">რეიტინგი</h3>
            <RatingChart />
          </div>
        </div>

        <div className="achievements-column">
          <div className="achievements-section">
            <h3 className="achievements-heading">კარიერული მიღწევები</h3>
            <ul role="list" className="achievements-list">
              {tutor.achievements.map((item, i) => (
                <li 
                  key={i} 
                  role="listitem" 
                  className="achievement-item"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="timeline-section">
            <h3 className="timeline-heading">გამოცდილება</h3>
            <Timeline entries={tutor.experience} />
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineProps {
  entries: ExperienceEntry[];
}

const Timeline: React.FC<TimelineProps> = ({ entries }) => (
  <div className="timeline">
    {entries.map((entry, i) => (
      <div key={i} className="timeline-entry">
        <div className="timeline-marker" />
        <div className="timeline-content">
          <p className="timeline-date">{entry.date}</p>
          <p className="timeline-role">{entry.role}</p>
        </div>
      </div>
    ))}
    <FeedbackForm />
  </div>
);

const RatingChart: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [hover] = useState<number | null>(null);

  return (
    <div className="rating-chart" aria-label="Rating chart" role="radiogroup">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = (hover !== null ? hover : rating) >= star;
        return (
          <span
            key={star}
            className={`star ${filled ? "filled" : ""}`}
            onClick={() => setRating(star)}
            role="radio"
            aria-checked={rating === star}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setRating(star);
              }
            }}
          >
            {<AiFillStar />}
          </span>
        );
      })}
    </div>
  );
};

export default TutorDetailed;
