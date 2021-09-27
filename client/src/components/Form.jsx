import "./Form.css";
import React from "react";
import axios from 'axios';

function Form(props) {

  const uploadImage = async (e) => {
    const files = e.target.files
    const data = new FormData()
    data.append("file", files[0])
    data.append("upload_preset", "pokebinder")
    const res = await axios.post("https://api.cloudinary.com/v1_1/dfryxohde/image/upload", data);
    props.setImage(res.data.url);
  };

  return (
    <div className="form-container">
      <form onSubmit={props.handleSubmit}>
        <p className="form-title">Card Details</p>
        <input
          type="text"
          autoFocus
          value={props.card}
          placeholder="Card Name"
          onChange={(e) => props.setCard(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={props.pokemon}
          placeholder="Pokémon Name"
          onChange={(e) => props.setPokemon(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={props.set}
          placeholder="Card Set"
          onChange={(e) => props.setSet(e.target.value)}
        />
        <br />
        <select name="type" id="type" onChange={(e) => props.setType(e.target.value)}>
          <option>Select Element Type</option>
          <option value={props.type.grass}>
            Grass
          </option>
          <option value={props.type.fire}>
            Fire
          </option>
          <option value={props.type.water}>
            Water
          </option>
          <option value={props.type.lightning}>
            Lightning
          </option>
          <option value={props.type.psychic}>
            Psychic
          </option>
          <option value={props.type.fighting}>
            Fighting
          </option>
          <option value={props.type.dark}>
            Dark
          </option>
          <option value={props.type.metal}>
            Metal
          </option>
          <option value={props.type.dragon}>
            Dragon
          </option>
          <option value={props.type.fairy}>
            Fairy
          </option>
          <option value={props.type.normal}>
            Normal
          </option>
        </select>
        <br />
        <input
          type="text"
          value={props.date}
          placeholder="Date Collected"
          onChange={(e) => props.setDate(e.target.value)}
        />
        <br />
        <select name="obtained" id="obtained" onChange={(e) => props.setObtained(e.target.value)}>
          <option>
            How Card Was Aquired
          </option>
          <option value={props.obtained.pulled}>
            Pulled
          </option>
          <option value={props.obtained.traded}>
            Traded
          </option>
          <option value={props.obtained.gifted}>
            Gifted
          </option>
          <option value={props.obtained.purchased}>
            Purchased
          </option>
        </select>
        <br />
        <textarea
          type="text"
          value={props.description}
          placeholder="Description"
          onChange={(e) => props.setDescription(e.target.value)}>
        </textarea>
        <br />
        <div className="upload-container">
          <input
            type="file"
            name="file"
            className="file"
            placeholder="Upload Image"
            onChange={uploadImage}
          />
        </div>
        <br />
        <div className="btn-div">
          <button className="save-btn">Save</button>
        </div>
      </form>
    </div>
  )
}

export default Form;
