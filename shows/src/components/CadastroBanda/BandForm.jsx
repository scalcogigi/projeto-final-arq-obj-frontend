import React, { useState } from "react";
import FormField from "../FormField.jsx";

export default function BandForm() {
  const [form, setForm] = useState({
    nome: "",
    genero: "",
    gravadora: "",
    membros: "", // texto livre (depois podemos transformar em lista)
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    // Exemplo de transformação: membros => array de strings
    const payload = {
      nome: form.nome,
      genero: form.genero,
      gravadora: form.gravadora,
      membros: form.membros
        .split(",")
        .map((m) => m.trim())
        .filter((m) => m.length > 0),
    };

    try {
      // Ajuste a URL para bater com sua API em Java
      const response = await fetch("http://localhost:8080/api/bandas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar banda");
      }

      alert("Banda cadastrada com sucesso!");

      // limpa o formulário
      setForm({
        nome: "",
        genero: "",
        gravadora: "",
        membros: "",
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
          label="GENERO"
          name="genero"
          value={form.genero}
          onChange={handleChange}
        />

        <FormField
          label="GRAVADORA"
          name="gravadora"
          value={form.gravadora}
          onChange={handleChange}
        />

        {/* Campo especial para MEMBROS: textarea grande */}
        <div className="form__field">
          <span className="form__label">MEMBROS</span>
          <textarea
            className="form__textarea"
            name="membros"
            value={form.membros}
            onChange={handleChange}
            rows={4}
            placeholder="Ex: João (voz), Maria (guitarra), Pedro (bateria)..."
          />
        </div>

        <div className="form__actions">
          <button type="submit" className="btn btn--primary">
            Salvar
          </button>
        </div>
      </form>
    </main>
  );
}
