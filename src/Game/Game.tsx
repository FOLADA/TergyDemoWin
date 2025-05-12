import React, { useEffect, useState } from 'react';
import QuestionCard from './QuestionCard';
import AnswerButtons from './AnswerButtons';
import ProgressBar from './ProgressBar';
import GameOver from './GameOver';
import './Game.css';

const questions = [
  { q: 'ვინ თქვა: "რა ხანია, შენთვის ვგრძნობ, ჩემში ჩუმ ბნელ გზას..."', left: 'გალაკტიონი', right: 'მაკა სეფაშვილი', correct: 'left' },
  { q: 'რის სიმბოლოა ნესტანი ვეფხისტყაოსანში?', left: 'სულიერი სიწმინდის', right: 'გონიერების', correct: 'left' },
  { q: 'ვინ ამბობს: "მზე ჩამობნელდა გულში და დღე მორჩა..."', left: 'გალაკტიონი', right: 'აკაკი წერეთელი', correct: 'left' },
  { q: 'ვინ არის პერსონაჟი, რომელმაც "მტერი შეიწყალა და სამეგობროდ მიიღო"?', left: 'ალუდა ქეთელაური', right: 'დათა თუთაშხია', correct: 'left' },
  { q: 'რომელი ნაწარმოებია პიროვნულ ღირსებასა და ზნეობრივ არჩევანზე?', left: 'სტუმარ-მასპინძელი', right: 'შვილმკვდარი', correct: 'left' },
  { q: 'რას ემსახურება ავთანდილის მრავალჯერადი ტანსაცმლის ცვლა?', left: 'სხეულის კომფორტს', right: 'შინაგანი მდგომარეობის გამოხატვას', correct: 'right' },
  { q: 'ვინ წერს ღრმად სიმბოლისტურ სტრიქონს: "სიტყვებს ვერ იტევს დრო"?', left: 'გალაკტიონი', right: 'გრიგოლ რობაქიძე', correct: 'right' },
  { q: 'რა ამოძრავებს ლუკა მაზეცს "მკლავ მტერს, მაგრამ არ გიხარია"?', left: 'ძმისშურისძიება', right: 'შინაგანი კონფლიქტი', correct: 'right' },
  { q: 'რომელი პოეტი ატარებს პესიმისტურ-მისტიკურ განწყობას ლექსებში?', left: 'გალაკტიონი', right: 'შოთა რუსთაველი', correct: 'left' },
  { q: 'ვინ არის პერსონაჟი, ვინც ამბობს: "სიმშვიდე არ ვიცი, მაგრამ ვიბრძვი"', left: 'დათა თუთაშხია', right: 'ზვიადი (სხვა ნაპირი)', correct: 'right' },
  { q: 'რა გამოხატავს “დავითიანი” ილია ჭავჭავაძისთვის?', left: 'ეროვნული იდენტობის ძეგლს', right: 'საერთაშორისო ლიტერატურას', correct: 'left' },
  { q: 'რა არის ვეფხისტყაოსანში ტარიელის "შავი ფერების" მთავარი სიმბოლიკა?', left: 'დამარცხების', right: 'სევდისა და ვნებების', correct: 'right' },
  { q: 'რომელი პერსონაჟი საუბრობს ხალხზე როგორც სიმართლის მფლობელზე?', left: 'დათა თუთაშხია', right: 'მირიან ხევსური', correct: 'left' },
  { q: 'რას გულისხმობს გრიგოლ რობაქიძე ღრუბელით დაფარულ მთაში?', left: 'სიმბოლურ დაბნეულობასა და გარდატეხას', right: 'ლამაზი ბუნების აღწერას', correct: 'left' },
  { q: 'რომელი ნაწარმოების პერსონაჟს აქვს შინაგანი ბრძოლა რწმენასა და ძალაუფლებას შორის?', left: 'სხვა ნაპირი', right: 'მგოსანი', correct: 'left' },
  { q: 'ვინ ამბობს: "ვბრძოლობ შიგნით და გარეთაც..."', left: 'ტარიელი', right: 'დათა თუთაშხია', correct: 'right' },
  { q: 'ვინ შეეწინააღმდეგა ტრადიციულ წესს და "მტერს" ადამიანი დაუძახა?', left: 'ალუდა ქეთელაური', right: 'ავთანდილი', correct: 'left' },
  { q: 'რომელ ნაწარმოებშია წამოჭრილი თემები: პატრიოტიზმი, ძალადობა და თვითდამკვიდრება?', left: 'დავით კლდიაშვილი – ოთარაანთ ქვრივი', right: 'მიხეილ ჯავახიშვილი – ჯაყოს ხიზნები', correct: 'right' },
  { q: 'ვინ ამბობს: "ღამეა, და სიჩუმეა ბნელში დაფარული..."', left: 'გალაკტიონი', right: 'აკაკი წერეთელი', correct: 'left' },
  { q: 'ვინ წერს შიშის, ტკივილისა და სიჩუმის შესახებ სიმბოლურად?', left: 'გალაკტიონი', right: 'აკაკი წერეთელი', correct: 'left' },
  { q: 'ვინ არის სიმბოლო სინდისის იმ გმირში, ვინც სიკვდილის წინაც სიმართლეს ამბობს?', left: 'დათა თუთაშხია', right: 'მირიან ხევსური', correct: 'right' },
  { q: 'რომელ ნაწარმოებში იკვეთება მოღალატე ძმის ხაზი?', left: 'ჯაყოს ხიზნები', right: 'დათა თუთაშხია', correct: 'right' },
  { q: 'ვინ წერს იმედისა და უიმედობის საზღვარზე?', left: 'გალაკტიონ ტაბიძე', right: 'შიო არაგვისპირელი', correct: 'left' },
  { q: 'რომელ ნაწარმოებში არის სიყვარული უფრო ტრაგიკული, ვიდრე გამარჯვებული?', left: 'ვეფხისტყაოსანი', right: 'სხვა ნაპირი', correct: 'right' },
  { q: 'ვინ ამბობს: "მგონი არ არის ცხოვრება მარტო ბრძოლა..."', left: 'დათა თუთაშხია', right: 'ტარიელი', correct: 'left' },
  { q: 'რის გამოხატულებაა ვეფხისტყაოსნის ლომების ეპიზოდი?', left: 'ფიზიკური ძალის', right: 'მეგობრობისა და თავდადების', correct: 'right' },
  { q: 'რა ამოძრავებს ვაჟა-ფშაველას გმირებს ბუნებასთან მიმართებაში?', left: 'ძალის დემონსტრირება', right: 'ჰარმონიის ძიება', correct: 'right' },
  { q: 'რა ამოძრავებს მირიან ხევსურს – შურისძიება თუ სიმართლე?', left: 'შურისძიება', right: 'სიმართლის ძიება', correct: 'right' },
  { q: 'რომელი ნაწარმოებია ეგზისტენციალურ განცდებზე?', left: 'სხვა ნაპირი', right: 'ვეფხისტყაოსანი', correct: 'left' },
  { q: 'ვინ წერს "დარდს ვერ ვიტანდი, მაგრამ ახლა დარდი ვარ თვითონ"?', left: 'გალაკტიონი', right: 'გრიგოლ რობაქიძე', correct: 'left' }
];

