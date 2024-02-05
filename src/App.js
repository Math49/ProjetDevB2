import { Routes, Route } from "react-router-dom";
import './App.scss';
import Header from "./view/header/header";
import DataDisplay from "./components/test";
import ListProjet from "./view/listProjet/listProjet";
import AddProjet from "./view/addProjet/addProjet";

function App() {


  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<ListProjet/>} />
        <Route path="/addprojet" element={<AddProjet/>} />
      </Routes>
    </div>
  );
}

export default App;


