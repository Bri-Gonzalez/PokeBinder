import "./Home.css";
import AddCard from "../../components/AddCard/AddCard";
import Modal from "react-modal";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCardImages } from "../../services/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import BeatLoader from "react-spinners/BeatLoader";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fef5e1",
    borderRadius: "10px",
    border: "2px solid black",
  },
};

Modal.setAppElement('#root');

//-----------------------------------------------------//

function Home() {
  
  const [cardImages, setCardImages] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  //----------------AXIOS----------------//

  useEffect(() => {
    const getCardImages = async () => {
      setCardImages(await fetchCardImages());
      setLoading(false);
    };
    getCardImages();
  }, [toggle])

  //----------------PAGINATION----------------//
  
  const cardsPerPage = 12;
  const pagesVisited = pageNumber * cardsPerPage;
  const pageCount = Math.ceil(cardImages.length / cardsPerPage)

  const displayCards = cardImages
    .slice(pagesVisited, pagesVisited + cardsPerPage)
    .map(img => {
      return (
        <div className="card-images-container" key={img.id}>
          <Link to={`/details/${img.id}`} className="card-image">
            <img src={img.fields.image} alt={img.fields.card} className="image" />
          </Link>
        </div>
      );
    })

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  };

   //----------------MODAL----------------//

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  //----------------LOADING----------------//


  if (loading) {
    return <BeatLoader />;
  }

  //----------------RETURN----------------//

  return (
    <div>
      <h1 className="home-title">PokéBinder</h1>
      <div className="plus-btn-container">
        <FontAwesomeIcon
          onClick={openModal}
          icon={faPlus}
          size="sm"
          className="plus-button"
        />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <AddCard
            closeModal={closeModal}
            setToggle={setToggle}
          />
        </Modal>
      </div>
      <div className="home-container">
        <div className="card-container">
          {displayCards}
          <br /> 
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination-btns"}
          />
        </div>
      </div>
    </div>
  )
}

export default Home;