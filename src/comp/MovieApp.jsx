import React, { useState, useEffect } from "react";
import nikeShoesImage from "../img/nike-shoes.jpg";

const MovieApp = (props) => {
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState("");
  const [userMovie, setUserMovie] = useState([]);

  const getMovies = async () => {
    const apiKey = "b23286c3a57cc65c9dbb4161cbf89f13";
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`;
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    getMovies();
  }, [getMovies]);
  
  return (
    <div>
      <section className="container">
        <h2>Popular Movies</h2>
        <section className="search">
          <div className="container">
            <div id="alert"></div>
            <form className="search-form" onSubmit={(e)=> e.preventdefault ()}>
              <div className="search-flex">
                <input
                  type="text"
                  name="search-term"
                  id="search-term"
                  placeholder="Enter search term"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                />
                <button className="btn" type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </section>
        <div id="popular-movies" className="grid">
          {movies.map((movie) => {
            return (
              <div className="card" key={movie.id}>
                <a href="#">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="card-img-top"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">
                    <small className="text-muted">
                      Release Date: {movie.release_date}
                    </small>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export { MovieApp };
