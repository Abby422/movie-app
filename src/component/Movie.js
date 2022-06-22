import React from "react";
import StarRatings from "react-star-ratings";

const Movie = ({ movies }) => {
  console.log(movies);
  return (
    <div key={movies.id} className="movie-card">
      <div className="movie-content">
        <img
          src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}
          alt="moviebackdrop"
        />
        <h5>{movies.title}</h5>
        <StarRatings
        starDimension="12px"
        starSpacing="5px"
        rating={movies.vote_average/2}
        starRatedColor="blue"
        numberOfStars={5}
      />
      </div>
      
      
    </div>
  );
};

export default Movie;
