import { useState } from "react";
import "./DasawyisiQuiz.css";

type Question = {
  question: string;
  options: string[];
  answer: string;
  recommendation: string;
};

const questions: Question[] = [
  {
    question: "ვინ არის აღწერილი როგორც ღმერთისგან მოვლენილი მმართველი პირველ თავში?",
    options: ["მზე", "მეფე", "ყველა მმართველი", "თამარი"],
    answer: "ყველა მმართველი",
    recommendation: "გაამახვილე ყურადღება მმართველების ღვთიურ წარმომავლობაზე და პოეტის ხედვაზე, რომ ისინი ღმერთის ნების შესრულებას ემსახურებიან.",
  },
  {
    question: "რა არის ვეფხისტყაოსნის პირველი თავის მთავარი თემატიკა?",
    options: [
      "ბუნების სილამაზე",
      "ღვთიური ძალის ქება და ადამიანის სიყვარული",
      "სამეფო საქმეები და პოლიტიკა",
      "ომი და თავგადასავალი",
    ],
    answer: "ღვთიური ძალის ქება და ადამიანის სიყვარული",
    recommendation: "პირველი თავი არის შესავალი, რომელიც აყალიბებს მთელ ტექსტის ღირებულებებს – სიყვარული, სილამაზე, სიბრძნე და ღვთიური კავშირი.",
  },
  {
    question: "რისი გადმოცემას ცდილობს პოეტი თამარის სილამაზის აღწერით?",
    options: [
      "დედოფლის ფიზიკური აღწერა",
      "თამარისადმი რომანტიკული გრძნობა",
      "იდეალური ლიდერის და ღვთიური არსების ერთიანობა",
      "ისტორიული ფაქტის აღწერა",
    ],
    answer: "იდეალური ლიდერის და ღვთიური არსების ერთიანობა",
    recommendation: "თამარის სილამაზე პოემაში მხოლოდ ესთეტიკური არაა – ის ასევე ღვთიური ძალისა და სიბრძნის სიმბოლოა.",
  },
  {
    question: "როგორ არის პოეტის დამოკიდებულება სიტყვიერ ხელოვნებასთან?",
    options: [
      "იგი სიტყვას ღვთიურ ძალად მიიჩნევს",
      "პოეზია მხოლოდ გართობის საშუალებაა",
      "სიტყვა მხოლოდ მეფეების ქებისთვის გამოიყენება",
      "სიტყვას განსაკუთრებული ძალა არ აქვს",
    ],
    answer: "იგი სიტყვას ღვთიურ ძალად მიიჩნევს",
    recommendation: "ვეფხისტყაოსნის დასაწყისში პოეტი გამოხატავს, რომ სიტყვა არის ძლიერობა, რომელიც ღვთიურ რეალობას გადმოსცემს.",
  },
  {
    question: "რას ითხოვს პოეტი ღმერთისგან პოემის დასაწყისში?",
    options: [
      "რომ აღწეროს ბრძოლის სცენა",
      "რომ მისცემს ღრმა აზრის გადმოცემის უნარს",
      "რომ დაიცვას მისი ოჯახი",
      "რომ გამოავლინოს მეფის ძალა",
    ],
    answer: "რომ მისცემს ღრმა აზრის გადმოცემის უნარს",
    recommendation: "პოეტი პირველ რიგში ღმერთს სთხოვს გონიერებას და ძალას სიტყვაში, რათა ზუსტად გადმოსცეს ღირებულებები.",
  },
  {
    question: "რა ადგილს იკავებს სიყვარული ვეფხისტყაოსნის პირველ თავში?",
    options: [
      "უბრალოდ რომანტიკული თემაა",
      "სიყვარული ხდება ღვთიურის გამტარი",
      "მხოლოდ პერსონაჟებს შორის არსებული გრძნობაა",
      "არანაირი მნიშვნელობა არ აქვს",
    ],
    answer: "სიყვარული ხდება ღვთიურის გამტარი",
    recommendation: "სიყვარული არ არის მხოლოდ გრძნობა – ის ვეფხისტყაოსანში ღვთიურ ღირებულებებთან კავშირს ქმნის.",
  },
  {
    question: "რა არის პოეტის აზრით ჭეშმარიტი პოეზიის მიზანი?",
    options: [
      "პოპულარობის მოპოვება",
      "გართობა და მსუბუქი თხრობა",
      "ღრმა აზრისა და ზნეობის გადმოცემა",
      "ისტორიის აღწერა",
    ],
    answer: "ღრმა აზრისა და ზნეობის გადმოცემა",
    recommendation: "შეეცადე ჩაწვდე პოეტის მიერ დასმულ სტანდარტებს – პოეზია უნდა იყოს სულიერი და ღირებული.",
  },
  {
    question: "როგორ აღიქვამს პოეტი საკუთარ როლს?",
    options: [
      "როგორც მეფის ქება-დიდების ავტორს",
      "როგორც ღვთიური ჭეშმარიტების გამტარს",
      "როგორც უბრალო მოთხრობას მთხრობელს",
      "როგორც სიყვარულზე მოთმინებული პირს",
    ],
    answer: "როგორც ღვთიური ჭეშმარიტების გამტარს",
    recommendation: "პოეტის პოზიცია საკუთარ თავთან მიმართებაში ღრმად რელიგიური და სულიერია.",
  },
  {
    question: "ვინ არის პოეტის მიერ ყველაზე მაღალ ფასეულობად წარმოდგენილი პიროვნება?",
    options: ["თამარი", "მეფე", "ტარიელი", "ღვთიური ანგელოზი"],
    answer: "თამარი",
    recommendation: "თამარი წარმოდგენილია როგორც ღვთიური და იდეალური არსება – შეამჩნიე პოეტის ენთუზიაზმი მის მიმართ.",
  },
  {
    question: "რისი გამოხატულებაა მზე ტექსტში?",
    options: ["ბუნების ნაწილი", "ღმერთის სინათლე", "თამარის სილამაზის სიმბოლო", "დროს აღმნიშვნელი ელემენტი"],
    answer: "თამარის სილამაზის სიმბოლო",
    recommendation: "პოეტი იყენებს მზეს როგორც მეტაფორას თამარის სიდიადისა და ღვთიურობის გამოსახატავად.",
  },
];

const DasawyisiQuiz = () => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleChange = (questionIndex: number, option: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: option,
    }));
  };

  const handleSubmit = () => {
    let totalScore = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.answer) {
        totalScore++;
      }
    });
    setScore(totalScore);
    setSubmitted(true);
  };

  const handleRetake = () => {
    setAnswers({});
    setScore(0);
    setSubmitted(false);
  };

  const renderResult = () => (
    <div className="result">
      <div className="score">
        <h2>თქვენი შედეგი: {score} / {questions.length}</h2>
      </div>
      {questions.map((q, index) => {
        if (answers[index] !== q.answer) {
          return (
            <div key={index} className="recommendation">
              <p><strong>რეკომენდაცია კითხვაზე {index + 1}:</strong></p>
              <p>{q.recommendation}</p>
              <p><strong>სწორი პასუხი: </strong>{q.answer}</p>
            </div>
          );
        } else {
          return (
            <div key={index} className="correct-answer">
              <p><strong>კითხვა {index + 1} სწორია!</strong></p>
            </div>
          );
        }
      })}
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
                <div key={i} className="option">
                  <label>
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
                </div>
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

export default DasawyisiQuiz;
