import { Routes, Route} from "react-router-dom";
import './App.scss';
import Header from "./view/header/header";
import ListProjet from "./view/listProjet/listProjet";

import AdminDashboard from "./view/dashboard/admin-dashboard";
import Login from "./view/login/login";
import Register from "./view/register/register";

function App() {


  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<ListProjet/>} />
        <Route path='/admin-dashboard/*' element={<AdminDashboard/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;


