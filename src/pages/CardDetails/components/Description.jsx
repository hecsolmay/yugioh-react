import React from "react";

const Description = ({ cardSets, prices = [] }) => {
  const expantionsTHeads = [
    "Nombre del set",
    "Codigo del set",
    "Rareza",
    "Codigo de Rareza",
    "Precio del set",
  ];

  const pricesTitles = ["Plataforma", "Precio"];
  return (
    <div className="p-4 pt-5 pb-5 grid bg-white rounded-lg md:p-8 dark:bg-gray-800 content-center items-center self-center">
      <div style={{ margin: "auto" }}>
        <section>
          <h2 className="text-white mb-5">Expanciones</h2>

          <Table>
            <THeads titles={expantionsTHeads} />
            <TBodySets cardSets={cardSets} />
          </Table>
        </section>
        <section className="mt-8">
          <h2 className="text-white mb-5">Precios</h2>
          <Table>
            <THeads titles={pricesTitles} />
            <TBodyPrice cardPrices={prices} />
          </Table>
        </section>
      </div>
    </div>
  );
};

export default Description;

function Table({ children }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        {children}
      </table>
    </div>
  );
}

function THeads({ titles = [] }) {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        {titles.map((t) => (
          <th key={t} scope="col" className="px-6 py-3">
            {t}
          </th>
        ))}
      </tr>
    </thead>
  );
}

function TBodySets({ cardSets = [{}] }) {
  return (
    <tbody>
      {cardSets.map((c) => (
        <tr
          className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
          key={c.set_code}
        >
          <th scope="row" className="px-6 py-4 text-gray-900 dark:text-white">
            {c.set_name}
          </th>
          <td className="px-6 py-4">{c.set_code}</td>
          <td className="px-6 py-4">{c.set_rarity}</td>
          <td className="px-6 py-4">{c.set_rarity_code}</td>
          <td className="px-6 py-4">{`$${c.set_price}`}</td>
        </tr>
      ))}
    </tbody>
  );
}

function TBodyPrice({ cardPrices = [{}] }) {
  return (
    <tbody>
      {cardPrices.map((p) => (
        <tr class="bg-white dark:bg-gray-800">
          <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {p.name}
          </th>
          <td class="px-6 py-4">{p.price}</td>
        </tr>
      ))}
    </tbody>
  );
}
