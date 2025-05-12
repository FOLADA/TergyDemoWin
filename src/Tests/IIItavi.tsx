import { useState } from "react";
import "./DasawyisiQuiz.css";

interface Question {
  question: string;
  options: string[];
  answer: string;
  recommendation: string;
}

const questions: Question[] = [
  {
    question: "როგორ იყო აღწერილი ავთანდილი ტექსტში, როდესაც ის სანადიროდ მიდიოდა?",
    options: [
      "ჭუჭყიანი და მოუწესრიგებელი",
      "თეთრ ცხენზე ამხედრებული, ოქრომკედით მოქარგული წითელ-ძოწისფერი სამოსით",
      "შეშინებული და ნერვიული",
      "მარტო და სევდიანი",
    ],
    answer: "თეთრ ცხენზე ამხედრებული, ოქრომკედით მოქარგული წითელ-ძოწისფერი სამოსით",
    recommendation:
      "ტექსტში ავთანდილის გამოჩენა დეტალურად არის აღწერილი.  ყურადღება მიაქციე მის ტანსაცმელსა და ცხენს.",
  },
  {
    question: "ვინ იღებდა მონაწილეობას ნადირობაში ავთანდილთან ერთად?",
    options: ["მეფე როსტევანი", "დედოფალი", "ვაზირები", "მონები"],
    answer: "მეფე როსტევანი",
    recommendation:
      "ტექსტში პირდაპირ არის ნათქვამი, რომ მეფე როსტევანიც სანადიროდ გამოვიდა ავთანდილთან ერთად.",
  },
  {
    question: "რა ხდებოდა ნადირობის დაწყებამდე?",
    options: [
      "მეფე და ავთანდილი სვამდნენ",
      "მეფე და ავთანდილი ერთმანეთს სროლაში ეჯიბრებოდნენ",
      "მონები ცეკვავდნენ",
      "მარეკები საჭმელს ამზადებდნენ",
    ],
    answer: "მეფე და ავთანდილი ერთმანეთს სროლაში ეჯიბრებოდნენ",
    recommendation:
      "ტექსტში აღწერილია, რომ ნადირობის დაწყებამდე მეფე და ავთანდილი მშვილდოსნობაში ეჯიბრებოდნენ ერთმანეთს.",
  },
  {
    question: "რას აკეთებდნენ მონები ნადირობის დროს?",
    options: [
      "ისინი ნადირს დასდევდნენ",
      "ისინი ისრებს ისროდნენ",
      "ისინი მშვილდებს აწვდიდნენ და დახოცილ ნადირს ითვლიდნენ",
      "ისინი საჭმელს ამზადებდნენ",
    ],
    answer: "ისინი მშვილდებს აწვდიდნენ და დახოცილ ნადირს ითვლიდნენ",
    recommendation:
      "ტექსტში ნათქვამია, რომ მეფემ მონებს უბრძანა, მშვილდი და ისარი მოეწოდებინათ და დახოცილი ნადირი დაეთვლათ.",
  },
  {
    question: "როგორ აღწერს ტექსტი ნადირობის პროცესს?",
    options: [
      "ნადირობა იყო მშვიდი და წყნარი",
      "მეფე და ავთანდილი ცხენებით დაედევნებოდნენ ნადირს და ხოცავდნენ",
      "მონადირეები ისხდნენ და ელოდებოდნენ ნადირის გამოჩენას",
      "მარეკები ცეკვავდნენ და მღეროდნენ",
    ],
    answer: "მეფე და ავთანდილი ცხენებით დაედევნებოდნენ ნადირს და ხოცავდნენ",
    recommendation:
      "ტექსტში აღწერილია დინამიური და აქტიური ნადირობა, სადაც მეფე და ავთანდილი ცხენებით დაედევნებოდნენ ნადირს.",
  },
  {
    question: "რა მოხდა ნადირობის შემდეგ?",
    options: [
      "მეფე და ავთანდილი წავიდნენ სასახლეში",
      "მეფე და ავთანდილი მოსასვენებლად წყლის პირას ჩამოსხდნენ",
      "მონები ატირდნენ",
      "მარეკები გაიქცნენ",
    ],
    answer: "მეფე და ავთანდილი მოსასვენებლად წყლის პირას ჩამოსხდნენ",
    recommendation:
      "ნადირობის შემდეგ მეფე და ავთანდილი შეჯიბრის შედეგების გასაგებად და დასასვენებლად წყლის პირას დასხდნენ.",
  },
  {
    question: "რა უთხრეს მონებმა მეფეს ნადირობის შედეგებზე?",
    options: [
      "ავთანდილმა მეფეზე მეტი ნადირი მოკლა",
      "მეფემ ავთანდილზე მეტი ნადირი მოკლა",
      "ორივემ თანაბარი რაოდენობის ნადირი მოკლა",
      "არავის არ მოუკლავს ნადირი",
    ],
    answer: "ავთანდილმა მეფეზე მეტი ნადირი მოკლა",
    recommendation:
      "მონების სიტყვებიდან ჩანს, რომ ავთანდილის ნასროლი ისრები უფრო ეფექტური იყო და მან მეფეზე მეტი ნადირი მოკლა.",
  },
  {
    question: "როგორ იგრძნო თავი მეფე როსტევანმა, როდესაც ნადირობის შედეგები გაიგო?",
    options: ["გაბრაზდა", "მოწყენილი დარჩა", "ძალიან გაუხარდა", "ატირდა"],
    answer: "ძალიან გაუხარდა",
    recommendation:
      "ტექსტში ნათქვამია, რომ მეფეს 'ძლიერ გაუხარდა' და 'მოწყენა და ნაღველი გაუქრა', როდესაც მან შედეგები შეიტყო.",
  },
  {
    question: "რატომ გაუხარდა მეფე როსტევანს?",
    options: [
      "როდესაც ბევრი ნადირი მოკლა",
      "რადგან ავთანდილმა მეფეზე მეტი ნადირი მოკლა",
      "როდესაც ავთანდილი მისი გაზრდილი იყო და მისი წარმატება ახარებდა",
      "რადგან კარგი ამინდი იყო",
    ],
    answer: "რადგან ავთანდილი მისი გაზრდილი იყო და მისი წარმატება ახარებდა",
    recommendation:
      "ტექსტში ხაზგასმულია, რომ მეფეს 'თავისი გაზრდილის სიკეთე გულს უნათებდა'.  ეს ხსნის, თუ რატომ გაუხარდა მას ავთანდილის წარმატება.",
  }
];

