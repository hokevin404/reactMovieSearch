
function MovieDisplay({ movie }) {
  // Function to return loaded JSX
  function loaded() {

    if (!movie.Title || movie.Title == '')
      return loading();
    else {
      return (
        <>
          <h1>{movie.Title}</h1>
          <h2>{movie.Genre}</h2>
          <img src={movie.Poster} alt={movie.Title} />
          <h2>{movie.Year}</h2>
        </>
      );
    }

  };

  // Function to return loading JSX
  function loading() {
    return <h1>No Movie to Display</h1>;
  };

  // Ternary operator will determine which function JSX will return
  return movie ? loaded() : loading();
};

export default MovieDisplay