import React from 'react';

const matches = [
  { title: "Match 1", desc: "Team A vs Team B, Score: 230/7" },
  { title: "Match 2", desc: "Team C vs Team D, Score: 180/5" },
];

function Cricket() {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">Cricket Updates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {matches.map((match, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2">{match.title}</h2>
            <p className="text-gray-600">{match.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cricket;
