import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const movieId = useParams().movieId;
  console.log("movieid: ", movieId);
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState(null);
  const fetchMovie = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=db0a967d&s&i=${movieId}`);

      if (response.ok) {
        const obj = await response.json();
        setMovie(obj);
        console.log(movie);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const fetchMovieComments = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${movieId}`, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZDkwOTBkOGEyMDAwMThhNDhhNjQiLCJpYXQiOjE3MDQ5MDA1NjUsImV4cCI6MTcwNjExMDE2NX0.V36sT_OrK48PPOeOW4kuqODEPnx7sdu3lKpaInW8itY",
        },
      });
      if (response.ok) {
        const commentsObj = await response.json();
        console.log("commentsobj: ", commentsObj);
        setComments(commentsObj);
        console.log(comments);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchMovie();
    fetchMovieComments();
  }, []);
  return (
    <Container>
      {movie && (
        <>
          <div className="d-flex mt-5 mb-5">
            <div className="me-5">
              <img src={movie.Poster} alt="poster" />
            </div>

            <div className="d-flex flex-column justify-content-between text-white">
              <div style={{ maxWidth: "800px" }}>
                <h2 className="display-4">
                  {movie.Title} <small className="fs-5">({movie.Year})</small>
                </h2>
                <p className="mb-5">{movie.Plot}</p>
              </div>
              <div>
                <p className="mb-0">
                  <small>Genre: {movie.Genre};</small>
                </p>
                <p className="mb-0">
                  <small>Actors: {movie.Actors};</small>
                </p>
              </div>
            </div>
          </div>
          {comments && (
            <div className="text-white w-50">
              <h2 className="diplay-6">Reviews</h2>
              <div>
                {comments.map((comment) => (
                  <div className="border border-1 border-top-0 border-end-0 border-start-0 mb-2 text-white-50">
                    <small>{comment.author}</small>
                    <p className="mb-0">{comment.comment}</p>
                    <small>{comment.rate}/5</small>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </Container>
  );
};
export default MovieDetails;
