
import { PokeContext } from "../context/PokeContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import battlescreen from "../assets/img/battlescreen.png";

const Pokedex = () => {
  const { pokeFromkantoRegion, pokeImg, choosePokemon, setChoosePokemon } =
    useContext(PokeContext);

  const navigate = useNavigate();

  return (
    <div className="framed">
      <div className="pokeContainer">
        <div className="framed">
          {" "}
          {!choosePokemon ? (
            <div className="pokeCard1">
              <img
                className="imgCustom"
                src={battlescreen}
                alt="battlescrren gba"
              />
              <div className="customText framed"> Selecciona tu pokemon </div>
            </div>
          ) : (
            <div className="pokeCard1">
              <div className="customText "> {choosePokemon} </div>
              <div className="imgContainer">
                <img src={pokeImg} alt={name} className="imgCustom" />
                </div>
                <div className="framed">
                  <p><span>flavor text</span></p> 
                </div>
            </div>
          )}
        </div>

        <div className="framed ">
          <p>Elige tu pokemon</p>
          <select
            value={choosePokemon}
            name="pkm"
            className="framed customSelect"
            id="selector"
            onChange={({ target }) => {
              setChoosePokemon(target.value);
            }}
          >
            <option value=""> Elije </option>
            {pokeFromkantoRegion.map(({ name }, i) => (
              <option key={i} value={name} className="customOption">
                {name}
              </option>
            ))}
          </select>
          <button
            className="framed buttons customButton primary"
            onClick={() => {
              navigate(`/pokedetail/${choosePokemon}`);
            }}
          >
            detalles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
