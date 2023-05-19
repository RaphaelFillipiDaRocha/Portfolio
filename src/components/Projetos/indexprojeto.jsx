import React from "react";

const Projetos = () => {
  return (
    <div>
      <div class="fundoprj">
        <section>
          <div class="coluna col6">{/* <h4>Meus Projetos</h4> */}</div>
        </section>
      </div>
      <div class="projeto01">
        <div class="imagem">{/* <img src="src/img/print01.png" /> */}</div>

        <div class="desc01">
          <h3>Projeto desenvolvido no primeiro ano</h3>
          <p>
            Este projeto tinha como sugestão fazer um site utilizando HTML e Css
            com o tema livre. Optei por fazer um fórum para jogos e emuladores
            de consoles antigos.
          </p>
          <br></br>
          <p>Para acessar o projeto clique aqui:</p>
          <center>
            <a href="https://youtu.be/MXQxI1MbNNI">
              <button class="botaolink"> Clique</button>
            </a>
          </center>
        </div>
      </div>

      <div class="projeto02">
        <div class="imagem02"></div>

        <div class="desc02">
          <h3>Projeto desenvolvido no segundo ano</h3>
          <p>
            Este projeto realizado em grupo tinha como sugestão fazer um CRUD
            para gerenciamento de uma locadora utilizando a linguagem C#
          </p>
          <br></br>
          <center>
            <p>Para acessar o projeto clique aqui:</p>
            <a href="https://www.linkedin.com/posts/raphael-fillipi-da-rocha-silva-05a1a725a_projeto-csharp-fullstack-activity-7007200267112747008-rNG2?utm_source=share&utm_medium=member_desktop">
              <button class="botaolink"> Clique</button>
            </a>
          </center>
        </div>
      </div>
    </div>
  );
};
export default Projetos;
