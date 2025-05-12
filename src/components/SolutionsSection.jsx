import { useState } from "react";

const solutions = [
  { title: "Solution 1", description: "Lorem ipsum dolor sit amet." },
  { title: "Solution 2", description: "Lorem ipsum dolor sit amet." },
  { title: "Solution 3", description: "Lorem ipsum dolor sit amet." },
  { title: "Solution 4", description: "Lorem ipsum dolor sit amet." },
  { title: "Solution 5", description: "Lorem ipsum dolor sit amet." },
  { title: "Solution 6", description: "Lorem ipsum dolor sit amet." },
];

export default function SolutionsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">Explore Our Solutions</h2>
        <p className="text-gray-600 mt-2">Scalable IoT Solutions for Various Industries</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((solution, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
            <p className="text-gray-600">{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
