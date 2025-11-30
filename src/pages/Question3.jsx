import { useState } from "react";

function Question3({ answer, prev }) {
  const [date, setDate] = useState("");

  return (
    <div className="page">
      <h2 className="question">Choose your birth date</h2>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="date-input"
      />

      <button
        disabled={!date}
        onClick={() => answer(date)}
        className="btn-main disabled"
      >
        Next
      </button>

      <button onClick={prev} className="back-btn">Back</button>
    </div>
  );
}

export default Question3;