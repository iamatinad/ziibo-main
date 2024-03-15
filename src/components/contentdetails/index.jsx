import React from 'react';
import { Button, Typography, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { img300x300 } from '../../pages/utls/imageLink';

const ContentDetails = ({ movie }) => {

    return (
        <Card sx={{ display: 'flex', marginBottom: '20px', width: '100%' }}>
            <CardMedia
                component="img"
                sx={{ width: 200, objectFit: 'cover' }}
                image={`${img300x300}/${movie?.poster_path}`}
                alt={movie?.title}
            />
            <div>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography variant="h5" component="div">
                        {movie?.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        Release Date: {movie?.release_date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Rating: {movie?.vote_average}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Original Title: {movie?.original_title}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {movie?.overview}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant='contained' color='success'>
                        Watch Trailer
                    </Button>
                </CardActions>
            </div>
        </Card>
    );
};

export default ContentDetails;