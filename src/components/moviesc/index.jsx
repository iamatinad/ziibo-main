// Moviec.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Rating, Box } from '@mui/material';
import './index.css';

const Moviec = ({ title, overview, releaseDate, posterPath }) => {
  return (
    <Card className="Moviec">
      <CardMedia
        component="img"
        alt={title}
        height="200px"
        image={`https://image.tmdb.org/t/p/w500/${posterPath}`}
      />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          Released: {releaseDate}
        </Typography>
        <Typography variant="body2" paragraph >
          {overview.substring(0, 200)}...
        </Typography>
        <div className="user-rating">
          <Rating
            name="user-rating"
            value={4.5} 
            precision={0.5}
            readOnly
          />
          <Box ml={1}>
            <Typography variant="caption" color="textSecondary">
              User Rating
            </Typography>
          </Box>
        </div>
        <Button variant="contained" color="success">
          Watch Now
        </Button>
        <div className="review-section">
          <Typography variant="subtitle2" gutterBottom>
            Reviews
          </Typography>
          <Typography variant="body2">
            "This movie is a must-watch! The storyline is captivating, and the performances are outstanding."
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Moviec;
