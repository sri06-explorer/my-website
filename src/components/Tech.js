import React from 'react';

const techs = [
  { title: "React", desc: "Building modern web apps." },
  { title: "JavaScript", desc: "Core language for web development." },
  { title: "Gadgets", desc: "Latest tech gadgets and reviews." },
];

function Tech() {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">Tech</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {techs.map((tech, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2">{tech.title}</h2>
            <p className="text-gray-600">{tech.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tech;
