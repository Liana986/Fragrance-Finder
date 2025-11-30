import React from "react";

function IntroPage({ next }) {
  return (
    <div className="page">
      <h1 className="title">Find Your Fragrance</h1>
      <p className="subtitle">A personalized scent discovery experience</p>
      <button onClick={next} className="btn-main">Start the Experience</button>
    </div>
  );
}

export default IntroPage;