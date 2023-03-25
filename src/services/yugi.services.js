const API_YUGI_URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

export const getCards = (params) => {
  if (params.toString()) {
    return fetch(`${API_YUGI_URL}?${params.toString()}`).then((res) =>
      res.json()
    );
  }
  return fetch(`${API_YUGI_URL}?offset=0&num=10`).then((res) => res.json());
};

export const getCard = (id) => {
  return fetch(`${API_YUGI_URL}?id=${id}`).then((res) => res.json());
};
