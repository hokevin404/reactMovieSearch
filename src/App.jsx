import { useState } from 'react';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import './App.css';

function App() {
  // API Key
  const apikey = "98e3fb1f";

  // State to hold data from movie api
  const [movie, setmovie] = useState(null);

  return (
    <div className='App'>
      <Form />
      <MovieDisplay />
    </div>
  )
}

export default App