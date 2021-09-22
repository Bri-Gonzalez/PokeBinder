import './CardDetails.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchCardDetails } from "../services";
import { Link } from "react-router-dom";
import DeleteCard from './DeleteCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import BeatLoader from "react-spinners/BeatLoader";

function CardDetails() {
  const [card, setCard] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCard = async () => {
      setCard(await fetchCardDetails(id));
      setLoading(false);
    }
    getCard();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <BeatLoader />;
  }


  return (
    <div>
      <h1 className="details-title">{card?.fields?.title}</h1>
      <div className="pokemon-card-container">
        <div className="inline-containers">
          <div className="card-image-container">
            <img src={card?.fields?.image} alt={card?.fields?.title} />
          </div>
          <div className="right-details-container">
            <div className="name-type-container">
              <div className="name">
                <h3>{card?.fields?.name}</h3>
              </div>
              <div className="type">
                <p>{card?.fields?.type}</p>
              </div>
            </div>
            <div className="details">
              <p><b>Card Set:</b> {card?.fields?.set}</p>
              <p><b>Date Collected:</b> {card?.fields?.date}</p>
              <p><b>How card was aquired:</b> {card?.fields?.obtained}</p>
              <p><b>Description:</b><br />{card?.fields?.description}</p>
            </div>
            <div className="inline-btns">
              <Link to={`/details/${card.id}/edit`} >
                <FontAwesomeIcon icon={faEdit} size="lg" className="edit-button"/>
              </Link>
              <DeleteCard id={id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetails;
