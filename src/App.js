import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Games from './components/Games';
import Cricket from './components/Cricket';
import Tech from './components/Tech';
import Cooking from './components/Cooking'; // NEW
import Videos from './components/Videos';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch(page) {
      case 'blogs':
        return <Blogs />;
      case 'games':
        return <Games />;
      case 'cricket':
        return <Cricket />;
      case 'tech':
        return <Tech />;
      case 'videos':
        return <Videos />;
      case 'cooking': // NEW
        return <Cooking />;
      default:
        return <Home />;
    }
  }

  return (
    <div>
      <Navbar setPage={setPage} />
      {renderPage()}
    </div>
  );
}

export default App;
