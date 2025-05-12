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
    question: "რა ნახეს მეფე როსტევანმა და ავთანდილმა ნადირობის შემდეგ?",
    options: ["მტირალი ბავშვი", "უცხო მოყმე", "დაჭრილი ცხოველი", "მიტოვებული სახლი"],
    answer: "უცხო მოყმე",
    recommendation: "ტექსტში ნათქვამია, რომ 'ნადირობის შემდეგ მეფე როსტევანმა და ავთანდილმა უცხო მოყმე ნახეს.'",
  },
  {
    question: "როგორ გამოიყურებოდა უცნობი მოყმე?",
    options: [
      "ლომის მსგავსი, დიდებული",
      "სუსტი, ავადმყოფი",
      "შეშინებული, ატირებული",
      "უბრალო, ჩვეულებრივი",
    ],
    answer: "ლომის მსგავსი, დიდებული",
    recommendation: "ტექსტი აღწერს უცნობს, როგორც 'ლომის მსგავსი ჭაბუკი დიდებულად გამოიყურებოდა.'",
  },
  {
    question: "რა ეცვა უცნობს?",
    options: ["აბჯარი", "ვეფხვის ტყავის სამოსი", "სამეფო მანტია", "გლეხური ტანსაცმელი"],
    answer: "ვეფხვის ტყავის სამოსი",
    recommendation: "ტექსტში ნათქვამია, რომ 'უცნობ რაინდს ვეფხვის ტყავის სამოსი ეცვა, თავზედაც ვეფხვის ტყავის ქუდი ეხურა.'",
  },
  {
    question: "რა ეკავა უცნობს ხელში?",
    options: ["ხმალი", "მშვილდი", "მათრახი", "ფარი"],
    answer: "მათრახი",
    recommendation: "ტექსტში პირდაპირ არის მითითებული, რომ უცნობს 'ხელთ მკლავზე მსხვილი მათრახი ეჭირა.'",
  },
  {
    question: "რატომ ვერ შეჰბედა მსახური უცნობთან მიახლოებას?",
    options: [
      "უცნობი ძალიან ბოროტი ჩანდა",
      "უცნობი ძალიან დაკავებული იყო",
      "უცნობი ისე ტიროდა, არაფერი ესმოდა",
      "უცნობი ძალიან ძლიერი იყო",
    ],
    answer: "უცნობი ისე ტიროდა, არაფერი ესმოდა",
    recommendation: "ტექსტში წერია, რომ მსახური ვერ მიუახლოვდა, 'რადგანაც ვეფხისტყაოსანი ჭაბუკი ისე ტიროდა, არაფერი ესმოდა.'",
  },
  {
    question: "რა უბრძანა მეფემ თორმეტ მონას?",
    options: [
      "უცნობი მოეკლათ",
      "უცნობი შეეპყროთ და მისთვის მოეყვანათ",
      "უცნობთან დაელაპარაკათ",
      "უცნობისთვის საჩუქარი მიეტანათ",
    ],
    answer: "უცნობი შეეპყროთ და მისთვის მოეყვანათ",
    recommendation: "მეფემ მონებს უბრძანა, 'უცნობი მასთან შეპყრობილი მოეგვარათ.'",
  },
  {
    question: "როგორ მოიქცა უცნობი, როდესაც მეფის მონები მიუახლოვდნენ?",
    options: [
      "დაემორჩილა და წავიდა მათთან ერთად",
      "შეეშინდა და გაიქცა",
      "შეებრძოლა და მოიგერია ისინი",
      "ატირდა და სთხოვა, რომ არ შეხებოდნენ",
    ],
    answer: "შეებრძოლა და მოიგერია ისინი",
    recommendation: "ტექსტში აღწერილია, რომ უცნობმა 'ლომივით მოიგერია მეფის ამალა.'",
  },
  {
    question: "როგორ გაექცა უცნობი მეფეს და მის ლაშქარს?",
    options: ["ცხენით გაქრა", "ფეხით გაიქცა", "ხეში დაიმალა", "ციხესიმაგრეში შევიდა"],
    answer: "ცხენით გაქრა",
    recommendation: "ტექსტში ნათქვამია, რომ უცნობმა 'მერანს მათრახი გადაჰკრა და ისე გაქრა, კვალსაც ვერვინ მიაგნო.'",
  },
  {
    question: "როგორ მოიქცა მეფე როსტევანი უცნობის გაქცევის შემდეგ?",
    options: [
      "დაედევნა",
      "დაივიწყა",
      "დაღონდა და სასახლეში დაბრუნდა",
      "ბრძანა, რომ ყველა მოეკლათ",
    ],
    answer: "დაღონდა და სასახლეში დაბრუნდა",
    recommendation: "მეფე 'დაღონდა, იფიქრა, ღმერთს ჩემი ლხენა მობეზრდაო და სასახლეში სევდიანი დაბრუნდა.'",
  },
  {
    question: "რა ურჩია თინათინმა მამას?",
    options: [
      "დაევიწყებინა უცნობი",
      "გაეგზავნა ხალხი მის მოსაძებნად",
      "დაესაჯა ყველა მონა",
      "დაეწყო ომი",
    ],
    answer: "გაეგზავნა ხალხი მის მოსაძებნად",
    recommendation: "თინათინმა ურჩია მეფეს, რომ 'გაარკვიე, ვინ იყო ის უცნობი.'",
  },
];

const IVtavi = (): JSX.Element => {
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
        <div key={index} className={answers[index] === q.answer ? "correct-answer" : "recommendation"}>
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

export default IVtavi;
