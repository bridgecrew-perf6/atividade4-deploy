import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Conta from "./pages/Conta/Conta";
import ContaPJ from "./pages/ContaPJ/ContaPJ";
import SobreNos from "./pages/SobreNos/SobreNos";



function App(){


  return(
      <BrowserRouter>
          
          <Header/>

          <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/conta" element={<Conta />}/>
                <Route exact path="/conta-pj" element={<ContaPJ />}/>
                <Route exact path="/sobre-nos" element={<SobreNos />}/>
            </Routes>
    
      </BrowserRouter>


  )

}

export default App;
