import React from 'react';
import Movie from './Movie';

const Movies = ({movies}) => {
  return(
    <section>
      {movies.map(m => <Movie key={m.title} movie={m} />)}
    </section>
  )
}

export default Movies;
