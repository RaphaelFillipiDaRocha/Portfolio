import "./App.css";
import Home from "./components/Home/index";
import Contato from "./components/Contato/indexcontato";
import Menu from "./components/Menu/indexmenu";
import Footer from "./components/Footer/indexfooter";
import Sobre from "./components/Sobre/indexsobre";
import Projetos from "./components/Projetos/indexprojeto";
import { BrowserRouter as Navegador, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navegador>
        <Menu />
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Contato" element={<Contato />} />
          <Route exact path="/Sobre" element={<Sobre />} />
          <Route exact path="/Projetos" element={<Projetos />} />
        </Routes>
      </Navegador>
      <Footer />
    </>
  );
}

export default App;
