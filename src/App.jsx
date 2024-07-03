import { useState } from 'react';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import './App.css';

function App() {

  return (
    <div className='App'>
      <Form />
      <MovieDisplay />
    </div>
  )
}

export default App