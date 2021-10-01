import axios from "axios";
import { useState } from "react";
import Form from "../../components/Form/Form"

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/Binder`;
const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  }
};

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
      // eslint-disable-next-line
      const res = await axios.post(URL, { fields }, config);
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
