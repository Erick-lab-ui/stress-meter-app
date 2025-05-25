import { useState } from 'react';
import Landing from './components/Landing';
import Survey from './components/Survey';
import Result from './components/Result';
import './App.css';

import General1icon from './assets/General1icon.gif';
import General2icon from './assets/General2icon.gif';
import Work1icon from './assets/Work1icon.gif';
import Work2icon from './assets/Work2icon.gif';
import Work3icon from './assets/Work3icon.gif';
import Life1icon from './assets/Life1icon.gif';
import Life2icon from './assets/Life2icon.gif';
import Self1icon from './assets/Self1icon.gif';
import Self2icon from './assets/Self2icon.gif';

function App() {
  const [step, setStep] = useState('landing'); // landing, survey, result
  const [answers, setAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track current question

  const questions = [
    {
      text: "Do you find it hard to enjoy things you used to because of stress?",
      icon: General1icon,
      category: "🧠 General Stress & Emotional Well-Being"
    },
    {
      text: "Do you feel like your stress is affecting your overall health?",
      icon: General1icon,
      category: "🧠 General Stress & Emotional Well-Being"
    },
    {
      text: "Do you feel emotionally drained by the end of your workday?",
      icon: General2icon,
      category: "🧠 General Stress & Emotional Well-Being"
    },
    {
      text: "Do you feel that your responsibilities are too much to handle?",
      icon: General2icon,
      category: "🧠 General Stress & Emotional Well-Being"
    },
    {
      text: "Do you experience physical symptoms related to stress (e.g., headache, fatigue)?",
      icon: General2icon,
      category: "🧠 General Stress & Emotional Well-Being"
    },



    {
      text: "Do you struggle to stay focused while working?",
      icon: Work1icon,
      category: "🎯 Focus, Productivity & Mental Clarity"
    },
    {
      text: "Do you feel unproductive during your work hours?",
      icon: Work1icon,
      category: "🎯 Focus, Productivity & Mental Clarity"
    },
    {
      text: "Do distractions affect your ability to complete tasks?",
      icon: Work1icon,
      category: "🎯 Focus, Productivity & Mental Clarity"
    },
    {
      text: "Do you have difficulty starting tasks at the beginning of the day?",
      icon: Work2icon,
      category: "🎯 Focus, Productivity & Mental Clarity"
    },
    {
      text: "Do you feel mentally foggy or have trouble concentrating?",
      icon: Work2icon,
      category: "🎯 Focus, Productivity & Mental Clarity"
    },
    {
      text: "Do you procrastinate on important tasks?",
      icon: Work3icon,
      category: "🎯 Focus, Productivity & Mental Clarity"
    },
    {
      text: "Do you feel like you're multitasking too much?",
      icon: Work3icon,
      category: "🎯 Focus, Productivity & Mental Clarity"
    },



    {
      text: "Do you bring work-related stress home with you?",
      icon: Life1icon,
      category: "🕓 Work-Life Balance"
    },
    {
      text: "Do you find it difficult to disconnect from work during your personal time?",
      icon: Life1icon,
      category: "🕓 Work-Life Balance"
    },
    {
      text: "Does work interfere with your ability to rest or sleep well?",
      icon: Life2icon,
      category: "🕓 Work-Life Balance"
    },
    {
      text: "Do you feel like you have little time for yourself because of work?",
      icon: Life2icon,
      category: "🕓 Work-Life Balance"
    },




    {
      text: "Do you feel motivated to give your best at work?",
      icon: Self1icon,
      category: "🚀 Motivation & Self-Perception"
    },
    {
      text: "Do you doubt your ability to perform well in your role?",
      icon: Self1icon,
      category: "🚀 Motivation & Self-Perception"
    },
    {
      text: "Do you compare your productivity to others in a negative way?",
      icon: Self2icon,
      category: "🚀 Motivation & Self-Perception"
    },
    {
      text: "Do you feel proud of your work achievements?",
      icon: Self2icon,
      category: "🚀 Motivation & Self-Perception"
    },
  ];

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);

    if (currentQuestionIndex + 1 === questions.length) {
      setStep('result');
    }
  };

  const handleNavigation = (direction) => {
    if (direction === 'next') {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (direction === 'back' && currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      {step === 'landing' && <Landing onStart={() => setStep('survey')} />}
      {step === 'survey' && (
        <Survey
          question={questions[currentQuestionIndex].text}
          imageSrc={questions[currentQuestionIndex].icon}
          category={questions[currentQuestionIndex].category}
          onAnswer={handleAnswer}
          onNavigate={handleNavigation}
        />
      )}
      {step === 'result' && <Result answers={answers} />}
    </div>
  );
}

export default App;
