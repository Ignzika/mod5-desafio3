import { PokeContext } from "../context/PokeContext";
import { useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const PokeCards = () => {
    const { pokeImg, pokeData, choosePokemon } = useContext(PokeContext);


    
  return (
    <div className="centerzero" >
      
      <p className="customText">{choosePokemon} </p>
      <span > N°  de Pokedex Kanto {pokeData.id} </span>
      
          <div className="pokeContainer">
              
          <div className="imgContainer" >
            <img src={pokeImg} alt={choosePokemon}  className="imgCustom"/>
          </div>
        <div className="framed">
          <span>Types:</span> 
          {pokeData.types.map((type, i) =>
          <p key={i}> {type.name} </p>
           )}
        </div>

      </div>
        
      <div className="framed ">
      {pokeData.stats.map((stat, i) =>
        <div key={i}>
            <p> {stat.name} :</p> <span> {stat.base} </span>
        </div>
            )}
        </div>

    </div>
  );
};

export default PokeCards;
