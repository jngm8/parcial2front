import { BrowserRouter,Routes,Route } from "react-router-dom";
import Libreria from "./pages/Libreria";
import LibreriaDetail from "./pages/LibroDetail";
import Login from "./pages/Login";


function App() {
  return (
    <BrowserRouter>

      <Routes>

      <Route path="/login" element={<Login/>}/>

        <Route path="/libreria" element={<Libreria/>}/>
        
        <Route path="/libreria/libro/:libroId" element={<LibreriaDetail/>}/>

      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
