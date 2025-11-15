import React from "react";

export default function Result() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white">
      <h2 className="text-3xl font-bold mb-4">Your Fragrance Match</h2>

      <p className="text-lg mb-6">We recommend: <strong>Aqua Universalis</strong></p>

      <button
        className="px-6 py-3 bg-black text-white rounded-full"
        onClick={() => window.location.href = "/"}
      >
        Start Again
      </button>
    </div>
  );
}