import { Link } from 'react-router-dom';
import './Tutors.css';
import tutors from './tutors.data';

const Tutors = () => {
  return (
    <section className="tutors-section">
      <div className="georgian-bg">
        {['ა', 'ბ', 'გ', 'დ', 'ე'].map((char, i) => (
          <span
            key={i}
            className="floating-char"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
            }}
          >
            {char}
          </span>
        ))}
      </div>

      <h1 className="section-title">რეპეტიტორები</h1>

      <div className="tutors-grid">
        {tutors.map((tutor) => (
          <article key={tutor.id} className="tutor-card">
            <img
              src={tutor.image}
              alt={`Portrait of ${tutor.name}`}
              className="tutor-photo"
              loading="lazy"
            />
            <h2 className="tutor-name">{tutor.name}</h2>
            <p className="tutor-tagline">{tutor.tagline}</p>
            <Link
              to={`/რეპეტიტორები/${tutor.id}`}
              className="profile-button"
              aria-label={`View profile of ${tutor.name}`}
            >
              დეტალები
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Tutors;
