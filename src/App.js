import { Routes, Route, useParams, useNavigation, useNavigate, useLocation } from "react-router-dom";
import './App.scss';
import Header from "./view/header/header";
import DataDisplay from "./components/test";
import ListProjet from "./view/listProjet/listProjet";
import SingleProject from "./components/singleProject/singleProject";


// const RenderTest = () => {
//   const { projectId } = useParams();
//   const location = useLocation();

//   console.log(projectId);
//   return (
//     <div>
//       <h1>{projectId}</h1>
//       {location?.state?.project && (
//         <div>{location.state.project.name}</div>
//       )}
//       {location?.state?.gender && (
//         <div>{location.state.gender.toString()}</div>  
//       )}
      
//     </div>
//   )
// }
// const ProjectsScreen = () => {
//   const navigate = useNavigate();

//   const navigateToProject = (project) => {
//     navigate(`/projet/${project.id}`, { state: {project: project} })

//   }

//   return (
//     <div>
//       <button onClick={() => navigateToProject(project)}>Je veux voir mon projet</button>
//     </div>
//   )
// }

function App() {


  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<ListProjet/>} />
        {/* <Route path='/projets/' element={<ProjectsScreen/>} />
        <Route path='/projet/:projectId' element={<RenderTest/>} /> */}
        <Route path='/projets' element={<SingleProject/>} />
      </Routes>
    </div>
  );
}

export default App;


