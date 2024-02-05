import { Routes, Route, useParams, useNavigation, useNavigate, useLocation } from "react-router-dom";
import './App.scss';
import Header from "./view/header/header";
import DataDisplay from "./components/test";
import ListProjet from "./view/listProjet/listProjet";
import SingleProject from "./components/singleProject/singleProject";


const RenderTest = () => {
  const { projectId } = useParams();
  const location = useLocation();

  console.log(projectId);
  return (
    <div>
      <h1>{projectId}</h1>
        <div>{location.state.project.nom}</div>
        <div>{location.state.project.description}</div>  
      
    </div>
  )
}

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


