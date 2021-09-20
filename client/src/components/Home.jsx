import './Home.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCardTitles } from "../services";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


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
      <div className="home-container">
        <div className="card-titles">
          {cardTitles.map(title => {
            return (
              <Link to={`/details/${title.id}`} key={title.id}>
                <h3>{title.fields.title}</h3>
              </Link>
            );
          })}
        </div>
        <Link to="/add" className="plus-button">
          {/* <button className="plus-button"> */}
            <FontAwesomeIcon icon={faPlus} />
          {/* </button> */}
        </Link>
      </div>
    </div>
  )
}

export default Home;