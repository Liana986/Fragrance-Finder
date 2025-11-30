import React from "react";

const options = ["For Women", "For Men", "Unisex"];

function Question2({ answer, prev }) {
  return (
    <div className="page">
      <h2 className="question">Who is this fragrance for?</h2>

      <div className="options-column">
        {options.map((opt) => (
          <button
            key={opt}
            className="option-btn"
            onClick={() => answer(opt)}
          >
            {opt}
          </button>
        ))}
      </div>

      <button onClick={prev} className="back-btn">Back</button>
    </div>
  );
}

export default Question2;
