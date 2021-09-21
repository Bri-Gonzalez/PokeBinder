import './Home.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCardTitles } from "../services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import Image from "react-bootstrap/Image";


function Home() {
  const [cardTitles, setCardTitles] = useState([]);

  useEffect(() => {
    const getCardTitles = async () => {
      setCardTitles(await fetchCardTitles());
    };
    getCardTitles();
  }, [])

  return (
    <div>
      <h1 className="home-title">PokéBinder</h1>
      <div className="plus-btn-container">
        <Link to="/add">
          <FontAwesomeIcon icon={faPlus} size="2x" className="plus-button"/>
        </Link>
      </div>
      <div className="home-container">
        <div className="card-titles-container">
          {cardTitles.map(title => {
            return (
              <div className="card-titles" key={title.id}>
                <Link to={`/details/${title.id}`} className="card-title">
                  <img src={title.fields.image} alt={title.fields.title} className="home-image" />
                  {/* <p>{title.fields.title}</p> */}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Home;