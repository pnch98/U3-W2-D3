import { Component } from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <Col className="d-flex justify-content-center">
      <div
        style={{
          maxHeight: 150,
          aspectRatio: "16/9",
        }}
        className="overflow-hidden text-center movie-card"
        onClick={() => navigate(`/movie-details/${movie.imdbID}`)}
      >
        <img src={movie.Poster} alt="movie cover" className="w-100" />
      </div>
    </Col>
  );
};

export default MovieCard;
