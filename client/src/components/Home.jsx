import './Home.css';
// import React from "react";
import Modal from "react-modal";
import AddCard from "./AddCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCardImages } from "../services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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

function Home() {
  const [cardImages, setCardImages] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
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
    const getCardImages = async () => {
      setCardImages(await fetchCardImages());
    };
    getCardImages();
  }, [toggle])

  return (
    <div>
      <h1 className="home-title">PokéBinder</h1>
      <div className="plus-btn-container">
        {/* <Link to="/add"> */}
        {/* <button onClick={openModal}> */}
            <FontAwesomeIcon onClick={openModal} icon={faPlus} size="lg" className="plus-button"/>
        {/* </button> */}
        {/* </Link> */}
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <AddCard
            closeModal={closeModal}
            setToggle={setToggle}
          />
          {/* <button onClick={closeModal}>Submit</button> */}
        </Modal>
        
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