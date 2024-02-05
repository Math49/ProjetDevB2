import { Routes, Route, useParams, useNavigation, useNavigate, useLocation } from "react-router-dom";
import './App.scss';
import Header from "./view/header/header";
import DataDisplay from "./components/test";
import ListProjet from "./view/listProjet/listProjet";
import SingleProject from "./components/singleProject/singleProject";

function App() {


  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<ListProjet/>} />
        <Route path='/projet/:projectId' element={<SingleProject/>} />
      </Routes>
    </div>
  );
}

export default App;


