import React from "react";

const options = [
  "Citrus",
  "Woody",
  "Floral",
  "Oriental",
  "Gourmand",
  "Fresh",
  "Spicy",
  "Musky",
  "Aquatic",
  "Green",
  "Animalic",
  "Beverages"
];

function Question1({ answer }) {
  return (
    <div className="center-page">
      <h2 className="text-3xl font-semibold mb-6">Which scent family do you prefer?</h2>

      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => answer(opt)}
            className="w-full bg-gray-200 hover:bg-gray-300 p-3 rounded-xl transition font-medium"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question1;