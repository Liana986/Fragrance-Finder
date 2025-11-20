import React from "react";

const options = ["For Women", "For Men", "Unisex"];

function Question2({ answer, prev }) {
  return (
    <div className="center-page">
      <h2 className="text-3xl font-semibold mb-6">Who is this fragrance for?</h2>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => answer(opt)}
            className="bg-gray-200 hover:bg-gray-300 p-3 rounded-xl transition font-medium"
          >
            {opt}
          </button>
        ))}
      </div>

      <button onClick={prev} className="mt-6 text-blue-600 underline">
        Back
      </button>
    </div>
  );
}

export default Question2;