import React from 'react';

function Cooking() {
  const recipes = [
    { title: "Spaghetti Carbonara", description: "Classic Italian pasta with eggs, cheese, pancetta, and pepper." },
    { title: "Chicken Biryani", description: "Fragrant Indian rice dish with chicken and spices." },
    { title: "Chocolate Brownies", description: "Rich and fudgy dessert for chocolate lovers." }
  ];

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">Cooking Blog</h1>
      <div className="grid grid-cols-1 gap-4">
        {recipes.map((recipe, idx) => (
          <div key={idx} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cooking;
