import React from 'react';

const games = [
  { title: "Game 1", desc: "Fun puzzle game" },
  { title: "Game 2", desc: "Click challenge" },
];

function Games() {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">Games</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {games.map((game, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2">{game.title}</h2>
            <p className="text-gray-600">{game.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Games;
