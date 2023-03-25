import React from "react";

const Datos = ({ card, image }) => {
  return (
    <div
      className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 pb-5"
      id="about"
      role="tabpanel"
      aria-labelledby="about-tab"
    >
      <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        {card.name}
      </h2>

      <div className="grid grid-cols-2 gap-2 justify-center mt-5 place-items-center">
        <img
          src={image}
          alt="imagen de la carta"
          style={{ width: "300px", height: "auto" }}
        />

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3">
                  Datos de la carta
                </th>
              </tr>
            </thead>
            <tbody>
              <TD title="Nombre" value={card.name} />
              <TD title="Carta" value={card.type} />
             { card.attribute && <TD title="Atributo" value={card.attribute} />}
              {card.level && <TD title="Nivel" value={card.level} />}
              <TD title="Tipo" value={card.race} />
              {card.archetype && <TD title="Arquetipo" value={card.archetype} />}
              {card.atk && <TD title="ATK / DEF" value={`${card.atk} / ${card.def}`} />}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Datos;

function TD({ title, value }) {
  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {title}
      </th>
      <td className="px-6 py-4">{value}</td>
    </tr>
  );
}
