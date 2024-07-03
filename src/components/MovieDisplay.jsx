
function MovieDisplay({movie}) {
  // Function to return loaded JSX
  const loaded = () => {
    return (
      <>
        <h1>{movie.Title}</h1>
        <h2>{movie.Genre}</h2>
        <img src={movie.poster} alt={movie.Title} />
        <h2>{movie.Year}</h2>
      </>
    );
  };

};



export default MovieDisplay