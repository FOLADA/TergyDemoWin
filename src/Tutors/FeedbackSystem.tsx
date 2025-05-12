import React, { useState, FormEvent, ChangeEvent } from 'react';
import { FiSend } from 'react-icons/fi';
import './FeedbackSystem.css';

const FeedbackForm: React.FC = () => {
  const [rating, setRating] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleRatingChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRating(e.target.value);
  };

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  if (submitted) {
    return (
      <div className="feedback-thanks">
        <h4>მადლობა! თქვენი უკუკავშირი გაზავნილია.</h4>
      </div>
    );
  }

  return (
    <form
      className="feedback-section"
      onSubmit={handleSubmit}
      aria-labelledby="feedback-heading"
    >
      <h3 id="feedback-heading">გთხოვთ დატოვოთ შეფასება</h3>

      <label htmlFor="rating">შეფასება</label>
      <select
        id="rating"
        value={rating}
        onChange={handleRatingChange}
        required
        aria-required="true"
      >
        <option value="" disabled>აირჩიეთ</option>
        <option value="1">1 – სუსტი</option>
        <option value="2">2 – საშუალო</option>
        <option value="3">3 – კარგი</option>
        <option value="4">4 – ძალიან კარგი</option>
        <option value="5">5 – შესანიშნავი</option>
      </select>

      <label htmlFor="comment">კომენტარი</label>
      <textarea
        id="comment"
        rows={4}
        placeholder="თქვენი აზრი..."
        value={comment}
        onChange={handleCommentChange}
        required
        aria-required="true"
      />

      <button type="submit" className="feedback-submit">
        <FiSend className="button-icon" />
        <span>გაგზავნა</span>
      </button>
    </form>
  );
};

export default FeedbackForm;
