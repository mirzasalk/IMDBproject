import "./style.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={props.clas}>
      <div className="CardLeftField">
        <div className="rang">{props.rank}.</div>
        <Link to={"/FullPage"}>
          <img className="img" src={props.img} alt="img" />
        </Link>
        <div>
          <Link className="Link" to={"/FullPage"}>
            <strong className="title">{props.title}</strong> ({props.year})
          </Link>
        </div>
      </div>
      <div>{props.rating}</div>
    </div>
  );
};
export default Card;
