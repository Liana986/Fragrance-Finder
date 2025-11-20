import React from "react";

function ResultPage({ answers }) {
  return (
    <div className="center-page">
      <h2 className="text-4xl font-bold mb-4">Your Personalized Result</h2>

      <div className="bg-gray-100 p-6 rounded-2xl shadow max-w-md text-left">
        <p><strong>Scent Family:</strong> {answers.scentFamily}</p>
        <p><strong>For:</strong> {answers.fragranceFor}</p>
        <p><strong>Birth Date:</strong> {answers.birthday}</p>
      </div>

      <p className="mt-6 text-gray-600 italic">
        (✨)
      </p>
    </div>
  );
}

export default ResultPage;
