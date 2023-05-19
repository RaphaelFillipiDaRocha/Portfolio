import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaPhp } from "react-icons/fa";
import { SiMysql, SiCsharp } from "react-icons/si";
import html from "/src/img/html.png";
import css from "/src/img/css.png";
import php from "/src/img/php.png";
import mysql from "/src/img/mysql.png";
import csharp from "/src/img/Csharp.png";
import react from "/src/img/react.png";

const Sobre = () => {
  return (
    // <div class="fundo">
    //   <div class="linha">
    //     <div class="flex">
    //       <section>
    //         <div class="col3">
    //           <h4>Sobre mim</h4>
    //           <p>Nome: Raphael Fillipi da Rocha</p>
    //           <p>Data de nascimento: 26/06/06</p>
    //           <p>Email: rapharocha2666@gmail.com</p>
    //           <p>Desenvolvedor Full Stack</p>
    //           <p>Buscando meu primeiro emprego</p>
    //           <p>Atualmente no 3º Ano do ensino médio</p>
    //           <p>Cursando o 3º ano de desenvolvimento de sistemas</p>
    //           <p>Unidade escolar: Etec Ermelinda Giannini Teixeira</p>
    //           <p>Santana de Parnaíba, SP</p>
    //         </div>

    //         {/* <div class="coluna col1">
    //         <img src="src/img/Eu2.jpg"></img>
    //       </div> */}

    //         <div class="competencias">
    //           <h4>Competências</h4>
    //           {/* <ul>
    //           <li>
    //             <FaHtml5 />
    //             Html
    //           </li>
    //           <li>
    //             <FaCss3Alt />
    //             Css
    //           </li>
    //           <li>
    //             <SiMysql />
    //             MySql
    //           </li>
    //           <li>
    //             <FaReact />
    //             React
    //           </li>
    //           <li>
    //             <FaReact />
    //             React-Native
    //           </li>
    //           <li>
    //             <SiCsharp />
    //             C#
    //           </li>
    //           <li>
    //             <FaPhp />
    //             PHP
    //           </li>
    //         </ul> */}

    //           <div class="icone">
    //             {" "}
    //             <img src="src/img/html.png" width="150px" height="150px" />
    //           </div>

    //           <div class="icone">
    //             {" "}
    //             <img src="src/img/css.png" width="150px" height="150px" />
    //             <div class="icone">
    //               {" "}
    //               <img src="src/img/react.png" width="150px" height="150px" />
    //             </div>
    //           </div>
    //         </div>
    //       </section>
    //     </div>
    //   </div>
    // </div>

    <div>
      <div class="fundoprj">
        <div class="sobremim">
          <h3>Sobre mim</h3>
          <p>Nome: Raphael Fillipi da Rocha</p>
          <p>Data de nascimento: 26/06/06</p>
          <p>Email: rapharocha2666@gmail.com</p>
          <p>Desenvolvedor Back-end</p>
          <p>Buscando meu primeiro emprego</p>
          <p>Atualmente no 3º Ano do ensino médio</p>
          <p>Cursando o 3º ano de desenvolvimento de sistemas</p>
          <p>Unidade escolar: Etec Ermelinda Giannini Teixeira</p>
          <p>Santana de Parnaíba, SP</p>

          <br></br>
          <p>Download do meu curriculo:</p>
          <center>
            <a href="src/curriculo/curriculo_raphael.pdf" download>
              <button class="botaolink"> Clique</button>
            </a>
          </center>
        </div>

        <div class="tecnologias">
          <div class="icones">
            <img src={html} width="150px" height="150px"></img>
          </div>

          <div class="icones">
            <img src={css} width="150px" height="150px"></img>
          </div>

          <div class="icones">
            <img src={mysql} width="150px" height="150px"></img>
          </div>

          <div class="icones">
            <img src={react} width="150px" height="150px"></img>
          </div>

          <div class="icones">
            <img src={csharp} width="150px" height="150px"></img>
          </div>

          <div class="icones">
            <img src={php} width="150px" height="150px"></img>
          </div>

          <div class="icones">
            <img src={react} width="150px" height="150px"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
