import theme from "./theme";
import { useEffect, useState } from "react";
import { CardPokemons, DropDown, NavBar } from "./components";
import { ThemeProvider } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";
import {
  Container,
} from "@mui/material";
import "./App.css";
import { get } from "./services";

function App() {
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
    <ThemeProvider theme={theme}  >
          <GlobalStyles
        styles={{
          body: { backgroundColor: "skyblue" }
        }}
      />
      <Container  >
      <NavBar/>
      <DropDown type={type} handleChange={handleChange} types={types}/>
      <CardPokemons pokemons={pokemons}/>
        
      </Container>
    </ThemeProvider>
  );
}

export default App;
