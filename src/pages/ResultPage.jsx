import React from "react";

function ResultPage({ answers }) {
  return (
    <div className="page">
      <h2 className="title">Your Personalized Result</h2>

      <div className="result-box">
        <p><strong>Scent Family:</strong> {answers.scentFamily}</p>
        <p><strong>For:</strong> {answers.fragranceFor}</p>
        <p><strong>Birth Date:</strong> {answers.birthday}</p>
      </div>

      <p className="sparkle">✨</p>
    </div>
  );
}

export default ResultPage;

