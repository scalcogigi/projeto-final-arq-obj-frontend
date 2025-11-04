import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./Banda.css";

export default function Banda() {
  const [bandas, setBandas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBandas = async () => {
      try {
        const response = await api.get("/banda"); 
        setBandas(response.data);
      } catch (error) {
        console.error("Erro ao buscar bandas:", error);
        alert("Erro ao carregar bandas. Verifique se o backend está rodando.");
      }
    };

  fetchBandas();
  }, []);

  const handleGoToMembros = () => {
    navigate("/membros");
  };
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
              <p className="banda-membros" onClick={handleGoToMembros}
                style={{ cursor: "pointer", color: "#ff625fff" }}>Membros</p>
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
