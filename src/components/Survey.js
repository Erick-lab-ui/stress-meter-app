import React, { useState } from 'react';

function Survey({ question, imageSrc, category, onAnswer, onNavigate }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleSelection = (answer) => {
    setSelectedAnswer(answer);  // Set the selected answer
  };

  const handleNext = () => {
    if (selectedAnswer) {
      onAnswer(selectedAnswer);  // Send answer to parent (App.js)
      setSelectedAnswer(null);  // Reset selected answer for the next question
      onNavigate('next');  // Move to the next question
    }
  };

  const handleBack = () => {
    onNavigate('back');  // Go back to the previous question
  };

  return (
    <div className="question-container">
      {/* 🌟 Category Label */}
      <p className="category-label">
         {category}
      </p>

      <img src={imageSrc} alt="Question Icon" className="question-icon" />
      <h2 className="question-text">{question}</h2>

      <div className="choices">
        <button
          onClick={() => handleSelection('yes')}
          className={selectedAnswer === 'yes' ? 'selected' : ''}
        >
          🟥 Always
        </button>
        <button
          onClick={() => handleSelection('no')}
          className={selectedAnswer === 'no' ? 'selected' : ''}
        >
          🟩 Never
        </button>
        <button
          onClick={() => handleSelection('unsure')}
          className={selectedAnswer === 'unsure' ? 'selected' : ''}
        >
          🟨 Sometimes
        </button>
      </div>

      <div className="navigation-buttons">
        <button onClick={handleBack} disabled={selectedAnswer === null}>
          Back
        </button>
        <button onClick={handleNext} disabled={selectedAnswer === null}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Survey;
