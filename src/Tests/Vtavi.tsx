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
    question: "რას აკეთებდა ავთანდილი თავის ოთახში, როდესაც მასთან თინათინის მონა მივიდა?",
    options: [
      "კითხულობდა",
      "მღეროდა და უკრავდა ჩანგზე",
      "ცეკვავდა",
      "ეძინა",
    ],
    answer: "მღეროდა და უკრავდა ჩანგზე",
    recommendation:
      "ტექსტში ნათქვამია, რომ ავთანდილი 'ხელში ჩანგი ეჭირა და მღეროდა.'",
  },
  {
    question: "რა ამცნო ავთანდილს თინათინის მონამ?",
    options: [
      "დედოფალი გიბარებს",
      "მეფე გიბარებს",
      "დღესასწაულია",
      "ომი დაიწყო",
    ],
    answer: "მეფე გიბარებს",
    recommendation:
      "მონამ მოახსენა, რომ 'მეფე იბარებდა.'",
  },
  {
    question: "როგორ გამოიყურებოდა მეფე, როდესაც ავთანდილი მასთან მივიდა?",
    options: [
      "მხიარული",
      "მოწყენილი",
      "გაბრაზებული",
      "ავადმყოფი",
    ],
    answer: "მოწყენილი",
    recommendation:
      "ტექსტში წერია, რომ მეფე 'მოწყენილი დაუხვდა.'",
  },
  {
    question: "რა გაახსენა მეფემ ავთანდილს?",
    options: [
      "უცხო მოყმის ამბავი",
      "ნადირობა",
      "დღესასწაული",
      "მისი ქორწილი",
    ],
    answer: "უცხო მოყმის ამბავი",
    recommendation:
      "მეფემ გაახსენა 'უცხო მოყმემ მათ ყმები როგორ დაუხოცა.'",
  },
  {
    question: "რა დაავალა თინათინმა ავთანდილს?",
    options: [
      "უცხო მოყმის მოძებნა",
      "ომში წასვლა",
      "სხვა ქვეყანაში წასვლა",
      "მეფის დახმარება",
    ],
    answer: "უცხო მოყმის მოძებნა",
    recommendation:
      "თინათინმა ავთანდილს დაავალა 'ვეფხისტყაოსანი ჭაბუკის მოძებნა.'",
  },
  {
    question: "რა აღიარა თინათინმა ავთანდილთან?",
    options: [
      "რომ უყვარდა",
      "რომ ეშინოდა",
      "რომ სძულდა",
      "რომ ენდობოდა",
    ],
    answer: "რომ უყვარდა",
    recommendation:
      "თინათინმა აღიარა, რომ 'შენი სიყვარული გულს ჩამვარდნია.'",
  },
  {
    question: "რამდენი წელი მისცა თინათინმა ავთანდილს უცნობი მოყმის მოსაძებნად?",
    options: ["ერთი", "ორი", "სამი", "ოთხი"],
    answer: "სამი",
    recommendation:
      "თინათინმა თქვა: 'სამი წელი ძებნე ის ყრმა.'",
  },
  {
    question: "რა პირობა დადო თინათინმა?",
    options: [
      "რომ გათხოვდებოდა",
      "რომ არ გათხოვდებოდა",
      "რომ დაივიწყებდა ავთანდილს",
      "რომ წავიდოდა მასთან ერთად",
    ],
    answer: "რომ არ გათხოვდებოდა",
    recommendation:
      "თინათინმა დაიფიცა, რომ 'სამ წელს დაგიცდი, სხვას ქმრად არვის ვინდომებ.'",
  },
  {
    question: "რა შეუთვალა ავთანდილმა მეფე როსტევანს, სანამ წავიდოდა?",
    options: [
      "რომ ომი იწყებოდა",
      "რომ მიდიოდა ქვეყნის დასათვალიერებლად",
      "რომ ავად იყო",
      "რომ ბრუნდებოდა",
    ],
    answer: "რომ მიდიოდა ქვეყნის დასათვალიერებლად",
    recommendation:
      "ავთანდილმა შეუთვალა, რომ მიდიოდა 'სახელმწიფო საზღვრებს მოვივლი, ჩვენს ამბავს ყველას ვამცნობ.'",
  },
  {
    question: "ვინ დარჩა ავთანდილის ნაცვლად სამეფოს სამართავად?",
    options: ["მეფე როსტევანი", "თინათინი", "შერმადინი", "სოგრატი"],
    answer: "შერმადინი",
    recommendation:
      "ავთანდილმა შერმადინს დაავალა 'სამი წელი ემართა... მათი სამეფო.'",
  },
];

const Vtavi = (): JSX.Element => {
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
      <button className="retake-button" onClick={handleRetake}>თავიდან შესრულება</button>
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
        <button className="submit-button" onClick={handleSubmit}>დავასრულე</button>
      ) : (
        renderResult()
      )}
    </div>
  );
};

export default Vtavi;
