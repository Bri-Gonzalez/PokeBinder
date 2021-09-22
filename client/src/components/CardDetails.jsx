import './CardDetails.css';
import React from "react";
import DeleteCard from './DeleteCard';
import Modal from "react-modal";
import EditCard from "./EditCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchCardDetails } from "../services";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import BeatLoader from "react-spinners/BeatLoader";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#197092",
    width: "350px",
    borderRadius: "10px",
  },
};

Modal.setAppElement('#root');

//-----------------------------------------------------//

function CardDetails() {
  const [card, setCard] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [toggle, setToggle] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  // }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    const getCard = async () => {
      setCard(await fetchCardDetails(id));
      setLoading(false);
    }
    getCard();
    // eslint-disable-next-line
  }, [toggle]);

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
                <p>{card?.fields?.name}</p>
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
              {/* <Link to={`/details/${card.id}/edit`} > */}
              {/* <button onClick={openModal} className="openmodal-edit-btn"> */}
                <FontAwesomeIcon onClick={openModal} icon={faEdit} size="lg" className="edit-button"/>
              {/* </button> */}
              {/* </Link> */}
              <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
              >
                <EditCard
                  closeModal={closeModal}
                  setToggle={setToggle}
                />
                {/* <button onClick={closeModal}>Submit</button> */}
              </Modal>


              <DeleteCard id={id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetails;
