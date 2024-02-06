import { Routes, Route, useParams, useNavigation, useNavigate, useLocation } from "react-router-dom";
import './App.scss';
import Header from "./view/header/header";
import ListProjet from "./view/listProjet/listProjet";

import AdminDashboard from "./view/dashboard/admin-dashboard";
import Login from "./view/login/login";
import {PrivateRoute} from './privateRoute.js';
import AddProjet from "./view/addProjet/addProjet";
import SingleProject from "./components/singleProject/singleProject";
import Register from "./view/register/register";

function App() {


  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<PrivateRoute />}>
          <Route index element={<ListProjet/>} />
          <Route path="/addprojet" element={<AddProjet/>} />
          <Route path='/projet/:projectId' element={<SingleProject/>} />
        </Route>
        <Route path='/admin-dashboard/*' element={<AdminDashboard/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;


