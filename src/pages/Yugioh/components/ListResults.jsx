import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCards } from "../../../services/yugi.services";
import Pagination from "./Pagination";
import SearchedCard from "./SearchCard";

const ListResults = () => {
  const [params] = useSearchParams();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [info, setInfo] = useState({});

  useEffect(() => {
    setLoading(true);
    setError(false);
    getCards(params)
      .then((data) => {
        console.log(data);
        if (data.error) {
          return setCards([]);
        }
        setInfo(data.meta);
        return setCards(data.data);
      })
      .catch((error) => setError(true));
    setLoading(false);
  }, [params]);
  return (
    <>
      <div className="bg-gray-200 flex flex-col gap-4 mt-5 mb-8">
        {loading ? (
          <h1>CARGANDO....</h1>
        ) : error ? (
          <h1>Ocurrio un error al traer los datos</h1>
        ) : cards.length === 0 ? (
          <h1>{`No se Encontro ninguna carta llamada ${params.get(
            "fname"
          )}`}</h1>
        ) : (
          cards.map((c) => (
            <SearchedCard
              key={c.id}
              name={c.name}
              description={c.desc}
              id={c.id}
            />
          ))
        )}
      </div>
      <Pagination info={info} />
    </>
  );
};

export default ListResults;
