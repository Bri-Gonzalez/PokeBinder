import './Home.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCardImages } from "../services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


function Home() {
  const [cardImages, setCardImages] = useState([]);

  useEffect(() => {
    const getCardImages = async () => {
      setCardImages(await fetchCardImages());
    };
    getCardImages();
  }, [])

  return (
    <div>
      <h1 className="home-title">PokéBinder</h1>
      <div className="plus-btn-container">
        <Link to="/add">
          <FontAwesomeIcon icon={faPlus} size="lg" className="plus-button"/>
        </Link>
      </div>
      <div className="home-container">
        <div className="card-container">
          {cardImages.map(img => {
            return (
              <div className="card-images-container" key={img.id}>
                <Link to={`/details/${img.id}`} className="card-image">
                  <img src={img.fields.image} alt={img.fields.title} className="image" />
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