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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/seriesc" element={<SeriesPage />}></Route>
          <Route path="/movies" element={<MoviesPage/>}></Route>
          <Route path="/genres" element={<GenresPage/>}></Route>
          <Route path="/topc" element={<TopImbdPage/>}></Route>
          <Route path="/popular" element={<Popularmovies/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
