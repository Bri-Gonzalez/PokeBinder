import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Form from "./Form";
const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/Binder`;
const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  }
};

function EditCard(props) {
  
  const [card, setCard] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [date, setDate] = useState("");
  const [obtained, setObtained] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [set, setSet] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchToEdit = async () => {
      const res = await axios.get(`${URL}/${id}`, config);
      const { fields } = res.data;
      setCard(fields.card);
      setPokemon(fields.pokemon);
      setDate(fields.date);
      setObtained(fields.obtained);
      setType(fields.type);
      setDescription(fields.description);
      setImage(fields.image);
      setSet(fields.set);
    };
    fetchToEdit();
    // eslint-disable-next-line
  }, []);

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
      const res = await axios.put(`${URL}/${id}`, { fields }, config);
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

export default EditCard;
