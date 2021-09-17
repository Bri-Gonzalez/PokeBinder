// import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCardTitles } from "../services";

// const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
// const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
// const URL = `https://api.airtable.com/v0/${airtableBase}/Binder`;
// const config = {
//   headers: {
//     Authorization: `Bearer ${airtableKey}`,
//   }
// };

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
