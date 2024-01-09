import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

function Main() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Add a cache-busting query parameter
    fetch('/api?_=' + new Date().getTime())
      .then(response => response.json())
      .then(data => setPlayers(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <App players={players} />
  );
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<Main />);