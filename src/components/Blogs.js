import React from 'react';

const blogs = [
  { title: "Adventures in Coding", desc: "My journey learning React and JavaScript." },
  { title: "Cricket Memories", desc: "Stories from cricket matches I played or watched." },
  { title: "Tech Thoughts", desc: "Latest gadgets and technology insights." },
];

function Blogs() {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600">{blog.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogs;
