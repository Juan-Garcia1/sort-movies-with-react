import React from 'react';

const Movie = ({ movie: { poster, title, genre, rating } }) => {
  return(
    <figure>
    <img src={poster} alt={title}/>
    <figcaption>
    <p>{genre.join(' ')}</p>
    <div className="rating">
    <i className="fa fa-heart" />
    <h4>{rating}</h4>
    </div>
    </figcaption>
    </figure>
  )
}

export default Movie;
