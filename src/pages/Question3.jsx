import React, { useState } from "react";

function Question3({ answer, prev }) {
  const [date, setDate] = useState("");

  return (
    <div className="center-page">
      <h2 className="text-3xl font-semibold mb-6">Choose your birth date</h2>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border border-gray-400 p-3 rounded-xl mb-4"
      />

      <button
        disabled={!date}
        onClick={() => answer(date)}
        className="btn-main disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Next
      </button>

      <button onClick={prev} className="mt-6 text-blue-600 underline">
        Back
      </button>
    </div>
  );
}

export default Question3;