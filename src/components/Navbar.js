function Navbar({ setPage }) {
  return (
    <nav className="p-4 bg-gray-100 flex gap-4">
      <button onClick={() => setPage('home')}>Home</button>
      <button onClick={() => setPage('blogs')}>Blogs</button>
      <button onClick={() => setPage('games')}>Games</button>
      <button onClick={() => setPage('cricket')}>Cricket</button>
      <button onClick={() => setPage('tech')}>Tech</button>
      <button onClick={() => setPage('videos')}>Videos</button>
      <button onClick={() => setPage('cooking')}>Cooking</button> {/* NEW */}
    </nav>
  );
}

export default Navbar;
