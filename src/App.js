import { Routes, Route} from "react-router-dom";
import './App.scss';
import Header from "./view/header/header";
import ListProjet from "./view/listProjet/listProjet";

function App() {


  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<ListProjet/>} />
      </Routes>
    </div>
  );
}

export default App;


