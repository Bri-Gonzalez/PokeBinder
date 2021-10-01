import { useState } from "react";
import Form from "../../components/Form/Form"
import { newCard } from "../../services/index";

function AddCard(props) {
  
  const [card, setCard] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [date, setDate] = useState("");
  const [obtained, setObtained] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [set, setSet] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      card !== "" &&
      pokemon !== "" &&
      date !== "" &&
      obtained !== "" &&
      type !== "" &&
      description !== "" &&
      image !== "" &&
      set !== ""
    ) {
      const fields = {
        card,
        pokemon,
        date,
        obtained,
        type,
        description,
        image,
        set,
      };
      await newCard(fields);
      props.closeModal();
      props.setToggle(prevToggle => !prevToggle);
    } else {
      alert("Please fill out all fields")
    }
  }


  return (
    <div>
      <Form
        card={card}
        setCard={setCard}
        pokemon={pokemon}
        setPokemon={setPokemon}
        date={date}
        setDate={setDate}
        obtained={obtained}
        setObtained={setObtained}
        type={type}
        setType={setType}
        description={description}
        setDescription={setDescription}
        image={image}
        setImage={setImage}
        set={set}
        setSet={setSet}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default AddCard;
