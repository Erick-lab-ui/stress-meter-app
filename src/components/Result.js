import React from 'react';
import './Result.css';

function Result({ answers }) {
  const yesCount = answers.filter(ans => ans === 'yes').length;
  const percentage = Math.round((yesCount / answers.length) * 100);

  let level = '';
  let message = '';

  if (percentage >= 90) {
    level = "🛑 Extreme Stress";
    message = "😟 Your stress levels are very high. It might help to talk to someone you trust or consider consulting a professional. You're not alone.";
  } else if (percentage >= 80) {
    level = "🚨 Very High Stress";
    message = "😰 You’re experiencing intense stress. Try to pause, breathe, and take some time for self-care. Little changes can make a big difference.";
  } else if (percentage >= 70) {
    level = "⚠️ High Stress";
    message = "😥 You’re under significant stress. Consider setting boundaries and taking regular breaks to recharge.";
  } else if (percentage >= 60) {
    level = "🔶 Moderately High Stress";
    message = "😓 Your stress is rising. Make sure you're getting enough rest and doing things that make you feel good.";
  } else if (percentage >= 50) {
    level = "🟡 Moderate Stress";
    message = "😐 Moderate stress detected. Keep an eye on how you’re feeling. Some relaxation or mindful activities might help.";
  } else if (percentage >= 30) {
    level = "🟢 Mild Stress";
    message = "🙂 Mild stress. You’re doing okay, but don’t forget to give yourself time to unwind and reset.";
  } else {
    level = "🟩 Low Stress";
    message = "😄 Low stress. Great job managing things! Keep up the healthy habits and don’t forget to treat yourself!";
  }

  return (
    <div className="result-container">
      <p>You answered "Yes" to {yesCount} out of {answers.length} questions.</p>
      
      <h2>Your Stress Level: <span>{level}</span></h2>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div 
          className="progress-bar"
          style={{ width: `${percentage}%` }}
        >
          <span className="progress-text">{percentage}%</span>
        </div>
      </div>

      <p>{message}</p>
      <button onClick={() => window.location.reload()}>🔁 Retake Survey</button>
    </div>
  );
}

export default Result;