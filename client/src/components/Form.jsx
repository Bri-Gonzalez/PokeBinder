

function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        value={props.title}
        placeholder="Card Title"
        onChange={(e) => props.setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={props.name}
        placeholder="Pokémon Name"
        onChange={(e) => props.setName(e.target.value)}
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
        <option value={props.obtained.gifted}>
          Gifted Card
        </option>
        <option value={props.obtained.pulled}>
          Pulled Card from a Pack
        </option>
        <option value={props.obtained.purchased}>
          Purchased Card
        </option>
      </select>
      <br />
      <input
        type="text"
        value={props.description}
        placeholder="Description"
        onChange={(e) => props.setDescription(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={props.image}
        placeholder="Paste Card Image Address"
        onChange={(e) => props.setImage(e.target.value)}
      />
      <br />
      <button>Add Card</button>
    </form>
  )
}

export default Form;
