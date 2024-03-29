import { Routes, Route} from "react-router-dom";
import './App.scss';
import Header from "./view/header/header";
import ListProjet from "./view/listProjet/listProjet";
import AdminDashboard from "./view/dashboard/admin-dashboard";
import Login from "./view/login/login";
import {PrivateRoute} from './privateRoute.js';
import AddProjet from "./view/addProjet/addProjet";
import SingleProject from "./components/singleProject/singleProject";
import Register from "./view/register/register";
import EtudiantDashboard from "./view/dashboard/etudiant-dashboard";

function App() {
  console.log("App.js");


  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<PrivateRoute />}>
          <Route index element={<ListProjet/>} />
          <Route path="/addprojet" element={<AddProjet/>} />
          <Route path='/projet/:projectId' element={<SingleProject/>} />
          <Route path='/admin-dashboard/*' element={<AdminDashboard/>} />
          <Route path='/etudiant-dashboard/*' element={<EtudiantDashboard/>} />
          <Route path='/register' element={<Register/>} />
        </Route>
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;


