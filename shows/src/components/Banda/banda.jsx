import React from "react";
import "./Banda.css";

export default function Banda() {
  return (
    <div className="banda-container">
      <h1 className="banda-titulo">BANDA</h1>

      <div className="banda-box">
        <div className="banda-header">
          <h2>TourDB</h2>
        </div>

        <div className="banda-content">
          <div className="banda-info">
            <div className="banda-imagem"></div>

            <div className="banda-detalhes">
              <h3>Nome</h3>
              <p className="banda-membros">Membros</p>
            </div>
          </div>

          <div className="banda-descricao">
            <h4>Descrição</h4>
            <p>
              texto texto texto texto texto
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
