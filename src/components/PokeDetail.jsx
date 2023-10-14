import { PokeContext } from "../context/PokeContext";
import { useContext } from "react";
import PokeCards from "./PokeCards";
import battleoponent from "../assets/img/battleoponent.png";

const PokeDetail = () => {
  const { pokeData, backPokeImg, choosePokemon } = useContext(PokeContext);


  return (
    <div className="framed pages">
      <div className=" pokeContainer ">
        <div className="framed pokeBatttle detail">
          <div className="opponentPoke ">
            <img
              src={battleoponent}
              alt="opponent pokemon"
              className="frontPokemon"
            />
            <div className="downContainer">
              <div className="backContainer">
                <img
                  src={backPokeImg}
                  alt="backpokemon choosed"
                  className="backPokemon"
                />
              </div>

              <div className="rigthContainer">
                <p className="pokeName"> {choosePokemon} </p>

                <div className="sizeMe">
                  <div className="makeFlex">

                    <div className="life">

                      <div className="reduceFont">
                        {pokeData.stats[0].name}:
                      </div>

                      <div className="progress-bar-container">
                        <div className="progress-bar p100" id="progressBarG">

                        </div>
                      </div>
                    </div>

                    <div className="makeEnd">
                      <span>{pokeData.stats[0].base}</span>
                      <span>/</span>
                      <span>{pokeData.stats[0].base}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="framed">
          <PokeCards />
        </div>
      </div>

      <div>
        <h3 className="framed">Ataques</h3>
      <div className="framed pokeSelect">
        {pokeData.moves
          .filter((f) => f.level !== 0)
          .sort((s1, s2) => s1.level - s2.level)
          .map((move, i) => (
            <div key={i} className="framed pokeAttack">
              <span>{move.name}</span>
              <p>
                Aprendido en nivel:
                <span>{move.level}</span>
              </p>
            </div>
          ))}
      </div>

          </div>
    </div>
  );
};

export default PokeDetail;
