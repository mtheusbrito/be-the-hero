import React, { Component, useState } from "react";
import logoImg from "../../assets/logo.svg";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import { FiArrowLeft } from "react-icons/fi";
import api from "./../../services/api";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const history = useHistory();
  const ongId = localStorage.getItem("ongId");

  
  async function handleNewIncident(e) {
    e.preventDefault();
    const data = { title, description, value };

    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId
        }
      });

      history.push("/profile");
    } catch (err) {
      alert("Ocorreu um erro ao cadastrar o incidente, tente novamente!");
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Titulo do caso"
          />
          <textarea
            //028988090512
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Descricao"
          />
          <input
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Valor em reais"
          />
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
