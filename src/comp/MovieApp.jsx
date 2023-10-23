import React, { useState, useEffect } from "react";
import nikeShoesImage from "../img/nike-shoes.jpg";

const MovieApp = (props) => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [userMovies, setUserMovies] = useState([]);

  const getMovies = async (searchTerm) => {
    const apiKey = "b23286c3a57cc65c9dbb4161cbf89f13";
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`;

    if (searchTerm) {
      url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}`;
    }

    const res = await fetch(url);
    const data = await res.json();

    if (searchTerm) {
      setUserMovies(data.results);
    } else {
      setMovies(data.results);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    getMovies(searchValue);
  };

  return (
    <div>
      <section className="container">
        <h2>Popular Movies</h2>
        <section className="search">
          <div className="container">
            <div id="alert"></div>
            <form className="search-form" onSubmit={handleSearch}>
              <div className="search-flex">
                <input
                  type="text"
                  name="search-term"
                  id="search-term"
                  placeholder="Enter search term"
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
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
          {searchValue
            ? userMovies.map((movie) => (
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
              ))
            : movies.map((movie) => (
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
              ))}
        </div>
      </section>
    </div>
  );
};

export { MovieApp };
