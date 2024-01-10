import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TVShowCard = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <Col className="d-flex justify-content-center" onClick={() => navigate(`/movie-details/${movie.imdbID}`)}>
      <div className="text-center movie-card">
        <img src={movie.Poster} alt="show cover" width={"150px"} />
      </div>
    </Col>
  );
};
export default TVShowCard;
