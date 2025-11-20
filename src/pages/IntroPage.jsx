import React from "react";

function IntroPage({ next }) {
  return (
    <div className="center-page">
      <h1 className="text-4xl font-bold mb-4">Find Your Fragrance</h1>
      <p className="text-gray-600 mb-8">A personalized scent discovery experience</p>

      <button
        onClick={next}
        className="btn-main"
      >
        Start the Experience
      </button>
    </div>
  );
}

export default IntroPage;