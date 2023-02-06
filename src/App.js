  import "./App.css";

  //react slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Route,Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Moviepage from "./pages/Moviepage";
import Playpage from "./pages/Playpage";
import axios from "axios";

 axios.defaults.baseURL = "https://api.themoviedb.org/3";
 axios.defaults.params={};
 axios.defaults.params["api_key"]="b58b3c490f2224e3efc9ed6392f7c823";
function App() {
  return <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/Movie/:id" element ={<Moviepage/>}/>
    <Route path="/plays" element={<Playpage/>}/>
    </Routes>
}

export default App;
