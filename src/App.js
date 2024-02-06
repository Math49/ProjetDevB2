import { Routes, Route, useParams, useNavigation, useNavigate, useLocation } from "react-router-dom";
import './App.scss';
import Header from "./view/header/header";
import ListProjet from "./view/listProjet/listProjet";
import Login from "./view/login/login";
import {PrivateRoute} from './privateRoute.js';
import AddProjet from "./view/addProjet/addProjet";
import SingleProject from "./components/singleProject/singleProject";

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
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;


