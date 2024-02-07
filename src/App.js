import { Routes, Route } from "react-router-dom";
import './App.scss';
import Header from "./view/header/header";
import DataDisplay from "./components/test";
import ListProjet from "./view/listProjet/listProjet";
import NewProjet from "./view/newProjet/newProjet";

function App() {


  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<ListProjet/>} />
        <Route path="/newprojet" element={<NewProjet />} />
      </Routes>
    </div>
  );
}

export default App;


