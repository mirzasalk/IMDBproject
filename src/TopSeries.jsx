import "./style.css";
import newApi from "./api/data";
import { useEffect, useState } from "react";
import Card from "./Card";

const TopSeries = () => {
  let clas = "";
  const [series, setSeries] = useState([]);
  const fetchingSeries = async () => {
    try {
      let results;
      results = await newApi.get("/Top250TVs/k_432njb9d");
      console.log(results.data.items);
      setSeries(results.data.items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchingSeries();
  }, []);

  return (
    <div className="bodySeries">
      <div className="sertch">
        <input type="text" placeholder="Search..." />
        <h1>TOP 250 series</h1>
      </div>
      {series.map((item, index) => {
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

export default TopSeries;
