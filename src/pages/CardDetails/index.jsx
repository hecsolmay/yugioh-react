import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import { getCard } from "../../services/yugi.services";
import Datos from "./components/Datos";
import Description from "./components/Description";
import Ilustracion from "./components/Ilustracion";
import { OptionsMobile, TabSelect } from "./components/select";

const CardDetails = () => {
  const [tab, setTab] = useState("ilustracion");
  const [card, setCard] = useState({});
  const [imageCropped, setImageCropped] = useState(
    "../../../assets/loader.gif"
  );
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [prices, setPrices] = useState([]);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(false);
    getCard(id)
      .then((data) => {
        if (data.error) {
          return setError(true);
        }
        console.log(data.data[0]);
        setImageCropped(data.data[0].card_images[0].image_url_cropped);
        setImage(data.data[0].card_images[0].image_url);
        const titles = Object.keys(data.data[0].card_prices[0]);
        const values = Object.values(data.data[0].card_prices[0]);
        const prices = [];
        for (let i = 0; i < titles.length; i++) {
          let lowerName = titles[i].split("_")[0];
          let finalName =
            lowerName.substring(0, 1).toUpperCase() + lowerName.substring(1);
          const element = { name: finalName, price: `$${values[i]}` };
          prices.push(element);
        }
        setPrices(prices);
        return setCard(data.data[0]);
      })
      .catch((error) => setError(true));
    setLoading(false);
  }, []);

  const handleSelelect = (selectTab) => {
    console.log(selectTab);
    setTab(selectTab);
  };

  const handleSelelectOption = (value) => {
    console.log(value);
    setTab(value);
  };
  return (
    <Container title="Detalles">
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div
          id="fullWidthTabContent"
          className="border-t border-gray-200 dark:border-gray-600"
        >
          {loading ? (
            <h1>CARGANDO...</h1>
          ) : (
            <>
              <OptionsMobile handleSelelectOption={handleSelelectOption} />
              <TabSelect handleSelelect={handleSelelect} active={tab} />
              {tab === "ilustracion" && (
                <Ilustracion
                  imageCropped={imageCropped}
                  name={card.name}
                  description={card.desc}
                />
              )}
              {tab === "datos" && <Datos card={card} image={image} />}
              {tab === "description" && (
                <Description cardSets={card.card_sets} prices={prices} />
              )}
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default CardDetails;
