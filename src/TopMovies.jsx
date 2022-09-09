import "./style.css";
import newApi from "./api/data";
import { useEffect, useState } from "react";
import Card from "./Card";

const TopMovies = () => {
  let clas = "";
  const [movies, setMovies] = useState([]);
  const fetchingMovies = async () => {
    try {
      let results;
      results = await newApi.get("/Top250Movies/k_432njb9d");
      console.log(results.data.items);
      setMovies(results.data.items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchingMovies();
  }, []);

  return (
    <div className="bodySeries">
      <div className="sertch">
        <input type="text" placeholder="Search..." />
        <h1>TOP 250 Movies</h1>
      </div>
      {movies.map((item, index) => {
        index % 2 === 0 ? (clas = "card") : (clas = "card2");
        return (
          <Card
            clas={clas}
            key={index}
            rank={item.rank}
            img={item.image}
            title={item.title}
            year={item.year}
            rating={item.imDbRating}
          />
        );
      })}
    </div>
  );
};

export default TopMovies;
