import { Routes, Route} from "react-router-dom";
import './App.scss';
import Header from "./view/header/header";
import ListProjet from "./view/listProjet/listProjet";
import Login from "./view/login/login";
import {PrivateRoute} from './privateRoute.js';

function App() {


  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<PrivateRoute />}>
          <Route index element={<ListProjet/>} />
        </Route>
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;


