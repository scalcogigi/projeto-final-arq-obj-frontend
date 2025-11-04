import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

export default function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="header">
        <div className="header-content">
      <h1 className="header-logo" onClick={() => navigate("/homepage")}>
        TourDB
      </h1>

      <nav className="header-nav">
        <button onClick={() => navigate("/banda")}>Bandas</button>
        <button onClick={() => navigate("/membros")}>Membros</button>
        <button className="logout-btn" onClick={handleLogout}>
          Sair
        </button>
      </nav>
      </div>
    </header>
  );
}
