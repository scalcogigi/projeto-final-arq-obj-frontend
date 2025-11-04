import React, { useState } from "react";
import FormField from "../FormField.jsx";
import api from "../../services/api";
import Header from "../Header/header.jsx";
import "../../index.css";

export default function ShowForm() {
  const [form, setForm] = useState({
    nome: "",
    data: "",
    idLocal: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      nome: form.nome,
      data: form.data,
      idLocal: Number(form.idLocal),
    };

    try {
    await api.post("/show", payload);
    alert("Show cadastrado com sucesso!");
    setForm({ nome: "", data: "", idLocal: "" });
    } catch (err) {
      console.error("Erro ao cadastrar show:", err);
    }
  }
  
  return (
    <>
      <Header />
      <main className="main-below-header">
        <div className="form-container"><h1>Cadastro de Show</h1>

          <form onSubmit={handleSubmit}>
            <FormField
              label="NOME DO SHOW"
              name="nome"
              value={form.nome}
              onChange={handleChange}
            />

            <label>Data e Hora</label>
              <input
                type="datetime-local"
                name="data"
                value={form.data}
                onChange={handleChange}
              />

            <FormField
              label="ID DO LOCAL"
              name="idLocal"
              value={form.idLocal}
              onChange={handleChange}
            />
              <button type="submit">
                Salvar
              </button>
          </form>
        </div>
      </main>
    </>
  );
}