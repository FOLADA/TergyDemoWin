import React, { useState } from "react";
import "./StudyPlan.css";

const ranges = [
  { label: "1 კვირა", min: 7, max: 14 },
  { label: "2 კვირა", min: 14, max: 21 },
  { label: "1 თვე", min: 21, max: 31 },
  { label: "2 თვე", min: 31, max: 62 },
  { label: "3 თვე", min: 62, max: 93 },
  { label: "6 თვე", min: 93, max: 186 },
  { label: "1 წელი", min: 186, max: Infinity }
];

const studyPlanContent = {
  "1 კვირა": "🔹 დღეში 10-12 თავი უნდა წაიკითხოთ.\n🔹 ძირითადი პერსონაჟების ხასიათი და სიუჟეტი ჩაიწერე შენთვის.\n🔹 კვირის ბოლოს გააკეთეთ ანალიზი და უპასუხეთ მთავარ კითხვებს, რომელიც ტესტის გვერდზეა მოცემული.",
  "2 კვირა": "🔹 დღეში 5-6 თავი უნდა წაიკითხოთ.\n🔹 პარალელურად გააკეთეთ ტესტები და ჩაიწერეთ მნიშვნელოვანი ციტატები, რომელიც მოცემულია ციტატების გვერდზე.\n🔹 ერთი დღე დაუთმეთ პოემის სტრუქტურისა და მეტაფორების განხილვას, რაშიც ჩვენი თამაში დაგეხმარებათ.\n",
  "1 თვე": "🔹 დღეში 2-3 თავი უნდა წაიკითხოთ და განიხილოთ.\n🔹 კვირაში ერთხელ გადახედეთ პერსონაჟების ცვლილებებს.\n🔹 ჩაწერეთ მნიშვნელოვანი ტერმინები და მათზე გააკეთე ჩანაწერები.\n🔹 თვის ბოლოს შეადგინეთ მოკლე ანალიზი, თუ როგორ აისახება ტექსტში ეპოქა და მორალი.",
  "2 თვე": "🔹 კვირაში 10-12 თავი წაიკითხეთ, რათა ტექსტი უფრო ღრმად გაანალიზოთ.\n🔹 თითოეულ ეპიზოდზე დაფიქრდით და დაწერეთ თქვენი აზრი.\n🔹 თვის ბოლოს შეადგინეთ პერსონაჟების ურთიერთობების სქემა.",
  "3 თვე": "🔹 კვირაში 7-8 თავი წაიკითხეთ, რათა ტექსტი თანდათან გაითავისოთ.\n🔹 თითოეული პერსონაჟის მოტივაციაზე იმუშავეთ.\n🔹 გააანალიზე ალეგორიები და სიმბოლოები.\n🔹 ბოლო კვირას შეადგინე ტექსტის თემა-შინაარსობრივი მიმოხილვა.",
  "6 თვე": "🔹 კვირაში 4-5 თავი წაიკითხეთ და სრულყოფილად გაანალიზეთ.\n🔹 ყოველი თვის ბოლოს მოკლე შეჯამება გააკეთე.\n🔹 შეისწავლე ისტორიული და კულტურული კონტექსტი.\n🔹 ტექსტის დასრულების შემდეგ შეადგინეთ თქვენი პერსონალური შეფასება.",
  "1 წელი": "🔹 თვეში 3-4 თავი წაიკითხეთ, რათა სრულყოფილად გაანალიზოთ.\n🔹 იპოვეთ პარალელები სხვადასხვა ლიტერატურულ ნაწარმოებებთან.\n🔹 წერეთ ესეები პერსონაჟებზე, თემებზე და ფილოსოფიურ საკითხებზე, რომელიც ჩვენს ესეისტ AI-სთან შეიძლება დახვეწოთ."
};

const StudyPlan: React.FC = () => {
  const [customDays, setCustomDays] = useState<number | "">("");
  const [message, setMessage] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setCustomDays(value === "" ? "" : parseInt(value, 10));
  };

  const handleSubmit = () => {
    if (customDays === "" || customDays <= 0) {
      setMessage("გთხოვ, ჩაწერე ვალიდური დღეების რაოდენობა.");
      return;
    }

    if (customDays < 7) {
      setMessage(
        `⚠️ დღეების რაოდენობა (${customDays}) კვირაზე ნაკლებია, რაც აღწერს არასაკმარის დროს ტექსტის ადეკვატურად გასაანალიზებლად. გთავაზობთ ერთკვირიან გეგმას:

${studyPlanContent["1 კვირა"]}`
      );
      return;
    }

    const range = ranges.find(r => customDays >= r.min && customDays < r.max);
    if (range) {
      setMessage(
        `თქვენი ვადაა ${customDays} დღე ამიტომაც:

${studyPlanContent[range.label as keyof typeof studyPlanContent]}`
      );
    } else {
      setMessage("სამწუხაროდ, ვერ მოიძებნა გეგმები მითითებული ვადისათვის.");
    }
  };

  return (
    <div className="study-plan-container">
      <div className="study-plan-text-div">
        <h1 className="study-plan-title">პერსონალიზირებული სასწავლო გეგმა</h1>
        <p className="study-plan-description">
          ჩაიწერეთ სასურველი სწავლის დღეების რაოდენობა და დააჭირეთ ღილაკს - "გაგზავნა".
        </p>

        <div className="input-wrapper">
          <input
            type="text"
            placeholder="დღეების რაოდენობა"
            value={customDays}
            onChange={handleInputChange}
            className="study-plan-input"
          />
          <button onClick={handleSubmit} className="study-plan-button">
            გაგზავნა
          </button>
        </div>

        {message && (
          <div className="study-plan-content">
            <pre>{message}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyPlan;
