import React from "react";
import Container from "../../components/Container";
import Search from "../../components/Search";
import { useSearchParams } from "react-router-dom";

const Yugioh = () => {
  const [params] = useSearchParams();

  return (
    <Container>
      <Search />
      <div>Lista de resultados</div>
    </Container>
  );
};

export default Yugioh;
