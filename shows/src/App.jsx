import React, {useState} from "react";
import './App.css'
import Login from './components/Login/Login.jsx'
import Banda from "./components/Banda/banda.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/banda" element={<Banda />} />
    </Routes>
  );
}

export default App;