const IIItavi = (): JSX.Element => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const handleChange = (questionIndex: number, option: string): void => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: option,
    }));
  };

  const handleSubmit = (): void => {
    let totalScore = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.answer) totalScore++;
    });
    setScore(totalScore);
    setSubmitted(true);
  };

  const handleRetake = (): void => {
    setAnswers({});
    setScore(0);
    setSubmitted(false);
  };

  const renderResult = () => (
    <div className="result">
      <div className="score">
        <h2>თქვენი შედეგი: {score} / {questions.length}</h2>
      </div>
      {questions.map((q, index) => (
        <div
          key={index}
          className={answers[index] === q.answer ? "correct-answer" : "recommendation"}
        >
          {answers[index] === q.answer ? (
            <p><strong>კითხვა {index + 1} სწორია!</strong></p>
          ) : (
            <>
              <p><strong>რეკომენდაცია კითხვაზე {index + 1}:</strong></p>
              <p>{q.recommendation}</p>
              <p><strong>სწორი პასუხი: </strong>{q.answer}</p>
            </>
          )}
        </div>
      ))}
      <button className="retake-button" onClick={handleRetake}>
        თავიდან შესრულება
      </button>
    </div>
  );

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">ტექსტის ანალიზის ქვიზი</h1>
      <div className="questions-container">
        {questions.map((q, index) => (
          <div key={index} className="question">
            <p>{q.question}</p>
            <div className="options">
              {q.options.map((option, i) => (
                <label key={i} className="option">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={answers[index] === option}
                    onChange={() => handleChange(index, option)}
                    disabled={submitted}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      {!submitted ? (
        <button className="submit-button" onClick={handleSubmit}>
          დავასრულე
        </button>
      ) : (
        renderResult()
      )}
    </div>
  );
};

export default IIItavi;
