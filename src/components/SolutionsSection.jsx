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
    <section className="py-16 bg-secondary">
      <div className="max-w-6xl mx-auto text-center mb-12 text-text">
        <h2 className="text-3xl font-bold">Explore Our Solutions</h2>
        <p className="text-text mt-2">Scalable IoT Solutions for Various Industries</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((solution, index) => (
          <div key={index} className="bg-muted p-6 rounded-xl shadow  border border-gray-200 hover:scale-105 transition-all duration-300 text-text">
            <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
            <p>{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
