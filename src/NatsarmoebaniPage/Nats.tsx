// src/NatsarmoebaniPage/Nats.tsx
import React, { useState } from 'react';
import "./Nats.css";
import { Link } from 'react-router-dom';

interface NatsProps {
  image: string;
  title: string;
}

const NatsBox: React.FC<NatsProps> = ({ image, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDivs = () => setIsOpen(prev => !prev);

  return (
    <div className="nats-box" onClick={toggleDivs}>
      <img src={image} alt={title} className="nats-box-image" />
      <h3 className="nats-box-title"><strong>{title}</strong></h3>
      {isOpen && (
        <div className="expanded-divs">
          <Link to={`/ნაწარმოებანი/გეგმა`}><div className="expanded-div">სასწავლო გეგმა</div></Link>
          <Link to={`/ნაწარმოებანი/პერიფრაზი`}><div className="expanded-div">პერიფრაზი</div></Link>
          <Link to={`/ნაწარმოებანი/აფორიზმები`}><div className='expanded-div'>აფორიზმები</div></Link>
        </div>
      )}
    </div>
  );
};

const DavitianiBox: React.FC = () => (
  <Link to="/მალედაემატება" className="nats-box">
    <img src="davitiani.jpeg" alt="დავითიანი" className="nats-box-image" />
    <h3 className="nats-box-title"><strong>დავითიანი</strong></h3>
  </Link>
);
const GamsakhrudiaBox: React.FC = () => (
  <Link to="/მალედაემატება" className="nats-box">
    <img src="didostati.jpg" alt="didostatismarjvena" className="nats-box-image" />
    <h3 className="nats-box-title"><strong>დიდოსტატის მარჯვენა</strong></h3>
  </Link>
);

const Nats: React.FC = () => (
  <>
    <div className="nats-h1-div"><h1 className="nats-h1">ნაწარმოებანი</h1></div>
    <div className="natsarmoebani-div">
      <NatsBox image="vefxistyaosani.png" title="ვეფხისტყაოსანი" />
    </div>
    <div className="natsarmoebani-div">
      <DavitianiBox />
    </div>
    <div className="natsarmoebani-div">
      <GamsakhrudiaBox />
    </div>
  </>
);

export default Nats;