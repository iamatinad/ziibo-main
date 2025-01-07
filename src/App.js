import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SeriesPage from "./pages/series";
import MoviesPage from "./pages/moviespage";
import TopImbdPage from "./pages/topimdb";
import Signup from "./pages/signup";
import Checkout from "./pages/checkout";
import GenresPage from "./pages/genres";
import Popularmovies from "./pages/popularmovies";
import About from "./pages/about"; 
import Faqs from "./pages/faqs";
import ContactUs from "./pages/contactus";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seriesc" element={<SeriesPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/genres" element={<GenresPage />} />
          <Route path="/topc" element={<TopImbdPage />} />
          <Route path="/popular" element={<Popularmovies />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/faq" element={<Faqs />} /> 
          <Route path="/contactus" element={<ContactUs />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
