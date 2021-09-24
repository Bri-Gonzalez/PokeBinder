import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/Binder`;
const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  }
};

console.log(URL, config)

function SearchCard() {
  const [card, setCard] = useState([]);
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    async function fetchSearch() {
      const res = await axios.get(URL, config);
      setCard(res.data.records); 
    }
    fetchSearch();
  }, [toggle])

  function handleSubmit(e) {
    e.preventDefault();
    setCards([]);
    card.map((card, index)=> {
      if (card.fields.pokemon.toLowerCase() === search.toLowerCase()) {
        setCards((prevState) => [...prevState, card])
      } else {
        return null;
        } return index
      })
    setToggle((prevToggle) => !prevToggle);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setSearch(e.target.value)} />
        <button>Find Card!</button>
      </form>
      {cards.map(card => {
            return (
              <div key={card.id}>
                <Link to={`/details/${card.id}`} className="card-image">
                  <img src={card.fields.image} alt={card.fields.card} className="image" />
                </Link>
              </div>
            )
          })}
    </div>
  )
}

export default SearchCard;
