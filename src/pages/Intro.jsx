import React from "react";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white">
      <h1 className="text-4xl font-bold mb-6">Fragrance Finder</h1>
      <p className="text-lg mb-6">Discover your perfect scent</p>

      <Link
        to="/questions"
        className="px-6 py-3 bg-black text-white rounded-full text-lg"
      >
        Start the experience
      </Link>
    </div>
  );
}