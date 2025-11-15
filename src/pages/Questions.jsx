import React from "react";
import { Link } from "react-router-dom";

export default function Questions() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h2 className="text-3xl font-semibold mb-6">Question 1</h2>
      <p className="text-lg mb-8">Do you prefer fresh or warm fragrances?</p>

      <div className="flex gap-4">
        <button className="px-5 py-2 border rounded-full">Fresh</button>
        <button className="px-5 py-2 border rounded-full">Warm</button>
      </div>

      <Link
        to="/result"
        className="mt-10 px-6 py-3 bg-black text-white rounded-full"
      >
        See Result
      </Link>
    </div>
  );
}