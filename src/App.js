import { BrowserRouter,Routes,Route } from "react-router-dom";
import Libreria from "./pages/Libreria";
import Login from "./pages/Login";


function App() {
  return (
    <BrowserRouter>

      <Routes>

      <Route path="/login" element={<Login/>}/>

        <Route path="/libreria" element={<Libreria/>}/>
        
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
