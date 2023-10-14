import { NavLink } from "react-router-dom";

const PokeNavBar = () => {
  const setActiveClass = ({ isActive }) =>
    isActive ? "button framedCustom customButton" : "button ";

  return (
    <>
      <div className="framed compact options buttons customNavBar">
        <NavLink to="/" className={setActiveClass}>
          <h2> Start </h2>
        </NavLink>

        <NavLink to="/Pokedex" className={setActiveClass}>
          <h2>Pokedex</h2>
        </NavLink>

        <NavLink to="/PokeOthers" className={setActiveClass}>
          <h2>Otro </h2>
        </NavLink>

        <NavLink to="/PokeLinks" className={setActiveClass}>
          <h2> DesafioLatam</h2>
        </NavLink>
      </div>
    </>
  );
};

export default PokeNavBar;
