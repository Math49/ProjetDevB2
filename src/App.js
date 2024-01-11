import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>ça fonctionne !!</h1>
      <Routes>
        <Route path='/' element={""} />
      </Routes>
    </div>
  );
}

export default App;
