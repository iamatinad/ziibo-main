import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation (React Router v6)
import Moviec from '../../components/moviesc';
import { Container, Grid, Button } from '@mui/material';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  // Function to truncate the description if it is too long
  const truncateText = (text, length) => {
    if (text && text.length > length) {
      return text.substring(0, length) + "..."; 
    }
    return text;
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://api.themoviedb.org/3/movie/popular?api_key=8d25ac7fb0ef79cb28b30f9b770139c4';

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, []);

  const handleBackToHome = () => {
    navigate('/'); // Navigate to the homepage when the button is clicked
  };

  return (
    <Container maxWidth="lg" className="MovieList">
      <h2>Movies</h2>
      {/* Back to Home Button */}
      <Button
        variant="contained"
        color="success" 
        onClick={handleBackToHome}
        style={{ marginBottom: '20px' }}
      >
        Back to Home
      </Button>

      <Grid container spacing={8}>
        {movies.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <Moviec
              title={movie.title}
              overview={truncateText(movie.overview, 100)} rs
              releaseDate={movie.release_date}
              posterPath={movie.poster_path}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MovieList;
