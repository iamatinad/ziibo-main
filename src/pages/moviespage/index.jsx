import React, { useState, useEffect } from 'react';
import Moviec from '../../components/moviesc';
import { Container, Grid } from '@mui/material';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

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

  return (
    <Container maxWidth="lg" className="MovieList" >
      <h2>Movies</h2>
      <Grid container spacing={8}>
        {movies.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <Moviec
              title={movie.title}
              overview={movie.overview}
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
