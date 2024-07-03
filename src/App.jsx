import { useState } from 'react';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import './App.css';

function App() {

  return (
    <>
      <Form />
      <MovieDisplay />
    </>
  )
}

export default App