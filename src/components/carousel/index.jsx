import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel= ({ movies }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {movies.map((movie) => (
        <div key={movie.id}>
          <img src={movie.imageUrl} alt={movie.title} />
          <p>{movie.title}</p>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
