import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getPokemonSelect } from "../services/getPokemonSelect";
import { url } from "../services/url";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState({}); //guarda solo un pokemon
  // useParams trae el parametro name, recibe el dato ${selectedPoke} desde Pokemones.jsx
  const { name } = useParams();

  useEffect(() => {
    (async () => {
      const resp = await getPokemonSelect(url, name);
      const src = resp.sprites.other.dream_world.front_default;
      const stats = resp.stats.map((e) => ({
        hp: e.base_stat,
        name: e.stat.name,
      }));
      const types = resp.types.map((value) => {
        return (
          <span style={{ marginRight: "5px" }} key={value.type.name}>
            {value.type.name}
          </span>
        );
      });

      setPokemon({ name, src, stats, types });
    })();
  }, [name]);

  return (
    <div className="container">
      <div className="content">
        <div className="card">
          <NavLink to={'/pokemones'}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{width:'40px', height:'30px'}}
              >
              <path
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                />
            </svg>
          </span>
          </NavLink>
          <div className="row g-0">
            <div className="col-md-7">
              <div className="img-poke">
                <img src={pokemon.src} alt="Name pokemon" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="card-body">
                <h2>{pokemon.name}</h2>
                <div className="list">
                  {pokemon.stats?.map((stat, index) => (
                    <li key={index}>
                      {stat.name} : {stat.hp}
                    </li>
                  ))}
                  <p className="type-p">{pokemon.types}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
