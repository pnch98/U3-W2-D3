import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import ShowGallery from "./ShowGallery";

const TVShows = () => {
  const showsToFetch = ["mr robot", "lost", "fleabag", "the bear", "breaking bad", "undone"];

  return (
    <>
      <Container fluid className="px-4">
        <h2 className="text-white mb-3">TV Shows</h2>
        <Row xs={3} md={4} lg={6} className="gy-3">
          <ShowGallery tvShow={showsToFetch[0]} />
          <ShowGallery tvShow={showsToFetch[1]} />
          <ShowGallery tvShow={showsToFetch[2]} />
          <ShowGallery tvShow={showsToFetch[3]} />
          <ShowGallery tvShow={showsToFetch[4]} />
          <ShowGallery tvShow={showsToFetch[5]} />
        </Row>
      </Container>
    </>
  );
};
export default TVShows;
