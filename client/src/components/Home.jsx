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
      <h1 class="home-title">PokéBinder</h1>
      <div>
        {cardTitles.map(title => {
          return (
            <Link to={`/details/${title.id}`} key={title.id}>
              <h3>{title.fields.title}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  )
}

export default Home;
