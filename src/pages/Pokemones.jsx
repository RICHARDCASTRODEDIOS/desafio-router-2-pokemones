import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { url, limit } from "../services/url";
import { getPokemons } from "../services/getPokemons";

const Pokemones = () => {
  const [pokemones, setPokemones] = useState([]); //estado para almacenar todos los pokemones
  const [selectedPokemons, setSelectedPokemons] = useState(""); // estado para almacenar el pokemon seleccionado en <select>

  //useEffect para ejecutar la funcion que realiza la peticion a la api.
  useEffect(() => {

    (async () => {
      const { results } = await getPokemons(`${url}/${limit}`);
      setPokemones(results);
    })();

  }, []);

  const navigate = useNavigate();
  const irAPersonajes = () => {
    navigate(`/pokemones/${selectedPokemons}`);
  };

  return (
    <div className="container">
      <div className="content">
        <h1>Selecciona un pokemon</h1>
        <select
          className="form-select"
          value={selectedPokemons}
          onChange={(e) => setSelectedPokemons(e.target.value)}
        >
          <option value="">Pokemons</option>
          {pokemones.map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
        <button type="button" className="btn btn-dark" onClick={irAPersonajes}>
          Ver Deatalle
        </button>
      </div>
    </div>
  );
};

export default Pokemones;
