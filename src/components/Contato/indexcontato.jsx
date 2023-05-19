import React from "react";
const Contato = () => {
  return (
    <div>
      <div class="linha">
        <section>
          <div class="sobremim">
            <h3>Localização</h3>
            <ul class="sem-padding sem-marcador">
              <li>Rua</li>
              <li>Bairro </li>
              <li>Santana de Parnaíba, SP</li>
            </ul>
            <h3>Contato direto</h3>
            <ul class="sem-padding sem-marcador">
              <li>
                Fone: <strong>(11) 96856-6336</strong>
              </li>
              <li>
                E-mail: <strong>rapharocha2666@gmail.com</strong>
              </li>
              <li>
                Instagram: <strong>rapheu_214</strong>
              </li>
            </ul>
          </div>
          <div class="coluna col7 contato">
            <h2>Envie uma mensagem</h2>
            <form action="">
              <label for="nome">Seu nome:</label>
              <input type="text" name="nome" id="nome" />
              <label>Seu e-mail:</label>
              <input type="text" name="email" id="email" />
              <label>Assunto:</label>
              <input type="text" name="assunto" id="assunto" />
              <label>Mensagem:</label>
              <textarea name="menasgem" id="mensagem"></textarea>
              <input
                type="submit"
                class="botao"
                name="enviar"
                value="Enviar mensagem &raquo;"
              />
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Contato;
