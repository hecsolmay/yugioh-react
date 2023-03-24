import React from "react";
import Container from "../../components/Container";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link to="/yugi">Ir a wikiYugi</Link>
      </button>
     
    </Container>
  );
};

export default Home;
