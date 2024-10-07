import React, { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";

const Movie = () => {
  // https://yts.mx/api
  //
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);

  const getMovies = async () => {
    const jsonRes = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();
    console.log(jsonRes);
    setMovieList(jsonRes.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movieList.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Movie;
