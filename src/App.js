import { Routes, Route } from "react-router-dom";
import './App.scss';
import Header from "./view/header/header";
import DataDisplay from "./components/test";

function App() {


  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={""} />
      </Routes>
    </div>
  );
}

export default App;


