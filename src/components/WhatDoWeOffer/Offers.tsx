import React from 'react';
import './Offers.css';

interface InfoBoxProps {
  image: string;
  title: string;
  paragraph: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ image, title, paragraph }) => (
  <div className="info-box">
    <img src={image} alt={title} className="info-box-image" />
    <h3 className="info-box-title"><strong>{title}</strong></h3>
    <p className="info-box-paragraph"><strong>{paragraph}</strong></p>
  </div>
);

const WhatWeOffer: React.FC = () => {
  return (
    <section className="offers-section">
      <h1 className='offers-h1'>რას გთავაზობთ?</h1>
      <div className="info-container">
        <div className="info-wrapper">
          <InfoBox 
            image="book.jpg"
            title="ნაწარმოებანი" 
            paragraph="პერიფრაზირებული, ვიზიუალური და ვერბალიზებული ნაწარმოებები, წაკითხულის გააზრების ტესტებით, ციტატებითა და სწავლის გეგმით." 
          />
          <InfoBox 
            image="symposium.png" 
            title="სიმპოზიუმი" 
            paragraph="სივრცე, სადაც შესაძლებლობა გექნება დასვა კითხვები, მოისმინო აზრები, იბაასო და განივითარო რიტორიკა" 
          />
          <InfoBox 
            image="essayst.webp" 
            title="ესეისტი AI" 
            paragraph="ესეისტი AI, რომელიც შეგიმოწმებს თემას და მოგცემს საუკეთესო რჩევებს, რათა თვით-კრიტიკისა და თავდაჯერებულობის უმაღლეს დონეს მიაღწიო" 
          />
          <InfoBox 
            image="console.png" 
            title="თამაში" 
            paragraph="ზოგადი ლიტერატურული თამაში, რეიტინგითა და რეიტინგზე დამოკიდებული პრიზებით" 
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;