const QUESTION_TIME = 7; // seconds

const Game: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(
    parseInt(localStorage.getItem('highScore') || '0', 10)
  );
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const [showResult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    if (showResult) return;

    if (timeLeft === 0 && !isAnswered) {
      handleAnswer(null);
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 0) return prev - 1;
        clearInterval(timer);
        return 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isAnswered, showResult]);

  const handleAnswer = (selected: 'left' | 'right' | null) => {
    if (isAnswered) return;
    setIsAnswered(true);

    const currentQuestion = questions[currentIndex];
    const isCorrect = selected === currentQuestion.correct;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      const nextIndex = currentIndex + 1;
      if (nextIndex < questions.length) {
        setCurrentIndex(nextIndex);
        setTimeLeft(QUESTION_TIME);
        setIsAnswered(false);
      } else {
        setShowResult(true);
        if (score > highScore) {
          setHighScore(score);
          localStorage.setItem('highScore', score.toString());
        }
      }
    }, 1000);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setTimeLeft(QUESTION_TIME);
    setShowResult(false);
    setIsAnswered(false);
  };

  if (showResult) {
    return (
      <GameOver
        score={score}
        totalQuestions={questions.length}
        highScore={highScore}
        onRestart={handleRestart}
      />
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="game-container">
      <ProgressBar currentQuestion={currentIndex + 1} totalQuestions={questions.length} />
      <div className="timer">დრო დარჩა: {timeLeft} წ</div>
      <QuestionCard question={currentQuestion.q} />
      <AnswerButtons
        leftOption={currentQuestion.left}
        rightOption={currentQuestion.right}
        onSelect={(option) => handleAnswer(option)}
        disabled={isAnswered}
        />
    </div>
  );
};

export default Game;
