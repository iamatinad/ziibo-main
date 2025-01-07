import React from 'react';
import { Grid, Typography, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import "./index.css";

const GenresPage = () => {
  const genres = ['Action', 'Comedy', 'Drama', 'Sci-Fi', 'Thriller', 'Romance', 'Horror', 'Documentary'];
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="page-background">
      <div className="content-container">
        <Button 
          variant="contained" 
          color="success" 
          onClick={handleBackToHome} 
          style={{ marginBottom: '20px' }}>
          Back to Home
        </Button>

        <Typography variant="h4" gutterBottom>
          Browse Genres
        </Typography>

        <Grid container spacing={2}>
          {genres.map((genre, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <Card className="genre-card">
                <CardContent>
                  <Typography variant="h6" className="genre-title">
                    {genre}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Explore {genre} movies
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="success" 
                    className="explore-button" 
                    style={{ marginTop: '16px' }}>
                    Explore {genre}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default GenresPage;
