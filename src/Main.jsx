import "./style.css";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div className="mainDiv">
      <div className="selectInMain">
        <Link className="startTectH1" to={"TopMovies"}>
          <h1>IMDb Top 250 Movies</h1>
        </Link>
      </div>
      <div className="selectInMain">
        <Link className="startTectH1" to={"TopSeries"}>
          <h1>IMDb Top 250 Series</h1>
        </Link>
      </div>
    </div>
  );
};

export default Main;
