import { useEffect } from "react";

const Fetch = () => {
  useEffect(
    fetch("https://imdb-api.com/en/API/Top250Movies/k_432njb9d")
      .then((response) => response.json())
      .then((result) => console.log(result.data)),
    []
  );
  return <div></div>;
};

export default Fetch;
