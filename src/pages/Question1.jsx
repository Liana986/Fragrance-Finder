import React from "react";

const options = [
  "Citrus","Woody","Floral","Oriental","Gourmand","Fresh",
  "Spicy","Musky","Aquatic","Green","Animalic","Beverages"
];

function Question1({ answer }) {
  return (
    <div className="page">
      <h2 className="question">Which scent family do you prefer?</h2>

      <div className="options-grid">
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
    </div>
  );
}

export default Question1;