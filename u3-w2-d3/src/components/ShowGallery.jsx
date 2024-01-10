import { Col, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import TVShowCard from "./TVShowCard";

const ShowGallery = ({ tvShow }) => {
  const [tvShows, setTvShows] = useState(null);
  const fetchMovies = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=db0a967d&series&s=${tvShow}`);
      if (response.ok) {
        const { Search } = await response.json();
        const search = [Search[0], Search[1]];
        setTvShows(search);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      {tvShows != null &&
        tvShows.map(
          (show, index) =>
            show.Poster !== "N/A" && (
              <Col>
                <TVShowCard key={show.imdbID} movie={show} />
              </Col>
            )
        )}
    </>
  );
};
export default ShowGallery;
