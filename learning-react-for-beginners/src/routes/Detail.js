import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Detail = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getmovieDetail = async () => {
    const jsonRes = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovieDetail(jsonRes.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getmovieDetail();
  }, []);

  return (
    <div>
      {isLoading ? (
        "loading"
      ) : (
        <div>
          <img
            src={movieDetail.movie.large_cover_image}
            alt={movieDetail.movie.large_cover_image + "img"}
          />
          <h1>{movieDetail.movie.title}</h1>
        </div>
      )}
    </div>
  );
};

export default Detail;
