import React from "react";

function IntroPage({ next }) {
  return (
    <div className="page">
      <div className="center-page">
      <h1 className="title1">Find Your Fragrance</h1>
      <p className="subtitle">A personalized scent discovery experience</p>
      <button onClick={next} className="btn-main">Start the Experience</button>
      </div>
    </div>
  );
}

export default IntroPage;