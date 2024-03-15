import React from 'react';
import { Grid, Typography, Card, CardContent } from '@mui/material';
import "./index.css";


const GenresPage = () => {
  const genres = ['Action', 'Comedy', 'Drama', 'Sci-Fi', 'Thriller', 'Romance', 'Horror', 'Documentary'];

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Browse Genres
      </Typography>
      <Grid container spacing={2}>
        {genres.map((genre, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">{genre}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Explore {genre} movies
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default GenresPage;
