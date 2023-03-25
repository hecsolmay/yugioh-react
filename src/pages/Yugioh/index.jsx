import React from "react";
import Container from "../../components/Container";
import Search from "../../components/Search";
import ListResults from "./components/ListResults";
import Pagination from "./components/Pagination";

const Yugioh = () => {
  return (
    <Container title="Yugi-Wiki">
      <Search />
      <div>Lista de Cartas</div>
      <ListResults />
    </Container>
  );
};

export default Yugioh;
