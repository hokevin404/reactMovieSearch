import { useState, useEffect } from 'react';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import './App.css';

function App() {
  // API Key
  const apiKey = "98e3fb1f";

  // State to hold data from movie api
  const [movie, setmovie] = useState(null);

  // Function to get movie data from api
  const getMovie = async (searchTerm) => {
    try {
      // Fetch request to get movie data and store response in 
      // 'response' variable
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );

      // Parse movie data into JavaScript object
      const data = await response.json();

      // Set movie state to received data
      setmovie(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Will run on first render, but not subsquent renders
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <div className='App'>
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  )
}

export default App