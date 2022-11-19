import { useEffect, useState } from "react";
import { CardPokemons, DropDown} from "../../components";
import { Container } from "@mui/material";
import { get } from "../../services";

export const Home = () => {
  const [type, setType] = useState("");
  const [types, setTypes] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  async function getTypes() {
    const types = await get("type");
    setTypes(types.results);
  }

  async function getPokemons(url) {
    const id = url.split("/");
    const pokemons = await get(`type/${id[id.length - 2]}`);
    setPokemons(pokemons.pokemon);
  }

  const handleChange = (event) => {
    console.log(event.target.value);
    setType(event.target.value);
    getPokemons(event.target.value);
  };

  useEffect(() => {
    getTypes();
  }, []);
  return (

      <Container>
        <DropDown type={type} handleChange={handleChange} types={types} />
        <CardPokemons pokemons={pokemons} />
      </Container>

  );
};

export default Home;
