import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCardTitles } from "../services";

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
      <div>
        {cardTitles.map(title => {
          return (
            <Link to={`/details/${title.id}`} key={title.id}>
              <h3>{title.fields.title}</h3>
            </Link>
          );
        })}
      </div>
      <button className="plus-button">
        <img src="https://res.cloudinary.com/dfryxohde/image/upload/v1632149072/Plus-Silhouette-Transparent_ohdn5y.png" nav="add a pokemon card" />
      </button>
    </div>
  )
}

export default Home;
