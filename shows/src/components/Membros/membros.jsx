import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./Membros.css";

export default function Membros() {
  const [membros, setMembros] = useState([]);

  // mock:
  // useEffect(() => {
  //   const fetchMembros = async () => {
  //     try {
  //       const response = await api.get("/membro"); 
  //       setMembros(response.data);
  //     } catch (error) {
  //       console.error("Erro ao buscar membros:", error);
  //       alert("Não foi possível carregar os membros. Verifique se o backend está rodando.");
  //     }
  //   };

  //   fetchMembros();
  // }, []);

  useEffect(() => {
    const fetchMembros = async () => {
      const fakeData = [
        { id: 1, nome: "Giovanna", ocupacao: "Vocalista" },
        { id: 2, nome: "Felipe", ocupacao: "Baixista" },
        { id: 3, nome: "Carlos", ocupacao: "Teclado" },
      ];

      setMembros(fakeData);
    };

    fetchMembros();
  }, []);

  return (
    <div className="membros-container">
      <h1 className="membros-titulo">MEMBROS</h1>

      <div className="membros-box">
        <div className="membros-header">
          <h2>TourDB</h2>
        </div>

        <div className="membros-grid">
          {membros.map((membro) => (
            <div key={membro.id} className="membro-card">
              <div className="membro-foto"></div>
              <p className="membro-nome">{membro.nome}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
