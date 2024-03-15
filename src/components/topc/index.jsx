import React, { useState, useEffect } from 'react';
import './index.css'; // Import the CSS file for styling

const TopC = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=8d25ac7fb0ef79cb28b30f9b770139c4');
        if (!response.ok) {
          throw new Error('Failed to fetch top rated movies');
        }
        const data = await response.json();
        setTopRatedMovies(data.results);
      } catch (error) {
        console.error('Error fetching top rated movies:', error);
      }
    };

    fetchTopRatedMovies();
  }, []);

  // Function to determine if a movie is one of the highest rated
  const isTopRated = (rating) => {
    // Define your criteria for what constitutes a "top-rated" movie
    return rating >= 8.0; // Example: Consider movies with a rating of 8.0 or higher as top-rated
  };

  // Group movies into rows with three movies each
  const rows = [];
  for (let i = 0; i < topRatedMovies.length; i += 3) {
    rows.push(topRatedMovies.slice(i, i + 3));
  }

  return (
    <div>
      <h2>Top Rated Movies</h2>
      <div className="top-rated-container">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((movie) => (
              <div key={movie.id} className={`top-rated-item ${isTopRated(movie.vote_average) ? 'top-rated' : ''}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <div className="movie-info">
                  <p className="movie-title">{movie.title}</p>
                  <p className="movie-rating">Rating: {movie.vote_average}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopC;
