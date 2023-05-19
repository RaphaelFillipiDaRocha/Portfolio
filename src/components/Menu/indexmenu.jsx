import React from "react";
import style from "./Menu.module.css";
import { Link } from "react-router-dom";
import linkedin from "/src/img/linkedin-icon.png";
import git from "/src/img/github.png";
const Menu = () => {
  return (
    <>
      <div className={style.menu}>
        <div class="coluna col4">
          <h1 className={style.logo}>Raphael Fillipi</h1>
        </div>
        <a href="https://www.linkedin.com/in/raphael-fillipi-da-rocha-silva-05a1a725a/">
          <img src={linkedin} height="75px" width="75px"></img>
        </a>

        <a href="https://github.com/RaphaelFillipiDaRocha">
          <img src={git} height="65px" width="65px"></img>
        </a>
        <nav>
          <ul class="menu inline sem-marcador">
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <Link to="/projetos">projetos</Link>
            </li>
            <li>
              <Link to="/sobre">sobre</Link>
            </li>
            {/* <li>
              <Link to="/contato">contato</Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Menu;
