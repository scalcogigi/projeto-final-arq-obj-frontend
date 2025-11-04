import React, { useState } from "react";
import FormField from "../FormField.jsx";

export default function MemberForm() {
  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    ocupacao: "",
    bandas: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      // Ajuste a URL para bater com a sua API em Java (Spring/H2)
      const response = await fetch("http://localhost:8080/api/membros", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form), // { nome, cpf, ocupacao, bandas }
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar membro");
      }

      // aqui você pode mostrar toast, navegar, etc.
      alert("Membro cadastrado com sucesso!");

      // limpa o formulário
      setForm({
        nome: "",
        cpf: "",
        ocupacao: "",
        bandas: "",
      });
    } catch (err) {
      console.error(err);
      alert("Não foi possível salvar o cadastro. Verifique a API.");
    }
  }

  return (
    <main className="panel">
      <form className="form" onSubmit={handleSubmit}>
        <FormField
          label="NOME"
          name="nome"
          value={form.nome}
          onChange={handleChange}
        />

        <FormField
          label="CPF"
          name="cpf"
          value={form.cpf}
          onChange={handleChange}
        />

        <FormField
          label="OCUPACAO"
          name="ocupacao"
          value={form.ocupacao}
          onChange={handleChange}
        />

        <FormField
          label="BANDAS"
          name="bandas"
          value={form.bandas}
          onChange={handleChange}
        />

        <div className="form__actions">
          <button type="submit" className="btn btn--primary">
            Salvar
          </button>
        </div>
      </form>
    </main>
  );
}
