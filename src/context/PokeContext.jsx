import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PokeContext = createContext();

const PokeProvider = ({ children }) => {
  // pokedex
  const [pokeFromkantoRegion, setPokeFromKantoRegion] = useState([]);
  // pokemon from select
  const [choosePokemon, setChoosePokemon] = useState("");
  //img Pokemon Choosed
  const [pokeImg, setPokeImg] = useState([]);
  const [backPokeImg, setBackPokeImg] = useState([]);
    //pokemon DATA desde api
  const [pokeData, setPokeData] = useState({
    id: "",
    moves: [],
    stats: [],
    types: [],
  });
  
    const urlBase = `https://pokeapi.co/api/v2/pokemon/`;
    const urlLimit = `?offset=0&limit=151/`;
    const urlSinglePokemon = `https://pokeapi.co/api/v2/pokemon/${choosePokemon}`;
    
    // console.log(pokeData);
    console.log(pokeData)
    
    const getSingleData = async () => {
      axios
      .get(urlSinglePokemon)
      .then((response) => {
        // console.log(response.data);
        // console.log(response.data.stats)
        setPokeImg(
          response.data.sprites.versions["generation-i"]["red-blue"].front_transparent);
        setBackPokeImg(
          response.data.sprites.versions["generation-i"]["red-blue"].back_transparent);
        
        // console.log(response.data.sprites.versions["generation-i"]["red-blue"].back_transparent)
      
        const pokeStats = response.data.stats.map((stat) => ({
          name: stat.stat.name,
          base: stat.base_stat,
        }));

        const pokeMoves = response.data.moves
          // .filter(move =>move.level != 0)
          .map((move) => ({
          name: move.move.name,
          level: move.version_group_details[0].level_learned_at,
          //ternario para diferenciar los nivel 0 del resto
        }));
     
        
        const pokeTypes = response.data.types.map((type) => ({
          name: type.type.name
        }));

        setPokeData({
          ...pokeData,
          id: response.data.id,
          moves: pokeMoves,
          stats: pokeStats,
          types: pokeTypes,
        });

      })
      .catch((error) => {
        // estuve leyendo que estos console.log eran necesarios para valdiar isRouteErrorResponse, o estan demas?
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log(error.message);
        }
      });
  };
  useEffect(() => {
    getSingleData();
  }, [choosePokemon]),
    1000;

  useEffect(() => {
    axios
      .get(urlBase + urlLimit)
      .then((response) => {
        setPokeFromKantoRegion(response.data.results);
        // console.log(response.data.results);
        // console.log(response.data.results[0].name);
        // console.log(response.data)
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log(error.message);
        }
      });
  }, []);

  // consulta...cual es la diferencia del useEffect en ambas? cambia algo o solo es a gusto del que escribe el que uno este dentro y el otro por fuera de la funcion?

  return (
    <PokeContext.Provider
      value={{
        pokeFromkantoRegion,
        choosePokemon,
        pokeImg,
        backPokeImg,
        pokeData,

        setPokeFromKantoRegion,
        setChoosePokemon,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};

export default PokeProvider;
