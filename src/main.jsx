import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

function Main() {
  const [players, setPlayers] = useState([]);
  const [table, setTable] = useState({pot: 0, community_cards: []});


  useEffect(() => {
    const intervalId = setInterval(() => { // assigns interval reference to variable to clear it later
      fetch('/api?_=' + new Date().getTime())
        .then(response => response.json())
        .then(data => {
          const relevantData = data[1]; // Access the second index of the array
          const tableData = data[0]
          console.log(relevantData); // Print the relevant data
          setPlayers(relevantData); // Use the relevant data to set the state
          console.log(tableData);
          setTable(tableData)
        })
        .catch(error => console.error('Error:', error));
    }, 1000); // every second
  
    return () => clearInterval(intervalId); //This is important to clear the interval when the component unmounts.
  }, []);

  return (
    <App players={players} table={table} />
  );
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<Main />);