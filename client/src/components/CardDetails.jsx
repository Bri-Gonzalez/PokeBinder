import { useState, useEffect } from "react";
import { useParams } from "react-router";
// import { Link } from "react-router-dom";
import { fetchCardDetails } from "../services";

function CardDetails() {
  const [card, setCard] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getCard = async () => {
      setCard(await fetchCardDetails(id));
    }
    getCard();
    // eslint-disable-next-line
  }, []);


  return (
    <div>
      <h1>{card?.fields?.title}</h1>
      <div className="card-container">
        <div className="card-image-container">
          <img src={card?.fields?.image} alt={card?.fields?.title} />
        </div>
        <div>
          <div className="name-type-container">
            <div>
              <h3>{card?.fields?.name}</h3>
            </div>
            <div>
              <p>{card?.fields?.type}</p>
            </div>
          </div>
          <p>{card?.fields?.date}</p>
          <p>{card?.fields?.obtained}</p>
          <p>{card?.fields?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default CardDetails;
