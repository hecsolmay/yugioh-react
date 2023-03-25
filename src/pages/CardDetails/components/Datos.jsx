import React from "react";

const attributes = [
  { attribute: "DARK", image: "/images/attributes/DARK.png" },
  { attribute: "DIVINE", image: "/images/attributes/DIVINE.png" },
  { attribute: "EARTH", image: "/images/attributes/EARTH.png" },
  { attribute: "FIRE", image: "/images/attributes/FIRE.png" },
  { attribute: "LIGHT", image: "/images/attributes/LIGHT.png" },
  { attribute: "WATER", image: "/images/attributes/WATER.png" },
  { attribute: "WIND", image: "/images/attributes/WIND.png" },
];

const types = [
  { frameType: "normal", image: "/images/types/normal.png" },
  { frameType: "effect", image: "/images/types/effect.png" },
  { frameType: "ritual", image: "/images/types/ritual.png" },
  { frameType: "fusion", image: "/images/types/fussion.png" },
  { frameType: "synchro", image: "/images/types/synchro.png" },
  { frameType: "xyz", image: "/images/types/xyz.png" },
  { frameType: "link", image: "/images/types/link.png" },
  {
    frameType: "normal_pendulum",
    image: "/images/types/normal-pendulum.png",
  },
  { frameType: "effect_pendulum", image: "/images/types/pendulum.png" },
  { frameType: "ritual_pendulum", image: "/images/types/ritual.png" },
  {
    frameType: "fusion_pendulum",
    image: "/images/types/fussion-pendulum.png",
  },
  {
    frameType: "synchro_pendulum",
    image: "/images/types/synchro-pendulum.png",
  },
  { frameType: "xyz_pendulum", image: "/images/types/xyz-pendulum.png" },
  { frameType: "spell", image: "/images/types/spell.png" },
  { frameType: "trap", image: "/images/types/trap.png" },
  { frameType: "token", image: "/images/types/token.png" },
  { frameType: "skill", image: "/images/types/link.png" },
];

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
              <TDCard
                title="Carta"
                type={card.type}
                frameType={card.frameType}
                images={types}
              />
              {card.attribute && (
                <TDAtribute attribute={card.attribute} images={attributes} />
              )}
              {card.level && (
                <TD
                  title="Nivel"
                  value={
                    <div className="flex">
                      <img
                        src="/images/icons/level.png"
                        alt="star"
                        className="mr-2"
                        style={{ width: "16px", height: "16px" }}
                      />
                      {card.level}
                    </div>
                  }
                />
              )}
              <TD title="Tipo" value={card.race} />
              {card.archetype && (
                <TD title="Arquetipo" value={card.archetype} />
              )}
              {card.atk && (
                <TD
                  title="ATK / DEF"
                  value={
                    <div className="flex">
                      <img
                        src="/images/icons/attack.png"
                        alt="star"
                        className="mr-2"
                        style={{ width: "20px", height: "20px" }}
                      />
                      <p className="mr-2">{card.atk} /</p>
                      <img
                        src="/images/icons/deffense.png"
                        alt="star"
                        className="mr-2"
                        style={{ width: "20px", height: "20px" }}
                      />
                      <p>{card.def}</p>
                    </div>
                  }
                />
              )}
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

function TDAtribute({ images = [], attribute = "" }) {
  const image = images.find((i) => i.attribute == attribute);
  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        Carta
      </th>
      <td className="px-6 py-4">
        <div className="flex">
          <img
            src={image.image}
            alt="tipo"
            className="mr-2"
            style={{ width: "20px", height: "20px" }}
          />
          {attribute}
        </div>
      </td>
    </tr>
  );
}

function TDCard({ type = "", frameType = "", images = [{}] }) {
  const image = images.find((i) => i.frameType == frameType);
  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        Carta
      </th>
      <td className="px-6 py-4">
        <div className="flex">
          <img
            src={image.image}
            alt="tipo"
            className="mr-2"
            style={{ width: "20px", height: "20px" }}
          />
          {type}
        </div>
      </td>
    </tr>
  );
}
