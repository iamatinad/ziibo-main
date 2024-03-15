import React, { useState, useEffect } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Carousel from '../carousel';


const RecommendedMovies = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    // Fetching recommended movies 
    const fetchRecommendedMovies = async () => {
      try {
        const response = await fetch(`https://api.example.com/movies?key=4b289aba8d2a6c4ae31f299ca6a21723`);
        if (response.ok) {
          const data = await response.json();
          setRecommendedMovies(data.results); 
        } else {
          console.error('Failed to fetch recommended movies');
        }
      } catch (error) {
        console.error('Error fetching recommended movies:', error);
      }
    };

    fetchRecommendedMovies();
  }, []); 

  return (
    <div>
      <h2>Recommended Movies</h2>
      <div className="recommended-movies-container">
        <div className="navigation-arrows">
          <ArrowBackIcon className="arrow" />
        </div>
        <div className="movies-carousel">
          {recommendedMovies.map((movie, index) => (
            <Carousel key={index} title={movie.title} imageUrl={movie.imageUrl} />
          ))}
        </div>
        <div className="navigation-arrows">
          <ArrowForwardIcon className="arrow" />
        </div>
      </div>
    </div>
  );
};

export default RecommendedMovies;



