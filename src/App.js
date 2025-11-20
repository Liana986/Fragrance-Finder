import React, { useState } from "react";
import IntroPage from "./pages/IntroPage";
import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";
import Question3 from "./pages/Question3";
import ResultPage from "./pages/ResultPage";
import "./index.css";

function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    scentFamily: "",
    fragranceFor: "",
    birthday: "",
  });

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleAnswer = (key, value) => {
    setAnswers({ ...answers, [key]: value });
    setStep(step + 1);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {step === 0 && <IntroPage next={handleNext} />}

      {step === 1 && (
        <Question1 next={handleNext} answer={(v) => handleAnswer("scentFamily", v)} />
      )}

      {step === 2 && (
        <Question2 next={handleNext} answer={(v) => handleAnswer("fragranceFor", v)} prev={handlePrev} />
      )}

      {step === 3 && (
        <Question3 next={handleNext} answer={(v) => handleAnswer("birthday", v)} prev={handlePrev} />
      )}

      {step === 4 && <ResultPage answers={answers} />}
    </div>
  );
}

export default App;
